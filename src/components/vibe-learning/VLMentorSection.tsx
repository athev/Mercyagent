"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles, TrendingUp, Code2, Briefcase, Zap, ChevronRight } from "lucide-react";

const mentors = [
    {
        id: "aria",
        name: "Aria",
        role: "Marketing AI",
        emoji: "🎯",
        color: "from-blue-500 to-violet-500",
        bgColor: "from-blue-50 to-violet-50",
        borderColor: "border-blue-200",
        accentColor: "text-blue-600",
        badgeColor: "bg-blue-100 text-blue-700",
        icon: TrendingUp,
        tagline: "Biến từ ngữ thành doanh thu",
        skills: ["Hook Viral", "Landing Page", "Ads Copy", "Email Campaign"],
        quests: 48,
        description:
            "Aria giúp bạn thành thạo nghệ thuật Marketing với AI — từ viết hook viral đến tối ưu hóa conversion rate.",
        highlight: "Phổ biến nhất",
    },
    {
        id: "nexus",
        name: "Nexus",
        role: "Content AI",
        emoji: "✍️",
        color: "from-emerald-500 to-teal-500",
        bgColor: "from-emerald-50 to-teal-50",
        borderColor: "border-emerald-200",
        accentColor: "text-emerald-600",
        badgeColor: "bg-emerald-100 text-emerald-700",
        icon: Sparkles,
        tagline: "Sáng tạo không giới hạn với AI",
        skills: ["Video Script", "Blog SEO", "Social Content", "Storytelling"],
        quests: 36,
        description:
            "Nexus dạy bạn tạo ra content chất lượng cao với tốc độ 10x, từ script video đến bài viết SEO.",
    },
    {
        id: "cortex",
        name: "Cortex",
        role: "Developer AI",
        emoji: "⚡",
        color: "from-cyan-500 to-blue-500",
        bgColor: "from-cyan-50 to-blue-50",
        borderColor: "border-cyan-200",
        accentColor: "text-cyan-600",
        badgeColor: "bg-cyan-100 text-cyan-700",
        icon: Code2,
        tagline: "Build sản phẩm mà không cần code",
        skills: ["No-code Tools", "AI Debugging", "API Integration", "Automation"],
        quests: 42,
        description:
            "Cortex hướng dẫn bạn xây dựng sản phẩm thực với AI — không cần biết lập trình từ đầu.",
    },
    {
        id: "echelon",
        name: "Echelon",
        role: "Business AI",
        emoji: "💼",
        color: "from-amber-500 to-orange-500",
        bgColor: "from-amber-50 to-orange-50",
        borderColor: "border-amber-200",
        accentColor: "text-amber-600",
        badgeColor: "bg-amber-100 text-amber-700",
        icon: Briefcase,
        tagline: "Tư duy chiến lược như CEO",
        skills: ["Market Analysis", "Business Plan", "Pitch Deck", "Unit Economics"],
        quests: 30,
        description:
            "Echelon rèn luyện tư duy kinh doanh và phân tích thị trường bằng AI, từ idea đến execution.",
    },
    {
        id: "flux",
        name: "Flux",
        role: "Automation AI",
        emoji: "🔁",
        color: "from-rose-500 to-pink-500",
        bgColor: "from-rose-50 to-pink-50",
        borderColor: "border-rose-200",
        accentColor: "text-rose-600",
        badgeColor: "bg-rose-100 text-rose-700",
        icon: Zap,
        tagline: "Tự động hóa mọi việc lặp lại",
        skills: ["Workflow AI", "Zapier/Make", "AI Agents", "System Design"],
        quests: 38,
        description:
            "Flux giúp bạn xây dựng hệ thống tự động hóa AI, eliminating toàn bộ công việc thủ công.",
    },
];

export default function VLMentorSection() {
    const [selected, setSelected] = useState<string | null>(null);
    const active = mentors.find((m) => m.id === selected) ?? mentors[0];

    return (
        <section id="mentors" className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        AI Mentor System
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Chọn người mentor AI
                        <br />
                        <span className="text-slate-400 font-light">của bạn</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        Mỗi AI Mentor được chuyên biệt hóa cho một lĩnh vực. Họ sẽ giao Quest, hướng dẫn step-by-step và phản hồi từng output của bạn.
                    </motion.p>
                </div>

                {/* Mentor Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
                    {mentors.map((m, i) => (
                        <motion.button
                            key={m.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            onClick={() => setSelected(m.id)}
                            className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 text-center ${active.id === m.id
                                    ? `bg-gradient-to-b ${m.bgColor} ${m.borderColor} shadow-lg shadow-${m.accentColor.split("-")[1]}-100`
                                    : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-md"
                                }`}
                        >
                            {m.highlight && (
                                <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-0.5 rounded-full ${m.badgeColor} whitespace-nowrap`}>
                                    {m.highlight}
                                </span>
                            )}
                            <div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-2xl shadow-md`}
                            >
                                {m.emoji}
                            </div>
                            <div>
                                <div className={`text-sm font-bold ${active.id === m.id ? m.accentColor : "text-slate-800"}`}>
                                    {m.name}
                                </div>
                                <div className="text-[11px] text-slate-400 mt-0.5">{m.role}</div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Detail Panel */}
                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-3xl border-2 ${active.borderColor} bg-gradient-to-br ${active.bgColor} p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center`}
                >
                    {/* Left */}
                    <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active.badgeColor} text-xs font-semibold mb-4`}>
                            <active.icon className="w-3 h-3" />
                            {active.role}
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                            {active.name}
                        </h3>
                        <p className={`text-base font-medium ${active.accentColor} mb-4`}>{active.tagline}</p>
                        <p className="text-slate-600 leading-relaxed mb-8">{active.description}</p>
                        <a
                            href="#quests"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${active.color} text-white font-semibold text-sm shadow-lg hover:scale-105 transition-transform`}
                        >
                            Bắt đầu với {active.name}
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                            Kỹ năng sẽ học ({active.quests} Quest)
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {active.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="bg-white/70 backdrop-blur-sm border border-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm"
                                >
                                    <div
                                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.color}`}
                                    />
                                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 rounded-2xl bg-white/60 border border-white backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center text-xl shadow-sm`}>
                                    {active.emoji}
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 font-medium">Quest tiếp theo với {active.name}</div>
                                    <div className="text-sm font-semibold text-slate-800">Khám phá ngay →</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
