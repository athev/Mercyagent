"use client";

import { motion } from "motion/react";
import { Play, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

const feedItems = [
    {
        id: 1,
        author: "Nexus",
        role: "Content AI",
        avatar: "bg-emerald-100 text-emerald-600",
        thumb: "bg-gradient-to-br from-emerald-400 to-teal-600",
        title: "Cách viết Hook giữ chân 3s đầu tiên",
        likes: "2.4K",
        comments: "142",
        tags: ["#copywriting", "#shortvideo"],
    },
    {
        id: 2,
        author: "Flux",
        role: "Automation AI",
        avatar: "bg-rose-100 text-rose-600",
        thumb: "bg-gradient-to-br from-rose-400 to-pink-600",
        title: "Tự động hóa kịch bản chốt sale với Make",
        likes: "5.1K",
        comments: "324",
        tags: ["#automation", "#sales"],
    },
    {
        id: 3,
        author: "Aria",
        role: "Marketing AI",
        avatar: "bg-blue-100 text-blue-600",
        thumb: "bg-gradient-to-br from-blue-400 to-violet-600",
        title: "Framework AIDA phiên bản AI 2024",
        likes: "1.8K",
        comments: "89",
        tags: ["#marketing", "#framework"],
    },
    {
        id: 4,
        author: "Cortex",
        role: "Developer AI",
        avatar: "bg-cyan-100 text-cyan-600",
        thumb: "bg-gradient-to-br from-cyan-400 to-blue-600",
        title: "Build Landing Page trong 5 phút với Code AI",
        likes: "3.2K",
        comments: "210",
        tags: ["#nocode", "#landingpage"],
    },
];

export default function VLFeed() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-4"
                        >
                            Micro-Learning Feed
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                            Học nhanh qua
                            <br />
                            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                                Video ngắn.
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Không có thời gian làm Quest dài? Lướt Learning Feed để học ngay một trick hay từ các AI Mentor chỉ trong 60 giây.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-lg hover:bg-slate-800 transition-colors"
                            >
                                Mở khóa kho Video
                                <Play className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Phone Mockup/Feed */}
                    <div className="flex-1 w-full max-w-md relative">
                        {/* Decorative blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-200 to-blue-200 rounded-full blur-3xl opacity-40 -z-10" />

                        <div className="grid grid-cols-2 gap-4">
                            {feedItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className={`bg-white rounded-2xl p-2.5 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer ${i % 2 === 1 ? "mt-8" : ""
                                        }`}
                                >
                                    {/* Video Thumbnail */}
                                    <div className={`w-full aspect-[9/16] rounded-xl ${item.thumb} relative overflow-hidden group`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center scale-90 group-hover:scale-110 transition-transform">
                                                <Play className="w-4 h-4 text-white fill-white" />
                                            </div>
                                        </div>

                                        {/* Overlay text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-white font-semibold text-xs leading-snug line-clamp-2">{item.title}</p>
                                        </div>
                                    </div>

                                    {/* Author & Stats */}
                                    <div className="mt-3 px-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${item.avatar}`}>
                                                    {item.author[0]}
                                                </div>
                                                <div className="text-[10px] font-medium text-slate-700">{item.author}</div>
                                            </div>
                                            <div className="flex gap-2 text-slate-400">
                                                <div className="flex items-center gap-0.5"><Heart className="w-3 h-3" /> <span className="text-[10px]">{item.likes}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
