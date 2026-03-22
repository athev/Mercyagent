"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, FileText, Type, ArrowRight, Upload, Info } from "lucide-react";

type SourceType = "url" | "file" | "text";

export default function Step2_Source({ onDataSubmit }: { onDataSubmit: (type: SourceType, value: string) => void }) {
    const [selectedType, setSelectedType] = useState<SourceType>("url");
    const [inputValue, setInputValue] = useState("");

    const sources = [
        { id: "url", label: "Đường link", icon: Globe, placeholder: "https://yourwebsite.com", desc: "AI sẽ tự động quét mọi thông tin" },
        { id: "file", label: "Tài liệu giới thiệu", icon: FileText, placeholder: "Kéo thả file giới thiệu (PDF, Docx)", desc: "Phân tích file giới thiệu công ty" },
        { id: "text", label: "Mô tả tự do", icon: Type, placeholder: "Hãy kể cho AI nghe về dự án của bạn...", desc: "Tự viết điểm đặc biệt của bạn" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
        >
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">Cung cấp "Nguyên liệu" 🧬</h2>
                <p className="text-gray-400 leading-relaxed md:w-3/4">
                    Chọn cách thuận tiện nhất để AI hiểu về dự án của bạn. Càng nhiều dữ liệu, DNA của bạn càng chính xác.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {sources.map(src => (
                    <button
                        key={src.id}
                        onClick={() => setSelectedType(src.id as SourceType)}
                        className={`p-5 rounded-2xl border transition-all text-left group ${
                            selectedType === src.id 
                            ? "bg-blue-500/10 border-blue-500/50 ring-1 ring-blue-500/50" 
                            : "bg-white/5 border-white/10 hover:border-white/20"
                        }`}
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                            selectedType === src.id ? "bg-blue-500 text-white" : "bg-white/5 text-gray-400 group-hover:text-gray-200"
                        }`}>
                            <src.icon className="w-5 h-5" />
                        </div>
                        <div className="font-bold mb-1 tracking-tight">{src.label}</div>
                        <div className="text-[11px] text-gray-500 leading-tight">{src.desc}</div>
                    </button>
                ))}
            </div>

            <div className="relative mb-10 group">
                {selectedType === "text" ? (
                    <textarea 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={sources.find(s => s.id === selectedType)?.placeholder}
                        className="w-full h-40 bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none shadow-inner"
                    />
                ) : selectedType === "file" ? (
                    <div className="w-full h-40 bg-black/40 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 group-hover:border-blue-500/30 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-500 group-hover:text-blue-400 transition-colors" />
                        <span className="text-gray-500 text-sm group-hover:text-gray-300">Nhấp để tải lên hoặc kéo thả PDF/Docx</span>
                        <input type="file" className="hidden" />
                    </div>
                ) : (
                    <div className="relative">
                        <input 
                            type="url" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={sources.find(s => s.id === selectedType)?.placeholder}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-7 py-6 text-white text-lg focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                             <ArrowRight className="w-5 h-5 opacity-50" />
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-2xl mb-10 flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed italic">
                    <strong>Mẹo:</strong> Nếu bạn có cả Website và File giới thiệu, hãy ưu tiên Website trước, sau đó AI sẽ hỏi thêm bạn về các chi tiết trong file ở bước sau.
                </p>
            </div>

            <div className="flex justify-end gap-4 mt-auto">
                <button 
                    onClick={() => onDataSubmit(selectedType, inputValue)}
                    disabled={!inputValue && selectedType !== "file"}
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:brightness-110 disabled:opacity-30 disabled:grayscale transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
                >
                    Bắt đầu phân tích <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
}
