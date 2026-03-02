"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import NeonButton from "./NeonButton";
import { MessageCircle } from "lucide-react";

// Zalo deep link — strips leading 0 and prepends +84
function buildZaloLink(phone: string): string {
    const cleaned = phone.replace(/^0/, "");
    return `https://zalo.me/${cleaned}`;
}

interface Step4Props {
    businessName: string;
    agentAlias: string;
    zaloNumber: string;
}

export default function Step4_Success({ businessName, agentAlias, zaloNumber }: Step4Props) {
    const [phase, setPhase] = useState(0);
    const zaloLink = zaloNumber ? buildZaloLink(zaloNumber) : "https://zalo.me/cassieai";

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 100),
            setTimeout(() => setPhase(2), 700),
            setTimeout(() => setPhase(3), 1200),
            setTimeout(() => setPhase(4), 1800),
            setTimeout(() => setPhase(5), 2400),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
            {/* Gold burst background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: phase >= 1 ? [0, 0.7, 0.4] : 0,
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0) 0%, transparent 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.25) 0%, rgba(251,191,36,0.05) 50%, transparent 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, rgba(251,191,36,0.02) 50%, transparent 100%)",
                    ],
                }}
                transition={{ duration: 1.2, times: [0, 0.4, 1] }}
            />

            {/* Gold ring burst */}
            {phase >= 1 && (
                <>
                    {[100, 200, 320, 460].map((size, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                            initial={{ width: 0, height: 0, opacity: 0.8 }}
                            animate={{ width: size, height: size, opacity: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
                            style={{
                                border: `1.5px solid rgba(245,158,11,${0.7 - i * 0.15})`,
                                boxShadow: `0 0 20px rgba(245,158,11,0.3)`,
                            }}
                        />
                    ))}
                </>
            )}

            {/* Floating gold particles (continuous) */}
            {phase >= 2 &&
                Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full pointer-events-none"
                        style={{
                            background: i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#FCD34D" : "#FBBF24",
                            left: `${10 + Math.random() * 80}%`,
                            top: `${20 + Math.random() * 60}%`,
                            boxShadow: `0 0 4px rgba(245,158,11,0.8)`,
                        }}
                        animate={{
                            y: [0, -(30 + Math.random() * 60)],
                            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
                            opacity: [0, 0.9, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            delay: Math.random() * 3,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2,
                            ease: "easeOut",
                        }}
                    />
                ))}

            {/* Content */}
            <div className="relative z-10 text-center max-w-md">
                {/* Cassie mascot — flies up */}
                <AnimatePresence>
                    {phase >= 1 && (
                        <motion.div
                            initial={{ y: 60, opacity: 0, scale: 0.8 }}
                            animate={{
                                y: phase >= 2 ? [-10, -30, -20] : 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                y: {
                                    duration: phase >= 2 ? 2 : 0.6,
                                    repeat: phase >= 2 ? Infinity : 0,
                                    ease: "easeInOut",
                                },
                                opacity: { duration: 0.5 },
                                scale: { duration: 0.5, type: "spring" },
                            }}
                            className="flex justify-center mb-8"
                        >
                            <div className="relative">
                                {/* Golden glow ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    animate={{
                                        boxShadow: [
                                            "0 0 30px rgba(245,158,11,0.5), 0 0 80px rgba(245,158,11,0.25)",
                                            "0 0 50px rgba(245,158,11,0.8), 0 0 120px rgba(245,158,11,0.4)",
                                            "0 0 30px rgba(245,158,11,0.5), 0 0 80px rgba(245,158,11,0.25)",
                                        ],
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
                                    style={{
                                        background: "radial-gradient(circle, rgba(245,158,11,0.2), rgba(245,158,11,0.05))",
                                        border: "2px solid rgba(245,158,11,0.5)",
                                    }}
                                >
                                    <img
                                        src="/agents/cassie.png"
                                        alt="Cassie"
                                        className="w-16 h-16 object-contain"
                                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                                    />
                                </div>

                                {/* Sparkle stars */}
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 text-yellow-300 text-xs pointer-events-none"
                                        animate={{
                                            x: Math.cos((deg * Math.PI) / 180) * (50 + Math.sin(Date.now() + i) * 5),
                                            y: Math.sin((deg * Math.PI) / 180) * (50 + Math.cos(Date.now() + i) * 5),
                                            rotate: [0, 360],
                                            opacity: [0.4, 1, 0.4],
                                            scale: [0.8, 1.2, 0.8],
                                        }}
                                        transition={{
                                            duration: 2 + i * 0.2,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        ✦
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main message */}
                <AnimatePresence>
                    {phase >= 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase"
                                style={{
                                    borderColor: "rgba(245,158,11,0.4)",
                                    background: "rgba(245,158,11,0.08)",
                                    color: "#FCD34D",
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                Kích hoạt thành công
                            </div>
                            <h1
                                className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FCD34D 50%, #F59E0B 100%)",
                                    fontFamily: "var(--font-display)",
                                }}
                            >
                                Hệ thống đã sẵn sàng.
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Sub message from Cassie */}
                <AnimatePresence>
                    {phase >= 4 && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                            className="mb-8"
                        >
                            <div
                                className="mx-auto max-w-sm px-6 py-5 rounded-2xl text-sm leading-relaxed text-left"
                                style={{
                                    background: "rgba(245,158,11,0.06)",
                                    border: "1px solid rgba(245,158,11,0.2)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)" }}
                                    >
                                        <span className="text-xs">C</span>
                                    </div>
                                    <span className="text-xs font-semibold text-yellow-400/80">
                                        {agentAlias || "CASSIE"}
                                    </span>
                                </div>
                                <p className="text-white/75">
                                    <strong className="text-yellow-300">{agentAlias || "CASSIE"}</strong> sẽ nhắn qua{" "}
                                    <strong className="text-white">ZALO</strong> cho {businessName ? `Sếp ${businessName}` : "Sếp"} để bắt đầu hỗ trợ từ giây phút này.{" "}
                                    <strong className="text-yellow-300">Sếp để ý tin nhắn nhé!</strong>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Zalo CTA */}
                <AnimatePresence>
                    {phase >= 5 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <NeonButton variant="gold" href={zaloLink} className="px-10">
                                <MessageCircle className="w-4 h-4" />
                                Nhắn ZALO cho CASSIE ngay
                            </NeonButton>
                            <p className="text-xs text-white/20">
                                hoặc chờ CASSIE chủ động nhắn cho Sếp trong vài phút
                            </p>

                            {/* Summary box */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 flex gap-4 text-center"
                            >
                                {[
                                    { label: "Phản hồi đầu tiên", value: "< 30 giây" },
                                    { label: "Hoạt động", value: "24/7" },
                                    { label: "Bắt đầu từ", value: "Hôm nay" },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex flex-col gap-0.5">
                                        <span className="text-xs font-bold text-yellow-400">{value}</span>
                                        <span className="text-[9px] text-white/25 uppercase tracking-wider">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
