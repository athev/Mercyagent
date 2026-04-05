"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HPFooterNew from "@/components/homepage/HPFooterNew";
import Link from "next/link";
import BookFlipSample from "@/components/book/BookFlipSample";
import BookCheckoutModal, { PackageType } from "@/components/book/BookCheckoutModal";

export default function BookPreorderPageFramer() {
  const [showUSBModal, setShowUSBModal] = useState(false);
  const [showScrollCTA, setShowScrollCTA] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(null);
  
  const handleOpenCheckout = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    setShowCheckoutModal(true);
  };

  // Handle scroll for floating CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#F2F0E9] text-gray-900 overflow-x-hidden min-h-screen relative font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
        body { background: #F2F0E9; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
        /* Subtle texture for the complete framer aesthetic */
        .texture-bg {
          background-image: repeating-linear-gradient(90deg, rgba(0,0,0,0.015) 0px, transparent 1px, transparent 100px);
        }
      `}</style>

      {/* Floating CTA (Bottom Right) */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${showScrollCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button onClick={() => handleOpenCheckout("PREMIUM")} className="flex items-center gap-2.5 bg-black text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform hover:bg-gray-900 border border-gray-800">
          Nhận Sách & Quà
          <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </span>
        </button>
      </div>

      <div className="texture-bg absolute inset-0 pointer-events-none"></div>

      {/* Pill Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="bg-white/95 backdrop-blur-md rounded-full border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-3 py-2 flex items-center gap-6 pointer-events-auto">
          <Link href="/" className="flex items-center gap-2 pl-2">
            <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-base text-black pr-4 border-r border-gray-100">Vibework</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#problem" className="hover:text-black transition-colors">Vấn đề</a>
            <a href="#read-sample" className="hover:text-black transition-colors">Đọc thử</a>
            <a href="#pricing" className="hover:text-black transition-colors">Combo Đặc Quyền</a>
          </div>

          <button onClick={() => handleOpenCheckout("PREMIUM")} className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
            Nhận sách
            <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center ml-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 relative z-10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
            
            {/* Hero Left Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start lg:items-start pr-0 lg:pr-10 text-left lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold mb-6 shadow-sm">
                Series Sách: Tinh Gọn Doanh Nghiệp Bằng AI
              </div>
              
              <h1 className="text-[2.25rem] md:text-5xl lg:text-[60px] font-black text-[#111] leading-[1.1] tracking-tight mb-8">
                Bí mật thay thế<br />
                bộ máy nhân sự ì ạch bằng<br />
                hệ thống <span className="text-blue-600">Multi-Agent AI</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium max-w-lg leading-relaxed">
                Cuốn sách <b>Sức Mạnh Của Sự Vô Cảm</b> hướng dẫn Setup hệ thống Agent-to-Agent giải phóng Founder hoàn toàn bằng luật chơi thông minh và dữ liệu tự động.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button onClick={() => handleOpenCheckout("PREMIUM")} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 hover:scale-[1.02] transition-all whitespace-nowrap shadow-xl">
                  Nhận Sách & Đặc Quyền
                  <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </span>
                </button>
                <a href="#read-sample" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold border border-gray-300 hover:bg-gray-200 transition-colors bg-white/50 backdrop-blur">
                  Đọc thử trang đầu
                </a>
              </div>
            </div>

            {/* Hero Right Mockup */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-8 lg:mt-0 mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full z-0 translate-x-10 translate-y-10"></div>
              
              <div className="relative z-10 sm:max-w-md w-full max-w-[280px]" style={{ transform: "perspective(1000px) rotateY(-8deg) rotateZ(2deg)" }}>
                <Image 
                  src="/images/book-cover.jpg" 
                  alt="Sức Mạnh Của Sự Vô Cảm" 
                  width={460} 
                  height={690} 
                  className="rounded-r-xl rounded-l shadow-2xl border-l-[6px] border-black object-contain w-full"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Problem Section (Storytelling Format) */}
      <section id="problem" className="py-24 relative z-10 bg-[#FFFCF6] border-t border-gray-200 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-[760px] mx-auto px-6 font-['Merriweather'] tracking-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-sans font-bold text-sm tracking-wide mb-6 uppercase">Thừa nhận đi sếp...</span>
            <h2 className="text-3xl md:text-5xl font-black font-sans text-gray-900 mb-6 leading-snug">
              Mô hình "chạy bằng cơm"<br />đang phá hủy sức khỏe của bạn.
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-lg md:text-xl text-gray-800 leading-[2.1] space-y-8">
            <p>
              Đây là sự thật tàn nhẫn và phổ biến nhất: Đồng hồ chỉ 8 giờ tối. Mọi người đã về rục rịch, nhưng bạn vẫn đang cặm cụi duyệt báo giá cuối cùng để xuất hóa đơn.
            </p>
            <p>
              Ngày qua ngày, nghịch lý lớn nhất xuất hiện trong công ty bạn: <strong>Tuyển càng nhiều người, tốc độ ra đòn càng chậm lại.</strong> Quy mô nhân sự phình to nhưng thời gian giải quyết một vấn đề từ các phòng ban kéo dài đến nghẹt thở vì lý do kinh điển: đùn đẩy trách nhiệm.
            </p>
            <p>
              Bạn thuê một chuyên gia quy trình về xây dựng <em>SOP Rác 50 trang</em>. Nó nằm im lìm trong góc ổ đĩa máy chủ không ai buồn ngó tới. Bảng KPI bạn tâm huyết thiết lập lập tức biến thành một dạng trò chơi đối phó, nơi nhân viên tìm cách lách luật để không chịu phạt thay vì nâng cao năng suất.
            </p>
            <p className="p-8 border-l-4 border-gray-900 bg-white shadow-sm mt-8 mb-8 text-black font-bold italic rounded-r-xl text-xl leading-relaxed font-sans">
              "Lương cứng khiến cho hệ thống ù lì. Còn cảm xúc, sự nể nang châm phước chính là lỗ hổng ăn mòn lợi nhuận nhanh nhất."
            </p>
            <p>
              Đó là lúc bạn cần gỡ phích cắm hệ thống cũ. Cuốn sách này không nói về tư duy suông. Nó dẫn dắt bạn thiết lập một <strong>Vị Thẩm Phán Máy</strong> (AI) hoạt động lạnh lùng mà hiệu quả. Một cơ chế Smart Contract để AI chia thẳng hoa hồng về màn hình mỗi cá nhân khi đơn hàng thành công (Ting Ting tự động) thay cho bộ phận Kế toán chậm chạp.
            </p>
            <p>
              Và quan trọng nhất, một hệ sinh thái <span className="font-sans font-bold text-blue-600">Multi-Agent (Agent-to-Agent)</span> tự động giao tiếp, tự động phê duyệt với ranh giới của sự vô cảm – loại bỏ hoàn toàn các 'nỗi đau 8 giờ tối' ra khỏi cuộc sống của một người làm chủ.
            </p>
          </div>
        </div>
      </section>

      {/* Book Flip Sample Section */}
      <BookFlipSample />

      {/* Pricing / Gift Package Section */}
      <section id="pricing" className="py-24 bg-[#FAF9F5] text-gray-900 relative z-10 border-t border-gray-200">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-sans uppercase tracking-tighter mb-4">Bạn sẽ nhận được gì?</h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">Tùy vào nhu cầu áp dụng thực tiễn, hãy lựa chọn gói Pre-order phù hợp với doanh nghiệp của bạn.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
            
            {/* VÉ STANDARD */}
            <div className="bg-white border-[1px] border-gray-200 rounded-[2rem] p-8 lg:p-10 shadow-xl flex flex-col justify-between hover:border-gray-400 transition-colors h-full">
              <div>
                <h3 className="text-2xl font-black mb-2">Gói STANDARD</h3>
                <div className="flex items-baseline gap-2 mb-6 text-gray-500">
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">149.000đ</span>
                  <span className="text-lg line-through">199.000đ</span>
                </div>
                <p className="text-gray-500 mb-8 font-medium">Gói cơ bản, chỉ bao gồm cuốn sách cứng để bắt đầu đổi mới tư duy vận hành hệ thống.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="font-semibold text-lg">Sách Giấy: Sức Mạnh Sự Vô Cảm</span>
                  </li>
                  <li className="flex items-start gap-4 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg></div>
                    <div className="flex flex-col items-start text-left">
                      <span className="font-medium text-lg text-gray-500">1 Buổi AI Consultant Miễn Phí (60p)</span>
                      <span className="text-sm text-gray-400 mt-0.5 leading-relaxed">Tư vấn tối ưu tinh gọn quy trình doanh nghiệp và triển khai Agent-to-agent Workflow qua Clawbot</span>
                      <Link href="/ai-consultant" className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md mt-1 hover:bg-gray-200 transition-colors inline-block w-fit">
                        Xem chi tiết chương trình
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg></div>
                    <span className="font-medium text-lg text-gray-500">Cộng đồng Quản trị tinh gọn</span>
                  </li>
                  <li className="flex items-start gap-4 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg></div>
                    <span className="font-medium text-lg text-gray-500">1 USB 1000+ tài liệu quản trị làm Knowledge Base cho Nhân viên AI kế thừa sử dụng</span>
                  </li>
                </ul>
              </div>
              
              <button onClick={() => handleOpenCheckout("STANDARD")} className="w-full bg-gray-100 text-gray-900 text-lg font-bold py-5 rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 mt-4">
                Mua Gói Standard
              </button>
            </div>

            {/* VÉ PREMIUM */}
            <div className="bg-[#EBE5FB] border-2 border-purple-300 rounded-[2rem] p-8 lg:p-10 shadow-2xl flex flex-col justify-between relative h-full transform lg:-translate-y-4">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="bg-purple-600 text-white text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">Phổ Biến Nhất</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-black mb-2 text-purple-900">Gói PREMIUM</h3>
                <div className="flex items-baseline gap-2 mb-6 text-purple-900">
                  <span className="text-5xl font-black tracking-tighter">199.000đ</span>
                  <span className="text-lg line-through opacity-60 font-semibold">350.000đ</span>
                </div>
                <p className="text-purple-800/80 mb-8 font-medium">Nhận trọn bộ Sách và toàn quyền truy cập bộ 3 quà tặng setup thực chiến độc quyền.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="font-bold text-lg text-purple-950">Sách Giấy: Sức Mạnh Sự Vô Cảm</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    <div className="flex flex-col items-start text-left">
                      <span className="font-bold text-lg text-purple-950">1 Buổi AI Consultant Miễn Phí (60p)</span>
                      <span className="text-sm font-medium text-purple-800/80 mt-0.5 leading-relaxed">Tư vấn tối ưu tinh gọn quy trình doanh nghiệp và triển khai Agent-to-agent Workflow qua Clawbot</span>
                      <Link href="/ai-consultant" className="text-sm font-bold text-purple-700 bg-white/50 px-3 py-1 rounded-md mt-1 hover:bg-white transition-colors inline-block w-fit">
                        Xem chi tiết chương trình
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="font-bold text-lg text-purple-950">Cộng đồng Quản trị tinh gọn</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    <div className="flex flex-col items-start text-left">
                      <span className="font-bold text-lg text-purple-950">1 USB 1000+ tài liệu quản trị doanh nghiệp làm Knowledge Base cho Nhân viên AI kế thừa sử dụng</span>
                      <button onClick={() => setShowUSBModal(true)} className="text-sm font-bold text-purple-700 bg-white/50 px-3 py-1 rounded-md mt-1 hover:bg-white transition-colors">Xem 1000+ Biểu mẫu</button>
                    </div>
                  </li>
                </ul>
              </div>
              
              <button onClick={() => handleOpenCheckout("PREMIUM")} className="w-full bg-black text-white text-lg font-bold py-5 rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 mt-4 shadow-xl">
                Pre-order PREMIUM ngay
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

          </div>
          
          {/* Detailed Feature Table for Desktop */}
          <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hidden md:block">
             <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-gray-500 font-bold uppercase tracking-wider text-sm pl-4">
                <div className="col-span-8">Quyền Lợi & Cấu Trúc Gói</div>
                <div className="col-span-2 text-center text-gray-900">STANDARD</div>
                <div className="col-span-2 text-center text-purple-700">PREMIUM</div>
             </div>
             <div className="space-y-2 mt-4 text-black font-semibold">
                <div className="grid grid-cols-12 gap-4 py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                   <div className="col-span-8">Sách cứng chất lượng cao, giao tận nhà miễn phí</div>
                   <div className="col-span-2 text-center flex justify-center"><svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                   <div className="col-span-2 text-center flex justify-center"><svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                </div>
                <div className="grid grid-cols-12 gap-4 py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                   <div className="col-span-8">
                     1 Buổi 1-on-1 AI Consultant trực tiếp cùng VP Vibework
                     <div className="text-sm text-gray-500 font-normal mt-1 leading-relaxed">
                       Tư vấn tối ưu tinh gọn quy trình doanh nghiệp và triển khai Agent-to-agent Workflow qua Clawbot
                       <Link href="/ai-consultant" className="text-purple-600 hover:underline ml-2 font-bold inline-block">
                         (Xem chi tiết chương trình)
                       </Link>
                     </div>
                   </div>
                   <div className="col-span-2 text-center flex justify-center text-gray-300">—</div>
                   <div className="col-span-2 text-center flex justify-center"><svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                </div>
                <div className="grid grid-cols-12 gap-4 py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                   <div className="col-span-8">1 USB 1000+ tài liệu quản trị doanh nghiệp làm Knowledge Base cho Nhân viên AI kế thừa sử dụng (bao gồm các Biểu mẫu Lập Kế hoạch Dòng Tiền, BSC KPI, Nhân Sự,...)</div>
                   <div className="col-span-2 text-center flex justify-center text-gray-300">—</div>
                   <div className="col-span-2 text-center flex justify-center"><svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                </div>
                <div className="grid grid-cols-12 gap-4 py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                   <div className="col-span-8">Vé vào Hội nhóm kín Quản Trị Tinh Gọn (Networking & Case Studies)</div>
                   <div className="col-span-2 text-center flex justify-center text-gray-300">—</div>
                   <div className="col-span-2 text-center flex justify-center"><svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* USB Modal Popup */}
      {showUSBModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6" style={{ animation: 'fadeIn 0.2s ease-out' }}>
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => setShowUSBModal(false)}></div>
          <div className="relative bg-[#FAF9F5] border border-gray-200 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" style={{ animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            
            <div className="p-6 md:p-8 flex items-center justify-between bg-white border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center text-2xl shadow-md">💾</div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Chi tiết Bộ Knowledge mẫu cho AI</h3>
              </div>
              <button onClick={() => setShowUSBModal(false)} className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
              <div className="prose prose-blue max-w-none text-gray-700">
                <p className="font-bold text-xl text-gray-900 mb-8 leading-snug">
                  1 USB 1000+ tài liệu quản trị doanh nghiệp làm Knowledge Base cho Nhân viên AI kế thừa sử dụng (bao gồm các Biểu mẫu Lập Kế hoạch Dòng Tiền, BSC KPI, Nhân Sự,...)
                </p>
                
                <h4 className="font-black text-gray-900 mt-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-200 text-gray-900 flex items-center justify-center text-sm">01</span> Lập kế hoạch kinh doanh
                </h4>
                <ul className="pl-11 mt-3 space-y-2 font-medium">
                  <li>Form lập kế hoạch ngắn hạn & dài hạn.</li>
                  <li>Bảng kế hoạch dòng tiền (Cashflow).</li>
                  <li>Mô hình điểm hòa vốn, phân tích rủi ro.</li>
                </ul>

                <h4 className="font-black text-gray-900 mt-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-200 text-gray-900 flex items-center justify-center text-sm">02</span> Tổ chức phòng ban & KPI
                </h4>
                <ul className="pl-11 mt-3 space-y-2 font-medium">
                  <li>Sơ đồ tổ chức (Org Chart) & JD mẫu.</li>
                  <li>Khung năng lực lõi các phòng ban.</li>
                  <li>Hệ thống BSC - KPI đánh giá thực tế.</li>
                </ul>

                <h4 className="font-black text-gray-900 mt-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-200 text-gray-900 flex items-center justify-center text-sm">03</span> Báo cáo nội bộ
                </h4>
                <ul className="pl-11 mt-3 space-y-2 font-medium">
                  <li>File theo dõi Doanh thu, Chi phí, Công nợ tự động.</li>
                  <li>Quản lý Quỹ lương theo hiệu suất.</li>
                  <li>File quản lý Data Khách hàng CRM tinh gọn.</li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-white border-t border-gray-100 flex justify-end">
              <button onClick={() => setShowUSBModal(false)} className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:scale-[1.02] transition-transform">
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .prose ul li::marker { color: #aaa; }
      `}</style>

      {/* Checkout Modal */}
      <BookCheckoutModal 
        isOpen={showCheckoutModal} 
        onClose={() => setShowCheckoutModal(false)}
        selectedPackage={selectedPackage}
      />

      <div className="bg-white">
        <HPFooterNew />
      </div>
    </main>
  );
}
