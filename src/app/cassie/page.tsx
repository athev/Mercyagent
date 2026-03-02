import CassieHero from "../../components/cassie/CassieHero";
import CassieProblem from "../../components/cassie/CassieProblem";
import RevenueLeakSimulator from "../../components/cassie/RevenueLeakSimulator";
import CassieStory from "../../components/cassie/CassieStory";
import CassieFeatures from "../../components/cassie/CassieFeatures";
import CassieEcosystem from "../../components/cassie/CassieEcosystem";
import CassieEvolution from "../../components/cassie/CassieEvolution";
import CassiePricing from "../../components/cassie/CassiePricing";
import CassieCTA from "../../components/cassie/CassieCTA";

export const metadata = {
  title: "CASSIE - AI Customer Support & Sales Assistant",
  description: "Hi Sếp, CASSIE đây. CASSIE giúp Sếp không bỏ lỡ bất kỳ khách hàng nào.",
};

export default function CassiePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30">
      <CassieHero />
      <CassieProblem />
      <RevenueLeakSimulator />
      <CassieStory />
      <CassieFeatures />
      <CassieEcosystem />
      <CassieEvolution />
      <CassiePricing />
      <CassieCTA />
      
      <footer className="py-20 text-center border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <img src="/agents/cassie.png" alt="Cassie Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">CASSIE</span>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Hệ thống trợ lý ảo AI thông minh giúp doanh nghiệp tối ưu hóa quy trình bán hàng và chăm sóc khách hàng tự động.
            </p>
            <div className="flex gap-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-cyan-400 transition-colors">Tính năng</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Bảng giá</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Liên hệ</a>
            </div>
            <div className="pt-10 border-t border-white/5 w-full text-[10px] text-gray-600 uppercase tracking-[0.2em]">
              © 2024 CASSIE AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
