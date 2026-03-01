"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Activity, Users, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Counter = ({ end, duration = 2, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function MercyMode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-30%" });
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000" style={{ backgroundColor: isInView ? (theme === 'dark' ? '#020A14' : '#f0f9ff') : (theme === 'dark' ? '#050505' : '#f8fafc') }}>
      
      {/* Background Shift to Glowing Blue */}
      <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B6D4]/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06B6D40A_1px,transparent_1px),linear-gradient(to_bottom,#06B6D40A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
        
        {/* Victory Headline */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 mb-6 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_10px_#06B6D4]"></div>
              <span className="text-[#06B6D4] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t('mercyMode.status')}
              </span>
            </div>
            
            <h2 
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-white via-cyan-100 to-[#06B6D4] drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]'
                  : 'bg-gradient-to-b from-slate-900 via-cyan-800 to-[#06B6D4]'
              }`} 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t('mercyMode.activated').split(' ').slice(0, 2).join(' ')} <br className="hidden md:block" />
              {t('mercyMode.activated').split(' ').slice(2).join(' ')}
            </h2>
          </motion.div>
        </div>

        {/* Dashboard Mockup Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          style={{ perspective: 1000 }}
          className="w-full relative mb-20"
        >
          {/* Floating Metrics (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`absolute -left-4 md:-left-12 top-10 md:top-20 z-20 backdrop-blur-xl border border-[#06B6D4]/30 p-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.2)] ${
              theme === 'dark' ? 'bg-[#0B0F19]/90' : 'bg-white/90'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-4 h-4 text-[#06B6D4]" />
              <span className="text-xs font-mono text-secondary uppercase">{t('mercyMode.responseTime')}</span>
            </div>
            <div className="text-2xl font-bold text-primary tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <Counter end={0} duration={1} />.<Counter end={4} duration={1.5} suffix="s" />
            </div>
            <div className="text-[10px] text-green-400 mt-1">↓ 98% vs Human</div>
          </motion.div>

          {/* Floating Metrics (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`absolute -right-4 md:-right-12 bottom-10 md:bottom-20 z-20 backdrop-blur-xl border border-[#F97316]/30 p-4 rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.2)] ${
              theme === 'dark' ? 'bg-[#0B0F19]/90' : 'bg-white/90'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-4 h-4 text-[#F97316]" />
              <span className="text-xs font-mono text-secondary uppercase">{t('mercyMode.leadsProcessed')}</span>
            </div>
            <div className="text-2xl font-bold text-primary tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <Counter end={14} duration={2} />,<Counter end={285} duration={2.5} prefix="" />
            </div>
            <div className="text-[10px] text-green-400 mt-1">↑ 342% Conversion</div>
          </motion.div>

          {/* Main Dashboard UI */}
          <div className={`backdrop-blur-2xl border border-primary/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(6,182,212,0.15)] ${
            theme === 'dark' ? 'bg-[#0B0F19]/80' : 'bg-white/80'
          }`}>
            {/* Top Bar */}
            <div className="h-12 border-b border-primary/10 flex items-center px-6 gap-2 bg-primary/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 bg-black/30 px-4 py-1 rounded-full border border-white/5">
                <ShieldCheck className="w-3 h-3 text-green-400" />
                <span className="text-xs font-mono text-gray-400">MERCY_PROTOCOL_SECURE_CONNECTION</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Panel: Agent Status */}
              <div className="col-span-1 space-y-4">
                <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-4">{t('mercyMode.activeWorkforce')}</div>
                {['ATLAS (Strategy)', 'MILLI (Growth)', 'CASSIE (Ops)'].map((agent, i) => (
                  <div key={i} className="bg-primary/5 border border-primary/5 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-secondary font-mono">{agent}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-green-400 font-mono">SYNCED</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center/Right Panel: Visualization */}
              <div className="col-span-1 md:col-span-2 bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40 mix-blend-screen">
                  <img src="agents/mercyteam.png" alt="Mercy Protocol" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
               
                {/* Central Node */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/50 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <div className="w-12 h-12 rounded-full bg-[#06B6D4] flex items-center justify-center animate-pulse">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Radiating rings */}
                  <div className="absolute inset-0 rounded-full border border-[#06B6D4] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>

                {/* Connecting lines to abstract nodes */}
                <svg className="absolute inset-0 w-full h-full z-0">
                  <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                  <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#F97316" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                </svg>

                <div className="absolute bottom-4 text-xs font-mono text-[#06B6D4] tracking-widest z-10">
                  {t('mercyMode.nominal')}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Large CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`group relative px-10 py-5 rounded-full overflow-hidden font-bold tracking-widest text-sm md:text-lg uppercase flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] ${
            theme === 'dark' ? 'bg-white text-black' : 'bg-blue-600 text-white'
          }`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 flex items-center gap-3">
            {t('mercyMode.cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

      </div>
    </section>
  );
}
