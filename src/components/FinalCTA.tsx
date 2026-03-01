"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#0A1128] to-[#050505]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Soft glowing orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#06B6D4]/10 to-[#3B82F6]/10 blur-[100px]"
        />
        
        {/* Soft particle animation */}
        {mounted && (
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 30 }).map((_, i) => {
              const size = Math.random() * 2 + 1;
              return (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{
                    y: 0,
                    opacity: Math.random() * 0.3 + 0.1,
                  }}
                  animate={{
                    y: [0, -50],
                    opacity: [null, Math.random() * 0.6 + 0.2, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
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
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            The Age of Intelligent Mercy <br className="hidden md:block" />
            Has Begun.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Your business doesn't need more people.
            <br />
            <span className="text-white font-medium">It needs fewer weak links.</span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <button className="w-full sm:w-auto group relative px-8 py-4 rounded-full overflow-hidden bg-white text-black font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-2">
              Activate Mercy Protocol
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto group relative px-8 py-4 rounded-full overflow-hidden bg-transparent border border-white/20 text-white font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              Book Onboarding Call
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
