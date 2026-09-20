'use client';
import React from 'react';

export const Shelf: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '3rem' }}>The Archive Shelf</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontWeight: 500 }}>B.Tech in IT & Computer Science</span>
            <span style={{ color: 'var(--text-tertiary)' }}>Amity University, Noida (2020-2024)</span>
            <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.5rem' }}>CGPA: 8.81 / 10.00</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Recognition</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-primary)' }}>
            <li>University Gold Medallist</li>
            <li>Best Paper Award &mdash; ICRITO 2024 IEEE</li>
            <li>Most Promising Project &mdash; InCITe 2024</li>
            <li>Shree Baljit Shastri Award for Human Values</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
