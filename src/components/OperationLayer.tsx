"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Activity, Terminal, Database, Cpu } from 'lucide-react';

const agents = [
  {
    name: 'CASSIE',
    tagline: 'Client Success Automator',
    image: '/agents/cassie.png',
    color: '#06B6D4', // Cyan
    icon: <Activity className="w-4 h-4" />,
    description: 'Handles 10,000 inquiries per second with zero emotional fatigue and perfect accuracy.',
    status: 'ONLINE',
    uptime: '99.999%'
  },
  {
    name: 'COMMET',
    tagline: 'Internal Comms Node',
    image: '/agents/commet.png',
    color: '#3B82F6', // Blue
    icon: <Terminal className="w-4 h-4" />,
    description: 'Synchronizes cross-departmental data streams flawlessly. The ultimate operational glue.',
    status: 'SYNCED',
    uptime: '100%'
  },
  {
    name: 'SCOUTY',
    tagline: 'Data Retrieval Unit',
    image: '/agents/scouty.png',
    color: '#14B8A6', // Teal
    icon: <Database className="w-4 h-4" />,
    description: 'Scours the web and internal databases to build enriched profiles in milliseconds.',
    status: 'INDEXING',
    uptime: '99.99%'
  },
  {
    name: 'VIZZY',
    tagline: 'Visual Analytics Engine',
    image: '/agents/vizzy.png',
    color: '#6366F1', // Indigo
    icon: <Cpu className="w-4 h-4" />,
    description: 'Translates raw operational chaos into actionable, crystal-clear dashboards.',
    status: 'PROCESSING',
    uptime: '99.98%'
  }
];

export default function OperationLayer() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 bg-[#02040A] overflow-hidden">
      
      {/* System Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#06B6D4]/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#06B6D4]/10 border border-[#06B6D4]/30 mb-6"
          >
            <div className="w-2 h-2 bg-[#06B6D4] animate-pulse"></div>
            <span className="text-[#06B6D4] text-xs font-mono tracking-widest uppercase">
              Layer 03
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
            OPERATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#3B82F6]">LAYER</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            The unbreakable backbone. Grounded, precise, and relentlessly reliable. They turn strategy and growth into sustainable reality.
          </motion.p>
        </div>
      </div>

      {/* Full-width Carousel Container */}
      <div className="relative w-full max-w-[1600px] mx-auto mt-12">
        
        {/* Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#02040A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#02040A] to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-4 md:left-12 top-[35%] md:top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center hover:bg-[#2A2A2A] border border-white/10 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-4 md:right-12 top-[35%] md:top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center hover:bg-[#2A2A2A] border border-white/10 transition-all group"
        >
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Scroll Track */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-[10vw] md:px-[15vw] pb-12 pt-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] md:w-[340px] shrink-0 snap-center flex flex-col gap-6"
            >
              {/* Image Card */}
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-[#111] relative group border border-[#1E293B]">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-[#06B6D4]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">{agent.status}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ color: agent.color }}>{agent.icon}</span>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {agent.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {agent.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
