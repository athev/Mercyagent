"use client";

import Link from "next/link";

const layers = [
  {
    id: "workforce",
    title: "AI Workforce",
    desc: "Đội ngũ nhân sự ảo tinh nhuệ hoạt động 24/7.",
    icon: "💼",
    color: "from-[#7C3AED] to-[#5B21B6]",
    borderColor: "border-[#7C3AED]/30",
    shadow: "hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]",
    features: ["Nhân viên Sales & CSKH", "Kế toán & HR ảo", "Tích hợp đa mô hình AI"],
    link: "/workspace?module=workforce"
  },
  {
    id: "tools",
    title: "AI Tools",
    desc: "Kho công cụ chuyên biệt tối ưu hiệu suất công việc.",
    icon: "⚙️",
    color: "from-[#0D9488] to-[#0F766E]",
    borderColor: "border-[#0D9488]/30",
    shadow: "hover:shadow-[0_0_20px_rgba(13,148,136,0.2)]",
    features: ["Sáng tạo Content tự động", "Phân tích Data sâu", "Tích hợp Zalo/CRM/ERP"],
    link: "/workspace?module=tools"
  },
  {
    id: "learning",
    title: "Vibe Learning",
    desc: "Nâng cấp kỹ năng với AI Coaching 1-1 chuyên sâu.",
    icon: "🎓",
    color: "from-[#F59E0B] to-[#D97706]",
    borderColor: "border-[#F59E0B]/30",
    shadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    features: ["Lộ trình học cá nhân hóa", "Chứng chỉ AI Verified", "Đào tạo cho đội ngũ"],
    link: "/vibe-learning"
  }
];

export default function HPPlatformLayers() {
  return (
    <section id="platform" className="py-24 bg-[#0A0A0F] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Hệ Sinh Thái <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0D9488]">Toàn Diện</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8B8A96] text-lg font-medium">
            Mọi cấu phần quyền lực nhất để vận hành và mở rộng quy mô công việc, 
            nay được tập hợp trong cùng một giao diện duy nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layers.map((layer) => (
            <div 
              key={layer.id}
              className={`group bg-[#12121A] rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-transparent ${layer.shadow} relative overflow-hidden flex flex-col`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${layer.color}`} />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-8 bg-gradient-to-br ${layer.color} shadow-lg`}>
                {layer.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#F1F0ED] mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>{layer.title}</h3>
              <p className="text-[#8B8A96] mb-8 flex-grow">{layer.desc}</p>
              
              <ul className="space-y-3 mb-8 text-left">
                {layer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-[#F1F0ED]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={layer.link}
                className="inline-flex items-center text-sm font-semibold text-[#F1F0ED] hover:text-white transition-colors mt-auto group/btn"
              >
                Khám phá ngay
                <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
