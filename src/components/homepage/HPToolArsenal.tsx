"use client";

import { useState } from "react";

export default function HPToolArsenal() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker { animation: ticker 20s linear infinite; }
        @keyframes progressFill { from{width:0%} to{width:var(--tw-width)} }
        @keyframes typingBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink { animation: typingBlink 0.8s ease-in-out infinite; }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .shimmer-bar {
          background: linear-gradient(90deg, #ffffff08 25%, #ffffff15 50%, #ffffff08 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes glowDot { 0%,100%{box-shadow:0 0 4px rgba(124,58,237,0.6)} 50%{box-shadow:0 0 12px rgba(124,58,237,1)} }
        .glow-dot { animation: glowDot 1.5s ease-in-out infinite; }
        .tool-card { transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .tool-card:hover { transform: translateY(-4px) scale(1.01); }
      `}</style>

      <section className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Kho Vũ Khí <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0D9488]">120+ AI Agents</span>
            </h2>
            <p className="text-[#8B8A96] text-lg max-w-2xl mx-auto">
              Từ viết lách đến phân tích số liệu, từ chăm sóc khách hàng đến sản xuất nội dung — mọi thứ đều có AI chuyên biệt trong Hub.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">

            {/* 1. Content AI — Large (colspan 7) */}
            <div
              className="tool-card md:col-span-7 bg-[#12121A] border border-white/5 rounded-3xl p-7 overflow-hidden relative group cursor-pointer"
              style={hovered === "content" ? { borderColor: "#7C3AED50", boxShadow: "0 0 30px rgba(124,58,237,0.15)" } : {}}
              onMouseEnter={() => setHovered("content")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#7C3AED]/5 to-transparent" />
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mb-2">✍️ AI Content Studio</div>
                  <h3 className="text-2xl font-bold text-[#F1F0ED]" style={{ fontFamily: "'Clash Display', sans-serif" }}>Viết nội dung trong tích tắc</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold">Đang hot</span>
              </div>
              {/* Fake editor UI */}
              <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-5 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-[#8B8A96]">content_agent.ai</span>
                </div>
                <p className="text-[#8B8A96] text-xs mb-3">&gt; Yêu cầu: Viết caption Instagram cho sản phẩm cà phê mới</p>
                <p className="text-[#F1F0ED] text-sm leading-relaxed">
                  ☕ Buổi sáng nào cũng cần một điều gì đó <span className="text-[#7C3AED]">đặc biệt</span> — và đây là điều đó. Hương vị rang mộc đậm đà, từng ngụm như một lần <span className="text-[#7C3AED]">reset</span> lại cả ngày dài...
                  <span className="blink text-[#7C3AED]">|</span>
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#7C3AED] rounded-full w-[72%] shimmer-bar" /></div>
                  <span className="text-xs text-[#8B8A96]">72%</span>
                </div>
              </div>
            </div>

            {/* 2. Data AI — Small (colspan 5) */}
            <div
              className="tool-card md:col-span-5 bg-[#12121A] border border-white/5 rounded-3xl p-7 relative group cursor-pointer"
              style={hovered === "data" ? { borderColor: "#0D948850", boxShadow: "0 0 30px rgba(13,148,136,0.15)" } : {}}
              onMouseEnter={() => setHovered("data")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0D9488]/5 to-transparent rounded-3xl" />
              <div className="text-xs font-bold text-[#0D9488] uppercase tracking-widest mb-2">📊 Data Analyst AI</div>
              <h3 className="text-xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>Tải file lên, nhận insight ngay</h3>
              <div className="space-y-3">
                {[["Tỷ lệ chuyển đổi","68%","#0D9488"],["Chi phí/Lead","↓ 22%","#10B981"],["ROI Campaign","3.4×","#F59E0B"],["Churn Rate","↓ 11%","#3B82F6"]].map(([label,val,col])=>(
                  <div key={label as string} className="flex items-center justify-between">
                    <span className="text-sm text-[#8B8A96]">{label}</span>
                    <span className="font-bold text-sm" style={{color: col as string}}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#8B8A96]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse shrink-0" />
                AI đang phân tích file Excel 1,200 dòng...
              </div>
            </div>

            {/* 3. Chatbot / CSKH — (colspan 4) */}
            <div
              className="tool-card md:col-span-4 bg-[#12121A] border border-white/5 rounded-3xl p-7 relative group cursor-pointer overflow-hidden"
              style={hovered === "chat" ? { borderColor: "#EC489950", boxShadow: "0 0 30px rgba(236,72,153,0.15)" } : {}}
              onMouseEnter={() => setHovered("chat")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="text-xs font-bold text-[#EC4899] uppercase tracking-widest mb-2">💬 Chatbot CSKH</div>
              <h3 className="text-xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>Tự động trả lời 24/7</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-sm shrink-0">👤</div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[#F1F0ED]">Giá sản phẩm X là bao nhiêu?</div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#EC4899]/10 border border-[#EC4899]/20 rounded-2xl rounded-tr-none px-4 py-2.5 text-sm text-[#F1F0ED]">Sản phẩm X có giá 299K. Bạn muốn đặt ngay không? 🛍️</div>
                  <div className="w-8 h-8 rounded-full bg-[#EC4899]/20 flex items-center justify-center text-sm shrink-0">🤖</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-sm shrink-0">👤</div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-[#F1F0ED]">Có mã giảm giá không?</div>
                </div>
                <div className="flex items-center gap-2 pl-11">
                  <div className="flex gap-1">{[0,1,2].map(i=><span key={i} className="w-2 h-2 rounded-full bg-[#EC4899] opacity-70 animate-pulse" style={{animationDelay:`${i*0.2}s`}} />)}</div>
                  <span className="text-xs text-[#8B8A96]">AI đang soạn...</span>
                </div>
              </div>
            </div>

            {/* 4. AI Workforce (colspan 4) */}
            <div
              className="tool-card md:col-span-4 bg-[#12121A] border border-white/5 rounded-3xl p-7 relative group cursor-pointer"
              style={hovered === "workforce" ? { borderColor: "#7C3AED50", boxShadow: "0 0 30px rgba(124,58,237,0.15)" } : {}}
              onMouseEnter={() => setHovered("workforce")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mb-2">🤖 AI Workforce</div>
              <h3 className="text-xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>Đội ngũ nhân sự ảo</h3>
              <div className="space-y-3">
                {[["🧑‍💼 Sales Agent","Đang gọi 34 leads","#7C3AED","active"],["📑 HR Agent","Đang lọc 120 CV","#0D9488","active"],["📒 Kế toán AI","Report Q1 xong rồi","#F59E0B","done"]].map(([name,status,col,state])=>(
                  <div key={name as string} className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5">
                    <span className="text-lg shrink-0">{(name as string).split(" ")[0]}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[#F1F0ED]">{(name as string).slice(3)}</div>
                      <div className="text-xs" style={{color: col as string}}>{status}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${state === "active" ? "bg-green-500/10 text-green-400" : "bg-white/5 text-[#8B8A96]"}`}>
                      {state === "active" ? "● Live" : "✓ Done"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Vibe Learning (colspan 4) */}
            <div
              className="tool-card md:col-span-4 bg-[#12121A] border border-white/5 rounded-3xl p-7 relative group cursor-pointer overflow-hidden"
              style={hovered === "learning" ? { borderColor: "#F59E0B50", boxShadow: "0 0 30px rgba(245,158,11,0.15)" } : {}}
              onMouseEnter={() => setHovered("learning")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B] rounded-full filter blur-[60px] opacity-10 pointer-events-none" />
              <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-2">🎓 Vibe Learning</div>
              <h3 className="text-xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>Lộ trình AI cá nhân hóa</h3>
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1.5"><span className="text-[#8B8A96]">Tuần 3 — Prompt Engineering</span><span className="text-[#F59E0B] font-bold">68%</span></div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] w-[68%]" /></div>
              </div>
              <div className="space-y-2">
                {[["✅ Bài 1: AI là gì?","Hoàn thành"],["✅ Bài 2: Cách viết Prompt","Hoàn thành"],["▶ Bài 3: RAG & Fine-tune","Đang học"]].map(([name,status])=>(
                  <div key={name as string} className="flex items-center justify-between text-sm">
                    <span className="text-[#c5c4d0]">{name}</span>
                    <span className={`text-xs font-medium ${status === "Đang học" ? "text-[#F59E0B]" : "text-[#8B8A96]"}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Scrolling tool ticker */}
          <div className="mt-8 overflow-hidden py-4 border-y border-white/5">
            <div className="flex gap-6 ticker whitespace-nowrap w-max">
              {[...Array(2)].flatMap((_, outerIdx) => ["Content AI","Data Analyst","HR Agent","Sales Bot","SEO Writer","Email AI","Video Script","Tài chính AI","Chatbot CSKH","Social Planner","Dịch thuật AI","Code Review","Market Research","Brand Voice","Meeting Notes"].map((t, i) => (
                <span key={`${outerIdx}-${t}-${i}`} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-sm text-[#8B8A96] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  {t}
                </span>
              )))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
