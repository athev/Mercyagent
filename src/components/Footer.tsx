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
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#06B6D4] to-[#F97316] flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>M</span>
            </div>
            <span className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              MERCY<span className="text-gray-500">AGENT</span>
            </span>
          </div>
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} Mercy Protocol. All rights reserved.
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
