import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
    if (!apiKey) {
        return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }
    const ai = new GoogleGenAI({ apiKey });
    try {
        const { brief } = await req.json();

        if (!brief) {
            return NextResponse.json({ error: "Yêu cầu cung cấp nội dung" }, { status: 400 });
        }

        const prompt = `
Bạn là chuyên gia Solution Architect & BA tại Vibework.
Phân tích yêu cầu sau và chia thành Module:

"""
${brief}
"""

BƯỚC 1: Xác định loại sản phẩm:
- "landing_page" nếu chỉ cần 1 trang quảng bá/bán hàng đơn giản
- "website" nếu cần nhiều trang, blog, dashboard, quản trị
- "app" nếu cần ứng dụng di động

BƯỚC 2: Chia module theo quy tắc:
- Nếu landing_page: TỔNG chi phí ≤ 7.000.000đ (đơn giá 500k/h → tối đa 14 giờ)
- Nếu website: TỔNG chi phí ≤ 15.000.000đ (tối đa 30 giờ)
- Nếu app: KHÔNG báo giá, chỉ liệt kê tính năng chi tiết (estimatedHours = 0)

Luôn bao gồm: BA, Thiết kế UX/UI, Content
Timeline tối đa 15 ngày.

TRẢ VỀ JSON OBJECT (không phải array):
{
  "productType": "landing_page" | "website" | "app",
  "modules": [
    {
      "id": "module-1",
      "title": "Tên Module",
      "description": "Mô tả ngắn.",
      "category": "BA/Design/Frontend/Backend/Marketing",
      "estimatedHours": 5,
      "durationDays": 3
    }
  ]
}

CHÚ Ý: Chỉ JSON hợp lệ, không markdown. Tiếng Việt 100%.
`;

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        const text = result.text || "";
        const jsonString = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(jsonString);

        return NextResponse.json({
            requirements: parsed.modules || parsed,
            productType: parsed.productType || "website",
        });
    } catch (error: any) {
        console.error("Lỗi trong route analyze-brief:", error);
        return NextResponse.json(
            { error: "Thất bại khi phân tích ý tưởng", details: error.message },
            { status: 500 }
        );
    }
}
