"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Sparkles, Calculator, AlertCircle, TrendingUp } from "lucide-react";

export default function CassieProblem() {
  const [mounted, setMounted] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [messagesPerDay, setMessagesPerDay] = useState<number>(200);
  const [slowReplyRate, setSlowReplyRate] = useState<number>(30);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lostCustomersMin = Math.floor(messagesPerDay * (slowReplyRate / 100) * 0.2);
  const lostCustomersMax = Math.ceil(messagesPerDay * (slowReplyRate / 100) * 0.5);

  const toggleScenario = (id: string) => {
    if (activeScenario === id) {
      setActiveScenario(null);
    } else {
      setActiveScenario(id);
    }
  };

  const scenarios = [
    {
      id: "new",
      title: "Doanh nghiệp mới",
      icon: <AlertCircle className="w-6 h-6 text-orange-400" />,
      color: "orange",
      layer1: "Không đủ tiền thuê nhân sự full-time.",
      layer2: ["Nhân sự kiêm việc", "Trả lời chậm", "Khách chờ", "Khách rời đi"],
      layer3: ["CASSIE trực 24/24.", "CASSIE chỉ xuất hiện khi có khách."]
    },
    {
      id: "overloaded",
      title: "Doanh nghiệp quá tải",
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      color: "purple",
      layer1: "Không tuyển kịp người.",
      layer2: ["Nhân sự quá tải", "Đòi tăng lương", "Khó chịu với khách", "Trải nghiệm giảm"],
      layer3: ["CASSIE không mệt.", "CASSIE không đòi hỏi.", "CASSIE không khó chịu."]
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#030712] min-h-screen flex flex-col items-center justify-center">
      {/* Background glow & particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full" />
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Hiện tại Sếp đang ở tình huống nào?
          </h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            Chọn đúng tình huống. Cassie sẽ cho Sếp thấy điều gì đang xảy ra.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {scenarios.map((scenario) => {
            const isActive = activeScenario === scenario.id;
            
            return (
              <motion.div 
                key={scenario.id}
                className={`relative w-full rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${isActive ? 'bg-white/[0.05] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-xl' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 backdrop-blur-md'}`}
                onClick={() => toggleScenario(scenario.id)}
                layout
              >
                {/* Header */}
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${scenario.color === 'orange' ? 'bg-orange-500/10 border-orange-500/20' : 'bg-purple-500/10 border-purple-500/20'}`}>
                      {scenario.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{scenario.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-6 h-6 text-blue-200/50" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                        
                        {/* Layer 1: Thực tế */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-8"
                        >
                          <p className="text-blue-200/60 text-sm uppercase tracking-wider font-semibold mb-2">Thực tế</p>
                          <p className="text-xl text-white font-medium">{scenario.layer1}</p>
                        </motion.div>

                        {/* Layer 2: Hệ quả */}
                        <div className="mb-10">
                          <p className="text-blue-200/60 text-sm uppercase tracking-wider font-semibold mb-4">Hệ quả</p>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4">
                            {scenario.layer2.map((step, idx) => (
                              <div key={idx} className="flex items-center gap-2 md:gap-4">
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + idx * 0.15 }}
                                  className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm md:text-base"
                                >
                                  {step}
                                </motion.div>
                                {idx < scenario.layer2.length - 1 && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.15 }}
                                  >
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-red-400/50" />
                                  </motion.div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Layer 3: Cassie xuất hiện */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                          className="relative rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/10 border border-blue-400/30 p-6 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-blue-500/5 blur-xl" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="mt-1">
                              <Sparkles className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="space-y-2">
                              {scenario.layer3.map((line, idx) => (
                                <motion.p 
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.4 + idx * 0.2 }}
                                  className="text-lg md:text-xl text-blue-50 font-medium tracking-wide"
                                  style={{ fontFamily: "var(--font-display)" }}
                                >
                                  {line}
                                </motion.p>
                              ))}
                            </div>
                          </div>
                        </motion.div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Calculator Section */}
        <AnimatePresence>
          {activeScenario && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="mt-12 overflow-hidden"
            >
              <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 backdrop-blur-md relative">
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Calculator className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Ước tính mỗi ngày Sếp mất bao nhiêu khách vì trả lời chậm?
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-blue-200/70">Số tin nhắn/ngày</label>
                      <div className="text-white font-mono bg-white/5 px-3 py-1 rounded-md">{messagesPerDay}</div>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      step="10"
                      value={messagesPerDay} 
                      onChange={(e) => setMessagesPerDay(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-blue-200/70">Tỷ lệ trả lời chậm</label>
                      <div className="text-white font-mono bg-white/5 px-3 py-1 rounded-md">{slowReplyRate}%</div>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={slowReplyRate} 
                      onChange={(e) => setSlowReplyRate(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-red-500/5 border border-red-500/20 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />
                  <p className="text-red-200/80 mb-2 relative z-10">Ước tính:</p>
                  <motion.p 
                    key={`${lostCustomersMin}-${lostCustomersMax}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-red-400 relative z-10"
                  >
                    {lostCustomersMin} – {lostCustomersMax} khách rời đi mỗi ngày
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-3 text-blue-300 bg-blue-500/10 py-3 px-6 rounded-full w-fit mx-auto border border-blue-500/20"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="text-lg font-medium">CASSIE có thể ngăn điều này.</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
