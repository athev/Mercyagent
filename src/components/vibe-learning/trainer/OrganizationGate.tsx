"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Shield, AlertTriangle, Loader2, ExternalLink } from "lucide-react";

interface OrgInfo {
  id: string;
  name: string;
  slug: string;
  logoText: string;
  primaryColor: string;
  secondaryColor: string;
  website?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
}

interface MembershipInfo {
  id: string;
  role: string;
  organization: OrgInfo;
}

interface Props {
  children: (membership: MembershipInfo) => React.ReactNode;
}

export default function OrganizationGate({ children }: Props) {
  const [status, setStatus] = useState<"loading" | "verified" | "blocked">("loading");
  const [membership, setMembership] = useState<MembershipInfo | null>(null);
  const [reason, setReason] = useState("");

  useEffect(() => {
    fetch("/api/organizations/verify")
      .then((r) => r.json())
      .then((data) => {
        if (data.verified) {
          setMembership(data.membership);
          setStatus("verified");
        } else {
          setReason(data.reason);
          setStatus("blocked");
        }
      })
      .catch(() => setStatus("blocked"));
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-violet-600 animate-spin" />
          <p className="text-slate-500 text-sm">Đang xác minh quyền truy cập...</p>
        </div>
      </div>
    );
  }

  if (status === "blocked") {
    const isNotAuth = reason === "not_authenticated";
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            {isNotAuth ? (
              <Shield className="w-8 h-8 text-amber-400" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-amber-400" />
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-3">
            {isNotAuth ? "Yêu cầu đăng nhập" : "Truy cập bị giới hạn"}
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {isNotAuth
              ? "Bạn cần đăng nhập để truy cập Trung tâm Giảng viên."
              : "Tính năng Syllabus Builder chỉ dành cho giảng viên thuộc tổ chức đối tác chiến lược đã được xác minh bởi Vibework.vn."}
          </p>

          {/* Rules Box */}
          {!isNotAuth && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left space-y-2">
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
                Luật chơi chung Vibework
              </p>
              {[
                "Giảng viên phải thuộc tổ chức đối tác đã verify",
                "Mọi đề cương phải theo tiêu chuẩn 7 sections",
                "PDF xuất có nhãn Powered by Vibework.vn",
                "Không thể export nếu còn thiếu nội dung bắt buộc",
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                  <span className="text-slate-300 text-xs">{rule}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col gap-3">
            {isNotAuth ? (
              <a
                href="/api/auth/signin"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Đăng nhập ngay
              </a>
            ) : (
              <a
                href="mailto:partner@vibework.vn"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Liên hệ đăng ký đối tác
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a href="/vibe-learning" className="text-slate-400 text-sm hover:text-white transition-colors">
              ← Quay lại Vibe Learning
            </a>
          </div>

          {/* Vibework badge */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-slate-600 text-xs">Powered by <span className="text-violet-400 font-semibold">Vibework.vn</span></p>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children(membership!)}</>;
}
