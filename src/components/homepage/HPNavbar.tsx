"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function HPNavbar() {
  const { data: session } = useSession();
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
        <div className="flex items-center gap-4 ml-auto">
          {session ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-3 group px-1 py-1 pr-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                {session.user?.image ? (
                  <Image 
                    src={session.user.image} 
                    alt="Profile" 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] text-white">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold leading-tight">
                  {session.user?.name?.split(' ')[0] || 'User'}
                </span>
                <span className="text-[#666] text-[10px] leading-tight group-hover:text-blue-400 transition-colors">
                  Playground →
                </span>
              </div>
            </Link>
          ) : (
            <>
              <button 
                onClick={() => signIn("google")}
                className="hidden md:block text-sm text-[#999] hover:text-white transition-colors font-medium cursor-pointer"
              >
                Đăng nhập
              </button>
              <Link
                href="/onboarding"
                className="px-4 py-2 rounded-full text-sm font-bold text-black bg-white hover:bg-gray-100 transition-colors"
              >
                Bắt đầu miễn phí
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
