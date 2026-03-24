"use client";

import { useState, useRef } from "react";

type ChecklistPhase = { phase: string; tasks: string[] };
type TimelineWeek = { week: string; title: string; tasks: string[] };
type BudgetItem = { item: string; cost: string };

interface BriefData {
  projectTitle?: string;
  summary?: string;
  techStack?: string;
  targetAudience?: string;
  budget?: string;
  notes?: string;
  checklist?: ChecklistPhase[];
  timeline?: TimelineWeek[];
  budgetBreakdown?: BudgetItem[];
  deliverables?: string[];
  successCriteria?: string | string[];
  // Legacy fields
  scope?: string;
}

interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  status: string;
  createdAt: string;
  analysisData?: {
    brief?: BriefData;
    steps?: any[];
    [key: string]: any;
  };
}

interface BriefModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onAccept?: (jobId: string) => void;
}

const TABS = [
  { id: "overview", label: "Tổng quan", icon: "📋" },
  { id: "checklist", label: "Kế hoạch", icon: "☑️" },
  { id: "timeline", label: "Timeline", icon: "📅" },
  { id: "budget", label: "Chi phí", icon: "💰" },
];

export default function BriefModal({ job, isOpen, onClose, onAccept }: BriefModalProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAccepting, setIsAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const brief: BriefData = job.analysisData?.brief || {};
  const hasChecklist = brief.checklist && brief.checklist.length > 0;
  const hasTimeline = brief.timeline && brief.timeline.length > 0;
  const hasBudget = brief.budgetBreakdown && brief.budgetBreakdown.length > 0;

  const handleAccept = async () => {
    setIsAccepting(true);
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "IN_PROGRESS" }),
      });
      if (res.ok) {
        setAccepted(true);
        onAccept?.(job.id);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsAccepting(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const el = printRef.current;
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: "#0a0a0a", useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = (canvas.height * pageW) / canvas.width;
      let y = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();
      while (y < pageH) {
        pdf.addImage(imgData, "PNG", 0, -y, pageW, pageH);
        y += pageHeight;
        if (y < pageH) pdf.addPage();
      }
      pdf.save(`brief-${job.title.replace(/\s+/g, "-")}.pdf`);
    } catch (e) {
      console.error("Lỗi tải PDF:", e);
    } finally {
      setIsDownloading(false);
    }
  };

  const successList = Array.isArray(brief.successCriteria)
    ? brief.successCriteria
    : brief.successCriteria
    ? [brief.successCriteria]
    : [];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-start justify-between px-8 py-6 border-b border-white/[0.07] bg-gradient-to-r from-[#7C3AED]/10 to-[#0D9488]/5">
          <div className="flex-1 min-w-0 pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#10B981]/15 text-[#10B981] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#10B981]/20">
                {job.status === "IN_PROGRESS" ? "Đang thực hiện" : "Đang tuyển"}
              </span>
              <span className="text-white/30 text-xs">{new Date(job.createdAt).toLocaleDateString("vi-VN")}</span>
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight mb-1">{brief.projectTitle || job.title}</h2>
            <p className="text-[#888] text-sm">{brief.targetAudience && `Đối tượng: ${brief.targetAudience}`}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-sm font-semibold text-white/70 hover:text-white transition-all"
            >
              {isDownloading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              )}
              Tải PDF
            </button>
            <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-8 py-3 border-b border-white/[0.07] bg-black/20">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div ref={printRef} className="flex-1 overflow-y-auto p-8">

          {/* --- TAB: Tổng quan --- */}
          {activeTab === "overview" && (
            <div className="space-y-5">
              {brief.summary && (
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                    <span>📋</span> Tóm tắt dự án
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">{brief.summary}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">⚙️ Tech Stack</p>
                  <p className="text-white/85 text-sm leading-relaxed">{brief.techStack || "Sẽ được xác định"}</p>
                </div>
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">💰 Ngân sách</p>
                  <p className="text-white font-bold text-lg">{brief.budget || job.budget}</p>
                </div>
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">👥 Đối tượng</p>
                  <p className="text-white/85 text-sm">{brief.targetAudience || "Đang xác định"}</p>
                </div>
              </div>

              {brief.deliverables && brief.deliverables.length > 0 && (
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-3">📦 Sản phẩm bàn giao</p>
                  <div className="space-y-2">
                    {brief.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488] text-[10px] font-bold shrink-0">{i + 1}</span>
                        <span className="text-white/80">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {successList.length > 0 && (
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-3">✅ Tiêu chí hoàn thành</p>
                  <div className="space-y-2">
                    {successList.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="text-[#10B981] mt-0.5">✓</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {brief.notes && (
                <div className="bg-[#111]/80 border border-white/[0.07] rounded-2xl p-5">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">📎 Ghi chú & Tham khảo</p>
                  <p className="text-white/70 text-sm leading-relaxed">{brief.notes}</p>
                </div>
              )}
            </div>
          )}

          {/* --- TAB: Kế hoạch (Checklist) --- */}
          {activeTab === "checklist" && (
            <div className="space-y-6">
              {hasChecklist ? (
                brief.checklist!.map((phase, pi) => (
                  <div key={pi}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#0D9488] flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {pi + 1}
                      </div>
                      <h3 className="text-white font-bold text-base">{phase.phase}</h3>
                    </div>
                    <div className="space-y-2 pl-10">
                      {phase.tasks.map((task, ti) => (
                        <div key={ti} className="flex items-start gap-3 p-3 bg-[#111] border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
                          <div className="w-5 h-5 rounded border-2 border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#7C3AED]/50 transition-colors">
                          </div>
                          <span className="text-white/80 text-sm leading-relaxed">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 text-white/30">
                  <p className="text-lg">Chưa có Checklist chi tiết</p>
                  <p className="text-sm mt-2">Brief này chưa được tạo với cấu trúc Checklist mới</p>
                </div>
              )}
            </div>
          )}

          {/* --- TAB: Timeline --- */}
          {activeTab === "timeline" && (
            <div>
              {hasTimeline ? (
                <div className="relative">
                  <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#0D9488] to-transparent" />
                  <div className="space-y-8">
                    {brief.timeline!.map((week, wi) => (
                      <div key={wi} className="flex gap-6">
                        <div className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#0D9488] flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                          {wi + 1}
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-wider">{week.week}</span>
                            <h3 className="text-white font-bold">{week.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {week.tasks.map((task, ti) => (
                              <div key={ti} className="flex items-start gap-2 text-sm text-white/70">
                                <span className="text-[#0D9488] shrink-0 mt-0.5">→</span>
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-white/30">
                  <p className="text-lg">Chưa có Timeline chi tiết</p>
                </div>
              )}
            </div>
          )}

          {/* --- TAB: Chi phí --- */}
          {activeTab === "budget" && (
            <div className="space-y-4">
              {hasBudget ? (
                <>
                  <div className="overflow-hidden rounded-2xl border border-white/[0.07]">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/[0.04] border-b border-white/[0.07]">
                          <th className="text-left px-5 py-3 text-[#555] text-[10px] uppercase tracking-wider font-bold">Hạng mục</th>
                          <th className="text-right px-5 py-3 text-[#555] text-[10px] uppercase tracking-wider font-bold">Chi phí</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brief.budgetBreakdown!.map((item, i) => (
                          <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                            <td className="px-5 py-4 text-white/80">{item.item}</td>
                            <td className="px-5 py-4 text-white font-semibold text-right">{item.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-[#7C3AED]/10 border-t border-[#7C3AED]/20">
                          <td className="px-5 py-4 text-white font-bold">Tổng dự toán</td>
                          <td className="px-5 py-4 text-white font-bold text-right text-lg">{brief.budget || job.budget}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-2xl p-4">
                    <p className="text-[#F59E0B] text-xs font-bold mb-1">⚠️ Lưu ý</p>
                    <p className="text-white/60 text-xs">Chi phí trên là ước tính. Số thực tế có thể thay đổi dựa trên yêu cầu cụ thể sau khi trao đổi chi tiết với Freelancer.</p>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-white font-bold text-2xl mb-2">{brief.budget || job.budget}</p>
                  <p className="text-white/40 text-sm">Ngân sách tổng. Chi tiết sẽ được thoả thuận sau khi nhận kèo.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-white/[0.07] bg-black/30 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-white/40 text-xs">Nhận kèo = xác nhận bạn đọc và đồng ý với toàn bộ yêu cầu trong Brief này</p>
          </div>
          {accepted ? (
            <div className="flex items-center gap-2 px-6 py-3 bg-[#10B981]/20 border border-[#10B981]/30 rounded-full text-[#10B981] font-bold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Đã nhận kèo thành công!
            </div>
          ) : (
            <button
              onClick={handleAccept}
              disabled={isAccepting || job.status === "IN_PROGRESS"}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                job.status === "IN_PROGRESS"
                  ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/5"
                  : "bg-white text-black hover:bg-gray-100 hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              }`}
            >
              {isAccepting ? (
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )}
              {job.status === "IN_PROGRESS" ? "Đã có người nhận" : "Nhận Kèo Ngay ⚡"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
