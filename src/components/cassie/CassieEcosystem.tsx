"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { 
  MessageSquare, 
  Target, 
  Clock, 
  Database, 
  Users, 
  BarChart3,
  Search
} from "lucide-react";

interface NodeProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  delay: number;
  mascotAction?: string;
}

const nodes: NodeProps[] = [
  {
    id: "inboxing",
    title: "Inboxing",
    description: "Tự động phản hồi đa kênh",
    icon: <MessageSquare className="w-6 h-6" />,
    initialX: -400,
    initialY: -200,
    targetX: -220,
    targetY: -150,
    delay: 0,
  },
  {
    id: "scoring",
    title: "Lead Scoring",
    description: "Phân loại khách tiềm năng",
    icon: <Target className="w-6 h-6" />,
    initialX: 400,
    initialY: -250,
    targetX: 220,
    targetY: -120,
    delay: 0.1,
  },
  {
    id: "followup",
    title: "Follow-up",
    description: "Nhắc lịch chăm sóc tự động",
    icon: <Clock className="w-6 h-6" />,
    initialX: -500,
    initialY: 100,
    targetX: -260,
    targetY: 80,
    delay: 0.2,
  },
  {
    id: "crm",
    title: "CRM Sync",
    description: "Đồng bộ dữ liệu tức thì",
    icon: <Database className="w-6 h-6" />,
    initialX: 500,
    initialY: 150,
    targetX: 260,
    targetY: 100,
    delay: 0.3,
  },
  {
    id: "handoff",
    title: "Handoff",
    description: "Chuyển nhân sự thông minh",
    icon: <Users className="w-6 h-6" />,
    initialX: 0,
    initialY: 400,
    targetX: 0,
    targetY: 220,
    delay: 0.4,
  }
];

export default function CassieEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleFactor = isMobile ? 0.6 : 1;

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] md:min-h-[150vh] bg-[#030712] py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] md:h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20 z-30 px-4"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Hệ sinh thái kết nối
          </h2>
          <p className="text-cyan-400/60 text-base md:text-lg max-w-2xl mx-auto">
            Mọi thẻ năng lực của Cassie đều được liên kết chặt chẽ, tạo nên một quy trình vận hành tự động khép kín.
          </p>
        </motion.div>

        <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Central Core (Cassie) */}
          <motion.div 
            style={{ 
              scale: useTransform(smoothProgress, [0.2, 0.5], [0.4, 1]),
              opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 1])
            }}
            className="relative z-20 w-32 h-32 md:w-64 md:h-64 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] md:blur-[60px] rounded-full animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-cyan-400/30 p-3 md:p-4 backdrop-blur-xl bg-white/5 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <img 
                src="/agents/cassie.png" 
                alt="Cassie Core" 
                className="w-full h-full object-contain"
              />
              {/* Orbital Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 md:-inset-4 border border-cyan-400/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-8 border border-white/5 rounded-full"
              />
            </div>
          </motion.div>

          {/* Digital Threads (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {nodes.map((node) => (
              <Thread 
                key={`thread-${node.id}`} 
                node={node} 
                progress={smoothProgress} 
                scaleFactor={scaleFactor}
              />
            ))}
          </svg>

          {/* Feature Nodes */}
          {nodes.map((node) => (
            <EcosystemNode 
              key={node.id} 
              node={node} 
              progress={smoothProgress} 
              scaleFactor={scaleFactor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Thread({ node, progress, scaleFactor }: { node: NodeProps; progress: any; scaleFactor: number }) {
  const x = useTransform(progress, [0.2 + node.delay * 0.5, 0.6 + node.delay * 0.5], [node.initialX * scaleFactor, node.targetX * scaleFactor]);
  const y = useTransform(progress, [0.2 + node.delay * 0.5, 0.6 + node.delay * 0.5], [node.initialY * scaleFactor, node.targetY * scaleFactor]);
  const opacity = useTransform(progress, [0.3 + node.delay * 0.5, 0.5 + node.delay * 0.5], [0, 1]);

  return (
    <motion.path
      d={useTransform([x, y], ([currentX, currentY]) => {
        // Calculate path from center (0,0 relative to container center) to node
        // SVG coordinates are absolute, so we need to offset by 50%
        // We use a ref for the container to get actual dimensions or assume a base size
        const startX = 512; // 1024 / 2 (base width)
        const startY = 300; // 600 / 2 (base height)
        
        // Actually, SVG viewBox would be better, but we are using absolute px here.
        // Let's assume the container is 100% width.
        // For simplicity, we keep the 512/300 as center points.
        const endX = 512 + (currentX as number);
        const endY = 300 + (currentY as number);
        
        // Create a curved path
        const cp1x = startX + (endX - startX) * 0.2;
        const cp1y = startY + (endY - startY) * 0.8;
        const cp2x = startX + (endX - startX) * 0.8;
        const cp2y = startY + (endY - startY) * 0.2;
        
        return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
      })}
      fill="none"
      stroke="url(#glowGradient)"
      strokeWidth="2"
      strokeDasharray="4 4"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.8)" />
        </linearGradient>
      </defs>
    </motion.path>
  );
}

function EcosystemNode({ node, progress, scaleFactor }: { node: NodeProps; progress: any; scaleFactor: number }) {
  const x = useTransform(progress, [0.2 + node.delay * 0.5, 0.6 + node.delay * 0.5], [node.initialX * scaleFactor, node.targetX * scaleFactor]);
  const y = useTransform(progress, [0.2 + node.delay * 0.5, 0.6 + node.delay * 0.5], [node.initialY * scaleFactor, node.targetY * scaleFactor]);
  const opacity = useTransform(progress, [0.2 + node.delay * 0.5, 0.4 + node.delay * 0.5], [0, 1]);
  const scale = useTransform(progress, [0.2 + node.delay * 0.5, 0.5 + node.delay * 0.5], [0.5, 1]);

  return (
    <motion.div
      style={{ 
        x, 
        y, 
        opacity,
        scale: useTransform(scale, (s) => s * (scaleFactor < 1 ? 0.8 : 1))
      }}
      className="absolute z-30 group cursor-pointer"
    >
      <div className="relative">
        {/* Node Circle */}
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300"
        >
          <div className="text-cyan-400 group-hover:text-white transition-colors">
            {node.icon}
          </div>
          
          {/* Node Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors" />
        </motion.div>

        {/* Hover Content: Cassie Mascot + Info */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 md:w-48 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <motion.div 
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
            className="bg-[#0f172a]/90 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-3 relative">
              <img 
                src="/agents/cassie.png" 
                alt="Cassie Action" 
                className="w-full h-full object-contain"
              />
              {/* Action Overlay (Magnifying glass for Lead Scoring) */}
              {node.id === "scoring" && (
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-10 md:h-10 bg-cyan-500 rounded-full flex items-center justify-center border-2 border-[#0f172a]"
                >
                  <Search className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </motion.div>
              )}
              {node.id === "inboxing" && (
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0f172a]"
                >
                  <MessageSquare className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </motion.div>
              )}
            </div>
            <h4 className="text-white font-bold text-[10px] md:text-sm mb-1">{node.title}</h4>
            <p className="text-cyan-400/70 text-[8px] md:text-[10px] leading-tight">{node.description}</p>
          </motion.div>
        </div>

        {/* Label (Visible always or on hover?) - Let's make it subtle */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium group-hover:text-cyan-400 transition-colors">
            {node.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
