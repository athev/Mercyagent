"use client";

import { motion } from "motion/react";
import { Check, ShieldCheck, Coffee, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    tagline: "Dành cho cá nhân & shop nhỏ",
    price: "990k",
    period: "/tháng",
    color: "#93C5FD", // Soft Blue
    image: "/agents/cassie.png",
    description: "Bắt đầu hành trình tự động hóa với chi phí tối ưu nhất.",
    features: [
      "Xử lý 500 tin nhắn/tháng",
      "Kết nối 1 Fanpage Facebook",
      "Hỗ trợ Inboxing cơ bản",
      "Lưu trữ 100 khách hàng",
      "Báo cáo hàng tuần"
    ],
    popular: false,
  },
  {
    name: "Business Pro",
    tagline: "Giải pháp tối ưu tăng trưởng",
    price: "2.5tr",
    period: "/tháng",
    color: "#FDE68A", // Pastel Gold
    image: "/agents/cassie.png",
    savings: "TIẾT KIỆM 70%",
    description: "Đầy đủ sức mạnh của Cassie để bứt phá doanh thu 24/7.",
    features: [
      "Xử lý không giới hạn tin nhắn",
      "Kết nối 5 Fanpage & Instagram",
      "Lead Scoring thông minh",
      "Tự động Follow-up 7 ngày",
      "Đồng bộ CRM thời gian thực",
      "Ưu tiên xử lý ngôn ngữ tự nhiên"
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "Hệ thống AI riêng biệt",
    price: "Custom",
    period: "",
    color: "#A78BFA", // Deep Purple Accent
    image: "/agents/cassie.png",
    description: "Hạ tầng riêng biệt và đào tạo AI theo dữ liệu độc quyền.",
    features: [
      "Hạ tầng Server riêng biệt",
      "Tùy chỉnh AI theo dữ liệu riêng",
      "Kết nối API không giới hạn",
      "Hỗ trợ kỹ thuật 24/7 riêng biệt",
      "Đào tạo nhân sự sử dụng AI",
      "Bảo mật đa lớp chuẩn quốc tế"
    ],
    popular: false,
  }
];

export default function CassiePricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#4C1D95]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#93C5FD]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE68A]/10 border border-[#FDE68A]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#FDE68A] animate-pulse shadow-[0_0_10px_#FDE68A]"></div>
            <span className="text-[#FDE68A] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Hợp đồng tín nhiệm
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Đầu tư cho sự <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] via-[#FDE68A] to-[#A78BFA]">thảnh thơi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light flex items-center justify-center gap-2"
          >
            <Coffee className="w-5 h-5 text-amber-400" />
            "Chi phí của một ly cà phê mỗi ngày cho một nhân sự 24/7."
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-500 bg-[#0B0F19] ${plan.popular
                  ? 'border-2 lg:-translate-y-4 shadow-2xl z-20'
                  : 'border border-white/10 mt-0 lg:mt-4 hover:border-white/20 z-10'
                }`}
              style={{ borderColor: plan.popular ? plan.color : undefined }}
            >
              {/* Popular Header */}
              {plan.popular && (
                <div
                  className="w-full text-center py-2 text-sm font-bold tracking-wide"
                  style={{ backgroundColor: plan.color, color: '#1E1B4B' }}
                >
                  LỰA CHỌN PHỔ BIẾN NHẤT
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-48 w-full bg-slate-900">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent"></div>

                {/* Marquee for Popular Card */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="relative w-16 h-16"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id={`circlePath-${index}`} d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                        <text className="text-[12px] font-bold fill-white uppercase tracking-widest">
                          <textPath xlinkHref={`#circlePath-${index}`}>• SAVE 70% • SAVE 70% </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-[#FDE68A] fill-[#FDE68A]" />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow -mt-8 relative z-10">

                {/* Plan Name & Savings */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {plan.name}
                    </h3>
                    <p className="text-sm font-mono mt-1" style={{ color: plan.color }}>{plan.tagline}</p>
                  </div>
                  {plan.savings && (
                    <span
                      className="px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap ml-2"
                      style={{ borderColor: `${plan.color}50`, color: plan.color }}
                    >
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{plan.price}</span>
                  <span className="text-gray-400 font-light">{plan.period}</span>
                </div>

                {/* Action Button */}
                <Link
                  href="/onboarding"
                  className={`w-full py-3.5 rounded-full font-bold mb-8 transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular
                      ? 'text-[#1E1B4B] hover:opacity-90'
                      : 'bg-transparent border border-white/20 text-white hover:bg-white/5'
                    }`}
                  style={{ backgroundColor: plan.popular ? plan.color : 'transparent' }}
                >
                  ⚡ Kích hoạt ngay
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Guarantee */}
                <div className="flex items-center gap-2 mb-6 text-sm text-white font-medium">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  Cam kết hiệu quả & Bảo mật
                </div>

                {/* Features List */}
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 shrink-0 text-cyan-500" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.popular && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    Lựa chọn hàng đầu của Sếp
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-sm font-bold tracking-widest text-white uppercase">Trusted Partner</div>
          <div className="text-sm font-bold tracking-widest text-white uppercase">AI Security First</div>
          <div className="text-sm font-bold tracking-widest text-white uppercase">24/7 Support</div>
          <div className="text-sm font-bold tracking-widest text-white uppercase">Enterprise Ready</div>
        </div>
      </div>
    </section>
  );
}
