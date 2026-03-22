"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, MessageSquare, Loader2, Wand2 } from "lucide-react";

export default function Step3_Analysis({ source, onAnalysisComplete }: { source: string, onAnalysisComplete: (data: any) => void }) {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("Đang khởi tạo AI...");
    const [logs, setLogs] = useState<string[]>([]);

    const logMessages = [
        "Đang kết nối với cổng thông tin...",
        "Đang đọc nội dung HTML và cấu trúc...",
        "Phát hiện Palette màu thương hiệu...",
        "Phân tích Tone of Voice và giá trị cốt lõi...",
        "Tìm kiếm đối thủ và vị thế thị trường...",
        "Đang lắp ghép DNA hoàn chỉnh...",
        "Gần xong rồi..."
    ];

    useEffect(() => {
        let currentLog = 0;
        const logInterval = setInterval(() => {
            if (currentLog < logMessages.length) {
                setLogs(prev => [...prev.slice(-3), logMessages[currentLog]]);
                setStatusText(logMessages[currentLog]);
                currentLog++;
                setProgress(p => Math.min(p + 15, 95));
            }
        }, 1500);

        // Simulation for now, will call real API
        const analyze = async () => {
            try {
                const res = await fetch("/api/extract-dna", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: source })
                });
                const data = await res.json();
                
                setTimeout(() => {
                    setProgress(100);
                    clearInterval(logInterval);
                    onAnalysisComplete(data.dna);
                }, 2000);
            } catch (e) {
                console.error("Analysis error", e);
            }
        };

        analyze();

        return () => clearInterval(logInterval);
    }, [source]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
        >
            <div className="relative w-40 h-40 mb-12">
                {/* Geometric Loading Animation */}
                <motion.div 
                    className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                    className="absolute inset-4 border-2 border-cyan-500/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <Wand2 className="w-16 h-16 text-blue-400 relative z-10" />
                        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-cyan-400 animate-pulse" />
                    </div>
                </div>

                {/* Circular Progress Bar */}
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="80" cy="80" r="76"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-white/5"
                    />
                    <motion.circle
                        cx="80" cy="80" r="76"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={477}
                        initial={{ strokeDashoffset: 477 }}
                        animate={{ strokeDashoffset: 477 - (477 * progress) / 100 }}
                        className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="space-y-3">
                <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent">AI đang giải mã DNA</h2>
                <p className="text-gray-400 h-6 overflow-hidden">{statusText}</p>
            </div>

            <div className="mt-12 w-full max-w-sm">
                <AnimatePresence mode="popLayout">
                    {logs.map((log, i) => (
                        <motion.div
                            key={log}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1 - (logs.length - 1 - i) * 0.3, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3 text-xs justify-center mb-3 text-gray-500 font-mono"
                        >
                            {i === logs.length - 1 ? <Loader2 className="w-3 h-3 animate-spin text-blue-400" /> : <CheckCircle2 className="w-3 h-3 text-green-500/50" />}
                            {log}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-16 flex items-center gap-4 bg-white/5 px-6 py-4 rounded-3xl border border-white/10 max-w-lg">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-left">
                    <div className="font-bold text-sm mb-0.5">Mẹo từ AI</div>
                    <p className="text-[11px] text-gray-500 leading-normal">Trong khi tôi phân tích, bạn hãy chuẩn bị sẵn file Logo chất lượng cao để chúng tôi đồng bộ nhận diện nhé.</p>
                </div>
            </div>
        </motion.div>
    );
}
