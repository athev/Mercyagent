"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const agents = [
    { id: "idea", label: "Ý tưởng", emoji: "💡", angle: 0 },
    { id: "pm", label: "PM AI", emoji: "📋", angle: 60 },
    { id: "architect", label: "Architect AI", emoji: "🏗️", angle: 120 },
    { id: "developer", label: "Developer AI", emoji: "💻", angle: 180 },
    { id: "debugger", label: "Debugger AI", emoji: "🔍", angle: 240 },
    { id: "deploy", label: "Deploy", emoji: "🚀", angle: 300 },
];

const specialAgents = [
    {
        name: "The Skeptic Agent",
        desc: "Chuyên tìm lỗ hổng trong logic của bạn. Đặt câu hỏi khó trước khi code được viết.",
        icon: "🤔",
        color: "#FF6B6B",
    },
    {
        name: "The Security Guard",
        desc: "Đánh hơi SQL Injection, XSS, API Leak trước khi code được sinh ra. Bảo vệ sản phẩm 24/7.",
        icon: "🛡️",
        color: "#4ECDC4",
    },
    {
        name: "The Refactor King",
        desc: "Đập đi xây lại để code luôn đạt chuẩn Modular, SOLID, Clean Architecture.",
        icon: "👑",
        color: "#FFD93D",
    },
    {
        name: "The PM Agent",
        desc: "Quản lý timeline, phân tách task, tạo Sprint Planning tự động cho dự án của bạn.",
        icon: "📊",
        color: "#6C5CE7",
    },
    {
        name: "The Test Runner",
        desc: "Viết test cases, chạy regression test, đảm bảo coverage trước mỗi lần deploy.",
        icon: "✅",
        color: "#00B894",
    },
    {
        name: "The DevOps Agent",
        desc: "CI/CD pipeline, monitoring, auto-scaling. Hệ thống chạy mượt 24/7 không cần bạn thức đêm.",
        icon: "⚙️",
        color: "#E17055",
    },
];

export default function VCAITeam() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <section
            id="ai-team"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            <div className="absolute inset-0 vc-grid-bg pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[#C6FF00]" />
                    <span className="text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
                        Section 05 — AI Software Team
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    DÀN NHẠC{" "}
                    <span className="text-[#C6FF00]">GIAO HƯỞNG AI</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16"
                >
                    Đừng dùng ChatGPT như một con dao pha lê.{" "}
                    <span className="text-[#C0C0C0] font-medium">
                        Hãy dùng nó như một dàn nhạc giao hưởng.
                    </span>{" "}
                    Bạn không còn cô đơn — bạn đang điều hành một tập đoàn tài năng trong túi áo.
                </motion.p>

                {/* Circular Workflow Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative w-full max-w-md mx-auto aspect-square mb-20"
                >
                    {/* Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center z-10">
                        <span className="text-[#C6FF00] text-[10px] font-mono font-bold text-center leading-tight">
                            YOUR<br />BRAIN
                        </span>
                    </div>

                    {/* Orbit ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-[#222] border-dashed" />

                    {/* Agent nodes */}
                    {agents.map((agent, i) => {
                        const radian = (agent.angle * Math.PI) / 180;
                        const radius = 42; // percentage
                        const x = 50 + radius * Math.cos(radian - Math.PI / 2);
                        const y = 50 + radius * Math.sin(radian - Math.PI / 2);

                        return (
                            <motion.div
                                key={agent.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + i * 0.12, duration: 0.5, type: "spring" }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group cursor-default"
                                style={{ left: `${x}%`, top: `${y}%` }}
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#141414] border border-[#333] group-hover:border-[#C6FF00]/40 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]">
                                    {agent.emoji}
                                </div>
                                <span className="text-[9px] md:text-[10px] font-mono text-[#888] group-hover:text-[#C6FF00] transition-colors whitespace-nowrap">
                                    {agent.label}
                                </span>
                            </motion.div>
                        );
                    })}

                    {/* Animated orbit particle */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 w-[85%] h-[85%] -translate-x-1/2 -translate-y-1/2"
                        style={{ transformOrigin: "center" }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C6FF00] shadow-[0_0_10px_rgba(198,255,0,0.6)]" />
                    </motion.div>
                </motion.div>

                {/* Highlight quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#C0C0C0] text-sm md:text-base italic max-w-xl mx-auto border-l-2 border-[#C6FF00]/30 pl-4 text-left">
                        &ldquo;Đây không phải là AI viết code hộ bạn. Đây là bạn đang{" "}
                        <span className="text-[#C6FF00] font-semibold not-italic">quản lý một công ty công nghệ</span>{" "}
                        trong 1 trình duyệt.&rdquo;
                    </p>
                </motion.div>

                {/* Agent Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {specialAgents.map((agent, i) => (
                        <motion.div
                            key={agent.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="group rounded-xl border border-[#222] bg-[#141414] p-5 hover:border-[#333] transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                                    style={{ backgroundColor: `${agent.color}15`, border: `1px solid ${agent.color}30` }}
                                >
                                    {agent.icon}
                                </div>
                                <div>
                                    <h4 className="text-[#E8E8E8] text-sm font-bold" style={{ fontFamily: "Space Grotesk" }}>
                                        {agent.name}
                                    </h4>
                                </div>
                            </div>
                            <p className="text-[#888] text-xs leading-relaxed">{agent.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
