"use client";

import VLNavbar from "./VLNavbar";
import VLHero from "./VLHero";
import VLMentorSection from "./VLMentorSection";
import VLQuestSection from "./VLQuestSection";
import VLSkillTree from "./VLSkillTree";
import VLHowItWorks from "./VLHowItWorks";
import VLFeed from "./VLFeed";
import VLPricing from "./VLPricing";
import VLFooter from "./VLFooter";

export default function VibeLearningApp() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-violet-200 selection:text-violet-900">
            <VLNavbar />
            <VLHero />
            <VLHowItWorks />
            <VLMentorSection />
            <VLQuestSection />
            <VLSkillTree />
            <VLFeed />
            <VLPricing />
            <VLFooter />
        </main>
    );
}
