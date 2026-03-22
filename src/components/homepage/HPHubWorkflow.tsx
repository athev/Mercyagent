"use client";

export default function HPHubWorkflow() {
  const steps = [
    { id: "input", icon: "📥", label: "Dữ Liệu Thô", sub: "File, text, data, yêu cầu", color: "#8B8A96", glow: "#ffffff" },
    { id: "route", icon: "⚡", label: "Hub Phân Tích", sub: "AI chọn đúng công cụ", color: "#7C3AED", glow: "#7C3AED" },
    { id: "process", icon: "🤖", label: "Agent Xử Lý", sub: "Chạy song song 24/7", color: "#0D9488", glow: "#0D9488" },
    { id: "review", icon: "🔍", label: "AI Kiểm Duyệt", sub: "Chất lượng đảm bảo", color: "#3B82F6", glow: "#3B82F6" },
    { id: "output", icon: "✅", label: "Kết Quả Hoàn Hảo", sub: "Nhận & triển khai ngay", color: "#F59E0B", glow: "#F59E0B" },
  ];

  return (
    <>
      <style>{`
        @keyframes travelDot {
          0% { left: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .travel-dot {
          animation: travelDot 4s ease-in-out infinite;
        }
        .travel-dot-2 { animation-delay: 1.3s; }
        .travel-dot-3 { animation-delay: 2.6s; }
        @keyframes nodePulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
        .node-pulse { animation: nodePulse 2.5s ease-in-out infinite; }
      `}</style>

      <section className="py-24 bg-[#0A0A0F] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Công Việc Chạy Liên Tục{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#7C3AED]">Ngay Cả Khi Bạn Ngủ</span>
            </h2>
            <p className="text-[#8B8A96] text-lg max-w-2xl mx-auto">
              Chỉ cần giao việc cho Hub, hệ thống pipeline AI tự vận hành từ đầu đến cuối. Bạn chỉ cần xem kết quả.
            </p>
          </div>

          {/* Node Flow — Desktop */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-between relative z-10">
              {steps.map((step, i) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Node */}
                  <div
                    className="node-pulse relative w-20 h-20 rounded-2xl border-2 flex items-center justify-center text-3xl mb-5 bg-[#12121A] z-10"
                    style={{ borderColor: `${step.glow}50`, boxShadow: `0 0 24px ${step.glow}30`, animationDelay: `${i * 0.5}s` }}
                  >
                    {step.icon}
                    {/* Glow dot indicator */}
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0F]" style={{ background: step.glow }} />
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#F1F0ED] mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>{step.label}</div>
                    <div className="text-xs text-[#8B8A96]">{step.sub}</div>
                  </div>

                  {/* Connector line & travel dot (except last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 w-full h-px z-0" style={{ background: `linear-gradient(to right, ${step.glow}40, ${steps[i+1].glow}40)` }}>
                      <div className="absolute top-1/2 -translate-y-1/2">
                        <div className="travel-dot absolute w-3 h-3 rounded-full -top-1.5" style={{ background: step.glow, boxShadow: `0 0 8px ${step.glow}` }} />
                        <div className="travel-dot travel-dot-2 absolute w-2 h-2 rounded-full -top-1" style={{ background: step.glow, boxShadow: `0 0 6px ${step.glow}`, opacity: 0.7 }} />
                        <div className="travel-dot travel-dot-3 absolute w-1.5 h-1.5 rounded-full -top-0.5" style={{ background: step.glow, boxShadow: `0 0 4px ${step.glow}`, opacity: 0.5 }} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile version — Vertical */}
          <div className="md:hidden flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.id} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-xl border-2 flex items-center justify-center text-2xl bg-[#12121A] shrink-0"
                    style={{ borderColor: `${step.glow}50`, boxShadow: `0 0 16px ${step.glow}30` }}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-8 my-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${step.glow}60, ${steps[i+1].glow}60)` }} />
                  )}
                </div>
                <div className="pt-3 pb-6">
                  <div className="text-base font-bold text-[#F1F0ED] mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>{step.label}</div>
                  <div className="text-sm text-[#8B8A96]">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar below */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🕐", stat: "< 30 giây", label: "Thời gian Hub phân tích & phân công task" },
              { icon: "🔄", stat: "24/7/365", label: "Hệ thống vận hành liên tục không nghỉ" },
              { icon: "📈", stat: "98.6%", label: "Tỷ lệ hoàn thành task đúng yêu cầu" },
            ].map((s) => (
              <div key={s.stat} className="bg-[#12121A] border border-white/5 rounded-2xl p-6 flex items-center gap-5">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <div className="text-2xl font-bold text-[#F1F0ED] mb-0.5" style={{ fontFamily: "'Clash Display', sans-serif" }}>{s.stat}</div>
                  <div className="text-xs text-[#8B8A96]">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
