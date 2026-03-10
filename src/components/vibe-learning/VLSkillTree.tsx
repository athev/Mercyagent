"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import Link from "next/link";

const skillPaths = [
    {
        id: "marketing",
        name: "Marketing AI",
        emoji: "🎯",
        color: "from-blue-500 to-violet-500",
        textColor: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        nodes: [
            { id: 1, name: "Copywriting Cơ bản", level: 1, status: "done", xp: 150 },
            { id: 2, name: "Hook Frameworks", level: 1, status: "done", xp: 200 },
            { id: 3, name: "Landing Page", level: 2, status: "done", xp: 300 },
            { id: 4, name: "Ad Creative AI", level: 2, status: "active", xp: 350 },
            { id: 5, name: "Funnel Design", level: 3, status: "locked", xp: 500 },
            { id: 6, name: "CRO Mastery", level: 3, status: "locked", xp: 600 },
            { id: 7, name: "Marketing Architect", level: 4, status: "locked", xp: 1000, milestone: true },
        ],
    },
    {
        id: "content",
        name: "Content AI",
        emoji: "✍️",
        color: "from-emerald-500 to-teal-500",
        textColor: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        nodes: [
            { id: 1, name: "Script Writing", level: 1, status: "done", xp: 150 },
            { id: 2, name: "SEO Content", level: 1, status: "done", xp: 200 },
            { id: 3, name: "Video AI", level: 2, status: "active", xp: 280 },
            { id: 4, name: "Brand Voice", level: 2, status: "locked", xp: 320 },
            { id: 5, name: "Content Strategy", level: 3, status: "locked", xp: 450 },
            { id: 6, name: "Content Creator Pro", level: 3, status: "locked", xp: 800, milestone: true },
        ],
    },
    {
        id: "automation",
        name: "Automation AI",
        emoji: "🔁",
        color: "from-rose-500 to-pink-500",
        textColor: "text-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        nodes: [
            { id: 1, name: "Workflow Basics", level: 1, status: "active", xp: 150 },
            { id: 2, name: "Zapier/Make", level: 1, status: "locked", xp: 200 },
            { id: 3, name: "AI Agents", level: 2, status: "locked", xp: 350 },
            { id: 4, name: "System Architect", level: 3, status: "locked", xp: 600, milestone: true },
        ],
    },
];

export default function VLSkillTree() {
    const [activeSkill, setActiveSkill] = useState(skillPaths[0]);

    return (
        <section id="skill-tree" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Skill Tree
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Mỗi Quest mở ra
                        <br />
                        <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                            một năng lực mới.
                        </span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Skill Tree trực quan hóa hành trình học tập — từ cơ bản đến mastery, từng node là một kỹ năng có thể sử dụng ngay.
                    </p>
                </div>

                {/* Path Selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {skillPaths.map((path) => (
                        <motion.button
                            key={path.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setActiveSkill(path)}
                            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 font-semibold text-sm transition-all ${activeSkill.id === path.id
                                ? `${path.bgColor} ${path.borderColor} ${path.textColor} shadow-md`
                                : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                                }`}
                        >
                            <span className="text-base">{path.emoji}</span>
                            {path.name}
                        </motion.button>
                    ))}
                </div>

                {/* Skill Tree Visualization */}
                <motion.div
                    key={activeSkill.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-3xl border-2 ${activeSkill.borderColor} ${activeSkill.bgColor} p-8 md:p-12`}
                >
                    <div className="flex flex-col md:flex-row items-center gap-0">
                        {activeSkill.nodes.map((node, i) => (
                            <div key={node.id} className="flex flex-col md:flex-row items-center flex-1 w-full">
                                {/* Node */}
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: i * 0.08 }}
                                        className={`relative flex flex-col items-center group`}
                                    >
                                        {/* Node circle */}
                                        {node.status === "locked" ? (
                                            <div
                                                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all bg-slate-100 border-2 border-dashed border-slate-300 ${node.milestone ? "w-20 h-20 md:w-24 md:h-24 rounded-3xl" : ""}`}
                                            >
                                                <Lock className="w-6 h-6 text-slate-400" />
                                            </div>
                                        ) : (
                                            <Link
                                                href={`/vibe-learning/campaign/camp-01`}
                                                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 ${node.status === "done"
                                                    ? `bg-gradient-to-br ${activeSkill.color} shadow-lg`
                                                    : `bg-gradient-to-br ${activeSkill.color} shadow-xl ring-4 ring-offset-2 ring-violet-200 animate-pulse`
                                                    } ${node.milestone ? "w-20 h-20 md:w-24 md:h-24 rounded-3xl" : ""}`}
                                            >
                                                {node.status === "done" && <CheckCircle2 className="w-7 h-7 text-white" />}
                                                {node.status === "active" && (
                                                    <div className="text-xl md:text-2xl">{activeSkill.emoji}</div>
                                                )}
                                            </Link>
                                        )}

                                        {/* Label below node */}
                                        <div className="mt-3 max-w-[100px] md:max-w-[120px]">
                                            <div className={`text-xs font-bold ${node.status === "locked" ? "text-slate-400" : activeSkill.textColor}`}>
                                                {node.name}
                                            </div>
                                            {node.status !== "locked" && (
                                                <div className="text-[10px] text-slate-400 mt-0.5">+{node.xp} XP</div>
                                            )}
                                            {node.milestone && (
                                                <div className={`text-[10px] font-bold ${activeSkill.textColor} mt-1 uppercase tracking-wider`}>
                                                    ✦ Milestone
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Connector arrow */}
                                {i < activeSkill.nodes.length - 1 && (
                                    <div className="flex items-center justify-center w-full md:w-auto my-4 md:my-0 md:mx-2 flex-shrink-0">
                                        <div
                                            className={`h-px md:w-8 md:h-px w-px h-8 ${activeSkill.nodes[i + 1].status !== "locked"
                                                ? `bg-gradient-to-r ${activeSkill.color} opacity-60`
                                                : "bg-slate-200"
                                                }`}
                                            style={{ minWidth: 24 }}
                                        />
                                        <div className={`w-2 h-2 md:w-1.5 md:h-1.5 rotate-45 border-r-2 border-t-2 -ml-1.5 ${activeSkill.nodes[i + 1].status !== "locked" ? activeSkill.borderColor : "border-slate-200"}`} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="mt-10 pt-6 border-t border-slate-200/50 flex flex-wrap gap-5 justify-center">
                        {[
                            { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, label: "Hoàn thành" },
                            { icon: <Circle className="w-4 h-4 text-violet-500 fill-violet-500" />, label: "Đang học" },
                            { icon: <Lock className="w-4 h-4 text-slate-400" />, label: "Chưa mở" },
                        ].map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-xs text-slate-500">
                                {icon} {label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
