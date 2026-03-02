"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft, Zap } from "lucide-react";

const navLinks = [
    { label: "Tính năng", href: "#features" },
    { label: "Hệ sinh thái", href: "#ecosystem" },
    { label: "Giải pháp", href: "#evolution" },
    { label: "Bảng giá", href: "#pricing" },
];

export default function CassieNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-18 flex items-center justify-between">

                {/* Left: Brand */}
                <div className="flex items-center gap-6">
                    {/* Back to main site */}
                    <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
                        <Link
                            href="/"
                            className="hidden md:flex items-center gap-1.5 text-xs font-medium text-white/30 hover:text-white/60 transition-colors group"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                            <span>MercyAgent</span>
                        </Link>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-4 bg-white/10" />

                    {/* CASSIE Brand */}
                    <Link href="/cassie" className="flex items-center gap-2.5 group">
                        <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center overflow-hidden">
                            <img
                                src="/agents/cassie.png"
                                alt="CASSIE"
                                className="w-5 h-5 object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                                }}
                            />
                            <MessageCircle className="hidden w-4 h-4 text-cyan-400" />
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span
                                className="text-base font-bold tracking-wider text-white group-hover:text-blue-200 transition-colors"
                                style={{ letterSpacing: "0.12em" }}
                            >
                                CASSIE
                            </span>
                            <span className="text-[9px] font-medium text-blue-400/70 tracking-[0.15em] uppercase">
                                AI Assistant
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${activeLink === link.href
                                ? "text-blue-300"
                                : "text-white/50 hover:text-white/90"
                                }`}
                        >
                            {/* Hover background */}
                            <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-200" />
                            <span className="relative">{link.label}</span>
                            {/* Active / hover underline */}
                            <span
                                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-300 ${activeLink === link.href
                                    ? "w-3/4 opacity-100"
                                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* Right: CTA */}
                <div className="flex items-center gap-3">
                    {/* Status badge */}
                    <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                        </span>
                        <span className="text-[10px] font-semibold text-green-400/80 tracking-wider uppercase">
                            Đang hoạt động
                        </span>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="/onboarding"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden"
                    >
                        {/* Button background and glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-500" />
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        {/* Glow shadow */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_25px_rgba(59,130,246,0.5)] blur-sm" />

                        <Zap className="relative w-3.5 h-3.5 text-yellow-300 z-10" />
                        <span className="relative z-10">⚡ Kích hoạt CASSIE</span>
                    </motion.a>
                </div>
            </div>

            {/* Bottom gradient line */}
            {scrolled && (
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
                />
            )}
        </motion.header>
    );
}
