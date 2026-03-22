"use client";

import { motion } from "framer-motion";
import { BookOpen, Play, Star } from "lucide-react";
import Link from "next/link";

interface CoursesWidgetProps {
    courses?: any[];
}

export default function CoursesWidget({ courses = [] }: CoursesWidgetProps) {
    const hasCourses = courses.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] p-6 hover:border-violet-500/30 transition-all duration-500"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                        <BookOpen className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">Khóa học của tôi</h3>
                </div>
                <Link href="/vibe-learning" className="text-[10px] text-gray-500 hover:text-white uppercase font-black tracking-widest transition-colors">
                    Xem tất cả →
                </Link>
            </div>

            <div className="space-y-4">
                {hasCourses ? (
                    courses.map((course) => (
                        <div key={course.id} className="relative group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-white font-semibold text-sm line-clamp-1">{course.courseName}</span>
                                <div className="px-2 py-0.5 rounded text-[9px] font-bold bg-violet-500/20 text-violet-400 uppercase tracking-widest">
                                    {course.status}
                                </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${course.progress}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-violet-600 to-blue-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                                />
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                <span>Tiến độ</span>
                                <span>{course.progress}%</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center">
                        <p className="text-gray-500 text-sm mb-4">Bạn chưa tham gia khóa học nào.</p>
                        <Link href="/vibe-learning" className="text-[10px] text-violet-400 font-black uppercase tracking-widest hover:underline">
                            Khám phá học viện →
                        </Link>
                    </div>
                )}
            </div>

            {hasCourses && (
                <button className="flex items-center justify-center gap-2 w-full mt-6 py-3 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 font-bold text-xs hover:bg-violet-600/20 transition-all">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Tiếp tục bài học gần nhất
                </button>
            )}
        </motion.div>
    );
}
