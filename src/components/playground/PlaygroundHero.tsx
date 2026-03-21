"use client";

import { motion } from 'motion/react';

export default function PlaygroundHero() {
    return (
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-gray-500"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
                Vibework Brief <span className="text-[#06B6D4]">Playground</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
            >
                Mô tả ý tưởng của bạn, để AI của chúng tôi phân tích các nhu cầu thực tế và lộ trình triển khai chi tiết.
            </motion.p>
        </div>
    );
}
