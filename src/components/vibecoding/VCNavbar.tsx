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
    { label: "Đăng ký", href: "#pricing" },
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
            transition={{ duration: 0.8, delay: 2.5 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#C6FF00]/10 shadow-[0_4px_30px_rgba(198,255,0,0.05)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded border border-[#C6FF00]/40 flex items-center justify-center bg-[#C6FF00]/5 group-hover:bg-[#C6FF00]/15 transition-all">
                        <span className="text-[#C6FF00] font-bold text-sm font-mono">
                            VC
                        </span>
                    </div>
                    <span className="text-[#E8E8E8] font-bold text-sm tracking-wider hidden sm:block" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        VIBE<span className="text-[#C6FF00]">CODING</span>
                    </span>
                </button>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="px-3 py-1.5 text-xs font-mono text-[#888] hover:text-[#C6FF00] transition-colors duration-300 tracking-wider uppercase"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={() => handleClick("#pricing")}
                    className="hidden lg:flex items-center gap-2 px-4 py-2 rounded border border-[#C6FF00]/30 bg-[#C6FF00]/5 hover:bg-[#C6FF00]/15 text-[#C6FF00] text-xs font-bold tracking-wider uppercase transition-all duration-300"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00] animate-pulse" />
                    Đăng ký ngay
                </button>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                >
                    <span className={`w-5 h-0.5 bg-[#C6FF00] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-5 h-0.5 bg-[#C6FF00] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`w-5 h-0.5 bg-[#C6FF00] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C6FF00]/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleClick(link.href)}
                                    className="text-left px-3 py-2 text-sm font-mono text-[#888] hover:text-[#C6FF00] transition-colors border-l-2 border-transparent hover:border-[#C6FF00]/50"
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
