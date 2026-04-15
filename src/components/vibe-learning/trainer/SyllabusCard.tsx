"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FileText, CheckCircle, Clock, Trash2, Download } from "lucide-react";

interface Syllabus {
  id: string;
  title: string;
  courseCode?: string | null;
  status: string;
  updatedAt: string;
  organization: {
    name: string;
    slug: string;
    logoText: string;
    primaryColor: string;
  };
}

interface Props {
  syllabus: Syllabus;
  onDelete: (id: string) => void;
}

export default function SyllabusCard({ syllabus, onDelete }: Props) {
  const isCertified = syllabus.status === "CERTIFIED";
  const date = new Date(syllabus.updatedAt).toLocaleDateString("vi-VN", {
    day: "2-digit", month: "2-digit", year: "numeric"
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${syllabus.organization.primaryColor}, ${syllabus.organization.primaryColor}99)` }}
          >
            {syllabus.organization.logoText.slice(0, 3)}
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              {syllabus.organization.name}
            </p>
            <h3 className="text-sm font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-violet-700 transition-colors">
              {syllabus.title}
            </h3>
            {syllabus.courseCode && (
              <p className="text-[10px] text-slate-400 mt-0.5">#{syllabus.courseCode}</p>
            )}
          </div>
        </div>

        {/* Status badge */}
        <span
          className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
            isCertified
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-amber-50 text-amber-700 border border-amber-200"
          }`}
        >
          {isCertified ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {isCertified ? "Đã xuất bản" : "Bản nháp"}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-[11px] text-slate-400">Cập nhật {date}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDelete(syllabus.id)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
            title="Xóa đề cương"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <Link
            href={`/vibe-learning/trainer/syllabus/${syllabus.id}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-50 text-violet-700 text-xs font-semibold hover:bg-violet-100 transition-colors"
          >
            <FileText className="w-3 h-3" />
            Mở
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
