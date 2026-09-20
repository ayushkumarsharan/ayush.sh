'use client';
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
