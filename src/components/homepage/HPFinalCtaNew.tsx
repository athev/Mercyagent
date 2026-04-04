"use client";

export default function HPFinalCtaNew() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Bắt đầu ngay hôm nay</p>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-950 leading-tight mb-4" style={{ letterSpacing: "-0.025em" }}>
          AI không phải tương lai.
        </h2>
        <p className="text-blue-500 text-2xl md:text-3xl font-semibold mb-6">
          AI là lợi thế cạnh tranh ngay lúc này.
        </p>
        <p className="text-gray-500 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Hàng trăm doanh nghiệp đang ứng dụng AI vào vận hành mỗi ngày. Đừng để đối thủ đi trước bạn thêm nữa.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/onboarding" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors text-sm">
            Bắt đầu miễn phí
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-gray-400 transition-colors text-sm">
            Đặt lịch tư vấn
          </a>
        </div>
        <p className="mt-6 text-gray-400 text-xs">Không cần thẻ tín dụng · Tư vấn miễn phí · Triển khai trong 2 tuần</p>
      </div>
    </section>
  );
}
