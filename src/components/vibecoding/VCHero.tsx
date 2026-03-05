"use client";

import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

const terminalLines = [
    { text: "$ initializing neural_architect.exe...", delay: 0 },
    { text: "[OK] Loading AI Orchestration Core v4.2", delay: 0.3 },
    { text: "[OK] Connecting to Multi-Agent Pipeline...", delay: 0.6 },
    { text: "[OK] System Thinking Module: ACTIVE", delay: 0.9 },
    { text: "[OK] Product Thinking Module: ACTIVE", delay: 1.1 },
    { text: "$ Ready. Welcome, AI-First Engineer.", delay: 1.4 },
];

const codeSnippets = [
    "const agent = new AIOrchestrator();",
    "await agent.deployPipeline(specs);",
    "system.architect.initialize();",
    "pipeline.execute(modules);",
    "security.sandbox.activate();",
    "const revenue = product.monetize();",
    "team.agents.synchronize();",
    "deploy.production.launch();",
    "database.schema.generate();",
    "api.endpoints.validate();",
    "testing.coverage.verify();",
    "const saas = builder.create();",
];

export default function VCHero() {
    const [bootComplete, setBootComplete] = useState(false);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setBootComplete(true), 1400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="manifesto"
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden vc-scanline-overlay"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            {/* Code Rain Background */}
            {mounted && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {codeSnippets.map((snippet, i) => (
                        <div
                            key={i}
                            className="absolute text-[var(--vc-lime)]/10 font-mono text-[10px] whitespace-nowrap"
                            style={{
                                left: `${(i / codeSnippets.length) * 100}%`,
                                animation: `vc-code-rain ${8 + Math.random() * 12}s linear ${Math.random() * 5}s infinite`,
                            }}
                        >
                            {snippet}
                        </div>
                    ))}
                </div>
            )}

            {/* Grid overlay */}
            <div className="absolute inset-0 vc-grid-bg pointer-events-none z-[1]" />

            {/* Central glow orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, var(--vc-lime-dim) 0%, rgba(59,130,246,0.02) 50%, transparent 70%)",
                    }}
                />
            </div>

            {/* Terminal Boot Sequence */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: bootComplete ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ backgroundColor: "var(--vc-bg)" }}
            >
                <div className="max-w-lg w-full px-6">
                    <div className="rounded-lg border border-[var(--vc-lime)]/20 bg-[#0A0A0A] p-6 font-mono text-xs">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#333]">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <span className="ml-3 text-[#666] text-[10px]">neural_architect — zsh</span>
                        </div>
                        {terminalLines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: line.delay, duration: 0.3 }}
                                className={`mb-1.5 ${line.text.includes("[OK]") ? "text-[var(--vc-lime)]" : "text-[#888]"
                                    }`}
                            >
                                {line.text}
                                {i === terminalLines.length - 1 && (
                                    <span
                                        className="inline-block w-2 h-3.5 bg-[var(--vc-lime)] ml-1 align-middle"
                                        style={{ animation: "vc-cursor-blink 1s step-end infinite" }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto w-full pt-24">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--vc-lime)]/20 bg-[var(--vc-lime)]/5 text-[var(--vc-lime)] text-xs font-mono tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--vc-lime)] animate-pulse" />
                        KHÓA HỌC AI-FIRST ENGINEERING
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{
                        opacity: bootComplete ? 1 : 0,
                        y: bootComplete ? 0 : 40,
                        filter: bootComplete ? "blur(0px)" : "blur(10px)",
                    }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.95]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    <span className="text-[#E8E8E8]">AI-FIRST</span>{" "}
                    <span className="text-[var(--vc-lime)] vc-text-glow">ENGINEER</span>
                    <br />
                    <span className="text-[#C0C0C0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
                        ONE PERSON TECH TEAM
                    </span>
                </motion.h1>

                {/* Subheadline updated to 4 Không */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col items-center gap-4 mb-8"
                >
                    <p className="text-base sm:text-lg md:text-xl text-[var(--vc-white)] max-w-3xl leading-relaxed font-medium">
                        Kỷ nguyên Vibe Coding. Xây Micro-SaaS với nguyên tắc 4 KHÔNG:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-[var(--vc-gray)] font-mono">
                        <span className="flex items-center gap-2"><span className="text-[var(--vc-lime)]">✗</span> Không Cần Cú Pháp</span>
                        <span className="flex items-center gap-2"><span className="text-[var(--vc-lime)]">✗</span> Không Thuộc Logic</span>
                        <span className="flex items-center gap-2"><span className="text-[var(--vc-lime)]">✗</span> Không Cài Đặt Môi Trường</span>
                        <span className="flex items-center gap-2"><span className="text-[var(--vc-lime)]">✗</span> Không Sợ Fix Bug</span>
                    </div>
                </motion.div>

                {/* Key phrases */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : 20 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {["System Thinking", "AI Orchestration", "Product Building", "10x Speed"].map(
                        (tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 rounded border border-[#333] bg-[#141414] text-[#C0C0C0] text-xs font-mono tracking-wider"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: bootComplete ? 1 : 0,
                        scale: bootComplete ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    onClick={() => {
                        const el = document.querySelector("#pricing");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group relative px-8 py-4 rounded-lg overflow-hidden bg-[var(--vc-lime)] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase vc-glow-btn hover:scale-105 transition-transform duration-300"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Trở thành Architect — Đăng ký ngay
                    </span>
                </motion.button>

                {/* Bottom text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: bootComplete ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="mt-6 text-[10px] font-mono text-[#555] tracking-wider"
                >
                    10 NĂM KINH NGHIỆM • PHƯƠNG PHÁP ĐỘC QUYỀN • SYSTEM DESIGN FIRST
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: bootComplete ? 1 : 0 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[10px] font-mono text-[#555] tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-7 rounded-full border border-[#333] flex items-start justify-center p-1"
                >
                    <div className="w-1 h-1.5 rounded-full bg-[var(--vc-lime)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
