"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sparkles, Play } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ParticleConfig {
  count?: number;
  minSpeed?: number;
  maxSpeed?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}

export default function CassieHero({
  particleConfig = {
    count: 30,
    minSpeed: 10,
    maxSpeed: 30,
    color: "bg-blue-400/40",
    minSize: 1,
    maxSize: 4
  }
}: {
  particleConfig?: ParticleConfig
}) {
  const [mounted, setMounted] = useState(false);
  const { count = 30, minSpeed = 10, maxSpeed = 30, color = "bg-blue-400/40", minSize = 1, maxSize = 4 } = particleConfig;

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position into subtle movement offsets for different layers
  const orb1X = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const orb2X = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const orb2Y = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  const orb3X = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const orb3Y = useTransform(smoothMouseY, [-1, 1], [50, -50]);

  useEffect(() => {
    setMounted(true);

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const supportingLines = [
    "24/7 phản hồi",
    "Không mệt",
    "Không đòi tăng lương",
    "Không bỏ sót lead",
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Gradients & Orbs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Deep background color */}
        <div className="absolute inset-0 bg-[#030712]"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        {/* Main glowing orb */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#1e3a8a_0%,#3b82f6_50%,#1e3a8a_100%)] blur-[120px] md:blur-[160px] opacity-40"
        />

        {/* Secondary orb */}
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/30 blur-[100px]"
        />

        {/* Third orb for depth */}
        <motion.div
          style={{ x: orb3X, y: orb3Y }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        {/* Floating Particles */}
        {mounted && (
          <div className="absolute inset-0">
            {Array.from({ length: count }).map((_, i) => {
              const size = Math.random() * (maxSize - minSize) + minSize;
              return (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${color} shadow-[0_0_10px_rgba(96,165,250,0.5)]`}
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{
                    y: 0,
                    opacity: Math.random() * 0.5 + 0.1,
                  }}
                  animate={{
                    y: [0, -150],
                    opacity: [null, Math.random() * 0.8 + 0.2, 0],
                  }}
                  transition={{
                    duration: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Support & Sales Assistant</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200/50"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hi Sếp, CASSIE đây.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-blue-100/70 font-light max-w-2xl mb-12 leading-relaxed"
        >
          CASSIE giúp Sếp không bỏ lỡ bất kỳ khách hàng nào.
        </motion.p>

        {/* Supporting Lines */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {supportingLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 text-blue-200/60 text-sm md:text-base bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              {line}
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/onboarding" className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">⚡ Kích hoạt CASSIE ngay</span>
          </Link>

          <Link href="/onboarding" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium text-lg border border-white/10 hover:bg-white/10 transition-all hover:border-white/20">
            <Play className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span>Trải nghiệm miễn phí</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
