"use client";

import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Lock, Play, Star, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data based on the BA plan: Path > Campaign > Stage > Mission
const campaignData = {
    id: "camp-01",
    title: "Content Optimization 101",
    path: "Content AI",
    mentor: {
        name: "Nexus",
        role: "Content AI",
        avatar: "bg-emerald-100 text-emerald-600",
    },
    totalXp: 1200,
    progress: 35,
    stages: [
        {
            id: "stage-1",
            title: "Giai đoạn 1: Foundations",
            description: "Nắm vững nguyên lý cốt lõi của viral content.",
            missions: [
                {
                    id: "m-101",
                    title: "Giải phẫu một Hook Viral",
                    type: "video_quest",
                    duration: "05:20",
                    xp: 150,
                    status: "completed", // completed, unlocked, locked
                    score: 8.5,
                },
                {
                    id: "m-102",
                    title: "Tìm kiếm Pain Point bằng AI",
                    type: "video_quest",
                    duration: "08:15",
                    xp: 200,
                    status: "unlocked",
                },
            ],
        },
        {
            id: "stage-2",
            title: "Giai đoạn 2: Advanced Copywriting",
            description: "Áp dụng framework vào thực tế bán hàng.",
            missions: [
                {
                    id: "m-201",
                    title: "Framework PAS & AIDA 2024",
                    type: "video_quest",
                    duration: "10:00",
                    xp: 300,
                    status: "locked",
                },
                {
                    id: "m-202",
                    title: "Tối ưu hóa Content đa nền tảng",
                    type: "video_quest",
                    duration: "07:45",
                    xp: 250,
                    status: "locked",
                },
                {
                    id: "m-203",
                    title: "Boss Fight: Landing Page Copy",
                    type: "boss",
                    duration: "15:00",
                    xp: 500,
                    status: "locked",
                },
            ],
        },
    ],
};

