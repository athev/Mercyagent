"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export type PackageType = "STANDARD" | "PREMIUM" | null;

interface BookCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PackageType;
}

export default function BookCheckoutModal({ isOpen, onClose, selectedPackage }: BookCheckoutModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const price = selectedPackage === "PREMIUM" ? 199000 : 149000;
  
  // Reset trạng thái khi đóng/mở form
  useEffect(() => {
    if (isOpen) setIsSuccess(false);
  }, [isOpen]);

  if (!isOpen && !isSuccess) return null; // Don't render anything if completely closed

  const handleConfirm = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng để chúng tôi có thể gửi sách cho bạn.");
      return;
    }
    
    // Simulate order processing / API call
    console.log("Xử lý đơn hàng:", { ...formData, package: selectedPackage, price });
    setIsSuccess(true);
  };

  // URL tạo QR động (sử dụng VietQR - Bạn cần thay đổi Ngân Hàng, STK và Tên TK thực tế)
  const bankId = "MB"; // Mã ngân hàng (vd: MB, VCB, TCB)
  const accountNo = "0123456789"; // Số tài khoản thật
  const accountName = "VIBEWORK"; // Tên tài khoản
  const qrContent = "sucmanhcuasuvocam";
  
  const qrUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${price}&addInfo=${qrContent}&accountName=${accountName}`;

  return (
    <div className={`fixed inset-0 z-[120] flex items-end sm:items-center justify-center pointer-events-none transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className={`w-full sm:max-w-4xl bg-white max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col relative transition-transform duration-500 ease-out sm:rounded-3xl rounded-t-3xl shadow-2xl p-6 sm:p-8 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-full sm:translate-y-12 sm:scale-95'}`}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!isSuccess ? (
          <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-12 mt-4 lg:mt-0">
            
            {/* Cột trái: Form thông tin giao hàng */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-800 mb-4">
                  Gói đã chọn: {selectedPackage === "PREMIUM" ? "PREMIUM (199K)" : "STANDARD (149K)"}
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">Hoàn tất đặt sách</h2>
                <p className="text-gray-500 mt-2 font-medium">Điền thông tin và thanh toán để nhận sách về tận nhà.</p>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Họ và Tên</label>
                  <input 
                    type="text" 
                    placeholder="VD: Nguyễn Văn A"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Số điện thoại liên hệ</label>
                  <input 
                    type="tel" 
                    placeholder="VD: 0987654321"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Địa chỉ nhận sách chi tiết</label>
                  <textarea 
                    placeholder="Số nhà, Tên đường, Quận/Huyện, Tỉnh/Thành phố..."
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Cột phải: Thông tin thanh toán (QR Code) */}
            <div className="w-full lg:w-1/2 bg-[#F9F8F6] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center border border-gray-200/60 shadow-sm relative overflow-hidden">
               {/* Decorative Gradient */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>

               <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Quét mã QR để tự động thanh toán</h3>
               
               <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 mb-6 w-full max-w-[280px] relative shrink-0">
                 <div className="aspect-[3/4] relative w-full h-auto min-h-[300px]">
                    <Image src={qrUrl} alt="QR Code Thanh Toán" fill className="object-contain" unoptimized />
                 </div>
               </div>

               <div className="w-full bg-white rounded-xl p-4 border border-gray-100 text-center mb-6 shadow-sm">
                 <p className="text-gray-500 text-sm mb-1">Tổng thanh toán</p>
                 <p className="text-3xl font-black text-blue-600">{new Intl.NumberFormat('vi-VN').format(price)}đ</p>
                 <div className="mt-4 pt-4 border-t border-gray-100 border-dashed flex flex-col gap-2 relative">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Nội dung CK:</span>
                      <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-md tracking-wider">{qrContent}</span>
                    </div>
                 </div>
               </div>

               <button 
                 onClick={handleConfirm}
                 className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 duration-200 text-lg flex justify-center items-center gap-2"
               >
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 Xác nhận tôi đã thanh toán
               </button>
               <p className="text-xs text-gray-400 text-center mt-4">Sau khi đối soát hệ thống sẽ gửi Mật khẩu Kho Quà Tặng qua SĐT Zalo của bạn.</p>
            </div>

          </div>
        ) : (
          /* Success State */
          <div className="flex flex-col items-center justify-center w-full py-12 px-6 animate-[fadeIn_0.5s_ease-out]">
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-sm">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Giao dịch đang được xử lý!</h2>
            <p className="text-gray-600 font-medium text-center max-w-md leading-relaxed mb-8">
              Chúng tôi đã ghi nhận yêu cầu đặt sách. Bộ phận CSKH sẽ kiểm tra giao dịch <b>{qrContent}</b> và liên hệ hỗ trợ bạn qua SĐT <b>{formData.phone}</b> trong vòng 15 phút.
            </p>
            <button 
              onClick={onClose}
              className="bg-black text-white font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Quay lại trang chủ
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
