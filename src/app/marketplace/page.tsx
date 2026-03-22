import Link from "next/link";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <style jsx global>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap');
        body { background: #000; font-family: 'Satoshi', sans-serif; -webkit-font-smoothing: antialiased; }
      `}</style>

      {/* Back link */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 text-[#555] hover:text-white transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Vibework Hub
        </Link>
      </div>

      {/* Status pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
        <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Đang phát triển</span>
      </div>

      <h1
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        AI Tool
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#34D399]">
          Marketplace
        </span>
      </h1>

      <p className="text-[#777] text-lg max-w-xl mb-12">
        Chợ công cụ AI lớn nhất Việt Nam đang được xây dựng. 120+ tools từ AI Writing đến Automation — tất cả sẽ sẵn sàng sớm.
      </p>

      {/* Feature preview list */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full mb-14">
        {[
          { label: "120+ AI Tools", sub: "Từ content đến automation" },
          { label: "Dùng ngay", sub: "Không cần cài đặt" },
          { label: "Mỗi tuần cập nhật", sub: "Tool mới từ cộng đồng" },
        ].map((f) => (
          <div key={f.label} className="bg-[#111] border border-white/[0.06] rounded-2xl p-5 text-center">
            <p className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>{f.label}</p>
            <p className="text-[#555] text-xs">{f.sub}</p>
          </div>
        ))}
      </div>

      {/* Email waitlist */}
      <div className="w-full max-w-sm">
        <p className="text-[#555] text-sm mb-4">Nhận thông báo khi ra mắt</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="email@example.com"
            className="flex-1 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white/80 placeholder-[#444] text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          <button className="px-5 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors shrink-0">
            Đăng ký
          </button>
        </div>
      </div>

      <div className="mt-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#0D9488]" />
          <span className="text-[#555] text-sm font-bold" style={{ fontFamily: "'Clash Display', sans-serif" }}>Vibework.vn</span>
        </Link>
      </div>
    </main>
  );
}
