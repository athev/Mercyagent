"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import BriefModal from "@/components/marketplace/BriefModal";

const FILTERS = ["Tất cả", "Marketing", "Thiết kế UI/UX", "Phát triển phần mềm", "AI & Automation", "Content"];

export default function MarketplacePage() {
  const { data: session } = useSession();
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [acceptedJobs, setAcceptedJobs] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => {
        if (data.success) setJobs(data.jobs);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleAccept = (jobId: string) => {
    setAcceptedJobs(prev => new Set([...prev, jobId]));
    setJobs(prev => prev.map(j => j.id === jobId ? { ...j, status: "IN_PROGRESS" } : j));
  };

  const filteredJobs = jobs; // Future: filter by category

  const getTimeSince = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Vừa đăng";
    if (hours < 24) return `${hours}h trước`;
    return `${Math.floor(hours / 24)}d trước`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-20 pb-16">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float-badge { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .float-badge { animation: float-badge 3s ease-in-out infinite; }
      `}</style>

      {/* Header Hero */}
      <div className="border-b border-white/[0.06] bg-gradient-to-b from-[#7C3AED]/5 to-transparent mb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#7C3AED]/15 border border-[#7C3AED]/25 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-semibold text-[#7C3AED]">{jobs.length} dự án đang tuyển</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
                AI Marketplace<span className="text-[#0D9488]">.</span>
              </h1>
              <p className="text-[#666] text-base max-w-xl">
                Kết nối dự án thực với mạng lưới AI Trainer, Agent và Freelancer. Xem Brief chi tiết, nhận kèo ngay, bắt đầu làm việc.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={session ? "/trainer/me" : "/api/auth/signin"}
                className="px-5 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full text-sm font-bold transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Hồ sơ Trainer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Filter Bar */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 scrollbar-hide">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeFilter === f
                  ? "bg-white text-black"
                  : "bg-[#111] border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 h-72 animate-pulse">
                <div className="h-3 bg-white/10 rounded w-1/4 mb-4" />
                <div className="h-5 bg-white/10 rounded w-3/4 mb-3" />
                <div className="h-4 bg-white/10 rounded w-full mb-2" />
                <div className="h-4 bg-white/10 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-[#111]/30 border border-white/5 rounded-3xl">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-5">
              <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Chưa có dự án nào</h3>
            <p className="text-[#555] text-sm mb-6">Hãy trở lại sau hoặc đăng dự án đầu tiên của bạn!</p>
            <Link href="/" className="px-5 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-colors">
              Đăng dự án mới
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredJobs.map(job => {
              const brief = job.analysisData?.brief || {};
              const isAccepted = acceptedJobs.has(job.id) || job.status === "IN_PROGRESS";
              const techStack = brief.techStack ? brief.techStack.split(",").slice(0, 3) : [];
              const timelineCount = brief.timeline?.length || 0;
              const checklistTaskCount = brief.checklist?.reduce((acc: number, p: any) => acc + (p.tasks?.length || 0), 0) || 0;

              return (
                <div
                  key={job.id}
                  className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-white/20 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(124,58,237,0.15)] cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedJob(job)}
                >
                  {/* Glow accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#7C3AED]/8 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-[#7C3AED]/15 transition-all duration-500" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Status & Date */}
                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                        isAccepted
                          ? "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/20"
                          : "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/20"
                      }`}>
                        {isAccepted ? "Đang thực hiện" : "Tuyển freelancer"}
                      </span>
                      <span className="text-white/30 text-xs">{getTimeSince(job.createdAt)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors line-clamp-2">
                      {brief.projectTitle || job.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[#666] text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                      {brief.summary || job.description}
                    </p>

                    {/* Tech stack pills */}
                    {techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {techStack.map((tech: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/50 font-medium">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats Row */}
                    <div className="flex gap-4 mb-4 pb-4 border-b border-white/[0.05]">
                      {checklistTaskCount > 0 && (
                        <div className="text-center">
                          <p className="text-white font-bold text-base">{checklistTaskCount}</p>
                          <p className="text-[#555] text-[10px] uppercase">task</p>
                        </div>
                      )}
                      {timelineCount > 0 && (
                        <div className="text-center">
                          <p className="text-white font-bold text-base">{timelineCount}</p>
                          <p className="text-[#555] text-[10px] uppercase">tuần</p>
                        </div>
                      )}
                      <div className="text-center">
                        <p className="text-[#10B981] font-bold text-base truncate max-w-[120px]">
                          {brief.budget || job.budget}
                        </p>
                        <p className="text-[#555] text-[10px] uppercase">ngân sách</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 py-2.5 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/25 text-sm font-semibold transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Xem Brief
                      </button>
                      <button
                        onClick={() => {
                          setSelectedJob(job);
                          setTimeout(() => {}, 100);
                        }}
                        disabled={isAccepted}
                        className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${
                          isAccepted
                            ? "bg-white/5 text-white/30 cursor-not-allowed"
                            : "bg-white text-black hover:bg-gray-100 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        }`}
                      >
                        {isAccepted ? "Đã nhận" : "Nhận Kèo ⚡"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Brief Modal */}
      {selectedJob && (
        <BriefModal
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          onAccept={handleAccept}
        />
      )}
    </div>
  );
}
