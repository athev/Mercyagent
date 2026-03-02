module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
}),
"[project]/src/translations/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        nav: {
            origin: 'Origin',
            theCore: 'The Core',
            strategy: 'Strategy',
            growth: 'Growth',
            operations: 'Operations',
            pricing: 'Pricing',
            getStarted: 'Get Started'
        },
        hero: {
            headline: 'The Age of Intelligent Mercy',
            subheadline: 'Businesses don\'t collapse because of a lack of products.',
            collapsed: 'They collapse because they are overwhelmed.',
            brokenLines: [
                'Leads dropping.',
                'Marketing burning money.',
                'CEO losing sleep.',
                'Staff leaving.'
            ],
            cta: 'Activate Mercy Protocol'
        },
        origin: {
            headline: 'Mercy Protocol Was Activated',
            collapse: 'When the world entered',
            collapseAccent: 'The Collapse of Attention',
            newSystem: 'a new system was created.',
            notTool: 'Not another tool.',
            workforce: 'But a workforce.'
        },
        theCore: {
            headline: 'THE CORE',
            subtitle: 'The central intelligence engine powering the three layers of the Mercy Protocol.',
            strategy: {
                name: 'Strategic Layer',
                desc: 'Vision & Planning'
            },
            growth: {
                name: 'Growth Layer',
                desc: 'Scale & Acquisition'
            },
            operation: {
                name: 'Operation Layer',
                desc: 'Systems & Automation'
            }
        },
        pricing: {
            title: 'HIRE YOUR',
            titleAccent: 'AI WORKFORCE',
            subtitle: 'Compassionate intelligence. Relentless execution. Choose the tier that fits your mission.',
            mostPopular: 'Most popular',
            guarantee: '14-day money-back guarantee',
            cta: 'Get Mercy',
            plans: {
                solo: {
                    name: 'SOLO PLAN',
                    tagline: 'Trial each Agent',
                    description: 'Immediately add the weakest link in your process.',
                    price: '$20',
                    period: '/month'
                },
                team: {
                    name: 'TEAM PLAN',
                    tagline: 'Hire by department',
                    description: 'Build an elite Sales, Marketing, or Ecom team instantly.',
                    price: 'Contact',
                    period: '',
                    popularLabel: 'Popular'
                },
                full: {
                    name: 'THE FULL MERCY',
                    tagline: 'Comprehensive ecosystem',
                    description: 'Activate the entire lineup + CEO management dashboard.',
                    price: 'Contact',
                    period: ''
                }
            }
        },
        mercyMode: {
            status: 'System Override Successful',
            activated: 'MERCY MODE ACTIVATED',
            responseTime: 'Response Time',
            leadsProcessed: 'Leads Processed',
            activeWorkforce: 'Active Workforce',
            nominal: 'ALL SYSTEMS NOMINAL. READY FOR COMMAND.',
            cta: 'Activate Your AI Workforce'
        }
    },
    vi: {
        nav: {
            origin: 'Nguồn gốc',
            theCore: 'Cốt lõi',
            strategy: 'Chiến lược',
            growth: 'Tăng trưởng',
            operations: 'Vận hành',
            pricing: 'Bảng giá',
            getStarted: 'Bắt đầu'
        },
        hero: {
            headline: 'Kỷ nguyên của Lòng nhân từ Thông minh',
            subheadline: 'Doanh nghiệp không sụp đổ vì thiếu sản phẩm.',
            collapsed: 'Họ sụp đổ vì quá tải.',
            brokenLines: [
                'Lead rơi.',
                'Marketing đốt tiền.',
                'CEO mất ngủ.',
                'Nhân sự rời đi.'
            ],
            cta: 'Kích hoạt Giao thức Mercy'
        },
        origin: {
            headline: 'Giao thức Mercy đã được kích hoạt',
            collapse: 'Khi thế giới bước vào',
            collapseAccent: 'Sự sụp đổ của sự chú ý',
            newSystem: 'một hệ thống mới đã được tạo ra.',
            notTool: 'Không phải là một công cụ khác.',
            workforce: 'Mà là một đội ngũ nhân sự.'
        },
        theCore: {
            headline: 'THE CORE',
            subtitle: 'Động cơ trí tuệ trung tâm điều hành ba lớp của Giao thức Mercy.',
            strategy: {
                name: 'Lớp Chiến lược',
                desc: 'Tầm nhìn & Lập kế hoạch'
            },
            growth: {
                name: 'Lớp Tăng trưởng',
                desc: 'Mở rộng & Thu hút'
            },
            operation: {
                name: 'Lớp Vận hành',
                desc: 'Hệ thống & Tự động hóa'
            }
        },
        pricing: {
            title: 'THUÊ ĐỘI NGŨ',
            titleAccent: 'NHÂN SỰ AI',
            subtitle: 'Trí tuệ thấu cảm. Thực thi không ngừng nghỉ. Chọn cấp độ phù hợp với sứ mệnh của bạn.',
            mostPopular: 'Phổ biến nhất',
            guarantee: 'Hoàn tiền trong 14 ngày',
            cta: 'Sở hữu Mercy',
            plans: {
                solo: {
                    name: 'GÓI SOLO',
                    tagline: 'Thử việc từng Agent',
                    description: 'Bổ sung ngay mắt xích đang yếu nhất trong quy trình của bạn.',
                    price: '500k',
                    period: '/tháng'
                },
                team: {
                    name: 'GÓI TEAM',
                    tagline: 'Thuê theo phòng ban',
                    description: 'Xây dựng đội ngũ Sales, Marketing hoặc Ecom tinh nhuệ ngay lập tức.',
                    price: 'Liên hệ',
                    period: '',
                    popularLabel: 'Phổ biến'
                },
                full: {
                    name: 'THE FULL MERCY',
                    tagline: 'Hệ sinh thái toàn diện',
                    description: 'Kích hoạt toàn bộ đội hình + Dashboard quản trị CEO.',
                    price: 'Liên hệ',
                    period: ''
                }
            }
        },
        mercyMode: {
            status: 'Ghi đè hệ thống thành công',
            activated: 'KÍCH HOẠT CHẾ ĐỘ MERCY',
            responseTime: 'Thời gian phản hồi',
            leadsProcessed: 'Lead đã xử lý',
            activeWorkforce: 'Nhân sự đang hoạt động',
            nominal: 'TẤT CẢ HỆ THỐNG BÌNH THƯỜNG. SẴN SÀNG NHẬN LỆNH.',
            cta: 'Kích hoạt đội ngũ AI của bạn'
        }
    }
};
}),
"[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/translations/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vi');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('language');
        if (saved) {
            setLanguage(saved);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('language', language);
    }, [
        language
    ]);
    const t = (path)=>{
        const keys = path.split('.');
        let value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
        for (const key of keys){
            if (value && value[key]) {
                value = value[key];
            } else {
                return path;
            }
        }
        return value;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0497dfb0._.js.map