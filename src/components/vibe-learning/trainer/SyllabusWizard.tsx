"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Sparkles, FileText, Eye, CheckCircle, ChevronRight, ChevronLeft, AlertCircle, Loader2
} from "lucide-react";
import SyllabusStep1Upload from "./SyllabusStep1Upload";
import SyllabusStep2Form from "./SyllabusStep2Form";
import SyllabusStep3Preview from "./SyllabusStep3Preview";

export interface Section1 {
  courseNameVI: string; courseNameEN: string; courseCode: string;
  duration: string; format: string; location: string; language: string;
}
export interface Section2 { marketContext: string; dataStat: string; dataSource: string; }
export interface Section3 { benefits: string[]; }
export interface Section4 { targetGroups: string[]; }
export interface Section5Module { sessionNumber: number; title: string; keyContent: string[]; learningOutcome: string; }
export interface Section5 { modules: Section5Module[]; }
export interface Section6Instructor { name: string; title: string; experience: string; }
export interface Section6 { instructors: Section6Instructor[]; }
export interface Section7 { teachingMethod: string; practiceActivities: string[]; certificationCriteria: string; }

export interface SyllabusData {
  section1: Section1 | null;
  section2: Section2 | null;
  section3: Section3 | null;
  section4: Section4 | null;
  section5: Section5 | null;
  section6: Section6 | null;
  section7: Section7 | null;
}

interface OrgInfo {
  id: string; name: string; slug: string; logoText: string;
  primaryColor: string; secondaryColor: string;
  website?: string | null; email?: string | null;
  phone?: string | null; address?: string | null;
}

interface Props {
  syllabusId: string;
  initialData: SyllabusData;
  initialTitle: string;
  org: OrgInfo;
}

const STEPS = [
  { label: "Nguyên liệu", icon: Sparkles, desc: "Nạp tài liệu để AI phân tích" },
  { label: "7 Sections", icon: FileText, desc: "Điền đầy đủ theo tiêu chuẩn" },
  { label: "Xuất PDF", icon: Eye, desc: "Preview & download đề cương" },
];

export function validateSections(data: SyllabusData): { section: string; message: string }[] {
  const errors: { section: string; message: string }[] = [];
  if (!data.section1?.courseNameVI) errors.push({ section: "Section 1", message: "Thiếu tên khóa học (Tiếng Việt)" });
  if (!data.section1?.duration) errors.push({ section: "Section 1", message: "Thiếu thời lượng khóa học" });
  if (!data.section2?.marketContext || data.section2.marketContext.length < 100)
    errors.push({ section: "Section 2", message: "Giới thiệu chương trình phải có ≥ 100 ký tự" });
  if (!data.section2?.dataStat) errors.push({ section: "Section 2", message: "Bắt buộc có số liệu thị trường" });
  if (!data.section3?.benefits || data.section3.benefits.filter(Boolean).length < 3)
    errors.push({ section: "Section 3", message: "Phải có ít nhất 3 lợi ích" });
  if (!data.section4?.targetGroups || data.section4.targetGroups.filter(Boolean).length < 2)
    errors.push({ section: "Section 4", message: "Phải có ít nhất 2 nhóm đối tượng" });
  if (!data.section5?.modules || data.section5.modules.length < 1)
    errors.push({ section: "Section 5", message: "Phải có ít nhất 1 buổi học" });
  else {
    const bad = data.section5.modules.find(m => !m.learningOutcome);
    if (bad) errors.push({ section: "Section 5", message: `Buổi "${bad.title}" thiếu Learning Outcome` });
  }
  if (!data.section6?.instructors || data.section6.instructors.length < 1)
    errors.push({ section: "Section 6", message: "Phải có ít nhất 1 giảng viên" });
  if (!data.section7?.certificationCriteria) errors.push({ section: "Section 7", message: "Thiếu tiêu chí cấp chứng chỉ" });
  return errors;
}

