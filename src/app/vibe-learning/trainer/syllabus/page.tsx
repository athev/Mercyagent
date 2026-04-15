"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import OrganizationGate from "../../../../components/vibe-learning/trainer/OrganizationGate";
import SyllabusCard from "../../../../components/vibe-learning/trainer/SyllabusCard";
import { Plus, FileText, Loader2, Search, BookOpen } from "lucide-react";

interface Syllabus {
  id: string;
  title: string;
  courseCode?: string | null;
  status: string;
  updatedAt: string;
  organization: { name: string; slug: string; logoText: string; primaryColor: string; };
}

export default function SyllabusListPage() {
  return (
    <OrganizationGate>
      {(membership) => <SyllabusList membership={membership} />}
    </OrganizationGate>
  );
}

function SyllabusList({ membership }: { membership: { organization: { primaryColor: string; name: string; logoText: string } } }) {
  const [syllabuses, setSyllabuses] = useState<Syllabus[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [creating, setCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const fetchList = () => {
    setLoading(true);
    fetch("/api/syllabus").then(r => r.json()).then(d => {
      setSyllabuses(d.syllabuses || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => { fetchList(); }, []);

  const createNew = async () => {
    if (!newTitle.trim()) return;
    setCreating(true);
    try {
      const res = await fetch("/api/syllabus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      const json = await res.json();
      if (json.syllabus?.id) {
        window.location.href = `/vibe-learning/trainer/syllabus/${json.syllabus.id}`;
      }
    } finally {
      setCreating(false);
    }
  };

  const deleteSyllabus = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa đề cương này?")) return;
    await fetch(`/api/syllabus/${id}`, { method: "DELETE" });
    fetchList();
  };

  const filtered = syllabuses.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    (s.courseCode || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/vibe-learning/trainer" className="text-slate-400 hover:text-slate-700 transition-colors text-sm">
              ← Trainer Hub
            </Link>
            <div className="w-px h-5 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: membership.organization.primaryColor }}>
                {membership.organization.logoText.slice(0, 2)}
              </div>
              <span className="text-sm font-bold text-slate-900">Đề cương của tôi</span>
            </div>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-violet-500/25 transition-all"
          >
            <Plus className="w-4 h-4" /> Tạo đề cương mới
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tìm kiếm đề cương..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Tổng đề cương", value: syllabuses.length, color: "text-slate-900" },
            { label: "Đã xuất bản", value: syllabuses.filter(s => s.status === "CERTIFIED").length, color: "text-emerald-600" },
            { label: "Bản nháp", value: syllabuses.filter(s => s.status === "DRAFT").length, color: "text-amber-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
              <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-7 h-7 text-violet-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-slate-200 rounded-2xl"
          >
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-slate-700 font-bold mb-2">
              {search ? "Không tìm thấy kết quả" : "Chưa có đề cương nào"}
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              {search ? "Thử tìm với từ khóa khác" : "Bắt đầu bằng cách tạo đề cương đầu tiên"}
            </p>
            {!search && (
              <button onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 px-5 py-2.5 mx-auto rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <Plus className="w-4 h-4" /> Tạo đề cương đầu tiên
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => (
              <SyllabusCard key={s.id} syllabus={s} onDelete={deleteSyllabus} />
            ))}
          </div>
        )}
      </div>

      {/* Create modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-1">Tạo đề cương mới</h3>
            <p className="text-sm text-slate-500 mb-5">Nhập tên khóa học để bắt đầu</p>
            <input
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onKeyDown={e => e.key === "Enter" && createNew()}
              placeholder="Tên khóa học..."
              autoFocus
              className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400 mb-4"
            />
            <div className="flex gap-3">
              <button onClick={() => { setShowCreate(false); setNewTitle(""); }} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors">
                Hủy
              </button>
              <button onClick={createNew} disabled={creating || !newTitle.trim()}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold disabled:opacity-50 disabled:pointer-events-none"
              >
                {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                {creating ? "Đang tạo..." : "Tạo & Mở"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
