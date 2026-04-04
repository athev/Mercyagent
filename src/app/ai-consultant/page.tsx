"use client";
import { useState } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const modules = [
  { dept: "Toàn bộ", name: "Tư duy AI", desc: "Hiểu đúng AI, tránh sai lầm phổ biến", kpi: "100% NV hiểu", icon: "🧠" },
  { dept: "Toàn bộ", name: "Kỹ năng Prompt", desc: "Viết prompt hiệu quả với Role–Context–Task", kpi: "≥70% dùng đúng", icon: "✍️" },
  { dept: "Toàn bộ", name: "AI hàng ngày", desc: "Email, báo cáo, template công việc", kpi: "+30% hiệu suất", icon: "📧" },
  { dept: "Toàn bộ", name: "Tự động hoá", desc: "Giảm lặp lại, workflow cơ bản", kpi: "-30% thời gian", icon: "⚙️" },
  { dept: "Toàn bộ", name: "AI Báo cáo & Slide", desc: "Slide chuẩn + story, phân tích tài liệu", kpi: "-50% thời gian báo cáo", icon: "📊" },
  { dept: "Quản lý", name: "AI cho Quản lý", desc: "Ra quyết định OKR/BSC, plan mẫu", kpi: "Nhanh & chính xác", icon: "🎯" },
  { dept: "HCNS", name: "AI Nhân sự", desc: "Chuẩn hoá JD, KPI, quy chế", kpi: "100% chuẩn hoá", icon: "👥" },
  { dept: "Kế toán", name: "AI Kế toán", desc: "Giảm sai sót, template báo cáo", kpi: "-20% lỗi", icon: "💰" },
  { dept: "Kinh doanh", name: "AI Bán hàng", desc: "Script, proposal tăng doanh số", kpi: "+15% chốt sale", icon: "📈" },
  { dept: "Marketing", name: "AI Marketing", desc: "Content plan, ads hiệu quả", kpi: "+30% output", icon: "📢" },
  { dept: "Supply Chain", name: "AI Cung ứng", desc: "Tối ưu chi phí, DS NCC chuẩn", kpi: "-10% chi phí", icon: "🔗" },
  { dept: "XNK", name: "AI Xuất nhập khẩu", desc: "Chứng từ, Incoterms", kpi: "0 lỗi chứng từ", icon: "🚢" },
  { dept: "Pháp lý", name: "AI Soạn hợp đồng", desc: "Draft hợp đồng nhanh, template HĐ", kpi: "-50% thời gian", icon: "📜" },
  { dept: "Pháp lý", name: "AI Rà soát HĐ", desc: "Risk review, checklist pháp lý", kpi: "Giảm tranh chấp", icon: "🔍" },
  { dept: "Pháp lý", name: "AI Quản lý HĐ", desc: "Kiểm soát, tracking nghĩa vụ", kpi: "100% kiểm soát", icon: "📋" },
  { dept: "Pháp lý", name: "AI Pháp luật", desc: "Cập nhật VBPL mới trong ≤7 ngày", kpi: "100% VBPL liên quan", icon: "⚖️" },
  { dept: "TQM", name: "AI QA (SOP & QC)", desc: "Chuẩn hoá SOP, checklist", kpi: "100% chuẩn hoá", icon: "✅" },
  { dept: "TQM", name: "AI Phân tích lỗi", desc: "Root cause, CAPA", kpi: "-20% lỗi", icon: "🔧" },
  { dept: "TQM", name: "AI Audit", desc: "Checklist ISO/HACCP", kpi: "Nhanh & chuẩn", icon: "📝" },
  { dept: "SHE", name: "AI SHE", desc: "JSA, quy trình an toàn", kpi: "0 tai nạn nặng", icon: "🦺" },
  { dept: "PCCC", name: "AI PCCC", desc: "Checklist, diễn tập phòng cháy", kpi: "100% đạt", icon: "🔥" },
  { dept: "Sản xuất + BOD", name: "AI Sản xuất", desc: "Quy trình SOP + dashboard BOD", kpi: "+15% năng suất", icon: "🏭" },
];