export default function SyllabusWizard({ syllabusId, initialData, initialTitle, org }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SyllabusData>(initialData);
  const [title, setTitle] = useState(initialTitle);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  const errors = validateSections(data);
  const isValid = errors.length === 0;

  const save = async (newData?: SyllabusData, newTitle?: string) => {
    setSaving(true);
    const d = newData ?? data;
    const t = newTitle ?? title;
    try {
      await fetch(`/api/syllabus/${syllabusId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: t,
          section1: d.section1 ? JSON.stringify(d.section1) : null,
          section2: d.section2 ? JSON.stringify(d.section2) : null,
          section3: d.section3 ? JSON.stringify(d.section3) : null,
          section4: d.section4 ? JSON.stringify(d.section4) : null,
          section5: d.section5 ? JSON.stringify(d.section5) : null,
          section6: d.section6 ? JSON.stringify(d.section6) : null,
          section7: d.section7 ? JSON.stringify(d.section7) : null,
        }),
      });
      setSaveMsg("Đã lưu ✓");
      setTimeout(() => setSaveMsg(""), 2000);
    } catch {
      setSaveMsg("Lỗi lưu!");
    } finally {
      setSaving(false);
    }
  };

  const updateData = (partial: Partial<SyllabusData>) => {
    const newData = { ...data, ...partial };
    setData(newData);
    save(newData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Org badge */}
            <div
              className="px-3 py-1.5 rounded-xl text-white text-xs font-bold"
              style={{ background: org.primaryColor }}
            >
              {org.logoText}
            </div>
            <div>
              <p className="text-xs text-slate-400">Đề cương khóa học</p>
              <p className="text-sm font-bold text-slate-900 truncate max-w-xs">{title}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saveMsg && <span className="text-xs text-emerald-600 font-medium">{saveMsg}</span>}
            {saving && <Loader2 className="w-4 h-4 text-violet-500 animate-spin" />}
            {/* Error count */}
            {errors.length > 0 && step === 1 && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-red-50 border border-red-200 rounded-full text-xs text-red-600 font-medium">
                <AlertCircle className="w-3 h-3" />
                {errors.length} lỗi
              </span>
            )}
          </div>
        </div>

        {/* Step indicator */}
        <div className="max-w-5xl mx-auto px-4 pb-3">
          <div className="flex items-center gap-2">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const active = i === step;
              const done = i < step;
              return (
                <div key={i} className="flex items-center gap-2">
                  <button
                    onClick={() => i <= step && setStep(i)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      active ? "bg-violet-600 text-white shadow-sm" :
                      done ? "bg-violet-100 text-violet-700 hover:bg-violet-200" :
                      "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {done ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{s.label}</span>
                    <span className="sm:hidden">{i + 1}</span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div className={`h-0.5 w-6 rounded-full ${i < step ? "bg-violet-300" : "bg-slate-200"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && (
              <SyllabusStep1Upload
                data={data}
                onApply={(aiResult) => {
                  const newData: SyllabusData = {
                    section1: aiResult.section1 ?? data.section1,
                    section2: aiResult.section2 ?? data.section2,
                    section3: aiResult.section3 ?? data.section3,
                    section4: aiResult.section4 ?? data.section4,
                    section5: aiResult.section5 ?? data.section5,
                    section6: aiResult.section6 ?? data.section6,
                    section7: aiResult.section7 ?? data.section7,
                  };
                  setData(newData);
                  save(newData);
                }}
              />
            )}
            {step === 1 && (
              <SyllabusStep2Form data={data} onChange={updateData} errors={errors} />
            )}
            {step === 2 && (
              <SyllabusStep3Preview data={data} org={org} title={title} errors={errors} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-all disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => save()}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-all"
            >
              Lưu nháp
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-sm hover:shadow-violet-500/25 hover:shadow-md transition-all"
              >
                Tiếp theo <ChevronRight className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
