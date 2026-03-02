import CassieHero from "../../components/cassie/CassieHero";
import CassieProblem from "../../components/cassie/CassieProblem";
import CassieStory from "../../components/cassie/CassieStory";
import CassieFeatures from "../../components/cassie/CassieFeatures";

export const metadata = {
  title: "CASSIE - AI Customer Support & Sales Assistant",
  description: "Hi Sếp, CASSIE đây. CASSIE giúp Sếp không bỏ lỡ bất kỳ khách hàng nào.",
};

export default function CassiePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30">
      <CassieHero />
      <CassieProblem />
      <CassieStory />
      <CassieFeatures />
    </main>
  );
}
