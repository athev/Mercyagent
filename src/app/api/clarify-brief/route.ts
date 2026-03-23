import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
        return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }
    const ai = new GoogleGenAI({ apiKey });
    try {
        const { brief } = await req.json();

        if (!brief) {
            return NextResponse.json({ error: "Brief is required" }, { status: 400 });
        }

        const prompt = `
Bạn là chuyên gia tư vấn thiết kế & phát triển sản phẩm số tại Vibework.
Khách hàng vừa gửi ý tưởng:
"${brief}"

Tạo ĐÚNG 4 câu hỏi trắc nghiệm NGẮN GỌN để lấy thông tin phục vụ cho mục đích THIẾT KẾ và PHÁT TRIỂN website/app.

Các câu hỏi TẬP TRUNG vào:
1. Loại sản phẩm muốn xây dựng (Landing page / Website nhiều trang / Web App / Mobile App)
2. Đối tượng khách hàng mục tiêu và ngành nghề
3. Các tính năng chính mong muốn (giỏ hàng, đặt lịch, dashboard, blog, chat…)
4. Mức độ ưu tiên (ra sản phẩm nhanh vs hoàn thiện chi tiết)

Mỗi câu có 3-4 phương án. Trả về JSON array:
[{"id":"q1","question":"...","options":[{"id":"o1","text":"..."}]}]

Chỉ JSON, không markdown, 100% tiếng Việt, ngắn gọn thân thiện.
`;

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });
        
        const text = result.text || "";
        const startIndex = text.indexOf('[');
        const endIndex = text.lastIndexOf(']');
        if (startIndex === -1 || endIndex === -1) {
            throw new Error("Không thể trích xuất cấu trúc câu hỏi từ AI.");
        }
        const jsonString = text.substring(startIndex, endIndex + 1);
        const questions = JSON.parse(jsonString);

        return NextResponse.json({ questions });
    } catch (error: any) {
        console.error("Error in clarify-brief route:", error);
        return NextResponse.json(
            { error: "Thất bại khi tạo câu hỏi", details: error.message },
            { status: 500 }
        );
    }
}
