"use client";

import { useState } from "react";

const PERSONAS = [
  {
    id: "ceo",
    label: "Chủ Doanh Nghiệp",
    icon: "💼",
    pain: "Tôi trả chi phí cho 8 nhân sự nhưng năng suất không tăng.",
    gain: "AI chạy thay 3 bộ phận, chi phí giảm 40%.",
    accent: "#7C3AED",
    dashboard: <CEODashboard />,
  },
  {
    id: "manager",
    label: "Quản Lý / Giám Đốc",
    icon: "📋",
    pain: "Tôi dành 4 giờ/ngày làm báo cáo cho cấp trên.",
    gain: "Hub tổng hợp báo cáo tức thời từ dữ liệu thực.",
    accent: "#0D9488",
    dashboard: <ManagerDashboard />,
  },
  {
    id: "employee",
    label: "Nhân Viên Văn Phòng",
    icon: "🧑‍💻",
    pain: "Tôi sợ AI thay thế vị trí của mình.",
    gain: "Dùng AI, tôi làm bằng 3 người trong cùng thời gian.",
    accent: "#3B82F6",
    dashboard: <EmployeeDashboard />,
  },
  {
    id: "freelancer",
    label: "Freelancer",
    icon: "🎯",
    pain: "Một mình tôi không thể xử lý hết khối lượng công việc.",
    gain: "Đội ngũ AI làm cùng, tôi nhận 10 dự án một lúc.",
    accent: "#F59E0B",
    dashboard: <FreelancerDashboard />,
  },
];

function CEODashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {[["💰","Doanh thu tháng","↑ 32%","#0D9488"],["🤖","Chi phí nhân sự","↓ 41%","#7C3AED"],["⚡","Năng suất đội","↑ 2.8×","#F59E0B"]].map(([icon,label,val,col]) => (
          <div key={label as string} className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
            <span className="text-2xl">{icon}</span>
            <span className="text-xs text-[#8B8A96]">{label}</span>
            <span className="text-xl font-bold" style={{color: col as string}}>{val}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
        <div className="text-xs text-[#8B8A96] mb-3 uppercase tracking-wider font-semibold">Báo cáo AI — Tự động lúc 8:00 sáng</div>
        <div className="space-y-2">
          {["Q1 Revenue tăng 32% so với cùng kỳ.", "AI Sales Agent chốt 14 hợp đồng trong tuần.", "Đề xuất cắt giảm 2 vị trí CSKH — AI thay thế hoàn toàn."].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm text-[#c5c4d0]">
              <span className="text-[#0D9488] mt-0.5">✓</span>{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ManagerDashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
        <div className="text-xs text-[#8B8A96] mb-3 uppercase tracking-wider font-semibold">Báo cáo team — Tổng hợp tức thì</div>
        <div className="space-y-3">
          {[["Nguyễn V. An","Sales","12/15 tasks","80%"],["Lê Thị Hoa","Marketing","9/10 tasks","90%"],["Trần Minh","Support","21/21 tasks","100%"]].map(([name,role,tasks,pct]) => (
            <div key={name as string} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] flex items-center justify-center text-white text-xs font-bold shrink-0">{(name as string)[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between text-sm mb-1"><span className="text-[#F1F0ED] font-medium">{name}</span><span className="text-[#8B8A96] text-xs">{tasks}</span></div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#0D9488] rounded-full" style={{width: pct as string}} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4 flex items-center gap-3">
        <span className="text-2xl">📊</span>
        <div>
          <div className="text-sm font-bold text-[#F1F0ED]">Báo cáo PowerPoint cho Giám đốc</div>
          <div className="text-xs text-[#0D9488]">AI tổng hợp xong trong 8 giây ⚡</div>
        </div>
        <button className="ml-auto px-3 py-1.5 rounded-lg bg-[#0D9488]/20 border border-[#0D9488]/30 text-[#0D9488] text-xs font-semibold">Xuất file</button>
      </div>
    </div>
  );
}

function EmployeeDashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
          <div className="text-xs text-[#8B8A96] mb-2">Email hôm nay (12 cái)</div>
          <div className="space-y-1.5">
            {["Tóm tắt & soạn trả lời ✓","Phân loại ưu tiên ✓","Lên lịch follow-up ✓"].map(t=>(
              <div key={t} className="flex items-center gap-2 text-xs text-[#c5c4d0]"><span className="text-[#3B82F6]">✓</span>{t}</div>
            ))}
          </div>
          <div className="mt-2 text-xs font-bold text-[#3B82F6]">Xử lý bởi AI — 2 phút</div>
        </div>
        <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
          <div className="text-xs text-[#8B8A96] mb-2">Hiệu suất tháng này</div>
          <div className="text-3xl font-bold text-[#3B82F6] mb-1">3×</div>
          <div className="text-xs text-[#8B8A96]">so với tốc độ trước khi dùng Hub</div>
          <div className="mt-2 text-xs font-semibold text-[#10B981]">🏅 Top performer trong team</div>
        </div>
      </div>
      <div className="flex-1 bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
        <div className="text-xs text-[#8B8A96] mb-3 uppercase tracking-wider font-semibold">Kỹ năng AI của bạn</div>
        {[["Viết content","92%"],["Phân tích Data","75%"],["Tự động hóa","61%"]].map(([skill,pct])=>(
          <div key={skill as string} className="mb-3">
            <div className="flex justify-between text-xs mb-1"><span className="text-[#F1F0ED]">{skill}</span><span className="text-[#3B82F6] font-bold">{pct}</span></div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] rounded-full transition-all" style={{width: pct as string}} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FreelancerDashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4">
        <div className="text-xs text-[#8B8A96] mb-3 uppercase tracking-wider font-semibold">Dự án đang chạy</div>
        <div className="space-y-2">
          {[["Brand Identity — Coffee","Đang viết concept","#F59E0B"],["Social Media Q2 — Tech","AI đang tạo 30 post","#0D9488"],["Pitch deck Startup","Đang dựng slide","#7C3AED"]].map(([name,status,col])=>(
            <div key={name as string} className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/5">
              <span className="w-2 h-2 rounded-full shrink-0" style={{background: col as string}} />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-[#F1F0ED] font-medium truncate">{name}</div>
                <div className="text-xs" style={{color: col as string}}>{status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-[#F59E0B] mb-1">10×</div>
          <div className="text-xs text-[#8B8A96]">Dự án xử lý được / tháng</div>
        </div>
        <div className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-[#10B981] mb-1">0</div>
          <div className="text-xs text-[#8B8A96]">Nhân sự cần thuê thêm</div>
        </div>
      </div>
    </div>
  );
}

export default function HPPersonaDashboard() {
  const [active, setActive] = useState("ceo");
  const persona = PERSONAS.find((p) => p.id === active)!;

  return (
    <>
      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .persona-fade { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>

      <section className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-5" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Bạn Thấy Mình Ở Đây?
            </h2>
            <p className="text-[#8B8A96] text-lg max-w-2xl mx-auto">
              Dù bạn là ai, Hub AI của Vibework luôn có dashboard riêng phù hợp với vai trò và mục tiêu của bạn.
            </p>
          </div>

          {/* Persona Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                style={active === p.id ? { borderColor: p.accent, boxShadow: `0 0 20px ${p.accent}40` } : {}}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full border font-semibold text-sm transition-all duration-200 ${
                  active === p.id ? "text-white border-current bg-white/5" : "border-white/10 text-[#8B8A96] hover:text-[#F1F0ED] hover:border-white/20"
                }`}
              >
                <span className="text-xl">{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>

          {/* Main Panel */}
          <div key={active} className="persona-fade grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Pain & Gain */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#12121A] border border-red-500/20 rounded-2xl p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Nỗi Đau Quen Thuộc</div>
                <p className="text-xl text-[#F1F0ED] font-semibold leading-relaxed">
                  &ldquo;{persona.pain}&rdquo;
                </p>
              </div>
              <div className="bg-[#12121A] rounded-2xl p-8" style={{ border: `1px solid ${persona.accent}30` }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: persona.accent }}>Với Vibework Hub</div>
                <p className="text-xl text-[#F1F0ED] font-semibold leading-relaxed">
                  &ldquo;{persona.gain}&rdquo;
                </p>
              </div>
              <button
                className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg"
                style={{ background: `linear-gradient(135deg, ${persona.accent}, ${persona.accent}99)` }}
              >
                Mở Hub ngay — Miễn phí
              </button>
            </div>

            {/* Right: Live Dashboard Mockup */}
            <div
              className="bg-[#12121A] rounded-3xl p-6 border backdrop-blur-sm"
              style={{ borderColor: `${persona.accent}30`, boxShadow: `0 0 40px ${persona.accent}15` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: persona.accent }} />
                <span className="text-xs text-[#8B8A96] font-semibold uppercase tracking-wider">
                  {persona.label} — Vibework Hub
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Live
                </span>
              </div>
              <div className="min-h-[280px]">{persona.dashboard}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
