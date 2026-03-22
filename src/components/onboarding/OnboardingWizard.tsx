"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Link as LinkIcon, Sparkles, User, Palette, MapPin, Briefcase, CheckCircle2, Factory, Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

// Temporary mock DNA type
type DNAData = {
    companyName: string;
    profession: string;
    jobTitle: string;
    brandColor1: string;
    brandColor2: string;
    address: string;
    phone: string;
    websiteUrl: string;
};

export default function OnboardingWizard() {
    const searchParams = useSearchParams();
    const { data: session } = useSession();
    
    const [step, setStep] = useState(1);
    const [url, setUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    
    // Default empty state
    const [dna, setDna] = useState<DNAData>({
        companyName: "",
        profession: "",
        jobTitle: "",
        brandColor1: "#3b82f6",
        brandColor2: "#06b6d4",
        address: "",
        phone: "",
        websiteUrl: ""
    });

    // Check for step in URL (after Google redirection)
    useEffect(() => {
        const stepParam = searchParams.get("step");
        if (stepParam) {
            setStep(parseInt(stepParam));
        } else if (session) {
            // If already logged in, skip step 1
            setStep(2);
        }
    }, [searchParams, session]);

    const handleNext = () => setStep(prev => prev + 1);

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/onboarding?step=2" });
    };

    const handleUrlSubmit = async () => {
        if (!url) return;
        setIsAnalyzing(true);
        setStep(3);

        try {
            // Trigger API to extract DNA
            const res = await fetch("/api/extract-dna", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            
            if (data.dna) {
                setDna(data.dna);
            }
        } catch (error) {
            console.error("Failed to extract DNA", error);
        } finally {
            setIsAnalyzing(false);
            setStep(4);
        }
    };

    const handleSubmitDNA = async () => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/save-dna", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dna })
            });

            if (res.ok) {
                // After save, redirect to playground
                window.location.href = "/playground";
            } else {
                alert("Có lỗi xảy ra khi lưu DNA. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("Failed to save DNA", error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
                <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: "25%" }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <User className="w-8 h-8 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Xin chào! 👋</h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">
                            Để Vibework có thể tư vấn và thiết kế chính xác theo đúng tệp khách hàng của bạn, hãy bắt đầu bằng việc đăng nhập.
                        </p>
                        <button 
                            onClick={handleGoogleLogin}
                            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Tiếp tục với Google
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                            <LinkIcon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Một đường link, thay ngàn lời nói 📎</h2>
                        <p className="text-gray-400 mb-8">
                            Dán link Website, Fanpage, hoặc LinkedIn profile của công ty bạn vào đây. AI của chúng tôi sẽ tự động đọc và thu thập "DNA Thương Hiệu". Bạn không cần phải điền form thủ công!
                        </p>
                        <div className="relative mb-6">
                            <input 
                                type="url" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://..."
                                className="w-full bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                            />
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <button onClick={() => setStep(4)} className="text-gray-500 hover:text-white transition text-sm">
                                Tôi không có link (Bỏ qua)
                            </button>
                            <button 
                                onClick={handleUrlSubmit}
                                disabled={!url}
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 disabled:opacity-50 transition"
                            >
                                Phân tích Link <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-10"
                    >
                        <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                            <Sparkles className="w-10 h-10 text-cyan-400 animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Đang xử lý DNA...</h2>
                        <p className="text-gray-400">AI đang đọc nội dung từ {url} để trích xuất màu sắc, thông điệp và quy mô...</p>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">DNA Thương Hiệu</h2>
                                <p className="text-sm text-gray-400">Kiểm tra thông tin AI đã tìm thấy và chỉnh sửa nếu cần thiết.</p>
                            </div>
                        </div>

                        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 flex items-center gap-1"><Factory className="w-3 h-3"/> Tên Doanh nghiệp / Dự án</label>
                                    <input 
                                        type="text" value={dna.companyName} onChange={e => setDna({...dna, companyName: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-blue-400"
                                        placeholder="VD: Cty Cổ phần Vibework..."
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 flex items-center gap-1"><Briefcase className="w-3 h-3"/> Lĩnh vực / Chức danh</label>
                                    <input 
                                        type="text" value={dna.profession} onChange={e => setDna({...dna, profession: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-blue-400"
                                        placeholder="VD: Bán lẻ, Giám đốc Marketing..."
                                    />
                                </div>
                           </div>

                           <div className="space-y-1">
                                <label className="text-xs text-gray-500 flex items-center gap-1"><Palette className="w-3 h-3"/> Màu sắc thương hiệu (Brand Colors)</label>
                                <div className="flex gap-4 items-center">
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                                        <input type="color" value={dna.brandColor1} onChange={e => setDna({...dna, brandColor1: e.target.value})} className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0" />
                                        <span className="text-xs font-mono">{dna.brandColor1}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                                        <input type="color" value={dna.brandColor2} onChange={e => setDna({...dna, brandColor2: e.target.value})} className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0" />
                                        <span className="text-xs font-mono">{dna.brandColor2}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 italic hidden sm:inline">Click vào màu để đổi</span>
                                </div>
                           </div>

                           <div className="space-y-1">
                                <label className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3"/> Địa chỉ văn phòng / Store</label>
                                <input 
                                    type="text" value={dna.address} onChange={e => setDna({...dna, address: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-blue-400"
                                />
                           </div>
                           
                           <div className="space-y-1">
                                <label className="text-xs text-gray-500 flex items-center gap-1"> Số điện thoại liên hệ (Sales)</label>
                                <input 
                                    type="text" value={dna.phone} onChange={e => setDna({...dna, phone: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-blue-400"
                                />
                           </div>
                        </div>

                        <div className="mt-8">
                            <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg mb-6 flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <p className="text-xs tracking-wide text-blue-200 leading-relaxed">
                                    <strong>AI Personalized:</strong> Vibework sẽ sử dụng DNA này để tự động thiết kế banner, chọn tone màu giao diện, và sinh ra thông điệp phù hợp riêng với doanh nghiệp của bạn ở các bước sau.
                                </p>
                            </div>
                            
                            <button 
                                onClick={handleSubmitDNA}
                                disabled={isSaving}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50"
                            >
                                {isSaving ? (
                                    <>Đang lưu DNA... <Loader2 className="w-5 h-5 animate-spin" /></>
                                ) : (
                                    <>Xác nhận DNA & Vào trang chủ <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
