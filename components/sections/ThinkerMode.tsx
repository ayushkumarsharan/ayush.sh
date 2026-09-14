'use client';

import React, { useEffect, useState } from 'react';
import { thoughts, Thought } from '@/content/thoughts';

export const ThinkerMode: React.FC = () => {
  const [activeThoughts, setActiveThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    // Select a few random thoughts to display to keep it sparse and contemplative
    const shuffled = [...thoughts].sort(() => 0.5 - Math.random());
    setActiveThoughts(shuffled.slice(0, 5));
  }, []);

  return (
    <section id="thoughts" className="section-wrapper" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 0'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-12)'
        }}>
          {activeThoughts.map((thought, i) => (
            <div 
              key={thought.id}
              style={{
                opacity: 0,
                animation: `fadeInUp 1s ease-out forwards`,
                animationDelay: `${i * 0.4}s`,
                paddingLeft: i % 2 !== 0 ? 'var(--space-8)' : '0',
                paddingRight: i % 2 === 0 ? 'var(--space-8)' : '0',
                textAlign: i % 2 !== 0 ? 'right' : 'left',
              }}
            >
              <p style={{
                fontFamily: thought.category === 'question' ? 'var(--font-display)' : 'var(--font-body)',
                fontSize: thought.category === 'question' ? 'clamp(1.4rem, 4vw, 2rem)' : 'clamp(1.1rem, 3vw, 1.4rem)',
                color: thought.category === 'principle' ? 'var(--accent-primary)' : 'var(--text-primary)',
                lineHeight: 1.6,
                fontWeight: thought.category === 'question' ? 400 : 300,
                letterSpacing: '-0.01em',
                margin: 0
              }}>
                "{thought.text}"
              </p>
              
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginTop: 'var(--space-4)',
                opacity: 0.6
              }}>
                // {thought.category}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
