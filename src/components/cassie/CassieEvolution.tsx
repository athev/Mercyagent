"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Check, 
  UserX, 
  Zap, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  Smile,
  Bot
} from "lucide-react";

export default function CassieEvolution() {
  const [isMercyWay, setIsMercyWay] = useState(false);

  return (
    <section className={`relative py-32 transition-colors duration-700 overflow-hidden ${isMercyWay ? 'bg-white' : 'bg-[#030712]'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          {!isMercyWay ? (
            <motion.div 
              key="old-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)]"
            />
          ) : (
            <motion.div 
              key="mercy-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            layout
            className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight transition-colors duration-500 ${isMercyWay ? 'text-slate-900' : 'text-white'}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sự Tiến Hóa
          </motion.h2>
          <motion.p 
            layout
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${isMercyWay ? 'text-slate-600' : 'text-gray-400'}`}
          >
            "Đừng bắt con người làm việc như robot. Hãy để AI làm việc đó, để con người được làm những việc giá trị hơn."
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-20">
          <div 
            onClick={() => setIsMercyWay(!isMercyWay)}
            className={`relative w-64 h-14 rounded-full p-1 cursor-pointer transition-all duration-500 border-2 ${isMercyWay ? 'bg-cyan-50 border-cyan-200' : 'bg-white/5 border-white/10'}`}
          >
            <motion.div 
              animate={{ x: isMercyWay ? 128 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-32 h-full rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${isMercyWay ? 'bg-cyan-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {isMercyWay ? 'MERCY WAY' : 'OLD WAY'}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
              <span className={`text-xs font-bold transition-colors ${!isMercyWay ? 'opacity-0' : 'text-slate-400'}`}>OLD WAY</span>
              <span className={`text-xs font-bold transition-colors ${isMercyWay ? 'opacity-0' : 'text-white/40'}`}>MERCY WAY</span>
            </div>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Visual Side */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isMercyWay ? (
                <motion.div 
                  key="old-visual"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                  className="relative w-full max-w-md aspect-square bg-red-500/5 rounded-3xl border border-red-500/20 p-8 flex flex-col items-center justify-center gap-8"
                >
                  <div className="relative">
                    <UserX className="w-32 h-32 text-red-500/40 animate-pulse" />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-4 -right-4"
                    >
                      <X className="w-12 h-12 text-red-500" />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 bg-red-500/10 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1/2 h-full bg-red-500/30"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-red-500/60 font-mono text-sm uppercase tracking-widest">System Overloaded</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="mercy-visual"
                  initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  className="relative w-full max-w-md aspect-square bg-cyan-500/5 rounded-3xl border border-cyan-500/20 p-8 flex flex-col items-center justify-center gap-8"
                >
                  <div className="relative">
                    <div className="w-48 h-48 relative">
                      <img src="/agents/cassie.png" alt="Cassie" className="w-full h-full object-contain" />
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 bg-green-500 rounded-full p-2 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 60, 45, 90, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="w-8 bg-cyan-500 rounded-t-lg shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-600 font-bold">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-2xl">+240% Profit</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {!isMercyWay ? (
                <motion.div 
                  key="old-text"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest">
                    <AlertCircle className="w-4 h-4" />
                    Traditional Process
                  </div>
                  <h3 className="text-3xl font-bold text-white">Vòng xoáy hỗn loạn</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <X className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Nhân sự quá tải</p>
                        <p className="text-gray-500 text-sm">Nhân viên mệt mỏi vì phải trả lời những câu hỏi lặp đi lặp lại.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <X className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Bỏ lỡ khách hàng</p>
                        <p className="text-gray-500 text-sm">Khách hàng rời đi vì không được phản hồi ngay lập tức (sau 5 phút).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <X className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Chi phí vận hành cao</p>
                        <p className="text-gray-500 text-sm">Phải thuê thêm nhiều nhân sự trực đêm và cuối tuần.</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div 
                  key="mercy-text"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-widest">
                    <Zap className="w-4 h-4" />
                    AI-Powered Future
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Kỷ nguyên tự động hóa</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium">Tự động hóa 90%</p>
                        <p className="text-slate-500 text-sm">Cassie xử lý hầu hết các yêu cầu, nhân sự chỉ tập trung vào việc chốt deal.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium">Phản hồi 24/7 tức thì</p>
                        <p className="text-slate-500 text-sm">Không bao giờ bỏ lỡ khách hàng, dù là 2 giờ sáng hay ngày lễ.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium">Tối ưu hóa lợi nhuận</p>
                        <p className="text-slate-500 text-sm">Giảm 70% chi phí vận hành trong khi tăng gấp đôi hiệu suất bán hàng.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <button className="px-8 py-4 bg-cyan-500 text-white rounded-2xl font-bold shadow-xl shadow-cyan-500/20 hover:bg-cyan-600 transition-all flex items-center gap-3">
                      <Bot className="w-5 h-5" />
                      Bắt đầu sự tiến hóa ngay
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
