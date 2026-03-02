"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useRef } from "react";
import NeonButton from "./NeonButton";

const INDUSTRIES = [
    { icon: "🛒", label: "E-commerce" },
    { icon: "🏠", label: "Bất động sản" },
    { icon: "🍜", label: "F&B" },
    { icon: "📚", label: "Giáo dục" },
    { icon: "💊", label: "Sức khoẻ" },
    { icon: "✨", label: "Làm đẹp" },
    { icon: "💻", label: "Công nghệ" },
    { icon: "🏗️", label: "Khác" },
];

const ALIAS_PRESETS = ["CASSIE", "Trợ lý", "Tự chọn"];

// Platform SVG logos
const FacebookLogo = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect width="24" height="24" rx="6" fill="#1877F2" />
        <path
            d="M16.5 12H13.5V9.75C13.5 9.336 13.836 9 14.25 9H15.75V6H13.5C11.843 6 10.5 7.343 10.5 9V12H8.25V15H10.5V22.5H13.5V15H15.75L16.5 12Z"
            fill="white"
        />
    </svg>
);

const TikTokLogo = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect width="24" height="24" rx="6" fill="#010101" />
        <path
            d="M19.59 7a4.31 4.31 0 0 1-4.3-4.3V2h-2.89v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.53a5.77 5.77 0 0 0-.79-.05 5.77 5.77 0 0 0-5.77 5.77 5.77 5.77 0 0 0 5.77 5.77 5.77 5.77 0 0 0 5.77-5.77V8.63a7.17 7.17 0 0 0 4.19 1.34V7.08A4.32 4.32 0 0 1 19.59 7z"
            fill="white"
        />
        <path
            d="M19.59 7a4.31 4.31 0 0 1-4.3-4.3V2h-2.89v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.53a5.77 5.77 0 0 0-.79-.05 5.77 5.77 0 0 0-5.77 5.77 5.77 5.77 0 0 0 5.77 5.77 5.77 5.77 0 0 0 5.77-5.77V8.63a7.17 7.17 0 0 0 4.19 1.34V7.08"
            fill="#EE1D52"
            opacity="0.4"
        />
        <path
            d="M17.5 6.5a4.31 4.31 0 0 0 2.09.58V4.71a4.32 4.32 0 0 1-2.09-.71v2.5z"
            fill="#69C9D0"
        />
    </svg>
);

const ShopeeLogo = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect width="24" height="24" rx="6" fill="#EE4D2D" />
        <path
            d="M12 3.5C10.07 3.5 8.5 5.07 8.5 7H7L6 18.5H18L17 7H15.5C15.5 5.07 13.93 3.5 12 3.5ZM12 5C13.1 5 14 5.9 14 7H10C10 5.9 10.9 5 12 5ZM12 11C13.66 11 15 12.34 15 14C15 15.66 13.66 17 12 17C10.34 17 9 15.66 9 14C9 12.34 10.34 11 12 11Z"
            fill="white"
        />
        <circle cx="12" cy="14" r="1.5" fill="#EE4D2D" />
    </svg>
);

const WebsiteLogo = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect width="24" height="24" rx="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
        <circle cx="12" cy="12" r="7" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="12" rx="3.5" ry="7" stroke="#06B6D4" strokeWidth="1.2" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="#06B6D4" strokeWidth="1.2" />
        <line x1="6.5" y1="8" x2="17.5" y2="8" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
        <line x1="6.5" y1="16" x2="17.5" y2="16" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
    </svg>
);

interface PlatformConfig {
    label: string;
    Logo: () => React.ReactElement;
    color: string;
    glow: string;
}

const PLATFORMS: PlatformConfig[] = [
    { label: "Facebook", Logo: FacebookLogo, color: "rgba(24,119,242,0.6)", glow: "rgba(24,119,242,0.25)" },
    { label: "TikTok", Logo: TikTokLogo, color: "rgba(238,29,82,0.6)", glow: "rgba(238,29,82,0.25)" },
    { label: "Shopee", Logo: ShopeeLogo, color: "rgba(238,77,45,0.6)", glow: "rgba(238,77,45,0.25)" },
    { label: "Website", Logo: WebsiteLogo, color: "rgba(6,182,212,0.6)", glow: "rgba(6,182,212,0.25)" },
];


interface Particle {
    id: number;
    x: number;
    y: number;
    angle: number;
}

interface Step1Props {
    data: { businessName: string; agentAlias: string; industry: string; zaloNumber: string; platforms: string[] };
    onUpdate: (data: Partial<Step1Props["data"]>) => void;
    onNext: () => void;
}

