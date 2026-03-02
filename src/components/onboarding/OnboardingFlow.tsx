"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProgressBar from "./ProgressBar";
import CassieMascot from "./CassieMascot";
import Step1_Identity from "./Step1_Identity";
import Step2_Mission from "./Step2_Mission";
import Step3_Pricing from "./Step3_Pricing";
import Step4_Success from "./Step4_Success";

interface OnboardingData {
    businessName: string;
    agentAlias: string;
    industry: string;
    zaloNumber: string;
    platforms: string[];
    missions: string[];
}

const TOTAL_STEPS = 4;

export default function OnboardingFlow() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [data, setData] = useState<OnboardingData>({
        businessName: "",
        agentAlias: "CASSIE",
        industry: "",
        zaloNumber: "",
        platforms: [],
        missions: [],
    });

    const goNext = () => {
        setDirection(1);
        setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    };

    const goBack = () => {
        setDirection(-1);
        setStep((s) => Math.max(s - 1, 1));
    };

    const updateData = (patch: Partial<OnboardingData>) => {
        setData((d) => ({ ...d, ...patch }));
    };

    const variants = {
        initial: (dir: number) => ({
            x: dir > 0 ? 80 : -80,
            opacity: 0,
            filter: "blur(4px)",
        }),
        animate: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -80 : 80,
            opacity: 0,
            filter: "blur(4px)",
        }),
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 100%), #030712",
            }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Progress Bar (fixed top) */}
            {step < TOTAL_STEPS && <ProgressBar step={step} total={TOTAL_STEPS} />}

            {/* Step Content */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={step}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full"
                >
                    {step === 1 && (
                        <Step1_Identity
                            data={{
                                businessName: data.businessName,
                                agentAlias: data.agentAlias,
                                industry: data.industry,
                                zaloNumber: data.zaloNumber,
                                platforms: data.platforms,
                            }}
                            onUpdate={(patch) => updateData(patch)}
                            onNext={goNext}
                        />
                    )}
                    {step === 2 && (
                        <Step2_Mission
                            selected={data.missions}
                            onUpdate={(missions) => updateData({ missions })}
                            onNext={goNext}
                            onBack={goBack}
                        />
                    )}
                    {step === 3 && (
                        <Step3_Pricing
                            onNext={goNext}
                            onBack={goBack}
                            businessName={data.businessName}
                        />
                    )}
                    {step === 4 && (
                        <Step4_Success
                            businessName={data.businessName}
                            agentAlias={data.agentAlias}
                            zaloNumber={data.zaloNumber}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Cassie Mascot — always present except success (handled inside Step4) */}
            <CassieMascot step={step} />
        </div>
    );
}
