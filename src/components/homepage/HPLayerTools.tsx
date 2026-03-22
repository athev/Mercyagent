"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FILTERS = ["Tất Cả", "Nội Dung", "Phân Tích", "Tự Động Hóa", "Thiết Kế", "Giao Tiếp"];

const TOOLS = [
  { id: 1, img: "/hp-tool-content.png", name: "AI Viết Content", cat: "Nội Dung", users: "12.5K", isNew: false, featured: true },
  { id: 2, img: "/hp-tool-data.png", name: "AI Phân Tích Excel", cat: "Phân Tích", users: "8.2K", isNew: false, featured: false },
  { id: 3, img: "/hp-tools.png", name: "AI Dịch Thuật", cat: "Giao Tiếp", users: "6.8K", isNew: false, featured: false },
  { id: 4, img: "/hp-tool-content.png", name: "AI Script Video", cat: "Nội Dung", users: "5.4K", isNew: true, featured: false },
  { id: 5, img: "/hp-tool-data.png", name: "Email Builder", cat: "Tự Động Hóa", users: "4.9K", isNew: false, featured: false },
  { id: 6, img: "/hp-agents.png", name: "AI Meeting Notes", cat: "Tự Động Hóa", users: "4.3K", isNew: false, featured: false },
  { id: 7, img: "/hp-tool-content.png", name: "AI Tạo Ảnh", cat: "Thiết Kế", users: "9.1K", isNew: true, featured: false },
  { id: 8, img: "/hp-tool-data.png", name: "AI Tóm Tắt Tài Liệu", cat: "Phân Tích", users: "7.6K", isNew: false, featured: false },
];

export default function HPLayerTools() {
  const [filter, setFilter] = useState("Tất Cả");
  const list = filter === "Tất Cả" ? TOOLS : TOOLS.filter((t) => t.cat === filter);

  return (
    <section id="tools" className="bg-black py-16 border-t border-white/[0.06] scroll-mt-14">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#777] font-bold mb-2">Layer 02</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Kho Công Cụ AI
            </h2>
          </div>
          <Link href="/marketplace" className="hidden md:block text-sm text-[#777] hover:text-white transition-colors">
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

        {/* Tools Grid - 4 col, square-ish cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {list.map((tool) => (
            <Link
              key={tool.id}
              href="/marketplace"
              className="group relative rounded-2xl overflow-hidden bg-[#111] cursor-pointer block"
              style={{ transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.02)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <div className="relative aspect-[3/2]">
                <Image src={tool.img} alt={tool.name} fill className="object-cover" sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {tool.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-[#34D399] text-black text-[10px] font-bold uppercase">Mới</span>
                  )}
                  {tool.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-white text-black text-[10px] font-bold uppercase">Nổi bật</span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {tool.name}
                  </h3>
                  <span className="text-white/40 text-xs">{tool.users} người dùng</span>
                </div>

                {/* Hover overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold shadow-xl">
                    Dùng ngay
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
