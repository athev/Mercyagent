"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, Plus, Trash2, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import type {
  SyllabusData, Section1, Section2, Section3, Section4,
  Section5, Section5Module, Section6, Section6Instructor, Section7
} from "./SyllabusWizard";

interface Props {
  data: SyllabusData;
  onChange: (partial: Partial<SyllabusData>) => void;
  errors: { section: string; message: string }[];
}

function SectionWrapper({ title, sectionKey, errors, children, defaultOpen = false }:
  { title: string; sectionKey: string; errors: { section: string; message: string }[]; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const myErrors = errors.filter(e => e.section === sectionKey);
  const hasError = myErrors.length > 0;
  return (
    <div className={`bg-white rounded-2xl border ${hasError ? "border-red-200" : "border-slate-200"} overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors`}
      >
        <div className="flex items-center gap-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${hasError ? "bg-red-100 text-red-600" : "bg-violet-100 text-violet-700"}`}>
            {sectionKey.replace("Section ", "")}
          </span>
          <span className="text-sm font-semibold text-slate-800">{title}</span>
          {!hasError && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
          {hasError && <span className="text-xs text-red-500">({myErrors.length} lỗi)</span>}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-slate-100 pt-4">
              {myErrors.map((e, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-red-50 border border-red-100 rounded-xl">
                  <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <p className="text-xs text-red-600">{e.message}</p>
                </div>
              ))}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Input = ({ label, value, onChange, placeholder, required, multiline }:
  { label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; multiline?: boolean }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {multiline ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3}
        className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none placeholder:text-slate-400" />
    ) : (
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-slate-400" />
    )}
  </div>
);

export default function SyllabusStep2Form({ data, onChange, errors }: Props) {
  // Section 1
  const s1 = data.section1 || ({} as Section1);
  const s2 = data.section2 || ({} as Section2);
  const s3 = data.section3 || { benefits: ["", "", ""] };
  const s4 = data.section4 || { targetGroups: ["", ""] };
  const s5 = data.section5 || { modules: [{ sessionNumber: 1, title: "", keyContent: [""], learningOutcome: "" }] };
  const s6 = data.section6 || { instructors: [{ name: "", title: "", experience: "" }] };
  const s7 = data.section7 || ({} as Section7);

  return (
    <div className="space-y-4">
      {/* Error summary bar */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-800 mb-1">Còn {errors.length} mục chưa đáp ứng tiêu chuẩn</p>
            <ul className="space-y-0.5">
              {errors.map((e, i) => (
                <li key={i} className="text-xs text-red-600">• [{e.section}] {e.message}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Section 1 */}
      <SectionWrapper title="Thông tin chung" sectionKey="Section 1" errors={errors} defaultOpen>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input required label="Tên khóa học (Tiếng Việt)" value={s1.courseNameVI || ""} onChange={v => onChange({ section1: { ...s1, courseNameVI: v } })} placeholder="Chiến lược AI cho Doanh nghiệp" />
          <Input label="Tên khóa học (Tiếng Anh)" value={s1.courseNameEN || ""} onChange={v => onChange({ section1: { ...s1, courseNameEN: v } })} placeholder="AI Strategy for Business" />
          <Input label="Mã khóa học" value={s1.courseCode || ""} onChange={v => onChange({ section1: { ...s1, courseCode: v } })} placeholder="AIS-2025" />
          <Input required label="Thời lượng" value={s1.duration || ""} onChange={v => onChange({ section1: { ...s1, duration: v } })} placeholder="8 buổi (16 giờ)" />
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Hình thức <span className="text-red-500">*</span></label>
            <select value={s1.format || ""} onChange={e => onChange({ section1: { ...s1, format: e.target.value } })}
              className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400">
              <option value="">Chọn hình thức</option>
              <option>Trực tiếp</option>
              <option>Trực tuyến</option>
              <option>Hybrid</option>
            </select>
          </div>
          <Input label="Địa điểm" value={s1.location || ""} onChange={v => onChange({ section1: { ...s1, location: v } })} placeholder="Hà Nội / Online" />
          <Input required label="Ngôn ngữ giảng dạy" value={s1.language || ""} onChange={v => onChange({ section1: { ...s1, language: v } })} placeholder="Tiếng Việt" />
        </div>
      </SectionWrapper>

      {/* Section 2 */}
      <SectionWrapper title="Giới thiệu chương trình" sectionKey="Section 2" errors={errors}>
        <Input required label="Bối cảnh thị trường" multiline value={s2.marketContext || ""} onChange={v => onChange({ section2: { ...s2, marketContext: v } })} placeholder="Mô tả bối cảnh, thách thức, xu hướng thị trường... (≥ 100 ký tự)" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input required label="Số liệu thị trường (bắt buộc)" value={s2.dataStat || ""} onChange={v => onChange({ section2: { ...s2, dataStat: v } })} placeholder="65% doanh nghiệp toàn cầu đã ứng dụng AI vào năm 2024" />
          <Input required label="Nguồn dẫn chứng" value={s2.dataSource || ""} onChange={v => onChange({ section2: { ...s2, dataSource: v } })} placeholder="Forbes 2024 / McKinsey Global Institute" />
        </div>
      </SectionWrapper>

      {/* Section 3 */}
      <SectionWrapper title="Lợi ích khi tham gia (≥ 3 lợi ích)" sectionKey="Section 3" errors={errors}>
        <div className="space-y-2">
          {(s3.benefits || []).map((b, i) => (
            <div key={i} className="flex gap-2">
              <input type="text" value={b} onChange={e => { const arr = [...(s3.benefits || [])]; arr[i] = e.target.value; onChange({ section3: { benefits: arr } }); }}
                placeholder={`Lợi ích ${i + 1}: Có thể [làm gì] để [kết quả cụ thể]`}
                className="flex-1 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              {i >= 3 && (
                <button onClick={() => { const arr = s3.benefits.filter((_, j) => j !== i); onChange({ section3: { benefits: arr } }); }} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button onClick={() => onChange({ section3: { benefits: [...(s3.benefits || []), ""] } })}
            className="flex items-center gap-1 text-xs text-violet-600 font-medium hover:text-violet-800 transition-colors">
            <Plus className="w-3.5 h-3.5" /> Thêm lợi ích
          </button>
        </div>
      </SectionWrapper>

      {/* Section 4 */}
      <SectionWrapper title="Đối tượng học viên (≥ 2 nhóm)" sectionKey="Section 4" errors={errors}>
        <div className="space-y-2">
          {(s4.targetGroups || []).map((g, i) => (
            <div key={i} className="flex gap-2">
              <input type="text" value={g} onChange={e => { const arr = [...(s4.targetGroups || [])]; arr[i] = e.target.value; onChange({ section4: { targetGroups: arr } }); }}
                placeholder={`Nhóm ${i + 1}: Lãnh đạo / Quản lý / Chuyên gia...`}
                className="flex-1 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              {i >= 2 && (
                <button onClick={() => { const arr = s4.targetGroups.filter((_, j) => j !== i); onChange({ section4: { targetGroups: arr } }); }} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button onClick={() => onChange({ section4: { targetGroups: [...(s4.targetGroups || []), ""] } })}
            className="flex items-center gap-1 text-xs text-violet-600 font-medium hover:text-violet-800 transition-colors">
            <Plus className="w-3.5 h-3.5" /> Thêm nhóm
          </button>
        </div>
      </SectionWrapper>

      {/* Section 5 — Modules */}
      <SectionWrapper title="Khung chương trình chi tiết" sectionKey="Section 5" errors={errors}>
        <div className="space-y-4">
          {(s5.modules || []).map((mod: Section5Module, mi: number) => (
            <div key={mi} className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-violet-700 bg-violet-100 px-2.5 py-1 rounded-full">Buổi {mod.sessionNumber || mi + 1}</span>
                {mi > 0 && (
                  <button onClick={() => { const arr = s5.modules.filter((_, j) => j !== mi); onChange({ section5: { modules: arr } }); }} className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <input type="text" value={mod.title} onChange={e => { const arr = [...s5.modules]; arr[mi] = { ...arr[mi], title: e.target.value }; onChange({ section5: { modules: arr } }); }}
                placeholder="Tên buổi học / module" className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Nội dung trọng tâm</label>
                {(mod.keyContent || [""]).map((kc: string, ki: number) => (
                  <div key={ki} className="flex gap-2">
                    <input type="text" value={kc} onChange={e => { const arr = [...s5.modules]; const kArr = [...(arr[mi].keyContent || [])]; kArr[ki] = e.target.value; arr[mi] = { ...arr[mi], keyContent: kArr }; onChange({ section5: { modules: arr } }); }}
                      placeholder={`Nội dung ${ki + 1}`} className="flex-1 text-xs text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                    {ki > 0 && <button onClick={() => { const arr = [...s5.modules]; arr[mi].keyContent = arr[mi].keyContent.filter((_, j) => j !== ki); onChange({ section5: { modules: arr } }); }} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 className="w-3 h-3" /></button>}
                  </div>
                ))}
                <button onClick={() => { const arr = [...s5.modules]; arr[mi].keyContent = [...(arr[mi].keyContent || []), ""]; onChange({ section5: { modules: arr } }); }}
                  className="text-xs text-violet-600 font-medium hover:text-violet-800 flex items-center gap-1"><Plus className="w-3 h-3" /> Thêm nội dung</button>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 mb-1 block">Learning Outcome <span className="text-red-500">*</span></label>
                <input type="text" value={mod.learningOutcome} onChange={e => { const arr = [...s5.modules]; arr[mi] = { ...arr[mi], learningOutcome: e.target.value }; onChange({ section5: { modules: arr } }); }}
                  placeholder="Sau buổi này, học viên có thể..." className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
            </div>
          ))}
          <button onClick={() => onChange({ section5: { modules: [...s5.modules, { sessionNumber: s5.modules.length + 1, title: "", keyContent: [""], learningOutcome: "" }] } })}
            className="w-full py-2.5 border-2 border-dashed border-violet-200 rounded-xl text-xs text-violet-600 font-medium hover:border-violet-400 hover:bg-violet-50 transition-all flex items-center justify-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Thêm buổi học
          </button>
        </div>
      </SectionWrapper>

      {/* Section 6 — Instructors */}
      <SectionWrapper title="Đội ngũ chuyên gia" sectionKey="Section 6" errors={errors}>
        <div className="space-y-4">
          {(s6.instructors || []).map((inst: Section6Instructor, ii: number) => (
            <div key={ii} className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50">
              {ii > 0 && (
                <div className="flex justify-end">
                  <button onClick={() => { const arr = s6.instructors.filter((_, j) => j !== ii); onChange({ section6: { instructors: arr } }); }} className="p-1 text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input placeholder="Họ và tên*" value={inst.name} onChange={e => { const arr = [...s6.instructors]; arr[ii] = { ...arr[ii], name: e.target.value }; onChange({ section6: { instructors: arr } }); }} className="text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
                <input placeholder="Chức danh*" value={inst.title} onChange={e => { const arr = [...s6.instructors]; arr[ii] = { ...arr[ii], title: e.target.value }; onChange({ section6: { instructors: arr } }); }} className="text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <textarea rows={2} placeholder="Kinh nghiệm & thành tích nổi bật*" value={inst.experience} onChange={e => { const arr = [...s6.instructors]; arr[ii] = { ...arr[ii], experience: e.target.value }; onChange({ section6: { instructors: arr } }); }} className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none" />
            </div>
          ))}
          <button onClick={() => onChange({ section6: { instructors: [...s6.instructors, { name: "", title: "", experience: "" }] } })}
            className="w-full py-2.5 border-2 border-dashed border-violet-200 rounded-xl text-xs text-violet-600 font-medium hover:border-violet-400 hover:bg-violet-50 transition-all flex items-center justify-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Thêm giảng viên
          </button>
        </div>
      </SectionWrapper>

      {/* Section 7 */}
      <SectionWrapper title="Phương pháp & Đánh giá" sectionKey="Section 7" errors={errors}>
        <Input label="Phương pháp giảng dạy" multiline value={s7.teachingMethod || ""} onChange={v => onChange({ section7: { ...s7, teachingMethod: v } })} placeholder="Case study, Workshop thực hành, Mentoring nhóm..." />
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-600">Hoạt động thực hành</label>
          {(s7.practiceActivities || [""]).map((pa: string, pi: number) => (
            <div key={pi} className="flex gap-2">
              <input type="text" value={pa} onChange={e => { const arr = [...(s7.practiceActivities || [])]; arr[pi] = e.target.value; onChange({ section7: { ...s7, practiceActivities: arr } }); }}
                placeholder={`Hoạt động ${pi + 1}`} className="flex-1 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              {pi > 0 && <button onClick={() => { const arr = (s7.practiceActivities || []).filter((_, j) => j !== pi); onChange({ section7: { ...s7, practiceActivities: arr } }); }} className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>}
            </div>
          ))}
          <button onClick={() => onChange({ section7: { ...s7, practiceActivities: [...(s7.practiceActivities || []), ""] } })}
            className="flex items-center gap-1 text-xs text-violet-600 font-medium hover:text-violet-800"><Plus className="w-3.5 h-3.5" /> Thêm hoạt động</button>
        </div>
        <Input required label="Tiêu chí cấp chứng chỉ" multiline value={s7.certificationCriteria || ""} onChange={v => onChange({ section7: { ...s7, certificationCriteria: v } })} placeholder="Tham dự ≥ 80% buổi học, hoàn thành bài tập cuối khóa..." />
      </SectionWrapper>
    </div>
  );
}
