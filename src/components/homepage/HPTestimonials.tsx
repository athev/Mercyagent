"use client";

const QUOTES = [
  {
    id: 1,
    quote: "Từ khi dùng Vibework, chi phí nhân sự tôi giảm 40% còn tốc độ vận hành tăng gấp đôi. Không cần nhảy qua lại giữa 5-6 phần mềm nữa.",
    name: "Trần Trọng H.",
    role: "Giám Đốc · Chuỗi Bán Lẻ 45 NV",
  },
  {
    id: 2,
    quote: "Lúc đầu sợ AI thay việc, nhưng giờ tôi xử lý được lượng công việc bằng 3 người nhờ Hub này. Sếp tăng lương tôi sau 2 tháng triển khai.",
    name: "Lê Ngọc B.",
    role: "Data Analyst & Digital Marketer",
  },
  {
    id: 3,
    quote: "Làm freelancer một mình nhưng có cả đội AI hỗ trợ phía sau. Tôi nhận 10 dự án/tháng mà không cần thuê thêm ai. Game changer thật sự.",
    name: "Nguyễn Tuấn A.",
    role: "Freelance Creative Director",
  },
];

export default function HPTestimonials() {
  return (
    <section className="bg-black py-16 border-t border-white/[0.06]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" style={{ fontFamily: "'Clash Display', sans-serif" }}>
          Họ đã thay đổi cách làm việc
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <div key={q.id} className="bg-[#111] border border-white/[0.06] rounded-2xl p-7 flex flex-col">
              {/* Quote marks */}
              <div className="text-4xl text-white/10 font-serif leading-none mb-5">&ldquo;</div>
              <p className="text-white/80 text-base leading-relaxed flex-grow mb-7">{q.quote}</p>
              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'Clash Display', sans-serif" }}>{q.name}</p>
                <p className="text-[#666] text-xs mt-1">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
