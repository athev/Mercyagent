"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrainerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Fake state for demo
  const [stats] = useState({
    rankingTier: "Pro",
    rating: 4.8,
    jobsCompleted: 12,
    earnings: "35tr"
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/20 blur-[50px] rounded-full"></div>
              
              <img 
                src={session.user.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.name}`} 
                alt="Avatar" 
                className="w-24 h-24 rounded-full border-2 border-white/10 mb-4 bg-black"
              />
              <h2 className="text-xl font-bold text-white">{session.user.name}</h2>
              <p className="text-[#888] text-sm mb-4">AI Trainer / Developer</p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                {stats.rankingTier} Rank
              </div>

              <div className="w-full grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-wider mb-1">Đánh giá</p>
                  <p className="text-white font-bold flex items-center justify-center gap-1">
                    <span className="text-[#F59E0B]">★</span> {stats.rating}
                  </p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-wider mb-1">Đã hoàn thành</p>
                  <p className="text-white font-bold">{stats.jobsCompleted} Job</p>
                </div>
              </div>
            </div>

            <Link href="/marketplace" className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-sm font-bold transition-colors">
              <svg className="w-5 h-5 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Tìm thêm việc trên Chợ
            </Link>
          </div>

          {/* Right Column: Active Jobs & Stats */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            
            {/* Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-[#888] text-xs font-bold uppercase tracking-wider mb-2">Thu nhập dự kiến</p>
                <div className="text-3xl font-bold text-white">{stats.earnings}</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-[#888] text-xs font-bold uppercase tracking-wider mb-2">Đang thực hiện</p>
                <div className="text-3xl font-bold text-[#0D9488]">2</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-[#888] text-xs font-bold uppercase tracking-wider mb-2">Điểm kinh nghiệm</p>
                <div className="text-3xl font-bold text-[#7C3AED]">1,240</div>
              </div>
            </div>

            {/* Active Workspace List */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 sm:p-8 flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Dự án Đang thực hiện</h3>
                <button className="text-[#888] hover:text-white text-sm">Xem tất cả</button>
              </div>

              <div className="space-y-4">
                {/* Fake Active Job */}
                <div className="p-5 rounded-2xl border border-white/10 bg-[#111] hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-wider rounded">In Progress</span>
                    <span className="text-white/40 text-xs text-right">Deadline: 2 ngày nữa</span>
                  </div>
                  <h4 className="text-white font-bold mb-1">Xây dựng Landing Page Bất Động Sản</h4>
                  <p className="text-[#888] text-xs mb-4">Khách hàng: Nguyen Tran</p>
                  
                  <div className="w-full bg-white/5 rounded-full h-1.5 mb-2">
                    <div className="bg-gradient-to-r from-[#7C3AED] to-[#0D9488] h-1.5 rounded-full w-[60%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    <span>Tiến độ</span>
                    <span>60%</span>
                  </div>
                </div>

                {/* Empty State / Bid history */}
                <div className="p-5 flex flex-col items-center justify-center border border-dashed border-white/20 rounded-2xl py-12">
                   <p className="text-white/40 text-sm mb-4">Bạn chưa nhận thêm dự án nào.</p>
                   <Link href="/marketplace" className="text-[#7C3AED] hover:text-white font-bold text-sm underline decoration-[#7C3AED]/30 underline-offset-4 transition-colors">
                     Vào Marketplace chọn việc
                   </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