const depts = ["Tất cả", "Toàn bộ", "Quản lý", "HCNS", "Kế toán", "Kinh doanh", "Marketing", "Pháp lý", "TQM", "SHE", "PCCC", "Sản xuất + BOD", "XNK", "Supply Chain"];

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Doanh nghiệp < 20 người",
    price: "15.000.000",
    period: "/ gói 3 tháng",
    highlight: false,
    features: [
      "1 buổi chẩn đoán quy trình (2h)",
      "2–3 module AI theo nhu cầu",
      "Workshop thực hành 1 ngày",
      "Tài liệu SOP + Template theo phòng ban",
      "Hỗ trợ Zalo 30 ngày",
      "Báo cáo KPI sau pilot",
    ],
    cta: "Bắt đầu ngay",
    ctaStyle: "border",
  },
  {
    name: "Growth",
    subtitle: "Doanh nghiệp 20–100 người",
    price: "35.000.000",
    period: "/ gói 3 tháng",
    highlight: true,
    badge: "Phổ biến nhất",
    features: [
      "2 buổi chẩn đoán quy trình",
      "5–8 module AI theo phòng ban",
      "3 workshop thực hành",
      "SOP + Template toàn bộ phòng ban",
      "AI Agent tích hợp (1 agent)",
      "Coaching 1-1 key person",
      "Hỗ trợ Zalo 90 ngày",
      "Review KPI hàng tháng",
    ],
    cta: "Tư vấn ngay",
    ctaStyle: "filled",
  },
  {
    name: "Enterprise",
    subtitle: "Doanh nghiệp > 100 người",
    price: "Liên hệ",
    period: "/ tuỳ chỉnh",
    highlight: false,
    features: [
      "Chẩn đoán toàn diện doanh nghiệp",
      "Toàn bộ 22 module AI",
      "Workshop liên tục theo phòng ban",
      "Hệ thống Agent-to-Agent tùy chỉnh",
      "Tích hợp vào phần mềm nội bộ",
      "Đội ngũ AI Champion nội bộ",
      "Hỗ trợ 24/7 dedicated",
      "Roadmap AI 12 tháng",
    ],
    cta: "Liên hệ tư vấn",
    ctaStyle: "border",
  },
];

const agentServices = [
  {
    icon: "🤖",
    title: "AI Chatbot Doanh nghiệp",
    desc: "Chatbot tư vấn khách hàng 24/7, tích hợp kiến thức nội bộ và sản phẩm, kết nối Zalo/Website/Facebook.",
    tags: ["Zalo OA", "Website Widget", "FAQ Automation"],
    time: "1–2 tuần",
  },
  {
    icon: "📄",
    title: "Document AI Agent",
    desc: "Agent đọc, phân tích và tóm tắt tài liệu dài (hợp đồng, báo cáo, SOP) chỉ trong vài giây. Hỏi đáp trên dữ liệu nội bộ.",
    tags: ["PDF Processing", "RAG System", "Q&A Engine"],
    time: "2–3 tuần",
  },
  {
    icon: "⚡",
    title: "Workflow Automation Agent",
    desc: "Agent tự động thu thập, xử lý và gửi dữ liệu giữa các phần mềm. Báo cáo tự động, cảnh báo khi có bất thường.",
    tags: ["Make / n8n", "API Integration", "Auto Report"],
    time: "2–4 tuần",
  },
  {
    icon: "🔮",
    title: "Agent-to-Agent System",
    desc: "Nhiều AI Agent phối hợp nhau như một đội nhân viên ảo: Agent phân tích → Agent ra quyết định → Agent thực thi → Agent báo cáo.",
    tags: ["Multi-Agent", "Orchestration", "Custom LLM"],
    time: "4–8 tuần",
    featured: true,
  },
];

const a2aFlow = [
  { role: "Orchestrator Agent", desc: "Nhận yêu cầu từ người dùng, phân tích và phân công nhiệm vụ cho các sub-agent", color: "#2563EB", icon: "🧠" },
  { role: "Research Agent", desc: "Thu thập dữ liệu, phân tích thị trường, đọc tài liệu và tổng hợp thông tin", color: "#7C3AED", icon: "🔍" },
  { role: "Decision Agent", desc: "Dựa trên dữ liệu, đề xuất phương án tối ưu và ra quyết định có logic", color: "#0D9488", icon: "🎯" },
  { role: "Execution Agent", desc: "Thực thi hành động: gửi email, cập nhật CRM, tạo tài liệu, đặt lịch...", color: "#F59E0B", icon: "⚡" },
  { role: "Report Agent", desc: "Tổng hợp kết quả, tạo báo cáo và gửi thông báo đến stakeholders", color: "#10B981", icon: "📊" },
];

