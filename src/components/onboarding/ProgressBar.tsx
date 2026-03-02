"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
    step: number;
    total: number;
}

const STEP_LABELS = ["Định danh", "Nhiệm vụ", "Gói dịch vụ", "Kích hoạt"];

export default function ProgressBar({ step, total }: ProgressBarProps) {
    const progress = ((step - 1) / (total - 1)) * 100;

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Background track */}
            <div className="h-[2px] w-full bg-white/5" />

            {/* Glowing light thread */}
            <motion.div
                className="absolute top-0 left-0 h-[2px] origin-left"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{
                    background: "linear-gradient(to right, #06B6D4, #3B82F6, #8B5CF6)",
                    boxShadow: "0 0 8px #06B6D4, 0 0 20px #3B82F6, 0 0 40px rgba(139,92,246,0.4)",
                }}
            >
                {/* Bright tip */}
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                        background: "white",
                        boxShadow: "0 0 6px 2px #06B6D4, 0 0 16px 4px #3B82F6",
                    }}
                />
            </motion.div>

            {/* Step dots and labels */}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-0">
                    {STEP_LABELS.map((label, i) => {
                        const stepNum = i + 1;
                        const isComplete = step > stepNum;
                        const isActive = step === stepNum;

                        return (
                            <div key={i} className="flex items-center">
                                {/* Connector line */}
                                {i > 0 && (
                                    <motion.div
                                        className="h-px w-12 sm:w-20"
                                        animate={{
                                            background: isComplete || (isActive && i === step - 1)
                                                ? "linear-gradient(to right, #06B6D4, #3B82F6)"
                                                : "rgba(255,255,255,0.1)",
                                            boxShadow: isComplete
                                                ? "0 0 6px rgba(6,182,212,0.6)"
                                                : "none",
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                )}

                                <div className="flex flex-col items-center gap-1.5">
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.15 : 1,
                                            background: isComplete
                                                ? "linear-gradient(135deg, #06B6D4, #3B82F6)"
                                                : isActive
                                                    ? "linear-gradient(135deg, #1e3a5f, #1d4ed8)"
                                                    : "rgba(255,255,255,0.05)",
                                            boxShadow: isActive
                                                ? "0 0 12px rgba(59,130,246,0.8), 0 0 30px rgba(6,182,212,0.4)"
                                                : isComplete
                                                    ? "0 0 8px rgba(6,182,212,0.5)"
                                                    : "none",
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="w-7 h-7 rounded-full flex items-center justify-center border"
                                        style={{
                                            borderColor: isActive
                                                ? "#3B82F6"
                                                : isComplete
                                                    ? "#06B6D4"
                                                    : "rgba(255,255,255,0.1)",
                                        }}
                                    >
                                        {isComplete ? (
                                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2 6l3 3 5-5"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <span
                                                className={`text-[10px] font-bold ${isActive ? "text-blue-200" : "text-white/30"
                                                    }`}
                                            >
                                                {stepNum}
                                            </span>
                                        )}
                                    </motion.div>

                                    <motion.span
                                        animate={{
                                            color: isActive ? "#93C5FD" : isComplete ? "#67E8F9" : "rgba(255,255,255,0.25)",
                                        }}
                                        className="text-[9px] font-semibold tracking-widest uppercase hidden sm:block"
                                    >
                                        {label}
                                    </motion.span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
