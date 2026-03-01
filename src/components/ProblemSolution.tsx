"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Chaos Loop opacity: 1 -> 0 between 0.1 and 0.3
  const chaosOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const chaosScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.9]);
  const chaosY = useTransform(scrollYProgress, [0.1, 0.3], [0, -50]);

  // The Core opacity: 0 -> 1 between 0.3 and 0.5
  const coreOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const coreScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  
  // Radiating lines progress: 0 -> 1 between 0.5 and 0.7
  const linesProgress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The Chaos Loop */}
        <motion.div 
          style={{ opacity: chaosOpacity, scale: chaosScale, y: chaosY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          {/* Dark red tint background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.2)_0%,rgba(5,5,5,1)_70%)]"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white z-10 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            THE CHAOS LOOP
          </h2>
          
          <div className="flex flex-col gap-8 text-xl md:text-3xl font-medium text-gray-400 z-10 text-center">
            <p><span className="glitch font-bold text-red-500" data-text="Sales rơi lead">Sales rơi lead</span> vì phản hồi chậm.</p>
            <p><span className="glitch font-bold text-red-500" data-text="Marketing đốt tiền">Marketing đốt tiền</span> vào tệp rác.</p>
            <p><span className="glitch font-bold text-red-500" data-text="CEO mất ngủ">CEO mất ngủ</span> vì vận hành đứt gãy.</p>
          </div>
        </motion.div>

        {/* The Core */}
        <motion.div 
          style={{ opacity: coreOpacity, scale: coreScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-lg z-0"></div>
          
          {/* Glowing Core */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            
            {/* Core Circle */}
            <div className="absolute w-32 h-32 md:w-56 md:h-56 rounded-full bg-white shadow-[0_0_80px_rgba(255,255,255,1),0_0_150px_rgba(255,255,255,0.5)] flex items-center justify-center z-20">
              <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-white duration-1000"></div>
              <div className="text-center px-4">
                <p className="text-[#050505] font-bold text-sm md:text-xl tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>THE CORE</p>
              </div>
            </div>

            {/* Radiating Lines */}
            <svg className="absolute w-full h-full z-10 pointer-events-none">
              <defs>
                <linearGradient id="grad-strategy" x1="50%" y1="50%" x2="20%" y2="20%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-growth" x1="50%" y1="50%" x2="80%" y2="20%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-operation" x1="50%" y1="50%" x2="50%" y2="80%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <motion.line 
                x1="50%" y1="50%" x2="20%" y2="20%" 
                stroke="url(#grad-strategy)" strokeWidth="3" 
                filter="url(#glow)"
                style={{ pathLength: linesProgress }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="80%" y2="20%" 
                stroke="url(#grad-growth)" strokeWidth="3" 
                filter="url(#glow)"
                style={{ pathLength: linesProgress }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="50%" y2="85%" 
                stroke="url(#grad-operation)" strokeWidth="3" 
                filter="url(#glow)"
                style={{ pathLength: linesProgress }}
              />
            </svg>

            {/* Core Text */}
            <div className="absolute top-[10%] md:top-[15%] max-w-3xl text-center z-30 px-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl">
                <h3 className="text-xl md:text-4xl font-light text-white leading-relaxed">
                  Mục tiêu: Tạo ra đội ngũ AI không chỉ <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">thông minh</span> — mà còn <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#F97316] to-[#F59E0B]">hiểu con người.</span>
                </h3>
              </div>
            </div>

            {/* Layer Labels */}
            <motion.div style={{ opacity: linesProgress }} className="absolute top-[15%] left-[10%] md:left-[15%] z-20">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_15px_#F59E0B] mb-2"></div>
                <span className="text-[#F59E0B] font-bold tracking-widest text-xs md:text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Strategy</span>
              </div>
            </motion.div>
            <motion.div style={{ opacity: linesProgress }} className="absolute top-[15%] right-[10%] md:right-[15%] z-20">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#F97316] shadow-[0_0_15px_#F97316] mb-2"></div>
                <span className="text-[#F97316] font-bold tracking-widest text-xs md:text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Growth</span>
              </div>
            </motion.div>
            <motion.div style={{ opacity: linesProgress }} className="absolute bottom-[10%] left-[50%] -translate-x-1/2 z-20">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4] mb-2"></div>
                <span className="text-[#06B6D4] font-bold tracking-widest text-xs md:text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Operation</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}