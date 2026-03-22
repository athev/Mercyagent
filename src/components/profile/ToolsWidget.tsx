"use client";

import { motion } from "framer-motion";
import { Wrench, ExternalLink, Calendar, AlertCircle } from "lucide-react";
import Link from "next/link";

interface ToolsWidgetProps {
    tools?: any[];
}

export default function ToolsWidget({ tools = [] }: ToolsWidgetProps) {
    const hasTools = tools.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] p-6 hover:border-emerald-500/30 transition-all duration-500"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <Wrench className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">Công cụ của tôi</h3>
                </div>
            </div>

            <div className="space-y-4">
                {hasTools ? (
                    tools.map((tool) => (
                        <div key={tool.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-bold text-sm tracking-tight">{tool.toolName}</span>
                                {tool.status === "Warning" && <AlertCircle className="w-4 h-4 text-amber-500 animate-pulse" />}
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                                    <Calendar className="w-3 h-3" />
                                    <span>Hết hạn: {new Date(tool.expiresAt).toLocaleDateString('vi-VN')}</span>
                                </div>
                                <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter ${tool.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                    {tool.status}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center">
                        <p className="text-gray-500 text-sm mb-4">Bạn chưa đăng ký công cụ nào.</p>
                        <Link href="/marketplace" className="text-[10px] text-emerald-400 font-black uppercase tracking-widest hover:underline">
                            Ghé thăm Marketplace →
                        </Link>
                    </div>
                )}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Dịch vụ đang dùng</p>
                    <p className="text-white font-bold text-sm">Vibework Pro Plan</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}
