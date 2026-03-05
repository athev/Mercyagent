"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

const comparisons = [
    {
        label: "Chi phí build CRM/ERP",
        old: "500 triệu VNĐ",
        new: "~0 VNĐ",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        label: "Thời gian phát triển",
        old: "3 tháng",
        new: "5 ngày",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        label: "Quy mô đội ngũ",
        old: "5-10 người",
        new: "1 người",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        label: "Tốc độ thực thi",
        old: "1x",
        new: "100x",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

export default function VCMarketShift() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            id="market"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg-alt)" }}
        >
            {/* Grid bg */}
            <div className="absolute inset-0 vc-grid-bg pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[var(--vc-lime)]" />
                    <span className="text-[var(--vc-lime)] text-xs font-mono tracking-widest uppercase">
                        Section 02 — Thị trường
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    THỊ TRƯỜNG ĐÃ{" "}
                    <span className="text-[var(--vc-lime)]">THAY ĐỔI</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16 leading-relaxed"
                >
                    CRM/ERP riêng từng là xa xỉ phẩm hàng trăm triệu. Nay, chi phí giảm{" "}
                    <span className="text-[var(--vc-lime)] font-semibold">10 lần</span>. Tốc độ tăng{" "}
                    <span className="text-[var(--vc-lime)] font-semibold">100 lần</span>.
                </motion.p>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comparisons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            className="group relative rounded-xl border border-[#222] bg-[#141414] p-6 hover:border-[var(--vc-lime)]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--vc-lime)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-[var(--vc-lime)]">{item.icon}</div>
                                    <h3 className="text-[#C0C0C0] text-sm font-mono tracking-wider uppercase">
                                        {item.label}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Old value */}
                                    <div className="flex-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] p-4 text-center">
                                        <p className="text-[10px] font-mono text-[#666] mb-1 uppercase tracking-wider">Trước đây</p>
                                        <p className="text-lg md:text-xl font-bold text-red-400/80 line-through decoration-red-500/40">
                                            {item.old}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <svg className="w-6 h-6 text-[var(--vc-lime)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>

                                    {/* New value */}
                                    <div className="flex-1 rounded-lg bg-[var(--vc-lime)]/[0.05] border border-[var(--vc-lime)]/20 p-4 text-center">
                                        <p className="text-[10px] font-mono text-[var(--vc-lime)]/60 mb-1 uppercase tracking-wider">Bây giờ</p>
                                        <p className="text-lg md:text-xl font-bold text-[var(--vc-lime)]">
                                            {item.new}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Big stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { value: 100, suffix: "x", label: "Tốc độ thực thi", sub: "so với quy trình truyền thống", color: "var(--vc-lime)" },
                        { value: 500, suffix: "M₫", prefix: "-", label: "Chi phí tiết kiệm", sub: "build CRM/ERP với AI thay vì outsource", color: "var(--vc-chrome)" },
                        { value: 5, suffix: " ngày", label: "Ra thị trường", sub: "từ ý tưởng đến prototype chạy được", color: "var(--vc-chrome)" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-[#222] bg-[#141414] p-6 text-center"
                            style={{ borderColor: `${stat.color}15` }}
                        >
                            <p className="text-[#888] text-[10px] font-mono tracking-wider mb-3 uppercase">{stat.label}</p>
                            <p className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "Space Grotesk", color: stat.color }}>
                                {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-[#555] text-[10px] font-mono leading-relaxed">{stat.sub}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
