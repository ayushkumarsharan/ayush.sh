'use client';

import React from 'react';
import { useMode } from '@/lib/ModeContext';
import { modeOrder, getModeById } from '@/content/modes';
import { Sparkles, Briefcase, Layers, Map, PenTool, Lightbulb, User } from 'lucide-react';

const modeIcons = {
  engineer: Briefcase,
  builder: Layers,
  explorer: Map,
  creative: PenTool,
  thinker: Lightbulb,
  journey: User,
  life: User
};

export const ArrivalState: React.FC = () => {
  const { setMode } = useMode();

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 'var(--space-8)',
        zIndex: 10
      }}
    >
      <div 
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          animation: 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        <h1 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-2)',
            lineHeight: 1
          }}
        >
          AYUSH
        </h1>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--accent-primary)',
            marginBottom: 'var(--space-8)'
          }}
        >
          ENGINEER • BUILDER • PROBLEM SOLVER
        </div>
        
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-12)'
          }}
        >
          I CONTAIN MULTITUDES.
        </h2>
      </div>

      {/* Latent Nodes / Constellation */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none'
        }}
      >
        {modeOrder.filter(m => m !== 'life').map((mId, index) => {
          const mode = getModeById(mId);
          const Icon = modeIcons[mId as keyof typeof modeIcons] || Sparkles;
          
          // Generate a scattered, constellation-like position (pseudo-random but fixed)
          const angle = (index / 6) * Math.PI * 2;
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 35 : 42; // vh
          const top = 50 + Math.sin(angle) * radius;
          const left = 50 + Math.cos(angle) * (radius * 0.7);

          return (
            <button
              key={mId}
              onClick={() => setMode(mId)}
              style={{
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                opacity: 0.7,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="latent-node"
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              }}
            >
              <div 
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'var(--text-primary)',
                  borderRadius: '50%',
                  boxShadow: '0 0 12px 2px var(--accent-primary)',
                  marginBottom: '0.25rem'
                }}
              />
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-secondary)'
                }}
              >
                {mode.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
