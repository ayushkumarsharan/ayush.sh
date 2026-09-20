'use client';
import React from 'react';

export const Card: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={className} style={{ padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', ...style }}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: string; className?: string }> = ({ children, className }) => (
  <span className={className} style={{ padding: '0.25rem 0.75rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
    {children}
  </span>
);

export const Button: React.FC<{ children: React.ReactNode; variant?: string; asChild?: boolean; className?: string; onClick?: () => void }> = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick} style={{ padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', fontWeight: 500 }}>
    {children}
  </button>
);

export const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h2>
    {subtitle && <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{subtitle}</p>}
  </div>
);
