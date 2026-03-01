"use client";

import { motion } from 'motion/react';
import { Shield, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function TheCore() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const layers = [
    {
      id: 'strategy',
      name: t('theCore.strategy.name'),
      desc: t('theCore.strategy.desc'),
      color: '#F59E0B',
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      position: 'top-[0%] left-[50%]'
    },
    {
      id: 'growth',
      name: t('theCore.growth.name'),
      desc: t('theCore.growth.desc'),
      color: '#F97316',
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      position: 'top-[75%] left-[93.3%]'
    },
    {
      id: 'operation',
      name: t('theCore.operation.name'),
      desc: t('theCore.operation.desc'),
      color: '#06B6D4',
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      position: 'top-[75%] left-[6.7%]'
    }
  ];

  return (
    <section className={`relative w-full min-h-screen flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#050505]' : 'bg-slate-50'
    }`}>
      {/* Soft Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
          theme === 'dark' ? 'opacity-100' : 'opacity-10'
        }`}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-20 md:mb-32 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-white via-gray-200 to-gray-500'
              : 'bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500'
          }`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {t('theCore.headline')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-secondary text-base md:text-lg max-w-2xl mx-auto font-light"
        >
          {t('theCore.subtitle')}
        </motion.p>
      </div>

      {/* Orbital Layout */}
      <div className="relative z-10 w-[280px] h-[280px] md:w-[500px] md:h-[500px] group mt-10 md:mt-0">
        
        {/* Orbital Tracks */}
        <div className="absolute inset-0 border border-primary/10 rounded-full border-dashed"></div>
        <div className="absolute inset-10 md:inset-16 border border-primary/5 rounded-full"></div>

        {/* Center Glowing Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            {/* Outer Glow */}
            <div className="absolute w-[300px] h-[300px] bg-[#06B6D4]/20 rounded-full blur-[100px] animate-pulse"></div>
            
            {/* Orbital Rings */}
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-primary/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-[#06B6D4]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
            
            {/* The Core */}
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              {/* Core Base */}
              <div className={`absolute inset-0 border border-primary/10 rounded-full backdrop-blur-xl shadow-[inset_0_0_40px_rgba(6,182,212,0.2)] ${
                theme === 'dark' ? 'bg-gradient-to-tr from-[#050505] to-[#0B0F19]' : 'bg-white'
              }`}></div>
              
              {/* Inner Energy */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-4 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full blur-md"
              ></motion.div>
              
              {/* Center Point */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] ${
                  theme === 'dark' ? 'bg-white' : 'bg-blue-600'
                }`}></div>
              </div>
            </div>

            {/* Floating Data Particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#06B6D4] rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 400],
                    y: [0, (Math.random() - 0.5) * 400],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Rotating Container */}
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {layers.map((layer) => (
            <div 
              key={layer.id}
              className={`absolute ${layer.position} -translate-x-1/2 -translate-y-1/2 z-30`}
            >
              {/* Counter-rotating card to keep it upright */}
              <div className="animate-[spin_30s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`w-36 md:w-56 p-4 md:p-6 rounded-2xl backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-2xl flex flex-col items-center text-center cursor-pointer group/card ${
                    theme === 'dark' ? 'bg-[#0B0F19]/90' : 'bg-white/90'
                  }`}
                  style={{ boxShadow: `0 10px 40px -10px ${layer.color}20` }}
                >
                  <div 
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-transform duration-300 group-hover/card:scale-110"
                    style={{ backgroundColor: `${layer.color}15`, color: layer.color, boxShadow: `0 0 20px ${layer.color}30` }}
                  >
                    {layer.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-primary mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {layer.name}
                  </h3>
                  <p className="text-[10px] md:text-sm text-secondary">
                    {layer.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
