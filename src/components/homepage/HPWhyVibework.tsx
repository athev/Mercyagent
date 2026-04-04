"use client";

const reasons = [
  {
    icon: "⚡",
    title: "Không lý thuyết suông",
    desc: "Mỗi giải pháp đều được thử nghiệm thực tế trong doanh nghiệp Việt. Bạn nhận được kết quả đo lường được, không phải slide PowerPoint.",
  },
  {
    icon: "🎯",
    title: "Đúng người, đúng việc",
    desc: "AI không thay thế nhân viên — AI giúp mỗi người làm việc tốt hơn gấp 3–5 lần tại đúng vị trí của mình.",
  },
  {
    icon: "🇻🇳",
    title: "Hiểu ngữ cảnh Việt Nam",
    desc: "Chúng tôi không copy mô hình nước ngoài. Giải pháp được thiết kế riêng cho quy trình, văn hoá và hành vi doanh nghiệp tại Việt Nam.",
  },
  {
    icon: "🔄",
    title: "Triển khai trong tuần, không phải tháng",
    desc: "Từ tư vấn đến pilot chạy thực tế trong vòng 2–4 tuần. Không cần đội IT lớn, không cần đầu tư hạ tầng phức tạp.",
  },
  {
    icon: "📊",
    title: "KPI rõ ràng từ Ngày 1",
    desc: "Mỗi module AI đều có KPI đo lường: -30% thời gian, +15% doanh số, -20% lỗi nghiệp vụ... Bạn thấy kết quả ngay.",
  },
  {
    icon: "🤝",
    title: "Đồng hành dài hạn",
    desc: "Chúng tôi không biến mất sau khi triển khai. Vibework hỗ trợ optimize, cập nhật và mở rộng theo sự phát triển của bạn.",
  },
];

const stats = [
  { value: "22+", label: "Module AI chuyên sâu" },
  { value: "2–4W", label: "Triển khai thực tế" },
  { value: "30–70%", label: "Giảm thời gian xử lý" },
  { value: "100%", label: "Dành riêng cho DN Việt" },
];

export default function HPWhyVibework() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Big statement — CratorAI style */}
        <div className="mb-20 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Tại sao chọn Vibework</p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-950 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
            Đủ công nghệ AI có sẵn.{" "}
            <span className="text-gray-400 font-normal">Nhưng không ai chỉ bạn cách dùng đúng cho doanh nghiệp của mình.</span>
          </h2>
          <p className="mt-6 text-blue-500 text-xl md:text-2xl font-semibold leading-relaxed">
            Đó là lý do Vibework ra đời.
          </p>
          <p className="mt-3 text-gray-500 text-base max-w-xl leading-relaxed">
            Chúng tôi không bán phần mềm. Chúng tôi giúp doanh nghiệp Việt <strong className="text-gray-800">ứng dụng AI vào vận hành thực tế</strong> — từ tư vấn chiến lược, đào tạo đội ngũ đến triển khai công cụ.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-20">
          {stats.map((s) => (
            <div key={s.value} className="bg-white px-8 py-6 flex flex-col gap-1">
              <span className="text-3xl font-bold text-gray-950" style={{ letterSpacing: "-0.03em" }}>{s.value}</span>
              <span className="text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white p-8 flex flex-col gap-3 hover:bg-gray-50 transition-colors duration-200">
              <div className="text-2xl">{r.icon}</div>
              <h3 className="text-base font-bold text-gray-950">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
