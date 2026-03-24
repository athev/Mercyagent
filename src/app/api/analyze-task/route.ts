import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    return NextResponse.json({ error: "Chưa cấu hình API Key" }, { status: 500 });
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Thiếu dữ liệu prompt" }, { status: 400 });
    }

    const aiPrompt = `
Bạn là một AI Business Analyst và System Architect cấp cao tại Vibework. Nhiệm vụ của bạn là phân tích yêu cầu từ người dùng và bẻ nhỏ thành các công việc cụ thể (tasks).

YÊU CẦU TỪ NGƯỜI DÙNG:
"""
${prompt}
"""

LƯU Ý QUAN TRỌNG:
1. Nếu trong yêu cầu có phần "[Tài liệu đính kèm/Tham khảo]", hãy phân tích kỹ các Link (ví dụ: Google Maps, Facebook, LinkedIn, TikTok) hoặc Tên file (ví dụ: Profile công ty, Logo, Tài liệu giới thiệu) để hiểu bối cảnh.
2. Dựa trên các thông tin tham khảo này, hãy đề xuất một lộ trình (steps) và thời gian (time) sát với thực tế nhất. Ví dụ: Nếu có Profile công ty, hãy tập trung vào branding; nếu có Google Maps, hãy tập trung vào location/SEO local.
3. Đề xuất timeline (thời gian) dựa trên độ phức tạp mà các tài liệu này gợi ý.

HƯỚNG DẪN TRẢ VỀ JSON:
Bạn phải mô phỏng lại một bản tóm tắt phân tích công việc và danh sách các task nhỏ cần làm. Quan trọng nhất, bạn phải chia task thành 2 nhóm:
1. "steps": Các task bắt buộc phải có để hoàn thành dự án này.
2. "optionalSteps": Các task mở rộng/phụ trợ mang tính chất tuỳ chọn (ví dụ: Marketing, SEO, Bảo trì thêm) mà người dùng có thể cần đến nhưng không bắt buộc.

CẤU TRÚC JSON PHẢI TUÂN THỦ:
{
  "requirement": "Tóm tắt ngắn gọn lại yêu cầu của người dùng (1 câu)",
  "analysis": "Phân loại nhanh đặc điểm dự án (ví dụ: App B2C · Thời hạn: 30 ngày · Độ khó: Trung bình)",
  "requiresMarketplace": false, // Trả về true nếu yêu cầu này quá độc lạ, hoặc quá khó đến mức các công ty chuẩn khó làm trọn gói, nên đăng lên Chợ Freelancer
  "steps": [
    {
      "id": 1,
      "task": "Tên công việc (ví dụ: Lên kế hoạch tính năng)",
      "time": "2 ngày",
      "agent": "BA AI / Expert"
    }
  ],
  "optionalSteps": [
    {
      "id": 101,
      "task": "Tên công việc addon (ví dụ: Audit SEO tổng thể)",
      "time": "1 ngày",
      "agent": "SEO AI"
    }
  ],
  "suppliers": [
    // Nếu requiresMarketplace = true, để mảng rỗng []
    // Nếu false, trả về 2-3 nhà cung cấp giả lập hoặc phù hợp nhất.
    {
      "name": "VN Creative Agency",
      "rating": 4.9,
      "price": "18 triệu",
      "tag": "Đề xuất",
      "tagColor": "#0D9488"
    }
  ]
}

LƯU Ý: Chỉ trả về MỘT chuỗi JSON thuần tuý (bắt đầu bằng { và kết thúc bằng }), tuyệt đối KHÔNG format Markdown hay giải thích gì thêm.
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: aiPrompt }] }],
    });

    const text = result.text || "";
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');
    
    if (startIndex === -1 || endIndex === -1) {
      throw new Error("Không thể trích xuất dữ liệu kế hoạch từ AI.");
    }

    const jsonString = text.substring(startIndex, endIndex + 1);
    const parsed = JSON.parse(jsonString);

    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("Lỗi route analyze-task:", error);
    return NextResponse.json(
      { error: "Thất bại khi phân tích ý tưởng", details: error.message },
      { status: 500 }
    );
  }
}
