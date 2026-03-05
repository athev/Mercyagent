"use client";

import VCNavbar from "./VCNavbar";
import VCHero from "./VCHero";
import VCMarketShift from "./VCMarketShift";
import VCThreeLevels from "./VCThreeLevels";
import VCModuleTree from "./VCModuleTree";
import VCAITeam from "./VCAITeam";
import VCCompetitiveEdge from "./VCCompetitiveEdge";
import VCTestimonials from "./VCTestimonials";
import VCPricing from "./VCPricing";
import VCFooter from "./VCFooter";
import VCStickyCTA from "./VCStickyCTA";
import { VCTargetAudience } from "./VCTargetAudience";
import { VCFAQ } from "./VCFAQ";

export default function VibeCodingApp() {
    return (
        <main
            className="min-h-screen selection:bg-[var(--vc-lime)]/30 selection:text-[#0A0A0A] vc-scrollbar"
            style={{ backgroundColor: "var(--vc-bg)", color: "var(--vc-white)" }}
        >
            <VCNavbar />
            <VCHero />
            <VCMarketShift />
            <VCThreeLevels />
            <VCTargetAudience />
            <VCModuleTree />
            <VCAITeam />
            <VCCompetitiveEdge />
            <VCTestimonials />
            <VCFAQ />
            <VCPricing />
            <VCFooter />
            <VCStickyCTA />
        </main>
    );
}
