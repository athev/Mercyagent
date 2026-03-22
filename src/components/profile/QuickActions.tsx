"use client";

import { motion } from "framer-motion";
import { Rocket, BookOpen, Search, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function QuickActions() {
    const actions = [
        {
            title: "Mở Playground",
            desc: "Bắt đầu làm việc với AI",
            icon: Rocket,
            href: "/playground",
            color: "bg-blue-500",
            light: "blue"
        },
        {
            title: "Học viện",
            desc: "Tiếp tục bài học của bạn",
            icon: BookOpen,
            href: "/vibe-learning",
            color: "bg-violet-500",
            light: "violet"
        },
        {
            title: "Marketplace",
            desc: "Tìm kiếm giải pháp mới",
            icon: Search,
            href: "/marketplace",
            color: "bg-emerald-500",
            light: "emerald"
        },
        {
            title: "AI Agents",
            desc: "Uỷ quyền cho trợ lý",
            icon: Users,
            href: "/cassie",
            color: "bg-cyan-500",
            light: "cyan"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {actions.map((action, idx) => (
                <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ scale: 1.02 }}
                    className="group pointer-events-auto"
                >
                    <Link 
                        href={action.href}
                        className="block h-full p-6 rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] hover:border-white/20 transition-all flex flex-col shadow-2xl"
                    >
                        <div className={`w-10 h-10 rounded-xl ${action.color}/20 flex items-center justify-center mb-4 border border-${action.light}-500/20`}>
                            <action.icon className={`w-5 h-5 text-${action.light}-400`} />
                        </div>
                        <h4 className="text-white font-bold mb-1 tracking-tight">{action.title}</h4>
                        <p className="text-gray-500 text-xs">{action.desc}</p>
                        
                        <div className="mt-4 flex items-center gap-2 text-[10px] text-white/30 uppercase font-black tracking-widest group-hover:text-white transition-colors">
                            Truy cập <Zap className="w-2 h-2 text-yellow-500" />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
