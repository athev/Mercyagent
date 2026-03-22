"use client";

import Link from "next/link";

export default function HPFinalCTA() {
  return (
    <section className="bg-black py-24 border-t border-white/[0.06]">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#555] font-bold mb-6">Bắt đầu hôm nay</p>
        <h2
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Một Hub.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#34D399]">
            Bắt đầu trong 30 giây.
          </span>
        </h2>
        <p className="text-[#777] text-lg mb-12 max-w-xl mx-auto">
          Miễn phí để bắt đầu. Không cần thẻ tín dụng. Hỗ trợ tiếng Việt 100%.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#agents" className="px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 transition-colors shadow-2xl">
            Mở Hub Miễn Phí
          </Link>
          <Link href="/vibe-learning" className="px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors">
            Học cách dùng AI →
          </Link>
        </div>
      </div>
    </section>
  );
}
