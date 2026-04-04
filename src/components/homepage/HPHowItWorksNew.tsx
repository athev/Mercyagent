"use client";

const steps = [
  {
    num: "01",
    title: "Chẩn đoán",
    headline: "Hiểu đúng trước khi làm.",
    desc: "Chúng tôi bắt đầu bằng việc lắng nghe — phân tích quy trình, điểm nghẽn và cơ hội AI thực sự có thể tạo ra giá trị cho doanh nghiệp bạn. Không pitching, không bán giải pháp vội.",
    detail: "Khảo sát online + buổi workshop 2 giờ với đội ngũ key person. Đầu ra: Bản đồ quy trình và top 5 cơ hội AI có ROI cao nhất.",
    duration: "Tuần 1",
  },
  {
    num: "02",
    title: "Thiết kế",
    headline: "Giải pháp fit với bạn, không phải ngược lại.",
    desc: "Dựa trên chẩn đoán, chúng tôi thiết kế lộ trình AI cụ thể: module nào, công cụ nào, đội nào triển khai trước. Có KPI rõ ràng cho từng giai đoạn.",
    detail: "Bản đề xuất module AI + timeline + budget estimate + KPI tracking sheet. Bạn review và sign-off trước khi bắt đầu.",
    duration: "Tuần 2",
  },
  {
    num: "03",
    title: "Triển khai",
    headline: "Chạy thực tế, không chỉ training.",
    desc: "Training kết hợp coaching trực tiếp tại doanh nghiệp. Đội ngũ của bạn được thực hành ngay với công việc thật — không phải bài tập demo. Vibework ở bên xuyên suốt quá trình.",
    detail: "Kết hợp workshop thực hành + tài liệu SOP theo phòng ban + nhóm hỗ trợ Zalo 24/7 trong 30 ngày đầu.",
    duration: "Tuần 3–6",
  },
  {
    num: "04",
    title: "Tối ưu & Mở rộng",
    headline: "Kết quả đo được, không ngừng cải thiện.",
    desc: "Sau khi chạy thực tế, chúng tôi đo KPI, thu thập feedback và tiếp tục cải thiện. Khi một phòng ban thành công, nhân rộng mô hình sang bộ phận khác.",
    detail: "Review hàng tháng + báo cáo KPI + roadmap mở rộng Q2, Q3, Q4. Bạn không bao giờ đơn độc trong hành trình AI.",
    duration: "Month 2+",
  },
];

export default function HPHowItWorksNew() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Quy trình làm việc</p>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Chúng tôi làm<br />bốn việc đơn giản.
            </h2>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Chẩn đoán, thiết kế, triển khai và tối ưu — một vòng lặp liên tục để AI thực sự hoạt động trong doanh nghiệp bạn.
            </p>
          </div>
        </div>

        {/* Steps — CratorAI two-column layout */}
        <div className="border-t border-gray-200">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col md:flex-row gap-0 border-b border-gray-200 py-14 hover:bg-white/70 transition-colors -mx-6 px-6">

              {/* Left: number + title (sticky concept) */}
              <div className="md:w-80 shrink-0 md:pr-12 flex flex-col gap-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-bold text-gray-100 tabular-nums" style={{ fontFamily: "'Inter', sans-serif" }}>{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-950 -mt-2" style={{ letterSpacing: "-0.01em" }}>{step.title}</h3>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{step.duration}</span>
              </div>

              {/* Right: content */}
              <div className="flex-1 md:border-l border-gray-200 md:pl-12 mt-6 md:mt-0 flex flex-col gap-4">
                <h4 className="text-xl font-semibold text-gray-950 leading-snug">{step.headline}</h4>
                <p className="text-gray-500 text-base leading-relaxed">{step.desc}</p>
                <div className="mt-2 bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Output cụ thể</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-base mb-6">Sẵn sàng bắt đầu? Buổi chẩn đoán đầu tiên hoàn toàn miễn phí.</p>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors text-sm">
            Đặt lịch tư vấn miễn phí
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
