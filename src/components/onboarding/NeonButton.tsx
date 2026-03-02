"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface NeonButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "cyan" | "gold";
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit";
    href?: string;
}

const VARIANTS = {
    cyan: {
        bg: "from-blue-600 via-cyan-600 to-blue-600",
        glow: [
            "0 0 15px rgba(6,182,212,0.5), 0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(6,182,212,0.1)",
            "0 0 25px rgba(6,182,212,0.8), 0 0 60px rgba(59,130,246,0.5), 0 0 120px rgba(6,182,212,0.2)",
            "0 0 15px rgba(6,182,212,0.5), 0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(6,182,212,0.1)",
        ],
        border: "rgba(6,182,212,0.6)",
        text: "text-white",
    },
    gold: {
        bg: "from-yellow-500 via-amber-400 to-orange-500",
        glow: [
            "0 0 15px rgba(245,158,11,0.5), 0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(245,158,11,0.1)",
            "0 0 30px rgba(245,158,11,0.9), 0 0 70px rgba(251,191,36,0.5), 0 0 130px rgba(245,158,11,0.3)",
            "0 0 15px rgba(245,158,11,0.5), 0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(245,158,11,0.1)",
        ],
        border: "rgba(245,158,11,0.6)",
        text: "text-black",
    },
};

export default function NeonButton({
    children,
    onClick,
    variant = "cyan",
    disabled = false,
    className = "",
    type = "button",
    href,
}: NeonButtonProps) {
    const v = VARIANTS[variant];

    const inner = (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.03 }}
            whileTap={disabled ? {} : { scale: 0.97 }}
            animate={
                disabled
                    ? { boxShadow: "none" }
                    : { boxShadow: v.glow }
            }
            transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.15 },
            }}
            className={`
        relative group overflow-hidden rounded-full
        px-8 py-4 font-bold text-base tracking-wide
        bg-gradient-to-r ${v.bg} ${v.text}
        transition-opacity duration-200
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
            style={{
                border: `1px solid ${v.border}`,
            }}
        >
            {/* Shimmer sweep */}
            {!disabled && (
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {inner}
            </a>
        );
    }

    return inner;
}
