"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TABS = ["Tất Cả", "Dành cho CEO", "Cho Nhân Viên", "Cho Freelancer"];

const COURSES = [
  { id: 1, img: "/hp-learning.png", name: "AI cho Người Mới Bắt Đầu", level: "Cơ bản", students: "3.2K", duration: "6h", tab: "Cho Nhân Viên", badge: "Miễn phí" },
  { id: 2, img: "/hp-agents.png", name: "AI cho CEO & Quản Lý", level: "Nâng cao", students: "1.8K", duration: "8h", tab: "Dành cho CEO", badge: "Nổi bật" },
  { id: 3, img: "/hp-tool-content.png", name: "AI Viết Content Viral", level: "Trung bình", students: "2.5K", duration: "5h", tab: "Cho Freelancer", badge: null },
  { id: 4, img: "/hp-tools.png", name: "Xây Dựng AI Agent", level: "Chuyên sâu", students: "980", duration: "12h", tab: "Dành cho CEO", badge: "Mới" },
  { id: 5, img: "/hp-tool-data.png", name: "AI Data & Phân Tích", level: "Trung bình", students: "1.4K", duration: "7h", tab: "Dành cho CEO", badge: null },
  { id: 6, img: "/hp-learning.png", name: "Freelancer 10× Với AI", level: "Thực chiến", students: "1.6K", duration: "9h", tab: "Cho Freelancer", badge: "Best Seller" },
];

export default function HPLayerLearning() {
  const [tab, setTab] = useState("Tất Cả");
  const list = tab === "Tất Cả" ? COURSES : COURSES.filter((c) => c.tab === tab);

  return (
    <section id="learning" className="bg-black py-16 border-t border-white/[0.06] scroll-mt-14">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#777] font-bold mb-2">Layer 03</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Vibe Learning
            </h2>
          </div>
          <Link href="/vibe-learning" className="hidden md:block text-sm text-[#777] hover:text-white transition-colors">
            Xem toàn bộ →
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                tab === t ? "bg-white text-black" : "border border-white/10 text-[#777] hover:text-white hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((course) => (
            <Link
              key={course.id}
              href="/vibe-learning"
              className="group relative rounded-2xl overflow-hidden bg-[#111] block"
              style={{ transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9]">
                <Image src={course.img} alt={course.name} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />

                {course.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase">
                    {course.badge}
                  </span>
                )}

                {/* AI Verified badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] font-bold">
                  AI Verified
                </span>
              </div>

              {/* Info (below image) */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#777] uppercase tracking-wider">{course.level}</span>
                  <span className="text-[#333]">·</span>
                  <span className="text-[10px] text-[#777]">{course.duration}</span>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {course.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#777] text-xs">{course.students} học viên</span>
                  <span className="text-xs text-white/40 group-hover:text-white transition-colors font-medium">
                    Học ngay →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-white/8 bg-gradient-to-r from-[#F59E0B]/10 to-transparent">
          <div>
            <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Chứng chỉ AI Verified — được doanh nghiệp công nhận
            </h3>
            <p className="text-[#777] text-sm">Hoàn thành khóa học, nhận chứng chỉ dùng trên LinkedIn và khi tuyển dụng.</p>
          </div>
          <Link href="/vibe-learning" className="ml-auto shrink-0 px-6 py-3 rounded-full bg-[#F59E0B] text-black font-bold text-sm hover:bg-[#FCD34D] transition-colors">
            Bắt đầu miễn phí
          </Link>
        </div>
      </div>
    </section>
  );
}
