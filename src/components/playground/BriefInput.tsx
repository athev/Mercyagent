"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronRight, ChevronLeft, Palette, X, Sparkles, Layers, Zap } from "lucide-react";

interface Option { id: string; text: string; }
interface ClarificationQuestion { id: string; question: string; options: Option[]; }

const BRAND_STYLES = [
    { id: "minimal", label: "Tối giản", emoji: "✨", color: "from-gray-500 to-gray-300" },
    { id: "luxury", label: "Sang trọng", emoji: "👑", color: "from-amber-500 to-yellow-300" },
    { id: "playful", label: "Trẻ trung", emoji: "🎨", color: "from-pink-500 to-orange-300" },
    { id: "corporate", label: "Chuyên nghiệp", emoji: "💼", color: "from-blue-500 to-cyan-300" },
];

const COLOR_PALETTES = [
    { id: "blue", label: "Ocean Blue", colors: ["#1e40af", "#3b82f6", "#93c5fd"] },
    { id: "green", label: "Nature Green", colors: ["#166534", "#22c55e", "#86efac"] },
    { id: "purple", label: "Royal Purple", colors: ["#6b21a8", "#a855f7", "#d8b4fe"] },
    { id: "orange", label: "Sunset Orange", colors: ["#c2410c", "#f97316", "#fdba74"] },
    { id: "dark", label: "Midnight Dark", colors: ["#0f172a", "#1e293b", "#475569"] },
    { id: "custom", label: "Tùy chỉnh", colors: ["#ec4899", "#8b5cf6", "#06b6d4"] },
];

interface BriefInputProps {
    onComplete: (data: {
        brief: string;
        answers: Record<string, string>;
        brandStyle: string;
        colorPalette: string;
        logoFile: File | null;
    }) => void;
}

