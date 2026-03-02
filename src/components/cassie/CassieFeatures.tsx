"use client";

import { motion } from "motion/react";
import { 
  MessageSquareShare, 
  Users, 
  Lightbulb, 
  Magnet, 
  BellRing, 
  Headset,
  Sparkles,
  User,
  Bot,
  ArrowRight
} from "lucide-react";

export default function CassieFeatures() {
  const features = [
    {
      title: "Tự động phản hồi",
      description: "Đa nền tảng, trả lời ngay lập tức 24/7.",
      icon: <MessageSquareShare className="w-6 h-6 text-cyan-400" />,
      delay: 0.1,
      image: "/agents/cassie.png", // Replace with cassie-happy.png when available
      hoverAnim: { y: -10, scale: 1.05, rotate: [-2, 2, 0] },
      mockup: (
        <div className="flex flex-col gap-2 w-full max-w-[200px]">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-3 rounded-2xl rounded-bl-none text-xs text-white self-start shadow-lg border border-white/5 relative overflow-hidden"
          >
            Giá bao nhiêu shop?
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ delay: 0.6, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="bg-cyan-500/20 backdrop-blur-md p-3 rounded-2xl rounded-br-none text-xs text-cyan-50 self-end shadow-lg border border-cyan-500/20 relative overflow-hidden"
          >
            {/* Shimmer effect */}
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
      title: "Phân loại khách",
      description: "Tự động gắn tag khách tiềm năng, hỏi giá.",
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      delay: 0.2,
      image: "/agents/cassie.png", // Replace with cassie-focused.png when available
      hoverAnim: { scale: 1.05, filter: "brightness(1.1)" },
      mockup: (
        <div className="flex flex-col gap-3 w-full max-w-[200px] relative">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-3 shadow-lg border border-white/5 z-10"
          >
            <div className="relative w-2.5 h-2.5">
              <div className="absolute inset-0 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-red-400"
              />
            </div>
            <span className="text-xs font-medium text-white">Khách VIP</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-3 shadow-lg border border-white/5 ml-6 z-20"
          >
            <div className="relative w-2.5 h-2.5">
              <div className="absolute inset-0 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
                className="absolute inset-0 rounded-full bg-yellow-400"
              />
            </div>
            <span className="text-xs font-medium text-white">Hỏi giá</span>
          </motion.div>
        </div>
      )
    },
    {
      title: "Gợi ý trả lời",
      description: "Soạn sẵn kịch bản tinh tế dựa trên ngữ cảnh.",
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
      delay: 0.3,
      image: "/agents/cassie.png", // Replace with cassie-helpful.png when available
      hoverAnim: { y: -5, scale: 1.05, rotate: 2 },
      mockup: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-full max-w-[200px] border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-xs font-semibold text-cyan-400">Gợi ý trả lời</span>
          </div>
          <div className="space-y-2">
            <div className="relative overflow-hidden bg-white/5 hover:bg-white/10 transition-colors p-2.5 rounded-lg text-[10px] text-gray-300 border border-white/5 cursor-pointer">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
              Dạ mẫu này đang có sẵn ạ...
            </div>
            <div className="relative overflow-hidden bg-white/5 hover:bg-white/10 transition-colors p-2.5 rounded-lg text-[10px] text-gray-300 border border-white/5 cursor-pointer">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "linear", delay: 1.25 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
              Dạ bên em freeship toàn quốc...
            </div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Tạo Lead",
      description: "Thu thập SĐT, Email và đẩy về CRM tự động.",
      icon: <Magnet className="w-6 h-6 text-cyan-400" />,
      delay: 0.4,
      image: "/agents/cassie.png", // Replace with cassie-surprised.png when available
      hoverAnim: { y: -15, scale: 1.1 },
      mockup: (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-full max-w-[200px] border border-white/10 shadow-xl relative"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] border-2 border-[#030712] z-10">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Magnet className="w-4 h-4 text-white" />
            </motion.div>
            {/* Magnetic waves */}
            <motion.div 
              animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-cyan-400"
            />
            <motion.div 
              animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
              className="absolute inset-0 rounded-full border border-cyan-400"
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 relative overflow-hidden">
               <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
            </div>
            <div>
              <div className="text-xs font-medium text-white">Nguyễn Văn A</div>
              <div className="text-[9px] text-cyan-400">New Lead</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden relative">
               <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="h-1.5 bg-white/10 rounded-full w-2/3 overflow-hidden relative">
               <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Nhắc follow-up",
      description: "Không bỏ quên khách. Nhắc lịch chăm sóc lại.",
      icon: <BellRing className="w-6 h-6 text-cyan-400" />,
      delay: 0.5,
      image: "/agents/cassie.png", // Replace with cassie-focused.png when available
      hoverAnim: { scale: 1.05, x: 5 },
      mockup: (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl w-full max-w-[200px] border border-white/10 shadow-xl flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <motion.div
                animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                style={{ originX: 0.5, originY: 0 }}
              >
                <BellRing className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#030712]">
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-red-500"
              />
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-white mb-0.5">Follow-up KH</div>
            <div className="text-[10px] text-cyan-200/70">Hôm nay, 14:00</div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Chuyển nhân sự",
      description: "Chuyển ngay khách VIP cho đúng người phụ trách.",
      icon: <Headset className="w-6 h-6 text-cyan-400" />,
      delay: 0.6,
      image: "/agents/cassie.png", // Replace with cassie-helpful.png when available
      hoverAnim: { y: -5, scale: 1.05, rotate: -2 },
      mockup: (
        <div className="flex items-center justify-center gap-2 w-full max-w-[200px] relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg z-10"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Bot className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="z-0"
          >
            <div className="w-10 h-[2px] bg-gradient-to-r from-gray-500/50 to-cyan-500/50 relative">
              <motion.div 
                animate={{ x: [0, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="w-12 h-12 rounded-2xl bg-cyan-500/20 backdrop-blur-md flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] z-10"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <Headset className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            6 Vũ khí cốt lõi của CASSIE
          </h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            Mọi tính năng đều được thiết kế để tối ưu hóa tỷ lệ chuyển đổi và mang lại trải nghiệm hoàn hảo cho khách hàng của Sếp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative flex flex-col items-center pt-10 px-6 pb-0 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden min-h-[500px] md:h-[550px] transition-colors duration-500 hover:border-cyan-400/50 hover:bg-white/[0.04]"
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-500/10 transition-all duration-500 pointer-events-none" />
              
              {/* Top Content */}
              <div className="text-center z-20 flex flex-col items-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-50 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-100/60 leading-relaxed max-w-[250px] group-hover:text-blue-100/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Middle: Floating UI */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-20 pointer-events-none">
                {feature.mockup}
              </div>

              {/* Bottom: Cassie Image Placeholder */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[220px] z-10 flex items-end justify-center">
                {/* Glow behind Cassie */}
                <div className="absolute bottom-0 w-full h-[150px] bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30 transition-colors duration-500" />
                
                <motion.img 
                  src={feature.image}
                  alt={`Cassie ${feature.title}`}
                  className="relative z-10 w-full h-full object-contain object-bottom opacity-80 group-hover:opacity-100"
                  whileHover={feature.hoverAnim}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    rotate: { type: "tween", duration: 0.5 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
