"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface CassieMascotProps {
    step: number;
}

const STEP_MESSAGES: Record<number, string> = {
    1: "Chào Sếp! Cho tôi biết về 'ngôi nhà' của Sếp nhé!",
    2: "Tôi sẵn sàng học các kỹ năng Sếp cần!",
    3: "Đây là gói phù hợp nhất với Sếp đó!",
    4: "Hệ thống sẵn sàng rồi Sếp ơi! 🎉",
};

export default function CassieMascot({ step }: CassieMascotProps) {
    const [showTooltip, setShowTooltip] = useState(true);
    const isSuccess = step === 4;

    // Auto-hide tooltip after delay, then re-show on step change
    useEffect(() => {
        setShowTooltip(true);
        const timer = setTimeout(() => {
            if (!isSuccess) setShowTooltip(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, [step, isSuccess]);

    return (
        <motion.div
            className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-2"
            animate={{
                y: isSuccess ? [-0, -40, -30] : 0,
            }}
            transition={{
                duration: isSuccess ? 1.2 : 0.5,
                ease: isSuccess ? [0.23, 1, 0.32, 1] : "easeOut",
            }}
        >
            {/* Tooltip */}
            <AnimatePresence mode="wait">
                {showTooltip && (
                    <motion.div
                        key={`tooltip-step-${step}`}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 5 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-[160px] px-3 py-2 rounded-xl text-xs text-right leading-relaxed"
                        style={{
                            background: "rgba(6, 182, 212, 0.08)",
                            border: "1px solid rgba(6, 182, 212, 0.25)",
                            backdropFilter: "blur(12px)",
                            color: "#A5F3FC",
                        }}
                    >
                        {STEP_MESSAGES[step]}
                        {/* Tail */}
                        <div
                            className="absolute bottom-2 right-[-6px] w-3 h-3 rotate-45"
                            style={{
                                background: "rgba(6, 182, 212, 0.08)",
                                borderRight: "1px solid rgba(6, 182, 212, 0.25)",
                                borderTop: "1px solid rgba(6, 182, 212, 0.25)",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mascot circle */}
            <div
                className="relative cursor-pointer"
                onClick={() => setShowTooltip((v) => !v)}
            >
                {/* Radar rings */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full"
                        animate={{
                            scale: [1, 1.8 + ring * 0.3],
                            opacity: [0.4, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            delay: ring * 0.6,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                        style={{
                            border: `1px solid rgba(6, 182, 212, ${0.6 - ring * 0.15})`,
                        }}
                    />
                ))}

                {/* Main circle */}
                <motion.div
                    animate={{
                        boxShadow: isSuccess
                            ? [
                                "0 0 20px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.3)",
                                "0 0 40px rgba(245,158,11,0.9), 0 0 100px rgba(245,158,11,0.5)",
                                "0 0 20px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.3)",
                            ]
                            : [
                                "0 0 15px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)",
                                "0 0 25px rgba(6,182,212,0.7), 0 0 60px rgba(6,182,212,0.3)",
                                "0 0 15px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)",
                            ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                        background: isSuccess
                            ? "radial-gradient(circle, rgba(245,158,11,0.2), rgba(245,158,11,0.05))"
                            : "radial-gradient(circle, rgba(6,182,212,0.15), rgba(59,130,246,0.05))",
                        border: isSuccess
                            ? "1.5px solid rgba(245,158,11,0.5)"
                            : "1.5px solid rgba(6,182,212,0.4)",
                    }}
                >
                    <img
                        src="/agents/cassie.png"
                        alt="Cassie"
                        className="w-9 h-9 object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                    {/* Fallback icon */}
                    <span className="absolute text-xl">🤖</span>
                </motion.div>

                {/* Success sparkles */}
                {isSuccess &&
                    [0, 60, 120, 180, 240, 300].map((deg, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-yellow-300"
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{
                                x: Math.cos((deg * Math.PI) / 180) * 35,
                                y: Math.sin((deg * Math.PI) / 180) * 35,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.08,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />
                    ))}
            </div>
        </motion.div>
    );
}
