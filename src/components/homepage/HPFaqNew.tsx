"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Doanh nghiệp tôi có phải giỏi công nghệ mới dùng được không?",
    a: "Không. Vibework được thiết kế cho người chưa có nền tảng kỹ thuật. Chúng tôi sử dụng các công cụ AI đã có sẵn (ChatGPT, Gemini, Canva AI...) và đào tạo cách dùng đúng — không cần code, không cần IT.",
  },
  {
    q: "Mất bao lâu để thấy kết quả?",
    a: "Thường sau 2–4 tuần pilot, team của bạn đã thấy sự khác biệt rõ rệt: báo cáo nhanh hơn, email chuyên nghiệp hơn, quy trình bớt lặp lại. KPI được đo từ ngày đầu.",
  },
  {
    q: "Vibework phù hợp với lĩnh vực nào?",
    a: "Chúng tôi có 22 module AI theo phòng ban: Sales, Marketing, Nhân sự, Kế toán, Pháp lý, TQM, Sản xuất... Hầu hết doanh nghiệp SME đều tìm được ít nhất 3–5 điểm có thể cải thiện ngay.",
  },
  {
    q: "Chi phí như thế nào?",
    a: "Tùy theo quy mô doanh nghiệp và số module triển khai. Buổi chẩn đoán đầu tiên miễn phí. Sau khi hiểu nhu cầu, chúng tôi sẽ đề xuất gói phù hợp với ngân sách của bạn.",
  },
  {
    q: "AI Marketplace là gì, khác gì freelance thông thường?",
    a: "AI Marketplace là nơi kết nối doanh nghiệp với AI Trainer và Freelancer AI chuyên nghiệp. AI sẽ phân tích yêu cầu, tạo brief tự động và matching với đúng chuyên gia — nhanh hơn, chính xác hơn mô hình truyền thống.",
  },
  {
    q: "Tôi có thể học Vibe-Learning mà không cần mua gói tư vấn không?",
    a: "Có. Vibe-Learning là sản phẩm độc lập. Bạn có thể đăng ký học theo khoá, không cần mua thêm bất kỳ dịch vụ nào khác.",
  },
];

export default function HPFaqNew() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-950 text-center mb-4" style={{ letterSpacing: "-0.02em" }}>
          FAQs
        </h2>
        <p className="text-gray-500 text-center text-base mb-14">Câu hỏi thường gặp về Vibework</p>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
