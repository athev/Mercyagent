"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AlertCircle, Target, ShieldAlert, Sparkles, AlertTriangle } from "lucide-react";
import VLXPParticles from "./VLXPParticles";

interface CheckpointQuizProps {
    checkpoint: {
        id: string;
        question: string;
        options: string[];
        correctIndex: number;
        rewindTo: number;
        explanation: string;
    };
    onResult: (passed: boolean, rewindTo: number) => void;
}

export default function VLCheckpointQuiz({ checkpoint, onResult }: CheckpointQuizProps) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const isCorrect = selectedIdx === checkpoint.correctIndex;

    const handleSubmit = () => {
        if (selectedIdx === null) return;
        setHasSubmitted(true);
        setAttempts(prev => prev + 1);
    };

    const handleContinue = () => {
        if (isCorrect) {
            onResult(true, 0);
        } else {
            if (attempts >= 2) {
                // Thất bại 2 lần -> Ép xem lại
                onResult(false, checkpoint.rewindTo);
            } else {
                // Thử lại lần 1
                setHasSubmitted(false);
                setSelectedIdx(null);
            }
        }
    };

    return (
        <div className="absolute inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                        <AlertCircle className="w-24 h-24 text-white" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                            <Target className="w-3.5 h-3.5" /> Interactive Checkpoint
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                            {checkpoint.question}
                        </h3>
                    </div>
                </div>

                {/* Body - Options */}
                <div className="p-6">
                    <div className="space-y-3 mb-6">
                        {checkpoint.options.map((opt, idx) => {
                            let stateClass = "border-slate-200 bg-white hover:border-slate-300 text-slate-700";

                            if (hasSubmitted) {
                                if (idx === checkpoint.correctIndex) {
                                    stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200";
                                } else if (idx === selectedIdx) {
                                    stateClass = "border-rose-500 bg-rose-50 text-rose-900";
                                } else {
                                    stateClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
                                }
                            } else if (selectedIdx === idx) {
                                stateClass = "border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-200";
                            }

                            return (
                                <button
                                    key={idx}
                                    disabled={hasSubmitted}
                                    onClick={() => setSelectedIdx(idx)}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-sm md:text-base ${stateClass}`}
                                >
                                    <span className="inline-block w-6 font-bold opacity-50 mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    {/* Result Feedback & AI Mentor Message */}
                    {hasSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className={`mb-6 p-4 rounded-2xl border flex gap-4 ${isCorrect ? "bg-emerald-50 border-emerald-100" : "bg-rose-50 border-rose-100"
                                }`}
                        >
                            <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-900 flex items-center justify-center text-xl shadow-sm">
                                🎯
                            </div>
                            <div>
                                <h4 className={`text-sm font-bold mb-1 ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
                                    {isCorrect ? "Chính xác! Mentor phản hồi:" : "Sai rồi! Mentor phản hồi:"}
                                </h4>
                                <p className={`text-sm leading-relaxed ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}>
                                    {checkpoint.explanation}
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                            {attempts > 0 && !isCorrect && (
                                <span className="text-rose-500 flex items-center gap-1 bg-rose-50 px-2 py-1 rounded">
                                    <AlertTriangle className="w-3 h-3" /> Lượt {attempts}/2
                                </span>
                            )}
                        </div>

                        {!hasSubmitted ? (
                            <button
                                onClick={handleSubmit}
                                disabled={selectedIdx === null}
                                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
                            >
                                Xác nhận
                            </button>
                        ) : (
                            <button
                                onClick={handleContinue}
                                className={`px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2 ${isCorrect
                                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                                    : attempts >= 2
                                        ? "bg-rose-600 text-white hover:bg-rose-700"
                                        : "bg-amber-500 text-white hover:bg-amber-600"
                                    }`}
                            >
                                {isCorrect ? (
                                    <>Tiếp tục Video <Sparkles className="w-4 h-4" /></>
                                ) : attempts >= 2 ? (
                                    <>Xem lại đoạn vừa rồi <ShieldAlert className="w-4 h-4" /></>
                                ) : (
                                    "Thử lại lần nữa"
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Gamification: Particle effect burst on correct answer submission */}
            {hasSubmitted && isCorrect && <VLXPParticles amount={20} />}
        </div>
    );
}
