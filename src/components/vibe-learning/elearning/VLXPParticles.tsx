"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export default function VLXPParticles({ amount = 15, onComplete }: { amount?: number, onComplete?: () => void }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: amount }).map((_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 300, // Random horizontal spread
            y: -Math.random() * 300 - 100, // Random upward distance
            size: Math.random() * 1.5 + 0.5, // Random scale 0.5 to 2
            duration: Math.random() * 0.8 + 0.8, // 0.8s to 1.6s
            delay: Math.random() * 0.2, // Small delay for stagger
        }));

        setParticles(newParticles);

        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [amount, onComplete]);

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50 overflow-visible">
            {/* Center +10 XP text popup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: -50 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute flex items-center gap-2 text-3xl font-bold text-amber-500 z-50 drop-shadow-lg"
                style={{ textShadow: "0 0 20px rgba(245, 158, 11, 0.4)" }}
            >
                <Sparkles className="w-8 h-8 fill-amber-500" />
                +10 XP
            </motion.div>

            {/* Exploding particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, opacity: 1, scale: p.size }}
                    animate={{
                        x: p.x,
                        y: p.y,
                        opacity: 0,
                        scale: p.size * 0.5
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: [0.23, 1, 0.32, 1] // Custom ease out
                    }}
                    className="absolute w-3 h-3 md:w-4 md:h-4 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                    style={{
                        originX: 0.5,
                        originY: 0.5,
                    }}
                >
                    <Sparkles className="w-full h-full text-white opacity-80" />
                </motion.div>
            ))}
        </div>
    );
}
