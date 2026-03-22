"use client";

const steps = [
  {
    num: "01",
    title: "Khởi tạo Workspace",
    desc: "Chỉ cần 1 email, nền tảng lập tức thiết lập sẵn một không gian làm việc số được trang bị đầy đủ bộ máy AI tiên tiến nhất.",
    color: "text-[#7C3AED]",
    bg: "bg-[#7C3AED]/10",
    border: "border-[#7C3AED]/30",
  },
  {
    num: "02",
    title: "Giao việc cho Hub",
    desc: "Kéo thả dữ liệu hoặc gõ yêu cầu. Hệ thống tự động phân phối tác vụ cho các chuyên viên AI và công cụ phù hợp nhất.",
    color: "text-[#0D9488]",
    bg: "bg-[#0D9488]/10",
    border: "border-[#0D9488]/30",
  },
  {
    num: "03",
    title: "Tận hưởng kết quả",
    desc: "Quy trình được lên kịch bản và tự chạy 24/7. Bạn chỉ cần vào Hub để duyệt báo cáo, chốt kết quả và đưa ra quyết định.",
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/30",
  },
];

export default function HPHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0A0A0F] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Làm Việc Với Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#7C3AED]">Thế Nào?</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#8B8A96] text-lg font-medium">
            Quên đi khái niệm "phải học prompt". Đây là Trạm AI được thiết kế để phục vụ bạn ngay từ cú click đầu tiên.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[4rem] left-0 w-full h-0.5 bg-gradient-to-r from-[#7C3AED]/30 via-[#0D9488]/30 to-[#F59E0B]/30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                {/* Step Number Badge */}
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center font-bold text-4xl mb-8 ${step.bg} ${step.border} ${step.color} border transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2`} style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {step.num}
                </div>
                
                <h3 className="text-2xl font-bold text-[#F1F0ED] mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {step.title}
                </h3>
                
                <p className="text-[#8B8A96] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Console / Demo Mockup abstract */}
        <div className="mt-24 max-w-4xl mx-auto bg-[#12121A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
           <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0A0A0F]">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="mx-auto text-xs text-[#8B8A96] font-mono">Hub Interface Demo</div>
           </div>
           <div className="p-8 flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                 <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                 <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                 <div className="h-4 w-5/6 bg-white/5 rounded"></div>
              </div>
              <div className="w-full md:w-1/3 h-32 bg-gradient-to-br from-[#7C3AED]/20 to-[#0D9488]/20 border border-white/5 rounded-xl flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center">
                    <span className="w-4 h-4 bg-[#F1F0ED] rounded-full animate-pulse"></span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
