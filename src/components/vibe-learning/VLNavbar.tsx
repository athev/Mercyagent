"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, BookOpen, Zap } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

export default function VLNavbar() {
    const { data: session } = useSession();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { href: "#mentors", label: "AI Mentors" },
        { href: "#quests", label: "Quest" },
        { href: "#skill-tree", label: "Skill Tree" },
        { href: "#pricing", label: "Học phí" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/vibe-learning" className="flex items-center gap-2.5">
                    <motion.div
                        whileHover={{ rotate: 15 }}
                        className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30"
                    >
                        <BookOpen className="w-4 h-4 text-white" />
                    </motion.div>
                    <div>
                        <span className="font-bold text-slate-900 tracking-tight">Vibe</span>
                        <span className="font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent tracking-tight"> Learning</span>
                    </div>
                </Link>

                {/* Nav links – desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    {session ? (
                        <Link
                            href="/profile"
                            className="flex items-center gap-3 group px-1 py-1 pr-4 rounded-full bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all"
                        >
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-violet-200 bg-violet-50">
                                {session.user?.image ? (
                                    <Image 
                                        src={session.user.image} 
                                        alt="Profile" 
                                        fill 
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[10px] text-violet-600 font-bold">
                                        {session.user?.name?.[0] || 'U'}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-xs font-bold leading-tight">
                                    {session.user?.name?.split(' ')[0] || 'User'}
                                </span>
                                <span className="text-violet-600 text-[10px] leading-tight font-medium group-hover:underline">
                                    Học viện →
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => signIn("google")}
                                className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
                            >
                                Đăng nhập
                            </button>
                            <Link
                                href="/onboarding"
                                className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all flex items-center gap-2"
                            >
                                <Zap className="w-3.5 h-3.5" />
                                Bắt đầu học
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-4 py-4 flex flex-col gap-4"
                    >
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-medium text-slate-700 py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Bắt đầu học
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
