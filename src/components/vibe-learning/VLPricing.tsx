"use client";

import { motion } from "motion/react";
import { Check, Zap, Crown, Briefcase } from "lucide-react";

const plans = [
    {
        name: "Free",
        subtitle: "Khám phá trước khi cam kết",
        price: "0",
        currency: "đ",
        period: "/ tháng",
        icon: "🎒",
        color: "from-slate-500 to-slate-600",
        borderColor: "border-slate-200",
        features: [
            "5 Quest miễn phí",
            "1 AI Mentor (Marketing)",
            "AI Feedback cơ bản",
            "Learning Feed (giới hạn)",
            "Dashboard cá nhân",
        ],
        cta: "Bắt đầu miễn phí",
        ctaStyle: "bg-slate-900 text-white hover:bg-slate-800",
        highlight: false,
    },
    {
        name: "Pro",
        subtitle: "Dành cho người muốn tiến nhanh",
        price: "299,000",
        currency: "đ",
        period: "/ tháng",
        icon: "⚡",
        color: "from-violet-600 to-blue-600",
        borderColor: "border-violet-300",
        shadowColor: "shadow-violet-500/20",
        features: [
            "Toàn bộ 500+ Quest",
            "5 AI Mentor",
            "AI Feedback nâng cao + điểm số",
            "Skill Tree đầy đủ",
            "Daily Brain Warmup",
            "Memory Reinforcement AI",
            "AI Simulation (khách hàng/sếp/đồng nghiệp)",
            "Learning Feed không giới hạn",
            "Cộng đồng Discord riêng",
        ],
        cta: "Nâng cấp Pro",
        ctaStyle: "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-violet-500/40",
        highlight: true,
        badge: "Phổ biến nhất",
    },
    {
        name: "Elite",
        subtitle: "Học xong là có job thật ngay",
        price: "799,000",
        currency: "đ",
        period: "/ tháng",
        icon: "👑",
        color: "from-amber-500 to-orange-500",
        borderColor: "border-amber-200",
        shadowColor: "shadow-amber-500/10",
        features: [
            "Tất cả tính năng Pro",
            "Job Bridge — kết nối việc làm thật",
            "Skill Certificate AI-verified",
            "Public profile portfolio",
            "Priority Queue trên Marketplace",
            "Community Quest cùng người học khác",
            "AI Personal Learning Map",
            "1-on-1 onboarding 30 phút",
        ],
        cta: "Trở thành Elite",
        ctaStyle: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-amber-500/40",
        highlight: false,
    },
];

export default function VLPricing() {
    return (
        <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Học phí
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Đầu tư vào kỹ năng,
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                            không vào bằng cấp.
                        </span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Học miễn phí 5 Quest đầu. Nâng cấp khi bạn thấy kết quả thật.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`relative flex flex-col rounded-3xl border-2 ${plan.borderColor} ${plan.highlight
                                    ? `bg-gradient-to-b from-violet-50 to-blue-50 shadow-2xl ${plan.shadowColor} scale-105`
                                    : "bg-white shadow-sm hover:shadow-md"
                                } p-8 transition-all duration-300`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold shadow-md whitespace-nowrap">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-6">
                                <div className="text-3xl mb-3">{plan.icon}</div>
                                <div className="font-bold text-slate-900 text-xl">{plan.name}</div>
                                <div className="text-slate-400 text-sm mt-1">{plan.subtitle}</div>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 text-sm">{plan.currency}{plan.period}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 flex-1 mb-8">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${plan.color} bg-clip-text`}
                                            style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.3))" }}
                                        />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#"
                                className={`block w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all hover:scale-[1.02] hover:shadow-lg ${plan.ctaStyle}`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Trust note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-xs text-slate-400 mt-8"
                >
                    ✦ Thanh toán qua thẻ nội địa, chuyển khoản, ví điện tử &nbsp;·&nbsp; Hoàn tiền 7 ngày nếu không hài lòng
                </motion.p>
            </div>
        </section>
    );
}
