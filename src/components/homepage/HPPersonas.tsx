"use client";

const personas = [
  {
    role: "Chủ doanh nghiệp SME",
    emoji: "👔",
    painPoint: "\"Tôi nghe nhiều về AI nhưng không biết bắt đầu từ đâu cho phù hợp với công ty mình.\"",
    solution: "AI Consultant phân tích quy trình, đề xuất top 3 module có ROI cao nhất, triển khai pilot trong 2 tuần.",
    tags: ["Tư vấn chiến lược", "Module AI theo phòng ban", "ROI rõ ràng"],
    color: "#2563EB",
  },
  {
    role: "Quản lý / Team Lead",
    emoji: "📊",
    painPoint: "\"Đội của tôi mất quá nhiều thời gian vào báo cáo, họp hành và email. Không còn thời gian làm việc thực sự.\"",
    solution: "Vibe Work + AI Consultant giúp tự động hoá 30–70% tác vụ lặp đi lặp lại, giải phóng thời gian cho công việc sáng tạo.",
    tags: ["Automation workflow", "AI báo cáo", "AI họp hành"],
    color: "#0D9488",
  },
  {
    role: "Nhân viên muốn nâng cấp",
    emoji: "🚀",
    painPoint: "\"Tôi sợ AI thay thế mình. Tôi muốn học nhưng không biết phải học gì, học từ đâu.\"",
    solution: "Vibe-Learning cung cấp lộ trình học rõ ràng theo vị trí công việc, video ngắn — thực hành ngay — chứng chỉ được công nhận.",
    tags: ["Lộ trình cá nhân", "Video 5–10 phút", "Chứng chỉ AI"],
    color: "#7C3AED",
  },
  {
    role: "Freelancer & AI Trainer",
    emoji: "🤖",
    painPoint: "\"Tôi có kỹ năng AI nhưng khó tìm khách hàng phù hợp. Cơ hội nào cho người làm AI tự do?\"",
    solution: "AI Marketplace kết nối trực tiếp với doanh nghiệp có nhu cầu thực tế. Nhận job, báo giá và làm việc ngay trên nền tảng.",
    tags: ["AI Marketplace", "Job matching", "Thanh toán bảo đảm"],
    color: "#F59E0B",
    comingSoon: true,
  },
];

export default function HPPersonas() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Chân dung khách hàng</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950" style={{ letterSpacing: "-0.02em" }}>
            Vibework dành cho ai?
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-lg leading-relaxed">
            Dù bạn là chủ doanh nghiệp, quản lý hay nhân viên — đều có con đường riêng để bắt đầu với AI.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((p) => (
            <div key={p.role} className="relative border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200 bg-white flex flex-col gap-5">
              {p.comingSoon && (
                <span className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: p.color + "15", color: p.color }}>
                  Coming Soon
                </span>
              )}

              {/* Role */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: p.color + "12" }}>
                  {p.emoji}
                </div>
                <div>
                  <p className="font-bold text-gray-950 text-base">{p.role}</p>
                </div>
              </div>

              {/* Pain point quote */}
              <div className="bg-gray-50 rounded-xl px-5 py-4 border-l-2 border-gray-300">
                <p className="text-gray-600 text-sm leading-relaxed italic">{p.painPoint}</p>
              </div>

              {/* Solution */}
              <p className="text-gray-700 text-sm leading-relaxed">{p.solution}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: p.color + "10", color: p.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
