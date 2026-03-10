import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Target, Cpu, Flame, CheckCircle2, Lock, Play, Star, Clock } from "lucide-react";
import Link from "next/link";

const quests = [
    {
        id: 1,
        badge: "Quest 01",
        title: "Viết hook viral cho Facebook Ad",
        category: "Marketing",
        categoryColor: "bg-blue-100 text-blue-700",
        difficulty: "Beginner",
        difficultyColor: "text-emerald-600",
        xp: 150,
        time: "20 phút",
        tool: "ChatGPT + Meta Ads",
        output: "3 hook variants với CTR dự kiến",
        evaluation: ["Hook Strength", "Emotional Pull", "Conversion Intent"],
        status: "available",
        icon: "🎯",
        gradient: "from-blue-500 to-violet-500",
    },
    {
        id: 2,
        badge: "Quest 02",
        title: "Tạo Landing Page cho sản phẩm",
        category: "Marketing",
        categoryColor: "bg-blue-100 text-blue-700",
        difficulty: "Intermediate",
        difficultyColor: "text-amber-600",
        xp: 300,
        time: "45 phút",
        tool: "Framer + AI Copy",
        output: "Landing page live với CRO checklist",
        evaluation: ["Clarity", "Value Prop", "CTA Strength"],
        status: "available",
        icon: "🖥️",
        gradient: "from-violet-500 to-pink-500",
    },
    {
        id: 3,
        badge: "Quest 03",
        title: "Tạo video AI giải thích sản phẩm",
        category: "Content",
        categoryColor: "bg-emerald-100 text-emerald-700",
        difficulty: "Intermediate",
        difficultyColor: "text-amber-600",
        xp: 250,
        time: "30 phút",
        tool: "HeyGen + Eleven Labs",
        output: "Video 60s với script và voiceover AI",
        evaluation: ["Script Quality", "Engagement", "Message Clarity"],
        status: "locked",
        icon: "🎬",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        id: 4,
        badge: "Quest 04",
        title: "Phân tích thị trường với AI",
        category: "Business",
        categoryColor: "bg-amber-100 text-amber-700",
        difficulty: "Advanced",
        difficultyColor: "text-rose-600",
        xp: 400,
        time: "60 phút",
        tool: "Perplexity + Spreadsheet AI",
        output: "Market report 5 trang với insights",
        evaluation: ["Depth of Analysis", "Data Accuracy", "Actionability"],
        status: "locked",
        icon: "📊",
        gradient: "from-amber-500 to-orange-500",
    },
];

const difficultyIcons: Record<string, React.ElementType> = {
    Beginner: Flame,
    Intermediate: Target,
    Advanced: Cpu,
};

export default function VLQuestSection() {
    const [activeQuest, setActiveQuest] = useState(quests[0]);

    return (
        <section id="quests" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4"
                    >
                        Quest Learning System
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                        Không có bài học.
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            Chỉ có nhiệm vụ thật.
                        </span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Mỗi Quest là một task thực chiến với công cụ, output rõ ràng và AI đánh giá ngay lập tức.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* Quest List */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {quests.map((q, i) => {
                            const DiffIcon = difficultyIcons[q.difficulty] || Target;
                            return (
                                <motion.button
                                    key={q.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => q.status !== "locked" && setActiveQuest(q)}
                                    className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${activeQuest.id === q.id
                                        ? "border-violet-300 bg-violet-50 shadow-md"
                                        : q.status === "locked"
                                            ? "border-slate-100 bg-slate-50/50 opacity-60 cursor-not-allowed"
                                            : "border-slate-100 bg-white hover:border-violet-200 hover:shadow-md cursor-pointer"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${q.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}
                                        >
                                            {q.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-mono font-bold text-slate-400">{q.badge}</span>
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${q.categoryColor}`}>{q.category}</span>
                                            </div>
                                            <div className="text-sm font-semibold text-slate-800 truncate">{q.title}</div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className={`flex items-center gap-1 text-xs font-medium ${q.difficultyColor}`}>
                                                    <DiffIcon className="w-3 h-3" />
                                                    {q.difficulty}
                                                </span>
                                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {q.time}
                                                </span>
                                                <span className="text-xs text-amber-500 flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-amber-400" />
                                                    +{q.xp} XP
                                                </span>
                                            </div>
                                        </div>
                                        {q.status === "locked" && <Lock className="w-4 h-4 text-slate-300 flex-shrink-0 mt-1" />}
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Quest Detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeQuest.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden"
                        >
                            {/* Quest Header */}
                            <div className={`bg-gradient-to-r ${activeQuest.gradient} p-8 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="relative z-10">
                                    <span className="text-xs font-mono font-bold text-white/60 tracking-widest">{activeQuest.badge}</span>
                                    <div className="text-5xl my-3">{activeQuest.icon}</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                        {activeQuest.title}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-4">
                                        <span className="text-sm text-white/70 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{activeQuest.time}</span>
                                        <span className="text-sm text-white/70 flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white/70" />+{activeQuest.xp} XP</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quest Body */}
                            <div className="p-8 space-y-6">
                                {/* Tool */}
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Công cụ sử dụng</div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                                        🛠️ {activeQuest.tool}
                                    </div>
                                </div>

                                {/* Output */}
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Output mong đợi</div>
                                    <div className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm font-medium text-emerald-700">{activeQuest.output}</span>
                                    </div>
                                </div>

                                {/* AI Evaluation Metrics */}
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">AI sẽ đánh giá bạn theo</div>
                                    <div className="space-y-2">
                                        {activeQuest.evaluation.map((metric) => (
                                            <div key={metric} className="flex items-center gap-3">
                                                <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-r ${activeQuest.gradient} opacity-30`} />
                                                <span className="text-xs font-medium text-slate-600 w-36">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href="/vibe-learning/quest"
                                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r ${activeQuest.gradient} text-white font-bold text-base shadow-lg hover:scale-[1.02] transition-transform`}
                                >
                                    <Play className="w-5 h-5" />
                                    Bắt đầu Quest này
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
