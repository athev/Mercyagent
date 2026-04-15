"use client";

import OrganizationGate from "../../../components/vibe-learning/trainer/OrganizationGate";
import { motion } from "motion/react";
import Link from "next/link";
import { BookOpen, Plus, FileText, Shield, ArrowRight, CheckCircle, Users } from "lucide-react";

export default function TrainerHubPage() {
  return (
    <OrganizationGate>
      {(membership) => (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white">
          {/* Nav */}
          <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/vibe-learning" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              ← Vibe Learning
            </Link>
            <div className="flex items-center gap-2">
              <div
                className="px-3 py-1.5 rounded-xl text-white text-xs font-bold"
                style={{ background: membership.organization.primaryColor }}
              >
                {membership.organization.logoText}
              </div>
              <span className="text-slate-400 text-xs">{membership.organization.name}</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm mb-6">
                <Shield className="w-4 h-4" />
                Đối tác chiến lược được xác minh
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
                Trung tâm{" "}
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Giảng viên
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Tạo đề cương khóa học theo tiêu chuẩn{" "}
                <span className="text-violet-400 font-semibold">Vibework Academy</span>.
                Mọi đề cương đều phải theo luật chơi chung.
              </p>
            </motion.div>

            {/* Main tools grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  href: "/vibe-learning/trainer/syllabus",
                  icon: FileText,
                  title: "Syllabus Builder",
                  desc: "Tạo đề cương chuẩn 7 sections với AI hỗ trợ. Export PDF có branding tổ chức và nhãn Vibework.",
                  badge: "Dành cho giảng viên",
                  cta: "Mở công cụ",
                  accent: membership.organization.primaryColor,
                  hot: true,
                },
                {
                  href: "#",
                  icon: Users,
                  title: "Quản lý học viên",
                  desc: "Theo dõi tiến độ, kết quả học tập của học viên trong khóa học của bạn.",
                  badge: "Sắp ra mắt",
                  cta: "Xem trước",
                  accent: "#0e9f6e",
                  hot: false,
                },
                {
                  href: "#",
                  icon: CheckCircle,
                  title: "Kết quả & Chứng chỉ",
                  desc: "Quản lý kết quả học viên, phát hành chứng chỉ theo tiêu chuẩn Vibework.",
                  badge: "Sắp ra mắt",
                  cta: "Xem trước",
                  accent: "#f59e0b",
                  hot: false,
                },
              ].map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <Link href={tool.href} className={`block h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all`}>
                    {tool.hot && (
                      <div className="absolute -top-2 -right-2 bg-violet-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">HOT</div>
                    )}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${tool.accent}20`, border: `1px solid ${tool.accent}30` }}>
                      <tool.icon className="w-6 h-6" style={{ color: tool.accent }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider mb-2 block" style={{ color: tool.accent }}>
                      {tool.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: tool.accent }}>
                      {tool.cta} <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Platform rules */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                📜 Luật chơi chung — Vibework Academy Standard
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["🏛️", "Mọi đề cương phải theo tiêu chuẩn 7 sections bắt buộc"],
                  ["🔒", "Không thể export PDF nếu còn thiếu nội dung bắt buộc"],
                  ["📊", "Phần giới thiệu bắt buộc có số liệu thị trường uy tín"],
                  ["🎯", "Mỗi buổi học phải có Learning Outcome cụ thể, đo lường được"],
                  ["🏷️", "File PDF tự động gắn nhãn 'Powered by Vibework.vn'"],
                  ["✅", "Chỉ giảng viên thuộc tổ chức đã verify mới được tạo đề cương"],
                ].map(([icon, rule], i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-base flex-shrink-0">{icon}</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer brand */}
          <div className="border-t border-white/10 py-4 text-center">
            <p className="text-slate-600 text-xs">
              {membership.organization.name} × <span className="text-violet-400 font-semibold">Vibework.vn</span>
            </p>
          </div>
        </div>
      )}
    </OrganizationGate>
  );
}
