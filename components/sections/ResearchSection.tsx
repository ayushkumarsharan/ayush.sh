'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { researchData } from '@/content/research';
import { QuantumIllustration } from '@/components/features/illustrations/QuantumIllustration';

export default function ResearchSection() {
  return (
    <section id="research" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
            Research & Innovation
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {researchData.conference}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Interactive Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              height: '400px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
            }}
          >
            <QuantumIllustration />
          </motion.div>

          {/* Research Context */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1.2, margin: 0 }}>
              {researchData.paperTitle}
            </h3>
            
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {researchData.abstract}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(139,92,246,0.1)', borderLeft: '3px solid var(--accent-primary)' }}>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', display: 'block', marginBottom: '0.5rem' }}>EXECUTIVE SUMMARY</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{researchData.executiveSummary}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {researchData.awards.map((award, i) => (
                  <div key={i} style={{ padding: '0.5rem 1rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '100px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                    🏆 {award.title}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
