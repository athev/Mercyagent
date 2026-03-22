"use client";

import Link from "next/link";
import Image from "next/image";

export default function HPNavbar() {
  const links = ["AI Agents", "Công Cụ AI", "Vibe Learning", "Cộng đồng"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-4">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#0D9488]" />
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Vibework
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {links.map((l) => (
            <Link key={l} href="#" className="px-3 py-1.5 text-sm text-[#999] hover:text-white transition-colors font-medium rounded-lg hover:bg-white/5">
              {l}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 ml-auto">
          <Link href="#" className="hidden md:block text-sm text-[#999] hover:text-white transition-colors font-medium">
            Đăng nhập
          </Link>
          <Link
            href="#agents"
            className="px-4 py-2 rounded-full text-sm font-bold text-black bg-white hover:bg-gray-100 transition-colors"
          >
            Bắt đầu miễn phí
          </Link>
        </div>
      </div>
    </nav>
  );
}
