"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Download, Clock } from "lucide-react";

interface AIAnalysisProps {
    requirements: any[];
    initialSelectedIds: string[];
    onBack: () => void;
    onProceed: (selectedIds: string[]) => void;
}

export default function AIAnalysis({ requirements, initialSelectedIds, onBack, onProceed }: AIAnalysisProps) {
    const [selectedIds, setSelectedIds] = useState<string[]>(initialSelectedIds);

    const toggleSelect = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleDownload = () => {
        const selected = requirements.filter(r => selectedIds.includes(r.id));
        const totalHours = selected.reduce((sum, req) => sum + (req.estimatedHours || 0), 0);
        
        let text = "=== PHÂN TÍCH NHU CẦU & MODULE DỰ ÁN ===\n\n";
        text += selected.map(r => `[${r.category}] ${r.title}\nThời gian dự kiến: ${r.estimatedHours} giờ\nMô tả: ${r.description}\n`).join("\n---\n\n");
        text += `\n\nTổng thời gian dự kiến: ${totalHours} giờ.`;
        
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "vibework-modules.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Các Module Đề Xuất ✨</h2>
                    <p className="text-gray-400">Dựa trên yêu cầu của bạn, AI đã phân tách hệ thống thành các module lớn sau đây. Hãy chọn những phần bạn muốn triển khai.</p>
                </div>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 hover:bg-[#06B6D4]/20 transition-all text-[#06B6D4] font-medium"
                >
                    <Download className="w-4 h-4" />
                    Tải danh sách Module
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requirements.map((req, index) => (
                    <motion.div
                        key={req.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => toggleSelect(req.id)}
                        className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-300 ${selectedIds.includes(req.id)
                                ? "bg-[#06B6D4]/10 border-[#06B6D4]/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-gray-400">
                                {req.category}
                            </span>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${selectedIds.includes(req.id)
                                    ? "bg-[#06B6D4] border-[#06B6D4]"
                                    : "border-white/20"
                                }`}>
                                {selectedIds.includes(req.id) && <Check className="w-4 h-4 text-black" />}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#06B6D4] transition-colors">
                            {req.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                            {req.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-[#06B6D4]/80 mt-auto pt-4 border-t border-white/5">
                           <Clock className="w-4 h-4" />
                           <span>~ {req.estimatedHours || 0} giờ</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-between items-center pt-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Làm lại
                </button>
                <button
                    onClick={() => onProceed(selectedIds)}
                    disabled={selectedIds.length === 0}
                    className="group relative px-10 py-4 rounded-xl overflow-hidden bg-white text-black font-bold flex items-center gap-3 transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    Tiếp tục tạo Kế hoạch
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
