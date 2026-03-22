"use client";

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
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
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#0D9488] shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-shadow" />
          <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Vibework
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/cassie" className="text-sm text-blue-400 font-bold hover:text-blue-300 transition-colors">CASSIE AI</Link>
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

          {session ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-3 group px-1 py-1 pr-4 rounded-full bg-white/5 border border-primary/20 hover:bg-white/10 transition-all ml-2"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/30 bg-primary/10">
                {session.user?.image ? (
                  <Image 
                    src={session.user.image} 
                    alt="Profile" 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-primary font-bold">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold leading-tight">
                  {session.user?.name?.split(' ')[0] || 'User'}
                </span>
                <span className="text-primary text-[10px] leading-tight font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  Playground →
                </span>
              </div>
            </Link>
          ) : (
            <button 
              onClick={() => signIn("google")}
              className="hidden md:block px-5 py-2 text-xs font-bold tracking-wider text-primary border border-primary rounded-sm hover:bg-white/5 transition-colors"
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
