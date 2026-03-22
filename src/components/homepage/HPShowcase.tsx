"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FEATURED = [
  {
    id: "agents",
    img: "/hp-agents.png",
    label: "AI Agent Marketplace",
    sub: "Thuê nhân sự AI chuyên biệt",
    href: "#agents",
    badge: "120+ Agents",
  },
  {
    id: "tools",
    img: "/hp-tools.png",
    label: "Công Cụ AI",
    sub: "Chọn & dùng ngay — không cài đặt",
    href: "#tools",
    badge: "Mới mỗi tuần",
  },
  {
    id: "learning",
    img: "/hp-learning.png",
    label: "Vibe Learning",
    sub: "Học AI — từ Zero đến Pro",
    href: "#learning",
    badge: "AI Verified",
  },
];

export default function HPShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-black py-16 border-t border-white/[0.06]">
      <style>{`
        .showcase-in {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .showcase-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-hover { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.05); }
        .card-overlay { background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%); }
      `}</style>

      <div className={`max-w-screen-2xl mx-auto px-6 showcase-in ${isVisible ? 'showcase-visible' : ''}`}>
        
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#666] font-bold mb-3">
            Hệ sinh thái mở rộng
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Khám phá các phân hệ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {FEATURED.map((card, idx) => (
            <Link
              key={card.id}
              href={card.href}
              className="card-hover relative rounded-[2rem] overflow-hidden block aspect-[4/3] bg-[#111] border border-white/[0.04]"
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
            >
              <Image
                src={card.img}
                alt={card.label}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="card-overlay absolute inset-0 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                  {card.badge}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-white font-bold text-2xl mb-1.5 leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {card.label}
                </h3>
                <p className="text-white/60 text-sm font-medium">{card.sub}</p>
              </div>

              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
