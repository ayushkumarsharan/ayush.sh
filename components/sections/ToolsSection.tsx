'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAws, FaDocker, FaPython, FaGithub, FaRobot, FaBrain, 
  FaMicrosoft, FaGoogle, FaDatabase, FaServer, FaCode, FaCube
} from 'react-icons/fa6';
import { VscCode, VscTerminal } from 'react-icons/vsc';

type Tool = {
  name: string;
  icon: React.ElementType;
  color: string;
  evidence: string;
};

const toolsData: Tool[] = [
  { name: "Playwright", icon: FaCode, color: "#2EAD33", evidence: "M2P / E2E Automation" },
  { name: "AWS", icon: FaAws, color: "#FF9900", evidence: "Tech Mahindra / 76% cost reduction" },
  { name: "GCP", icon: FaGoogle, color: "#4285F4", evidence: "Cloud Infrastructure" },
  { name: "Azure", icon: FaMicrosoft, color: "#0089D6", evidence: "Enterprise Cloud" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", evidence: "Containerization" },
  { name: "Kubernetes", icon: FaServer, color: "#326CE5", evidence: "Orchestration" },
  { name: "MongoDB", icon: FaDatabase, color: "#47A248", evidence: "NoSQL Data" },
  { name: "Kafka", icon: FaServer, color: "#E0E0E0", evidence: "Event Streaming" },
  { name: "DataDog", icon: FaDatabase, color: "#632CA6", evidence: "Observability" },
  { name: "Unreal Engine", icon: FaCube, color: "#FFFFFF", evidence: "Pixel Streaming" },
  { name: "Blender", icon: FaCube, color: "#F5792A", evidence: "Asset Creation" },
  { name: "Streamlit", icon: FaCode, color: "#FF4B4B", evidence: "Savvy AI UI" },
  { name: "Python", icon: FaPython, color: "#3776AB", evidence: "Backend & Data" },
  { name: "TypeScript", icon: FaCode, color: "#3178C6", evidence: "Type-Safe Automation" },
  { name: "Kotlin", icon: FaCode, color: "#7F52FF", evidence: "Lit Parking App" },
  { name: "Firebase", icon: FaDatabase, color: "#FFCA28", evidence: "Mobile Backend" },
  
  // New Additions: AI, Agents, IDE, Prompts
  { name: "VS Code", icon: VscCode, color: "#007ACC", evidence: "Primary IDE Environment" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF", evidence: "Version Control & Actions" },
  { name: "Gemini", icon: FaGoogle, color: "#8E75FF", evidence: "Google DeepMind AI" },
  { name: "Claude", icon: FaRobot, color: "#F0E6D2", evidence: "Anthropic AI Workflows" },
  { name: "AI & Agents", icon: FaRobot, color: "#00E5FF", evidence: "Autonomous Workflows" },
  { name: "Prompt Eng", icon: FaBrain, color: "#FF007F", evidence: "LLM Context Optimization" },
];

import { Magnetic } from '@/components/ui/Magnetic';

export default function ToolsSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    }
  };

  return (
    <section id="tools" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as any }}
          style={{ textAlign: 'center', zIndex: 2 }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
            The Toolkit Orbit
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Hover over an instrument to reveal its real-world application.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1.5rem',
            padding: '2rem 0'
          }}
        >
          {toolsData.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              style={{
                position: 'relative',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <Magnetic strength={0.3}>
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                    border: '1px solid var(--border-subtle)',
                    backdropFilter: 'blur(12px)',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: `0 10px 30px -10px ${tool.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`
                  }}
                  variants={{
                    hover: {
                      scale: 1.15,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
                      borderColor: tool.color,
                      boxShadow: `0 20px 40px -10px ${tool.color}80, inset 0 2px 0 rgba(255,255,255,0.4), 0 0 20px ${tool.color}40`,
                      transition: { duration: 0.3 }
                    },
                    rest: {
                      scale: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <motion.div
                    variants={{
                      hover: { color: tool.color, scale: 1.1 },
                      rest: { color: 'var(--text-secondary)', scale: 1 }
                    }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <tool.icon size={36} style={{ filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.3))` }} />
                  </motion.div>
                </motion.div>
              </Magnetic>

              <motion.div
                variants={{
                  hover: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' },
                  rest: { opacity: 0, y: 15, scale: 0.9, pointerEvents: 'none' }
                }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  position: 'absolute',
                  top: '-60px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  background: 'var(--bg-surface-elevated)',
                  border: "1px solid " + tool.color,
                  padding: '0.6rem 1.2rem',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  boxShadow: `0 10px 30px -5px ${tool.color}60`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.3rem',
                  zIndex: 20,
                  backdropFilter: 'blur(20px)'
                }}
              >
                <span style={{ fontWeight: 800, color: tool.color, letterSpacing: '0.05em' }}>{tool.name}</span>
                <span style={{ opacity: 0.8, fontSize: '0.75rem' }}>{tool.evidence}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
