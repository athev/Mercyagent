"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { label: "Tuyên ngôn", href: "#manifesto" },
    { label: "Thị trường", href: "#market" },
    { label: "Lộ trình", href: "#levels" },
    { label: "Chương trình", href: "#modules" },
    { label: "AI Team", href: "#ai-team" },
    { label: "Lợi thế", href: "#edge" },
];

export default function VCNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[var(--vc-lime)]/10 shadow-[0_4px_30px_var(--vc-lime)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded border border-[var(--vc-lime)]/40 flex items-center justify-center bg-[var(--vc-lime)]/5 group-hover:bg-[var(--vc-lime)]/15 transition-all">
                        <span className="text-[var(--vc-lime)] font-bold text-sm font-mono">
                            VC
                        </span>
                    </div>
                    <span className="text-[#E8E8E8] font-bold text-sm tracking-wider hidden sm:block" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        VIBE<span className="text-[var(--vc-lime)]">CODING</span>
                    </span>
                </button>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="px-3 py-1.5 text-xs font-mono text-[#888] hover:text-[var(--vc-lime)] transition-colors duration-300 tracking-wider uppercase"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={() => handleClick("#pricing")}
                    className="hidden lg:flex items-center gap-2 px-4 py-2 rounded border border-[var(--vc-lime)]/30 bg-[var(--vc-lime)]/5 hover:bg-[var(--vc-lime)]/15 text-[var(--vc-lime)] text-xs font-bold tracking-wider uppercase transition-all duration-300"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--vc-lime)] animate-pulse" />
                    Đăng ký ngay
                </button>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                >
                    <span className={`w-5 h-0.5 bg-[var(--vc-lime)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-5 h-0.5 bg-[var(--vc-lime)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`w-5 h-0.5 bg-[var(--vc-lime)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[var(--vc-lime)]/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleClick(link.href)}
                                    className="text-left px-3 py-2 text-sm font-mono text-[#888] hover:text-[var(--vc-lime)] transition-colors border-l-2 border-transparent hover:border-[var(--vc-lime)]/50"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
