"use client";

import { motion } from "framer-motion";
import { Users, Bot, Settings2, Activity } from "lucide-react";
import Link from "next/link";

interface AgentsWidgetProps {
    agents?: any[];
}

export default function AgentsWidget({ agents = [] }: AgentsWidgetProps) {
    const hasAgents = agents.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] p-6 hover:border-cyan-500/30 transition-all duration-500"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">AI Agents đang thuê</h3>
                </div>
            </div>

            <div className="space-y-4">
                {hasAgents ? (
                    agents.map((agent) => (
                        <div key={agent.id} className="relative p-4 rounded-2xl bg-white/5 border border-white/5 overflow-hidden group">
                            {/* Glow on hover */}
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                                    <Bot className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-white font-bold text-sm tracking-tight">{agent.agentName}</h4>
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${agent.status === 'Online' ? 'bg-cyan-400' : 'bg-green-400 animate-pulse'}`} />
                                            <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{agent.status}</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">{agent.taskType}</p>
                                    
                                    {agent.status === "Running" && (
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `45%` }}
                                                className="h-full bg-cyan-500"
                                            />
                                        </div>
                                    )}
                                </div>
                                <button className="p-2 rounded-xl hover:bg-white/5 text-gray-500 hover:text-white transition-all">
                                    <Settings2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center">
                        <p className="text-gray-500 text-sm mb-4">Bạn chưa thuê AI Agent nào.</p>
                        <Link href="/cassie" className="text-[10px] text-cyan-400 font-black uppercase tracking-widest hover:underline">
                            Xem đội ngũ Agent →
                        </Link>
                    </div>
                )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-500" />
                    <span>Hàng đợi: 0 task</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-1.5">
                    <span>Quota: 100% còn lại</span>
                </div>
            </div>
        </motion.div>
    );
}
