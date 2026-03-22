"use client";

import { motion } from "framer-motion";
import { Dna, ArrowRight, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

interface DNASummaryWidgetProps {
    dna?: any; // We'll type this better later
}

export default function DNASummaryWidget({ dna }: DNASummaryWidgetProps) {
    const hasDNA = !!dna;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-full rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] p-6 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Dna className="w-6 h-6 text-blue-400" />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Brand DNA Dashboard
                </h3>

                {hasDNA ? (
                    <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            DNA thương hiệu của bạn đã được khởi tạo. AI đang sử dụng các chỉ số này để tối ưu nội dung.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Thương hiệu</p>
                                <p className="text-white font-bold">{dna.companyName || "Chưa đặt tên"}</p>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Tone of Voice</p>
                                <p className="text-white font-medium italic">{dna.toneOfVoice || "Chưa xác định"}</p>
                            </div>
                        </div>

                        <Link 
                            href="/onboarding"
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                        >
                            Cập nhật DNA
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col">
                        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                            Bạn chưa có hồ sơ DNA thương hiệu. Hãy khởi tạo để AI có thể hiểu và làm việc cho riêng bạn.
                        </p>
                        
                        <div className="mt-auto space-y-3">
                            <Link 
                                href="/onboarding"
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all shadow-xl"
                            >
                                <Plus className="w-4 h-4" />
                                Khởi tạo Brand DNA
                            </Link>
                            <p className="text-center text-[10px] text-gray-500 uppercase font-bold tracking-widest flex items-center justify-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Mất khoảng 5 phút
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
