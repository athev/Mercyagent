(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const STEP_LABELS = [
    "Định danh",
    "Nhiệm vụ",
    "Gói dịch vụ",
    "Kích hoạt"
];
function ProgressBar({ step, total }) {
    const progress = (step - 1) / (total - 1) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full bg-white/5"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 h-[2px] origin-left",
                animate: {
                    width: `${progress}%`
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.23,
                        1,
                        0.32,
                        1
                    ]
                },
                style: {
                    background: "linear-gradient(to right, #06B6D4, #3B82F6, #8B5CF6)",
                    boxShadow: "0 0 8px #06B6D4, 0 0 20px #3B82F6, 0 0 40px rgba(139,92,246,0.4)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                    style: {
                        background: "white",
                        boxShadow: "0 0 6px 2px #06B6D4, 0 0 16px 4px #3B82F6"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-0 right-0 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-0",
                    children: STEP_LABELS.map((label, i)=>{
                        const stepNum = i + 1;
                        const isComplete = step > stepNum;
                        const isActive = step === stepNum;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-px w-12 sm:w-20",
                                    animate: {
                                        background: isComplete || isActive && i === step - 1 ? "linear-gradient(to right, #06B6D4, #3B82F6)" : "rgba(255,255,255,0.1)",
                                        boxShadow: isComplete ? "0 0 6px rgba(6,182,212,0.6)" : "none"
                                    },
                                    transition: {
                                        duration: 0.4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: isActive ? 1.15 : 1,
                                                background: isComplete ? "linear-gradient(135deg, #06B6D4, #3B82F6)" : isActive ? "linear-gradient(135deg, #1e3a5f, #1d4ed8)" : "rgba(255,255,255,0.05)",
                                                boxShadow: isActive ? "0 0 12px rgba(59,130,246,0.8), 0 0 30px rgba(6,182,212,0.4)" : isComplete ? "0 0 8px rgba(6,182,212,0.5)" : "none"
                                            },
                                            transition: {
                                                duration: 0.4
                                            },
                                            className: "w-7 h-7 rounded-full flex items-center justify-center border",
                                            style: {
                                                borderColor: isActive ? "#3B82F6" : isComplete ? "#06B6D4" : "rgba(255,255,255,0.1)"
                                            },
                                            children: isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 text-white",
                                                viewBox: "0 0 12 12",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 6l3 3 5-5",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-bold ${isActive ? "text-blue-200" : "text-white/30"}`,
                                                children: stepNum
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                                lineNumber: 102,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                color: isActive ? "#93C5FD" : isComplete ? "#67E8F9" : "rgba(255,255,255,0.25)"
                                            },
                                            className: "text-[9px] font-semibold tracking-widest uppercase hidden sm:block",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                            lineNumber: 49,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/ProgressBar.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/CassieMascot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CassieMascot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const STEP_MESSAGES = {
    1: "Chào Sếp! Cho tôi biết về 'ngôi nhà' của Sếp nhé!",
    2: "Tôi sẵn sàng học các kỹ năng Sếp cần!",
    3: "Đây là gói phù hợp nhất với Sếp đó!",
    4: "Hệ thống sẵn sàng rồi Sếp ơi! 🎉"
};
function CassieMascot({ step }) {
    _s();
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const isSuccess = step === 4;
    // Auto-hide tooltip after delay, then re-show on step change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CassieMascot.useEffect": ()=>{
            setShowTooltip(true);
            const timer = setTimeout({
                "CassieMascot.useEffect.timer": ()=>{
                    if (!isSuccess) setShowTooltip(false);
                }
            }["CassieMascot.useEffect.timer"], 4000);
            return ({
                "CassieMascot.useEffect": ()=>clearTimeout(timer)
            })["CassieMascot.useEffect"];
        }
    }["CassieMascot.useEffect"], [
        step,
        isSuccess
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed bottom-8 right-6 z-50 flex flex-col items-end gap-2",
        animate: {
            y: isSuccess ? [
                -0,
                -40,
                -30
            ] : 0
        },
        transition: {
            duration: isSuccess ? 1.2 : 0.5,
            ease: isSuccess ? [
                0.23,
                1,
                0.32,
                1
            ] : "easeOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8,
                        y: 5
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "max-w-[160px] px-3 py-2 rounded-xl text-xs text-right leading-relaxed",
                    style: {
                        background: "rgba(6, 182, 212, 0.08)",
                        border: "1px solid rgba(6, 182, 212, 0.25)",
                        backdropFilter: "blur(12px)",
                        color: "#A5F3FC"
                    },
                    children: [
                        STEP_MESSAGES[step],
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 right-[-6px] w-3 h-3 rotate-45",
                            style: {
                                background: "rgba(6, 182, 212, 0.08)",
                                borderRight: "1px solid rgba(6, 182, 212, 0.25)",
                                borderTop: "1px solid rgba(6, 182, 212, 0.25)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, this)
                    ]
                }, `tooltip-step-${step}`, true, {
                    fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                    lineNumber: 44,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative cursor-pointer",
                onClick: ()=>setShowTooltip((v)=>!v),
                children: [
                    [
                        1,
                        2,
                        3
                    ].map((ring)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-full",
                            animate: {
                                scale: [
                                    1,
                                    1.8 + ring * 0.3
                                ],
                                opacity: [
                                    0.4,
                                    0
                                ]
                            },
                            transition: {
                                duration: 2.5,
                                delay: ring * 0.6,
                                repeat: Infinity,
                                ease: "easeOut"
                            },
                            style: {
                                border: `1px solid rgba(6, 182, 212, ${0.6 - ring * 0.15})`
                            }
                        }, ring, false, {
                            fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            boxShadow: isSuccess ? [
                                "0 0 20px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.3)",
                                "0 0 40px rgba(245,158,11,0.9), 0 0 100px rgba(245,158,11,0.5)",
                                "0 0 20px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.3)"
                            ] : [
                                "0 0 15px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)",
                                "0 0 25px rgba(6,182,212,0.7), 0 0 60px rgba(6,182,212,0.3)",
                                "0 0 15px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)"
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden",
                        style: {
                            background: isSuccess ? "radial-gradient(circle, rgba(245,158,11,0.2), rgba(245,158,11,0.05))" : "radial-gradient(circle, rgba(6,182,212,0.15), rgba(59,130,246,0.05))",
                            border: isSuccess ? "1.5px solid rgba(245,158,11,0.5)" : "1.5px solid rgba(6,182,212,0.4)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/agents/cassie.png",
                                alt: "Cassie",
                                className: "w-9 h-9 object-contain",
                                onError: (e)=>{
                                    e.currentTarget.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute text-xl",
                                children: "🤖"
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    isSuccess && [
                        0,
                        60,
                        120,
                        180,
                        240,
                        300
                    ].map((deg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-yellow-300",
                            initial: {
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                x: Math.cos(deg * Math.PI / 180) * 35,
                                y: Math.sin(deg * Math.PI / 180) * 35,
                                opacity: [
                                    0,
                                    1,
                                    0
                                ],
                                scale: [
                                    0,
                                    1.5,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                delay: i * 0.08,
                                repeat: Infinity,
                                repeatDelay: 1
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/CassieMascot.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(CassieMascot, "QPZfEi6cSqlkI+/jDRgNIS3K4+Y=");
_c = CassieMascot;
var _c;
__turbopack_context__.k.register(_c, "CassieMascot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/NeonButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeonButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const VARIANTS = {
    cyan: {
        bg: "from-blue-600 via-cyan-600 to-blue-600",
        glow: [
            "0 0 15px rgba(6,182,212,0.5), 0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(6,182,212,0.1)",
            "0 0 25px rgba(6,182,212,0.8), 0 0 60px rgba(59,130,246,0.5), 0 0 120px rgba(6,182,212,0.2)",
            "0 0 15px rgba(6,182,212,0.5), 0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(6,182,212,0.1)"
        ],
        border: "rgba(6,182,212,0.6)",
        text: "text-white"
    },
    gold: {
        bg: "from-yellow-500 via-amber-400 to-orange-500",
        glow: [
            "0 0 15px rgba(245,158,11,0.5), 0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(245,158,11,0.1)",
            "0 0 30px rgba(245,158,11,0.9), 0 0 70px rgba(251,191,36,0.5), 0 0 130px rgba(245,158,11,0.3)",
            "0 0 15px rgba(245,158,11,0.5), 0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(245,158,11,0.1)"
        ],
        border: "rgba(245,158,11,0.6)",
        text: "text-black"
    }
};
function NeonButton({ children, onClick, variant = "cyan", disabled = false, className = "", type = "button", href }) {
    const v = VARIANTS[variant];
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: type,
        onClick: onClick,
        disabled: disabled,
        whileHover: disabled ? {} : {
            scale: 1.03
        },
        whileTap: disabled ? {} : {
            scale: 0.97
        },
        animate: disabled ? {
            boxShadow: "none"
        } : {
            boxShadow: v.glow
        },
        transition: {
            boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            },
            scale: {
                duration: 0.15
            }
        },
        className: `
        relative group overflow-hidden rounded-full
        px-8 py-4 font-bold text-base tracking-wide
        bg-gradient-to-r ${v.bg} ${v.text}
        transition-opacity duration-200
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `,
        style: {
            border: `1px solid ${v.border}`
        },
        children: [
            !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/NeonButton.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 flex items-center justify-center gap-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/NeonButton.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/NeonButton.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            children: inner
        }, void 0, false, {
            fileName: "[project]/src/components/onboarding/NeonButton.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, this);
    }
    return inner;
}
_c = NeonButton;
var _c;
__turbopack_context__.k.register(_c, "NeonButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/Step1_Identity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1_Identity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/NeonButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const INDUSTRIES = [
    {
        icon: "🛒",
        label: "E-commerce"
    },
    {
        icon: "🏠",
        label: "Bất động sản"
    },
    {
        icon: "🍜",
        label: "F&B"
    },
    {
        icon: "📚",
        label: "Giáo dục"
    },
    {
        icon: "💊",
        label: "Sức khoẻ"
    },
    {
        icon: "✨",
        label: "Làm đẹp"
    },
    {
        icon: "💻",
        label: "Công nghệ"
    },
    {
        icon: "🏗️",
        label: "Khác"
    }
];
const ALIAS_PRESETS = [
    "CASSIE",
    "Trợ lý",
    "Tự chọn"
];
// Platform SVG logos
const FacebookLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "28",
        height: "28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "24",
                rx: "6",
                fill: "#1877F2"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 12H13.5V9.75C13.5 9.336 13.836 9 14.25 9H15.75V6H13.5C11.843 6 10.5 7.343 10.5 9V12H8.25V15H10.5V22.5H13.5V15H15.75L16.5 12Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = FacebookLogo;
const TikTokLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "28",
        height: "28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "24",
                rx: "6",
                fill: "#010101"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.59 7a4.31 4.31 0 0 1-4.3-4.3V2h-2.89v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.53a5.77 5.77 0 0 0-.79-.05 5.77 5.77 0 0 0-5.77 5.77 5.77 5.77 0 0 0 5.77 5.77 5.77 5.77 0 0 0 5.77-5.77V8.63a7.17 7.17 0 0 0 4.19 1.34V7.08A4.32 4.32 0 0 1 19.59 7z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.59 7a4.31 4.31 0 0 1-4.3-4.3V2h-2.89v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.53a5.77 5.77 0 0 0-.79-.05 5.77 5.77 0 0 0-5.77 5.77 5.77 5.77 0 0 0 5.77 5.77 5.77 5.77 0 0 0 5.77-5.77V8.63a7.17 7.17 0 0 0 4.19 1.34V7.08",
                fill: "#EE1D52",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.5 6.5a4.31 4.31 0 0 0 2.09.58V4.71a4.32 4.32 0 0 1-2.09-.71v2.5z",
                fill: "#69C9D0"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = TikTokLogo;
const ShopeeLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "28",
        height: "28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "24",
                rx: "6",
                fill: "#EE4D2D"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.5C10.07 3.5 8.5 5.07 8.5 7H7L6 18.5H18L17 7H15.5C15.5 5.07 13.93 3.5 12 3.5ZM12 5C13.1 5 14 5.9 14 7H10C10 5.9 10.9 5 12 5ZM12 11C13.66 11 15 12.34 15 14C15 15.66 13.66 17 12 17C10.34 17 9 15.66 9 14C9 12.34 10.34 11 12 11Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "14",
                r: "1.5",
                fill: "#EE4D2D"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ShopeeLogo;
const WebsiteLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "28",
        height: "28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "24",
                height: "24",
                rx: "6",
                fill: "rgba(6,182,212,0.15)",
                stroke: "rgba(6,182,212,0.6)",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "7",
                stroke: "#06B6D4",
                strokeWidth: "1.5",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "12",
                rx: "3.5",
                ry: "7",
                stroke: "#06B6D4",
                strokeWidth: "1.2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12",
                stroke: "#06B6D4",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6.5",
                y1: "8",
                x2: "17.5",
                y2: "8",
                stroke: "#06B6D4",
                strokeWidth: "1",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6.5",
                y1: "16",
                x2: "17.5",
                y2: "16",
                stroke: "#06B6D4",
                strokeWidth: "1",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = WebsiteLogo;
const PLATFORMS = [
    {
        label: "Facebook",
        Logo: FacebookLogo,
        color: "rgba(24,119,242,0.6)",
        glow: "rgba(24,119,242,0.25)"
    },
    {
        label: "TikTok",
        Logo: TikTokLogo,
        color: "rgba(238,29,82,0.6)",
        glow: "rgba(238,29,82,0.25)"
    },
    {
        label: "Shopee",
        Logo: ShopeeLogo,
        color: "rgba(238,77,45,0.6)",
        glow: "rgba(238,77,45,0.25)"
    },
    {
        label: "Website",
        Logo: WebsiteLogo,
        color: "rgba(6,182,212,0.6)",
        glow: "rgba(6,182,212,0.25)"
    }
];
function Step1_Identity({ data, onUpdate, onNext }) {
    _s();
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [aliasMode, setAliasMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALIAS_PRESETS.includes(data.agentAlias) ? data.agentAlias : "Tự chọn");
    const particleIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const spawnParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step1_Identity.useCallback[spawnParticles]": (e)=>{
            const rect = e.target.getBoundingClientRect();
            const newParticles = Array.from({
                length: 6
            }, {
                "Step1_Identity.useCallback[spawnParticles].newParticles": ()=>({
                        id: particleIdRef.current++,
                        x: e.clientX - rect.left || Math.random() * rect.width,
                        y: 0,
                        angle: Math.random() * 360
                    })
            }["Step1_Identity.useCallback[spawnParticles].newParticles"]);
            setParticles({
                "Step1_Identity.useCallback[spawnParticles]": (p)=>[
                        ...p,
                        ...newParticles
                    ]
            }["Step1_Identity.useCallback[spawnParticles]"]);
            setTimeout({
                "Step1_Identity.useCallback[spawnParticles]": ()=>setParticles({
                        "Step1_Identity.useCallback[spawnParticles]": (p)=>p.filter({
                                "Step1_Identity.useCallback[spawnParticles]": (pt)=>!newParticles.find({
                                        "Step1_Identity.useCallback[spawnParticles]": (np)=>np.id === pt.id
                                    }["Step1_Identity.useCallback[spawnParticles]"])
                            }["Step1_Identity.useCallback[spawnParticles]"])
                    }["Step1_Identity.useCallback[spawnParticles]"])
            }["Step1_Identity.useCallback[spawnParticles]"], 900);
        }
    }["Step1_Identity.useCallback[spawnParticles]"], []);
    const isValid = data.businessName.trim().length > 0 && data.agentAlias.trim().length > 0 && data.industry && data.zaloNumber.trim().length >= 9 && data.platforms.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: [
                    [
                        200,
                        350,
                        500,
                        680
                    ].map((size, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full",
                            animate: {
                                scale: [
                                    1,
                                    1.05,
                                    1
                                ],
                                opacity: [
                                    0.08,
                                    0.18,
                                    0.08
                                ]
                            },
                            transition: {
                                duration: 3 + i * 0.7,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            },
                            style: {
                                width: size,
                                height: size,
                                border: "1px solid rgba(6,182,212,0.5)"
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-0 right-0 h-px pointer-events-none",
                        style: {
                            background: "linear-gradient(to right, transparent, rgba(6,182,212,0.6), transparent)"
                        },
                        initial: {
                            top: "0%",
                            opacity: 0
                        },
                        animate: {
                            top: [
                                "0%",
                                "100%"
                            ],
                            opacity: [
                                0,
                                1,
                                1,
                                0
                            ]
                        },
                        transition: {
                            duration: 2.5,
                            ease: "linear",
                            delay: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.23,
                        1,
                        0.32,
                        1
                    ]
                },
                className: "relative z-10 w-full max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase",
                                style: {
                                    borderColor: "rgba(6,182,212,0.4)",
                                    background: "rgba(6,182,212,0.06)",
                                    color: "#67E8F9"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    "Bước 1 — Xác nhận quyết định"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight",
                                children: [
                                    "Sếp sắp kích hoạt",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text",
                                        style: {
                                            backgroundImage: "linear-gradient(135deg, #06B6D4, #3B82F6)"
                                        },
                                        children: "CASSIE."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/40 leading-relaxed max-w-sm mx-auto",
                                children: [
                                    "Chào Sếp, CASSIE cần hiểu về",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400/70",
                                        children: "'ngôi nhà'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 205,
                                        columnNumber: 25
                                    }, this),
                                    " của Sếp để bắt đầu trực chiến."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassInput, {
                                label: "Tên của Sếp là gì?",
                                placeholder: "VD: Trung, Lan Anh...",
                                value: data.businessName,
                                onChange: (v)=>onUpdate({
                                        businessName: v
                                    }),
                                onInput: spawnParticles,
                                particles: particles
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-white/40",
                                        children: "Sếp muốn CASSIE xưng hô với khách là?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 mb-2",
                                        children: ALIAS_PRESETS.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setAliasMode(preset);
                                                    if (preset !== "Tự chọn") onUpdate({
                                                        agentAlias: preset
                                                    });
                                                    else onUpdate({
                                                        agentAlias: ""
                                                    });
                                                },
                                                className: "px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200",
                                                style: {
                                                    background: aliasMode === preset ? "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(59,130,246,0.15))" : "rgba(255,255,255,0.04)",
                                                    border: aliasMode === preset ? "1px solid rgba(6,182,212,0.6)" : "1px solid rgba(255,255,255,0.08)",
                                                    color: aliasMode === preset ? "#67E8F9" : "rgba(255,255,255,0.4)",
                                                    boxShadow: aliasMode === preset ? "0 0 12px rgba(6,182,212,0.2)" : "none"
                                                },
                                                children: preset
                                            }, preset, false, {
                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    aliasMode === "Tự chọn" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: "auto"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassInput, {
                                            placeholder: "Nhập tên bạn muốn...",
                                            value: data.agentAlias,
                                            onChange: (v)=>onUpdate({
                                                    agentAlias: v
                                                }),
                                            onInput: spawnParticles,
                                            particles: particles
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                            lineNumber: 261,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-white/40",
                                        children: "Lĩnh vực kinh doanh"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 274,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-3",
                                        children: INDUSTRIES.map(({ icon, label })=>{
                                            const isSelected = data.industry === label;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                onClick: ()=>onUpdate({
                                                        industry: label
                                                    }),
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-center transition-all duration-200",
                                                style: {
                                                    background: isSelected ? "rgba(6,182,212,0.12)" : "rgba(255,255,255,0.03)",
                                                    border: isSelected ? "1px solid rgba(6,182,212,0.5)" : "1px solid rgba(255,255,255,0.06)",
                                                    boxShadow: isSelected ? "0 0 16px rgba(6,182,212,0.2)" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-medium",
                                                        style: {
                                                            color: isSelected ? "#67E8F9" : "rgba(255,255,255,0.35)"
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                lineNumber: 281,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 277,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-white/40",
                                        children: "Số Zalo của Sếp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 312,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-0 bottom-0 flex items-center px-4 gap-2 pointer-events-none",
                                                style: {
                                                    borderRight: "1px solid rgba(255,255,255,0.08)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "🇻🇳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        style: {
                                                            color: "rgba(6,182,212,0.9)"
                                                        },
                                                        children: "+84"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                lineNumber: 317,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                value: data.zaloNumber,
                                                onChange: (e)=>onUpdate({
                                                        zaloNumber: e.target.value.replace(/[^0-9]/g, "")
                                                    }),
                                                onInput: spawnParticles,
                                                placeholder: "0909 123 456",
                                                maxLength: 11,
                                                className: "w-full pl-24 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300",
                                                style: {
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    backdropFilter: "blur(12px)"
                                                },
                                                onFocus: (e)=>{
                                                    e.target.style.border = "1px solid rgba(6,182,212,0.5)";
                                                    e.target.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.08), 0 0 20px rgba(6,182,212,0.1)";
                                                },
                                                onBlur: (e)=>{
                                                    e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                                                    e.target.style.boxShadow = "none";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                lineNumber: 324,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 315,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-white/20",
                                        children: "CASSIE sẽ dùng số này để báo cáo và nhận lệnh từ Sếp qua Zalo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 349,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 311,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-white/40",
                                        children: "CASSIE trực thay Sếp trên nền tảng nào?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 356,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-white/25 -mt-1",
                                        children: "Chọn một hoặc nhiều nền tảng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 359,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-3",
                                        children: PLATFORMS.map(({ Logo, label, color, glow })=>{
                                            const isSelected = data.platforms.includes(label);
                                            const togglePlatform = ()=>{
                                                const updated = isSelected ? data.platforms.filter((p)=>p !== label) : [
                                                    ...data.platforms,
                                                    label
                                                ];
                                                onUpdate({
                                                    platforms: updated
                                                });
                                            };
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                onClick: togglePlatform,
                                                whileHover: {
                                                    scale: 1.05,
                                                    y: -2
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "flex flex-col items-center gap-2.5 py-5 px-2 rounded-2xl text-center transition-all duration-200 relative overflow-hidden",
                                                style: {
                                                    background: isSelected ? `rgba(${color.match(/\d+/g).slice(0, 3).join(",")},0.1)` : "rgba(255,255,255,0.03)",
                                                    border: isSelected ? `1.5px solid ${color}` : "1px solid rgba(255,255,255,0.06)",
                                                    boxShadow: isSelected ? `0 0 20px ${glow}` : "none"
                                                },
                                                children: [
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            scale: 0
                                                        },
                                                        animate: {
                                                            scale: 1
                                                        },
                                                        className: "absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center",
                                                        style: {
                                                            background: color
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 8 8",
                                                            className: "w-2 h-2",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1.5 4l1.5 1.5L6.5 3",
                                                                stroke: "white",
                                                                strokeWidth: "1.2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "scale-125 origin-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold mt-0.5",
                                                        style: {
                                                            color: isSelected ? "#ffffff" : "rgba(255,255,255,0.35)"
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                                lineNumber: 370,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                        lineNumber: 360,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 355,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-10 flex justify-center",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: onNext,
                            disabled: !isValid,
                            className: "px-12",
                            children: "Tiếp theo →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                            lineNumber: 421,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 415,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
_s(Step1_Identity, "NqpJNbTzBg4+E5iIzGOXqbcZgRU=");
_c4 = Step1_Identity;
// Glassmorphism Input Component
function GlassInput({ label, placeholder, value, onChange, onInput, particles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs font-semibold uppercase tracking-widest text-white/40",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 449,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        onInput: onInput,
                        placeholder: placeholder,
                        className: "w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:placeholder:opacity-0",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            backdropFilter: "blur(12px)"
                        },
                        onFocus: (e)=>{
                            e.target.style.border = "1px solid rgba(6,182,212,0.5)";
                            e.target.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.08), 0 0 20px rgba(6,182,212,0.1)";
                        },
                        onBlur: (e)=>{
                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                            e.target.style.boxShadow = "none";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 454,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: particles.slice(-8).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute w-1 h-1 rounded-full pointer-events-none",
                                style: {
                                    left: `${20 + Math.random() * 60}%`,
                                    top: 0,
                                    background: "rgba(6,182,212,0.9)",
                                    boxShadow: "0 0 4px rgba(6,182,212,1)"
                                },
                                initial: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                animate: {
                                    y: -(20 + Math.random() * 30),
                                    x: (Math.random() - 0.5) * 30,
                                    opacity: 0,
                                    scale: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                }
                            }, p.id, false, {
                                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                                lineNumber: 478,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                        lineNumber: 476,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
                lineNumber: 453,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step1_Identity.tsx",
        lineNumber: 447,
        columnNumber: 9
    }, this);
}
_c5 = GlassInput;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FacebookLogo");
__turbopack_context__.k.register(_c1, "TikTokLogo");
__turbopack_context__.k.register(_c2, "ShopeeLogo");
__turbopack_context__.k.register(_c3, "WebsiteLogo");
__turbopack_context__.k.register(_c4, "Step1_Identity");
__turbopack_context__.k.register(_c5, "GlassInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/Step2_Mission.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2_Mission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/NeonButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SKILLS = [
    {
        id: "support",
        icon: "📞",
        title: "Trực tổng đài 24/7",
        desc: "Phản hồi ngay lập tức, không để khách chờ.",
        color: "#06B6D4",
        glow: "rgba(6,182,212,0.3)",
        mascotAction: "gật đầu"
    },
    {
        id: "lead",
        icon: "🎯",
        title: "Thợ săn Lead",
        desc: "Tự động lọc khách nóng, đẩy về cho Sếp.",
        color: "#8B5CF6",
        glow: "rgba(139,92,246,0.3)",
        mascotAction: "giơ ngón cái"
    },
    {
        id: "sales",
        icon: "💬",
        title: "Chốt đơn chuyên nghiệp",
        desc: "Tư vấn theo kịch bản có sẵn của Sếp.",
        color: "#10B981",
        glow: "rgba(16,185,129,0.3)",
        mascotAction: "gật đầu mạnh"
    },
    {
        id: "followup",
        icon: "🔔",
        title: "Nhắc việc & Follow-up",
        desc: "Không để bất kỳ ai bị 'seen' mà không rep.",
        color: "#F59E0B",
        glow: "rgba(245,158,11,0.3)",
        mascotAction: "vẫy tay"
    }
];
function Step2_Mission({ selected, onUpdate, onNext, onBack }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (id)=>{
        if (selected.includes(id)) {
            onUpdate(selected.filter((s)=>s !== id));
        } else {
            onUpdate([
                ...selected,
                id
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center px-6 py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.7,
                ease: [
                    0.23,
                    1,
                    0.32,
                    1
                ]
            },
            className: "w-full max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase",
                            style: {
                                borderColor: "rgba(139,92,246,0.4)",
                                background: "rgba(139,92,246,0.06)",
                                color: "#C4B5FD"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                "Bước 2 — Chọn nhiệm vụ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-3",
                            children: [
                                "Sếp muốn CASSIE tập trung vào",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text",
                                    style: {
                                        backgroundImage: "linear-gradient(135deg, #8B5CF6, #06B6D4)"
                                    },
                                    children: "nhiệm vụ nào?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/35",
                            children: "Chọn một hoặc nhiều kỹ năng. CASSIE sẽ được đào tạo chuyên sâu cho những gì Sếp cần."
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: SKILLS.map((skill, i)=>{
                        const isSelected = selected.includes(skill.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>toggle(skill.id),
                            onHoverStart: ()=>setHovered(skill.id),
                            onHoverEnd: ()=>setHovered(null),
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.2 + i * 0.1
                            },
                            whileHover: {
                                scale: 1.02,
                                y: -2
                            },
                            whileTap: {
                                scale: 0.97
                            },
                            className: "relative text-left p-5 rounded-2xl transition-all duration-300 overflow-hidden",
                            style: {
                                background: isSelected ? `rgba(${skill.color.replace("#", "").match(/.{2}/g).map((v)=>parseInt(v, 16)).join(",")}, 0.08)` : "rgba(255,255,255,0.03)",
                                border: isSelected ? `1.5px solid ${skill.color}80` : "1.5px solid rgba(255,255,255,0.06)",
                                boxShadow: isSelected ? `0 0 20px ${skill.glow}, 0 0 60px ${skill.glow}` : "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        className: "absolute inset-0 pointer-events-none",
                                        style: {
                                            background: `radial-gradient(ellipse at top left, ${skill.glow} 0%, transparent 70%)`
                                        }
                                    }, "glow", false, {
                                        fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                        lineNumber: 133,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 131,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        exit: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 20
                                        },
                                        className: "absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center",
                                        style: {
                                            background: skill.color,
                                            boxShadow: `0 0 8px ${skill.glow}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 10 10",
                                            className: "w-3 h-3",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 5l2.5 2.5L8 3",
                                                stroke: "white",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                                lineNumber: 161,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                            lineNumber: 160,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                        lineNumber: 149,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 147,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: isSelected ? [
                                            1,
                                            1.3,
                                            1
                                        ] : 1
                                    },
                                    transition: {
                                        duration: 0.4
                                    },
                                    className: "text-3xl mb-3",
                                    children: skill.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 174,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm mb-1.5",
                                    style: {
                                        color: isSelected ? skill.color : "rgba(255,255,255,0.85)"
                                    },
                                    children: skill.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs leading-relaxed",
                                    style: {
                                        color: "rgba(255,255,255,0.35)"
                                    },
                                    children: skill.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 191,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 h-0.5 rounded-full overflow-hidden",
                                    style: {
                                        background: "rgba(255,255,255,0.06)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full rounded-full",
                                        animate: {
                                            width: isSelected ? "80%" : "0%"
                                        },
                                        transition: {
                                            duration: 0.5,
                                            ease: [
                                                0.23,
                                                1,
                                                0.32,
                                                1
                                            ]
                                        },
                                        style: {
                                            background: `linear-gradient(to right, ${skill.color}80, ${skill.color})`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                        lineNumber: 197,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                    lineNumber: 196,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, skill.id, true, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 107,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 8
                        },
                        className: "mt-4 text-center text-xs text-white/30",
                        children: [
                            "Đã chọn",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cyan-400 font-bold",
                                children: selected.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                                lineNumber: 219,
                                columnNumber: 29
                            }, this),
                            " kỹ năng"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                        lineNumber: 212,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                    lineNumber: 210,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "text-sm text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5",
                            children: "← Quay lại"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: onNext,
                            disabled: selected.length === 0,
                            className: "px-10",
                            children: "Tiếp theo →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/onboarding/Step2_Mission.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(Step2_Mission, "mEhKvegbaT+HE5gyL2KiZdVDWeQ=");
_c = Step2_Mission;
var _c;
__turbopack_context__.k.register(_c, "Step2_Mission");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/Step3_Pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3_Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/NeonButton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const FEATURES = [
    "Trực 24/7 — không nghỉ lễ, không nghỉ bệnh",
    "Phân loại lead thông minh theo độ nóng",
    "Nhắc follow-up tự động với lịch sử hội thoại",
    "Chuyển khách phức tạp cho nhân sự ngay lập tức",
    "Báo cáo hiệu suất hàng tuần qua Zalo"
];
const TRUST_BADGES = [
    {
        icon: "🔓",
        text: "Không phí ẩn"
    },
    {
        icon: "📅",
        text: "Không hợp đồng dài hạn"
    },
    {
        icon: "✋",
        text: "Dừng bất kỳ lúc nào"
    }
];
function Step3_Pricing({ onNext, onBack, businessName }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center px-6 py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.7,
                ease: [
                    0.23,
                    1,
                    0.32,
                    1
                ]
            },
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase",
                            style: {
                                borderColor: "rgba(245,158,11,0.4)",
                                background: "rgba(245,158,11,0.06)",
                                color: "#FCD34D"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                "Bước 3 — Gói dịch vụ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-white",
                            children: businessName ? `Gói cho Sếp ${businessName}` : "Gói Sếp đã chọn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: 0.2
                    },
                    className: "relative rounded-3xl overflow-hidden p-7",
                    style: {
                        background: "linear-gradient(145deg, rgba(245,158,11,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                        border: "1.5px solid rgba(245,158,11,0.25)",
                        boxShadow: "0 0 40px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none",
                            style: {
                                background: "radial-gradient(circle, rgba(245,158,11,0.1), transparent 70%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-4 h-4 text-yellow-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold tracking-widest uppercase",
                                                    style: {
                                                        color: "#FCD34D"
                                                    },
                                                    children: "CASSIE PROTECT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/30 text-xs",
                                            children: "Gói bảo vệ toàn diện"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1 rounded-full text-xs font-semibold",
                                    style: {
                                        background: "rgba(245,158,11,0.12)",
                                        border: "1px solid rgba(245,158,11,0.3)",
                                        color: "#FCD34D"
                                    },
                                    children: "PHỔ BIẾN NHẤT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 pb-6 border-b border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.4
                                            },
                                            className: "text-4xl font-bold text-white",
                                            style: {
                                                fontFamily: "var(--font-display)"
                                            },
                                            children: "1.490.000đ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/30 text-sm mb-1.5",
                                            children: "/ tháng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/25 mt-1",
                                    children: "≈ 50.000đ/ngày — rẻ hơn 1 tô bún bò"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-6",
                            children: FEATURES.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: 0.3 + i * 0.08
                                    },
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
                                            style: {
                                                background: "rgba(6,182,212,0.2)",
                                                border: "1px solid rgba(6,182,212,0.4)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-2.5 h-2.5 text-cyan-400",
                                                strokeWidth: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                                lineNumber: 138,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/70 leading-relaxed",
                                            children: feature
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 140,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-4 border-t border-white/5",
                            children: TRUST_BADGES.map(({ icon, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-1 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-white/30 font-medium leading-tight max-w-[60px]",
                                            children: text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, text, true, {
                                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.6
                    },
                    className: "mt-6 flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: onNext,
                            variant: "gold",
                            className: "w-full justify-center text-lg py-5",
                            children: "⚡ Xác nhận thanh toán"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/20 text-center",
                            children: "Bằng cách tiếp tục, Sếp đồng ý với các điều khoản dịch vụ của CASSIE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                    lineNumber: 159,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "text-sm text-white/25 hover:text-white/50 transition-colors",
                        children: "← Quay lại"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                        lineNumber: 175,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/onboarding/Step3_Pricing.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_c = Step3_Pricing;
var _c;
__turbopack_context__.k.register(_c, "Step3_Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/Step4_Success.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step4_Success
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/NeonButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Zalo deep link — strips leading 0 and prepends +84
function buildZaloLink(phone) {
    const cleaned = phone.replace(/^0/, "");
    return `https://zalo.me/${cleaned}`;
}
function Step4_Success({ businessName, agentAlias, zaloNumber }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const zaloLink = zaloNumber ? buildZaloLink(zaloNumber) : "https://zalo.me/cassieai";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step4_Success.useEffect": ()=>{
            const timers = [
                setTimeout({
                    "Step4_Success.useEffect": ()=>setPhase(1)
                }["Step4_Success.useEffect"], 100),
                setTimeout({
                    "Step4_Success.useEffect": ()=>setPhase(2)
                }["Step4_Success.useEffect"], 700),
                setTimeout({
                    "Step4_Success.useEffect": ()=>setPhase(3)
                }["Step4_Success.useEffect"], 1200),
                setTimeout({
                    "Step4_Success.useEffect": ()=>setPhase(4)
                }["Step4_Success.useEffect"], 1800),
                setTimeout({
                    "Step4_Success.useEffect": ()=>setPhase(5)
                }["Step4_Success.useEffect"], 2400)
            ];
            return ({
                "Step4_Success.useEffect": ()=>timers.forEach(clearTimeout)
            })["Step4_Success.useEffect"];
        }
    }["Step4_Success.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: phase >= 1 ? [
                        0,
                        0.7,
                        0.4
                    ] : 0,
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0) 0%, transparent 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.25) 0%, rgba(251,191,36,0.05) 50%, transparent 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, rgba(251,191,36,0.02) 50%, transparent 100%)"
                    ]
                },
                transition: {
                    duration: 1.2,
                    times: [
                        0,
                        0.4,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            phase >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    100,
                    200,
                    320,
                    460
                ].map((size, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none",
                        initial: {
                            width: 0,
                            height: 0,
                            opacity: 0.8
                        },
                        animate: {
                            width: size,
                            height: size,
                            opacity: 0
                        },
                        transition: {
                            duration: 1.2,
                            delay: i * 0.12,
                            ease: "easeOut"
                        },
                        style: {
                            border: `1.5px solid rgba(245,158,11,${0.7 - i * 0.15})`,
                            boxShadow: `0 0 20px rgba(245,158,11,0.3)`
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                        lineNumber: 56,
                        columnNumber: 25
                    }, this))
            }, void 0, false),
            phase >= 2 && Array.from({
                length: 20
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute w-1 h-1 rounded-full pointer-events-none",
                    style: {
                        background: i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#FCD34D" : "#FBBF24",
                        left: `${10 + Math.random() * 80}%`,
                        top: `${20 + Math.random() * 60}%`,
                        boxShadow: `0 0 4px rgba(245,158,11,0.8)`
                    },
                    animate: {
                        y: [
                            0,
                            -(30 + Math.random() * 60)
                        ],
                        x: [
                            (Math.random() - 0.5) * 20,
                            (Math.random() - 0.5) * 40
                        ],
                        opacity: [
                            0,
                            0.9,
                            0
                        ],
                        scale: [
                            0,
                            1.5,
                            0
                        ]
                    },
                    transition: {
                        duration: 2 + Math.random() * 2,
                        delay: Math.random() * 3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                        ease: "easeOut"
                    }
                }, `particle-${i}`, false, {
                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                    lineNumber: 74,
                    columnNumber: 21
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: phase >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 60,
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                y: phase >= 2 ? [
                                    -10,
                                    -30,
                                    -20
                                ] : 0,
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                y: {
                                    duration: phase >= 2 ? 2 : 0.6,
                                    repeat: phase >= 2 ? Infinity : 0,
                                    ease: "easeInOut"
                                },
                                opacity: {
                                    duration: 0.5
                                },
                                scale: {
                                    duration: 0.5,
                                    type: "spring"
                                }
                            },
                            className: "flex justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 rounded-full",
                                        animate: {
                                            boxShadow: [
                                                "0 0 30px rgba(245,158,11,0.5), 0 0 80px rgba(245,158,11,0.25)",
                                                "0 0 50px rgba(245,158,11,0.8), 0 0 120px rgba(245,158,11,0.4)",
                                                "0 0 30px rgba(245,158,11,0.5), 0 0 80px rgba(245,158,11,0.25)"
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-full flex items-center justify-center overflow-hidden",
                                        style: {
                                            background: "radial-gradient(circle, rgba(245,158,11,0.2), rgba(245,158,11,0.05))",
                                            border: "2px solid rgba(245,158,11,0.5)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/agents/cassie.png",
                                            alt: "Cassie",
                                            className: "w-16 h-16 object-contain",
                                            onError: (e)=>{
                                                e.currentTarget.style.display = "none";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    [
                                        0,
                                        60,
                                        120,
                                        180,
                                        240,
                                        300
                                    ].map((deg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute top-1/2 left-1/2 text-yellow-300 text-xs pointer-events-none",
                                            animate: {
                                                x: Math.cos(deg * Math.PI / 180) * (50 + Math.sin(Date.now() + i) * 5),
                                                y: Math.sin(deg * Math.PI / 180) * (50 + Math.cos(Date.now() + i) * 5),
                                                rotate: [
                                                    0,
                                                    360
                                                ],
                                                opacity: [
                                                    0.4,
                                                    1,
                                                    0.4
                                                ],
                                                scale: [
                                                    0.8,
                                                    1.2,
                                                    0.8
                                                ]
                                            },
                                            transition: {
                                                duration: 2 + i * 0.2,
                                                repeat: Infinity,
                                                delay: i * 0.15,
                                                ease: "easeInOut"
                                            },
                                            children: "✦"
                                        }, i, false, {
                                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                            lineNumber: 152,
                                            columnNumber: 37
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                            lineNumber: 104,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: phase >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)"
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.23,
                                    1,
                                    0.32,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 text-xs font-semibold tracking-widest uppercase",
                                    style: {
                                        borderColor: "rgba(245,158,11,0.4)",
                                        background: "rgba(245,158,11,0.08)",
                                        color: "#FCD34D"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, this),
                                        "Kích hoạt thành công"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text",
                                    style: {
                                        backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FCD34D 50%, #F59E0B 100%)",
                                        fontFamily: "var(--font-display)"
                                    },
                                    children: "Hệ thống đã sẵn sàng."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                            lineNumber: 180,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: phase >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 15
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.23,
                                    1,
                                    0.32,
                                    1
                                ]
                            },
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-sm px-6 py-5 rounded-2xl text-sm leading-relaxed text-left",
                                style: {
                                    background: "rgba(245,158,11,0.06)",
                                    border: "1px solid rgba(245,158,11,0.2)",
                                    backdropFilter: "blur(12px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: "rgba(245,158,11,0.2)",
                                                    border: "1px solid rgba(245,158,11,0.4)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                lineNumber: 227,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-yellow-400/80",
                                                children: agentAlias || "CASSIE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                lineNumber: 233,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                        lineNumber: 226,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/75",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-yellow-300",
                                                children: agentAlias || "CASSIE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                lineNumber: 238,
                                                columnNumber: 37
                                            }, this),
                                            " sẽ nhắn qua",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "ZALO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                lineNumber: 239,
                                                columnNumber: 37
                                            }, this),
                                            " cho ",
                                            businessName ? `Sếp ${businessName}` : "Sếp",
                                            " để bắt đầu hỗ trợ từ giây phút này.",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-yellow-300",
                                                children: "Sếp để ý tin nhắn nhé!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                lineNumber: 240,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                        lineNumber: 237,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                lineNumber: 218,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                            lineNumber: 212,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: phase >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200
                            },
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$NeonButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "gold",
                                    href: zaloLink,
                                    className: "px-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                            lineNumber: 257,
                                            columnNumber: 33
                                        }, this),
                                        "Nhắn ZALO cho CASSIE ngay"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                    lineNumber: 256,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/20",
                                    children: "hoặc chờ CASSIE chủ động nhắn cho Sếp trong vài phút"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.5
                                    },
                                    className: "mt-4 flex gap-4 text-center",
                                    children: [
                                        {
                                            label: "Phản hồi đầu tiên",
                                            value: "< 30 giây"
                                        },
                                        {
                                            label: "Hoạt động",
                                            value: "24/7"
                                        },
                                        {
                                            label: "Bắt đầu từ",
                                            value: "Hôm nay"
                                        }
                                    ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-yellow-400",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-white/25 uppercase tracking-wider",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                            lineNumber: 276,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                                    lineNumber: 265,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/Step4_Success.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(Step4_Success, "DIEXBwLLGXBwEF+ZjWTTCDsojpU=");
_c = Step4_Success;
var _c;
__turbopack_context__.k.register(_c, "Step4_Success");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/onboarding/OnboardingFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$CassieMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/CassieMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step1_Identity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/Step1_Identity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step2_Mission$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/Step2_Mission.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step3_Pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/Step3_Pricing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step4_Success$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/Step4_Success.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TOTAL_STEPS = 4;
function OnboardingFlow() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // 1 = forward, -1 = backward
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        businessName: "",
        agentAlias: "CASSIE",
        industry: "",
        zaloNumber: "",
        platforms: [],
        missions: []
    });
    const goNext = ()=>{
        setDirection(1);
        setStep((s)=>Math.min(s + 1, TOTAL_STEPS));
    };
    const goBack = ()=>{
        setDirection(-1);
        setStep((s)=>Math.max(s - 1, 1));
    };
    const updateData = (patch)=>{
        setData((d)=>({
                ...d,
                ...patch
            }));
    };
    const variants = {
        initial: (dir)=>({
                x: dir > 0 ? 80 : -80,
                opacity: 0,
                filter: "blur(4px)"
            }),
        animate: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)"
        },
        exit: (dir)=>({
                x: dir > 0 ? -80 : 80,
                opacity: 0,
                filter: "blur(4px)"
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden",
        style: {
            background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 100%), #030712"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            step < TOTAL_STEPS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                step: step,
                total: TOTAL_STEPS
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                lineNumber: 86,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                custom: direction,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: direction,
                    variants: variants,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    transition: {
                        duration: 0.45,
                        ease: [
                            0.23,
                            1,
                            0.32,
                            1
                        ]
                    },
                    className: "w-full",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step1_Identity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: {
                                businessName: data.businessName,
                                agentAlias: data.agentAlias,
                                industry: data.industry,
                                zaloNumber: data.zaloNumber,
                                platforms: data.platforms
                            },
                            onUpdate: (patch)=>updateData(patch),
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step2_Mission$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selected: data.missions,
                            onUpdate: (missions)=>updateData({
                                    missions
                                }),
                            onNext: goNext,
                            onBack: goBack
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                            lineNumber: 114,
                            columnNumber: 25
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step3_Pricing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onNext: goNext,
                            onBack: goBack,
                            businessName: data.businessName
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                            lineNumber: 122,
                            columnNumber: 25
                        }, this),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$Step4_Success$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            businessName: data.businessName,
                            agentAlias: data.agentAlias,
                            zaloNumber: data.zaloNumber
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$CassieMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                step: step
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/onboarding/OnboardingFlow.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
_s(OnboardingFlow, "1SIvvbSpahJzncOvWhv5b/fOz20=");
_c = OnboardingFlow;
var _c;
__turbopack_context__.k.register(_c, "OnboardingFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_onboarding_70b7303b._.js.map