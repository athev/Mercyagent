"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Download, AlertCircle, CheckCircle, Loader2, Lock, Shield } from "lucide-react";
import type { SyllabusData, Section5Module, Section6Instructor } from "./SyllabusWizard";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface OrgInfo {
  id: string; name: string; slug: string; logoText: string;
  primaryColor: string; secondaryColor: string;
  website?: string | null; email?: string | null;
  phone?: string | null; address?: string | null;
}

interface Props {
  data: SyllabusData;
  org: OrgInfo;
  title: string;
  errors: { section: string; message: string }[];
}

export default function SyllabusStep3Preview({ data, org, title, errors }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const isValid = errors.length === 0;

  const s1 = data.section1;
  const s2 = data.section2;
  const s3 = data.section3;
  const s4 = data.section4;
  const s5 = data.section5;
  const s6 = data.section6;
  const s7 = data.section7;

  const exportPDF = async () => {
    if (!isValid || !previewRef.current) return;
    setExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollY: -window.scrollY,
        windowWidth: previewRef.current.scrollWidth,
        windowHeight: previewRef.current.scrollHeight,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      let yPos = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();
      while (yPos < pdfHeight) {
        if (yPos > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -yPos, pdfWidth, pdfHeight);
        yPos += pageHeight;
      }
      const fileName = `${s1?.courseCode || "syllabus"}_${org.slug}_vibework.pdf`;
      pdf.save(fileName);
    } catch (e) {
      console.error("PDF export error:", e);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Validation status */}
      <div className={`rounded-2xl border p-4 ${isValid ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isValid ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <AlertCircle className="w-5 h-5 text-amber-600" />}
            <div>
              <p className={`text-sm font-bold ${isValid ? "text-emerald-800" : "text-amber-800"}`}>
                {isValid ? "Đề cương đạt chuẩn Vibework Academy ✓" : `Còn ${errors.length} mục chưa đạt chuẩn`}
              </p>
              <p className="text-xs text-slate-500">{isValid ? "Bạn có thể xuất file PDF ngay bây giờ" : "Quay lại bước 2 để bổ sung"}</p>
            </div>
          </div>
          <button
            onClick={exportPDF}
            disabled={!isValid || exporting}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              isValid
                ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm hover:shadow-md hover:shadow-violet-500/30"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            {exporting ? <Loader2 className="w-4 h-4 animate-spin" /> : isValid ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            {exporting ? "Đang xuất..." : "Xuất PDF"}
          </button>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="bg-slate-200 rounded-2xl p-4 overflow-auto">
        <div
          ref={previewRef}
          style={{ width: "794px", minHeight: "1123px", backgroundColor: "#fff", fontFamily: "Arial, sans-serif" }}
          className="mx-auto shadow-2xl"
        >
          {/* HEADER */}
          <div style={{ background: `linear-gradient(135deg, ${org.primaryColor}, ${org.secondaryColor})`, padding: "32px 40px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "6px 16px", borderRadius: "8px", marginBottom: "12px" }}>
                  <span style={{ color: "#fff", fontWeight: "900", fontSize: "18px", letterSpacing: "2px" }}>
                    {org.logoText}
                  </span>
                </div>
                <h1 style={{ color: "#fff", fontSize: "22px", fontWeight: "800", margin: 0, lineHeight: 1.3, maxWidth: "480px" }}>
                  {s1?.courseNameVI || title}
                </h1>
                {s1?.courseNameEN && (
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", marginTop: "6px", fontStyle: "italic" }}>
                    {s1.courseNameEN}
                  </p>
                )}
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "12px 16px" }}>
                  {[
                    [`📅`, s1?.duration || "—"],
                    [`📍`, s1?.format || "—"],
                    [`🗣️`, s1?.language || "Tiếng Việt"],
                  ].map(([icon, val]) => (
                    <div key={icon} style={{ color: "#fff", fontSize: "11px", marginBottom: "4px", textAlign: "right" }}>
                      {icon} {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {s1?.courseCode && (
              <div style={{ marginTop: "12px" }}>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", letterSpacing: "1px" }}>
                  {s1.courseCode}
                </span>
              </div>
            )}
          </div>

          {/* BODY */}
          <div style={{ padding: "32px 40px" }}>

            {/* S2: Giới thiệu */}
            {s2 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>I. GIỚI THIỆU CHƯƠNG TRÌNH</SectionTitle>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.8, marginBottom: "10px" }}>{s2.marketContext}</p>
                {s2.dataStat && (
                  <div style={{ background: `${org.primaryColor}12`, borderLeft: `3px solid ${org.primaryColor}`, padding: "10px 16px", borderRadius: "0 8px 8px 0" }}>
                    <p style={{ fontSize: "13px", color: org.primaryColor, fontWeight: "700", margin: 0 }}>"{s2.dataStat}"</p>
                    <p style={{ fontSize: "11px", color: "#6b7280", margin: "4px 0 0" }}>— {s2.dataSource}</p>
                  </div>
                )}
              </div>
            )}

            {/* S3: Lợi ích */}
            {s3 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>II. LỢI ÍCH KHI THAM GIA</SectionTitle>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {(s3.benefits || []).filter(Boolean).map((b, i) => (
                    <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", color: "#374151" }}>
                      <span style={{ color: org.primaryColor, fontWeight: "700", marginRight: "6px" }}>✓</span>{b}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* S4: Đối tượng */}
            {s4 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>III. ĐỐI TƯỢNG HỌC VIÊN</SectionTitle>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {(s4.targetGroups || []).filter(Boolean).map((g, i) => (
                    <span key={i} style={{ background: `${org.primaryColor}15`, color: org.primaryColor, fontSize: "12px", fontWeight: "600", padding: "5px 14px", borderRadius: "20px" }}>{g}</span>
                  ))}
                </div>
              </div>
            )}

            {/* S5: Khung chương trình */}
            {s5 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>IV. KHUNG CHƯƠNG TRÌNH CHI TIẾT</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {(s5.modules || []).map((mod: Section5Module, i: number) => (
                    <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ background: `${org.primaryColor}12`, padding: "8px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ background: org.primaryColor, color: "#fff", fontSize: "10px", fontWeight: "800", padding: "2px 8px", borderRadius: "20px" }}>Buổi {mod.sessionNumber}</span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1f2937" }}>{mod.title}</span>
                      </div>
                      <div style={{ padding: "8px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <div>
                          <p style={{ fontSize: "10px", fontWeight: "700", color: "#6b7280", textTransform: "uppercase", marginBottom: "4px" }}>Nội dung</p>
                          {(mod.keyContent || []).filter(Boolean).map((kc: string, ki: number) => (
                            <p key={ki} style={{ fontSize: "11px", color: "#374151", margin: "1px 0" }}>• {kc}</p>
                          ))}
                        </div>
                        {mod.learningOutcome && (
                          <div>
                            <p style={{ fontSize: "10px", fontWeight: "700", color: "#6b7280", textTransform: "uppercase", marginBottom: "4px" }}>Learning Outcome</p>
                            <p style={{ fontSize: "11px", color: org.primaryColor, fontStyle: "italic" }}>{mod.learningOutcome}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* S6: Giảng viên */}
            {s6 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>V. ĐỘI NGŨ CHUYÊN GIA</SectionTitle>
                <div style={{ display: "grid", gridTemplateColumns: s6.instructors?.length > 1 ? "1fr 1fr" : "1fr", gap: "10px" }}>
                  {(s6.instructors || []).map((inst: Section6Instructor, i: number) => (
                    <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: `linear-gradient(135deg, ${org.primaryColor}, ${org.secondaryColor})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "800", fontSize: "14px", flexShrink: 0 }}>
                        {(inst.name || "?")[0]}
                      </div>
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: "800", color: "#1f2937", margin: 0 }}>{inst.name}</p>
                        <p style={{ fontSize: "11px", color: org.primaryColor, fontWeight: "600", margin: "2px 0 6px" }}>{inst.title}</p>
                        <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.5 }}>{inst.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* S7: Phương pháp */}
            {s7 && (
              <div style={{ marginBottom: "28px" }}>
                <SectionTitle color={org.primaryColor}>VI. PHƯƠNG PHÁP & ĐÁNH GIÁ</SectionTitle>
                {s7.teachingMethod && <p style={{ fontSize: "12px", color: "#374151", marginBottom: "8px" }}><strong>Phương pháp:</strong> {s7.teachingMethod}</p>}
                {s7.practiceActivities?.filter(Boolean).length > 0 && (
                  <div style={{ marginBottom: "8px" }}>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "4px" }}>Hoạt động thực hành:</p>
                    {s7.practiceActivities.filter(Boolean).map((p: string, i: number) => (
                      <p key={i} style={{ fontSize: "11px", color: "#374151", margin: "2px 0" }}>• {p}</p>
                    ))}
                  </div>
                )}
                {s7.certificationCriteria && (
                  <div style={{ background: `${org.primaryColor}12`, padding: "10px 14px", borderRadius: "8px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: org.primaryColor, marginBottom: "4px" }}>🏆 TIÊU CHÍ CẤP CHỨNG CHỈ</p>
                    <p style={{ fontSize: "12px", color: "#374151" }}>{s7.certificationCriteria}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div style={{ background: "#0f172a", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ background: org.primaryColor, padding: "4px 10px", borderRadius: "6px" }}>
                <span style={{ color: "#fff", fontWeight: "800", fontSize: "11px" }}>{org.logoText}</span>
              </div>
              {org.website && <span style={{ color: "#64748b", fontSize: "10px" }}>{org.website}</span>}
              {org.email && <span style={{ color: "#64748b", fontSize: "10px" }}>• {org.email}</span>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "1px", height: "20px", background: "#334155" }} />
              <span style={{ color: "#475569", fontSize: "9px" }}>Powered by</span>
              <span style={{ color: "#8b5cf6", fontWeight: "800", fontSize: "11px" }}>Vibework.vn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
      <span style={{ width: "3px", height: "18px", background: color, borderRadius: "2px", display: "inline-block" }} />
      <h2 style={{ fontSize: "13px", fontWeight: "800", color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px", margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}
