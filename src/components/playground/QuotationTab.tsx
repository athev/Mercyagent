"use client";

import { useRef, useState } from "react";
import { Download, MessageCircle, Phone, Check, FileText, Save } from "lucide-react";
import jsPDF from "jspdf";

interface QuotationTabProps {
    selectedModules: any[];
    productType?: string;
}

export default function QuotationTab({ selectedModules, productType = "website" }: QuotationTabProps) {
    const printRef = useRef<HTMLDivElement>(null);
    const HOURLY_RATE_VND = 500000;
    const isApp = productType === "app";

    // For app: feature selection
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>(selectedModules.map(m => m.id));

    const toggleFeature = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const totalHours = selectedModules
        .filter(m => !isApp || selectedFeatures.includes(m.id))
        .reduce((sum, m) => sum + (m.estimatedHours || 0), 0);
    const totalCost = totalHours * HOURLY_RATE_VND;

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

    const getProductLabel = () => {
        if (productType === "landing_page") return "Landing Page";
        if (productType === "app") return "Ứng dụng di động (App)";
        return "Website";
    };

    const handleDownloadPDF = async () => {
        try {
            const element = document.getElementById("quotation-card");
            if (!element) return;
            
            const html2canvas = (await import('html2canvas')).default;
            const canvas = await html2canvas(element, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL("image/png");
            
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Bao-Gia-Vibework.vn-${getProductLabel()}.pdf`);
        } catch (error) {
            console.error("Lỗi khi tạo PDF:", error);
            alert("Lỗi khi xuất PDF. Vui lòng thử lại.");
        }
    };

    const handleSavePlan = () => {
        const selected = selectedModules.filter(m => selectedFeatures.includes(m.id));
        const planText = `# Kế hoạch phát triển App - Vibework\n\nNgày: ${new Date().toLocaleDateString('vi-VN')}\n\n## Tính năng đã chọn:\n${selected.map((m, i) => `${i + 1}. ${m.title}\n   ${m.description}`).join("\n\n")}\n\n---\nLiên hệ Vibework để được tư vấn chi tiết: Zalo 0919 376 786`;
        const blob = new Blob([planText], { type: "text/markdown" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Ke-Hoach-App-Vibework.md";
        a.click();
    };

    return (
        <div className="h-full flex flex-col space-y-6 animate-in fade-in duration-500">
            {/* App mode: Feature Selection */}
            {isApp ? (
                <div className="space-y-6">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-amber-200 text-sm">
                        <p className="font-semibold mb-1">📱 Dự án App di động</p>
                        <p className="text-amber-200/70">Vui lòng chọn các tính năng bạn cần, sau đó lưu kế hoạch để đội ngũ Vibework tư vấn chi phí riêng theo yêu cầu.</p>
                    </div>

                    <div className="space-y-3">
                        {selectedModules.map((m, i) => (
                            <button key={m.id} onClick={() => toggleFeature(m.id)}
                                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                                    selectedFeatures.includes(m.id)
                                        ? "border-blue-500/40 bg-blue-500/10"
                                        : "border-white/5 bg-white/[0.02] opacity-60"
                                }`}>
                                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                                    selectedFeatures.includes(m.id) ? "border-blue-500 bg-blue-500" : "border-white/20"
                                }`}>
                                    {selectedFeatures.includes(m.id) && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <div>
                                    <p className="text-white font-medium">{m.title}</p>
                                    <p className="text-gray-500 text-sm mt-1">{m.description}</p>
                                    <span className="text-xs text-gray-600 mt-1 inline-block">{m.category}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 text-sm">Đã chọn {selectedFeatures.length}/{selectedModules.length} tính năng</p>
                </div>
            ) : (
                /* Website / Landing Page: Show quotation */
                <div ref={printRef} className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4 md:p-8">
                    <div id="quotation-card" className="bg-white text-gray-900 mx-auto w-full max-w-[800px] min-h-[800px] p-10 shadow-2xl relative rounded-xl">
                        {/* Header */}
                        <div className="flex justify-between items-start border-b-2 border-gray-200 pb-6 mb-6">
                            <div>
                                <h1 className="text-3xl font-black text-blue-600 tracking-tighter">VIBEWORK.VN</h1>
                                <p className="text-gray-500 mt-1 text-sm font-medium">GIẢI PHÁP SỐ TOÀN DIỆN</p>
                            </div>
                            <div className="text-right text-sm text-gray-500 space-y-1">
                                <p className="font-bold text-gray-800 text-lg">BÁO GIÁ DỰ ÁN</p>
                                <p>Loại: <span className="font-semibold text-blue-600">{getProductLabel()}</span></p>
                                <p>Ngày: {new Date().toLocaleDateString('vi-VN')}</p>
                            </div>
                        </div>

                        <table className="w-full text-left border-collapse mb-6">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm">
                                    <th className="py-3 px-3 font-bold rounded-tl-lg">STT</th>
                                    <th className="py-3 px-3 font-bold">Hạng mục</th>
                                    <th className="py-3 px-3 font-bold">Mô tả</th>
                                    <th className="py-3 px-3 font-bold text-right rounded-tr-lg">Chi phí</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedModules.map((m, i) => (
                                    <tr key={m.id} className="border-b border-gray-100">
                                        <td className="py-3 px-3 text-gray-500 text-sm">{i + 1}</td>
                                        <td className="py-3 px-3 font-semibold text-gray-800 text-sm">{m.title}</td>
                                        <td className="py-3 px-3 text-sm text-gray-600 max-w-[200px]">{m.description}</td>
                                        <td className="py-3 px-3 text-right text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {formatCurrency((m.estimatedHours || 0) * HOURLY_RATE_VND)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-end border-t-2 border-gray-200 pt-6">
                            <div className="w-1/2 space-y-2">
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Timeline:</span><span>≤ 15 ngày</span>
                                </div>
                                <div className="flex justify-between text-xl font-black text-gray-900 border-t pt-2 border-gray-200">
                                    <span>TỔNG:</span>
                                    <span className="text-blue-600">{formatCurrency(totalCost)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 rounded-lg p-3 text-xs text-gray-600 flex justify-between items-center">
                            <p>Bao gồm BA & Content Marketing. Giá trị báo giá: 15 ngày. Chi phí dao động: ± 15%.</p>
                            <p className="font-semibold text-gray-500">Powered by Zcom Global - zcg.vn</p>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                        {isApp ? "Lưu kế hoạch & liên hệ tư vấn" : "Bắt đầu triển khai dự án?"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {isApp
                            ? "Lưu danh sách tính năng đã chọn và liên hệ CSKH để được báo giá riêng cho dự án App."
                            : "Tải báo giá và liên hệ CSKH để tư vấn triển khai & đàm phán chi phí."
                        }
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {isApp ? (
                        <button onClick={handleSavePlan}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto justify-center">
                            <Save className="w-5 h-5" /> Lưu kế hoạch ({selectedFeatures.length} tính năng)
                        </button>
                    ) : (
                        <button onClick={handleDownloadPDF}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto justify-center">
                            <Download className="w-5 h-5" /> Tải Báo giá PDF
                        </button>
                    )}
                    <a href="https://zalo.me/0919376786" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20 w-full sm:w-auto justify-center">
                        <MessageCircle className="w-5 h-5" /> Chat Zalo CSKH
                    </a>
                    <a href="tel:0919376786"
                        className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all w-full sm:w-auto justify-center">
                        <Phone className="w-5 h-5" /> 0919 376 786
                    </a>
                </div>
            </div>
        </div>
    );
}