const faqs = [
  {
    q: "Doanh nghiệp tôi không có IT, có triển khai được không?",
    a: "Hoàn toàn được. Chúng tôi sử dụng các công cụ no-code/low-code và đào tạo đội ngũ vận hành mà không cần kiến thức lập trình.",
  },
  {
    q: "AI Agent tích hợp vào phần mềm hiện tại của tôi như thế nào?",
    a: "Thông qua API hoặc các connector có sẵn (Make, n8n, Zapier). Chúng tôi hỗ trợ tích hợp với hầu hết phần mềm phổ biến: ERP, CRM, Google Workspace, Microsoft 365.",
  },
  {
    q: "Dữ liệu nội bộ của tôi có an toàn không?",
    a: "Dữ liệu của bạn được xử lý trong môi trường bảo mật, không lưu trên server bên thứ ba. Chúng tôi ký NDA và tuân thủ các quy định về bảo mật thông tin doanh nghiệp.",
  },
  {
    q: "Sau khi triển khai, ai vận hành và bảo trì?",
    a: "Chúng tôi đào tạo AI Champion nội bộ của bạn để vận hành độc lập. Vibework hỗ trợ bảo trì, cập nhật và mở rộng theo gói dịch vụ đã ký.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ModuleFilters({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {depts.map((d) => (
        <button
          key={d}
          onClick={() => setActive(d)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${active === d ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="font-semibold text-gray-900 text-sm leading-snug">{q}</span>
        <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-6 pb-5"><p className="text-gray-500 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AIConsultantPage() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const filteredModules = activeFilter === "Tất cả" ? modules : modules.filter((m) => m.dept === activeFilter);

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body { background: #fff; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(37,99,235,0.15); }
      `}</style>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-base text-black">Vibework</span>
          </Link>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>/</span>
            <span className="text-gray-700 font-medium ml-1">AI Consultant</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <a href="#pricing" className="hidden md:block text-sm text-gray-600 hover:text-black font-medium transition-colors">Bảng giá</a>
            <a href="#contact" className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              Đặt lịch tư vấn
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Dịch vụ chủ lực
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-950 leading-[1.1] mb-5" style={{ letterSpacing: "-0.02em" }}>
                AI Consultant —<br />
                <span className="text-blue-500">Tối ưu vận hành<br />doanh nghiệp với AI</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                Chúng tôi không chỉ tư vấn. Chúng tôi đi vào từng phòng ban, chẩn đoán điểm nghẽn và triển khai 22 module AI có KPI đo lường rõ ràng.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                  Xem bảng giá
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="#modules" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors">
                  Xem 22 module AI
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "22", label: "Module AI theo phòng ban", color: "#2563EB" },
                { val: "2–4W", label: "Triển khai thực tế", color: "#7C3AED" },
                { val: "30–70%", label: "Giảm thời gian xử lý", color: "#0D9488" },
                { val: "100%", label: "Dành riêng DN Việt Nam", color: "#F59E0B" },
              ].map((s) => (
                <div key={s.val} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-1 hover:border-gray-300 transition-colors">
                  <span className="text-3xl font-bold text-gray-950" style={{ letterSpacing: "-0.03em" }}>{s.val}</span>
                  <span className="text-sm text-gray-500 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 22 MODULES ── */}
      <section id="modules" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Đề cương đào tạo</p>
            <h2 className="text-4xl font-bold text-gray-950 mb-3" style={{ letterSpacing: "-0.02em" }}>22 Module AI ứng dụng</h2>
            <p className="text-gray-500 text-base max-w-lg mb-8">Mỗi module được thiết kế cho một phòng ban cụ thể với KPI đo lường rõ ràng từ ngày đầu.</p>
            <ModuleFilters active={activeFilter} setActive={setActiveFilter} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredModules.map((mod, i) => (
              <div key={mod.name} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{mod.icon}</span>
                    <div>
                      <p className="font-bold text-gray-950 text-sm">{mod.name}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{mod.dept}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 whitespace-nowrap">KPI: {mod.kpi}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT SETUP SERVICES ── */}
      <section id="agent" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Dịch vụ nâng cao</p>
            <h2 className="text-4xl font-bold text-gray-950 mb-3" style={{ letterSpacing: "-0.02em" }}>Setup AI Agent<br />cho doanh nghiệp</h2>
            <p className="text-gray-500 text-base max-w-lg">Vượt xa việc đào tạo — chúng tôi xây dựng và triển khai các AI Agent chạy tự động trong hệ thống của bạn.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {agentServices.map((s) => (
              <div key={s.title} className={`relative border rounded-2xl p-7 transition-all duration-200 ${s.featured ? "border-blue-300 bg-blue-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"}`}>
                {s.featured && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 bg-blue-600 text-white rounded-full uppercase tracking-wider">Premium</span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{s.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-950 text-base mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-gray-100 text-gray-600 border border-gray-200">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 shrink-0 ml-3">⏱ {s.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Agent-to-Agent Flow */}
          <div id="a2a" className="bg-gray-950 rounded-3xl p-10 md:p-14">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Mô hình tiên tiến nhất</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
                Agent-to-Agent (A2A)
              </h3>
              <p className="text-gray-400 text-base max-w-xl leading-relaxed">
                Không còn một AI làm tất mọi thứ. Giống như một đội nhân viên thật — mỗi AI Agent chuyên một nhiệm vụ, phối hợp với nhau hoàn toàn tự động.
              </p>
            </div>

            {/* Flow */}
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {a2aFlow.map((node, i) => (
                <div key={node.role} className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0">
                  <div className="flex-1 border border-white/10 rounded-2xl p-5 bg-white/5 hover:bg-white/8 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: node.color + "20" }}>
                        {node.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{node.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{node.desc}</p>
                  </div>
                  {i < a2aFlow.length - 1 && (
                    <div className="flex items-center justify-center py-2 lg:py-0 lg:px-2 shrink-0">
                      <svg className="w-4 h-4 text-gray-600 rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6">
              {[
                { title: "Ví dụ thực tế", desc: "Agent nhận lead từ form → phân loại → gửi email cá nhân hoá → cập nhật CRM → báo cáo Sales Manager — tất cả tự động." },
                { title: "Tiết kiệm", desc: "Một A2A System có thể thay thế 2–4 nhân sự làm các công việc lặp lại, vận hành 24/7 không có ngày nghỉ." },
                { title: "Thời gian triển khai", desc: "Pilot A2A System đơn giản: 4–6 tuần. Hệ thống phức tạp nhiều agent: 8–12 tuần." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-white font-bold text-sm mb-2">{item.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Bảng giá</p>
            <h2 className="text-4xl font-bold text-gray-950 mb-3" style={{ letterSpacing: "-0.02em" }}>
              Gói dịch vụ rõ ràng, không ẩn phí
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Linh hoạt theo quy mô doanh nghiệp. Tất cả gói đều bao gồm tư vấn ban đầu miễn phí.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl flex flex-col ${plan.highlight ? "bg-gray-950 text-white shadow-2xl scale-[1.02]" : "bg-white border border-gray-200"}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full whitespace-nowrap">{plan.badge}</span>
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col gap-6">
                  <div>
                    <p className={`text-sm font-bold mb-1 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>{plan.subtitle}</p>
                    <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-gray-950"}`}>{plan.name}</h3>
                  </div>
                  <div>
                    <div className="flex items-end gap-2">
                      <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-gray-950"}`} style={{ letterSpacing: "-0.03em" }}>
                        {plan.price !== "Liên hệ" ? `${plan.price}đ` : plan.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${plan.highlight ? "text-gray-500" : "text-gray-400"}`}>{plan.period}</p>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                        <svg className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-full text-sm font-bold text-center transition-colors ${
                      plan.ctaStyle === "filled"
                        ? "bg-white text-black hover:bg-gray-100"
                        : plan.highlight
                        ? "border border-white/20 text-white hover:bg-white/10"
                        : "border border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8">
            Giá chưa bao gồm VAT · Có thể tuỳ chỉnh theo quy mô · Thanh toán theo giai đoạn
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-950 text-center mb-10" style={{ letterSpacing: "-0.02em" }}>Câu hỏi thường gặp</h2>
          <div className="space-y-2">
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: "-0.03em" }}>
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-blue-400 text-xl font-semibold mb-3">Buổi chẩn đoán đầu tiên hoàn toàn miễn phí.</p>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Chúng tôi sẽ phân tích quy trình hiện tại và đề xuất top 3 module AI có ROI cao nhất cho doanh nghiệp bạn — không mất phí, không cam kết.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://zalo.me" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-3.98 4.897c-.2.246-.513.39-.84.39h-1.447a.356.356 0 01-.355-.355V9.98a.356.356 0 01.355-.356h1.447c.327 0 .64.144.84.39l3.98 4.898z"/></svg>
              Nhắn qua Zalo
            </a>
            <a href="mailto:hello@vibework.vn" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm">
              📧 hello@vibework.vn
            </a>
          </div>
          <p className="mt-6 text-gray-600 text-xs">Phản hồi trong vòng 24 giờ làm việc</p>
        </div>
      </section>

      {/* Simple footer */}
      <div className="bg-black py-6 text-center">
        <p className="text-gray-600 text-xs">© 2026 Vibework · <Link href="/" className="hover:text-white transition-colors">Về trang chủ</Link></p>
      </div>
    </main>
  );
}
