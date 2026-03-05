"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const levels = [
    {
        level: 1,
        title: "PROTOTYPE",
        subtitle: "Tốc độ là vũ khí",
        description:
            "Build MVP & Validate Idea trong 24h. Biến ý tưởng mơ hồ thành prototype hoạt động được, nhanh chóng test thị trường.",
        skills: ["Vibe Coding Basics", "Rapid Prototyping", "AI Prompt Engineering", "MVP Validation"],
        color: "#C6FF00",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        level: 2,
        title: "PRODUCTION",
        subtitle: "Sự ổn định",
        description:
            "Xây dựng SaaS, Automation System thực thụ. Code sạch, bảo mật, scalable — sẵn sàng cho người dùng thật.",
        skills: ["Clean Architecture", "Security First", "Database Design", "API Development"],
        color: "#00E5FF",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        ),
    },
    {
        level: 3,
        title: "SCALE",
        subtitle: "Tầm vóc",
        description:
            "Design hệ thống lớn cho Team Dev vận hành. Tư duy kiến trúc, quản lý dự án, và monetization strategy.",
        skills: ["System Design", "Team Management", "Product Strategy", "Revenue Models"],
        color: "#FF6B00",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
];

export default function VCThreeLevels() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeLevel, setActiveLevel] = useState(0);

    return (
        <section
            id="levels"
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            <div className="absolute inset-0 vc-grid-bg pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <div className="w-8 h-[1px] bg-[#C6FF00]" />
                    <span className="text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
                        Section 03 — Lộ trình
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    3 CẤP ĐỘ CỦA{" "}
                    <span className="text-[#C6FF00]">VIBE CODING</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#888] text-base md:text-lg max-w-2xl mb-16"
                >
                    AI có thể viết code nhanh, nhưng{" "}
                    <span className="text-[#C0C0C0] font-medium">Engineer phải chịu trách nhiệm về chất lượng.</span>
                </motion.p>

                {/* Level selector — horizontal progress bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center mb-12 relative"
                >
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#222]" />
                    <div
                        className="absolute top-1/2 left-0 h-[1px] transition-all duration-700"
                        style={{
                            width: `${(activeLevel / (levels.length - 1)) * 100}%`,
                            background: `linear-gradient(90deg, ${levels[0].color}, ${levels[activeLevel].color})`,
                        }}
                    />

                    {levels.map((level, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLevel(i)}
                            className="relative z-10 flex-1 flex flex-col items-center gap-2 group"
                        >
                            <div
                                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-500 ${i <= activeLevel
                                        ? "border-transparent text-[#0A0A0A]"
                                        : "border-[#333] bg-[#141414] text-[#555]"
                                    }`}
                                style={
                                    i <= activeLevel
                                        ? { backgroundColor: level.color, boxShadow: `0 0 20px ${level.color}40` }
                                        : {}
                                }
                            >
                                {level.level}
                            </div>
                            <span
                                className={`text-[10px] font-mono tracking-wider transition-colors duration-300 ${i <= activeLevel ? "text-[#C0C0C0]" : "text-[#555]"
                                    }`}
                            >
                                {level.title}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* Active level detail */}
                <motion.div
                    key={activeLevel}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl border bg-[#141414] p-8 md:p-12 overflow-hidden relative"
                    style={{ borderColor: `${levels[activeLevel].color}20` }}
                >
                    {/* Glow */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10"
                        style={{ backgroundColor: levels[activeLevel].color }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div style={{ color: levels[activeLevel].color }}>
                                    {levels[activeLevel].icon}
                                </div>
                                <div>
                                    <h3
                                        className="text-2xl md:text-3xl font-bold"
                                        style={{ color: levels[activeLevel].color, fontFamily: "Space Grotesk" }}
                                    >
                                        Level {levels[activeLevel].level}: {levels[activeLevel].title}
                                    </h3>
                                    <p className="text-[#888] text-sm font-mono">{levels[activeLevel].subtitle}</p>
                                </div>
                            </div>

                            <p className="text-[#C0C0C0] text-base leading-relaxed mb-6">
                                {levels[activeLevel].description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {levels[activeLevel].skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="px-3 py-1 rounded-lg text-xs font-mono border"
                                        style={{
                                            borderColor: `${levels[activeLevel].color}30`,
                                            backgroundColor: `${levels[activeLevel].color}08`,
                                            color: levels[activeLevel].color,
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Visual - Level meter */}
                        <div className="flex flex-col items-center justify-center gap-2 min-w-[120px]">
                            <div className="relative w-24 h-32 rounded-lg border border-[#333] bg-[#1a1a1a] overflow-hidden">
                                <motion.div
                                    initial={{ height: "0%" }}
                                    animate={{ height: `${((activeLevel + 1) / levels.length) * 100}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 right-0"
                                    style={{
                                        background: `linear-gradient(to top, ${levels[activeLevel].color}40, ${levels[activeLevel].color}10)`,
                                        borderTop: `2px solid ${levels[activeLevel].color}`,
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="text-3xl font-bold"
                                        style={{ color: levels[activeLevel].color, fontFamily: "Space Grotesk" }}
                                    >
                                        {activeLevel + 1}/{levels.length}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-[#555] tracking-wider">MASTERY</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
