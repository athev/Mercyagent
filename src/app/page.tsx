"use client";

import HPNavbar from "../components/homepage/HPNavbar";
import HPPlaygroundHero from "../components/homepage/HPPlaygroundHero";
import HPServices from "../components/homepage/HPServices";
import HPWhyVibework from "../components/homepage/HPWhyVibework";
import HPPersonas from "../components/homepage/HPPersonas";
import HPHowItWorksNew from "../components/homepage/HPHowItWorksNew";
import HPFaqNew from "../components/homepage/HPFaqNew";
import HPFinalCtaNew from "../components/homepage/HPFinalCtaNew";
import HPFooterNew from "../components/homepage/HPFooterNew";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          background-color: #ffffff;
          color: #111827;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(59,130,246,0.2); color: #1e3a5f; }
      `}</style>

      <HPNavbar />
      <HPPlaygroundHero />
      <HPServices />
      <HPWhyVibework />
      <HPPersonas />
      <HPHowItWorksNew />
      <HPFaqNew />
      <HPFinalCtaNew />
      <HPFooterNew />
    </main>
  );
}
