import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: Request) {
    try {
        const { url, text } = await req.json();

        if (!url && !text) {
            return NextResponse.json({ error: "Thiếu dữ liệu đầu vào (URL hoặc Text)" }, { status: 400 });
        }

        let brandContext = "";
        
        if (url) {
            try {
                const fetchRes = await fetch(url.startsWith("http") ? url : `https://${url}`, { 
                    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
                });
                if (fetchRes.ok) {
                    const rawText = await fetchRes.text();
                    brandContext = rawText
                        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
                        .replace(/<[^>]+>/g, " ")
                        .substring(0, 15000);
                } else {
                    brandContext = `Không thể truy quét nội dung từ URL: ${url}`;
                }
            } catch (e: any) {
                brandContext = `Lỗi truy cập URL: ${e.message}`;
            }
        } else {
            brandContext = text;
        }

        const prompt = `Bạn là một chuyên gia phân tích thương hiệu cao cấp (Chief Brand Officer AI).
Nhiệm vụ của bạn là giải mã "DNA linh hồn" của thương hiệu dựa trên dữ liệu sau:
Dữ liệu đầu vào:
"""
${brandContext}
"""

Hãy trích xuất và suy luận bộ thông tin DNA đầy đủ. Kết quả trả về PHẢI là một JSON object chuẩn, không có markdown hay giải thích thêm.
Cấu trúc JSON yêu cầu:
{
    "companyName": "Tên thương hiệu",
    "profession": "Lĩnh vực/Ngành nghề chính",
    "brandColors": ["#hex1", "#hex2", "#hex3"], 
    "logoUrl": "", 
    "toneOfVoice": "Mô tả ngắn về giọng văn (VD: Sang trọng, tối giản, năng động...)",
    "competitors": ["Đối thủ 1", "Đối thủ 2"], 
    "niches": ["Ngách 1", "Ngách 2"], 
    "extraGuidelines": "Mô tả phong cách thiết kế phù hợp (VD: Bauhaus, Cinematic, Tech-minimalist...)",
    "address": "Địa chỉ hoặc khu vực",
    "phone": "SĐT liên hệ"
}

Lưu ý: Nếu dữ liệu đầu vào thiếu, hãy dựa vào tên thương hiệu hoặc lĩnh vực để SUY LUẬN một bộ DNA mượt mà nhất.`;

        // Use the pattern found in generate-demo route
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash", // Using 2.0 as requested/inferred
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });
        
        const candidate = response.candidates?.[0];
        const textResponse = (candidate?.content?.parts?.[0] as any)?.text || "{}";
        
        // Clean JSON formatting from Gemini (it often returns ```json ... ```)
        let jsonStr = textResponse.trim();
        const startIdx = jsonStr.indexOf("{");
        const endIdx = jsonStr.lastIndexOf("}");
        if (startIdx !== -1 && endIdx !== -1) {
            jsonStr = jsonStr.substring(startIdx, endIdx + 1);
        }

        const parsedData = JSON.parse(jsonStr);

        return NextResponse.json({ dna: parsedData });
    } catch (error: any) {
        console.error("Lỗi khi phân tích DNA:", error);
        return NextResponse.json({ 
            dna: {
                companyName: "Dự án mới",
                profession: "Digital Space",
                brandColors: ["#000000", "#3b82f6", "#ffffff"],
                toneOfVoice: "Hiện đại",
                competitors: [],
                niches: [],
                extraGuidelines: "Clean & Modern",
                address: "",
                phone: ""
            } 
        });
    }
}
