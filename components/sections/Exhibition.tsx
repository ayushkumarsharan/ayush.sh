'use client';
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
