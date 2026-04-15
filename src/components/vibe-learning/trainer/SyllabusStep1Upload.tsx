"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles, Upload, Loader2, CheckCircle, AlertCircle, Info, X,
  FileText, ArrowRight, BookOpen, Bot
} from "lucide-react";
import type { SyllabusData } from "./SyllabusWizard";

// Khóa học Demo Chiến Lược AI
const DEMO_SYLLABUS: Partial<SyllabusData> = {
  section1: {
    courseNameVI: "Chiến lược AI dành cho Lãnh đạo doanh nghiệp",
    courseNameEN: "AI Strategy for Business Leaders",
    courseCode: "AIS-2025",
    duration: "8 buổi (16 giờ)",
    format: "Trực tiếp",
    location: "Hà Nội",
    language: "Tiếng Việt"
  },
  section2: {
    marketContext: "Trong bối cảnh chuyển đổi số, AI không còn là lựa chọn mà là yếu tố sống còn. Tuy nhiên, hơn 70% doanh nghiệp thất bại trong việc triển khai AI do thiếu tầm nhìn chiến lược từ ban lãnh đạo.",
    dataStat: "Khoảng 60% CEO toàn cầu đang đẩy mạnh đầu tư vào AI tạo sinh trong năm 2024.",
    dataSource: "Khảo sát CEO toàn cầu của PwC, 2024"
  },
  section3: {
    benefits: [
      "Hiểu rõ bản chất và tiềm năng ứng dụng thực tế của AI trong doanh nghiệp",
      "Xây dựng được lộ trình triển khai AI (AI Roadmap) tối ưu chi phí",
      "Quản trị rủi ro và xây dựng khung đạo đức AI (AI Ethics) cho tổ chức"
    ]
  },
  section4: {
    targetGroups: ["C-Level (CEO, CMO, CTO)", "Giám đốc chiến lược", "Quản lý cấp trung hướng đến chuyển đổi số"]
  },
  section5: {
    modules: [
      {
        sessionNumber: 1,
        title: "Tổng quan bức tranh AI toàn cầu",
        keyContent: ["Lịch sử và các giai đoạn phát triển AI", "Phân biệt AI, Machine Learning, Deep Learning, GenAI", "Tác động của AI đến mô hình kinh doanh truyền thống"],
        learningOutcome: "Học viên nắm vững bản chất công nghệ AI và cách tư duy ứng dụng thay vì tư duy công cụ."
      },
      {
        sessionNumber: 2,
        title: "Xác định Use-case và Tính ROI",
        keyContent: ["Khung đánh giá độ ưu tiên Use-case AI", "Bài toán build vs buy", "Cách tính ROI cho dự án AI"],
        learningOutcome: "Học viên tự xây dựng được 3-5 use-case phù hợp nhất với phòng ban của mình."
      }
    ]
  },
  section6: {
    instructors: [
      {
        name: "Nguyễn Văn A",
        title: "Chuyên gia Chuyển đổi số & Cố vấn AI",
        experience: "10 năm kinh nghiệm tư vấn chiến lược cho các tập đoàn lớn. Cựu giám đốc công nghệ tập đoàn X."
      }
    ]
  },
  section7: {
    teachingMethod: "Học qua ví dụ thực tế (Case study), thảo luận nhóm, và thực hành xây dựng khung chiến lược ngay tại lớp.",
    practiceActivities: ["Thực hành chọn Use-case", "Mô phỏng xử lý khủng hoảng truyền thông với AI", "Thuyết trình lộ trình AI"],
    certificationCriteria: "Học viên tham dự ≥ 80% thời lượng và hoàn thành bài thuyết trình dự án cuối khóa đạt điểm B trở lên."
  }
};

interface MissingQuestion {
  sectionKey: string;
  question: string;
  options?: string[];
  aiSuggestion?: string;
}

interface AIResult {
  section1?: any; section2?: any; section3?: any; section4?: any;
  section5?: any; section6?: any; section7?: any;
  missingQuestions?: MissingQuestion[];
}

interface Props {
  data: SyllabusData;
  onApply: (result: Partial<SyllabusData>) => void;
}

const EXAMPLE_INPUTS = [
  "Khóa học Chiến lược AI dành cho Lãnh đạo doanh nghiệp, 8 buổi, trực tiếp tại Hà Nội. Nội dung: AI fundamentals, Prompt Engineering, AI trong Marketing, AI trong Vận hành, v.v.",
  "Marketing 4.0 với AI - 6 buổi online. Module: Social Media AI, Content Generation, Data Analytics, ROI tracking. Giảng viên: Nguyễn Văn A - CMO với 15 năm kinh nghiệm",
];

