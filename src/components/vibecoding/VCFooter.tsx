"use client";

export default function VCFooter() {
    return (
        <footer
            className="relative py-12 border-t border-[#1a1a1a]"
            style={{ backgroundColor: "var(--vc-bg)" }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded border border-[#C6FF00]/30 flex items-center justify-center bg-[#C6FF00]/5">
                            <span className="text-[#C6FF00] font-bold text-xs font-mono">VC</span>
                        </div>
                        <div>
                            <p className="text-[#E8E8E8] text-sm font-bold tracking-wider" style={{ fontFamily: "Space Grotesk" }}>
                                VIBE<span className="text-[#C6FF00]">CODING</span>
                            </p>
                            <p className="text-[10px] text-[#555] font-mono">AI-First Engineer Program</p>
                        </div>
                    </div>

                    {/* Center text */}
                    <p className="text-[10px] text-[#555] font-mono tracking-wider text-center">
                        DESIGNED WITH SYSTEM THINKING • BUILT WITH AI ORCHESTRATION
                    </p>

                    {/* Copyright */}
                    <p className="text-[10px] text-[#444] font-mono">
                        © {new Date().getFullYear()} VibeCoding. All rights reserved.
                    </p>
                </div>

                {/* Bottom line */}
                <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex items-center justify-center">
                    <p className="text-[10px] text-[#333] font-mono tracking-widest">
                        THE NEURAL ARCHITECT • ONE PERSON TECH TEAM
                    </p>
                </div>
            </div>
        </footer>
    );
}
