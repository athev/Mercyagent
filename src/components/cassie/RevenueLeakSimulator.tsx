"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coins, AlertTriangle, TrendingDown, MousePointer2 } from "lucide-react";

interface Coin {
  id: number;
  x: number;
  delay: number;
}

export default function RevenueLeakSimulator() {
  const [slowRate, setSlowRate] = useState(15);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isClient, setIsClient] = useState(false);
  const nextCoinId = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate falling coins based on slowRate
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      if (slowRate > 5) {
        const coinCount = Math.floor(slowRate / 10);
        const newCoins = Array.from({ length: coinCount }).map(() => ({
          id: nextCoinId.current++,
          x: Math.random() * 80 + 10, // Random horizontal position within bucket width
          delay: Math.random() * 0.5
        }));
        
        setCoins(prev => [...prev, ...newCoins].slice(-20)); // Keep last 20 coins for performance
      }
    }, 800 - (slowRate * 5)); // Faster interval as rate increases

    return () => clearInterval(interval);
  }, [slowRate, isClient]);

  const leakPercentage = slowRate * 1.5; // Arbitrary multiplier for dramatic effect
  const isHighLeak = leakPercentage > 30;

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Controls */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
              <AlertTriangle className="w-3 h-3" />
              Cảnh báo thất thoát
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Doanh thu của Sếp đang <br />
              <span className={isHighLeak ? "text-red-500 transition-colors duration-500" : "text-cyan-400 transition-colors duration-500"}>
                {isHighLeak ? "Rò rỉ nghiêm trọng" : "Bị đe dọa thầm lặng"}
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light max-w-md">
              Mỗi giây khách hàng chờ đợi là một cơ hội để đối thủ cướp mất. Hãy xem điều gì xảy ra khi tỷ lệ phản hồi chậm tăng lên.
            </p>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-300">Tỷ lệ trả lời chậm (&gt; 5 phút)</span>
                <span className={`text-2xl font-bold ${isHighLeak ? "text-red-500" : "text-cyan-400"}`}>
                  {slowRate}%
                </span>
              </div>
              
              <div className="relative group">
                <input 
                  type="range" 
                  min="0" 
                  max="60" 
                  value={slowRate}
                  onChange={(e) => setSlowRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 group-hover:accent-cyan-300 transition-all"
                />
                <div className="absolute -top-6 left-0 text-[10px] text-gray-500 uppercase tracking-widest">Kéo để giả lập</div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isHighLeak ? "bg-red-500/20" : "bg-cyan-500/20"}`}>
                    <TrendingDown className={`w-5 h-5 ${isHighLeak ? "text-red-500" : "text-cyan-400"}`} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Thất thoát ước tính</div>
                    <div className={`text-lg font-bold ${isHighLeak ? "text-red-500" : "text-white"}`}>
                      ~{Math.round(leakPercentage * 1.2)} triệu / tháng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Simulator */}
          <div className="relative flex justify-center items-center h-[500px]">
            
            {/* The Glass Bucket */}
            <div className="relative w-64 h-80">
              {/* Bucket Body (Glassmorphism) */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-b-[40px] rounded-t-xl overflow-hidden shadow-2xl z-20">
                {/* Revenue Level (Gold Coins Fill) */}
                <motion.div 
                  animate={{ 
                    height: `${Math.max(20, 100 - leakPercentage)}%`,
                    backgroundColor: isHighLeak ? "rgba(239, 68, 68, 0.2)" : "rgba(34, 211, 238, 0.1)"
                  }}
                  className="absolute bottom-0 left-0 w-full transition-colors duration-700"
                >
                  {/* Decorative Coins Inside */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-8 h-8 bg-yellow-500/40 rounded-full border border-yellow-400/50"
                        style={{ 
                          left: `${Math.random() * 80}%`, 
                          top: `${Math.random() * 80}%`,
                          transform: `rotate(${Math.random() * 360}deg)`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Cracks Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100">
                  <AnimatePresence>
                    {slowRate > 10 && (
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        d="M 20 30 L 40 45 L 35 60"
                        stroke={isHighLeak ? "#ef4444" : "#ffffff"}
                        strokeWidth="1"
                        fill="none"
                      />
                    )}
                    {slowRate > 25 && (
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        d="M 80 20 L 65 40 L 75 55"
                        stroke={isHighLeak ? "#ef4444" : "#ffffff"}
                        strokeWidth="1"
                        fill="none"
                      />
                    )}
                    {slowRate > 40 && (
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        d="M 50 70 L 45 85 L 60 95"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    )}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Falling Coins Container */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <AnimatePresence>
                  {coins.map((coin) => (
                    <motion.div
                      key={coin.id}
                      initial={{ y: 200, x: `${coin.x}%`, opacity: 1, scale: 1 }}
                      animate={{ 
                        y: 500, 
                        x: `${coin.x + (Math.random() * 20 - 10)}%`,
                        opacity: 0,
                        rotate: 360,
                        scale: 0.5
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeIn", delay: coin.delay }}
                      className="absolute"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full border border-yellow-200 shadow-[0_0_10px_rgba(234,179,8,0.5)] flex items-center justify-center">
                        <span className="text-[8px] font-bold text-yellow-900">$</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Bucket Handle */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 border-4 border-white/10 rounded-t-full z-10"></div>
            </div>

            {/* Background Glow */}
            <motion.div 
              animate={{ 
                backgroundColor: isHighLeak ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 211, 238, 0.1)",
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] rounded-full blur-[100px] -z-10"
            ></motion.div>

            {/* Floating Label */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 right-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md z-40"
            >
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Revenue Stream</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
            "Sếp có biết? 78% khách hàng sẽ mua từ doanh nghiệp phản hồi đầu tiên. <br />
            Đừng để tiền của Sếp rơi vào túi đối thủ chỉ vì một tin nhắn chậm."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
