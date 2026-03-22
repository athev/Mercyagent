"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Plus, Upload, CheckCircle2, ChevronRight, Briefcase, Globe, Megaphone, Target, Search } from "lucide-react";

type DNAData = {
    companyName: string;
    profession: string;
    brandColors: string[];
    logoUrl: string;
    competitors: string[];
    niches: string[];
    toneOfVoice: string;
    extraGuidelines: string;
};

export default function Step4_DNAEditor({ initialDna, onSave }: { initialDna: any, onSave: (dna: any) => void }) {
    const [dna, setDna] = useState<DNAData>({
        companyName: initialDna?.companyName || "",
        profession: initialDna?.profession || "",
        brandColors: initialDna?.brandColors || ["#3b82f6", "#06b6d4", "#ffffff"],
        logoUrl: initialDna?.logoUrl || "",
        competitors: initialDna?.competitors || [],
        niches: initialDna?.niches || [],
        toneOfVoice: initialDna?.toneOfVoice || "Chuyên nghiệp, tin cậy",
        extraGuidelines: initialDna?.extraGuidelines || ""
    });

    const [newCompetitor, setNewCompetitor] = useState("");
    const [newNiche, setNewNiche] = useState("");

    const addColor = () => setDna({ ...dna, brandColors: [...dna.brandColors, "#888888"] });
    const removeColor = (idx: number) => setDna({ ...dna, brandColors: dna.brandColors.filter((_, i) => i !== idx) });
    const updateColor = (idx: number, color: string) => {
        const newColors = [...dna.brandColors];
        newColors[idx] = color;
        setDna({ ...dna, brandColors: newColors });
    };

    const addCompetitor = () => {
        if (newCompetitor && !dna.competitors.includes(newCompetitor)) {
            setDna({ ...dna, competitors: [...dna.competitors, newCompetitor] });
            setNewCompetitor("");
        }
    };

    const addNiche = () => {
        if (newNiche && !dna.niches.includes(newNiche)) {
            setDna({ ...dna, niches: [...dna.niches, newNiche] });
            setNewNiche("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight mb-2">Hoàn thiện DNA 🎨</h2>
                    <p className="text-gray-400">AI đã phác thảo xong, giờ là lúc bạn cá nhân hóa theo đúng ý mình.</p>
                </div>
                <button 
                  onClick={() => onSave(dna)}
                  className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                    Tiếp tục <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Visual Identity Column */}
                <div className="space-y-8">
                    {/* Colors Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold tracking-wide uppercase text-xs">
                           <Palette className="w-4 h-4 text-blue-400" /> Bảng màu thương hiệu
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {dna.brandColors.map((color, idx) => (
                                <div key={idx} className="relative group">
                                    <div 
                                        className="w-14 h-14 rounded-2xl cursor-pointer border-2 border-white/10 hover:border-white/30 transition-all flex items-center justify-center p-0 overflow-hidden"
                                        style={{ backgroundColor: color }}
                                    >
                                        <input 
                                            type="color" value={color} onChange={e => updateColor(idx, e.target.value)}
                                            className="w-full h-full scale-150 cursor-pointer opacity-0"
                                        />
                                    </div>
                                    <button 
                                        onClick={() => removeColor(idx)}
                                        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                            <button 
                                onClick={addColor}
                                className="w-14 h-14 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center text-gray-500 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                            >
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold tracking-wide uppercase text-xs">
                           <Upload className="w-4 h-4 text-cyan-400" /> Biểu tượng / Logo
                        </div>
                        <div className="w-full h-48 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
                           {dna.logoUrl ? (
                               <img src={dna.logoUrl} className="max-h-32 object-contain relative z-10" />
                           ) : (
                               <div className="text-center group-hover:scale-110 transition-transform">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                        <Upload className="w-8 h-8 text-gray-500" />
                                    </div>
                                    <div className="font-bold text-gray-400">Tải Logo lên</div>
                                    <div className="text-[10px] text-gray-600 uppercase mt-1">PNG, SVG, JPG</div>
                               </div>
                           )}
                           <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                           {dna.logoUrl && (
                               <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/10">Thay đổi</button>
                           )}
                        </div>
                    </div>
                    
                    {/* Tone of Voice */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold tracking-wide uppercase text-xs">
                           <Megaphone className="w-4 h-4 text-indigo-400" /> Khẩu vị nội dung (Tone of Voice)
                        </div>
                        <input 
                            type="text" value={dna.toneOfVoice} onChange={e => setDna({...dna, toneOfVoice: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all"
                            placeholder="VD: Hài hước, Trẻ trung, Sang trọng..."
                        />
                    </div>
                </div>

                {/* Market Context Column */}
                <div className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-widest pl-1">Chủ thể thương hiệu</label>
                            <div className="relative">
                                <input 
                                    type="text" value={dna.companyName} onChange={e => setDna({...dna, companyName: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                                    placeholder="Tên doanh nghiệp..."
                                />
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold tracking-widest pl-1">Lĩnh vực hoạt động</label>
                            <div className="relative">
                                <input 
                                    type="text" value={dna.profession} onChange={e => setDna({...dna, profession: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                                    placeholder="VD: Bất động sản, F&B..."
                                />
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                            </div>
                        </div>
                    </div>

                    {/* Niches / Sub-markets */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold tracking-wide uppercase text-xs">
                           <Target className="w-4 h-4 text-pink-400" /> Ngách thị trường (Niches)
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {dna.niches.map(n => (
                                <span key={n} className="bg-pink-500/10 text-pink-300 border border-pink-500/30 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2">
                                    {n} <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setDna({...dna, niches: dna.niches.filter(x => x !== n)})} />
                                </span>
                            ))}
                        </div>
                        <div className="relative">
                            <input 
                                type="text" value={newNiche} onChange={e => setNewNiche(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addNiche()}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all"
                                placeholder="Thêm ngách (VD: Cao cấp, Mini...)"
                            />
                            <button onClick={addNiche} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"><Plus className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Competitors */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold tracking-wide uppercase text-xs">
                           <Search className="w-4 h-4 text-orange-400" /> Đối thủ chính
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {dna.competitors.map(c => (
                                <span key={c} className="bg-orange-500/10 text-orange-300 border border-orange-500/30 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2">
                                    {c} <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setDna({...dna, competitors: dna.competitors.filter(x => x !== c)})} />
                                </span>
                            ))}
                        </div>
                        <div className="relative">
                            <input 
                                type="text" value={newCompetitor} onChange={e => setNewCompetitor(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addCompetitor()}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500/50 transition-all"
                                placeholder="Thêm tên đối thủ..."
                            />
                            <button onClick={addCompetitor} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"><Plus className="w-5 h-5" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Guidelines Card */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-white/10 rounded-[40px] p-10 mt-12">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Lưu ý bổ sung</h3>
                        <p className="text-sm text-gray-500">Bất kỳ sở thích cá nhân nào khác về thiết kế hay phong cách.</p>
                    </div>
                </div>
                <textarea 
                    value={dna.extraGuidelines} onChange={e => setDna({...dna, extraGuidelines: e.target.value})}
                    className="w-full h-32 bg-black/40 border border-white/10 rounded-3xl px-8 py-6 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-all resize-none shadow-inner"
                    placeholder="Hãy viết thêm các yêu cầu đặc biệt của bạn tại đây..."
                />
            </div>
        </motion.div>
    );
}
