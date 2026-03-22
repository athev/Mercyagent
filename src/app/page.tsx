"use client";

import HPNavbar from "../components/homepage/HPNavbar";
import HPPlaygroundHero from "../components/homepage/HPPlaygroundHero";
import HPShowcase from "../components/homepage/HPShowcase";
import HPLayerAgents from "../components/homepage/HPLayerAgents";
import HPLayerTools from "../components/homepage/HPLayerTools";
import HPLayerLearning from "../components/homepage/HPLayerLearning";
import HPTestimonials from "../components/homepage/HPTestimonials";
import HPFinalCTA from "../components/homepage/HPFinalCTA";
import HPFooter from "../components/homepage/HPFooter";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      <style jsx global>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap');
        body {
          background-color: #000;
          color: #fff;
          font-family: 'Satoshi', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(124,58,237,0.3); color: #fff; }
      `}</style>

      <HPNavbar />
      <HPPlaygroundHero />
      <HPShowcase />
      <HPLayerAgents />
      <HPLayerTools />
      <HPLayerLearning />
      <HPTestimonials />
      <HPFinalCTA />
      <HPFooter />
    </main>
  );
}
