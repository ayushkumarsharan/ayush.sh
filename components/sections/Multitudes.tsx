'use client';
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
