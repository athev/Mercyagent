import React from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const VCTargetAudience = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 relative bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E8E8E8] mb-4 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        CHƯƠNG TRÌNH NÀY <span className="text-[var(--vc-lime)]">DÀNH CHO AI?</span>
                    </h2>
                    <p className="text-[#888] text-base md:text-lg max-w-2xl mx-auto">
                        Chúng tôi không đào tạo những người thợ gõ code. Chúng tôi đào tạo những người kiến trúc sư sản phẩm của kỷ nguyên AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* For Who */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-[var(--vc-lime)]/30 bg-[#141414] p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--vc-lime)]/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-[var(--vc-lime)]/10" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[var(--vc-lime)]/10 flex items-center justify-center border border-[var(--vc-lime)]/20">
                                <CheckCircle2 className="text-[var(--vc-lime)] w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#E8E8E8]" style={{ fontFamily: "Space Grotesk" }}>
                                PHÙ HỢP NẾU BẠN LÀ
                            </h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            {[
                                {
                                    title: "Non-Tech/Beginner",
                                    desc: "Không cần nền tảng IT. AI sẽ là người gõ code, bạn là người kiến trúc và chỉ đạo."
                                },
                                {
                                    title: "Muốn Build Product Thực Tế",
                                    desc: "Bạn có ý tưởng nhưng thiếu kỹ năng hoặc không muốn tốn kém thuê đội dev."
                                },
                                {
                                    title: "Bận Rộn, Ít Thời Gian",
                                    desc: "Không cần nghỉ việc hiện tại. Chỉ với 2-3h mỗi ngày, bạn tự xây một Micro-SaaS với tốc độ gấp 10 lần Dev thường."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--vc-lime)] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-[#E8E8E8] font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Not For Who */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-red-500/20 bg-[#141414] p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-red-500/10" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <XCircle className="text-red-500 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#E8E8E8]" style={{ fontFamily: "Space Grotesk" }}>
                                KHÔNG DÀNH CHO BẠN NẾU
                            </h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            {[
                                {
                                    title: "Tư Duy Ỷ Lại 100% Vào AI",
                                    desc: "Chỉ muốn bấm 1 nút có ngay sản phẩm mà không muốn tư duy logic hay thiết kế luồng (Product Thinking)."
                                },
                                {
                                    title: "Không Sẵn Sàng Thay Đổi",
                                    desc: "Kiên quyết giữ các phương pháp học bẹt, copy-paste thụ động và sợ thử nghiệm sai lầm."
                                },
                                {
                                    title: "Tìm Kiếm Mánh Khóe Nhanh Gọi Vốn",
                                    desc: "Làm giả sản phẩm để lùa gà. Chúng tôi hướng dẫn tạo ra giá trị thực tiễn chạy được trên thị trường."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-[#E8E8E8] font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
