"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Tái sử dụng data từ VibeService cũ
const SAMPLE_PLAN = {
  requirement: "Tôi cần xây dựng chiến dịch marketing cho dòng sản phẩm mới ra mắt tháng tới, ngân sách 50 triệu.",
  analysis: "Chiến dịch launch sản phẩm B2C · Thời hạn: 30 ngày · Quy mô: trung bình",
  steps: [
    { id: 1, task: "Nghiên cứu thị trường & đối thủ", time: "2 ngày", agent: "Market Research AI" },
    { id: 2, task: "Lên kế hoạch content 30 ngày", time: "1 ngày", agent: "Content Planner AI" },
    { id: 3, task: "Sản xuất 60 bài content đa nền tảng", time: "5 ngày", agent: "Content Creator AI" },
    { id: 4, task: "Thiết kế visual & banner quảng cáo", time: "3 ngày", agent: "Design AI + Supplier" },
    { id: 5, task: "Chạy & tối ưu ads tự động", time: "20 ngày", agent: "Ads Automation AI" },
  ],
  suppliers: [
    { name: "VN Creative Agency", rating: 4.9, price: "18 triệu", tag: "Đề xuất", tagColor: "#0D9488" },
    { name: "Growth Hackers VN", rating: 4.8, price: "22 triệu", tag: null, tagColor: "" },
    { name: "DigitalFirst Studio", rating: 4.7, price: "15 triệu", tag: "Giá tốt", tagColor: "#F59E0B" },
  ],
};

