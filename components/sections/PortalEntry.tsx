'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal, Hammer, Compass, Palette, Brain, Route, Heart, 
  ArrowRight
} from 'lucide-react';
import { profile } from '@/content/profile';
import { ModeId, modeOrder, getModeById } from '@/content/modes';
import { useMode } from '@/lib/ModeContext';

const getIconForMode = (id: ModeId) => {
  switch(id) {
    case 'engineer': return <Terminal size={18} />;
    case 'builder': return <Hammer size={18} />;
    case 'explorer': return <Compass size={18} />;
    case 'creative': return <Palette size={18} />;
    case 'thinker': return <Brain size={18} />;
    case 'journey': return <Route size={18} />;
    case 'life': return <Heart size={18} />;
    default: return <Terminal size={18} />;
  }
};

export const PortalEntry: React.FC = () => {
  const { activeMode, setMode } = useMode();

  if (!activeMode) return null;

  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [statementIndex, setStatementIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect for identity narrative
  useEffect(() => {
    const text = profile.identityNarrative[statementIndex];
    if (isTyping) {
      if (typedText.length < text.length) {
        const timeout = setTimeout(() => {
          setTypedText(text.slice(0, typedText.length + 1));
        }, 40); // typing speed
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setTypedText('');
          setStatementIndex((prev) => (prev + 1) % profile.identityNarrative.length);
          setIsTyping(true);
        }, 5000); // Wait before next sentence
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping, statementIndex]);

  // Blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(timeout);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 'var(--space-10) var(--space-6)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background glow tied to active mode */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
          filter: 'blur(80px)',
          opacity: 0.35,
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'background 1.5s ease',
        }}
        className="animate-float-slow"
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', width: '100%' }}>
        
        {/* Subtle top moniker */}
        <div 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 'var(--space-8)',
          }}
        >
          {profile.wordmark}
        </div>

        {/* Core Identity Statement */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-8)',
            wordBreak: 'break-word',
          }}
        >
          {profile.coreStatement}
        </h1>

        {/* Typewriter narrative */}
        <div style={{ 
          minHeight: '4.5rem', 
          marginBottom: 'var(--space-12)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            {typedText}
            <span style={{ 
              opacity: cursorVisible ? 1 : 0, 
              color: 'var(--accent-primary)',
              transition: 'opacity 0.1s' 
            }}>_</span>
          </p>
        </div>

        {/* Mode Selector - Horizontal pill format */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            CHOOSE YOUR LENS
          </div>

          <div 
            className="mode-selector-scroll"
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.5rem',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(12px)',
              maxWidth: '100%',
              overflowX: 'auto',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none',  // IE and Edge
            }}
          >
            <style jsx>{`
              .mode-selector-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {modeOrder.map((mId) => {
              const mode = getModeById(mId);
              const isActive = activeMode === mId;
              
              return (
                <button
                  key={mId}
                  onClick={() => setMode(mId)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'var(--bg-primary)' : 'transparent',
                    border: `1px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.background = 'var(--bg-translucent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                  title={mode.subtitle}
                >
                  {getIconForMode(mId)}
                  {mode.label}
                </button>
              );
            })}
          </div>
          
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-tertiary)',
            marginTop: '0.5rem',
            minHeight: '1.5rem',
            transition: 'opacity 0.3s ease',
          }}>
            {getModeById(activeMode).subtitle} — {getModeById(activeMode).description}
          </div>
        </div>

      </div>
    </section>
  );
};
