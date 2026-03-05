import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Tôi hoàn toàn mù tịt về lập trình, liệu có học được không?",
        answer: "Tuyệt đối có. Khóa học được thiết kế cho người bắt đầu từ số 0. Thay vì học cú pháp khô khan như 'Hello World', bạn sẽ học cách giao tiếp với AI bằng ngôn ngữ tự nhiên (Prompting) và tư duy kiến trúc (System Design) để AI viết code cho bạn."
    },
    {
        question: "Tôi có cần mua bản Pro của ChatGPT hay Claude không?",
        answer: "Rất khuyến nghị. Việc đầu tư khoảng $20/tháng cho các mô hình AI mạnh mẽ như Claude 3.5 Sonnet hoặc GPT-4o là khoản đầu tư tốt nhất bạn có thể làm. Tuy nhiên, chúng tôi cũng hướng dẫn cách tận dụng các công cụ IDE miễn phí tích hợp AI (như Cursor bản free) để bắt đầu."
    },
    {
        question: "Dùng AI viết code thì có đảm bảo bảo mật không?",
        answer: "Chúng tôi dành riêng một module để dạy bạn về 'Security Barricade' - cách làm việc với thư viện mã nguồn, quản lý API Key, và thiết lập luồng an toàn để code của bạn không bị lộ ra ngoài hay bị tiêm mã độc."
    },
    {
        question: "Sau khi học xong, tôi có được hỗ trợ thêm không?",
        answer: "Có. Bạn sẽ được tham gia cộng đồng Vibecoding kín, nơi Mentor và các Technical Architect hỗ trợ giải đáp thắc mắc, review dự án, và cập nhật những pipeline AI mới nhất hoàn toàn miễn phí."
    },
    {
        question: "Bao lâu thì tôi có thể tự build được một ứng dụng hoàn chỉnh?",
        answer: "Hầu hết học viên bắt đầu chạy được ứng dụng đầu tiên (như To-do List hoặc CRM mini) ngay trong tuần thứ 2. Đến cuối khóa học (tuần 4), bạn đủ khả năng thiết kế và deploy một hệ thống Micro-SaaS ra thị trường thực tế."
    }
];

export const VCFAQ = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section ref={ref} className="py-24 relative bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--vc-lime)]/10 border border-[var(--vc-lime)]/20 text-[var(--vc-lime)] text-xs font-mono font-bold tracking-wider uppercase mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--vc-lime)] animate-pulse" />
                        Giải Đáp Thắc Mắc
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E8E8E8] tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        CÂU HỎI <span className="text-[var(--vc-lime)]">THƯỜNG GẶP</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-[#222] bg-[#141414] rounded-xl overflow-hidden transition-colors hover:border-[var(--vc-lime)]/30"
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-bold pr-8 transition-colors ${openIndex === index ? "text-[var(--vc-lime)]" : "text-[#E8E8E8]"}`} style={{ fontFamily: "Space Grotesk" }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-[#888] ${openIndex === index ? "rotate-180 text-[var(--vc-lime)]" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 text-[#888] text-sm leading-relaxed border-t border-[#222] pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
