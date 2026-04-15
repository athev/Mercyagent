import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const VIBEWORK_STANDARD = `
TIÊU CHUẨN ĐỀ CƯƠNG VIBEWORK ACADEMY — 7 SECTIONS BẮT BUỘC:
1. THÔNG TIN CHUNG: tên khóa học (VI + EN), mã khóa, thời lượng (số buổi), hình thức (Trực tiếp/Trực tuyến/Hybrid), địa điểm, ngôn ngữ giảng dạy
2. GIỚI THIỆU CHƯƠNG TRÌNH: bối cảnh thị trường, BẮT BUỘC có ít nhất 1 số liệu uy tín (Forbes/McKinsey/WEF/Statista...) chứng minh nhu cầu
3. LỢI ÍCH KHI THAM GIA: tối thiểu 3 lợi ích cụ thể, đo lường được (không chung chung)
4. ĐỐI TƯỢNG HỌC VIÊN: phân loại rõ chức danh/ngành nghề phù hợp (ít nhất 3 nhóm)
5. KHUNG CHƯƠNG TRÌNH CHI TIẾT: từng buổi/module phải có: tiêu đề + nội dung trọng tâm + learning outcome (kết quả đầu ra cụ thể)
6. ĐỘI NGŨ CHUYÊN GIA: tên đầy đủ, chức danh, kinh nghiệm tối thiểu 2 dòng
7. PHƯƠNG PHÁP & ĐÁNH GIÁ: hình thức giảng dạy, bài tập thực hành, tiêu chí cấp chứng chỉ
`;

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) return NextResponse.json({ error: "API Key not configured" }, { status: 500 });

  const ai = new GoogleGenAI({ apiKey });

  try {
    const { rawInput, existingData } = await req.json();

    if (!rawInput || rawInput.trim().length < 10) {
      return NextResponse.json({ error: "Vui lòng cung cấp nội dung để phân tích" }, { status: 400 });
    }

    const prompt = `
Bạn là chuyên gia thiết kế chương trình đào tạo chuẩn quốc tế, làm việc cho Vibework Academy.

${VIBEWORK_STANDARD}

Tài liệu giảng viên cung cấp:
"""
${rawInput}
"""

${existingData ? `Dữ liệu đã có:\n${JSON.stringify(existingData, null, 2)}` : ""}

Nhiệm vụ:
1. Phân tích tài liệu và điền sẵn các sections có thể tự động vào JSON output
2. Với sections chưa đủ thông tin, để giá trị là null
3. Những sections nào còn thiếu, hãy list trong array "missingQuestions". Yêu cầu quan trọng: các missing questions này phải được biên soạn dưới dạng Câu Hỏi Trắc Nghiệm (multiple choice) để giảm tải cho giảng viên, kèm AI suggestion (nếu đoán được).

Trả về JSON hợp lệ theo format sau (Tiếng Việt, không thêm markdown):
{
  "section1": { ... },
  "section2": { ... },
  "section3": { ... },
  "section4": { ... },
  "section5": { ... },
  "section6": { ... },
  "section7": { ... },
  "missingQuestions": [
    {
      "sectionKey": "section4", 
      "question": "Những nhóm đối tượng nào là phù hợp nhất cho khóa học này?",
      "options": ["Quản lý cấp trung & C-Level", "Sinh viên mới ra trường", "Nhân viên kỹ thuật IT", "Chuyên viên Marketing"],
      "aiSuggestion": "Quản lý cấp trung & C-Level"
    }
  ]
}

CHÚ Ý: Chỉ JSON thuần, không markdown, không comment.
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = result.text || "";
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start === -1 || end === -1) throw new Error("Không thể trích xuất dữ liệu từ AI.");
    const parsed = JSON.parse(text.substring(start, end + 1));

    return NextResponse.json({ result: parsed });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("AI assist error:", message);
    return NextResponse.json({ error: "Lỗi phân tích AI", details: message }, { status: 500 });
  }
}
