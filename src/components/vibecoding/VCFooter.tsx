"use client";

const quickLinks = [
    { label: "Tuyên ngôn", href: "#manifesto" },
    { label: "Lộ trình", href: "#levels" },
    { label: "Chương trình", href: "#modules" },
    { label: "AI Team", href: "#ai-team" },
    { label: "Đăng ký", href: "#pricing" },
];

export default function VCFooter() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            className="relative border-t border-[#1a1a1a]"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            {/* CTA Strip */}
            <div className="border-b border-[#1a1a1a] py-10">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-[#E8E8E8] font-bold text-lg md:text-xl" style={{ fontFamily: "Space Grotesk" }}>
                            Sẵn sàng gia nhập{" "}
                            <span className="text-[var(--vc-lime)]">kỷ nguyên AI-First?</span>
                        </p>
                        <p className="text-[#888] text-sm mt-1">12 suất Early Bird còn lại. Đừng để sau.</p>
                    </div>
                    <button
                        onClick={() => handleScroll("#pricing")}
                        className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--vc-lime)] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase vc-glow-btn hover:scale-105 active:scale-95 transition-transform duration-300"
                        style={{ fontFamily: "Space Grotesk" }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
                        Đăng ký ngay
                    </button>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded border border-[var(--vc-lime)]/30 flex items-center justify-center bg-[var(--vc-lime)]/5">
                                <span className="text-[var(--vc-lime)] font-bold text-xs font-mono">VC</span>
                            </div>
                            <p className="text-[#E8E8E8] text-sm font-bold tracking-wider" style={{ fontFamily: "Space Grotesk" }}>
                                VIBE<span className="text-[var(--vc-lime)]">CODING</span>
                            </p>
                        </div>
                        <p className="text-[#555] text-xs leading-relaxed font-mono">
                            AI-First Engineer Program — Phương pháp đào tạo độc quyền từ 10 năm kinh nghiệm thực chiến.
                        </p>
                        {/* Social links */}
                        <div className="flex items-center gap-3 mt-5">
                            <a
                                href="https://zalo.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#222] bg-[#141414] hover:border-[var(--vc-lime)]/30 text-[#888] hover:text-[var(--vc-lime)] transition-all duration-300 text-[10px] font-mono"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017 0zm5.568 16.525a.672.672 0 01-.932.184l-2.627-1.752a.672.672 0 00-.748.019l-1.752 1.267a.672.672 0 01-1.013-.284l-1.267-3.127a.672.672 0 00-.38-.388l-3.127-1.267a.672.672 0 01-.284-1.013l1.267-1.752a.672.672 0 00.019-.748L5.977 6.037a.672.672 0 01.184-.932.672.672 0 01.748.019l2.808 1.872a.672.672 0 00.748-.019l1.872-1.354a.672.672 0 011.013.284l1.354 3.346a.672.672 0 00.388.388l3.346 1.354a.672.672 0 01.284 1.013l-1.354 1.872a.672.672 0 00-.019.748l1.872 2.808a.672.672 0 01-.656.089z" />
                                </svg>
                                Zalo
                            </a>
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#222] bg-[#141414] hover:border-[var(--vc-lime)]/30 text-[#888] hover:text-[var(--vc-lime)] transition-all duration-300 text-[10px] font-mono"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-[var(--vc-lime)] text-[10px] font-mono tracking-widest uppercase mb-4">Nội dung</h5>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleScroll(link.href)}
                                        className="text-[#555] hover:text-[var(--vc-lime)] text-xs font-mono transition-colors duration-200 tracking-wide"
                                    >
                                        → {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-[var(--vc-lime)] text-[10px] font-mono tracking-widest uppercase mb-4">Liên hệ</h5>
                        <div className="space-y-3">
                            <p className="text-[#555] text-xs font-mono">Có câu hỏi về khóa học?</p>
                            <a
                                href="https://zalo.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--vc-lime)]/20 bg-[var(--vc-lime)]/5 text-[var(--vc-lime)] text-xs font-mono hover:bg-[var(--vc-lime)]/10 transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--vc-lime)] animate-pulse" />
                                Chat với tôi trên Zalo
                            </a>
                            <p className="text-[#444] text-[10px] font-mono">Phản hồi trong vòng 2 giờ</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[10px] text-[#333] font-mono tracking-widest">
                        THE NEURAL ARCHITECT • ONE PERSON TECH TEAM
                    </p>
                    <p className="text-[10px] text-[#333] font-mono">
                        © {new Date().getFullYear()} VibeCoding. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
