"use client";

import { useState, useEffect } from "react";
import { Loader2, RefreshCw, Image as ImageIcon, Download } from "lucide-react";

interface DemoTabProps {
    brief: string;
    selectedModules: any[];
}

export default function DemoTab({ brief, selectedModules }: DemoTabProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [promptDetails, setPromptDetails] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const generateDemo = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/generate-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ brief, modules: selectedModules }),
            });

            if (!response.ok) {
                throw new Error("Lỗi khi kết nối tới AI");
            }

            const data = await response.json();
            if (data.imageUrl) {
                setImageUrl(data.imageUrl);
                setPromptDetails(data.promptDetails);
            } else {
                throw new Error("Không nhận được hình ảnh hợp lệ");
            }
        } catch (err: any) {
            setError(err.message || "Đã có lỗi xảy ra");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        generateDemo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDownload = () => {
        if (!imageUrl) return;
        const a = document.createElement("a");
        a.href = imageUrl;
        a.download = "vibework-uxui-demo.jpg";
        a.target = "_blank";
        a.click();
    };

    return (
        <div className="h-full flex flex-col space-y-4 animate-in fade-in duration-500 min-h-[500px]">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <ImageIcon className="w-6 h-6 text-blue-400" />
                        Bản nháp Giao diện (UX/UI Demo)
                    </h3>
                    <p className="text-gray-400">AI tự động thiết kế một bản vẽ giao diện độ phân giải cao dựa trên ý tưởng và guideline thương hiệu của bạn.</p>
                </div>
                <div className="flex gap-3">
                    {imageUrl && !isLoading && (
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Tải Ảnh
                        </button>
                    )}
                    <button
                        onClick={generateDemo}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                        Đổi Option khác
                    </button>
                </div>
            </div>

            <div className="flex-1 rounded-2xl border border-white/10 bg-[#0a0c10] relative overflow-hidden shadow-2xl flex flex-col">
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f111a]/90 backdrop-blur-md z-20">
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold text-xl mb-2">
                            AI đang vẽ ý tưởng của bạn...
                        </p>
                        <p className="text-gray-500 text-sm">Quá trình này có thể mất từ 10 - 20 giây để xuất ảnh chất lượng cao.</p>
                    </div>
                )}

                {error && !isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f111a] z-20">
                        <p className="text-red-400 mb-4">{error}</p>
                        <button onClick={generateDemo} className="px-6 py-2 bg-red-500/20 text-red-300 font-medium rounded-lg hover:bg-red-500/30 transition">
                            Thử lại
                        </button>
                    </div>
                )}

                {!isLoading && !error && imageUrl && (
                    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center p-4">
                        <img 
                            src={imageUrl} 
                            alt="UX UI Demo generated by AI" 
                            className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/5"
                            onError={() => setError("Không thể tải ảnh từ máy chủ. Định dạng không được hỗ trợ hoặc đường truyền có vấn đề.")}
                        />
                    </div>
                )}
                
                {promptDetails && !isLoading && !error && (
                    <div className="mt-auto p-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
                        <p className="text-xs text-gray-500 font-mono flex items-start gap-2">
                            <span className="text-blue-500 font-bold uppercase tracking-wider shrink-0 mt-0.5">Prompt:</span>
                            <span>{promptDetails}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
