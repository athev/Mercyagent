"use client";

import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-[#06B6D4]/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#0D9488] shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
            <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Vibework
            </span>
          </div>
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} Vibework.vn. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-mono">Privacy</a>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-mono">Terms</a>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-mono">Contact</a>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">System Online</span>
        </div>

      </div>
    </footer>
  );
}
