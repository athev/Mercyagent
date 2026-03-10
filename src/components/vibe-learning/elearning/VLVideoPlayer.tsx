"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Play, Pause, SkipBack, Maximize, Target, Sparkles, AlertCircle, Volume2, Settings, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VLCheckpointQuiz from "./VLCheckpointQuiz";

// Mock video data
const videoData = {
    title: "Giải phẫu một Hook Viral",
    mentor: "Nexus (Content AI)",
    duration: 180, // 3 minutes total in seconds for demo
    checkpoints: [
        {
            time: 60, // Pop up at 1:00
            id: "cp-1",
            question: "Yếu tố quan trọng nhất trong 3 giây đầu tiên của một Hook là gì?",
            options: [
                "Giới thiệu tên thương hiệu và logo",
                "Đánh trúng Pain Point (nỗi đau) của người xem",
                "Kể một câu chuyện cười dài",
                "Kêu gọi mua hàng ngay lập tức"
            ],
            correctIndex: 1,
            rewindTo: 30, // Rewind to 0:30 if failed
            explanation: "Trong 3s đầu, não bộ user chỉ quyết định lướt hay dừng lại dựa trên việc nội dung có liên quan đến vấn đề của họ hay không."
        }
    ]
};

export default function VLVideoPlayer({ missionId }: { missionId?: string }) {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    // Video State
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(videoData.duration);
    const [maxWatchedTime, setMaxWatchedTime] = useState(0); // Anti-skip tracking

    // Interactive State
    const [activeCheckpoint, setActiveCheckpoint] = useState<any>(null);
    const [showPlayOverlay, setShowPlayOverlay] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Xử lý sự kiện Play/Pause
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setShowPlayOverlay(true);
        } else {
            videoRef.current.play();
            setShowPlayOverlay(false);
        }
        setIsPlaying(!isPlaying);
    };

    // Tracking tiến trình & Checkpoint trigger
    const handleTimeUpdate = () => {
        if (!videoRef.current) return;

        const time = videoRef.current.currentTime;
        setCurrentTime(time);

        // Update anti-skip tracker
        if (time > maxWatchedTime) {
            setMaxWatchedTime(time);
        }

        // Checkpoint Logic Trigger
        const triggerPoint = videoData.checkpoints.find(cp =>
            Math.abs(cp.time - time) < 0.5 && !activeCheckpoint // Within 0.5s margin
        );

        if (triggerPoint) {
            videoRef.current.pause();
            setIsPlaying(false);
            // Slightly push time past checkpoint so it doesn't trigger again immediately on resume
            videoRef.current.currentTime = triggerPoint.time + 1;
            setActiveCheckpoint(triggerPoint);
        }

        // End of video logic -> Auto transition to Workspace
        if (time >= videoData.duration - 0.5 && !isTransitioning) {
            handleVideoComplete();
        }
    };

    const handleVideoComplete = () => {
        setIsTransitioning(true);
        videoRef.current?.pause();

        // Split-screen transition out
        setTimeout(() => {
            router.push("/vibe-learning/quest");
        }, 3000);
    };

    // Chống tua nhanh (Anti skip / Scrubbing logic)
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!progressRef.current || !videoRef.current || activeCheckpoint) return;

        const rect = progressRef.current.getBoundingClientRect();
        const scrubTime = ((e.clientX - rect.left) / rect.width) * duration;

        // Only allow seeking backwards or up to max watched time
        if (scrubTime <= maxWatchedTime) {
            videoRef.current.currentTime = scrubTime;
            setCurrentTime(scrubTime);
        } else {
            // Hiệu ứng từ chối nếu tua quá xa
            alert("Aria: Hãy xem đầy đủ nội dung để nắm chắc kiến thức trước nhé!");
        }
    };

    // Xử lý kết quả Quiz
    const handleQuizResult = (passed: boolean, rewindTo: number) => {
        setActiveCheckpoint(null);

        if (passed) {
            // Cộng XP (Thực tế call API) -> Continue video
            togglePlay();
        } else {
            // Phạt: Ép xem lại
            if (videoRef.current) {
                videoRef.current.currentTime = rewindTo;
                setCurrentTime(rewindTo);
                togglePlay();
            }
        }
    };

    // Format mm:ss
    const formatTime = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="h-screen bg-slate-950 flex flex-col font-sans overflow-hidden">
            {/* Header / Top bar */}
            <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 z-20 bg-slate-950/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <Link href="/vibe-learning/campaign/camp-01" className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white/70 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">
                            Interactive Session
                        </div>
                        <h1 className="text-white font-bold text-sm sm:text-base">
                            {videoData.title}
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-white/70">Attention Tracking: ON</span>
                    </div>
                </div>
            </header>

            {/* Main Player Area */}
            <main className="flex-1 relative flex items-center justify-center overflow-hidden bg-black">

                <AnimatePresence>
                    {isTransitioning && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 z-50 bg-slate-50 flex items-center justify-center p-8"
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mx-auto shadow-xl shadow-emerald-500/20 mb-6"
                                >
                                    <Target className="w-10 h-10" />
                                </motion.div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Đến lúc thực hành!</h2>
                                <p className="text-slate-500 text-lg">Đang chuân bị Quest Workspace...</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Fake Video Element (Using a styled div with gradient for demo purposes) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                    {/* Placeholder for actual <video src="..." /> */}
                    <div className="opacity-20 pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />

                    {/* AI Mentor Presenter Avatar Fake */}
                    <div className="absolute bottom-32 right-12 flex flex-col items-center opacity-80">
                        <div className="w-32 h-32 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center p-4">
                            <div className="w-full h-full rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="text-4xl absolute">🎯</div>
                                {/* Speaking animation */}
                                {isPlaying && (
                                    <div className="absolute bottom-2 flex gap-1">
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: ["4px", "12px", "4px"] }}
                                                transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                                className="w-1 bg-emerald-400 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs text-white/70 font-mono">
                            {videoData.mentor}
                        </div>
                    </div>

                    {/* Fake Subtitles based on time */}
                    {isPlaying && (
                        <div className="absolute bottom-28 w-full text-center px-24">
                            <span className="text-xl md:text-2xl font-bold text-white bg-black/50 px-4 py-1.5 rounded-lg leading-relaxed shadow-lg">
                                {currentTime < 30 ? "Chào mừng đến với hệ thống huấn luyện Vibe Learning." :
                                    currentTime < 60 ? "Hãy chú ý, 3 giây đầu tiên là ranh giới giữa việc khách lướt qua hay ở lại." :
                                        "Bây giờ bạn đã nắm rõ lý thuyết, áp dụng ngay vào Workspace."}
                            </span>
                        </div>
                    )}
                </div>

                {/* Hidden actual video ref tracker */}
                <video
                    ref={videoRef}
                    className="hidden"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoComplete}
                    muted // For autoplay test
                >
                    {/* In a real scenario this needs a valid video src */}
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>

                {/* Play Overlay (Big Button) */}
                <AnimatePresence>
                    {showPlayOverlay && !activeCheckpoint && !isTransitioning && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={togglePlay}
                            className="absolute z-10 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all outline-none"
                        >
                            <Play className="w-10 h-10 ml-2" fill="currentColor" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Interactive Checkpoint Quiz Overlay */}
                <AnimatePresence>
                    {activeCheckpoint && (
                        <VLCheckpointQuiz
                            checkpoint={activeCheckpoint}
                            onResult={handleQuizResult}
                        />
                    )}
                </AnimatePresence>

                {/* Custom Video Controls */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${isPlaying && !activeCheckpoint ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>

                    {/* Timeline bar */}
                    <div
                        ref={progressRef}
                        className="relative w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer group"
                        onClick={handleSeek}
                    >
                        {/* Allowed watch area tracker */}
                        <div
                            className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                            style={{ width: `${(maxWatchedTime / duration) * 100}%` }}
                        />

                        {/* Current progress */}
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform -mr-2" />
                        </div>

                        {/* Checkpoint Markers */}
                        {videoData.checkpoints.map((cp, idx) => (
                            <div
                                key={idx}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 -mt-px -ml-2 rounded-full border-2 border-black bg-amber-400 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                                style={{ left: `${(cp.time / duration) * 100}%` }}
                            >
                                <Lock className="w-2 h-2 text-black" />
                            </div>
                        ))}
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <button onClick={togglePlay} className="text-white hover:text-emerald-400 transition-colors">
                                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                            </button>
                            <button className="text-white hover:text-emerald-400 transition-colors">
                                <SkipBack className="w-5 h-5" />
                            </button>
                            <div className="text-sm font-medium font-mono text-white/80">
                                {formatTime(currentTime)} <span className="text-white/40">/ {formatTime(duration)}</span>
                            </div>
                            <div className="h-4 w-px bg-white/20" />
                            <button className="text-white/80 hover:text-white transition-colors">
                                <Volume2 className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="text-xs font-bold text-white/50 border border-white/20 rounded px-2 py-0.5">1.0x</div>
                            <button className="text-white/80 hover:text-white transition-colors">
                                <Settings className="w-5 h-5" />
                            </button>
                            <button className="text-white/80 hover:text-white transition-colors">
                                <Maximize className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
