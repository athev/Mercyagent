"use client";

import VCNavbar from "./VCNavbar";
import VCHero from "./VCHero";
import VCMarketShift from "./VCMarketShift";
import VCThreeLevels from "./VCThreeLevels";
import VCModuleTree from "./VCModuleTree";
import VCAITeam from "./VCAITeam";
import VCCompetitiveEdge from "./VCCompetitiveEdge";
import VCPricing from "./VCPricing";
import VCFooter from "./VCFooter";

export default function VibeCodingApp() {
    return (
        <main
            className="min-h-screen selection:bg-[#C6FF00]/30 selection:text-[#0A0A0A] vc-scrollbar"
            style={{ backgroundColor: "var(--vc-bg)", color: "var(--vc-white)" }}
        >
            <VCNavbar />
            <VCHero />
            <VCMarketShift />
            <VCThreeLevels />
            <VCModuleTree />
            <VCAITeam />
            <VCCompetitiveEdge />
            <VCPricing />
            <VCFooter />
        </main>
    );
}
