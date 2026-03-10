"use client";

import { BookOpen, Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function VLFooter() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16 px-4 border-t border-slate-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {/* Brand */}
                <div className="md:col-span-1">
                    <Link href="/vibe-learning" className="flex items-center gap-2.5 mb-6">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-white tracking-tight">Vibe</span>
                            <span className="font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent tracking-tight"> Learning</span>
                        </div>
                    </Link>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Thuộc hệ sinh thái Vibework.<br />
                        Nơi huấn luyện AI-First Engineer thông qua task thực tế, không lý thuyết suông.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Grid Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Explore</h4>
                    <ul className="space-y-3">
                        <li><a href="#mentors" className="text-sm hover:text-white hover:underline transition-colors">AI Mentors</a></li>
                        <li><a href="#quests" className="text-sm hover:text-white hover:underline transition-colors">Quest System</a></li>
                        <li><a href="#skill-tree" className="text-sm hover:text-white hover:underline transition-colors">Skill Tree</a></li>
                        <li><a href="#pricing" className="text-sm hover:text-white hover:underline transition-colors">Pricing & Plans</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Vibework Ecosystem</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/vibecoding" className="text-sm hover:text-white hover:underline transition-colors flex items-center gap-2">
                                Vibecoding
                                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Core</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cassie" className="text-sm hover:text-white hover:underline transition-colors flex items-center gap-2">
                                Cassie AI
                                <span className="text-[10px] bg-violet-500/20 text-violet-400 px-1.5 py-0.5 rounded">Sales</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm hover:text-white hover:underline transition-colors flex items-center gap-2">
                                Marketplace
                                <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded w-fit">Jobs</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Bản tin AI Weekly</h4>
                    <p className="text-sm text-slate-400 mb-4">
                        Nhận chiến lược sử dụng AI mới nhất mỗi tuần.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-violet-500 flex-1 min-w-0"
                        />
                        <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">
                            Gửi
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500">
                    © 2024 Vibework Inc. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
