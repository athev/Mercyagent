"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const bonuses = [
    "Bộ AI Memory System (Rules, Skills, Checkpoints) độc quyền",
    "Template: Technical Spec → Production-ready Code",
    "12 Agent Prompt Library — sẵn sàng điều phối",
    "Private Community — hỗ trợ trọn đời",
    "Cập nhật miễn phí khi có module mới",
];

export default function VCPricing() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="pricing"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            <div className="absolute inset-0 vc-grid-bg pointer-events-none" />

            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(198,255,0,0.15) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[#C6FF00]" />
                    <span className="text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
                        Section 07 — Đăng ký
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    THE FINAL{" "}
                    <span className="text-[#C6FF00]">COMMIT</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-12"
                >
                    Không phải là học phí. Đây là{" "}
                    <span className="text-[#C6FF00] font-semibold">phí nâng cấp phần cứng bộ não</span>.
                </motion.p>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative rounded-2xl border border-[#C6FF00]/20 p-[1px] mb-12 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, rgba(198,255,0,0.15), rgba(198,255,0,0.02), rgba(198,255,0,0.08))",
                    }}
                >
                    <div className="rounded-2xl bg-[#0E0E0E] p-8 md:p-12 relative overflow-hidden">
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/[0.02] via-transparent to-[#C6FF00]/[0.01]" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-[#222]">
                                <div>
                                    <span className="text-[10px] font-mono text-[#C6FF00] tracking-widest block mb-2">
                                        AI-FIRST ENGINEER PROGRAM
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#E8E8E8]" style={{ fontFamily: "Space Grotesk" }}>
                                        Vibe Coding Mastery
                                    </h3>
                                    <p className="text-[#888] text-sm mt-1">9 modules • Lifetime access • Private community</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-[10px] font-mono text-[#555] mb-1">INVESTMENT</p>
                                    <p className="text-4xl md:text-5xl font-bold text-[#C6FF00]" style={{ fontFamily: "Space Grotesk" }}>
                                        Liên hệ
                                    </p>
                                    <p className="text-[#888] text-xs mt-1">Ưu đãi Early Bird có hạn</p>
                                </div>
                            </div>

                            {/* What's included */}
                            <div className="mb-8">
                                <h4 className="text-[#C0C0C0] text-sm font-bold mb-4" style={{ fontFamily: "Space Grotesk" }}>
                                    BẠN SẼ NHẬN ĐƯỢC:
                                </h4>
                                <div className="space-y-3">
                                    {bonuses.map((bonus, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full border border-[#C6FF00]/30 bg-[#C6FF00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#C6FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-[#C0C0C0] text-sm">{bonus}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => window.open("https://droppii.vn/", "_blank")}
                                className="w-full py-4 rounded-xl bg-[#C6FF00] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase vc-glow-btn hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
                                style={{ fontFamily: "Space Grotesk" }}
                            >
                                <span className="flex items-center justify-center gap-3">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Trở thành AI-First Engineer ngay
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="rounded-xl border border-[#222] bg-[#141414] p-6 md:p-8 text-center"
                >
                    <div className="text-2xl mb-3">🤝</div>
                    <h4 className="text-[#E8E8E8] text-sm font-bold mb-2" style={{ fontFamily: "Space Grotesk" }}>
                        CAM KẾT TỪ NGƯỜI SÁNG LẬP
                    </h4>
                    <p className="text-[#888] text-xs leading-relaxed max-w-lg mx-auto">
                        &ldquo;Nếu sau khóa học, bạn không thể tự tay vận hành một đội quân AI để build nên một{" "}
                        <span className="text-[#C6FF00]">Micro-SaaS trị giá ngàn đô</span>, tôi sẽ trực tiếp review hệ thống
                        của bạn cho đến khi nó chạy.&rdquo;
                    </p>
                    <p className="text-[10px] font-mono text-[#555] mt-4 tracking-wider">
                        10 NĂM KINH NGHIỆM • CAM KẾT KẾT QUẢ • KHÔNG RỦI RO
                    </p>
                </motion.div>

                {/* Bottom insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#888] text-xs leading-relaxed max-w-md mx-auto italic">
                        &ldquo;Trong kỷ nguyên AI,{" "}
                        <span className="text-[#C6FF00] not-italic font-semibold">Product Thinking</span> là vị vua mới.
                        Code chỉ là quân lính. Kẻ biết điều binh khiển tướng mới là kẻ thắng cuộc.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
