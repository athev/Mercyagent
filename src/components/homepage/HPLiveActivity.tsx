"use client";

import { useEffect, useState } from "react";

const FEED_ITEMS = [
  { icon: "✍️", action: "Content Agency vừa tạo xong 45 bài post Facebook", time: "vừa xong", color: "#7C3AED" },
  { icon: "🤖", action: "Nhân viên HR ảo đã lọc xong 200 CV, còn 12 ứng viên tiềm năng", time: "2 phút trước", color: "#0D9488" },
  { icon: "📊", action: "CEO Minh Tuấn vừa nhận báo cáo Q1 tự động", time: "3 phút trước", color: "#3B82F6" },
  { icon: "💬", action: "Chatbot CSKH xử lý 38 tin nhắn Zalo trong 1 giờ qua", time: "5 phút trước", color: "#EC4899" },
  { icon: "🎓", action: "Lê Ngọc Bích vừa hoàn thành khóa Prompt Engineering", time: "6 phút trước", color: "#F59E0B" },
  { icon: "📧", action: "Email tự động gửi đến 1,200 khách hàng đợt Flash Sale", time: "9 phút trước", color: "#10B981" },
  { icon: "🧾", action: "Kế toán AI xuất báo cáo chi phí tháng 3 trong 15 giây", time: "12 phút trước", color: "#7C3AED" },
  { icon: "📹", action: "Video script TikTok 3 tập vừa hoàn thành cho nhãn F&B", time: "15 phút trước", color: "#0D9488" },
  { icon: "🔍", action: "AI phân tích đối thủ và xuất báo cáo 12 trang chi tiết", time: "18 phút trước", color: "#3B82F6" },
  { icon: "📅", action: "Lịch đăng Content tháng 4 (30 ngày) tự động lên kế hoạch", time: "22 phút trước", color: "#F59E0B" },
];

export default function HPLiveActivity() {
  const [items, setItems] = useState(FEED_ITEMS);
  const [count, setCount] = useState(1248);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3 + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Rotate feed items
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItem = { ...prev[prev.length - 1], time: "vừa xong" };
        return [newItem, ...prev.slice(0, -1)];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        .feed-item-enter { animation: fadeInDown 0.4s ease-out forwards; }
      `}</style>

      <section className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Live Activity</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0ED] mb-6 leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Vibework Hub đang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#0D9488]">
                  không bao giờ nghỉ
                </span>
              </h2>

              <p className="text-lg text-[#8B8A96] mb-10 leading-relaxed">
                Ngay lúc này, hàng nghìn doanh nghiệp và cá nhân đang chạy task trên Hub. 
                Mỗi giây trôi qua là thêm hàng trăm công việc được AI hoàn thành.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  { val: count.toLocaleString("en"), label: "Task đang chạy live", color: "#7C3AED", icon: "⚡" },
                  { val: "50K+", label: "Giờ công việc đã thực hiện bằng AI", color: "#0D9488", icon: "🕐" },
                  { val: "2,000+", label: "Workspace đang hoạt động", color: "#F59E0B", icon: "🏢" },
                  { val: "40%", label: "Chi phí nhân sự tiết kiệm trung bình", color: "#3B82F6", icon: "💰" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#12121A] border border-white/5 rounded-2xl p-5">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="text-2xl font-bold mb-1 tabular-nums" style={{ color: s.color, fontFamily: "'Clash Display', sans-serif" }}>{s.val}</div>
                    <div className="text-xs text-[#8B8A96]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Feed Panel */}
            <div className="bg-[#12121A] border border-white/5 rounded-3xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-[#0A0A0F]/60">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-[#8B8A96] font-mono ml-1">hub_activity_feed.live</span>
                <span className="ml-auto flex items-center gap-2 text-xs font-semibold text-[#10B981]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  {count.toLocaleString("en")} active
                </span>
              </div>

              <div className="p-5 space-y-3 max-h-[420px] overflow-hidden">
                {items.slice(0, 7).map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 bg-[#0A0A0F]/60 border border-white/[0.05] rounded-xl ${i === 0 ? "feed-item-enter" : ""}`}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#c5c4d0] leading-snug line-clamp-2">{item.action}</p>
                    </div>
                    <div className="shrink-0 text-xs text-[#8B8A96] whitespace-nowrap pt-0.5">{item.time}</div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-4 border-t border-white/5 text-center text-xs text-[#8B8A96]">
                Feed tự cập nhật mỗi 5 giây
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
