'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { education, certifications, achievements } from '@/content/education';
import { Award, GraduationCap, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const Shelf: React.FC = () => {
  return (
    <section id="shelf" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <SectionHeading
          number="05"
          label="The Shelf"
          title="Credentials & Things That Mattered"
          subtitle="Scholastic rigor, verified industry certifications, and honors with the context behind why they matter."
        />

        {/* Education & Gold Medal Hero Card */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <Card
            variant="elevated"
            padding="lg"
            style={{
              border: '1px solid var(--accent-border)',
              backgroundColor: 'var(--bg-surface-elevated)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: 'var(--space-6)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <GraduationCap size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                    ACADEMIC DISTINCTION
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {education.degree}
                </h3>
                <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                  {education.field} • {education.institution}, {education.location}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--accent-warm)',
                  }}
                >
                  CGPA 8.81 / 10.00
                </div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                  {education.period}
                </div>
              </div>
            </div>

            {/* Honors Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-4)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-6)',
              }}
            >
              {education.honors.map((honor, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-medium)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Award size={16} style={{ color: 'var(--accent-warm)' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {honor.title}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '0.4rem' }}>
                    {honor.subtitle}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {honor.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Verified Industry Certifications & Specialized Study
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {certifications.map((cert, index) => (
              <Card
                key={index}
                variant="surface"
                padding="md"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '160px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-tertiary)' }}>
                      {cert.issuer}
                    </span>
                    <Badge
                      variant={cert.status === 'Ranked Top 2%' ? 'warm' : cert.status === 'In Progress' ? 'outline' : 'accent'}
                      size="sm"
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {cert.name}
                  </h4>
                  {cert.code && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
                      {cert.code}
                    </div>
                  )}
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginTop: 'var(--space-2)' }}>
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
