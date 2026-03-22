"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Edit3, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProfileHeader() {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <div className="relative w-full mb-12">
            {/* Background Accent */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
                {/* Avatar */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl p-1.5 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 border border-white/10 shadow-2xl"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0A]">
                        {user?.image ? (
                            <Image 
                                src={user.image} 
                                alt="User Profile" 
                                fill 
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                                {user?.name?.[0] || 'U'}
                            </div>
                        )}
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                    </div>
                </motion.div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col md:flex-row items-center gap-4 mb-2"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {user?.name || "Thành viên Vibework"}
                        </h1>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-widest">
                            Pro Member
                        </span>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg mb-6 flex items-center justify-center md:justify-start gap-2"
                    >
                        {user?.email}
                    </motion.p>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-3"
                    >
                        <Link 
                            href="/onboarding"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all group"
                        >
                            <Edit3 className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            Chỉnh sửa Profile
                        </Link>
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-green-500/5 border border-green-500/10 text-green-400 text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Tài khoản đã xác thực
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
