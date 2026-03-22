"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Plus, Trash2, Camera, ChevronRight, LayoutGrid, Info } from "lucide-react";

type Product = {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
};

export default function Step5_Catalog({ onComplete }: { onComplete: (products: Product[]) => void }) {
    const [products, setProducts] = useState<Product[]>([
        { title: "", description: "", imageUrl: "", price: "" }
    ]);

    const addProduct = () => setProducts([...products, { title: "", description: "", imageUrl: "", price: "" }]);
    const removeProduct = (idx: number) => setProducts(products.filter((_, i) => i !== idx));
    const updateProduct = (idx: number, data: Partial<Product>) => {
        const newProducts = [...products];
        newProducts[idx] = { ...newProducts[idx], ...data };
        setProducts(newProducts);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight mb-2">Sản phẩm & Dịch vụ 📦</h2>
                    <p className="text-gray-400">Điều chỉnh danh sách các sản phẩm/dịch vụ cốt lõi mà AI sẽ tập trung thiết kế.</p>
                </div>
                <button 
                  onClick={() => onComplete(products)}
                  className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-bold flex items-center gap-3 hover:bg-blue-500 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] active:scale-95"
                >
                    Hoàn tất thiết lập <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {products.map((p, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white/5 border border-white/10 rounded-[32px] p-6 hover:border-blue-500/30 transition-all group flex flex-col relative"
                        >
                            <button 
                                onClick={() => removeProduct(idx)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>

                            <div className="w-full h-40 bg-black/40 rounded-2xl mb-6 relative group/img overflow-hidden border border-white/5 flex items-center justify-center cursor-pointer">
                                {p.imageUrl ? (
                                    <img src={p.imageUrl} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center group-hover/img:scale-110 transition-transform">
                                        <Camera className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                                        <div className="text-[10px] text-gray-600 uppercase font-bold">Thêm ảnh SP</div>
                                    </div>
                                )}
                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>

                            <input 
                                type="text" value={p.title} onChange={e => updateProduct(idx, { title: e.target.value })}
                                className="w-full bg-transparent border-0 text-white font-bold text-lg mb-2 focus:ring-0 placeholder:text-gray-700"
                                placeholder="Tên sản phẩm..."
                            />
                            
                            <textarea 
                                value={p.description} onChange={e => updateProduct(idx, { description: e.target.value })}
                                className="w-full bg-transparent border-0 text-gray-500 text-xs focus:ring-0 placeholder:text-gray-800 resize-none h-16 leading-relaxed"
                                placeholder="Mô tả ngắn về sản phẩm hoặc giá trị nó mang lại..."
                            />

                            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <LayoutGrid className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Default Specs</span>
                                </div>
                                <input 
                                    type="text" value={p.price} onChange={e => updateProduct(idx, { price: e.target.value })}
                                    className="bg-white/5 border-0 rounded-lg px-3 py-1 text-xs text-blue-400 font-bold focus:ring-1 focus:ring-blue-500/30 text-right w-24"
                                    placeholder="Giá (nếu có)"
                                />
                            </div>
                        </motion.div>
                    ))}

                    <motion.button
                        layout
                        onClick={addProduct}
                        className="h-full min-h-[300px] border-2 border-dashed border-white/5 rounded-[32px] flex flex-col items-center justify-center gap-4 text-gray-600 hover:border-blue-500/30 hover:text-blue-400 group transition-all"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                            <Plus className="w-8 h-8" />
                        </div>
                        <span className="font-bold">Thêm sản phẩm mới</span>
                    </motion.button>
                </AnimatePresence>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-[32px] flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                    <p className="text-gray-300 font-bold mb-1">Dành cho Designer AI:</p>
                    <p className="text-gray-500 leading-relaxed italic">
                        Mỗi sản phẩm bạn thêm vào đây sẽ là đầu vào để AI tự động tạo các bản demo Marketing phù hợp trong Playground. Chúng tôi khuyến khích bạn thêm ít nhất 3 sản phẩm chủ đạo.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
