"use client";

import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Origin() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className={`relative w-full min-h-screen flex items-center py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#050505]' : 'bg-white'
    }`}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
          theme === 'dark' ? 'opacity-100' : 'opacity-10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* Top Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent mb-24 origin-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Storytelling Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-10 bg-clip-text text-transparent ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-white via-gray-200 to-gray-500'
                    : 'bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {t('origin.headline').split(' ').slice(0, 2).join(' ')} <br />
                {t('origin.headline').split(' ').slice(2).join(' ')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-6 text-xl md:text-2xl text-secondary font-light leading-relaxed"
            >
              <p>
                {t('origin.collapse')} <span className="text-primary font-medium">{t('origin.collapseAccent')}</span>,
              </p>
              <p>
                {t('origin.newSystem')}
              </p>
              <p className="pt-4">
                {t('origin.notTool')}
              </p>
              <p className="text-[#06B6D4] font-medium tracking-wide text-2xl md:text-3xl mt-4">
                {t('origin.workforce')}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Protocol Image */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full rounded-3xl overflow-hidden border border-primary/10 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/10 to-transparent mix-blend-overlay z-10"></div>
              
              <img 
                src="agents/protocol.png" 
                alt="Mercy Protocol Activated" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#06B6D4]/50 shadow-[0_0_20px_#06B6D4] z-20 animate-[scan_4s_ease-in-out_infinite]"></div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent mt-24 origin-right"
        />

      </div>
    </section>
  );
}
