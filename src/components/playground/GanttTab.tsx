"use client";

import { useMemo } from "react";
import { Download, CalendarDays } from "lucide-react";

interface GanttTabProps {
    selectedModules: any[];
}

export default function GanttTab({ selectedModules }: GanttTabProps) {
    // Use durationDays from API, cap total at 15 days
    const timelineData = useMemo(() => {
        let currentDayOffset = 0;
        
        return selectedModules.map(m => {
            const durationDays = Math.max(1, m.durationDays || Math.ceil((m.estimatedHours || 8) / 8));
            const startDay = currentDayOffset;
            const endDay = startDay + durationDays - 1;
            
            currentDayOffset += durationDays;
            
            return {
                ...m,
                durationDays,
                startDay,
                endDay
            };
        });
    }, [selectedModules]);

    const totalDays = timelineData.length > 0 
        ? Math.min(15, timelineData[timelineData.length - 1].endDay + 1) 
        : 0;

    const displayDays = Math.max(15, totalDays + 1);

    return (
        <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Biểu đồ Kế hoạch (Gantt)</h3>
                    <p className="text-gray-400">Tiến độ thực hiện dự kiến theo số ngày (1 ngày = 8 giờ làm việc).</p>
                </div>
            </div>

            <div className="flex-1 overflow-auto rounded-2xl border border-white/10 bg-[#0f111a] p-4 relative hidden-scrollbar">
                
                {/* Fixed Left Column for Task Names, Scrollable Right Column for Timeline */}
                <div className="flex min-w-max pb-4">
                    {/* Tasks List */}
                    <div className="w-[180px] sm:w-[240px] md:w-[300px] flex-shrink-0 sticky left-0 z-20 bg-[#0f111a] border-r border-white/10 pr-4">
                        <div className="h-12 flex items-end pb-2 font-bold text-gray-500 text-xs md:text-sm border-b border-white/10 mb-4">
                            HẠNG MỤC CÔNG VIỆC
                        </div>
                        <div className="space-y-4">
                            {timelineData.map((task, idx) => (
                                <div key={task.id} className="h-10 flex flex-col justify-center">
                                    <span className="text-white font-medium truncate text-sm" title={task.title}>
                                        {idx + 1}. {task.title}
                                    </span>
                                    <span className="text-xs text-gray-500">{task.estimatedHours}h ({task.durationDays} ngày)</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="flex-grow pl-4">
                        {/* Days Header */}
                        <div className="h-12 flex items-end border-b border-white/10 mb-4 relative z-10">
                            {Array.from({ length: displayDays }).map((_, i) => (
                                <div key={i} className="w-10 flex-shrink-0 text-center text-xs font-mono text-gray-500 pb-2">
                                    D{i + 1}
                                </div>
                            ))}
                        </div>

                        {/* Chart Area */}
                        <div className="space-y-4 relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex pointer-events-none">
                                {Array.from({ length: displayDays }).map((_, i) => (
                                    <div key={i} className="w-10 flex-shrink-0 border-r border-white/5 h-full" />
                                ))}
                            </div>

                            {/* Task Bars */}
                            {timelineData.map((task, idx) => (
                                <div key={task.id} className="h-10 relative flex items-center group">
                                    {/* The visual bar */}
                                    <div 
                                        className="absolute h-8 rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all hover:brightness-125 flex items-center px-2 z-10"
                                        style={{
                                            left: `${task.startDay * 40}px`,
                                            width: `${task.durationDays * 40}px`
                                        }}
                                    >
                                        <span className="text-[10px] font-bold text-white truncate drop-shadow-md">
                                            {task.durationDays}d
                                        </span>
                                    </div>
                                    
                                    {/* Background row highlight on hover */}
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-lg" 
                                         style={{ width: `${displayDays * 40}px` }} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex items-center gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-600 to-cyan-400" />
                        <span>Thời gian thực hiện</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>Tổng dự án: <strong className="text-white">{totalDays} ngày</strong> làm việc</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
