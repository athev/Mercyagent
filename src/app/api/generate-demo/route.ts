import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
        return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }
    const ai = new GoogleGenAI({ apiKey });
    try {
        const { brief, modules, variant = 1, styleOverride } = await req.json();

        if (!brief || !modules) {
            return NextResponse.json({ error: "Thiếu dữ liệu đầu vào" }, { status: 400 });
        }

        const modulesText = modules.map((m: any) => `- ${m.title}`).join("\n");
        const designStyle = styleOverride || "modern dark mode UI, glassmorphism, futuristic premium";

        const imagePrompt = `Act as an Expert UX/UI Designer with 10 years of experience.
Your task is to generate a highly professional, Dribbble-quality UI design mockup.

Client's Brief & Industry Context:
"${brief}"
Features needed:
${modulesText}

Design Variant Request (Base Idea):
"${designStyle}"

INSTRUCTIONS FOR YOU:
1. Analyze the client's industry, target audience, and business goals from the brief.
2. Adapt the "Design Variant Request" so it absolutely FITS the standard user behavior, visual aesthetics, and usability expectations of THAT SPECIFIC INDUSTRY.
3. DO NOT output a design that is visually inappropriate for the industry (e.g., no neon cyberpunk for a corporate law firm, no overly playful shapes for a serious banking app, unless explicitly requested).
4. Make sure this variant (#${variant}) looks completely distinct from other variants, providing a unique alternative within the boundaries of what is appropriate.

Output Requirements:
- High resolution, ultra-realistic crisp UI.
- Show a complete interface with relevant dummy content (images, text) that matches the industry.
- Include typical UI components (navigation, hero, cards, buttons) tailored to the specific brief.`;

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-image-preview",
            contents: [{ role: "user", parts: [{ text: imagePrompt }] }],
            config: {
                responseModalities: ["TEXT", "IMAGE"],
            },
        });

        const parts = response.candidates?.[0]?.content?.parts || [];

        for (const part of parts) {
            if (part.inlineData) {
                const mimeType = part.inlineData.mimeType || "image/png";
                const base64Data = part.inlineData.data;
                const imageUrl = `data:${mimeType};base64,${base64Data}`;
                return NextResponse.json({ imageUrl, promptDetails: designStyle });
            }
        }

        return NextResponse.json({ error: "AI không trả về ảnh" }, { status: 500 });
    } catch (error: any) {
        console.error("Lỗi trong route generate-demo:", error);
        return NextResponse.json(
            { error: "Thất bại khi tạo UI Demo", details: error.message },
            { status: 500 }
        );
    }
}