export default function BriefInput({ onComplete }: BriefInputProps) {
    const [brief, setBrief] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showWizard, setShowWizard] = useState(false);
    const [wizardStep, setWizardStep] = useState(1);
    const [questions, setQuestions] = useState<ClarificationQuestion[]>([]);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [selectedStyle, setSelectedStyle] = useState("");
    const [selectedPalette, setSelectedPalette] = useState("");
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmitPrompt = async () => {
        if (!brief.trim()) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/clarify-brief", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ brief }),
            });
            if (!res.ok) throw new Error("API Error");
            const data = await res.json();
            if (data.questions?.length > 0) {
                setQuestions(data.questions);
                setShowWizard(true);
                setWizardStep(1);
            } else {
                onComplete({ brief, answers: {}, brandStyle: "", colorPalette: "", logoFile: null });
            }
        } catch { alert("Lỗi khi tạo câu hỏi. Vui lòng thử lại."); }
        finally { setIsLoading(false); }
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setLogoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleFinishWizard = () => {
        setShowWizard(false);
        onComplete({ brief, answers, brandStyle: selectedStyle, colorPalette: selectedPalette, logoFile });
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 relative z-10">
            {/* Main Input */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg"><Sparkles className="w-5 h-5 text-blue-400" /></div>
                    <span className="text-sm font-medium text-gray-400">Bắt đầu bằng mô tả ý tưởng của bạn</span>
                </div>
                <textarea
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder={"Ví dụ: Tôi cần một landing page để bán sản phẩm dịch vụ ANORI, sản phẩm thuần chay..."}
                    className="w-full h-36 bg-black/30 border border-white/5 rounded-xl p-4 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 resize-none transition-all text-[15px] leading-relaxed"
                    disabled={isLoading || showWizard}
                />
                <div className="mt-4 flex justify-end">
                    <button onClick={handleSubmitPrompt} disabled={!brief.trim() || isLoading || showWizard}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-semibold transition-all disabled:opacity-40 flex items-center gap-2 shadow-lg shadow-blue-500/20">
                        {isLoading ? (
                            <><span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" /> Đang phân tích...</>
                        ) : (<><Zap className="w-4 h-4" /> Bắt đầu</>)}
                    </button>
                </div>
            </motion.div>

            {/* ===== WIZARD POPUP ===== */}
            <AnimatePresence>
                {showWizard && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-gradient-to-br from-[#12141f] to-[#0a0c14] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden relative flex flex-col shadow-2xl shadow-blue-500/10">

                            {/* Close */}
                            <button onClick={() => setShowWizard(false)} className="absolute top-5 right-5 z-30 text-gray-500 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full p-1.5">
                                <X className="w-4 h-4" />
                            </button>

                            {/* Header with progress */}
                            <div className="p-6 pb-4 shrink-0">
                                <div className="flex items-center gap-3 mb-4">
                                    {[1, 2].map(s => (
                                        <div key={s} className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                                                wizardStep >= s ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "bg-white/5 text-gray-500"
                                            }`}>{s}</div>
                                            {s < 2 && <div className={`w-12 h-0.5 rounded-full transition-all ${wizardStep > s ? "bg-blue-500" : "bg-white/10"}`} />}
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {wizardStep === 1 ? "Về dự án của bạn" : "Bản sắc thương hiệu"}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {wizardStep === 1 ? "Giúp AI hiểu rõ hơn để thiết kế chuẩn nhất." : "Phong cách, màu sắc và logo thương hiệu."}
                                </p>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-y-auto px-6 pb-4">
                                <AnimatePresence mode="wait">
                                    {wizardStep === 1 && (
                                        <motion.div key="w1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-4">
                                            {questions.map((q, idx) => (
                                                <div key={q.id} className="rounded-xl p-4 bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all">
                                                    <h4 className="font-medium text-gray-200 mb-3 text-[15px]">{idx + 1}. {q.question}</h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {q.options.map(opt => (
                                                            <button key={opt.id} onClick={() => setAnswers(p => ({ ...p, [q.id]: opt.text }))}
                                                                className={`text-left p-3 rounded-lg border text-sm transition-all ${
                                                                    answers[q.id] === opt.text
                                                                        ? "border-blue-500/60 bg-blue-500/10 text-blue-200 shadow-sm shadow-blue-500/10"
                                                                        : "border-white/5 hover:border-white/15 hover:bg-white/[0.03] text-gray-400"
                                                                }`}>
                                                                {opt.text}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {wizardStep === 2 && (
                                        <motion.div key="w2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">
                                            {/* Style */}
                                            <div>
                                                <h4 className="font-medium text-gray-200 mb-3 flex items-center gap-2 text-[15px]">
                                                    <Palette className="w-4 h-4 text-blue-400" /> Phong cách thiết kế
                                                </h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {BRAND_STYLES.map(s => (
                                                        <button key={s.id} onClick={() => setSelectedStyle(s.id)}
                                                            className={`relative text-left p-4 rounded-xl border transition-all overflow-hidden ${
                                                                selectedStyle === s.id ? "border-blue-500/60 bg-blue-500/10 shadow-md shadow-blue-500/10" : "border-white/5 hover:border-white/15"
                                                            }`}>
                                                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${s.color} opacity-10 rounded-bl-full`} />
                                                            <span className="text-2xl block mb-1">{s.emoji}</span>
                                                            <p className="text-white font-semibold text-sm">{s.label}</p>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Colors */}
                                            <div>
                                                <h4 className="font-medium text-gray-200 mb-3 flex items-center gap-2 text-[15px]">
                                                    <Layers className="w-4 h-4 text-blue-400" /> Bảng màu
                                                </h4>
                                                <div className="grid grid-cols-3 gap-3">
                                                    {COLOR_PALETTES.map(p => (
                                                        <button key={p.id} onClick={() => setSelectedPalette(p.id)}
                                                            className={`p-3 rounded-xl border transition-all text-center ${
                                                                selectedPalette === p.id ? "border-blue-500/60 bg-blue-500/10 shadow-sm shadow-blue-500/10" : "border-white/5 hover:border-white/15"
                                                            }`}>
                                                            <div className="flex justify-center gap-1.5 mb-2">
                                                                {p.colors.map((c, i) => (
                                                                    <div key={i} className="w-7 h-7 rounded-full shadow-inner" style={{ backgroundColor: c }} />
                                                                ))}
                                                            </div>
                                                            <p className="text-xs text-gray-400 font-medium">{p.label}</p>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Logo */}
                                            <div>
                                                <h4 className="font-medium text-gray-200 mb-3 flex items-center gap-2 text-[15px]">
                                                    <Upload className="w-4 h-4 text-blue-400" /> Logo thương hiệu
                                                    <span className="text-xs text-gray-500 font-normal">(tuỳ chọn)</span>
                                                </h4>
                                                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                                <button onClick={() => fileInputRef.current?.click()}
                                                    className="w-full border border-dashed border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
                                                    {logoPreview ? (
                                                        <img src={logoPreview} alt="Logo" className="w-14 h-14 object-contain rounded-lg" />
                                                    ) : (
                                                        <Upload className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition" />
                                                    )}
                                                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition">{logoFile ? logoFile.name : "Bấm để tải logo"}</p>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            <div className="p-6 pt-4 border-t border-white/5 flex justify-between shrink-0">
                                {wizardStep > 1 ? (
                                    <button onClick={() => setWizardStep(1)} className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition">
                                        <ChevronLeft className="w-4 h-4" /> Quay lại
                                    </button>
                                ) : <div />}

                                {wizardStep === 1 ? (
                                    <button onClick={() => setWizardStep(2)}
                                        className="flex items-center gap-1 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20">
                                        Tiếp theo <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button onClick={handleFinishWizard}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20">
                                        <Sparkles className="w-4 h-4" /> Thiết kế ngay
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
