"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  MessageSquareShare, 
  Users, 
  Lightbulb, 
  Magnet, 
  BellRing, 
  Headset,
  Sparkles,
  Bot,
  BrainCircuit,
  Search
} from "lucide-react";

export default function CassieFeatures() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 0,
      title: "Tự động phản hồi",
      description: "Đa nền tảng, trả lời ngay lập tức 24/7.",
      icon: <MessageSquareShare className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png", 
      pos: { left: "15%", top: "25%" },
      flyFrom: { x: -300, y: -200 },
      mockup: (
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl rounded-bl-none text-[10px] text-white self-start border border-white/5">
            Giá bao nhiêu shop?
          </div>
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-cyan-500/20 backdrop-blur-md p-2 rounded-xl rounded-br-none text-[10px] text-cyan-50 self-end border border-cyan-500/20 relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            Dạ sản phẩm này giá...
          </motion.div>
        </div>
      )
    },
    {
      id: 1,
      title: "Phân loại khách",
      description: "Tự động gắn tag khách tiềm năng, hỏi giá.",
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png", // In a real app, use Cassie with a magnifying glass
      pos: { left: "85%", top: "25%" },
      flyFrom: { x: 300, y: -200 },
      mockup: (
        <div className="flex flex-col gap-2 w-full relative">
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl flex items-center gap-2 border border-white/5">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-red-400"
              />
            </div>
            <span className="text-[10px] font-medium text-white">Khách VIP</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl flex items-center gap-2 border border-white/5 ml-4">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
                className="absolute inset-0 rounded-full bg-yellow-400"
              />
            </div>
            <span className="text-[10px] font-medium text-white">Hỏi giá</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Gợi ý trả lời",
      description: "Soạn sẵn kịch bản tinh tế dựa trên ngữ cảnh.",
      icon: <Lightbulb className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png",
      pos: { left: "10%", top: "55%" },
      flyFrom: { x: -400, y: 0 },
      mockup: (
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-full border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px] font-semibold text-cyan-400">Gợi ý</span>
          </div>
          <div className="space-y-1.5">
            <div className="bg-white/5 p-1.5 rounded text-[9px] text-gray-300 border border-white/5">
              Dạ mẫu này đang có sẵn ạ...
            </div>
            <div className="bg-white/5 p-1.5 rounded text-[9px] text-gray-300 border border-white/5">
              Dạ bên em freeship...
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Tạo Lead",
      description: "Thu thập SĐT, Email và đẩy về CRM tự động.",
      icon: <Magnet className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png",
      pos: { left: "90%", top: "55%" },
      flyFrom: { x: 400, y: 0 },
      mockup: (
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-full border border-white/10 relative">
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center border-2 border-[#030712]">
            <Magnet className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-gray-600" />
            <div className="text-[9px] font-medium text-white">Nguyễn Văn A</div>
          </div>
          <div className="h-1 bg-white/10 rounded-full w-full mb-1" />
          <div className="h-1 bg-white/10 rounded-full w-2/3" />
        </div>
      )
    },
    {
      id: 4,
      title: "Nhắc follow-up",
      description: "Không bỏ quên khách. Nhắc lịch chăm sóc lại.",
      icon: <BellRing className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png",
      pos: { left: "20%", top: "85%" },
      flyFrom: { x: -300, y: 200 },
      mockup: (
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-full border border-white/10 flex items-center gap-2">
          <div className="relative">
            <BellRing className="w-4 h-4 text-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <div className="text-[9px] text-white">Follow-up KH VIP</div>
        </div>
      )
    },
    {
      id: 5,
      title: "Chuyển nhân sự",
      description: "Chuyển ngay khách VIP cho đúng người phụ trách.",
      icon: <Headset className="w-5 h-5 text-cyan-400" />,
      image: "/agents/cassie.png",
      pos: { left: "80%", top: "85%" },
      flyFrom: { x: 300, y: 200 },
      mockup: (
        <div className="flex items-center justify-center gap-2 w-full">
          <Bot className="w-4 h-4 text-gray-400" />
          <div className="w-8 h-[1px] bg-cyan-500/30 relative">
            <motion.div 
              animate={{ x: [0, 32] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"
            />
          </div>
          <Headset className="w-4 h-4 text-cyan-400" />
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] py-32 bg-[#030712] overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-cyan-950/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-30 mb-24 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Một bộ não, vạn điểm chạm.
        </h2>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          Hệ sinh thái kết nối hoàn hảo. Cassie không chỉ là Chatbot, mà là một nhân sự đa nhiệm xử lý mọi điểm chạm với khách hàng.
        </p>
      </motion.div>

      {/* Ecosystem Visualizer */}
      <div className="relative w-full max-w-7xl h-[800px] mx-auto hidden lg:block">
        
        {/* Digital Threads (SVG Layer) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,211,238,0)" />
              <stop offset="50%" stopColor="rgba(34,211,238,0.3)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
          </defs>
          {features.map((f, i) => {
            const isHovered = hoveredNode === f.id;
            return (
              <motion.line
                key={`line-${i}`}
                x1="50%" y1="50%"
                x2={f.pos.left} y2={f.pos.top}
                stroke={isHovered ? "#22d3ee" : "rgba(34,211,238,0.15)"}
                strokeWidth={isHovered ? 2 : 1}
                strokeDasharray={isHovered ? "none" : "5 5"}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Central Brain Core */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#030712] border border-cyan-500/30 flex items-center justify-center z-10 shadow-[0_0_60px_rgba(34,211,238,0.1)]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="relative">
            <BrainCircuit className="w-16 h-16 text-cyan-400" />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl"
            />
          </div>
        </motion.div>

        {/* Feature Nodes */}
        {features.map((feature, index) => {
          const isHovered = hoveredNode === feature.id;
          const isAnyHovered = hoveredNode !== null;
          
          return (
            <motion.div
              key={feature.id}
              className={`absolute ${isHovered ? 'z-50' : 'z-20'}`}
              style={{ left: feature.pos.left, top: feature.pos.top }}
              initial={{ opacity: 0, x: feature.flyFrom.x, y: feature.flyFrom.y }}
              whileInView={{ opacity: 1, x: "-50%", y: "-50%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredNode(feature.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <motion.div 
                layout
                className={`flex flex-col items-center bg-[#030712]/80 backdrop-blur-xl border rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ${
                  isHovered 
                    ? 'border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.2)]' 
                    : isAnyHovered 
                      ? 'border-white/5 opacity-30 scale-90' 
                      : 'border-white/10 hover:border-cyan-400/30'
                }`}
                style={{ 
                  width: isHovered ? 300 : 180, 
                  height: isHovered ? 400 : 60 
                }}
              >
                {/* Node Header (Always visible) */}
                <motion.div layout="position" className="w-full h-[60px] flex items-center justify-center gap-3 px-4 shrink-0">
                  <div className={`p-1.5 rounded-full transition-colors duration-300 ${isHovered ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                    {feature.icon}
                  </div>
                  <span className={`text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${isHovered ? 'text-cyan-50' : 'text-white/70'}`}>
                    {feature.title}
                  </span>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 w-full flex flex-col items-center p-5 pt-0 relative"
                    >
                      <p className="text-[11px] text-blue-100/60 text-center mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Mockup Area */}
                      <div className="w-full flex justify-center mb-6 z-20">
                        {feature.mockup}
                      </div>

                      {/* Cassie Mascot (Action Specific) */}
                      <div className="absolute bottom-0 left-0 w-full h-36 flex justify-center items-end z-10 pointer-events-none">
                        <div className="absolute bottom-0 w-full h-24 bg-cyan-500/20 blur-2xl rounded-full" />
                        <motion.img 
                          src={feature.image}
                          alt={feature.title}
                          className="relative z-10 h-full object-contain object-bottom"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        />
                        {/* Action Overlay (e.g. Magnifying glass for Lead Scoring) */}
                        {feature.id === 1 && (
                          <motion.div 
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute right-1/4 bottom-12 z-20"
                          >
                            <Search className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Experience (Vertical Stack) */}
      <div className="w-full max-w-md mx-auto mt-12 flex flex-col gap-8 lg:hidden px-6 z-20">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden p-8 flex flex-col items-center relative"
          >
            <div className="flex items-center gap-3 mb-4 z-20">
              <div className="p-2 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            </div>
            <p className="text-sm text-blue-100/60 text-center mb-8 z-20">{feature.description}</p>
            
            <div className="w-full flex justify-center mb-24 z-20">
              {feature.mockup}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-44 flex justify-center items-end z-10 pointer-events-none">
              <div className="absolute bottom-0 w-full h-24 bg-cyan-500/20 blur-2xl rounded-full" />
              <img 
                src={feature.image}
                alt={feature.title}
                className="relative z-10 h-full object-contain object-bottom opacity-90"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
