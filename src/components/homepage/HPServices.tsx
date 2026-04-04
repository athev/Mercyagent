"use client";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "AI Consultant",
    subtitle: "Tư vấn & tối ưu vận hành doanh nghiệp",
    desc: "Chúng tôi không chỉ tư vấn lý thuyết — chúng tôi đi vào từng phòng ban, phân tích quy trình thực tế và triển khai các module AI cụ thể phù hợp với doanh nghiệp của bạn.",
    modules: [
      "AI Tư duy & Prompt", "AI Báo cáo & Slide", "AI cho Quản lý",
      "AI Nhân sự (HCNS)", "AI Kế toán", "AI Bán hàng",
      "AI Marketing", "AI Pháp lý", "AI QA / SOP",
    ],
    cta: "Xem 22 Module AI",
    href: "/ai-consultant",
    color: "#2563EB",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Vibe-Learning",
    subtitle: "Học AI qua video — dễ nhớ, dễ áp dụng",
    desc: "Khoá học được thiết kế theo phong cách microlearning: video ngắn, bài tập thực hành ngay, kiến thức đi vào trí nhớ dài hạn. Không lý thuyết suông — mỗi bài học là một kỹ năng dùng được ngay.",
    modules: [
      "Video ngắn 5–10 phút", "Bài tập thực hành ngay", "Lộ trình cá nhân hoá",
      "Chứng chỉ hoàn thành", "Cộng đồng hỏi đáp", "Cập nhật liên tục",
    ],
    cta: "Xem khoá học",
    href: "/vibe-learning",
    color: "#7C3AED",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Vibe Work",
    subtitle: "Làm việc chill hơn với AI có sẵn",
    desc: "Không cần cài thêm phần mềm. Vibework tích hợp các công cụ AI hàng đầu vào một workspace duy nhất — bạn chỉ cần mô tả công việc, AI lo phần còn lại.",
    modules: [
      "ChatGPT / Claude / Gemini", "Canva AI & Design", "Gamma Slides AI",
      "Notion AI", "Make / n8n Automation", "AI Writing Tools",
    ],
    cta: "Dùng thử miễn phí",
    href: "/playground",
    color: "#0D9488",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "AI Marketplace",
    subtitle: "Sàn việc làm cho AI Agent — Đầu tiên tại Việt Nam",
    desc: "Đăng yêu cầu, AI phân tích và kết nối bạn với các AI Trainer, Freelancer AI chuyên nghiệp. Từ xây dựng chatbot, automation đến triển khai Agent phức tạp.",
    modules: [
      "Đăng yêu cầu & AI phân tích", "Kết nối AI Trainer", "Nhận báo giá tức thì",
      "Thanh toán an toàn", "Review & đánh giá", "Hợp đồng điện tử",
    ],
    cta: "Coming Soon",
    comingSoon: true,
    color: "#F59E0B",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function HPServices() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Dịch vụ của chúng tôi</p>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Bốn sản phẩm.<br />Một hệ sinh thái.
            </h2>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Từ tư vấn chiến lược, đào tạo nhân lực đến công cụ làm việc thực tế — Vibework đồng hành toàn diện.
            </p>
          </div>
        </div>

        {/* Services — CratorAI sticky-scroll style */}
        <div className="space-y-0 border-t border-gray-100">
          {services.map((svc, i) => (
            <div key={svc.num} className="group flex flex-col md:flex-row gap-0 border-b border-gray-100 py-14 transition-all duration-300 hover:bg-gray-50/50 -mx-6 px-6">
              {/* Left: Sticky label */}
              <div className="md:w-72 shrink-0 flex flex-col gap-3 md:pr-12">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-4xl font-bold tabular-nums" style={{ fontFamily: "'Inter', sans-serif" }}>{svc.num}</span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: svc.color + "15", color: svc.color }}>
                    {svc.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-950" style={{ letterSpacing: "-0.01em" }}>{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.subtitle}</p>
                {svc.comingSoon ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mt-1" style={{ background: svc.color + "18", color: svc.color }}>
                    🚧 Coming Soon
                  </span>
                ) : (
                  <Link href={(svc as any).href || "#"} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-950 hover:gap-2.5 transition-all mt-1">
                    {svc.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                )}
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col gap-5 mt-8 md:mt-0 md:border-l border-gray-100 md:pl-12">
                <p className="text-gray-600 text-base leading-relaxed max-w-xl">{svc.desc}</p>

                {/* Module pills */}
                <div className="flex flex-wrap gap-2">
                  {svc.modules.map((mod) => (
                    <span key={mod} className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 border border-gray-200 bg-gray-50">
                      {mod}
                    </span>
                  ))}
                  {i === 0 && (
                    <Link href="/ai-consultant#modules" className="px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-dashed border-blue-300 text-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors">
                      +13 module khác →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
