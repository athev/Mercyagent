"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const testimonials = [
    {
        name: "Minh Tuấn",
        role: "Freelance Developer",
        avatar: "MT",
        color: "var(--vc-lime)",
        quote:
            "Sau 3 tuần học, tôi đã build xong CRM nội bộ cho 1 công ty SME. Client trả 15 triệu cho cái thứ tôi build trong 5 ngày với AI. Đây là công cụ đổi đời.",
        metric: "15M₫ project",
        metricLabel: "trong 5 ngày",
    },
    {
        name: "Lan Anh",
        role: "Marketing Manager → Indie Hacker",
        avatar: "LA",
        color: "var(--vc-chrome)",
        quote:
            "Tôi không biết code. Sau chương trình này, tôi có thể thiết kế hệ thống, chỉ đạo AI viết code, và deploy lên production. Tư duy thay đổi hoàn toàn.",
        metric: "0 → SaaS",
        metricLabel: "không cần background dev",
    },
    {
        name: "Quốc Hưng",
        role: "Senior Developer",
        avatar: "QH",
        color: "#60a5fa", // tailwind blue-400
        quote:
            "Tôi code 8 năm nhưng vẫn học được rất nhiều từ phương pháp AI Orchestration. Đặc biệt là cách thiết lập AI Memory System — thứ không có ở bất kỳ khóa học nào khác.",
        metric: "8x Engineer",
        metricLabel: "tốc độ phát triển",
    },
];

export default function VCTestimonials() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <section
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg)" }}
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
                        Học viên nói gì
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    KẾT QUẢ{" "}
                    <span className="text-[var(--vc-lime)]">THỰC TẾ</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16"
                >
                    Không phải lý thuyết. Đây là những gì học viên đã xây dựng được sau chương trình.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                            className="rounded-xl border border-[#222] bg-[#141414] p-6 relative overflow-hidden group hover:border-[#333] transition-all duration-500"
                        >
                            {/* Glow */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: t.color }}
                            />

                            <div className="relative z-10">
                                {/* Quote marks */}
                                <div className="text-3xl font-serif mb-3" style={{ color: `${t.color}40` }}>&ldquo;</div>

                                <p className="text-[#C0C0C0] text-sm leading-relaxed mb-6">{t.quote}</p>

                                {/* Metric */}
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-6"
                                    style={{ borderColor: `${t.color}30`, backgroundColor: `${t.color}08` }}
                                >
                                    <span className="font-bold text-sm" style={{ color: t.color, fontFamily: "Space Grotesk" }}>
                                        {t.metric}
                                    </span>
                                    <span className="text-[10px] font-mono" style={{ color: `${t.color}80` }}>
                                        {t.metricLabel}
                                    </span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 border-t border-[#222] pt-4">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                                        style={{
                                            backgroundColor: `${t.color}15`,
                                            border: `1px solid ${t.color}30`,
                                            color: t.color,
                                            fontFamily: "Space Grotesk",
                                        }}
                                    >
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="text-[#E8E8E8] text-xs font-bold" style={{ fontFamily: "Space Grotesk" }}>
                                            {t.name}
                                        </p>
                                        <p className="text-[#555] text-[10px] font-mono">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-10 grid grid-cols-3 gap-4 rounded-xl border border-[#1a1a1a] bg-[#0E0E0E] p-6"
                >
                    {[
                        { value: "97%", label: "Hài lòng với chương trình" },
                        { value: "150+", label: "Học viên đã tốt nghiệp" },
                        { value: "4.9★", label: "Đánh giá trung bình" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-[var(--vc-lime)] mb-1" style={{ fontFamily: "Space Grotesk" }}>
                                {stat.value}
                            </p>
                            <p className="text-[#555] text-[10px] font-mono">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
