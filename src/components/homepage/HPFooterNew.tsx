"use client";
import Link from "next/link";

export default function HPFooterNew() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="black"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="black" opacity="0.4"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="black" opacity="0.4"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="black"/>
                </svg>
              </div>
              <span className="font-bold text-lg">Vibework</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Hệ sinh thái AI đồng hành cùng doanh nghiệp Việt. Tư vấn, đào tạo, công cụ và marketplace — tất cả trong một nơi.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Sản phẩm</p>
            <ul className="space-y-3">
              {["AI Consultant", "Vibe-Learning", "Vibe Work", "AI Marketplace"].map(l => (
                <li key={l}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Công ty</p>
            <ul className="space-y-3">
              {["Về Vibework", "Blog", "Liên hệ", "Điều khoản", "Bảo mật"].map(l => (
                <li key={l}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Big brand name — CratorAI style */}
      <div className="border-t border-white/10 pt-8 pb-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Vibework. All rights reserved.</p>
            <p className="text-gray-600 text-xs">Made in Vietnam 🇻🇳</p>
          </div>
        </div>
        {/* Giant logo text */}
        <div className="flex items-center justify-center mt-6 pb-4 select-none pointer-events-none overflow-hidden">
          <span className="text-[8vw] font-black text-white/5 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
            Vibework
          </span>
        </div>
      </div>
    </footer>
  );
}
