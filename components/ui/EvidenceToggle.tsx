'use client';

import React, { useState } from 'react';
import { FileText, BookOpen } from 'lucide-react';

export const EvidenceToggle: React.FC = () => {
  const [viewMode, setViewMode] = useState<'story' | 'evidence'>('story');

  const handleToggle = (mode: 'story' | 'evidence') => {
    setViewMode(mode);
    // In a full implementation, we'd persist this in context and conditionally render
    // metrics, verification links, and technical specs throughout the site.
    // For now, we just dispatch a custom event to notify components.
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('ayush:viewModeChange', { detail: { mode } });
      window.dispatchEvent(event);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9900,
        display: 'flex',
        backgroundColor: 'var(--bg-surface-elevated)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--shadow-md)',
        padding: '0.25rem',
        backdropFilter: 'blur(12px)',
      }}
      className="evidence-toggle"
    >
      <button
        onClick={() => handleToggle('story')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.4rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          backgroundColor: viewMode === 'story' ? 'var(--bg-primary)' : 'transparent',
          color: viewMode === 'story' ? 'var(--text-primary)' : 'var(--text-tertiary)',
          border: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: viewMode === 'story' ? 'var(--shadow-sm)' : 'none',
        }}
      >
        <BookOpen size={13} style={{ color: viewMode === 'story' ? 'var(--accent-primary)' : 'inherit' }} />
        <span>STORY</span>
      </button>
      
      <button
        onClick={() => handleToggle('evidence')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.4rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          backgroundColor: viewMode === 'evidence' ? 'var(--bg-primary)' : 'transparent',
          color: viewMode === 'evidence' ? 'var(--text-primary)' : 'var(--text-tertiary)',
          border: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: viewMode === 'evidence' ? 'var(--shadow-sm)' : 'none',
        }}
      >
        <FileText size={13} style={{ color: viewMode === 'evidence' ? 'var(--accent-primary)' : 'inherit' }} />
        <span>EVIDENCE</span>
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .evidence-toggle {
            bottom: 1.5rem;
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
};
