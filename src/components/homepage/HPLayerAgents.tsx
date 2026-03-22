"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FILTERS = ["Tất Cả", "Sales", "HR", "Marketing", "CSKH", "Phân Tích", "Kế Toán"];

const AGENTS = [
  { id: 1, img: "/hp-agents.png", name: "CSKH Zalo 24/7", cat: "CSKH", rating: 4.9, users: "2.1K", desc: "Trả lời Zalo tự động, chốt đơn ngay cả lúc bạn ngủ." },
  { id: 2, img: "/hp-tool-content.png", name: "Content Creator", cat: "Marketing", rating: 4.8, users: "1.8K", desc: "50 bài content/ngày — Facebook, TikTok, Instagram." },
  { id: 3, img: "/hp-tools.png", name: "Sales Agent Pro", cat: "Sales", rating: 4.9, users: "1.2K", desc: "Telesales, cold email, theo dõi lead tự động.", badge: "Nổi bật" },
  { id: 4, img: "/hp-tool-data.png", name: "HR Tuyển Dụng", cat: "HR", rating: 4.8, users: "800", desc: "Lọc CV, xếp lịch phỏng vấn, gửi email tự động." },
  { id: 5, img: "/hp-tool-data.png", name: "Data Analyst", cat: "Phân Tích", rating: 4.9, users: "950", desc: "Upload Excel, nhận insight + báo cáo trong 30 giây.", badge: "Top rated" },
  { id: 6, img: "/hp-agents.png", name: "Kế Toán AI", cat: "Kế Toán", rating: 4.7, users: "650", desc: "Thu chi, xuất báo cáo tài chính, nhắc đóng thuế." },
];

export default function HPLayerAgents() {
  const [filter, setFilter] = useState("Tất Cả");
  const list = filter === "Tất Cả" ? AGENTS : AGENTS.filter((a) => a.cat === filter);

  return (
    <section id="agents" className="bg-black py-16 border-t border-white/[0.06] scroll-mt-14">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#777] font-bold mb-2">Layer 01</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              AI Agent Marketplace
            </h2>
          </div>
          <Link href="/old-home" className="hidden md:block text-sm text-[#777] hover:text-white transition-colors">
            Xem tất cả 120+ →
          </Link>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === f ? "bg-white text-black" : "border border-white/10 text-[#777] hover:text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((agent) => (
            <Link
              key={agent.id}
              href="/old-home"
              className="group relative rounded-2xl overflow-hidden bg-[#111] cursor-pointer block"
              style={{ transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image src={agent.img} alt={agent.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }} />

                {agent.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider">
                    {agent.badge}
                  </span>
                )}

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {agent.name}
                  </h3>
                  <p className="text-white/60 text-xs mb-3 line-clamp-1">{agent.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#F59E0B] text-xs">★ {agent.rating}</span>
                      <span className="text-white/40 text-xs">{agent.users} dùng</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Dùng ngay
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 relative rounded-2xl overflow-hidden">
          <div className="relative h-40 bg-gradient-to-r from-[#7C3AED]/20 to-[#0D9488]/20 border border-white/8 flex flex-col md:flex-row items-center justify-between p-8 gap-4">
            <div>
              <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Bạn là AI Trainer?
              </h3>
              <p className="text-[#777] text-sm">Đăng Agent của bạn và nhận doanh thu từ cộng đồng 50,000+ người dùng.</p>
            </div>
            <button className="shrink-0 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">
              Đăng ký Trainer →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
