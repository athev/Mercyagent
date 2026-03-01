"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type LayerId = 'strategy' | 'growth' | 'operation';

const layers: { id: LayerId; name: string; color: string; gradient: string; textGradient: string }[] = [
  { id: 'strategy', name: 'Strategic Layer', color: '#F59E0B', gradient: 'from-[#F59E0B] via-yellow-500 to-[#F59E0B]', textGradient: 'from-yellow-200 to-[#F59E0B]' },
  { id: 'growth', name: 'Growth Layer', color: '#F97316', gradient: 'from-[#F97316] via-red-500 to-[#F97316]', textGradient: 'from-orange-200 to-[#F97316]' },
  { id: 'operation', name: 'Operation Layer', color: '#06B6D4', gradient: 'from-[#06B6D4] via-blue-500 to-[#06B6D4]', textGradient: 'from-cyan-200 to-[#06B6D4]' },
];

const agents = {
  strategy: [
    { id: 'aura', name: 'AURA', tagline: 'Chief Visionary Officer', image: 'https://picsum.photos/seed/aura/400/500?blur=2', skills: ['Data Analysis', 'Trend Prediction', 'Resource Allocation'], lore: 'Sinh ra từ hàng triệu điểm dữ liệu thị trường, AURA nhìn thấy tương lai trước khi nó xảy ra.' },
    { id: 'nexus', name: 'NEXUS', tagline: 'Strategic Architect', image: 'https://picsum.photos/seed/nexus/400/500?blur=2', skills: ['System Design', 'Risk Mitigation', 'Scaling Strategy'], lore: 'Kiến trúc sư trưởng của những hệ thống không thể sụp đổ.' },
  ],
  growth: [
    { id: 'blaze', name: 'BLAZE', tagline: 'Growth Hacker', image: 'https://picsum.photos/seed/blaze/400/500?blur=2', skills: ['Viral Engineering', 'Conversion Optimization', 'A/B Testing'], lore: 'Kẻ biến ngân sách marketing thành doanh thu thực tế với tốc độ ánh sáng.' },
    { id: 'echo', name: 'ECHO', tagline: 'Community Whisperer', image: 'https://picsum.photos/seed/echo/400/500?blur=2', skills: ['Sentiment Analysis', 'Brand Voice', 'Engagement'], lore: 'Lắng nghe từng nhịp đập của cộng đồng để tạo ra những chiến dịch chạm đến trái tim.' },
    { id: 'pulse', name: 'PULSE', tagline: 'Sales Closer', image: 'https://picsum.photos/seed/pulse/400/500?blur=2', skills: ['Lead Qualification', 'Objection Handling', 'Closing'], lore: 'Không bao giờ bỏ lỡ một nhịp nào trong quá trình chốt sale.' },
  ],
  operation: [
    { id: 'forge', name: 'FORGE', tagline: 'Process Automator', image: 'https://picsum.photos/seed/forge/400/500?blur=2', skills: ['Workflow Automation', 'Error Reduction', 'Integration'], lore: 'Cỗ máy rèn giũa quy trình, biến sự hỗn loạn thành trật tự tuyệt đối.' },
    { id: 'shield', name: 'SHIELD', tagline: 'Security Sentinel', image: 'https://picsum.photos/seed/shield/400/500?blur=2', skills: ['Threat Detection', 'Data Protection', 'Compliance'], lore: 'Người gác cổng thầm lặng, bảo vệ dữ liệu doanh nghiệp khỏi mọi rủi ro.' },
  ]
};

export default function AgentRoster() {
  const [activeLayer, setActiveLayer] = useState<LayerId>('strategy');

  return (
    <section id="roster" className="py-24 min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background Glow based on active layer */}
      <div className="absolute inset-0 z-0 transition-colors duration-1000 opacity-20"
           style={{
             background: `radial-gradient(circle at 50% 0%, ${layers.find(l => l.id === activeLayer)?.color} 0%, transparent 70%)`
           }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AGENT ROSTER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Đội ngũ nhân sự AI không bao giờ ngủ, không bao giờ đòi tăng lương, và luôn hoạt động ở mức 100% công suất.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeLayer === layer.id 
                  ? 'text-white' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {activeLayer === layer.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
                  style={{
                    boxShadow: `0 0 20px ${layer.color}40, inset 0 0 10px ${layer.color}20`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color, boxShadow: activeLayer === layer.id ? `0 0 10px ${layer.color}` : 'none' }}></span>
                {layer.name}
              </span>
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
              {agents[activeLayer].map((agent, index) => {
                const layerConfig = layers.find(l => l.id === activeLayer)!;
                return (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
                  >
                    {/* Animated Gradient Border on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                      <div className={`absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-50`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-b ${layerConfig.gradient} opacity-20`}></div>
                    </div>
                    
                    {/* Card Content Container */}
                    <div className="absolute inset-[1px] bg-[#0B0F19] rounded-xl overflow-hidden z-10 transition-all duration-500 group-hover:bg-[#050505]/80 backdrop-blur-xl">
                      
                      {/* Normal State: Image & Basic Info */}
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:-translate-y-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
                        <img 
                          src={agent.image} 
                          alt={agent.name} 
                          className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                          <p className="text-xs font-mono text-gray-400 mb-2 tracking-widest uppercase">{layerConfig.name}</p>
                          <h3 className="text-3xl font-bold text-white tracking-tighter mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{agent.name}</h3>
                          <p className="text-sm font-medium" style={{ color: layerConfig.color }}>{agent.tagline}</p>
                        </div>
                      </div>

                      {/* Hover State: Skills & Lore (Slide Up) */}
                      <div className="absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 p-8 flex flex-col justify-center bg-[#0B0F19]/90 backdrop-blur-md">
                        <div className="mb-6">
                          <h3 className={`text-4xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r ${layerConfig.textGradient}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {agent.name}
                          </h3>
                          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">{agent.tagline}</p>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 pl-4" style={{ borderColor: layerConfig.color }}>
                            "{agent.lore}"
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">Core Capabilities</p>
                          <ul className="space-y-2">
                            {agent.skills.map((skill, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: layerConfig.color }}></span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Hologram scanline effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                          <div className="w-full h-1 bg-white/10 absolute top-0 animate-[scan_3s_ease-in-out_infinite]"></div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
