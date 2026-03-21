"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Calendar, MonitorPlay } from "lucide-react";
import QuotationTab from "./QuotationTab";
import GanttTab from "./GanttTab";
import DemoTab from "./DemoTab";

interface NextStepsProps {
    brief: string;
    requirements: any[];
    selectedIds: string[];
}

export default function NextSteps({ brief, requirements, selectedIds }: NextStepsProps) {
    const [activeTab, setActiveTab] = useState<"quotation" | "gantt" | "demo">("quotation");
    const selectedModules = requirements.filter(r => selectedIds.includes(r.id));

    const tabs = [
        { id: "quotation", label: "Báo giá PDF", icon: FileText },
        { id: "gantt", label: "Kế hoạch (Gantt)", icon: Calendar },
        { id: "demo", label: "UX/UI Demo", icon: MonitorPlay },
    ] as const;

    return (
        <div className="max-w-6xl mx-auto space-y-8 relative z-10 w-full pb-20">
            <div className="text-center space-y-4 mb-10">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Hoàn tất phân tích!</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Dựa trên các module bạn đã chọn, hệ thống đã tự động tạo ra 3 tài liệu quan trọng để bạn tham khảo.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                                isActive
                                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:border-white/20"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="bg-[#0f111a] border border-white/10 rounded-3xl p-6 md:p-10 min-h-[600px]">
                <AnimatePresence mode="wait">
                    {activeTab === "quotation" && (
                        <motion.div key="quotation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <QuotationTab selectedModules={selectedModules} />
                        </motion.div>
                    )}
                    {activeTab === "gantt" && (
                        <motion.div key="gantt" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <GanttTab selectedModules={selectedModules} />
                        </motion.div>
                    )}
                    {activeTab === "demo" && (
                        <motion.div key="demo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="h-full">
                            <DemoTab brief={brief} selectedModules={selectedModules} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
