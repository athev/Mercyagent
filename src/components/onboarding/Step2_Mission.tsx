"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import NeonButton from "./NeonButton";

const SKILLS = [
    {
        id: "support",
        icon: "📞",
        title: "Trực tổng đài 24/7",
        desc: "Phản hồi ngay lập tức, không để khách chờ.",
        color: "#06B6D4",
        glow: "rgba(6,182,212,0.3)",
        mascotAction: "gật đầu",
    },
    {
        id: "lead",
        icon: "🎯",
        title: "Thợ săn Lead",
        desc: "Tự động lọc khách nóng, đẩy về cho Sếp.",
        color: "#8B5CF6",
        glow: "rgba(139,92,246,0.3)",
        mascotAction: "giơ ngón cái",
    },
    {
        id: "sales",
        icon: "💬",
        title: "Chốt đơn chuyên nghiệp",
        desc: "Tư vấn theo kịch bản có sẵn của Sếp.",
        color: "#10B981",
        glow: "rgba(16,185,129,0.3)",
        mascotAction: "gật đầu mạnh",
    },
    {
        id: "followup",
        icon: "🔔",
        title: "Nhắc việc & Follow-up",
        desc: "Không để bất kỳ ai bị 'seen' mà không rep.",
        color: "#F59E0B",
        glow: "rgba(245,158,11,0.3)",
        mascotAction: "vẫy tay",
    },
];

interface Step2Props {
    selected: string[];
    onUpdate: (missions: string[]) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step2_Mission({ selected, onUpdate, onNext, onBack }: Step2Props) {
    const [hovered, setHovered] = useState<string | null>(null);

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            onUpdate(selected.filter((s) => s !== id));
        } else {
            onUpdate([...selected, id]);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-2xl"
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase"
                        style={{
                            borderColor: "rgba(139,92,246,0.4)",
                            background: "rgba(139,92,246,0.06)",
                            color: "#C4B5FD",
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        Bước 2 — Chọn nhiệm vụ
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Sếp muốn CASSIE tập trung vào{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
                        >
                            nhiệm vụ nào?
                        </span>
                    </h2>
                    <p className="text-sm text-white/35">
                        Chọn một hoặc nhiều kỹ năng. CASSIE sẽ được đào tạo chuyên sâu cho những gì Sếp cần.
                    </p>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {SKILLS.map((skill, i) => {
                        const isSelected = selected.includes(skill.id);
                        return (
                            <motion.button
                                key={skill.id}
                                onClick={() => toggle(skill.id)}
                                onHoverStart={() => setHovered(skill.id)}
                                onHoverEnd={() => setHovered(null)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative text-left p-5 rounded-2xl transition-all duration-300 overflow-hidden"
                                style={{
                                    background: isSelected
                                        ? `rgba(${skill.color.replace("#", "").match(/.{2}/g)!.map(v => parseInt(v, 16)).join(",")}, 0.08)`
                                        : "rgba(255,255,255,0.03)",
                                    border: isSelected
                                        ? `1.5px solid ${skill.color}80`
                                        : "1.5px solid rgba(255,255,255,0.06)",
                                    boxShadow: isSelected
                                        ? `0 0 20px ${skill.glow}, 0 0 60px ${skill.glow}`
                                        : "none",
                                }}
                            >
                                {/* Selected glow overlay */}
                                <AnimatePresence>
                                    {isSelected && (
                                        <motion.div
                                            key="glow"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: `radial-gradient(ellipse at top left, ${skill.glow} 0%, transparent 70%)`,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Checkmark */}
                                <AnimatePresence>
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                            className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                                            style={{
                                                background: skill.color,
                                                boxShadow: `0 0 8px ${skill.glow}`,
                                            }}
                                        >
                                            <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none">
                                                <path
                                                    d="M2 5l2.5 2.5L8 3"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Icon */}
                                <motion.div
                                    animate={{
                                        scale: isSelected ? [1, 1.3, 1] : 1,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="text-3xl mb-3"
                                >
                                    {skill.icon}
                                </motion.div>

                                {/* Content */}
                                <h3
                                    className="font-bold text-sm mb-1.5"
                                    style={{ color: isSelected ? skill.color : "rgba(255,255,255,0.85)" }}
                                >
                                    {skill.title}
                                </h3>
                                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                                    {skill.desc}
                                </p>

                                {/* RPG level bar */}
                                <div className="mt-4 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                                    <motion.div
                                        className="h-full rounded-full"
                                        animate={{ width: isSelected ? "80%" : "0%" }}
                                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                        style={{ background: `linear-gradient(to right, ${skill.color}80, ${skill.color})` }}
                                    />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Count indicator */}
                <AnimatePresence>
                    {selected.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="mt-4 text-center text-xs text-white/30"
                        >
                            Đã chọn{" "}
                            <span className="text-cyan-400 font-bold">{selected.length}</span> kỹ năng
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10">
                    <button
                        onClick={onBack}
                        className="text-sm text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5"
                    >
                        ← Quay lại
                    </button>
                    <NeonButton onClick={onNext} disabled={selected.length === 0} className="px-10">
                        Tiếp theo →
                    </NeonButton>
                </div>
            </motion.div>
        </div>
    );
}
