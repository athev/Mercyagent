"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const modules = [
    {
        tier: "FOUNDATION",
        tierColor: "var(--vc-lime)",
        items: [
            {
                id: 1,
                title: "AI-First Mindset",
                desc: "Từ Syntax Slave → Architecture Master. Outcome: Biết cách điều phối AI thay vì bị thay thế bởi AI.",
                icon: "🧠",
            },
            {
                id: 2,
                title: "Vibe Coding Mastery",
                desc: "Kỹ năng Brain-to-Spec với Gemini + NotebookLLM. Outcome: Sáng tác tài liệu kĩ thuật (Technical Spec) cứng nhắc chỉ từ một ý tưởng mơ hồ.",
                icon: "⚡",
            },
            {
                id: 3,
                title: "Tech Stack Selection",
                desc: "Blueprint trước, Code sau. Outcome: Lên thiết kế Database & API Flow chuẩn xác trước khi viết một dòng code nào.",
                icon: "🏗️",
            },
        ],
    },
    {
        tier: "CORE",
        tierColor: "var(--vc-chrome)",
        items: [
            {
                id: 4,
                title: "Multi-Agent Orchestra",
                desc: "Học cách điều khiển 12 AI Agent chuyên biệt. Outcome: Trở thành nhạc trưởng điều hành dàn giao hưởng AI tự động viết code.",
                icon: "🎼",
            },
            {
                id: 5,
                title: "Clean Code & Architecture",
                desc: "Kỹ thuật đập đi xây lại liên tục. Outcome: Code đạt chuẩn Production-grade, đảm bảo bảo hành 10 năm thay vì đồ án môn học.",
                icon: "💎",
            },
            {
                id: 6,
                title: "Security Barricade",
                desc: "Quản lý Secrets, Sandboxing. Outcome: Hệ thống tự động của bạn được bảo mật tuyệt đối trước các hiểm hoạ rò rỉ dữ liệu.",
                icon: "🛡️",
            },
        ],
    },
    {
        tier: "GROWTH",
        tierColor: "#60a5fa", // tailwind blue-400
        items: [
            {
                id: 7,
                title: "Project Management",
                desc: "Quản lý AI Tasks với Sprint Planning. Outcome: Tự động phân chia Task cho AI để quản lý dự án quy mô lớn một mình.",
                icon: "📋",
            },
            {
                id: 8,
                title: "Product Building",
                desc: "Market Fit & UX. Outcome: Thành thạo tư duy làm Sản Phẩm - Xây thứ thị trường muốn và sẵn mặt trả tiền.",
                icon: "🚀",
            },
            {
                id: 9,
                title: "Monetization",
                desc: "Auto-Deploy & Đóng gói Micro-SaaS. Outcome: Hoàn thiện được một Micro-SaaS và bắt đầu biến Code thành tiền (Cash flow).",
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
                    <div className="w-8 h-[1px] bg-[var(--vc-lime)]" />
                    <span className="text-[var(--vc-lime)] text-xs font-mono tracking-widest uppercase">
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
                    <span className="text-[var(--vc-lime)]">BLUEPRINT</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16"
                >
                    Cây kỹ năng được thiết kế có hệ thống: từ nền tảng tư duy → core engineering → tăng trưởng & kiếm tiền.
                </motion.p>

                {/* Click hint — visible above module cards */}
                <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-lg border border-[var(--vc-lime)]/10 bg-[var(--vc-lime)]/[0.03] w-fit">
                    <span className="text-sm">👆</span>
                    <span className="text-[#888] text-xs font-mono tracking-wide">Click vào từng module để xem chi tiết nội dung</span>
                </div>

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


            </div>
        </section>
    );
}
