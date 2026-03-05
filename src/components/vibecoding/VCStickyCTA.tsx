"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function VCStickyCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Show after scrolling past the hero (~100vh)
            if (window.scrollY > window.innerHeight * 0.8) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleCTA = () => {
        const el = document.querySelector("#pricing");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (dismissed) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[90] px-4 pb-4 pointer-events-none"
                >
                    <div className="max-w-2xl mx-auto pointer-events-auto">
                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--vc-lime)]/20 bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_-4px_40px_rgba(59,130,246,0.08)] px-4 py-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--vc-lime)] animate-pulse flex-shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-[#E8E8E8] text-xs font-bold truncate" style={{ fontFamily: "Space Grotesk" }}>
                                        Early Bird còn 12 suất
                                    </p>
                                    <p className="text-[#888] text-[10px] font-mono hidden sm:block">
                                        5,900,000₫ — tiết kiệm 3,000,000₫ so với giá gốc
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    onClick={handleCTA}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--vc-lime)] text-[#0A0A0A] font-bold text-xs tracking-wider uppercase vc-glow-btn hover:scale-105 active:scale-95 transition-transform duration-200"
                                    style={{ fontFamily: "Space Grotesk" }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Đăng ký
                                </button>
                                <button
                                    onClick={() => setDismissed(true)}
                                    className="w-7 h-7 rounded-lg border border-[#333] bg-[#141414] hover:border-[#555] flex items-center justify-center text-[#555] hover:text-[#888] transition-all duration-200"
                                    aria-label="Đóng"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
