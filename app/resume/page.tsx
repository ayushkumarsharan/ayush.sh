'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Download, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { experiences } from '@/content/experience';
import { education } from '@/content/education';

export default function ResumePage() {
  return (
    <div style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Button href="/" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to Universe
          </Button>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
              The Compressed Version
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, color: 'var(--text-primary)' }}>
            Coordinate Map
          </h1>
          
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            This website is the expanded universe. Below is the compressed summary of my professional coordinates, optimized for quick parsing.
          </p>
        </div>

        {/* Master Resume Download */}
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'var(--bg-surface-elevated)', 
          border: '1px solid var(--accent-border)', 
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--space-12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Master Resume</h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>PDF Format • April 2026 Edition</div>
          </div>
          <Button 
            href="/AYUSH_RESUME.pdf" 
            variant="primary" 
            icon={<Download size={16} />}
            /* Force download attribute using a normal anchor in Next.js */
            onClick={(e) => {
              e.preventDefault();
              const a = document.createElement('a');
              a.href = '/AYUSH_RESUME.pdf';
              a.download = 'Ayush_Kumar_Sharan_Resume.pdf';
              a.click();
            }}
          >
            Download Resume
          </Button>
        </div>

        {/* Condensed Snapshot */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          
          {/* Experience */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: 'var(--space-6)' }}>
              Recent Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {experiences.map(exp => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600 }}>{exp.company}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{exp.period}</span>
                  </div>
                  <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{exp.role}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{exp.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', marginBottom: 'var(--space-6)' }}>
              Education
            </h2>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600 }}>{education.institution}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{education.period}</span>
              </div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{education.degree} in {education.field}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} />
                <span>{education.grade}</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