export default function Step1_Identity({ data, onUpdate, onNext }: Step1Props) {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [aliasMode, setAliasMode] = useState<string>(
        ALIAS_PRESETS.includes(data.agentAlias) ? data.agentAlias : "Tự chọn"
    );
    const particleIdRef = useRef(0);

    const spawnParticles = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const rect = (e.target as HTMLInputElement).getBoundingClientRect();
        const newParticles: Particle[] = Array.from({ length: 6 }, () => ({
            id: particleIdRef.current++,
            x: (e as any).clientX - rect.left || Math.random() * rect.width,
            y: 0,
            angle: Math.random() * 360,
        }));
        setParticles((p) => [...p, ...newParticles]);
        setTimeout(
            () =>
                setParticles((p) =>
                    p.filter((pt) => !newParticles.find((np) => np.id === pt.id))
                ),
            900
        );
    }, []);

    const isValid =
        data.businessName.trim().length > 0 &&
        data.agentAlias.trim().length > 0 &&
        data.industry &&
        data.zaloNumber.trim().length >= 9 &&
        data.platforms.length > 0;

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            {/* Background radar rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[200, 350, 500, 680].map((size, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.08, 0.18, 0.08],
                        }}
                        transition={{
                            duration: 3 + i * 0.7,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: size,
                            height: size,
                            border: "1px solid rgba(6,182,212,0.5)",
                        }}
                    />
                ))}
                {/* Scan line */}
                <motion.div
                    className="absolute left-0 right-0 h-px pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, transparent, rgba(6,182,212,0.6), transparent)",
                    }}
                    initial={{ top: "0%", opacity: 0 }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.5, ease: "linear", delay: 0.3 }}
                />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 w-full max-w-xl"
            >
                {/* Heading */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase"
                        style={{
                            borderColor: "rgba(6,182,212,0.4)",
                            background: "rgba(6,182,212,0.06)",
                            color: "#67E8F9",
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Bước 1 — Xác nhận quyết định
                    </motion.div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                        Sếp sắp kích hoạt{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #06B6D4, #3B82F6)",
                            }}
                        >
                            CASSIE.
                        </span>
                    </h1>
                    <p className="text-sm text-white/40 leading-relaxed max-w-sm mx-auto">
                        Chào Sếp, CASSIE cần hiểu về{" "}
                        <span className="text-cyan-400/70">'ngôi nhà'</span> của Sếp để bắt đầu trực chiến.
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-7">
                    {/* Business Name */}
                    <GlassInput
                        label="Tên của Sếp là gì?"
                        placeholder="VD: Trung, Lan Anh..."
                        value={data.businessName}
                        onChange={(v) => onUpdate({ businessName: v })}
                        onInput={spawnParticles}
                        particles={particles}
                    />

                    {/* Agent Alias */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                            Sếp muốn CASSIE xưng hô với khách là?
                        </label>
                        <div className="flex flex-wrap gap-3 mb-2">
                            {ALIAS_PRESETS.map((preset) => (
                                <button
                                    key={preset}
                                    onClick={() => {
                                        setAliasMode(preset);
                                        if (preset !== "Tự chọn") onUpdate({ agentAlias: preset });
                                        else onUpdate({ agentAlias: "" });
                                    }}
                                    className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200"
                                    style={{
                                        background:
                                            aliasMode === preset
                                                ? "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(59,130,246,0.15))"
                                                : "rgba(255,255,255,0.04)",
                                        border:
                                            aliasMode === preset
                                                ? "1px solid rgba(6,182,212,0.6)"
                                                : "1px solid rgba(255,255,255,0.08)",
                                        color: aliasMode === preset ? "#67E8F9" : "rgba(255,255,255,0.4)",
                                        boxShadow:
                                            aliasMode === preset
                                                ? "0 0 12px rgba(6,182,212,0.2)"
                                                : "none",
                                    }}
                                >
                                    {preset}
                                </button>
                            ))}
                        </div>
                        {aliasMode === "Tự chọn" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                            >
                                <GlassInput
                                    placeholder="Nhập tên bạn muốn..."
                                    value={data.agentAlias}
                                    onChange={(v) => onUpdate({ agentAlias: v })}
                                    onInput={spawnParticles}
                                    particles={particles}
                                />
                            </motion.div>
                        )}
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                            Lĩnh vực kinh doanh
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                            {INDUSTRIES.map(({ icon, label }) => {
                                const isSelected = data.industry === label;
                                return (
                                    <motion.button
                                        key={label}
                                        onClick={() => onUpdate({ industry: label })}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-center transition-all duration-200"
                                        style={{
                                            background: isSelected
                                                ? "rgba(6,182,212,0.12)"
                                                : "rgba(255,255,255,0.03)",
                                            border: isSelected
                                                ? "1px solid rgba(6,182,212,0.5)"
                                                : "1px solid rgba(255,255,255,0.06)",
                                            boxShadow: isSelected ? "0 0 16px rgba(6,182,212,0.2)" : "none",
                                        }}
                                    >
                                        <span className="text-2xl">{icon}</span>
                                        <span
                                            className="text-[9px] font-medium"
                                            style={{ color: isSelected ? "#67E8F9" : "rgba(255,255,255,0.35)" }}
                                        >
                                            {label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Zalo Number */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                            Số Zalo của Sếp
                        </label>
                        <div className="relative">
                            {/* Prefix with divider */}
                            <div
                                className="absolute left-0 top-0 bottom-0 flex items-center px-4 gap-2 pointer-events-none"
                                style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                <span className="text-sm">🇻🇳</span>
                                <span className="text-sm font-bold" style={{ color: "rgba(6,182,212,0.9)" }}>+84</span>
                            </div>
                            <input
                                type="tel"
                                value={data.zaloNumber}
                                onChange={(e) =>
                                    onUpdate({ zaloNumber: e.target.value.replace(/[^0-9]/g, "") })
                                }
                                onInput={spawnParticles}
                                placeholder="0909 123 456"
                                maxLength={11}
                                className="w-full pl-24 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(12px)",
                                }}
                                onFocus={(e) => {
                                    e.target.style.border = "1px solid rgba(6,182,212,0.5)";
                                    e.target.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.08), 0 0 20px rgba(6,182,212,0.1)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                        </div>
                        <p className="text-[10px] text-white/20">
                            CASSIE sẽ dùng số này để báo cáo và nhận lệnh từ Sếp qua Zalo
                        </p>
                    </div>

                    {/* Platforms */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                            CASSIE trực thay Sếp trên nền tảng nào?
                        </label>
                        <p className="text-[10px] text-white/25 -mt-1">Chọn một hoặc nhiều nền tảng</p>
                        <div className="grid grid-cols-4 gap-3">
                            {PLATFORMS.map(({ Logo, label, color, glow }) => {
                                const isSelected = data.platforms.includes(label);
                                const togglePlatform = () => {
                                    const updated = isSelected
                                        ? data.platforms.filter((p) => p !== label)
                                        : [...data.platforms, label];
                                    onUpdate({ platforms: updated });
                                };
                                return (
                                    <motion.button
                                        key={label}
                                        onClick={togglePlatform}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center gap-2.5 py-5 px-2 rounded-2xl text-center transition-all duration-200 relative overflow-hidden"
                                        style={{
                                            background: isSelected
                                                ? `rgba(${color.match(/\d+/g)!.slice(0, 3).join(",")},0.1)`
                                                : "rgba(255,255,255,0.03)",
                                            border: isSelected
                                                ? `1.5px solid ${color}`
                                                : "1px solid rgba(255,255,255,0.06)",
                                            boxShadow: isSelected ? `0 0 20px ${glow}` : "none",
                                        }}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                                                style={{ background: color }}
                                            >
                                                <svg viewBox="0 0 8 8" className="w-2 h-2" fill="none">
                                                    <path d="M1.5 4l1.5 1.5L6.5 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </motion.div>
                                        )}
                                        <div className="scale-125 origin-center">
                                            <Logo />
                                        </div>
                                        <span
                                            className="text-[10px] font-semibold mt-0.5"
                                            style={{ color: isSelected ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                                        >
                                            {label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <motion.div
                    className="mt-10 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <NeonButton onClick={onNext} disabled={!isValid} className="px-12">
                        Tiếp theo →
                    </NeonButton>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Glassmorphism Input Component
function GlassInput({
    label,
    placeholder,
    value,
    onChange,
    onInput,
    particles,
}: {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (v: string) => void;
    onInput: (e: React.FormEvent<HTMLInputElement>) => void;
    particles: Particle[];
}) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onInput={onInput}
                    placeholder={placeholder}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:placeholder:opacity-0"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(12px)",
                    }}
                    onFocus={(e) => {
                        e.target.style.border = "1px solid rgba(6,182,212,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.08), 0 0 20px rgba(6,182,212,0.1)";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                    }}
                />
                {/* Particles */}
                <AnimatePresence>
                    {particles.slice(-8).map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute w-1 h-1 rounded-full pointer-events-none"
                            style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: 0,
                                background: "rgba(6,182,212,0.9)",
                                boxShadow: "0 0 4px rgba(6,182,212,1)",
                            }}
                            initial={{ opacity: 1, y: 0, scale: 1 }}
                            animate={{
                                y: -(20 + Math.random() * 30),
                                x: (Math.random() - 0.5) * 30,
                                opacity: 0,
                                scale: 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
