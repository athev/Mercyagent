import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    return NextResponse.json({ error: "Chưa cấu hình API Key" }, { status: 500 });
  }
  const ai = new GoogleGenAI({ apiKey });

  try {
    const { prompt, analysisData, answers } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
    }

    // Phase 1: Generate clarification questions with multiple-choice options
    if (!answers || answers.length === 0) {
      const questionsPrompt = `
Bạn là BA cấp cao của Vibework, chuyên phân tích yêu cầu dự án.

NHIỆM VỤ: Phân tích YÊU CẦU thực sự của khách hàng (dù họ không biết kỹ thuật) và tạo ra CÂU HỎI TRẮC NGHIỆM SIÊU DỄ để thu thập đủ brief cho đội kỹ thuật nhận việc báo giá ngay — KHÔNG cần hỏi lại.

YÊU CẦU BAN ĐẦU:
"""
${prompt}
"""

PHÂN TÍCH AI ĐÃ CÓ:
${JSON.stringify(analysisData, null, 2)}

LƯU Ý QUAN TRỌNG VỀ ĐÍNH KÈM:
Nếu trong yêu cầu có phần "[Tài liệu đính kèm/Tham khảo]", hãy chú ý các URL (Maps, TikTok, LinkedIn...) hoặc Tên file. 
Hãy đặt những câu hỏi giúp kết nối yêu cầu mới với các tài liệu tham khảo này (ví dụ: "Bạn muốn giao diện giống link TikTok đính kèm không?").

NGUYÊN TẮC TẠO CÂU HỎI:
1. Câu hỏi phải dùng ngôn ngữ KHÁCH HÀNG (không dùng thuật ngữ kỹ thuật).
2. Mỗi câu hỏi có 3-5 options gợi ý (dựa trên phân tích intent + common sense).
3. Options phải thực tế, phổ biến, dễ lựa chọn ngay lập tức.
4. Luôn có "Khác / Tôi cần tư vấn thêm" là option cuối.
5. Tạo tối đa 5 câu, ưu tiên những gì ảnh hưởng lớn đến timeline & giá.
6. Câu hỏi nên "dẫn dắt" khách đến câu trả lời hợp lý nhất.
7. QUAN TRỌNG: Quyết định type cho mỗi câu:
   - type "single": câu hỏi có 1 đáp án đúng
   - type "multiple": câu hỏi chọn nhiều

CÁC CHỦ ĐỀ CẦN PHỦ: mục đích kinh doanh, quy mô / timeline, ngân sách ước tính, phong cách / giao diện, tích hợp hệ thống.

Trả về JSON:
{
  "questions": [
    {
      "id": 1,
      "question": "Câu hỏi bằng ngôn ngữ khách hàng dễ hiểu?",
      "context": "Giải thích ngắn TẠI SAO cần thông tin này (1 dòng)",
      "type": "single",
      "options": [
        { "label": "Đáp án A dễ hiểu, có thể kèm ví dụ", "value": "option_a" },
        { "label": "Đáp án B", "value": "option_b" },
        { "label": "Đáp án C", "value": "option_c" },
        { "label": "Tôi chưa chắc / Cần tư vấn thêm", "value": "unsure" }
      ],
      "allowCustom": true
    }
  ]
}

Chỉ JSON thuần, không markdown.
`;

      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: questionsPrompt }] }],
      });

      const text = result.text || "";
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      const parsed = JSON.parse(text.substring(start, end + 1));

      return NextResponse.json({ phase: "questions", ...parsed });
    }

    // Phase 2: Summarize into final brief
    const summaryPrompt = `
Bạn là BA cấp cao của Vibework. Dựa trên yêu cầu ban đầu và câu trả lời làm rõ từ khách hàng, hãy tạo ra một BRIEF DỰ ÁN CHUYÊN NGHIỆP - đủ chi tiết để Freelancer nhận việc và báo giá NGAY mà không cần hỏi thêm.

YÊU CẦU BAN ĐẦU:
"""
${prompt}
"""

CÂU TRẢ LỜI LÀM RÕ TỪ KHÁCH HÀNG:
${answers.map((a: any) => `- ${a.question}: ${a.answer}`).join("\n")}

QUY TẮC BẮT BUỘC:
- TUYỆT ĐỐI không dùng thẻ HTML (<br/>, <p>, <b>, ...) ở bất kỳ đâu
- TUYỆT ĐỐI không dùng Markdown (**bold**, ###heading, ...)
- Chỉ dùng ký tự xuống dòng \\n trong string nếu cần phân cách
- Mọi giá trị string phải là Plain Text thuần khiết
- Mảng (array) phải là JSON array hợp lệ

Trả về JSON có cấu trúc CHÍNH XÁC sau:
{
  "projectTitle": "Tên dự án ngắn gọn, thu hút",
  "summary": "2-3 câu tóm tắt mục tiêu kinh doanh và điều cần đạt được",
  "techStack": "Liệt kê công nghệ/platform: Frontend, Backend, DB, Hosting (cách nhau bằng dấu phẩy)",
  "targetAudience": "Ai là người dùng cuối của sản phẩm",
  "budget": "Dự toán dạng khoảng, ví dụ: 15,000,000 - 25,000,000 VND",
  "notes": "Ghi chú về link/file tham khảo nếu có, hoặc lưu ý quan trọng khác",
  "checklist": [
    {
      "phase": "Tên giai đoạn, ví dụ: Nghiên cứu & Lên kế hoạch",
      "tasks": ["Task cụ thể 1", "Task cụ thể 2", "Task cụ thể 3"]
    },
    {
      "phase": "Tên giai đoạn thứ 2",
      "tasks": ["Task A", "Task B"]
    }
  ],
  "timeline": [
    {
      "week": "Tuần 1",
      "title": "Tiêu đề giai đoạn",
      "tasks": ["Việc cần làm 1", "Việc cần làm 2"]
    },
    {
      "week": "Tuần 2",
      "title": "Tiêu đề giai đoạn",
      "tasks": ["Việc cần làm A", "Việc cần làm B"]
    }
  ],
  "budgetBreakdown": [
    {"item": "Hạng mục 1 (ví dụ: Thiết kế UI/UX)", "cost": "X,000,000 VND"},
    {"item": "Hạng mục 2 (ví dụ: Phát triển Frontend)", "cost": "Y,000,000 VND"}
  ],
  "deliverables": ["Sản phẩm bàn giao 1", "Sản phẩm bàn giao 2", "Tài liệu hướng dẫn"],
  "successCriteria": ["Tiêu chí đo lường 1", "Tiêu chí đo lường 2"]
}

Chỉ JSON thuần, không có bất kỳ ký tự nào khác bên ngoài object JSON.
`;

    const result2 = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: summaryPrompt }] }],
    });

    const text2 = result2.text || "";
    const start2 = text2.indexOf("{");
    const end2 = text2.lastIndexOf("}");
    
    if (start2 === -1 || end2 === -1) {
      throw new Error("Không thể trích xuất JSON Brief từ phản hồi AI.");
    }
    
    const briefString = text2.substring(start2, end2 + 1);
    const brief = JSON.parse(briefString);

    return NextResponse.json({ phase: "brief", brief });

  } catch (error: any) {
    console.error("Lỗi route clarify-job:", error);
    return NextResponse.json({ error: "Thất bại", details: error.message }, { status: 500 });
  }
}