export default function VLCampaignMap() {
    const [selectedMission, setSelectedMission] = useState<any>(campaignData.stages[0].missions[1]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 sm:px-6 sticky top-0 z-20">
                <div className="flex-1 flex items-center gap-4">
                    <Link href="/vibe-learning" className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-0.5">
                            Campaign • {campaignData.path}
                        </div>
                        <h1 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                            {campaignData.title}
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-2">
                        <div className="text-right">
                            <div className="text-[11px] font-bold text-slate-500 uppercase">Tiến độ</div>
                            <div className="text-sm font-bold text-slate-900">{campaignData.progress}%</div>
                        </div>
                        <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                style={{ width: `${campaignData.progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 p-4 py-8 sm:p-8">

                {/* Left: Campaign Map (Sắp xếp theo chiều dọc) */}
                <div className="flex-1 w-full max-w-2xl">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                        {/* Decorative BG */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Campaign Map</h2>
                            <p className="text-slate-500 text-sm">Hoàn thành Mission tuần tự để mở khóa chặng tiếp theo. Quest phải đạt điểm &gt;7/10.</p>
                        </div>

                        <div className="space-y-12 relative z-10">
                            {/* Đường thẳng Line dọc kết nối các stage */}
                            <div className="absolute left-[27px] top-24 bottom-10 w-0.5 bg-slate-100 -z-10" />

                            {campaignData.stages.map((stage, stageIdx) => (
                                <div key={stage.id} className="relative">
                                    {/* Stage Header */}
                                    <div className="flex items-center gap-4 mb-6 relative bg-white pr-4 w-fit">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md z-10 pl-1">
                                            S{stageIdx + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900">{stage.title}</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">{stage.description}</p>
                                        </div>
                                    </div>

                                    {/* Missions List */}
                                    <div className="space-y-4 ml-12 sm:ml-16">
                                        {stage.missions.map((mission, mIdx) => {
                                            const isActive = mission.status === "unlocked";
                                            const isDone = mission.status === "completed";
                                            const isLocked = mission.status === "locked";
                                            const isSelected = selectedMission?.id === mission.id;

                                            return (
                                                <div
                                                    key={mission.id}
                                                    onClick={() => setSelectedMission(mission)}
                                                    className={`relative flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${isSelected
                                                        ? isActive ? "border-emerald-400 bg-emerald-50/50 shadow-md" : "border-slate-300 bg-slate-50 shadow-sm"
                                                        : isLocked ? "border-transparent hover:bg-slate-50" : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"
                                                        } ${isLocked ? "opacity-60" : ""}`}
                                                >
                                                    {/* Node Connector (Ngang) */}
                                                    <div className="absolute -left-[50px] sm:-left-[66px] top-1/2 -translate-y-1/2 w-10 sm:w-14 h-0.5 bg-slate-100 -z-10" />

                                                    {/* Node Icon/Status */}
                                                    <div className={`absolute -left-[58px] sm:-left-[74px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] bg-white z-10 flex items-center justify-center ${isDone ? "border-emerald-500" : isActive ? "border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "border-slate-200"
                                                        }`}>
                                                        {isActive && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                                                    </div>

                                                    <div className="flex-1 flex gap-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isDone ? "bg-emerald-100 text-emerald-600" :
                                                            isActive ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md" :
                                                                "bg-slate-100 text-slate-400"
                                                            }`}>
                                                            {mission.type === "boss" ? <Star className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                                        </div>

                                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                            <div className="flex items-center justify-between gap-2 mb-1">
                                                                <h4 className={`font-semibold truncate ${isSelected ? "text-slate-900" : "text-slate-700"} ${isLocked ? "text-slate-500" : ""}`}>
                                                                    {mission.title}
                                                                </h4>
                                                                {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                                                                {isLocked && <Lock className="w-4 h-4 text-slate-300 flex-shrink-0" />}
                                                            </div>
                                                            <div className="flex items-center gap-3 text-xs font-medium">
                                                                <span className={isLocked ? "text-slate-400" : "text-slate-500"}>{mission.duration}</span>
                                                                <span className={isLocked ? "text-slate-400" : "text-emerald-600"}>+{mission.xp} XP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Mission Detail Panel (Fixed on scroll for desktop) */}
                <div className="w-full lg:w-[400px] xl:w-[450px] lg:sticky lg:top-24">
                    {selectedMission ? (
                        <motion.div
                            key={selectedMission.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
                        >
                            {selectedMission.status === "locked" ? (
                                <div className="p-8 text-center bg-slate-50 flex flex-col items-center justify-center min-h-[400px]">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
                                        <Lock className="w-6 h-6 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Chưa mở khóa</h3>
                                    <p className="text-sm text-slate-500 px-4">
                                        Chuỗi nhiệm vụ tuyến tính. Bạn phải hoàn thành Mission trước đó với **điểm Quest &gt; 7/10** để truy cập nội dung này.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className={`p-8 relative overflow-hidden ${selectedMission.status === "completed" ? "bg-emerald-50" : "bg-gradient-to-br from-slate-900 to-slate-800"}`}>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${selectedMission.status === "completed" ? "bg-emerald-200/50 text-emerald-800" : "bg-white/20 text-white"
                                                    }`}>
                                                    {selectedMission.type === "boss" ? "Boss Fight" : "Standard Mission"}
                                                </span>
                                                {selectedMission.status === "completed" && (
                                                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-500 text-white uppercase tracking-wider flex items-center gap-1">
                                                        <CheckCircle2 className="w-3 h-3" /> Đã hoàn thành
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className={`text-2xl font-bold leading-tight mb-4 ${selectedMission.status === "completed" ? "text-slate-900" : "text-white"}`} style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                                {selectedMission.title}
                                            </h3>

                                            {selectedMission.status === "completed" ? (
                                                <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Điểm Quest AI</div>
                                                        <div className="text-2xl font-bold text-emerald-600">{selectedMission.score}<span className="text-sm text-slate-400">/10</span></div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">XP Đã nhận</div>
                                                        <div className="text-lg font-bold text-slate-900">+{selectedMission.xp}</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-6 mt-6">
                                                    <div className="text-white">
                                                        <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Thời lượng</div>
                                                        <div className="font-bold">{selectedMission.duration}</div>
                                                    </div>
                                                    <div className="text-emerald-400">
                                                        <div className="text-[10px] font-bold text-emerald-400/50 uppercase tracking-wider mb-1">Thưởng</div>
                                                        <div className="font-bold">+{selectedMission.xp} XP</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Briefing</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                Nhiệm vụ này yêu cầu bạn xem một đoạn video hướng dẫn thực tế từ Mentor Nexus, sau đó trực tiếp áp dụng kiến thức để thực thi Quest trong Workspace.
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                                            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Play className="w-3 h-3 ml-0.5" /></div>
                                                Interactive Video Insight
                                            </div>
                                            <div className="w-px h-3 bg-slate-200 ml-3" />
                                            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center"><BookOpen className="w-3 h-3" /></div>
                                                Pop-up Quiz (Giữa video)
                                            </div>
                                            <div className="w-px h-3 bg-slate-200 ml-3" />
                                            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="w-3 h-3" /></div>
                                                Practical Quest Evaluated by AI
                                            </div>
                                        </div>

                                        {selectedMission.status === "completed" ? (
                                            <div className="flex gap-3">
                                                <button className="flex-1 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
                                                    Xem lại Feedback
                                                </button>
                                                <Link href={`/vibe-learning/video/${selectedMission.id}`} className="flex-1 flex justify-center items-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors">
                                                    <Play className="w-4 h-4" /> Xem lại bài
                                                </Link>
                                            </div>
                                        ) : (
                                            <Link
                                                href={`/vibe-learning/video/${selectedMission.id}`}
                                                className="w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                            >
                                                Bắt đầu ngay <ChevronRight className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ) : (
                        <div className="h-full min-h-[500px] border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400">
                            Chọn một nhiệm vụ trên Map
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
