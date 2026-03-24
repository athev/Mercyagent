import React, { useState, useEffect } from "react";
import Link from "next/link";

type ModalPhase = "loading" | "result" | "clarifying" | "summarizing" | "brief" | "success";
interface ClarifyAnswer { id: number; question: string; answer: string; }

function VibeServiceModal({ isOpen, onClose, userPrompt }: { isOpen: boolean; onClose: () => void; userPrompt: string }) {
  const [phase, setPhase] = useState<ModalPhase>("loading");
  const [plan, setPlan] = useState<any>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<number | null>(null);
  const [selectedOptionalSteps, setSelectedOptionalSteps] = useState<Record<string, boolean>>({});
  const [clarifyQuestions, setClarifyQuestions] = useState<any[]>([]);
  const [clarifyAnswers, setClarifyAnswers] = useState<Record<number, string>>({});
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [brief, setBrief] = useState<any>(null);

  useEffect(() => {
    if (isOpen && userPrompt) {
      setPhase("loading");
      setPlan(null);
      setBrief(null);
      setSelectedSupplier(null);
      setSelectedOptionalSteps({});
      setClarifyQuestions([]);
      setClarifyAnswers({});
      setCurrentQIdx(0);

      fetch("/api/analyze-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt })
      })
        .then(res => res.json())
        .then(data => { setPlan(data); setPhase("result"); })
        .catch(() => setPhase("result"));
    }
  }, [isOpen, userPrompt]);

  const toggleOptionalStep = (id: string) => {
    setSelectedOptionalSteps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStartMarketplaceFlow = async () => {
    setPhase("clarifying");
    const selectedAddons = plan.optionalSteps?.filter((s: any) => selectedOptionalSteps[String(s.id)]) || [];
    const res = await fetch("/api/clarify-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userPrompt, analysisData: { ...plan, selectedOptionalSteps: selectedAddons }, answers: [] })
    });
    const data = await res.json();
    setClarifyQuestions(data.questions || []);
    setCurrentQIdx(0);
  };

  const handleNextQuestion = () => {
    if (currentQIdx < clarifyQuestions.length - 1) {
      setCurrentQIdx(prev => prev + 1);
    } else {
      handleSummarizeBrief();
    }
  };

  // Helper: get display answer for a question (handles both single and multiple)
  const getAnswerDisplay = (q: any): string => {
    if (q?.type === "multiple") {
      const arr: string[] = clarifyAnswers[q.id + "_multi"] ? JSON.parse(clarifyAnswers[q.id + "_multi"]) : [];
      return arr.join(", ");
    }
    return clarifyAnswers[q?.id] || "";
  };

  const isAnswered = (q: any): boolean => {
    if (!q) return false;
    if (q.type === "multiple") {
      const arr: string[] = clarifyAnswers[q.id + "_multi"] ? JSON.parse(clarifyAnswers[q.id + "_multi"]) : [];
      return arr.length > 0;
    }
    return !!clarifyAnswers[q.id];
  };

  const toggleMultiOption = (qId: number, label: string) => {
    const key = qId + "_multi";
    const current: string[] = clarifyAnswers[key] ? JSON.parse(clarifyAnswers[key]) : [];
    const updated = current.includes(label) ? current.filter(x => x !== label) : [...current, label];
    setClarifyAnswers(prev => ({ ...prev, [key]: JSON.stringify(updated) }));
  };

    const handleSummarizeBrief = async () => {
      setPhase("summarizing");
      try {
        const getAnswer = (q: any) => {
          if (q.type === "multiple") {
            const arr: string[] = clarifyAnswers[q.id + "_multi"] ? JSON.parse(clarifyAnswers[q.id + "_multi"]) : [];
            const note = clarifyAnswers[q.id + "_note"] || "";
            return (arr.join(", ") || "Không có") + (note ? ` (Ghi chú: ${note})` : "");
          }
          const single = clarifyAnswers[q.id] || "Không có";
          const note = clarifyAnswers[q.id + "_note"] || "";
          return single + (note ? ` (Ghi chú: ${note})` : "");
        };
        const answers: ClarifyAnswer[] = clarifyQuestions.map((q: any) => ({
          id: q.id,
          question: q.question,
          answer: getAnswer(q)
        }));
        const res = await fetch("/api/clarify-job", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: userPrompt, analysisData: plan, answers })
        });
        if (!res.ok) throw new Error("API call failed");
        const data = await res.json();
        if (data.brief) {
          setBrief(data.brief);
          setPhase("brief");
        } else {
          throw new Error("No brief data returned");
        }
      } catch (err) {
        console.error("Lỗi Summarize Brief:", err);
        setBrief(null);
        setPhase("brief"); // We still go to brief phase but it will show 'Error' state
      }
    };

  const handlePostToMarketplace = async () => {
    const selectedAddons = plan?.optionalSteps?.filter((s: any) => selectedOptionalSteps[String(s.id)]) || [];
    const lines = [
      brief?.summary ? ("**Tóm tắt:** " + brief.summary) : ("**Yêu cầu:** " + userPrompt),
      brief?.scope ? ("**Phạm vi:** " + brief.scope) : "",
      brief?.techStack ? ("**Tech Stack:** " + brief.techStack) : "",
      brief?.targetAudience ? ("**Người dùng cuối:** " + brief.targetAudience) : "",
      brief?.timeline ? ("**Timeline:** " + brief.timeline) : "",
      brief?.budget ? ("**Ngân sách:** " + brief.budget) : "",
      brief?.successCriteria ? ("**Tiêu chí hoàn thành:** " + brief.successCriteria) : "",
      brief?.notes ? ("**Ghi chú:** " + brief.notes) : "",
    ].filter(Boolean);

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: brief?.projectTitle || plan?.analysis || "Dự án mới",
        description: lines.join("\n"),
        analysisData: { ...plan, brief, selectedOptionalSteps: selectedAddons },
        budget: brief?.budget || "Thoả thuận"
      })
    });
    if (res.ok) setPhase("success");
  };

  if (!isOpen) return null;

  const currentQ = clarifyQuestions[currentQIdx];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}>
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Top bar */}
        <div className="flex justify-between items-center px-5 py-3.5 border-b border-white/[0.06] bg-[#000]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-white/50 text-xs font-mono">vibe_service.ai</span>
          </div>
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {(["result","clarifying","brief","success"] as ModalPhase[]).map((p, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${phase === p || (phase === "summarizing" && p === "brief") ? "bg-white" : "bg-white/20"}`} />
            ))}
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* === LOADING === */}
        {phase === "loading" && (
          <div className="flex-1 flex flex-col items-center justify-center p-16 min-h-[400px]">
            <style>{`
              @keyframes scan { 0%{transform:translateY(-10px);opacity:0} 50%{opacity:1} 100%{transform:translateY(10px);opacity:0} }
              .scan-line { animation: scan 1.5s cubic-bezier(0.4,0,0.2,1) infinite; }
              @keyframes pulseRing { 0%{transform:scale(0.8);opacity:0.5} 100%{transform:scale(1.5);opacity:0} }
              .pulse-ring { animation: pulseRing 2s cubic-bezier(0.4,0,0.2,1) infinite; }
            `}</style>
            <div className="relative w-24 h-24 flex items-center justify-center mb-6">
              <div className="absolute inset-0 border-2 border-[#7C3AED]/30 rounded-full pulse-ring" />
              <div className="absolute inset-0 border-2 border-[#0D9488]/30 rounded-full pulse-ring" style={{ animationDelay: "1s" }} />
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#0D9488] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                <svg className="w-6 h-6 text-white scan-line" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
            </div>
            <p className="text-white font-bold text-lg mb-2">AI đang phân tích yêu cầu...</p>
            <p className="text-[#666] text-sm max-w-sm text-center">Tìm kiếm workflow, agent phù hợp và matching nhà cung cấp tốt nhất.</p>
          </div>
        )}

        {/* === RESULT === */}
        {phase === "result" && plan && (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4">
              <p className="text-[#555] text-[10px] uppercase tracking-wider mb-2 font-bold">Nhu cầu của bạn</p>
              <p className="text-white/80 text-sm leading-relaxed">&ldquo;{userPrompt}&rdquo;</p>
              <p className="text-[#0D9488] text-xs mt-3 flex items-center gap-1.5 font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                {plan.analysis || plan.requirement || "Yêu cầu dự án"}
              </p>
            </div>

            <div>
              <p className="text-[#555] text-[10px] uppercase tracking-wider mb-3 font-bold">Core Tasks (Bắt buộc)</p>
              <div className="space-y-2">
                {plan.steps?.map((s: any, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#111] border border-white/[0.04] rounded-xl">
                    <span className="w-7 h-7 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[10px] font-bold text-[#10B981] shrink-0">✓</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-sm font-medium truncate">{s.task}</p>
                      <p className="text-[#555] text-[10px]">🤖 {s.agent} · ⏱ {s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {plan.optionalSteps && plan.optionalSteps.length > 0 && (
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-wider mb-3 font-bold">Add-ons (Tùy chọn)</p>
                <div className="space-y-2">
                  {plan.optionalSteps.map((s: any, i: number) => {
                    const key = String(s.id || "opt-" + i);
                    const checked = selectedOptionalSteps[key];
                    return (
                      <div key={i} onClick={() => toggleOptionalStep(key)}
                        className={"flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all " + (checked ? "bg-[#7C3AED]/10 border-[#7C3AED]/30" : "bg-[#111] border-white/[0.04] hover:bg-white/[0.02]")}>
                        <div className={"w-5 h-5 rounded border flex items-center justify-center shrink-0 " + (checked ? "bg-[#7C3AED] border-[#7C3AED]" : "border-white/20 bg-black")}>
                          {checked && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={"text-sm font-medium truncate " + (checked ? "text-white" : "text-white/60")}>{s.task}</p>
                          <p className="text-[#555] text-[10px]">🤖 {s.agent} · ⏱ {s.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {!plan.requiresMarketplace && plan.suppliers && plan.suppliers.length > 0 ? (
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-wider mb-3 font-bold">Nhà Cung Cấp Đề Xuất</p>
                <div className="space-y-2">
                  {plan.suppliers.map((sup: any, i: number) => (
                    <button key={i} onClick={() => setSelectedSupplier(i)}
                      className={"w-full flex items-center gap-4 p-3.5 rounded-xl border text-left transition-all " + (selectedSupplier === i ? "border-[#7C3AED]/50 bg-gradient-to-r from-[#7C3AED]/10 to-transparent" : "border-white/[0.06] bg-[#111] hover:bg-white/[0.02]")}>
                      <div className="w-9 h-9 rounded-full bg-[#222] border border-white/10 flex items-center justify-center text-white/80 text-sm font-bold shrink-0">{sup.name[0]}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-white/90 text-sm font-semibold">{sup.name}</p>
                          {sup.tag && <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase" style={{ color: sup.tagColor || "#7C3AED", background: (sup.tagColor || "#7C3AED") + "18" }}>{sup.tag}</span>}
                        </div>
                        <p className="text-[#F59E0B] text-[11px] font-bold">★ {sup.rating}</p>
                      </div>
                      <span className="text-white font-bold text-sm">{sup.price}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <Link href="#" className={"py-3.5 w-full flex items-center justify-center rounded-full bg-white text-black font-bold text-sm transition-all " + (selectedSupplier === null ? "opacity-30 cursor-not-allowed pointer-events-none" : "hover:bg-gray-100")}>
                    Bắt đầu dự án cùng {selectedSupplier !== null ? plan.suppliers[selectedSupplier].name : "Supplier"} →
                  </Link>
                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="mx-4 text-white/30 text-xs">Hoặc</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>
                  <button onClick={handleStartMarketplaceFlow} className="py-3 w-full border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/5 font-semibold text-sm transition-all">
                    Đăng lên Chợ Yêu Cầu (Marketplace) →
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-5 text-center">
                <p className="text-white/90 font-semibold mb-2">Dự án cần tính chuyên môn hoá cao</p>
                <p className="text-[#888] text-xs mb-5">Hệ thống gợi ý bạn nên đăng lên Marketplace để các AI Trainer &amp; Freelancer chào giá.</p>
                <button onClick={handleStartMarketplaceFlow}
                  className="py-3.5 w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm rounded-full transition-colors flex items-center justify-center gap-2">
                  Tiếp tục: Hỏi làm rõ yêu cầu
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            )}
          </div>
        )}

        {/* === CLARIFYING: Trắc nghiệm === */}
        {phase === "clarifying" && (
          <div className="flex-1 flex flex-col p-6 min-h-[400px]">
            {clarifyQuestions.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-[#7C3AED]/40 border-t-[#7C3AED] rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white/60 text-sm">AI đang phân tích và soạn câu hỏi...</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Progress */}
                <div className="flex justify-between items-center mb-3 shrink-0">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold">Xác nhận yêu cầu chi tiết</p>
                  <span className="text-white/30 text-xs">{currentQIdx + 1} / {clarifyQuestions.length}</span>
                </div>
                <div className="flex gap-1 mb-5 shrink-0">
                  {clarifyQuestions.map((_: any, i: number) => (
                    <div key={i} className={"h-1 flex-1 rounded-full transition-colors " + (i <= currentQIdx ? "bg-[#7C3AED]" : "bg-white/10")} />
                  ))}
                </div>

                {/* Question bubble */}
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-2xl p-4 mb-4 shrink-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base leading-relaxed">{currentQ?.question}</p>
                      {currentQ?.context && <p className="text-[#888] text-xs mt-1 italic">{currentQ.context}</p>}
                    </div>
                  </div>
                </div>

                {/* Type badge */}
                <div className="flex items-center gap-2 mb-3 shrink-0">
                  {currentQ?.type === "multiple" ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0D9488]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                      Có thể chọn nhiều
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#888]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="currentColor" /></svg>
                      Chọn 1 đáp án
                    </span>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2.5 mb-4">
                  {currentQ?.type === "multiple" ? (
                    // CHECKBOX mode: multiple selection
                    currentQ?.options?.map((opt: any, i: number) => {
                      const selected: string[] = clarifyAnswers[currentQ.id + "_multi"] ? JSON.parse(clarifyAnswers[currentQ.id + "_multi"]) : [];
                      const isChecked = selected.includes(opt.label);
                      return (
                        <button
                          key={i}
                          onClick={() => toggleMultiOption(currentQ.id, opt.label)}
                          className={"w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 " +
                            (isChecked
                              ? "bg-[#0D9488]/15 border-[#0D9488]/50 text-white"
                              : "bg-[#111] border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5")}
                        >
                          <span className={"w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-colors " + (isChecked ? "bg-[#0D9488] border-[#0D9488]" : "border-white/20 bg-transparent")}>
                            {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </span>
                          {opt.label}
                        </button>
                      );
                    })
                  ) : (
                    // RADIO mode: single selection only
                    currentQ?.options?.map((opt: any, i: number) => {
                      const isSelected = clarifyAnswers[currentQ?.id] === opt.label;
                      return (
                        <button
                          key={i}
                          onClick={() => setClarifyAnswers(prev => ({ ...prev, [currentQ?.id]: opt.label }))}
                          className={"w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 " +
                            (isSelected
                              ? "bg-[#7C3AED] border-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                              : "bg-[#111] border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5")}
                        >
                          <span className={"w-5 h-5 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors " + (isSelected ? "border-white" : "border-white/20")}>
                            {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white block" />}
                          </span>
                          {opt.label}
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Custom note (optional) */}
                {currentQ?.allowCustom && (
                  <div className="mb-4">
                    <p className="text-[#555] text-[10px] uppercase tracking-wider mb-2 font-bold">Ghi chú thêm (không bắt buộc)</p>
                    <textarea
                      value={clarifyAnswers[currentQ?.id + "_note"] || ""}
                      onChange={e => setClarifyAnswers(prev => ({ ...prev, [currentQ?.id + "_note"]: e.target.value }))}
                      placeholder="Thêm chi tiết nếu muốn..."
                      className="w-full bg-[#111] border border-white/10 focus:border-white/30 rounded-xl p-3 text-white placeholder-white/25 text-sm resize-none h-16 focus:outline-none transition-colors"
                    />
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-auto shrink-0">
                  {currentQIdx > 0 && (
                    <button onClick={() => setCurrentQIdx(prev => prev - 1)} className="px-5 py-3 border border-white/10 rounded-full text-white/60 hover:text-white text-sm font-semibold transition-colors">
                      ← Quay lại
                    </button>
                  )}
                  <button
                    onClick={handleNextQuestion}
                    disabled={!isAnswered(currentQ)}
                    className={"flex-1 py-3 font-bold rounded-full text-sm transition-all relative overflow-hidden group " +
                      (isAnswered(currentQ)
                        ? "bg-white text-black bg-[length:200%_auto] hover:bg-gradient-to-r hover:from-white hover:to-gray-200"
                        : "bg-white/10 text-white/30 cursor-not-allowed")}
                  >
                    {isAnswered(currentQ) && (
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
                    )}
                    <span className="relative z-10">{currentQIdx < clarifyQuestions.length - 1 ? "Câu tiếp theo →" : "Xem Brief được AI lập →"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* === SUMMARIZING === */}
        {phase === "summarizing" && (
          <div className="flex-1 flex flex-col items-center justify-center p-16 min-h-[400px]">
            <div className="w-10 h-10 border-2 border-[#0D9488]/40 border-t-[#0D9488] rounded-full animate-spin mb-4"></div>
            <p className="text-white font-bold text-lg mb-2">AI đang tổng hợp Brief...</p>
            <p className="text-[#666] text-sm text-center">Đang biên soạn bản mô tả dự án hoàn chỉnh cho các Trainer tham khảo.</p>
          </div>
        )}

        {/* === BRIEF Preview === */}
        {phase === "brief" && (
          (brief && Object.keys(brief).length > 0) ? (
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-black/20">
              {/* Header */}
              <div className="pb-4 border-b border-white/[0.06]">
                <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-1">Brief Dự Án Hoàn Thiện ✓</p>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {typeof brief.projectTitle === 'object' ? JSON.stringify(brief.projectTitle) : (brief.projectTitle || "Bản Brief Dự Án")}
                </h3>
              </div>

              {/* Summary card */}
              {brief.summary && (
                <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-4">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">📋 Tóm tắ dự án</p>
                  <p className="text-white/80 text-sm leading-relaxed">{brief.summary}</p>
                </div>
              )}

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#111] border border-white/[0.06] rounded-xl p-3 text-center">
                  <p className="text-[#7C3AED] font-bold text-xl">{brief.checklist?.reduce((a: number, p: any) => a + (p.tasks?.length || 0), 0) || "—"}</p>
                  <p className="text-[#555] text-[10px] uppercase">Tasks</p>
                </div>
                <div className="bg-[#111] border border-white/[0.06] rounded-xl p-3 text-center">
                  <p className="text-[#0D9488] font-bold text-xl">{brief.timeline?.length || "—"}</p>
                  <p className="text-[#555] text-[10px] uppercase">Tuần</p>
                </div>
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-3 text-center">
                  <p className="text-white font-bold text-xs truncate">{brief.budget || "Thoả thuận"}</p>
                  <p className="text-[#555] text-[10px] uppercase">Budget</p>
                </div>
              </div>

              {/* Checklist preview */}
              {brief.checklist && brief.checklist.length > 0 && (
                <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-4">
                  <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-3">☑️ Kế hoạch thực hiện</p>
                  <div className="space-y-3">
                    {brief.checklist.slice(0, 2).map((phase: any, pi: number) => (
                      <div key={pi}>
                        <p className="text-white/60 text-xs font-semibold mb-1.5">{phase.phase}</p>
                        <div className="space-y-1">
                          {phase.tasks.slice(0, 3).map((task: string, ti: number) => (
                            <div key={ti} className="flex items-center gap-2 text-sm text-white/70">
                              <div className="w-4 h-4 rounded border border-white/20 flex-shrink-0" />
                              <span>{task}</span>
                            </div>
                          ))}
                          {phase.tasks.length > 3 && (
                            <p className="text-[#555] text-xs pl-6">+{phase.tasks.length - 3} tasks nữa...</p>
                          )}
                        </div>
                      </div>
                    ))}
                    {brief.checklist.length > 2 && (
                      <p className="text-[#555] text-xs">+{brief.checklist.length - 2} giai đoạn nữa — xem đầy đủ trên Marketplace</p>
                    )}
                  </div>
                </div>
              )}

              {/* Tech & Deliverables */}
              <div className="grid grid-cols-2 gap-3">
                {brief.techStack && (
                  <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4">
                    <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">⚙️ Tech Stack</p>
                    <p className="text-white/70 text-xs leading-relaxed">{brief.techStack}</p>
                  </div>
                )}
                {brief.deliverables && brief.deliverables.length > 0 && (
                  <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4">
                    <p className="text-[#555] text-[10px] uppercase tracking-wider font-bold mb-2">📦 Bàn giao</p>
                    <div className="space-y-1">
                      {brief.deliverables.slice(0, 3).map((d: string, i: number) => (
                        <p key={i} className="text-white/70 text-xs flex items-center gap-1">
                          <span className="text-[#10B981]">✓</span> {d}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-col gap-3 sticky bottom-0 bg-[#0A0A0A]/90 backdrop-blur-sm -mx-6 -mb-6 px-6 pb-6 border-t border-white/[0.06] mt-2">
                <button onClick={handlePostToMarketplace} className="py-4 w-full bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
                  Phê duyệt & Đăng Lên Chợ Việc Làm 🚀
                </button>
                <button onClick={() => setPhase("clarifying")} className="py-2.5 w-full border border-white/10 rounded-full text-white/50 hover:text-white text-sm transition-colors font-medium">
                  ← Cần sửa đổi thêm
                </button>
              </div>
            </div>
          ) : (
            /* Error state */
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Không thể tạo Brief Dự án</h3>
              <p className="text-[#666] text-sm mb-6 max-w-xs">AI gặp lỗi khi tổng hợp thông tin hoặc phản hồi không đúng định dạng. Vui lòng thử lại.</p>
              <button onClick={handleSummarizeBrief} className="px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
                Thử lại ngay
              </button>
            </div>
          )
        )}

        {/* === SUCCESS === */}
        {phase === "success" && (
          <div className="p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Đăng việc thành công!</h3>
            <p className="text-[#888] mb-6 max-w-sm">Phiếu yêu cầu đầy đủ thông tin đã được đăng lên Marketplace. Các AI Trainer &amp; Freelancer AI sẽ sớm liên hệ để báo giá.</p>
            <Link href="/marketplace" className="px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">Vào Chợ Việc Làm</Link>
          </div>
        )}
      </div>
    </div>
  );
}

interface Attachment {
  id: string;
  type: "link" | "file";
  value: string;
  fileObj?: File;
}

export default function HPPlaygroundHero() {
  const [prompt, setPrompt] = useState("");
  const [cat, setCat] = useState("Marketing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleAddLink = () => {
    if (!linkInput.trim()) return;
    setAttachments(prev => [...prev, { id: Math.random().toString(), type: "link", value: linkInput.trim() }]);
    setLinkInput("");
    setShowLinkInput(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAttachments(prev => [...prev, { id: Math.random().toString(), type: "file", value: file.name, fileObj: file }]);
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(a => a.id !== id));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim()) return;
    
    let finalPrompt = prompt;
    if (attachments.length > 0) {
      finalPrompt += "\n\n[Tài liệu đính kèm/Tham khảo]:\n" + attachments.map(a => `- ${a.type === 'link' ? 'Link' : 'File'}: ${a.value}`).join("\n");
    }
    
    setSubmittedPrompt(finalPrompt);
    setIsModalOpen(true);
  };

  return (
    <>
      <style>{`
        .dotted-bg {
          background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .glow-orb-1 { background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 60%); }
        .glow-orb-2 { background: radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 60%); }
        .glass-box {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .glass-box:focus-within {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.8), 0 0 40px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.15);
        }
      `}</style>

      <section className="relative w-full min-h-[90vh] bg-black flex flex-col items-center justify-center overflow-hidden pt-14">
        <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] glow-orb-1 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-1/4 w-[60vw] h-[60vw] glow-orb-2 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white text-center tracking-tight leading-[0.95] mb-4" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Làm việc với<br />
            <span className="text-transparent bg-clip-text text-white">tốc độ của AI</span>
          </h1>
          <p className="text-[#888] text-lg md:text-xl text-center mb-12 max-w-2xl font-medium">
            Hệ sinh thái AI tích hợp sâu. Giao việc, uỷ quyền, tự động hoá — tất cả bắt đầu từ một dấu nhắc.
          </p>

          <div className="w-full max-w-3xl glass-box rounded-3xl p-3 flex flex-col transition-all duration-300 group">
            <div className="relative">
              {/* Preview Attachments */}
              {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 px-4 pt-4 pb-2">
                  {attachments.map(a => (
                    <div key={a.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111] border border-white/10 rounded-lg text-xs font-medium text-white/80 group">
                      {a.type === 'link' ? (
                        <svg className="w-3.5 h-3.5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                      )}
                      <span className="truncate max-w-[200px]">{a.value}</span>
                      <button onClick={() => removeAttachment(a.id)} className="ml-1 justify-center rounded-full w-4 h-4 text-white/40 hover:text-white hover:bg-white/20 transition-colors">
                        <svg className="w-3 h-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
                placeholder="Bạn cần AI giải quyết dự án gì hôm nay? Ví dụ: Thiết kế landing page, phân tích dữ liệu..."
                className="w-full bg-transparent text-white placeholder-white/30 text-lg md:text-xl p-4 md:p-5 resize-none focus:outline-none min-h-[120px] leading-relaxed"
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-2 pt-4 border-t border-white/5 mt-auto relative">
              <div className="flex items-center gap-1.5 md:gap-3 relative">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="group relative w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  <span className="absolute -top-8 bg-black border border-white/10 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">File/Tài liệu</span>
                </button>
                <button onClick={() => setShowLinkInput(!showLinkInput)} className="group relative w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  <span className="absolute -top-8 bg-black border border-white/10 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Đính kèm Link</span>
                </button>
                
                {/* Link input popover */}
                {showLinkInput && (
                  <div className="absolute top-12 left-0 w-64 bg-[#111] p-3 rounded-xl border border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex gap-2">
                      <input 
                        autoFocus
                        value={linkInput}
                        onChange={(e) => setLinkInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleAddLink(); }}
                        placeholder="Dán link tại đây (Fanpage, Drive...)" 
                        className="flex-1 bg-black border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7C3AED]"
                      />
                      <button onClick={handleAddLink} className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-200">
                        Thêm
                      </button>
                    </div>
                  </div>
                )}

                <div className="hidden sm:flex items-center bg-[#111] border border-white/10 rounded-full p-1 ml-2">
                  {["Marketing", "Tech", "Khác"].map(c => (
                    <button key={c} onClick={() => setCat(c)} className={"px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors " + (cat === c ? "bg-white/20 text-white" : "text-white/40 hover:text-white/80")}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />Gặp Tư Vấn
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim()}
                  className={"w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 relative group overflow-hidden " + (prompt.trim() ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-white/10 text-white/30 cursor-not-allowed")}>
                  {prompt.trim() && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#7C3AED]/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full" />}
                  <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6 opacity-60">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Powered by</span>
            <div className="flex gap-4 items-center grayscale opacity-80">
              <span className="font-serif italic text-sm">OpenAI</span>
              <span className="font-bold text-sm font-mono">Anthropic</span>
              <span className="font-sans font-bold text-sm tracking-tight">Google</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
          <span className="text-white text-[10px] uppercase tracking-widest font-bold">Khám phá</span>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <VibeServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userPrompt={submittedPrompt} />
    </>
  );
}
