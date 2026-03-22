import OnboardingWizard from "../../components/onboarding/OnboardingWizard";

export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
                <OnboardingWizard />
            </div>
        </div>
    );
}
