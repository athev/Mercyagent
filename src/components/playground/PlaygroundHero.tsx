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

interface PlaygroundHeroProps {
    onComplete: (data: {
        brief: string;
        answers: Record<string, string>;
        brandStyle: string;
        colorPalette: string;
        logoFile: File | null;
    }) => void;
    isAnalyzing?: boolean;
}

export default function PlaygroundHero({ onComplete, isAnalyzing = false }: PlaygroundHeroProps) {
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
    const [cat, setCat] = useState("Thiết kế Web");

    const handleSubmitPrompt = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!brief.trim()) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/clarify-brief", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ brief }),
            });
            const data = await res.json();
            if (!res.ok) {
                const errMessage = data.details ? `${data.error} (${data.details})` : data.error;
                throw new Error(errMessage || "Lỗi máy chủ rùi!");
            }
            if (data.questions?.length > 0) {
                setQuestions(data.questions);
                setShowWizard(true);
                setWizardStep(1);
            } else {
                onComplete({ brief, answers: {}, brandStyle: "", colorPalette: "", logoFile: null });
            }
        } catch (error: any) {
            alert(`Lỗi khi phân tích: ${error.message || "Vui lòng thử lại."}`);
        } finally {
            setIsLoading(false);
        }
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
        <>
            <style>{`
                .dotted-bg {
                    background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px);
                    background-size: 24px 24px;
                }
                .glow-orb-1 {
                    background: radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 60%);
                }
                .glow-orb-2 {
                    background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%);
                }
                .glass-box {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: 0 30px 60px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
                }
                .glass-box:focus-within {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(6,182,212,0.4);
                    box-shadow: 0 30px 60px -10px rgba(0,0,0,0.8), 0 0 40px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.15);
                }
            `}</style>
            
            <section className="relative w-full min-h-[90vh] -mt-24 bg-[#050505] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
                {/* Background Canvas: Dotted Grid + Glowing Orbs */}
                <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
                <div className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] glow-orb-1 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] glow-orb-2 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center">
                    
                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white text-center tracking-tight leading-[0.95] mb-4"
                        style={{ fontFamily: "'Clash Display', sans-serif" }}
                    >
                        Vibework Brief <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#06B6D4]">
                            Playground
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#888] text-lg md:text-xl text-center mb-12 max-w-2xl font-medium"
                    >
                        Mô tả ý tưởng của bạn, để AI của chúng tôi phân tích các nhu cầu thực tế và thiết kế lộ trình triển khai chi tiết.
                    </motion.p>

                    {/* Stitch-style Prompt Box */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-3xl glass-box rounded-3xl p-3 flex flex-col transition-all duration-300 group relative"
                    >
                        {isAnalyzing && (
                            <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center">
                                <span className="w-8 h-8 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin mb-3" />
                                <span className="text-cyan-400 font-medium">Đang phân tích dự án...</span>
                            </div>
                        )}
                        <textarea
                            value={brief}
                            onChange={(e) => setBrief(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSubmitPrompt();
                                }
                            }}
                            placeholder="Ví dụ: Tôi cần một landing page để bán sản phẩm dịch vụ ANORI, sản phẩm thuần chay..."
                            className="w-full bg-transparent text-white placeholder-white/30 text-lg md:text-xl p-4 md:p-5 resize-none focus:outline-none min-h-[140px] leading-relaxed"
                            disabled={isLoading || showWizard || isAnalyzing}
                        />
                        
                        {/* Action Bar Bottom */}
                        <div className="flex items-center justify-between px-2 pb-2 pt-4 border-t border-white/5 mt-auto">
                            
                            {/* Left tools */}
                            <div className="flex items-center gap-1.5 md:gap-3">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors tooltip" title="Tải đính kèm">
                                    <Upload className="w-5 h-5" />
                                </button>
                                
                                {/* Category pill */}
                                <div className="hidden sm:flex items-center bg-[#111] border border-white/10 rounded-full p-1 max-w-[250px] overflow-hidden">
                                    {["Thiết kế Web", "App", "Branding"].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setCat(c)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                                                cat === c ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white/80"
                                            }`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right tools */}
                            <div className="flex items-center gap-2">
                                <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-xs font-semibold">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                                    AI Assist
                                </button>
                                
                                {/* Submit button */}
                                <button
                                    onClick={handleSubmitPrompt}
                                    disabled={!brief.trim() || isLoading || showWizard || isAnalyzing}
                                    className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                                        brief.trim() && !isLoading && !isAnalyzing 
                                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                                            : "bg-white/10 text-white/30 cursor-not-allowed"
                                    }`}
                                >
                                    {isLoading ? (
                                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== WIZARD POPUP ===== */}
            <AnimatePresence>
                {showWizard && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden relative flex flex-col shadow-2xl shadow-cyan-500/10">

                            {/* Close */}
                            <button onClick={() => setShowWizard(false)} className="absolute top-5 right-5 z-30 text-gray-500 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full p-1.5">
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header with progress */}
                            <div className="p-6 pb-4 shrink-0 border-b border-white/[0.06] bg-black">
                                <div className="flex items-center gap-3 mb-4">
                                    {[1, 2].map(s => (
                                        <div key={s} className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                                                wizardStep >= s ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30" : "bg-white/5 text-gray-500"
                                            }`}>{s}</div>
                                            {s < 2 && <div className={`w-12 h-0.5 rounded-full transition-all ${wizardStep > s ? "bg-cyan-500" : "bg-white/10"}`} />}
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                    {wizardStep === 1 ? "Làm rõ yêu cầu dự án" : "Định hình thương hiệu"}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {wizardStep === 1 ? "Giúp AI hiểu rõ hơn để thiết kế chuẩn nhất." : "Phong cách, màu sắc và logo thương hiệu."}
                                </p>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-y-auto px-6 py-6">
                                <AnimatePresence mode="wait">
                                    {wizardStep === 1 && (
                                        <motion.div key="w1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                            {questions.map((q, idx) => (
                                                <div key={q.id} className="rounded-xl p-5 bg-[#111] border border-white/[0.04]">
                                                    <h4 className="font-medium text-white mb-3 text-[15px]">{idx + 1}. {q.question}</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {q.options.map(opt => (
                                                            <button key={opt.id} onClick={() => setAnswers(p => ({ ...p, [q.id]: opt.text }))}
                                                                className={`text-left p-3.5 rounded-xl border text-sm transition-all ${
                                                                    answers[q.id] === opt.text
                                                                        ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-sm"
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
                                        <motion.div key="w2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                            {/* Style */}
                                            <div>
                                                <h4 className="font-medium text-white mb-3 flex items-center gap-2 text-[15px]">
                                                    <Palette className="w-5 h-5 text-cyan-400" /> Phong cách thiết kế
                                                </h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {BRAND_STYLES.map(s => (
                                                        <button key={s.id} onClick={() => setSelectedStyle(s.id)}
                                                            className={`relative text-left p-4 rounded-xl border transition-all overflow-hidden ${
                                                                selectedStyle === s.id ? "border-cyan-500/60 bg-cyan-500/10" : "border-white/5 bg-[#111] hover:border-white/15"
                                                            }`}>
                                                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${s.color} opacity-10 rounded-bl-full`} />
                                                            <span className="text-2xl block mb-2">{s.emoji}</span>
                                                            <p className="text-white font-semibold text-sm">{s.label}</p>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Colors */}
                                            <div>
                                                <h4 className="font-medium text-white mb-3 flex items-center gap-2 text-[15px]">
                                                    <Layers className="w-5 h-5 text-cyan-400" /> Bảng màu
                                                </h4>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                    {COLOR_PALETTES.map(p => (
                                                        <button key={p.id} onClick={() => setSelectedPalette(p.id)}
                                                            className={`p-3 rounded-xl border transition-all text-center ${
                                                                selectedPalette === p.id ? "border-cyan-500/60 bg-cyan-500/10" : "border-white/5 bg-[#111] hover:border-white/15"
                                                            }`}>
                                                            <div className="flex justify-center gap-1.5 mb-2">
                                                                {p.colors.map((c, i) => (
                                                                    <div key={i} className="w-6 h-6 rounded-full shadow-inner border border-white/10" style={{ backgroundColor: c }} />
                                                                ))}
                                                            </div>
                                                            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{p.label}</p>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Logo */}
                                            <div>
                                                <h4 className="font-medium text-white mb-3 flex items-center gap-2 text-[15px]">
                                                    <Upload className="w-5 h-5 text-cyan-400" /> Logo thương hiệu
                                                    <span className="text-xs text-gray-500 font-normal">(tuỳ chọn)</span>
                                                </h4>
                                                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                                <button onClick={() => fileInputRef.current?.click()}
                                                    className="w-full border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 bg-[#111] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group">
                                                    {logoPreview ? (
                                                        <img src={logoPreview} alt="Logo" className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2" />
                                                    ) : (
                                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                                            <Upload className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition" />
                                                        </div>
                                                    )}
                                                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition">{logoFile ? logoFile.name : "Tải lên tệp ảnh logo của bạn"}</p>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            <div className="p-5 border-t border-white/[0.06] bg-black flex justify-between shrink-0">
                                {wizardStep > 1 ? (
                                    <button onClick={() => setWizardStep(1)} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold transition px-4 py-2 rounded-lg hover:bg-white/5">
                                        <ChevronLeft className="w-4 h-4" /> Quay lại
                                    </button>
                                ) : <div />}

                                {wizardStep === 1 ? (
                                    <button onClick={() => setWizardStep(2)}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-gray-200 text-black rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        Tiếp theo <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button onClick={handleFinishWizard}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                        <Sparkles className="w-4 h-4" /> Hoàn tất & Phân tích
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
