"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, User, Clock, AlertTriangle, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

export default function CassieStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color shifts based on scroll progress
  // Act 1: Dark gray/black
  // Act 2: Deep red/purple tint
  // Act 3: Soft blue glow
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#030712", "#0a0505", "#050a15", "#030712"]
  );

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full transition-colors duration-700"
    >
      {/* ACT 1: Startup Struggle */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Hồi 1: Sự khởi đầu</h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-medium text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Khi bạn làm tất cả mọi việc.
            </p>
          </motion.div>

          {/* Chat Simulation */}
          <div className="w-full max-w-md space-y-6">
            {/* Customer Message */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-end gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <div className="bg-gray-800 text-gray-200 px-5 py-3 rounded-2xl rounded-bl-none text-sm md:text-base">
                Dạ shop ơi, sản phẩm này còn màu đen không ạ? Mình muốn đặt giao gấp trong hôm nay.
              </div>
            </motion.div>

            {/* Typing Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-end gap-3 justify-end"
            >
              <div className="bg-blue-600/20 px-5 py-4 rounded-2xl rounded-br-none flex items-center gap-1.5">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              </div>
            </motion.div>

            {/* Time passes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 3 }}
              className="flex items-center justify-center gap-2 text-gray-500 text-sm py-4"
            >
              <Clock className="w-4 h-4" />
              <span>2 tiếng sau...</span>
            </motion.div>

            {/* Customer Leaves */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 4 }}
              className="text-center"
            >
              <p className="text-red-400/80 font-medium text-lg italic">
                "Khách đã rời đi."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ACT 2: Overloaded Business */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold tracking-widest text-red-500/50 uppercase mb-4">Hồi 2: Sự quá tải</h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-medium text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Khi quy mô vượt quá tầm kiểm soát.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-red-900/30 ml-4 md:ml-12 space-y-12 pb-12">
            {[
              {
                title: "Nhân sự kiệt sức",
                desc: "Hàng trăm tin nhắn đổ về cùng lúc. Không thể trả lời kịp.",
                icon: <MessageSquare className="w-5 h-5 text-red-400" />
              },
              {
                title: "Chất lượng đi xuống",
                desc: "Trả lời qua loa, nhầm lẫn thông tin, thái độ cáu gắt với khách hàng.",
                icon: <AlertTriangle className="w-5 h-5 text-orange-400" />
              },
              {
                title: "Đánh mất uy tín",
                desc: "Khách hàng phàn nàn, đánh giá 1 sao, doanh thu sụt giảm nghiêm trọng.",
                icon: <TrendingUp className="w-5 h-5 text-red-500 transform rotate-180" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-[#0a0505] border border-red-900/50 flex items-center justify-center">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ACT 3: Cassie Appears */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
        {/* Soft Blue Glow Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Hồi 3: Giải pháp</h2>
          </motion.div>

          {/* Cassie Avatar/Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-32 h-32 mx-auto mb-12 relative"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] border border-blue-300/30">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CASSIE xuất hiện.
          </motion.h3>

          {/* Checklist */}
          <div className="space-y-6 max-w-xl mx-auto text-left mb-16">
            {[
              "Phản hồi ngay lập tức, 24/7.",
              "Luôn giữ thái độ chuẩn mực, chuyên nghiệp.",
              "Không giới hạn số lượng khách hàng cùng lúc."
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.2 }}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-lg text-blue-50">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <p className="text-2xl md:text-3xl text-blue-200/80 font-light italic">
              "Để Sếp tập trung vào việc lớn hơn."
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
