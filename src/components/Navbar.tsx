"use client";

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Globe } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-primary py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#06B6D4] to-[#F97316] flex items-center justify-center">
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>M</span>
          </div>
          <span className="text-primary font-bold tracking-widest text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            MERCY<span className="text-secondary">AGENT</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#strategy" className="text-sm text-secondary hover:text-[#F59E0B] transition-colors">{t('nav.strategy')}</a>
          <a href="#growth" className="text-sm text-secondary hover:text-[#F97316] transition-colors">{t('nav.growth')}</a>
          <a href="#operation" className="text-sm text-secondary hover:text-[#06B6D4] transition-colors">{t('nav.operations')}</a>
          <a href="#pricing" className="text-sm text-secondary hover:text-primary transition-colors">{t('nav.pricing')}</a>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-secondary hover:text-primary transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button className="hidden md:block px-5 py-2 text-xs font-bold tracking-wider text-primary border border-primary rounded-sm hover:bg-white/5 transition-colors">
            LOGIN
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
