"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const modules = [
    {
        tier: "FOUNDATION",
        tierColor: "#C6FF00",
        items: [
            {
                id: 1,
                title: "AI-First Mindset",
                desc: "Tư duy kiến trúc sư: Từ Syntax Slave → Architecture Master. Hiểu cách AI thay đổi quy trình phát triển phần mềm.",
                icon: "🧠",
            },
            {
                id: 2,
                title: "Vibe Coding Mastery",
                desc: "Phương pháp Brain-to-Spec: Chuyển hóa ý tưởng mơ hồ thành Technical Specification cứng nhắc với Gemini + NotebookLLM.",
                icon: "⚡",
            },
            {
                id: 3,
                title: "Tech Stack Selection",
                desc: "Chọn đúng công nghệ, thiết kế Database & API Flow trước khi viết một dòng code nào. Blueprint trước, Code sau.",
                icon: "🏗️",
            },
        ],
    },
    {
        tier: "CORE",
        tierColor: "#00E5FF",
        items: [
            {
                id: 4,
                title: "Multi-Agent Orchestra",
                desc: "Điều khiển 12 Agent chuyên biệt: Skeptic, Security Guard, Refactor King, PM, DevOps... như một dàn nhạc giao hưởng.",
                icon: "🎼",
            },
            {
                id: 5,
                title: "Clean Code & Architecture",
                desc: "Code đạt chuẩn Modular, SOLID principles. Kỹ thuật đập đi xây lại để luôn duy trì chất lượng Production-grade.",
                icon: "💎",
            },
            {
                id: 6,
                title: "Security Barricade",
                desc: "Quản lý Secrets, Rate Limit, Data Protection, Sandboxing. Build phần mềm chạy 10 năm, không phải demo 10 phút.",
                icon: "🛡️",
            },
        ],
    },
    {
        tier: "GROWTH",
        tierColor: "#FF6B00",
        items: [
            {
                id: 7,
                title: "Project Management",
                desc: "Quản lý dự án với AI: Timeline, Sprint Planning, Task Decomposition. Từ solo coder thành Tech Lead.",
                icon: "📋",
            },
            {
                id: 8,
                title: "Product Building",
                desc: "Product Thinking — tư duy sản phẩm là vị vua mới. Validation, UX, Market Fit. Build thứ người ta muốn trả tiền.",
                icon: "🚀",
            },
            {
                id: 9,
                title: "Monetization",
                desc: "Auto-Deploy & Monetize: Đóng gói thành Micro-SaaS, đưa lên kệ tạo ra tiền. Từ code thành cash flow.",
                icon: "💰",
            },
        ],
    },
];

export default function VCModuleTree() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    return (
        <section
            id="modules"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg-alt)" }}
        >
            <div className="absolute inset-0 vc-grid-bg pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[#C6FF00]" />
                    <span className="text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
                        Section 04 — Chương trình đào tạo
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    9-MODULE{" "}
                    <span className="text-[#C6FF00]">BLUEPRINT</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16"
                >
                    Cây kỹ năng được thiết kế có hệ thống: từ nền tảng tư duy → core engineering → tăng trưởng & kiếm tiền.
                </motion.p>

                {/* Tech Tree */}
                <div className="space-y-8">
                    {modules.map((tier, tierIdx) => (
                        <motion.div
                            key={tier.tier}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + tierIdx * 0.15 }}
                        >
                            {/* Tier Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-3 h-3 rounded-sm"
                                    style={{ backgroundColor: tier.tierColor }}
                                />
                                <h3
                                    className="text-sm font-bold font-mono tracking-[0.2em]"
                                    style={{ color: tier.tierColor }}
                                >
                                    {tier.tier}
                                </h3>
                                <div className="flex-1 h-[1px]" style={{ backgroundColor: `${tier.tierColor}20` }} />
                                <span className="text-[10px] font-mono" style={{ color: `${tier.tierColor}80` }}>
                                    MODULE {tier.items[0].id}-{tier.items[tier.items.length - 1].id}
                                </span>
                            </div>

                            {/* Module Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {tier.items.map((mod) => {
                                    const isExpanded = expandedModule === mod.id;
                                    return (
                                        <motion.button
                                            key={mod.id}
                                            onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                                            className={`group text-left rounded-xl border p-5 transition-all duration-500 relative overflow-hidden ${isExpanded
                                                    ? "bg-[#1a1a1a]"
                                                    : "bg-[#141414] hover:bg-[#1a1a1a]"
                                                }`}
                                            style={{
                                                borderColor: isExpanded ? `${tier.tierColor}40` : "#222",
                                            }}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            {/* Glow on expanded */}
                                            {isExpanded && (
                                                <div
                                                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-15"
                                                    style={{ backgroundColor: tier.tierColor }}
                                                />
                                            )}

                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl">{mod.icon}</span>
                                                        <div>
                                                            <span
                                                                className="text-[10px] font-mono tracking-wider"
                                                                style={{ color: `${tier.tierColor}80` }}
                                                            >
                                                                MODULE {mod.id.toString().padStart(2, "0")}
                                                            </span>
                                                            <h4 className="text-[#E8E8E8] font-bold text-sm" style={{ fontFamily: "Space Grotesk" }}>
                                                                {mod.title}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isExpanded ? "rotate-45" : ""
                                                            }`}
                                                        style={{
                                                            borderColor: isExpanded ? tier.tierColor : "#333",
                                                            color: isExpanded ? tier.tierColor : "#555",
                                                        }}
                                                    >
                                                        <span className="text-xs">+</span>
                                                    </div>
                                                </div>

                                                {/* Expanded content */}
                                                <motion.div
                                                    initial={false}
                                                    animate={{
                                                        height: isExpanded ? "auto" : 0,
                                                        opacity: isExpanded ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-[#888] text-xs leading-relaxed pt-2 border-t border-[#222]">
                                                        {mod.desc}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Connection hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <p className="text-[10px] font-mono text-[#555] tracking-wider">
                        CLICK VÀO TỪNG MODULE ĐỂ XEM CHI TIẾT NỘI DUNG
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
