"use client";

import { motion } from "motion/react";
import { BookOpen, Sword, BarChart3, Briefcase, ArrowRight } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: BookOpen,
        emoji: "🧠",
        title: "Learn",
        subtitle: "AI Mentor giải thích",
        description:
            "AI Mentor giới thiệu Quest, cung cấp context và hướng dẫn tool cần dùng. Không có bài giảng 2 tiếng — chỉ brief ngắn gọn rồi làm ngay.",
        color: "from-blue-500 to-violet-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-600",
        pillColor: "bg-blue-100 text-blue-700",
    },
    {
        step: "02",
        icon: Sword,
        emoji: "⚔️",
        title: "Do",
        subtitle: "Thực chiến với AI",
        description:
            "Bạn thực hiện Quest trong workspace — viết hook, tạo landing page, build automation. AI ở bên cạnh để hỗ trợ, không làm thay.",
        color: "from-violet-500 to-pink-500",
        bgColor: "bg-violet-50",
        borderColor: "border-violet-200",
        textColor: "text-violet-600",
        pillColor: "bg-violet-100 text-violet-700",
    },
    {
        step: "03",
        icon: BarChart3,
        emoji: "📊",
        title: "Improve",
        subtitle: "AI phân tích & phản hồi",
        description:
            "AI Feedback Engine đánh giá output ngay lập tức với điểm số, highlight cụ thể và gợi ý cải thiện. Bạn có thể làm lại để tăng điểm.",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-600",
        pillColor: "bg-emerald-100 text-emerald-700",
    },
    {
        step: "04",
        icon: Briefcase,
        emoji: "💰",
        title: "Earn",
        subtitle: "Job Bridge mở ra",
        description:
            "Sau khi đạt đủ level, AI đề xuất job thật từ Vibework Marketplace. Skill của bạn là portfolio — không cần CV, không cần phỏng vấn kiểu cũ.",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        textColor: "text-amber-600",
        pillColor: "bg-amber-100 text-amber-700",
    },
];

export default function VLHowItWorks() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Vibe Learning Flow
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Learn → Do → Improve →{" "}
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                            Earn
                        </span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Một vòng lặp hoàn hảo: học xong là làm được, làm xong là kiếm được.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="group"
                        >
                            <div
                                className={`relative h-full rounded-3xl border-2 ${s.borderColor} ${s.bgColor} p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                            >
                                {/* Step Number */}
                                <div className="absolute top-5 right-5 font-mono text-4xl font-bold text-slate-900/5">
                                    {s.step}
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg mb-5`}
                                >
                                    {s.emoji}
                                </div>

                                {/* Badge */}
                                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${s.pillColor} mb-3`}>
                                    {s.title}
                                </div>

                                <h3 className={`text-base font-bold ${s.textColor} mb-2`}>{s.subtitle}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                            </div>

                            {/* Arrow between cards */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:flex justify-center mt-2">
                                    <ArrowRight className="w-4 h-4 text-slate-300" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Daily Brain Warmup callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                >
                    <div className="text-5xl flex-shrink-0">⚡</div>
                    <div className="flex-1 text-center sm:text-left">
                        <div className="text-xs font-mono font-bold text-white/60 tracking-widest uppercase mb-1">Daily Brain Warmup</div>
                        <h3 className="text-xl font-bold mb-1">3 phút mỗi sáng — AI đặt câu hỏi, bạn trả lời</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Hệ thống Memory Reinforcement hỏi lại kiến thức cũ sau 3, 7 và 14 ngày — theo phương pháp spaced repetition được AI tối ưu.
                        </p>
                    </div>
                    <a
                        href="#pricing"
                        className="flex-shrink-0 px-6 py-3 rounded-full bg-white text-violet-700 font-bold text-sm hover:bg-violet-50 transition-colors shadow-lg"
                    >
                        Trải nghiệm ngay
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
