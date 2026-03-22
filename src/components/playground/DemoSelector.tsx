"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Check, Loader2, Heart, X, ShoppingBag, Sparkles } from "lucide-react";

interface DemoSelectorProps {
    brief: string;
    brandContext: string;
    modules: any[];
    onSelect: (selectedImageUrl: string, demoIndex: number) => void;
    onBack: () => void;
}

const DESIGN_STYLES = [
    "Ultra-minimal Scandinavian layout, vast whitespace, thin sans-serif type, muted earth tones, single accent color",
    "Bold brutalist design, stark geometric shapes, large typography, high-contrast black and white with neon accents",
    "Elegant luxury editorial layout, serif fonts, gold/cream palette, magazine-like photography, asymmetric grid",
    "Vibrant Gen-Z aesthetic, rounded shapes, gradient blobs, playful illustrations, bright pastel colors",
    "Corporate enterprise SaaS dashboard, data-rich cards, sidebar navigation, blue-gray professional palette",
    "Retro-futuristic cyberpunk UI, neon glows, dark backgrounds, pixel art accents, terminal-like typography",
    "Organic natural design, soft curves, green tones, texture overlays, hand-drawn illustrations feel",
    "Japanese zen-inspired minimalism, lots of breathing room, delicate line art, black and cream color scheme",
    "Glassmorphism premium, frosted glass cards, depth layers, vibrant gradients behind translucent surfaces",
    "Material design 3, large rounded corners, tonal color system, clean shadows, Google-like modern feel",
];

