"use client";

import { motion } from "motion/react";
import { Check, Shield } from "lucide-react";
import NeonButton from "./NeonButton";

const FEATURES = [
    "Trực 24/7 — không nghỉ lễ, không nghỉ bệnh",
    "Phân loại lead thông minh theo độ nóng",
    "Nhắc follow-up tự động với lịch sử hội thoại",
    "Chuyển khách phức tạp cho nhân sự ngay lập tức",
    "Báo cáo hiệu suất hàng tuần qua Zalo",
];

const TRUST_BADGES = [
    { icon: "🔓", text: "Không phí ẩn" },
    { icon: "📅", text: "Không hợp đồng dài hạn" },
    { icon: "✋", text: "Dừng bất kỳ lúc nào" },
];

interface Step3Props {
    onNext: () => void;
    onBack: () => void;
    businessName: string;
}

export default function Step3_Pricing({ onNext, onBack, businessName }: Step3Props) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-md"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase"
                        style={{
                            borderColor: "rgba(245,158,11,0.4)",
                            background: "rgba(245,158,11,0.06)",
                            color: "#FCD34D",
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Bước 3 — Gói dịch vụ
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">
                        {businessName ? `Gói cho Sếp ${businessName}` : "Gói Sếp đã chọn"}
                    </h2>
                </div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden p-7"
                    style={{
                        background:
                            "linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                        border: "1.5px solid rgba(245,158,11,0.25)",
                        boxShadow:
                            "0 0 40px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                >
                    {/* Background glow */}
                    <div
                        className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(245,158,11,0.1), transparent 70%)",
                        }}
                    />

                    {/* Plan badge */}
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Shield className="w-4 h-4 text-yellow-400" />
                                <span
                                    className="text-xs font-bold tracking-widest uppercase"
                                    style={{ color: "#FCD34D" }}
                                >
                                    CASSIE PROTECT
                                </span>
                            </div>
                            <p className="text-white/30 text-xs">Gói bảo vệ toàn diện</p>
                        </div>
                        <div
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                                background: "rgba(245,158,11,0.12)",
                                border: "1px solid rgba(245,158,11,0.3)",
                                color: "#FCD34D",
                            }}
                        >
                            PHỔ BIẾN NHẤT
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/5">
                        <div className="flex items-end gap-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl font-bold text-white"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                1.490.000đ
                            </motion.span>
                            <span className="text-white/30 text-sm mb-1.5">/ tháng</span>
                        </div>
                        <p className="text-xs text-white/25 mt-1">
                            ≈ 50.000đ/ngày — rẻ hơn 1 tô bún bò
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {FEATURES.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.08 }}
                                className="flex items-start gap-3"
                            >
                                <div
                                    className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                                    style={{ background: "rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.4)" }}
                                >
                                    <Check className="w-2.5 h-2.5 text-cyan-400" strokeWidth={3} />
                                </div>
                                <span className="text-sm text-white/70 leading-relaxed">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex justify-between pt-4 border-t border-white/5">
                        {TRUST_BADGES.map(({ icon, text }) => (
                            <div key={text} className="flex flex-col items-center gap-1 text-center">
                                <span className="text-base">{icon}</span>
                                <span className="text-[9px] text-white/30 font-medium leading-tight max-w-[60px]">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 flex flex-col items-center gap-4"
                >
                    <NeonButton onClick={onNext} variant="gold" className="w-full justify-center text-lg py-5">
                        ⚡ Xác nhận thanh toán
                    </NeonButton>
                    <p className="text-xs text-white/20 text-center">
                        Bằng cách tiếp tục, Sếp đồng ý với các điều khoản dịch vụ của CASSIE
                    </p>
                </motion.div>

                {/* Back */}
                <div className="mt-6 text-center">
                    <button
                        onClick={onBack}
                        className="text-sm text-white/25 hover:text-white/50 transition-colors"
                    >
                        ← Quay lại
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