export default function SyllabusStep1Upload({ data, onApply }: Props) {
  const [rawInput, setRawInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const [error, setError] = useState("");
  const [applied, setApplied] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const analyze = async () => {
    if (rawInput.trim().length < 10) {
      setError("Vui lòng nhập ít nhất 10 ký tự để phân tích.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    setApplied(false);

    try {
      const res = await fetch("/api/syllabus/ai-assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawInput, existingData: data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Lỗi phân tích");
      setResult(json.result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Lỗi không xác định");
    } finally {
      setLoading(false);
    }
  };

  const apply = () => {
    if (!result) return;
    
    // Merge answers from multiple choice back into sections
    const mergedResult = { ...result };
    
    // Auto-map answers if we can parse the section
    Object.entries(selectedAnswers).forEach(([qIndex, answer]) => {
      const q = result.missingQuestions?.[parseInt(qIndex)];
      if (q && q.sectionKey) {
        const sk = q.sectionKey as keyof AIResult;
        if (sk.startsWith("section")) {
          // just dump it as a raw string field to let step 2 pick it up 
          // (Requires robust mapping, for hackathon demo we just append to the most likely array field or as a note)
          // Simple approach: we just pass the section to onApply, so we inject this answer
          if (!mergedResult[sk]) mergedResult[sk] = {};
          
          if (sk === "section4") mergedResult.section4 = { ...mergedResult.section4, targetGroups: [answer] };
          if (sk === "section3") mergedResult.section3 = { ...mergedResult.section3, benefits: [answer] };
          if (sk === "section7") mergedResult.section7 = { ...mergedResult.section7, teachingMethod: answer };
        }
      }
    });

    onApply(mergedResult as Partial<SyllabusData>);
    setApplied(true);
  };

  const loadDemo = () => {
    onApply(DEMO_SYLLABUS);
    setApplied(true);
  };

  const filledSections = Object.values(data).filter(Boolean).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left: Input panel */}
      <div className="lg:col-span-3 space-y-4">
        
        {/* Load Demo Banner */}
        <div className="p-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-between text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm">Demo: Khóa học Chiến lược AI</p>
              <p className="text-white/70 text-xs mt-0.5">Nạp đề cương mẫu chuẩn Vibework Academy</p>
            </div>
          </div>
          <button 
            onClick={loadDemo}
            className="px-4 py-2 bg-white text-violet-700 text-xs font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Nạp Demo
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Nạp tài liệu để AI phân tích</h2>
              <p className="text-xs text-slate-500">Paste outline, giáo trình, tóm tắt khóa học của bạn</p>
            </div>
          </div>

          <textarea
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            rows={12}
            placeholder="Dán nội dung tại đây...

Ví dụ:
- Tên khóa học, số buổi, hình thức
- Danh sách các chủ đề / modules
- Thông tin giảng viên
- Đối tượng học viên mục tiêu
- Mục tiêu khóa học..."
            className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none placeholder:text-slate-400 leading-relaxed"
          />

          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-slate-400">{rawInput.length} ký tự</span>
            <button
              onClick={analyze}
              disabled={loading || rawInput.trim().length < 10}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-violet-500/25 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Đang phân tích...</>
              ) : (
                <><Sparkles className="w-4 h-4" /> Phân tích với AI</>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-3 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Example inputs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Ví dụ nhanh
          </p>
          <div className="space-y-2">
            {EXAMPLE_INPUTS.map((ex, i) => (
              <button
                key={i}
                onClick={() => setRawInput(ex)}
                className="w-full text-left px-3 py-2.5 rounded-xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all text-xs text-slate-600 hover:text-violet-700 leading-relaxed"
              >
                <FileText className="w-3 h-3 inline mr-1.5 text-violet-400" />
                {ex.slice(0, 80)}...
              </button>
            ))}
          </div>
        </div>

        {/* Current fill status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Tiến độ điền sections
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => {
              const key = `section${n}` as keyof SyllabusData;
              const filled = !!data[key];
              return (
                <div key={n} className="flex-1">
                  <div className={`h-1.5 rounded-full ${filled ? "bg-emerald-500" : "bg-slate-200"}`} />
                  <p className={`text-[9px] mt-1 text-center font-medium ${filled ? "text-emerald-600" : "text-slate-400"}`}>S{n}</p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">{filledSections}/7 sections đã có nội dung</p>
        </div>
      </div>

      {/* Right: AI result panel */}
      <div className="lg:col-span-2 space-y-4">
        {!result && !loading && (
          <div className="bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white border border-violet-200 flex items-center justify-center shadow-sm">
              <Sparkles className="w-6 h-6 text-violet-500" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2">AI sẽ phân tích & pre-fill</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Nhập tài liệu của bạn và nhấn "Phân tích với AI". AI sẽ tự động điền các sections có thể, và liệt kê các câu hỏi còn thiếu.
            </p>
            <div className="mt-4 space-y-2 text-left">
              {[
                "Tự động điền 7 sections",
                "Danh sách câu hỏi bắt buộc",
                "Đề xuất theo chuẩn Vibework",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-500" />
                  <span className="text-xs text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
            <Loader2 className="w-8 h-8 text-violet-500 animate-spin mx-auto mb-4" />
            <p className="text-sm font-medium text-slate-700">Đang phân tích tài liệu...</p>
            <p className="text-xs text-slate-400 mt-1">AI đang xử lý theo tiêu chuẩn Vibework Academy</p>
          </div>
        )}

        {result && !applied && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {/* Success card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <p className="text-sm font-semibold text-emerald-800">Phân tích xong!</p>
              </div>
              <p className="text-xs text-emerald-700">
                AI đã điền sẵn một số sections.
                Nhấn "Áp dụng" để nạp vào form.
              </p>
              <button
                onClick={apply}
                className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                Áp dụng kết quả
              </button>
            </div>

            {/* Missing questions as Multiple Choice */}
            {result.missingQuestions && result.missingQuestions.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Cần bổ sung {result.missingQuestions.length} thông tin</h4>
                    <p className="text-[10px] text-slate-500">Giảng viên vui lòng trả lời hoặc chọn gợi ý của AI</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {result.missingQuestions.map((q, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <p className="text-sm font-bold text-slate-800 mb-3">
                        <span className="text-violet-600 mr-1.5">{i + 1}.</span>
                        {q.question}
                      </p>

                      {/* Options */}
                      {q.options && q.options.length > 0 ? (
                        <div className="space-y-2 mb-3">
                          {q.options.map((opt, oi) => {
                            const isSelected = selectedAnswers[i] === opt;
                            return (
                              <label key={oi} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                                isSelected ? "border-violet-500 bg-violet-50" : "border-slate-200 hover:border-violet-300 bg-white"
                              }`}>
                                <input 
                                  type="radio" 
                                  name={`mq-${i}`} 
                                  className="mt-0.5 accent-violet-600" 
                                  checked={isSelected}
                                  onChange={() => setSelectedAnswers(p => ({ ...p, [i]: opt }))}
                                />
                                <span className={`text-xs ${isSelected ? "font-semibold text-violet-800" : "text-slate-600"}`}>{opt}</span>
                              </label>
                            );
                          })}
                        </div>
                      ) : (
                        <input 
                          type="text" 
                          placeholder="Câu trả lời của bạn..."
                          value={selectedAnswers[i] || ""}
                          onChange={(e) => setSelectedAnswers(p => ({ ...p, [i]: e.target.value }))}
                          className="w-full text-xs p-3 border border-slate-200 rounded-lg bg-white mb-3 focus:ring-2 focus:ring-violet-400 outline-none"
                        />
                      )}

                      {/* AI Suggestion Badge */}
                      {q.aiSuggestion && (
                        <div className="flex items-start gap-2 p-2.5 bg-indigo-50 border border-indigo-100 rounded-lg">
                          <Bot className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wide">AI Đề xuất</span>
                            <p className="text-xs text-indigo-700 italic mt-0.5">"{q.aiSuggestion}"</p>
                            
                            {q.options && q.options.includes(q.aiSuggestion) && selectedAnswers[i] !== q.aiSuggestion && (
                              <button 
                                onClick={() => setSelectedAnswers(p => ({ ...p, [i]: q.aiSuggestion! }))}
                                className="mt-1.5 text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300"
                              >
                                Chọn đề xuất này
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {applied && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center"
          >
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
            <p className="text-sm font-bold text-emerald-800">Đã áp dụng!</p>
            <p className="text-xs text-emerald-600 mt-1">
              Chuyển sang bước 2 để hoàn thiện các sections còn thiếu.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
