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

    const handleDownloadPDF = () => {
        try {
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const pageWidth = pdf.internal.pageSize.getWidth();

            // Header
            pdf.setFontSize(28);
            pdf.setTextColor(37, 99, 235);
            pdf.text("VIBEWORK", 20, 30);
            pdf.setFontSize(10);
            pdf.setTextColor(120, 120, 120);
            pdf.text("GIẢI PHÁP SỐ TOÀN DIỆN", 20, 38);

            pdf.setFontSize(16);
            pdf.setTextColor(30, 30, 30);
            pdf.text("BÁO GIÁ DỰ ÁN", pageWidth - 20, 25, { align: "right" });
            pdf.setFontSize(10);
            pdf.setTextColor(120, 120, 120);
            pdf.text(`Loại: ${getProductLabel()}`, pageWidth - 20, 33, { align: "right" });
            pdf.text(`Ngày: ${new Date().toLocaleDateString('vi-VN')}`, pageWidth - 20, 39, { align: "right" });

            // Divider
            pdf.setDrawColor(220, 220, 220);
            pdf.line(20, 45, pageWidth - 20, 45);

            // Table header
            let y = 55;
            pdf.setFillColor(245, 245, 245);
            pdf.rect(20, y - 5, pageWidth - 40, 10, "F");
            pdf.setFontSize(9);
            pdf.setTextColor(80, 80, 80);
            pdf.text("STT", 24, y + 1);
            pdf.text("Hạng mục", 38, y + 1);
            pdf.text("Mô tả", 100, y + 1);
            if (!isApp) pdf.text("Chi phí", pageWidth - 24, y + 1, { align: "right" });

            y += 12;
            const modulesToShow = isApp
                ? selectedModules.filter(m => selectedFeatures.includes(m.id))
                : selectedModules;

            modulesToShow.forEach((m, i) => {
                pdf.setFontSize(9);
                pdf.setTextColor(80, 80, 80);
                pdf.text(`${i + 1}`, 24, y);
                pdf.setTextColor(30, 30, 30);
                pdf.text(m.title || "", 38, y, { maxWidth: 55 });
                pdf.setTextColor(100, 100, 100);
                const desc = (m.description || "").substring(0, 60);
                pdf.text(desc, 100, y, { maxWidth: 55 });
                if (!isApp) {
                    pdf.setTextColor(30, 30, 30);
                    pdf.text(formatCurrency((m.estimatedHours || 0) * HOURLY_RATE_VND), pageWidth - 24, y, { align: "right" });
                }
                y += 12;
                if (y > 260) { pdf.addPage(); y = 20; }
            });

            // Total
            if (!isApp) {
                y += 5;
                pdf.setDrawColor(220, 220, 220);
                pdf.line(pageWidth / 2, y, pageWidth - 20, y);
                y += 10;
                pdf.setFontSize(14);
                pdf.setTextColor(37, 99, 235);
                pdf.text(`TỔNG: ${formatCurrency(totalCost)}`, pageWidth - 24, y, { align: "right" });
            }

            // Footer note
            y += 15;
            pdf.setFontSize(8);
            pdf.setTextColor(150, 150, 150);
            pdf.text("Báo giá có giá trị 15 ngày. Chi phí ± 15%. Vibework.com | Zalo: 0919 376 786", 20, y);

            pdf.save(`Bao-Gia-Vibework-${getProductLabel()}.pdf`);
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
                    <div className="bg-white text-gray-900 mx-auto w-full max-w-[800px] min-h-[800px] p-10 shadow-2xl relative rounded-xl">
                        {/* Header */}
                        <div className="flex justify-between items-start border-b-2 border-gray-200 pb-6 mb-6">
                            <div>
                                <h1 className="text-3xl font-black text-blue-600 tracking-tighter">VIBEWORK</h1>
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

                        <div className="mt-6 bg-blue-50 rounded-lg p-3 text-xs text-gray-600">
                            <p>Bao gồm BA & Content Marketing. Giá trị 15 ngày. ± 15%.</p>
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
