'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Transform scale and opacity based on scroll
  const scale = useTransform(scrollY, [0, 500], [1, 5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 200]);

  const identities = [
    "Cloud & DevOps Architect",
    "Systems Reliability Engineer",
    "QA Automation (SDET)",
    "Innovation Tech Engineer",
    "AI & Agentic Builder"
  ];

  return (
    <section 
      style={{ 
        position: 'relative', 
        height: '150vh', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '30vh'
      }}
    >
      <motion.div 
        style={{ 
          position: 'sticky', 
          top: '30vh',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          scale,
          opacity,
          y: textY,
          zIndex: 10
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            textAlign: 'center',
            letterSpacing: '-0.04em',
            margin: 0,
            background: 'linear-gradient(180deg, var(--text-primary) 0%, rgba(255,255,255,0) 150%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          I CONTAIN<br/>MULTITUDES.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            marginTop: '2rem',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          Ayush Kumar Sharan
        </motion.p>
      </motion.div>


      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 10
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Descend
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
