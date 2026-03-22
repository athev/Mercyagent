"use client";

import { useState } from "react";

const industries = [
  { id: "retail", name: "Bán lẻ", icon: "🛍️", desc: "Tối ưu quản lý kho, thấu hiểu khách hàng và tự động hóa CSKH.", stats: "Tăng 30% doanh thu" },
  { id: "fb", name: "F&B", icon: "🍔", desc: "Dự báo nguyên liệu, tối ưu giá bán tĩnh và phân tích phản hồi thực khách.", stats: "Giảm 15% chi phí thừa" },
  { id: "realestate", name: "Bất động sản", icon: "🏢", desc: "Tìm kiếm leads AI, chatbot tự động tư vấn dự án 24/7.", stats: "Phản hồi KH trong 3s" },
  { id: "manufacturing", name: "Sản xuất", icon: "🏭", desc: "Dự đoán bảo trì máy móc, tối ưu chuỗi cung ứng bằng dữ liệu lớn.", stats: "Giảm 20% downtime" },
  { id: "health", name: "Y tế", icon: "🏥", desc: "Quản lý hồ sơ thông minh, hỗ trợ chẩn đoán và xếp lịch tự động.", stats: "Tiết kiệm 40% giờ giấy tờ" },
  { id: "finance", name: "Tài chính", icon: "💰", desc: "Đánh giá rủi ro tín dụng, phát hiện gian lận và tư vấn tài chính ảo.", stats: "Nhân 3 tốc độ duyệt" },
  { id: "edu", name: "Giáo dục", icon: "📚", desc: "Xây dựng bài giảng tự động, chấm điểm AI và kèm cặp cá nhân hóa.", stats: "Tăng mạnh tương tác" },
  { id: "logistics", name: "Logistics", icon: "🚚", desc: "Tối ưu hóa tuyến đường, theo dõi vận tải và quản lý kho bãi tự động.", stats: "Giảm 12% phí vận tải" },
];

export default function HPIndustries() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeData = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <>
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section id="industries" className="py-24 bg-[#0A0A0F] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-6" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Thiết Kế Riêng Cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#7C3AED]">Ngành Của Bạn</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#8B8A96] text-lg font-medium">
              Dù bạn đang quản lý mô hình nào, Hub AI của Vibework sẽ lập tức thích ứng và cung cấp bộ giải pháp chuyên biệt nhất.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 w-full">
            {/* Tabs Menu */}
            <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scroll">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal text-left font-medium ${
                    activeTab === industry.id 
                      ? "bg-white/10 text-[#F1F0ED] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                      : "bg-transparent text-[#8B8A96] hover:bg-white/5 hover:text-[#F1F0ED] border border-transparent"
                  }`}
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-[15px]">{industry.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3 bg-[#12121A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
               {/* Decorative blob */}
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[90px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl border border-white/10 shrink-0 shadow-inner">
                      {activeData.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#F1F0ED] mb-2" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        Ngành {activeData.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#0D9488] rounded-full text-xs font-bold uppercase tracking-wider">
                        {activeData.stats}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-[#8B8A96] leading-relaxed mb-10">
                    {activeData.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                     <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <h4 className="text-[#F1F0ED] font-semibold mb-3 text-sm">AI Agent Đề Xuất</h4>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                           <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                           <span className="text-sm font-medium text-[#c5c4d0]">Nhân viên ảo {activeData.name}</span>
                        </div>
                     </div>
                     <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                        <h4 className="text-[#F1F0ED] font-semibold mb-3 text-sm">Quy trình tự động</h4>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                           <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                           <span className="text-sm font-medium text-[#c5c4d0]">Phân tích dữ liệu & Tối ưu</span>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0A0A0F] font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
                    Tích hợp cho doanh nghiệp của bạn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
