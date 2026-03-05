"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const edges = [
    {
        title: "System Thinking",
        desc: "Tư duy hệ thống — nhìn bức tranh toàn cảnh, thiết kế kiến trúc trước khi code.",
        icon: "🧩",
        stat: "Architect",
    },
    {
        title: "Product Thinking",
        desc: "Tư duy sản phẩm — build thứ người dùng cần, không phải thứ bạn muốn code.",
        icon: "🎯",
        stat: "Strategist",
    },
    {
        title: "AI Orchestration",
        desc: "Điều phối AI — biến ChatGPT thành quân đoàn, không phải con dao pha lê.",
        icon: "🎼",
        stat: "Commander",
    },
    {
        title: "Execution Speed",
        desc: "Tốc độ thực thi — khi tất cả đều có AI, lợi thế thuộc về kẻ build nhanh nhất.",
        icon: "⚡",
        stat: "10x Faster",
    },
];

const pipeline = [
    {
        phase: "01",
        title: "Brain-to-Spec",
        desc: "Chuyển hóa ý tưởng mơ hồ thành Technical Specification cứng nhắc.",
        tools: "Gemini + NotebookLLM",
    },
    {
        phase: "02",
        title: "Blueprinting",
        desc: "Thiết kế Database & API Flow trước khi viết một dòng code nào.",
        tools: "System Design + ERD",
    },
    {
        phase: "03",
        title: "Unit-Orchestration",
        desc: "Điều khiển quân đoàn Claude/Cursor để lắp ghép từng module.",
        tools: "Multi-Agent Pipeline",
    },
    {
        phase: "04",
        title: "Auto-Deploy & Monetize",
        desc: "Đóng gói, deploy tự động, và đưa lên 'kệ đĩa' tạo ra tiền.",
        tools: "CI/CD + SaaS Launch",
    },
];

const securityItems = [
    { title: "Quản lý Secrets", desc: "Không bao giờ lộ API key. Environment variables + Vault chuyên nghiệp.", icon: "🔐" },
    { title: "Rate Limit & Data Protection", desc: "Thiết lập bảo vệ ngay từ dòng prompt đầu tiên.", icon: "🛡️" },
    { title: "Kỹ thuật Sandboxing", desc: "Để AI code trong môi trường cô lập, an toàn tuyệt đối.", icon: "📦" },
];

export default function VCCompetitiveEdge() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            id="edge"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg-alt)" }}
        >
            <div className="absolute inset-0 vc-grid-bg pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* === COMPETITIVE EDGE === */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[#C6FF00]" />
                    <span className="text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
                        Section 06 — Lợi thế cạnh tranh
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    TẠI SAO{" "}
                    <span className="text-[#C6FF00]">AI ENGINEER THẮNG?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-12"
                >
                    &ldquo;Khi tất cả đều có AI, lợi thế thuộc về người{" "}
                    <span className="text-[#C6FF00] font-semibold">build nhanh hơn</span> và{" "}
                    <span className="text-[#C6FF00] font-semibold">thử nhanh hơn</span>.&rdquo;
                </motion.p>

                {/* Edge Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
                    {edges.map((edge, i) => (
                        <motion.div
                            key={edge.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="group rounded-xl border border-[#222] bg-[#141414] p-6 hover:border-[#C6FF00]/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <span className="text-2xl mb-3 block">{edge.icon}</span>
                                <h3 className="text-[#E8E8E8] font-bold text-sm mb-2" style={{ fontFamily: "Space Grotesk" }}>
                                    {edge.title}
                                </h3>
                                <p className="text-[#888] text-xs leading-relaxed mb-4">{edge.desc}</p>
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono text-[#C6FF00] bg-[#C6FF00]/10 border border-[#C6FF00]/20">
                                    {edge.stat}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* === THE VIBE PIPELINE === */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#E8E8E8] mb-2 tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
                        TỪ VIBE ĐẾN <span className="text-[#C6FF00]">VALUE</span>
                    </h3>
                    <p className="text-[#888] text-sm mb-8">
                        Pipeline 4 giai đoạn độc quyền — Quy trình hóa sự sáng tạo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {pipeline.map((phase, i) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + i * 0.15 }}
                                className="relative rounded-xl border border-[#222] bg-[#141414] p-5 group hover:border-[#C6FF00]/20 transition-all duration-300"
                            >
                                {/* Phase number */}
                                <div className="text-4xl font-bold text-[#C6FF00]/10 absolute top-3 right-4" style={{ fontFamily: "Space Grotesk" }}>
                                    {phase.phase}
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-[#C6FF00] text-xs font-mono tracking-wider mb-2">
                                        PHASE {phase.phase}
                                    </h4>
                                    <h5 className="text-[#E8E8E8] font-bold text-sm mb-2" style={{ fontFamily: "Space Grotesk" }}>
                                        {phase.title}
                                    </h5>
                                    <p className="text-[#888] text-xs leading-relaxed mb-3">
                                        {phase.desc}
                                    </p>
                                    <span className="text-[10px] font-mono text-[#555] border border-[#222] rounded px-2 py-0.5">
                                        {phase.tools}
                                    </span>
                                </div>

                                {/* Arrow connector (not on last) */}
                                {i < pipeline.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-[14px] -translate-y-1/2 z-20 text-[#333]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* === SECURITY BARRICADE === */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#E8E8E8] mb-2 tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
                        SECURITY <span className="text-[#C6FF00]">BARRICADE</span>
                    </h3>
                    <p className="text-[#888] text-sm mb-8 max-w-xl">
                        &ldquo;AI có thể viết code nhanh, nhưng nó không biết{" "}
                        <span className="text-[#C6FF00]">bảo mật sự nghiệp</span> của bạn.&rdquo;
                        — 90% khóa học ngoài kia đang dạy bạn cách &ldquo;lộ hàng&rdquo;.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {securityItems.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.9 + i * 0.1 }}
                                className="rounded-xl border border-[#222] bg-[#141414] p-5"
                            >
                                <span className="text-xl mb-3 block">{item.icon}</span>
                                <h4 className="text-[#E8E8E8] text-sm font-bold mb-2" style={{ fontFamily: "Space Grotesk" }}>
                                    {item.title}
                                </h4>
                                <p className="text-[#888] text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-6 rounded-lg border border-[#C6FF00]/10 bg-[#C6FF00]/[0.03] px-6 py-4">
                        <p className="text-[#888] text-xs font-mono text-center tracking-wider">
                            &ldquo;Chúng ta build phần mềm để chạy{" "}
                            <span className="text-[#C6FF00] font-bold">10 năm</span>, không phải để demo trong{" "}
                            <span className="text-[#C0C0C0]">10 phút</span>.&rdquo;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
