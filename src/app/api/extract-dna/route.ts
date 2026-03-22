import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: "Thiếu đường dẫn URL" }, { status: 400 });
        }

        // Fetch the website content
        // In a real production app, you might want to use a headless browser service or 
        // a more robust scraping library (like Cheerio) to handle SPA websites.
        // For simplicity, we just fetch the raw HTML.
        let htmlContent = "";
        try {
            const fetchRes = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
            if (fetchRes.ok) {
                const text = await fetchRes.text();
                // Extremely basic tag stripping to save tokens
                htmlContent = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                                  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
                                  .replace(/<[^>]+>/g, " ")
                                  .substring(0, 15000); // Limit to 15k chars roughly
            } else {
                htmlContent = `Không truy cập được nội dung từ URL này. HTTP Status: ${fetchRes.status}`;
            }
        } catch (e: any) {
            console.error("Fetch URL Error:", e);
            htmlContent = "Lỗi mạng hoặc bị block bởi CORS/Cloudflare.";
        }

        const prompt = `Bạn là một AI phân tích thương hiệu (Brand DNA Analyzer) chuyên nghiệp.
Nhiệm vụ của bạn là đọc nội dung (hoặc suy luận từ manh mối) của đường link sau: ${url}
Nội dung HTML thô trang web: 
"""
${htmlContent}
"""

Dựa vào nội dung trên (hoặc suy đoán dựa trên domain/tên miền), hãy trích xuất các thông tin sau để trả về ĐÚNG VÀ CHỈ MỘT cục dữ liệu JSON theo cấu trúc (Tuyệt đối không có markdown \`\`\`json hay text thừa):
{
    "companyName": "Tên doanh nghiệp hoặc cá nhân",
    "profession": "Lĩnh vực kinh doanh hoặc nghệ nghiệp (ngắn gọn)",
    "jobTitle": "Chức vụ (nếu cá nhân) hoặc Dịch vụ chính",
    "brandColor1": "Mã màu Hex code chủ đạo 1 (#xxxxxx) (Dự đoán nếu không thấy)",
    "brandColor2": "Mã màu Hex code phụ 2 (#xxxxxx) (Dự đoán nếu không đồng bộ)",
    "address": "Địa chỉ hoặc Quốc gia/Khu vực hoạt động",
    "phone": "Số điện thoại liên hệ tìm được (hoặc để rỗng)",
    "websiteUrl": "${url}"
}
Hãy linh hoạt suy đoán mã màu mượt mà (VD: #3b82f6) phù hợp với lĩnh vực nếu không tìm thấy chính xác trong source code. Luôn trả về form chuẩn xác.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.2,
            }
        });

        const textResponse = response.text || "";
        
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
        
        // Return fallback DNA so the UI doesn't crash on error
        return NextResponse.json({ 
            dna: {
                companyName: "Dự án Hiện đại (Fallback)",
                profession: "Tương tác số",
                jobTitle: "Nhà phát triển",
                brandColor1: "#000000",
                brandColor2: "#ffffff",
                address: "Không có thông tin",
                phone: "",
                websiteUrl: ""
            } 
        });
    }
}
