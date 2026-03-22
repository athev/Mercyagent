"use client";

import { motion } from "framer-motion";
import { FileText, Clock, ExternalLink, BadgeCheck } from "lucide-react";
import Link from "next/link";

interface TicketsWidgetProps {
    tickets?: any[];
}

export default function TicketsWidget({ tickets = [] }: TicketsWidgetProps) {
    const hasTickets = tickets.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] p-6 hover:border-blue-500/30 transition-all duration-500"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">Dự án & Ticket</h3>
                </div>
            </div>

            <div className="space-y-4">
                {hasTickets ? (
                    tickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 border-l-2 border-l-blue-500/40 hover:bg-white/10 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] text-blue-400 font-black tracking-widest">#{(ticket.id || '').substring(0, 5).toUpperCase()}</span>
                                <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    <span>{new Date(ticket.createdAt).toLocaleDateString('vi-VN')}</span>
                                </div>
                            </div>
                            
                            <h4 className="text-white font-bold text-sm mb-3 tracking-tight line-clamp-1">{ticket.title}</h4>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter bg-blue-500/20 text-blue-400">
                                        {ticket.status}
                                    </span>
                                </div>
                                <span className="text-white font-black text-xs">{ticket.quoteAmount || "---"}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center">
                        <p className="text-gray-500 text-sm mb-4">Bạn chưa có yêu cầu nào.</p>
                        <Link href="/playground" className="text-[10px] text-blue-400 font-black uppercase tracking-widest hover:underline">
                            Vào Playground ngay →
                        </Link>
                    </div>
                )}
            </div>

            <button className="flex items-center justify-center gap-2 w-full mt-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all shadow-xl">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                Gửi yêu cầu mới từ Playground
            </button>
        </motion.div>
    );
}
