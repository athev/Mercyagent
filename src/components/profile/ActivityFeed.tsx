"use client";

import { motion } from "framer-motion";
import { History, ArrowUpRight } from "lucide-react";

export default function ActivityFeed() {
    const activities = [
        { id: 1, text: "Bạn vừa cập nhật Brand DNA thành công", time: "10 phút trước", type: "update" },
        { id: 2, text: "Ticket #T-042 đã nhận được báo giá mới", time: "2 giờ trước", type: "ticket" },
        { id: 3, text: "Đã hoàn thành module 3 khóa học Vibe Branding", time: "Hôm qua", type: "course" }
    ];

    return (
        <div className="mt-12">
            <div className="flex items-center gap-3 mb-8">
                <History className="w-5 h-5 text-gray-500" />
                <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Nhật ký hoạt động
                </h3>
            </div>

            <div className="relative">
                {/* Line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-white/5" />

                <div className="space-y-8">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="relative flex items-center gap-6"
                        >
                            <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-lg">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                            
                            <div className="flex-1 flex items-center justify-between p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                                <div>
                                    <p className="text-white text-sm font-medium mb-1">{activity.text}</p>
                                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{activity.time}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <button className="w-full mt-12 py-4 rounded-2xl border border-white/5 text-gray-500 text-[10px] uppercase font-black tracking-widest hover:text-white hover:border-white/10 transition-all">
                Xem lịch sử chi tiết
            </button>
        </div>
    );
}
