import Link from "next/link";

export default function HPFooter() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#0D9488]" />
              <span className="text-white font-bold" style={{ fontFamily: "'Clash Display', sans-serif" }}>Vibework</span>
            </div>
            <p className="text-[#555] text-sm leading-relaxed">AI Hub all-in-one cho doanh nghiệp và cá nhân Việt Nam.</p>
          </div>

          {[
            { title: "Nền tảng", links: ["AI Agents", "Công Cụ AI", "Vibe Learning", "Vibecoding"] },
            { title: "Công ty", links: ["Về chúng tôi", "Tuyển dụng", "Đối tác", "Blog"] },
            { title: "Hỗ trợ", links: ["Tài liệu", "Liên hệ", "Điều khoản", "Bảo mật"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}><Link href="#" className="text-[#555] text-sm hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#444] text-xs">© 2026 Vibework.vn. All rights reserved.</p>
          <p className="text-[#444] text-xs">Made in Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
