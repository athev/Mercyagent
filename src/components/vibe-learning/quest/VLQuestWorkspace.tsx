"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Send, Sparkles, Clock, CheckCircle2, ChevronRight, Play, Maximize2, X } from "lucide-react";
import Link from "next/link";

type Message = {
    id: number;
    role: "ai" | "user";
    content: string;
};

export default function VLQuestWorkspace() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: "ai",
            content: "Chào bạn. Tôi là Aria (Marketing AI). Nhiệm vụ hôm nay của bạn là **viết một Hook viral** cho video quảng cáo sản phẩm 'Tai nghe chống ồn XYZ'.\n\nYêu cầu:\n1. Thu hút sự chú ý trong 3s đầu.\n2. Đánh vào nỗi đau (Pain point).\n3. Tối đa 30 chữ.\n\nHãy viết vào khung bên phải và nhấn 'Nộp bài' khi hoàn thành.",
        },
    ]);
    const [input, setInput] = useState("");
    const [content, setContent] = useState("");
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    // Auto-scroll chat
    const chatEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMsg: Message = { id: Date.now(), role: "user", content: input };
        setMessages((prev) => [...prev, newMsg]);
        setInput("");

        // Mock AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { id: Date.now(), role: "ai", content: "Tôi hiểu. Cứ thử nháp bên phải, nếu bí quá hãy cho tôi biết." }
            ]);
        }, 1000);
    };

    const handleSubmitQuest = () => {
        if (!content.trim()) return;
        setIsEvaluating(true);
        // Fake evaluation delay
        setTimeout(() => {
            setIsEvaluating(false);
            setShowFeedback(true);
        }, 2500);
    };

    return (
        <div className="flex flex-col h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
            {/* Topbar */}
            <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-10">
                <div className="flex items-center gap-4">
                    <Link href="/vibe-learning" className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-mono">Q-01</span>
                        <h1 className="font-semibold text-sm hidden sm:block">Viết Hook Viral (Tai nghe XYZ)</h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 mr-2">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12:45</span>
                        <span className="flex items-center gap-1.5 text-amber-500"><Sparkles className="w-3.5 h-3.5" /> +150 XP</span>
                    </div>
                    <button
                        onClick={handleSubmitQuest}
                        disabled={content.trim().length === 0 || isEvaluating}
                        className={`px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-sm ${content.trim()
                            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-md hover:scale-105"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                            }`}
                    >
                        {isEvaluating ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span className="hidden sm:inline">Đang AI đánh giá...</span>
                            </>
                        ) : (
                            <>
                                <span>Nộp bài</span>
                                <CheckCircle2 className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </header>

            {/* Main Workspace */}
            <main className="flex-1 flex overflow-hidden">
                {/* Left Panel: Chat (Aria) */}
                <div className="w-full sm:w-[350px] lg:w-[400px] border-r border-slate-200 bg-white flex flex-col flex-shrink-0">
                    {/* Mentor Info */}
                    <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-lg shadow-sm">
                            🎯
                        </div>
                        <div>
                            <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                                Aria <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">Marketing AI Mentor</div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 vc-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-slate-900 text-white rounded-tr-sm"
                                        : "bg-slate-50 border border-slate-100 text-slate-700 rounded-tl-sm"
                                        }`}
                                >
                                    {msg.content.split('\n').map((line, i) => (
                                        <div key={i} className={line.startsWith('-') || /^[0-9]\./.test(line) ? "pl-2" : ""}>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Fake typing indicator could go here */}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 bg-white border-t border-slate-100">
                        <form onSubmit={handleSendMessage} className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Hỏi thêm gợi ý..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="absolute right-1.5 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white disabled:bg-slate-300 disabled:text-slate-500 transition-colors"
                            >
                                <Send className="w-3.5 h-3.5 ml-0.5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Panel: Editor Container */}
                <div className="hidden sm:flex flex-col flex-1 bg-slate-50/50 p-4 lg:p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workspace</div>
                        <button className="p-1.5 rounded hover:bg-slate-200 text-slate-400 transition-colors">
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* The Editor */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Viết Hook của bạn vào đây..."
                            className="flex-1 w-full p-6 lg:p-8 resize-none text-slate-700 text-base md:text-lg leading-relaxed focus:outline-none"
                            spellCheck="false"
                        />
                        <div className="px-6 py-3 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                            <div className="text-xs text-slate-400 font-medium font-mono">
                                {content.trim().split(" ").filter(Boolean).length} words
                            </div>
                            <div className="text-xs text-slate-400 font-medium">Auto-saved</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* AI Feedback Overlay */}
            <AnimatePresence>
                {showFeedback && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setShowFeedback(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-blue-50 to-violet-50">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                                        <Sparkles className="w-3.5 h-3.5" /> AI Evaluation
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Kết quả Đánh giá</h2>
                                </div>
                                <div className="text-right">
                                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-violet-600">8.5</div>
                                    <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Điểm / 10</div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto">
                                <h4 className="text-sm font-semibold text-slate-900 mb-3">Metrics Chi tiết</h4>
                                <div className="space-y-4 mb-8">
                                    {[
                                        { label: "Sức hút 3s đầu (Hook Strength)", score: 90, color: "bg-emerald-500" },
                                        { label: "Đánh vào nỗi đau (Pain Point)", score: 85, color: "bg-blue-500" },
                                        { label: "Độ ngắn gọn & Rõ ràng", score: 75, color: "bg-amber-500" },
                                    ].map((metric) => (
                                        <div key={metric.label}>
                                            <div className="flex justify-between text-xs font-medium mb-1.5">
                                                <span className="text-slate-600">{metric.label}</span>
                                                <span className="text-slate-900">{metric.score}/100</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2">
                                                <div className={`h-2 rounded-full ${metric.color}`} style={{ width: `${metric.score}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="text-sm font-semibold text-slate-900 mb-3">Gợi ý sửa từ AI Mentor</h4>
                                <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 text-sm text-slate-700 mb-6">
                                    Bạn đã làm rất tốt ở phần mở đầu! Tuy nhiên, nội dung hơi dài (trên 30 chữ).
                                    <br /><br />
                                    <strong>Bản gốc:</strong> "{content}"
                                    <br /><br />
                                    <strong>Đề xuất sửa lại:</strong> "Ồn ào làm bạn mất tập trung? Đeo tai nghe XYZ vào và chìm đắm trong thế giới riêng. Giảm 50% chỉ hôm nay."
                                </div>

                                {/* Reward */}
                                <div className="mx-auto w-fit px-6 py-3 rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50 text-center">
                                    <div className="text-xs text-violet-600 font-bold uppercase tracking-wider mb-1">Phần thưởng</div>
                                    <div className="text-xl font-bold flex items-center justify-center gap-2 text-slate-900">
                                        <Sparkles className="w-5 h-5 text-amber-500" /> +150 XP
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
                                <button
                                    onClick={() => setShowFeedback(false)}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors"
                                >
                                    Thử lại để tăng điểm
                                </button>
                                <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-md">
                                    Qua Quest tiếp theo <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <button onClick={() => setShowFeedback(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-white/50 backdrop-blur rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
