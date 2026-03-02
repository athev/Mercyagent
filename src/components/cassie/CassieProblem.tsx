"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Calculator, AlertCircle, TrendingUp, UserPlus, Clock, Ban, HeartOff, DollarSign, Zap } from "lucide-react";

export default function CassieProblem() {
  const [mounted, setMounted] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>("new");
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
      title: "DOANH NGHIỆP MỚI",
      subtitle: "Khởi nghiệp & Shop nhỏ",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "#F59E0B", // Amber/Gold
      layer1: "Không đủ ngân sách thuê nhân sự trực chat 24/7.",
      layer2: [
        { icon: <UserPlus className="w-4 h-4" />, text: "Nhân sự kiêm nhiệm" },
        { icon: <Clock className="w-4 h-4" />, text: "Phản hồi chậm trễ" },
        { icon: <Ban className="w-4 h-4" />, text: "Khách hàng rời đi" }
      ],
      layer3: ["CASSIE trực 24/24.", "Chi phí chỉ bằng 1/10 nhân sự."]
    },
    {
      id: "overloaded",
      title: "DOANH NGHIỆP QUÁ TẢI",
      subtitle: "Đang tăng trưởng nóng",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "#06B6D4", // Cyan
      layer1: "Lượng tin nhắn bùng nổ, không tuyển kịp người.",
      layer2: [
        { icon: <HeartOff className="w-4 h-4" />, text: "Nhân sự stress/nghỉ việc" },
        { icon: <DollarSign className="w-4 h-4" />, text: "Chi phí vận hành tăng vọt" },
        { icon: <Zap className="w-4 h-4" />, text: "Trải nghiệm khách hàng tệ" }
      ],
      layer3: ["CASSIE không mệt mỏi.", "Xử lý hàng ngàn chat cùng lúc."]
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030712]">
      
      {/* Dark Split Background Style from Strategic Layer */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        <div className="w-1/2 h-full bg-[#050505]"></div>
        <div className="w-1/2 h-full bg-[#080C16]"></div>
        
        {/* Subtle glowing separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Tình huống thực tế
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            HIỆN TẠI SẾP ĐANG Ở <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TÌNH HUỐNG NÀO?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Rà soát lại quy trình của Sếp. Cassie sẽ cho Sếp thấy thực tế đang diễn ra đằng sau những con số.
          </motion.p>
        </div>

        {/* Character-style Cards (2-Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              onMouseEnter={() => setActiveScenario(scenario.id)}
              onClick={() => setActiveScenario(scenario.id)}
              className="group relative rounded-2xl overflow-hidden cursor-default"
            >
              {/* Hover Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                style={{ background: `linear-gradient(to bottom, transparent, ${scenario.color}10, ${scenario.color}20)` }}
              ></div>
              
              {/* Neon Border */}
              <div 
                className="absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-500 z-20 pointer-events-none"
                style={{ borderColor: activeScenario === scenario.id ? `${scenario.color}50` : undefined }}
              ></div>
              
              {/* Card Content Container */}
              <div className="relative z-10 bg-[#0B0F19]/60 backdrop-blur-xl h-full flex flex-col md:flex-row overflow-hidden">
                
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-[250px] md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B0F19]/90 via-transparent to-transparent z-10"></div>
                  <img 
                    src={scenario.image} 
                    alt={scenario.title} 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scanline effect */}
                  <div className="absolute inset-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-20"></div>
                </div>

                {/* Info Section */}
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-20">
                  <div className="mb-6">
                    <h3 
                      className="text-3xl font-bold text-white tracking-tighter mb-1 transition-colors duration-300" 
                      style={{ 
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: activeScenario === scenario.id ? scenario.color : 'white'
                      }}
                    >
                      {scenario.title}
                    </h3>
                    <p className="text-xs font-mono tracking-widest uppercase text-gray-500">
                      {scenario.subtitle}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-base text-gray-300 font-light italic leading-relaxed border-l-2 pl-4" style={{ borderColor: `${scenario.color}80` }}>
                      "{scenario.layer1}"
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">Hệ quả tất yếu</p>
                    <ul className="space-y-3">
                      {scenario.layer2.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <div 
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300"
                            style={{ 
                              color: activeScenario === scenario.id ? scenario.color : 'gray',
                              borderColor: activeScenario === scenario.id ? `${scenario.color}30` : undefined,
                              backgroundColor: activeScenario === scenario.id ? `${scenario.color}10` : undefined
                            }}
                          >
                            {item.icon}
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cassie Solution Tag */}
                  <motion.div
                    animate={activeScenario === scenario.id ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -5 }}
                    className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Giải pháp từ Cassie</span>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
