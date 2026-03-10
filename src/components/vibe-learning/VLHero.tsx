"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight, Star } from "lucide-react";

const floatingWords = [
    { text: "Hook Viral", x: "10%", y: "20%", color: "text-violet-400" },
    { text: "Landing Page", x: "80%", y: "15%", color: "text-blue-400" },
    { text: "Video AI", x: "15%", y: "75%", color: "text-emerald-400" },
    { text: "Market Research", x: "75%", y: "70%", color: "text-amber-400" },
    { text: "Automation", x: "5%", y: "50%", color: "text-rose-400" },
    { text: "AI Prompt", x: "88%", y: "45%", color: "text-cyan-400" },
];

const stats = [
    { value: "500+", label: "Quest thực chiến" },
    { value: "40%", label: "Tăng retention" },
    { value: "5", label: "AI Mentor" },
    { value: "10x", label: "Năng suất làm việc" },
];

export default function VLHero() {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
    const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });
    const orbX = useTransform(smoothX, [0, 1], [-60, 60]);
    const orbY = useTransform(smoothY, [0, 1], [-40, 40]);

    useEffect(() => {
        setMounted(true);
        const handler = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, [mouseX, mouseY]);

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 40%, #faf5ff 100%)" }}
        >
            {/* Mesh gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        x: orbX,
                        y: orbY,
                        background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{
                        background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(59,130,246,0.08) 60%, transparent 80%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Floating quest words */}
            {mounted &&
                floatingWords.map((w, i) => (
                    <motion.div
                        key={i}
                        className={`absolute text-xs font-mono font-semibold ${w.color} opacity-30 select-none pointer-events-none`}
                        style={{ left: w.x, top: w.y }}
                        animate={{ y: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{
                            duration: 4 + i * 0.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        }}
                    >
                        {w.text}
                    </motion.div>
                ))}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full pt-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-violet-200 shadow-sm backdrop-blur-sm mb-8"
                >
                    <Sparkles className="w-4 h-4 text-violet-500" />
                    <span className="text-sm font-medium text-violet-600">
                        AI Training Ground — Thuộc hệ sinh thái Vibework
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-slate-900"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    Đừng học nữa.
                    <br />
                    <span
                        className="bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% 100%" }}
                    >
                        Hãy bắt đầu làm
                    </span>
                    <br />
                    <span className="text-slate-400 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
                        việc cùng AI.
                    </span>
                </motion.h1>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light"
                >
                    Mỗi kỹ năng là một nhiệm vụ thật. AI Mentor giao Quest,
                    bạn thực chiến, AI đánh giá, bạn tiến bộ —{" "}
                    <strong className="text-slate-700 font-semibold">rồi kiếm tiền.</strong>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <a
                        href="#quests"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-base shadow-[0_8px_32px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
                    >
                        <span>🚀 Bắt đầu nhiệm vụ</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#mentors"
                        className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-slate-200 text-slate-700 font-semibold text-base hover:bg-white hover:border-violet-200 hover:shadow-md transition-all duration-300"
                    >
                        Chọn AI Mentor
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-violet-100 transition-all"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{s.value}</div>
                            <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Users Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 flex items-center gap-3"
                >
                    <div className="flex -space-x-2">
                        {["🧑‍💼", "👩‍💻", "🧑‍🎨", "👩‍🚀", "🧑‍🔬"].map((emoji, i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 border-2 border-white flex items-center justify-center text-sm shadow-sm"
                            >
                                {emoji}
                            </div>
                        ))}
                    </div>
                    <div className="text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span>+2,000 người đang học kèm AI</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border-2 border-slate-200 flex items-start justify-center p-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-violet-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
