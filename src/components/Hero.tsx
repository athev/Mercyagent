"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const brokenLines = t('hero.brokenLines');

  return (
    <section className={`relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#050505] to-[#0A1128]' 
        : 'bg-gradient-to-b from-slate-50 to-blue-50'
    }`}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Floating Abstract AI Core Visual (Orb) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#06B6D4]/20 to-[#3B82F6]/20 blur-[80px] md:blur-[120px]"
        />
        
        {/* Subtle animated particles */}
        {mounted && (
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 40 }).map((_, i) => {
              const size = Math.random() * 2 + 1;
              return (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-blue-400'}`}
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
                    y: [0, -100],
                    opacity: [null, Math.random() * 0.5 + 0.1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 15 + 10,
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
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto w-full pt-20">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-white via-blue-100 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
              : 'bg-gradient-to-b from-slate-900 via-blue-800 to-slate-600'
          }`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {t('hero.headline').split(' ').slice(0, 2).join(' ')} <br className="hidden md:block" />
          {t('hero.headline').split(' ').slice(2).join(' ')}
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xl md:text-3xl text-secondary font-light leading-relaxed">
            {t('hero.subheadline')}
            <br />
            <span className="text-primary font-medium">{t('hero.collapsed')}</span>
          </p>
        </motion.div>

        {/* Short broken lines (Staggered) */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {brokenLines.map((line: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: "easeOut" }}
              className="flex items-center gap-2 text-secondary font-mono text-sm md:text-base"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
              {line}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className={`group relative px-8 py-4 rounded-full overflow-hidden border transition-all duration-300 backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10 hover:border-white/30'
              : 'bg-blue-600/5 border-blue-600/20 hover:border-blue-600/40'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/20 via-[#3B82F6]/20 to-[#06B6D4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className={`relative z-10 font-bold tracking-widest text-sm md:text-base uppercase flex items-center gap-3 ${
            theme === 'dark' ? 'text-white' : 'text-blue-900'
          }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_10px_#06B6D4]"></span>
            {t('hero.cta')}
          </span>
        </motion.button>
      </div>
    </section>
  );
}