export default function DemoSelector({ brief, brandContext, modules, onSelect, onBack }: DemoSelectorProps) {
    const [queue, setQueue] = useState<{ imageUrl: string; style: string }[]>([]);
    const [savedDemos, setSavedDemos] = useState<{ imageUrl: string; style: string }[]>([]);
    const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
    const [showBasket, setShowBasket] = useState(false);
    const [totalGenerated, setTotalGenerated] = useState(0);

    const nextStyleIndex = useRef(0);
    const activeRequests = useRef(0);
    const targetQueueSize = 3;

    const fetchMoreIfNeeded = useCallback(() => {
        const currentTotal = queue.length + activeRequests.current;
        if (currentTotal >= targetQueueSize) return;

        const needed = targetQueueSize - currentTotal;
        
        for (let i = 0; i < needed; i++) {
            const idx = nextStyleIndex.current++;
            activeRequests.current++;
            
            const style = DESIGN_STYLES[idx % DESIGN_STYLES.length];
            
            fetch("/api/generate-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    brief: `${brief}\n\nBrand context: ${brandContext}`,
                    modules,
                    variant: idx + 1,
                    styleOverride: style,
                }),
            })
            .then(res => res.json())
            .then(data => {
                if (data.imageUrl) {
                    setQueue(prev => [...prev, { imageUrl: data.imageUrl, style }]);
                }
            })
            .catch(error => {
                console.error("Lỗi khi prefetch demo:", error);
            })
            .finally(() => {
                activeRequests.current--;
                // After one finishes, check if we need more (in case of failures or fast swipes)
                setTimeout(fetchMoreIfNeeded, 100);
            });
        }
    }, [brief, brandContext, modules, queue.length]);

    // Initial load and queue maintenance
    useEffect(() => {
        fetchMoreIfNeeded();
    }, [fetchMoreIfNeeded]);

    // Re-check queue whenever it changes
    useEffect(() => {
        fetchMoreIfNeeded();
    }, [queue.length, fetchMoreIfNeeded]);

    const currentDemo = queue[0] || null;
    const isLoading = queue.length === 0;

    const handleSwipe = (direction: "left" | "right") => {
        if (!currentDemo) return;
        setSwipeDirection(direction);

        if (direction === "right") {
            setSavedDemos(prev => [...prev, currentDemo]);
        }

        setTimeout(() => {
            setSwipeDirection(null);
            setTotalGenerated(prev => prev + 1);
            setQueue(prev => prev.slice(1));
            // The slice will trigger a re-render and the second useState logic will call fetchMoreIfNeeded
        }, 300);
    };

    const handleDragEnd = (_: any, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
            handleSwipe("right");
        } else if (info.offset.x < -threshold) {
            handleSwipe("left");
        }
    };

    const handleSelectFromBasket = (demo: { imageUrl: string }, idx: number) => {
        setShowBasket(false);
        onSelect(demo.imageUrl, idx);
    };

    const handleDownloadImage = (imageUrl: string, name: string) => {
        const a = document.createElement("a");
        a.href = imageUrl;
        a.download = name;
        a.click();
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Bước 1/3
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">Chọn phong cách thiết kế</h2>
                <p className="text-gray-400 text-sm">Vuốt <span className="text-green-400 font-semibold">phải ❤️</span> để lưu, vuốt <span className="text-red-400 font-semibold">trái ✕</span> để bỏ qua. Xem đến khi ưng ý!</p>
            </div>

            {/* Stats bar */}
            <div className="flex items-center justify-between mb-4 px-2">
                <button onClick={onBack} className="text-gray-500 hover:text-white text-sm flex items-center gap-1 transition">
                    <ChevronLeft className="w-4 h-4" /> Quay lại
                </button>
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Đã xem: {totalGenerated}</span>
                    <button onClick={() => setShowBasket(true)}
                        className="relative flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-gray-300 transition">
                        <ShoppingBag className="w-4 h-4" />
                        Đã lưu
                        {savedDemos.length > 0 && (
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
                                {savedDemos.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Card Area */}
            <div className="relative h-[500px] flex items-center justify-center">
                {isLoading && (
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-14 h-14 text-blue-500 animate-spin" />
                        <p className="text-gray-400 text-sm">Đang thiết kế phong cách #{totalGenerated + 1}...</p>
                        <p className="text-gray-600 text-xs italic">Tạo 3 bản demo cùng lúc để bạn xem nhanh hơn...</p>
                    </div>
                )}

                <AnimatePresence>
                    {currentDemo && !isLoading && (
                        <motion.div
                            key={totalGenerated}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={{
                                opacity: 1, scale: 1,
                                rotate: swipeDirection === "left" ? -15 : swipeDirection === "right" ? 15 : 0,
                                x: swipeDirection === "left" ? -500 : swipeDirection === "right" ? 500 : 0,
                            }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 20, stiffness: 200 }}
                            className="absolute cursor-grab active:cursor-grabbing"
                            style={{ touchAction: "none" }}
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0c10]">
                                <img
                                    src={currentDemo.imageUrl}
                                    alt="Demo design"
                                    className="max-w-[600px] max-h-[420px] object-contain"
                                    draggable={false}
                                />
                                {/* Swipe overlay indicators */}
                                <motion.div
                                    className="absolute inset-0 bg-green-500/20 flex items-center justify-center pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileDrag={{ opacity: 0 }}
                                    style={{ opacity: swipeDirection === "right" ? 1 : 0 }}
                                >
                                    <Heart className="w-20 h-20 text-green-400" />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-red-500/20 flex items-center justify-center pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    style={{ opacity: swipeDirection === "left" ? 1 : 0 }}
                                >
                                    <X className="w-20 h-20 text-red-400" />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Action Buttons */}
            {currentDemo && !isLoading && (
                <div className="flex items-center justify-center gap-6 mt-4 pb-8 md:pb-0">
                    <button onClick={() => handleSwipe("left")}
                        className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:scale-110 transition-all">
                        <X className="w-7 h-7" />
                    </button>
                    <button onClick={() => currentDemo && handleDownloadImage(currentDemo.imageUrl, `vibework-demo-${totalGenerated}.png`)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:scale-105 transition-all">
                        <Download className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleSwipe("right")}
                        className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:scale-110 transition-all">
                        <Heart className="w-7 h-7" />
                    </button>
                </div>
            )}

            {/* Basket Modal */}
            <AnimatePresence>
                {showBasket && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-[#12141f] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                            <div className="p-6 border-b border-white/10 flex justify-between items-center shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <ShoppingBag className="w-5 h-5 text-green-400" />
                                        Demo đã lưu ({savedDemos.length})
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">Chọn 1 demo để tiếp tục sang bước tiếp theo</p>
                                </div>
                                <button onClick={() => setShowBasket(false)} className="text-gray-500 hover:text-white transition"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6">
                                {savedDemos.length === 0 ? (
                                    <p className="text-center text-gray-500 py-12">Chưa có demo nào được lưu. Vuốt phải để lưu!</p>
                                ) : (
                                    <div className="grid grid-cols-2 gap-4">
                                        {savedDemos.map((demo, idx) => (
                                            <div key={idx} className="group rounded-xl border border-white/10 overflow-hidden bg-black/30 hover:border-blue-500/30 transition-all">
                                                <img src={demo.imageUrl} alt={`Demo ${idx + 1}`} className="w-full h-48 object-cover" />
                                                <div className="p-3 flex items-center justify-between">
                                                    <span className="text-sm text-gray-400">Demo #{idx + 1}</span>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => handleDownloadImage(demo.imageUrl, `vibework-demo-${idx + 1}.png`)}
                                                            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-gray-400 transition">
                                                            <Download className="w-4 h-4" />
                                                        </button>
                                                        <button onClick={() => handleSelectFromBasket(demo, idx)}
                                                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg font-medium flex items-center gap-1 transition">
                                                            <Check className="w-3 h-3" /> Chọn
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
