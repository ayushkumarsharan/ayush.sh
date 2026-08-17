'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, X, Sparkles } from 'lucide-react';
import { triggerConfetti } from '@/lib/utils';

export const EasterEggModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Print ASCII art in browser devtools console for curious developers
    if (typeof window !== 'undefined') {
      console.log(
        `%c
   ▲
  ▲ ▲   AYUSH KUMAR SHARAN — DIGITAL PROFILE
 ▲ ▲ ▲  Systems • Automation • Research • Creative Tech
 
 Welcome, fellow engineer.
 Thanks for inspecting the console!
 Try pressing [Cmd/Ctrl + K] for the Command Palette,
 or type "ayush" anywhere to unlock the secret terminal.
      `,
        'color: #14b8a6; font-family: monospace; font-size: 12px; font-weight: bold;'
      );

      // Secret sequence listener
      let buffer = '';
      const handleKeyDown = (e: KeyboardEvent) => {
        buffer += e.key.toLowerCase();
        if (buffer.length > 10) buffer = buffer.slice(-10);
        if (buffer.endsWith('ayush')) {
          setIsOpen(true);
          triggerConfetti();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={16} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
              ayush@system:~$ /easter-egg
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ color: 'var(--text-tertiary)', display: 'flex', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Body */}
        <div style={{ padding: '1.25rem', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
          <p style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} /> Easter Egg Unlocked: "Curiosity Rewarded"
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            You discovered the secret keystroke sequence. In a world full of standard templates, curiosity and attention to detail are what make engineering truly fun.
          </p>
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.775rem',
              color: 'var(--text-muted)',
            }}
          >
            <code>
              status: active_engineer<br />
              core_philosophy: "Quiet confidence beats loud marketing."<br />
              location: "Noida / Bengaluru, India"<br />
              next_milestone: "AWS SysOps + Scaling Fintech Reliability"
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
