"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function HPNavbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-4">
          <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white"/>
            </svg>
          </div>
          <span className={`font-bold text-base tracking-tight transition-colors ${scrolled ? "text-black" : "text-black"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            Vibework
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          {[
            { label: "AI Consultant", href: "/ai-consultant" },
            { label: "Dịch vụ", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Marketplace", href: "#marketplace" },
          ].map((l) => (
            <a key={l.label} href={l.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-black" : "text-gray-600 hover:text-black"}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 ml-auto">
          {session ? (
            <Link
              href="/profile"
              className="flex items-center gap-2.5 group px-1 py-1 pr-4 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-all"
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/20">
                {session.user?.image ? (
                  <Image src={session.user.image} alt="Profile" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">
                    {session.user?.name?.[0] || "U"}
                  </div>
                )}
              </div>
              <span className="text-black text-xs font-semibold">{session.user?.name?.split(" ")[0] || "User"}</span>
            </Link>
          ) : (
            <>
              <button
                onClick={() => signIn("google")}
                className="hidden md:block text-sm text-gray-600 hover:text-black transition-colors font-medium cursor-pointer"
              >
                Đăng nhập
              </button>
              <Link
                href="/onboarding"
                className="px-4 py-2 rounded-full text-sm font-bold text-white bg-black hover:bg-gray-800 transition-colors"
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
