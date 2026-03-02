"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CassieCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505] py-32">
      {/* Misty/Foggy Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">

        {/* Cassie Meditating on Digital Cloud */}
        <div className="mb-16 relative">
          {/* Digital Cloud Effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-cyan-400/20 blur-3xl rounded-[100%]"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <img
              src="/agents/cassie.png"
              alt="Cassie Meditating"
              className="w-48 h-48 mx-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              referrerPolicy="no-referrer"
            />

            {/* Meditation Aura */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0, 0.2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border border-cyan-400/30 rounded-full scale-0"
            ></motion.div>
          </motion.div>
        </div>

        {/* Slow Appearing Text */}
        <div className="space-y-8 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-cyan-400/80 font-mono text-sm tracking-[0.3em] uppercase"
          >
            Tôi ở đây để Sếp được nghỉ ngơi
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            "Khách hàng không cần lý do. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white/50">
              Họ cần phản hồi.
            </span>"
          </motion.h2>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Link href="/onboarding" className="group relative inline-flex px-6 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all hover:pr-14 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              ⚡ Kích hoạt CASSIE miễn phí
              <Sparkles className="w-5 h-5 text-cyan-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
          </Link>

          <p className="mt-6 text-gray-500 text-sm font-light">
            Không cần thẻ tín dụng. Cài đặt trong 5 phút.
          </p>
        </motion.div>

      </div>

      {/* Decorative Floating Particles */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
            opacity: 0
          }}
          animate={{
            y: ["-10%", "10%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px] pointer-events-none"
        ></motion.div>
      ))}
    </section>
  );
}
