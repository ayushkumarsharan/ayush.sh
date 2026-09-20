'use client';
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
