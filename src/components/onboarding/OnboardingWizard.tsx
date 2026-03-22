"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Step1_Identity from "./Step1_Identity";
import Step2_Source from "./Step2_Source";
import Step3_Analysis from "./Step3_Analysis";
import Step4_DNAEditor from "./Step4_DNAEditor";
import Step5_Catalog from "./Step5_Catalog";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function OnboardingWizard() {
    const searchParams = useSearchParams();
    const { data: session } = useSession();
    
    const [step, setStep] = useState(1);
    const [sourceData, setSourceData] = useState({ type: "url", value: "" });
    const [dna, setDna] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const stepParam = searchParams.get("step");
        if (stepParam) {
            setStep(parseInt(stepParam));
        } else if (session && step === 1) {
            setStep(2);
        }
    }, [searchParams, session]);

    const handleSourceSubmit = (type: string, value: string) => {
        setSourceData({ type, value });
        setStep(3);
    };

    const handleAnalysisComplete = (extractedDna: any) => {
        setDna(extractedDna);
        setStep(4);
    };

    const handleDnaSave = (updatedDna: any) => {
        setDna(updatedDna);
        setStep(5);
    };

    const handleFinalSubmit = async (finalProducts: any[]) => {
        setProducts(finalProducts);
        setIsSaving(true);
        
        // If NO session (Guest mode), just redirect to playground
        if (!session) {
            console.warn("Guest mode: Data will not be saved to database.");
            // Optionally save to localStorage for the session
            localStorage.setItem("guest_dna", JSON.stringify(dna));
            localStorage.setItem("guest_products", JSON.stringify(finalProducts));
            window.location.href = "/playground";
            return;
        }

        try {
            // Save BOTH DNA and Products to Supabase
            const res = await fetch("/api/save-dna", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dna, products: finalProducts })
            });

            if (res.ok) {
                window.location.href = "/playground";
            } else {
                const errorData = await res.json();
                alert(`Lỗi khi lưu dữ liệu: ${errorData.error || "Thử lại sau!"}`);
            }
        } catch (e) {
            console.error("Save DNA Exception:", e);
            alert("Không thể kết nối với máy chủ để lưu DNA.");
        } finally {
            setIsSaving(false);
        }
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => Math.max(1, prev - 1));

    return (
        <div className="w-full max-w-6xl">
            {/* Minimalist Progress Header */}
            <div className="mb-12 flex items-center justify-between px-2">
                <div className="flex items-center gap-6">
                    {step > 1 && step !== 3 && (
                        <button 
                            onClick={prevStep}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    )}
                    <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                        Phát triển DNA <span className="mx-2 text-white/20">|</span> 
                        <span className="text-white">Bước {step} của 5</span>
                    </h1>
                </div>
                
                <div className="hidden md:flex gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div 
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === step ? "w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : 
                                i < step ? "w-6 bg-blue-500/40" : "w-6 bg-white/10"
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-black/40 border border-white/10 p-10 md:p-16 rounded-[48px] backdrop-blur-3xl shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
                {/* Visual Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -mr-64 -mt-64 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] -ml-64 -mb-64 rounded-full pointer-events-none" />

                <AnimatePresence mode="wait">
                    {step === 1 && <Step1_Identity key="s1" nextStep={nextStep} />}
                    {step === 2 && <Step2_Source key="s2" onDataSubmit={handleSourceSubmit} />}
                    {step === 3 && <Step3_Analysis key="s3" source={sourceData.value} onAnalysisComplete={handleAnalysisComplete} />}
                    {step === 4 && <Step4_DNAEditor key="s4" initialDna={dna} onSave={handleDnaSave} />}
                    {step === 5 && <Step5_Catalog key="s5" onComplete={handleFinalSubmit} />}
                </AnimatePresence>
            </div>
            
            <div className="mt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest font-medium">
                Sức mạnh bởi Vibework Intelligence • © 2026
            </div>
        </div>
    );
}
