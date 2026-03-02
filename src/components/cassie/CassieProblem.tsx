"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Calculator, AlertCircle, TrendingUp } from "lucide-react";

export default function CassieProblem() {
  const [mounted, setMounted] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>("new"); // Default to one for visual balance
  const [messagesPerDay, setMessagesPerDay] = useState<number>(200);
  const [slowReplyRate, setSlowReplyRate] = useState<number>(30);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lostCustomersMin = Math.floor(messagesPerDay * (slowReplyRate / 100) * 0.2);
  const lostCustomersMax = Math.ceil(messagesPerDay * (slowReplyRate / 100) * 0.5);

  const scenarios = [
    {
      id: "new",
      title: "Doanh nghiệp mới",
      subtitle: "Khởi nghiệp & Shop nhỏ",
      icon: <AlertCircle className="w-6 h-6 text-orange-400" />,
      color: "orange",
      layer1: "Không đủ tiền thuê nhân sự full-time.",
      layer2: ["Nhân sự kiêm việc", "Trả lời chậm", "Khách chờ", "Khách rời đi"],
      layer3: ["CASSIE trực 24/24.", "CASSIE chỉ xuất hiện khi có khách."]
    },
    {
      id: "overloaded",
      title: "Doanh nghiệp quá tải",
      subtitle: "Đang tăng trưởng nóng",
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      color: "purple",
      layer1: "Không tuyển kịp người.",
      layer2: ["Nhân sự quá tải", "Đòi tăng lương", "Khó chịu với khách", "Trải nghiệm giảm"],
      layer3: ["CASSIE không mệt.", "CASSIE không đòi hỏi.", "CASSIE không khó chịu."]
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#030712] overflow-hidden">
      {/* Background glow & particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Hiện tại Sếp đang ở <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">tình huống nào?</span>
          </h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            Rà soát lại quy trình của Sếp. Cassie sẽ cho Sếp thấy thực tế đang diễn ra.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {scenarios.map((scenario) => {
            const isActive = activeScenario === scenario.id;
            
            return (
              <motion.div 
                key={scenario.id}
                onMouseEnter={() => setActiveScenario(scenario.id)}
                className={`relative group rounded-[32px] border transition-all duration-700 overflow-hidden min-h-[500px] flex flex-col ${
                  isActive 
                    ? 'bg-white/[0.05] border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]' 
                    : 'bg-white/[0.02] border-white/5 opacity-60 grayscale-[0.5]'
                }`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${
                  scenario.color === 'orange' ? 'from-orange-500/5 to-transparent' : 'from-purple-500/5 to-transparent'
                } ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    } ${scenario.color === 'orange' ? 'bg-orange-500/10 border-orange-500/20' : 'bg-purple-500/10 border-purple-500/20'}`}>
                      {scenario.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{scenario.title}</h3>
                      <p className="text-blue-300/50 text-sm font-medium uppercase tracking-widest">{scenario.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-12 flex-grow">
                    {/* Layer 1: Thực tế */}
                    <div className="transition-all duration-500">
                      <p className="text-blue-200/40 text-xs uppercase tracking-[0.2em] font-bold mb-3">01. Thực tế hiện tại</p>
                      <p className="text-2xl text-white font-light leading-relaxed">{scenario.layer1}</p>
                    </div>

                    {/* Layer 2: Hệ quả */}
                    <div className="transition-all duration-500">
                      <p className="text-red-400/60 text-xs uppercase tracking-[0.2em] font-bold mb-4">02. Hệ quả tất yếu</p>
                      <div className="flex flex-wrap items-center gap-3">
                        {scenario.layer2.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="px-4 py-2 rounded-xl bg-red-500/5 border border-red-500/10 text-red-200/80 text-sm">
                              {step}
                            </div>
                            {idx < scenario.layer2.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-red-500/30" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Layer 3: Cassie Solution */}
                    <motion.div
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 10 }}
                      className={`rounded-2xl p-6 border transition-all duration-500 ${
                        isActive 
                          ? 'bg-blue-500/10 border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <Sparkles className={`w-6 h-6 shrink-0 mt-1 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                        <div className="space-y-3">
                          {scenario.layer3.map((line, idx) => (
                            <p key={idx} className={`text-lg font-medium leading-tight ${isActive ? 'text-white' : 'text-gray-400'}`}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Calculator Section - Always visible but reacts to state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-[40px] bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                  <Calculator className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Tính toán mức độ "thất thoát" khách hàng
                </h3>
                <p className="text-gray-400">Điều chỉnh các thông số để thấy thực tế mỗi ngày Sếp đang mất bao nhiêu.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-blue-200/70 uppercase tracking-widest">Số tin nhắn/ngày</label>
                    <div className="text-2xl font-bold text-white font-mono">{messagesPerDay}</div>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={messagesPerDay} 
                    onChange={(e) => setMessagesPerDay(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-blue-200/70 uppercase tracking-widest">Tỷ lệ trả lời chậm</label>
                    <div className="text-2xl font-bold text-white font-mono">{slowReplyRate}%</div>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={slowReplyRate} 
                    onChange={(e) => setSlowReplyRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>

              <div className="relative p-8 rounded-3xl bg-red-500/5 border border-red-500/20 text-center">
                <p className="text-red-400/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">Kết quả ước tính</p>
                <motion.div 
                  key={`${lostCustomersMin}-${lostCustomersMax}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-6xl font-bold text-red-500 mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {lostCustomersMin} – {lostCustomersMax}
                </motion.div>
                <p className="text-red-200/60 text-lg">khách hàng rời đi mỗi ngày</p>
                
                {/* Animated Warning Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </div>

              <div className="mt-12 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-3 text-blue-400 bg-blue-500/10 py-4 px-8 rounded-full border border-blue-500/20"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="text-lg font-bold">CASSIE sẽ ngăn chặn sự lãng phí này.</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
