import os

base_dir = r"d:\Anitgravity\My Website"

files = {
    "app/layout.tsx": """import './globals.css';
import '../styles/tokens.css';
import '../styles/reset.css';
import '../styles/base.css';
import { ModeProvider } from '@/lib/ModeContext';
import { UniverseProvider } from '@/lib/UniverseContext';
import { AtmosphericBackground } from '@/components/features/AtmosphericBackground';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';

export const metadata = {
  title: 'Ayush Kumar Sharan | Engineer, Builder, Problem Solver',
  description: 'Personal Universe and Digital Archive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ModeProvider>
          <UniverseProvider>
            <AtmosphericBackground />
            <LayoutWrapper>
              <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
                {children}
              </main>
            </LayoutWrapper>
          </UniverseProvider>
        </ModeProvider>
      </body>
    </html>
  );
}
""",
    "app/page.tsx": """'use client';
import { Arrival } from '@/components/sections/Arrival';
import { Identity } from '@/components/sections/Identity';
import { Experience } from '@/components/sections/Experience';
import { Exhibition } from '@/components/sections/Exhibition';
import { ToolLandscape } from '@/components/sections/ToolLandscape';
import { Shelf } from '@/components/sections/Shelf';
import { Multitudes } from '@/components/sections/Multitudes';

export default function Home() {
  return (
    <div className="universe-container">
      <Arrival />
      <Identity />
      <Experience />
      <Exhibition />
      <ToolLandscape />
      <Shelf />
      <Multitudes />
    </div>
  );
}
""",
    "components/layout/LayoutWrapper.tsx": """'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
""",
    "components/features/AtmosphericBackground.tsx": """'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMode } from '@/lib/ModeContext';

export const AtmosphericBackground: React.FC = () => {
  const { activeAtmosphere } = useMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return <div className="fixed inset-0 bg-primary z-0 pointer-events-none" />;

  let orbs: { color: string; size: string; x: string[]; y: string[]; duration: number }[] = [];
  
  switch(activeAtmosphere) {
    case 'aurora':
      orbs = [
        { color: 'var(--accent-primary)', size: '60vw', x: ['-20%', '20%', '-20%'], y: ['-20%', '30%', '-20%'], duration: 20 },
        { color: 'var(--accent-warm)', size: '50vw', x: ['40%', '-10%', '40%'], y: ['20%', '-20%', '20%'], duration: 25 },
      ];
      break;
    case 'paper':
      orbs = [{ color: 'var(--accent-primary)', size: '70vw', x: ['-10%', '10%', '-10%'], y: ['-10%', '10%', '-10%'], duration: 30 }];
      break;
    case 'cosmos':
    default:
      orbs = [
        { color: 'var(--accent-primary)', size: '55vw', x: ['-20%', '10%', '-20%'], y: ['-20%', '20%', '-20%'], duration: 22 },
        { color: '#3b82f6', size: '45vw', x: ['50%', '20%', '50%'], y: ['30%', '-10%', '30%'], duration: 28 },
      ];
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-primary"
      style={{ transition: 'background-color 1s ease' }}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={`${activeAtmosphere}-${i}`}
          animate={{ x: orb.x, y: orb.y }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 70%)`,
            opacity: 0.12,
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            top: '20%',
            left: '20%',
          }}
        />
      ))}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </motion.div>
  );
};
""",
    "components/ui/Artifact.tsx": """'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ArtifactProps {
  type: 'system' | 'research' | 'code' | 'illustration' | 'document' | 'evidence';
  title: string;
  context?: string;
  children: React.ReactNode;
}

export const Artifact: React.FC<ArtifactProps> = ({ type, title, context, children }) => {
  return (
    <motion.div 
      className="artifact-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      style={{
        border: '1px solid var(--border-medium)',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{
        padding: '1rem',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--bg-surface-elevated)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)' }}>{type}</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{title}</span>
        </div>
        {context && <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{context}</span>}
      </div>
      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </motion.div>
  );
};
""",
    "components/sections/Arrival.tsx": """'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Arrival: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px' }}
      >
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '1rem'
        }}>
          AYUSH KUMAR SHARAN
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--accent-primary)',
          marginBottom: '3rem'
        }}>
          Engineer &middot; Builder &middot; Problem Solver
        </p>

        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <p>
            I like understanding what happens underneath things — especially when something breaks.
          </p>
          <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            Understand the system. Find the problem. Build the solution. Make it useful.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
""",
    "components/sections/Identity.tsx": """'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Artifact } from '@/components/ui/Artifact';

export const Identity: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>How I Think</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--border-medium)', paddingLeft: '2rem' }}>
            {[
              { step: 'BUILD', desc: 'Construct the mechanism.' },
              { step: 'BREAK', desc: 'Find the limit.' },
              { step: 'UNDERSTAND', desc: 'Trace the failure.' },
              { step: 'FIX', desc: 'Implement the correction.' },
              { step: 'VERIFY', desc: 'Ensure stability.' }
            ].map((s, i) => (
              <div key={i}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>0{i+1} — {s.step}</span>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <Artifact type="illustration" title="System Trace" context="Visual Model">
           <svg viewBox="0 0 400 300" style={{ width: '100%', height: 'auto', opacity: 0.8 }}>
             {/* Abstract organic circuit trace representing the thinking process */}
             <motion.path 
               d="M 50 150 Q 150 50, 200 150 T 350 150" 
               fill="none" 
               stroke="var(--accent-primary)" 
               strokeWidth="2"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 2, ease: 'easeInOut' }}
             />
             <circle cx="50" cy="150" r="4" fill="var(--text-primary)" />
             <circle cx="200" cy="150" r="4" fill="var(--text-primary)" />
             <circle cx="350" cy="150" r="4" fill="var(--text-primary)" />
           </svg>
        </Artifact>
      </div>
    </section>
  );
};
""",
    "components/sections/Experience.tsx": """'use client';
import React from 'react';
import { Artifact } from '@/components/ui/Artifact';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '4rem' }}>Work & Evidence</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {/* M2P */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>M2P Fintech</h3>
            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Product Engineering / QA & Automation &middot; 2025 - Present</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Production-grade fintech platform validation. Testing and verifying Transactions, Merchants, EMI, and Settlement flows. 
              Built E2E automation using Playwright and TypeScript with Page Object Models.
            </p>
          </div>
          <Artifact type="system" title="Authentication & Verification Flow" context="E2E Architecture">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
              <div>[POST] /auth/merchant -> 200 OK</div>
              <div style={{ paddingLeft: '1rem', borderLeft: '1px solid var(--border-medium)' }}>
                Verifying dynamic MUI DataGrid...<br/>
                Asserting settlement state...<br/>
                <span style={{ color: 'var(--accent-primary)' }}>PASS (1.2s)</span>
              </div>
            </div>
          </Artifact>
        </div>

        {/* Tech Mahindra */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
          <Artifact type="evidence" title="Cost Optimization" context="Pixel Streaming Infra">
             <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
               <span style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1 }}>76%</span>
               <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '1rem' }}>Reduction in continuous hosting costs</span>
             </div>
          </Artifact>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tech Mahindra Makers Lab</h3>
            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Cloud / Game Development &middot; Jun 2023 - Sep 2023</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Architected cloud infrastructure across AWS and GCP for Unreal Engine Pixel Streaming applications. Also curated localized AI/LLM datasets (Indus LLM).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
""",
    "components/sections/Exhibition.tsx": """'use client';
import React from 'react';
import { Artifact } from '@/components/ui/Artifact';

export const Exhibition: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '4rem' }}>Artifacts & Exhibitions</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        
        <Artifact type="research" title="Quantum-Driven Signal Processing" context="IEEE Publication">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Research combining quantum networking concepts with classical communication enhancement. Awarded Best Paper at ICRITO 2024.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            Uses: Qiskit, IBM Quantum Composer
          </div>
        </Artifact>

        <Artifact type="system" title="Savvy" context="AI / Document Retrieval">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-primary)', borderRadius: '4px', fontSize: '0.8rem' }}>Document</span>
            <span style={{ color: 'var(--accent-primary)' }}>&rarr;</span>
            <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-primary)', borderRadius: '4px', fontSize: '0.8rem' }}>Embedding</span>
            <span style={{ color: 'var(--accent-primary)' }}>&rarr;</span>
            <span style={{ padding: '0.5rem 1rem', background: 'var(--bg-primary)', borderRadius: '4px', fontSize: '0.8rem' }}>Response</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Document-oriented AI utilizing ChromaDB, FastEmbed, and Streamlit for contextual retrieval.
          </p>
        </Artifact>

      </div>
    </section>
  );
};
""",
    "components/sections/ToolLandscape.tsx": """'use client';
import React from 'react';

export const ToolLandscape: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>The Tools Behind the Work</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '4rem', lineHeight: 1.6 }}>
        These are the instruments through which I have made and operated real systems. They are not isolated skills, but context for the work above.
      </p>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2rem',
        fontFamily: 'var(--font-mono)', 
        fontSize: '0.9rem',
        color: 'var(--text-primary)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--accent-primary)', minWidth: '120px' }}>Playwright</span>
          <span style={{ color: 'var(--border-strong)' }}>&mdash;</span>
          <span style={{ color: 'var(--text-secondary)' }}>M2P / E2E Automation / Dynamic UI Verification</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--accent-primary)', minWidth: '120px' }}>AWS & GCP</span>
          <span style={{ color: 'var(--border-strong)' }}>&mdash;</span>
          <span style={{ color: 'var(--text-secondary)' }}>Tech Mahindra / Pixel Streaming Infrastructure</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--accent-primary)', minWidth: '120px' }}>Qiskit</span>
          <span style={{ color: 'var(--border-strong)' }}>&mdash;</span>
          <span style={{ color: 'var(--text-secondary)' }}>Quantum Research / IEEE Publication</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--accent-primary)', minWidth: '120px' }}>TypeScript</span>
          <span style={{ color: 'var(--border-strong)' }}>&mdash;</span>
          <span style={{ color: 'var(--text-secondary)' }}>Automation Frameworks / Type-Safe Tooling</span>
        </div>
      </div>
    </section>
  );
};
""",
    "components/sections/Shelf.tsx": """'use client';
import React from 'react';

export const Shelf: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '3rem' }}>The Archive Shelf</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontWeight: 500 }}>B.Tech in IT & Computer Science</span>
            <span style={{ color: 'var(--text-tertiary)' }}>Amity University, Noida (2020-2024)</span>
            <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.5rem' }}>CGPA: 8.81 / 10.00</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Recognition</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-primary)' }}>
            <li>University Gold Medallist</li>
            <li>Best Paper Award &mdash; ICRITO 2024 IEEE</li>
            <li>Most Promising Project &mdash; InCITe 2024</li>
            <li>Shree Baljit Shastri Award for Human Values</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
""",
    "components/sections/Multitudes.tsx": """'use client';
import React from 'react';

export const Multitudes: React.FC = () => {
  return (
    <section className="py-48 px-6 md:px-12 lg:px-24 text-center" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ 
        fontSize: 'clamp(3rem, 8vw, 6rem)', 
        fontFamily: 'var(--font-display)', 
        letterSpacing: '-0.03em',
        marginBottom: '2rem',
        color: 'var(--text-primary)'
      }}>
        I CONTAIN MULTITUDES.
      </h2>
      <p style={{ 
        fontFamily: 'var(--font-mono)', 
        textTransform: 'uppercase', 
        letterSpacing: '0.2em',
        color: 'var(--accent-primary)',
        marginBottom: '4rem'
      }}>
        Engineer &middot; Builder &middot; Explorer &middot; Creative &middot; Thinker &middot; Life
      </p>
      
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
        There is more here. The universe awaits.
      </p>
    </section>
  );
};
"""
}

for filepath, content in files.items():
    full_path = os.path.join(base_dir, filepath)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Successfully generated all new UI architecture files based on the specification.")
