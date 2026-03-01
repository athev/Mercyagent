"use client";

import { motion } from 'motion/react';

const chaosItems = [
  "Quy trình rối loạn",
  "Data rời rạc",
  "Nhân sự yếu",
  "Marketing không chiến lược"
];

export default function ChaosLoop() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden">
      
      {/* Dark red/black gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 3 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.15)_0%,rgba(5,5,5,1)_80%)]"
        />
        {/* Subtle distortion overlay (Noise) */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-screen" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* Text Blocks (Cinematic Build-up) */}
        <div className="flex flex-col items-center gap-8 md:gap-12 mb-24 w-full">
          {chaosItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase flex flex-wrap justify-center gap-x-4 gap-y-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.split(' ').map((word, wIdx) => (
                  <span key={wIdx} className="flex">
                    {word.split('').map((char, cIdx) => {
                      // Deterministic broken effect for specific characters
                      const isBroken = (index + wIdx + cIdx) % 7 === 0;
                      return (
                        <motion.span
                          key={cIdx}
                          className={`inline-block ${isBroken ? 'text-red-700 -skew-x-12 translate-y-[2px]' : 'text-gray-500'}`}
                          animate={isBroken ? { 
                            opacity: [0.4, 1, 0.4],
                            x: [-1, 1, -1]
                          } : {}}
                          transition={isBroken ? { 
                            duration: 0.1, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            delay: (cIdx * 0.1) % 0.5
                          } : {}}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                ))}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Main Title: THE CHAOS LOOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 2, delay: chaosItems.length * 0.5 + 0.5, ease: "easeInOut" }}
          className="relative text-center"
        >
          {/* Intense Red Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-red-600/20 blur-[80px] rounded-full animate-pulse pointer-events-none"></div>
          
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-900 relative z-10"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="glitch" data-text="THE CHAOS LOOP">THE CHAOS LOOP</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: chaosItems.length * 0.5 + 2.5 }}
            className="mt-8 text-red-500/80 font-mono text-sm tracking-widest uppercase"
          >
            System Failure Imminent
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