function VibeServiceModal({ isOpen, onClose, userPrompt }: { isOpen: boolean; onClose: () => void; userPrompt: string }) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [selectedSupplier, setSelectedSupplier] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnalyzing(true);
      setSelectedSupplier(null);
      const timer = setTimeout(() => setIsAnalyzing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}>
      {/* Click ra ngoài để đóng */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top bar */}
        <div className="flex justify-between items-center px-5 py-3.5 border-b border-white/[0.06] bg-[#000]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-white/50 text-xs font-mono">vibe_service.ai</span>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {isAnalyzing ? (
          <div className="flex-1 flex flex-col items-center justify-center p-16 min-h-[400px]">
            <style>{`
              @keyframes scan { 0%{transform:translateY(-10px);opacity:0} 50%{opacity:1} 100%{transform:translateY(10px);opacity:0} }
              .scan-line { animation: scan 1.5s cubic-bezier(0.4,0,0.2,1) infinite; }
              @keyframes pulseRing { 0%{transform:scale(0.8);opacity:0.5} 100%{transform:scale(1.5);opacity:0} }
              .pulse-ring { animation: pulseRing 2s cubic-bezier(0.4,0,0.2,1) infinite; }
            `}</style>
            <div className="relative w-24 h-24 flex items-center justify-center mb-6">
              <div className="absolute inset-0 border-2 border-[#7C3AED]/30 rounded-full pulse-ring" />
              <div className="absolute inset-0 border-2 border-[#0D9488]/30 rounded-full pulse-ring" style={{ animationDelay: '1s' }} />
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#0D9488] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                <svg className="w-6 h-6 text-white scan-line" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
            </div>
            <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>AI đang phân tích yêu cầu...</p>
            <p className="text-[#666] text-sm max-w-sm text-center">Tìm kiếm workflow, agent phù hợp và matching nhà cung cấp dịch vụ tốt nhất.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            {/* Requirement recap */}
            <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4">
              <p className="text-[#555] text-[10px] uppercase tracking-wider mb-2 font-bold">Nhu cầu của bạn</p>
              <p className="text-white/80 text-sm leading-relaxed">"{userPrompt || "Tôi cần tư vấn giải pháp AI cho doanh nghiệp"}"</p>
              <p className="text-[#0D9488] text-xs mt-3 flex items-center gap-1.5 font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                {SAMPLE_PLAN.analysis}
              </p>
            </div>

            {/* Plan steps */}
            <div>
              <p className="text-[#555] text-[10px] uppercase tracking-wider mb-3 font-bold">AI Workflow & Tasks</p>
              <div className="space-y-2.5">
                {SAMPLE_PLAN.steps.map((s, i) => (
                  <div key={s.id} className="flex items-center gap-3 p-3 bg-[#111] border border-white/[0.04] rounded-xl">
                    <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/50 shrink-0 shadow-inner">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-sm font-medium truncate mb-0.5">{s.task}</p>
                      <p className="text-[#555] text-[10px] flex items-center gap-2">
                        <span>🤖 {s.agent}</span>
                        <span>⏱ {s.time}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supplier selection */}
            <div>
              <p className="text-[#555] text-[10px] uppercase tracking-wider mb-3 font-bold">Matching Nhà cung cấp</p>
              <div className="space-y-2">
                {SAMPLE_PLAN.suppliers.map((sup, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSupplier(i)}
                    className={`w-full flex items-center gap-4 p-3.5 rounded-xl border text-left transition-all ${
                      selectedSupplier === i
                        ? "border-[#7C3AED]/50 bg-gradient-to-r from-[#7C3AED]/10 to-transparent shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                        : "border-white/[0.06] bg-[#111] hover:border-white/15 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center text-white/80 text-sm font-bold shrink-0">
                      {sup.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white/90 text-sm font-semibold">{sup.name}</p>
                        {sup.tag && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider" style={{ color: sup.tagColor, background: `${sup.tagColor}18`, border: `1px solid ${sup.tagColor}30` }}>
                            {sup.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-[#F59E0B] text-[11px] font-bold">★ {sup.rating}</p>
                        <p className="text-[#555] text-[11px]">Đã thực hiện 45+ dự án</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-white font-bold text-sm block">{sup.price}</span>
                      <span className="text-[#555] text-[10px]">Trọn gói</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <button
                disabled={selectedSupplier === null}
                className="py-4 w-full rounded-full bg-white text-black font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                {selectedSupplier !== null ? `Bắt đầu dự án cùng ${SAMPLE_PLAN.suppliers[selectedSupplier].name} →` : "Chọn 1 nhà cung cấp để bắt đầu"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HPPlaygroundHero() {
  const [prompt, setPrompt] = useState("");
  const [cat, setCat] = useState("Marketing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim()) return;
    setSubmittedPrompt(prompt);
    setIsModalOpen(true);
  };

  return (
    <>
      <style>{`
        .dotted-bg {
          background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .glow-orb-1 {
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 60%);
        }
        .glow-orb-2 {
          background: radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 60%);
        }
        .glass-box {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .glass-box:focus-within {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.8), 0 0 40px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.15);
        }
      `}</style>

      <section className="relative w-full min-h-[90vh] bg-black flex flex-col items-center justify-center overflow-hidden pt-14">
        {/* Background Canvas: Dotted Grid + Glowing Orbs */}
        <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] glow-orb-1 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] glow-orb-2 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center">
          
          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white text-center tracking-tight leading-[0.95] mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Làm việc với<br />
            <span className="text-transparent bg-clip-text text-white">
              tốc độ của AI
            </span>
          </h1>
          <p className="text-[#888] text-lg md:text-xl text-center mb-12 max-w-2xl font-medium">
            Hệ sinh thái AI tích hợp sâu. Giao việc, uỷ quyền, tự động hoá — tất cả bắt đầu từ một dấu nhắc.
          </p>

          {/* Prompt Box (Stitch Style) */}
          <div className="w-full max-w-3xl glass-box rounded-3xl p-3 flex flex-col transition-all duration-300 group">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Bạn cần AI giải quyết dự án gì hôm nay?..."
              className="w-full bg-transparent text-white placeholder-white/30 text-lg md:text-xl p-4 md:p-5 resize-none focus:outline-none min-h-[140px] leading-relaxed"
            />
            
            {/* Action Bar Bottom */}
            <div className="flex items-center justify-between px-2 pb-2 pt-4 border-t border-white/5 mt-auto">
              
              {/* Left tools */}
              <div className="flex items-center gap-1.5 md:gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
                
                {/* Category pill */}
                <div className="hidden sm:flex items-center bg-[#111] border border-white/10 rounded-full p-1 max-w-[200px] overflow-hidden">
                  {["Marketing", "Tech", "Khác"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        cat === c ? "bg-white/20 text-white" : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right tools */}
              <div className="flex items-center gap-2">
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Gặp Tư Vấn
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
                
                {/* Submit button (Up Arrow) */}
                <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim()}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                    prompt.trim() ? "bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-6 opacity-60">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Powered by</span>
            <div className="flex gap-4 items-center grayscale opacity-80">
              <span className="font-serif italic text-sm">OpenAI</span>
              <span className="font-bold text-sm" style={{ fontFamily: "monospace" }}>Anthropic</span>
              <span className="font-sans font-bold text-sm tracking-tight">Google</span>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
          <span className="text-white text-[10px] uppercase tracking-widest font-bold">Khám phá</span>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Modal is rendered here but controlled via z-index above everything */}
      <VibeServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        userPrompt={submittedPrompt} 
      />
    </>
  );
}
