"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const agents = [
  {
    name: 'MILLI',
    tagline: 'Viral Architect',
    image: '/agents/milli.png',
    color: '#F97316', // Orange
    description: 'Engineers contagious campaigns that spread faster than light.'
  },
  {
    name: 'PENN',
    tagline: 'Content Maestro',
    image: '/agents/penn.png',
    color: '#F43F5E', // Rose
    description: 'Crafts compelling narratives that turn casual readers into loyalists.'
  },
  {
    name: 'SEOMI',
    tagline: 'Search Specialist',
    image: '/agents/seomi.png',
    color: '#EAB308', // Yellow
    description: 'Dominates algorithms to ensure you are always the first answer.'
  },
  {
    name: 'SOSHIE',
    tagline: 'Social Dynamo',
    image: '/agents/soshie.png',
    color: '#EC4899', // Pink
    description: 'Lives in the feed. Turns engagement metrics into revenue streams.'
  },
  {
    name: 'EMMER',
    tagline: 'Email Hacker',
    image: '/agents/emmer.png',
    color: '#EF4444', // Red
    description: 'Infiltrates inboxes with precision-targeted, high-converting sequences.'
  }
];

export default function GrowthLayer() {
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
    <section className="relative w-full min-h-screen py-24 md:py-32 bg-[#050505] overflow-hidden">
      
      {/* Energetic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EC4899]/10 rounded-full blur-[100px] mix-blend-screen"></div>
        {/* Dynamic diagonal lines */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(249,115,22,0.05)_10px,rgba(249,115,22,0.05)_20px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_10px_#F97316]"></div>
            <span className="text-[#F97316] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Layer 02
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
            GROWTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EC4899]">LAYER</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            The acquisition engine. Fast, playful, and relentlessly focused on scaling your reach and revenue.
          </motion.p>
        </div>
      </div>

      {/* Full-width Carousel Container */}
      <div className="relative w-full max-w-[1600px] mx-auto mt-12">
        
        {/* Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

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
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-[#111] relative group">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {agent.name}
                </h3>
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
