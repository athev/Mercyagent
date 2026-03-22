"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DemoSelector from "../../components/playground/DemoSelector";
import PlaygroundHero from "../../components/playground/PlaygroundHero";
import GanttTab from "../../components/playground/GanttTab";
import QuotationTab from "../../components/playground/QuotationTab";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function PlaygroundPage() {
    const [brief, setBrief] = useState("");
    const [brandContext, setBrandContext] = useState("");
    const [requirements, setRequirements] = useState<any[]>([]);
    const [productType, setProductType] = useState("website");
    const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Called when BriefInput wizard completes
    const handleWizardComplete = async (data: {
        brief: string;
        answers: Record<string, string>;
        brandStyle: string;
        colorPalette: string;
        logoFile: File | null;
    }) => {
        const answersText = Object.values(data.answers).join(", ");
        const ctx = `Phong cách: ${data.brandStyle || "AI đề xuất"}, Bảng màu: ${data.colorPalette || "AI đề xuất"}, Chi tiết: ${answersText}`;
        
        setBrief(data.brief);
        setBrandContext(ctx);

        // Analyze brief to get modules
        setIsAnalyzing(true);
        try {
            const enrichedBrief = `Ý tưởng gốc: "${data.brief}"\n\n${ctx}`;
            const res = await fetch("/api/analyze-brief", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ brief: enrichedBrief }),
            });
            if (!res.ok) throw new Error("API Error");
            const result = await res.json();
            setRequirements(result.requirements || []);
            setProductType(result.productType || "website");
            setStep(1);
        } catch (err) {
            alert("Lỗi khi phân tích. Vui lòng thử lại.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleDemoSelected = (imageUrl: string) => {
        setSelectedDemo(imageUrl);
        setStep(2); // Go to Gantt
    };

    const handleGanttNext = () => {
        setStep(3); // Go to Quotation
    };

    const handleBackToInput = () => {
        setStep(0);
        setRequirements([]);
        setSelectedDemo(null);
    };

    const stepVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#06B6D4] selection:text-white">
            <Navbar />
            <div className="pt-24 pb-20 w-full">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div key="step0" {...stepVariants} transition={{ duration: 0.5 }}>
                            <PlaygroundHero onComplete={handleWizardComplete} isAnalyzing={isAnalyzing} />
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div key="step1" {...stepVariants} transition={{ duration: 0.5 }} className="px-4 max-w-6xl mx-auto">
                            <DemoSelector
                                brief={brief}
                                brandContext={brandContext}
                                modules={requirements}
                                onSelect={handleDemoSelected}
                                onBack={handleBackToInput}
                            />
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="step2" {...stepVariants} transition={{ duration: 0.5 }} className="px-4 max-w-6xl mx-auto">
                            {/* Step 2 Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Bước 2/3
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">Kế hoạch triển khai</h2>
                                <p className="text-gray-400">Phân tích chức năng, các section và timeline dự án.</p>
                            </div>

                            {/* Selected Demo Preview */}
                            {selectedDemo && (
                                <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-sm text-gray-400 mb-3">Demo đã chọn:</p>
                                    <img src={selectedDemo} alt="Selected demo" className="max-h-48 rounded-xl object-contain mx-auto" />
                                </div>
                            )}

                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
                                <GanttTab selectedModules={requirements} />
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white text-sm transition">
                                    ← Quay lại chọn Demo
                                </button>
                                <button onClick={handleGanttNext}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-medium transition shadow-lg shadow-blue-500/20">
                                    Xem Báo giá →
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="step3" {...stepVariants} transition={{ duration: 0.5 }} className="px-4 max-w-6xl mx-auto">
                            {/* Step 3 Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Bước 3/3
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {productType === "app" ? "Chọn tính năng & Lưu kế hoạch" : "Báo giá dự toán"}
                                </h2>
                                <p className="text-gray-400">
                                    {productType === "app"
                                        ? "Chọn tính năng cần thiết và lưu file kế hoạch để được tư vấn."
                                        : "Báo giá chi tiết dựa trên phương án thiết kế đã chọn."
                                    }
                                </p>
                            </div>

                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
                                <QuotationTab selectedModules={requirements} productType={productType} />
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <button onClick={() => setStep(2)} className="text-gray-400 hover:text-white text-sm transition">
                                    ← Quay lại Kế hoạch
                                </button>
                                <button onClick={handleBackToInput}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition">
                                    Tạo dự án mới
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </main>
    );
}
