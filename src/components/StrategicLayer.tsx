"use client";

import { motion } from 'motion/react';
import { Brain, Target, Shield, LineChart, Network, Lightbulb } from 'lucide-react';

const agents = [
  {
    name: 'ATLAS',
    role: 'Chief Strategy Officer',
    quote: '"I do not predict the future. I calculate the inevitable."',
    image: '/agents/atlas.png',
    color: '#F59E0B', // Gold/Amber
    strengths: [
      { icon: <Brain className="w-4 h-4" />, text: 'Macro-Market Analysis' },
      { icon: <Target className="w-4 h-4" />, text: 'Resource Allocation' },
      { icon: <Shield className="w-4 h-4" />, text: 'Risk Mitigation' }
    ]
  },
  {
    name: 'DEXTER',
    role: 'Data Architect',
    quote: '"Numbers never lie, but they only speak to those who know how to listen."',
    image: '/agents/dexter.png',
    color: '#F59E0B', // Gold/Amber
    strengths: [
      { icon: <LineChart className="w-4 h-4" />, text: 'Predictive Modeling' },
      { icon: <Network className="w-4 h-4" />, text: 'System Architecture' },
      { icon: <Lightbulb className="w-4 h-4" />, text: 'Pattern Recognition' }
    ]
  }
];

export default function StrategicLayer() {
  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Dark Split Background */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        <div className="w-1/2 h-full bg-[#050505]"></div>
        <div className="w-1/2 h-full bg-[#080C16]"></div>
        
        {/* Subtle glowing separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse shadow-[0_0_10px_#F59E0B]"></div>
            <span className="text-[#F59E0B] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Layer 01
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-yellow-200">LAYER</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            The elite council. They don't just execute commands; they define the trajectory of the entire system.
          </motion.p>
        </div>

        {/* Character Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/0 via-[#F59E0B]/5 to-[#F59E0B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              
              {/* Neon Border */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#F59E0B]/50 transition-colors duration-500 z-20 pointer-events-none"></div>
              
              {/* Card Content Container */}
              <div className="relative z-10 bg-[#0B0F19]/60 backdrop-blur-xl h-full flex flex-col md:flex-row overflow-hidden">
                
                {/* Character Image */}
                <div className="w-full md:w-2/5 h-[300px] md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B0F19]/90 via-transparent to-transparent z-10"></div>
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Scanline effect on image */}
                  <div className="absolute inset-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-30"></div>
                </div>

                {/* Character Info */}
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-20">
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white tracking-tighter mb-1 group-hover:text-[#F59E0B] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {agent.name}
                    </h3>
                    <p className="text-sm font-mono tracking-widest uppercase text-gray-400">
                      {agent.role}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-lg text-gray-300 font-light italic leading-relaxed border-l-2 border-[#F59E0B]/50 pl-4">
                      {agent.quote}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">Core Strengths</p>
                    <ul className="space-y-3">
                      {agent.strengths.map((strength, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B]/10 group-hover:border-[#F59E0B]/30 transition-colors duration-300">
                            {strength.icon}
                          </div>
                          {strength.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
