"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, value: 2000, suffix: "+", label: "Workspaces đã mở" },
  { id: 2, value: 50000, suffix: "+", label: "Giờ làm việc bằng AI" },
  { id: 3, value: 40, suffix: "%", label: "Tiết kiệm chi phí vận hành" },
  { id: 4, value: 120, suffix: "+", label: "AI Agents & Công cụ" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          isVisible = true;
          let startTimestamp: number;
          const duration = 2500;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(ease * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export default function HPStats() {
  return (
    <section className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#12121A]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#0D9488]/10 opacity-50 pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F0ED] mb-2"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-[#8B8A96] font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
