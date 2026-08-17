'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/content/projects';
import { ArrowRight, BookOpen, Award, ExternalLink, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="06"
          label="The Archive"
          title="Things I've Built & Researched"
          subtitle="A progressive archive ranging from IEEE-awarded quantum signal processing to mobile platforms and cloud streaming."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
          {projects.map((proj) => {
            const isQuantum = proj.slug === 'quantum-signal-processing';

            return (
              <Card
                key={proj.slug}
                variant={proj.featured ? 'elevated' : 'surface'}
                padding="lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: proj.featured ? '1px solid var(--accent-border)' : '1px solid var(--border-medium)',
                }}
              >
                <div>
                  {/* Category & Status */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                    <Badge variant={proj.featured ? 'accent' : 'subtle'} size="sm">
                      {proj.category}
                    </Badge>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {proj.timeline}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 500,
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {proj.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-6)',
                    }}
                  >
                    {proj.summary}
                  </p>

                  {/* Recognition Badges if any */}
                  {proj.recognition && proj.recognition.length > 0 && (
                    <div
                      style={{
                        padding: '0.75rem',
                        backgroundColor: 'var(--bg-surface-subtle)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--space-6)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.725rem',
                          color: 'var(--accent-warm)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        <Award size={13} />
                        <span>Peer-Reviewed Recognition</span>
                      </div>
                      <ul style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {proj.recognition.map((rec, i) => (
                          <li key={i}>• {rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: 'var(--space-6)' }}>
                    {proj.tags.map((t) => (
                      <Badge key={t} variant="subtle" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)' }}>
                  {isQuantum ? (
                    <Button
                      href="/research"
                      variant="primary"
                      size="sm"
                      icon={<BookOpen size={14} />}
                    >
                      Interactive Research Blueprint
                    </Button>
                  ) : (
                    <Button
                      href={`/projects/${proj.slug}`}
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRight size={14} />}
                      iconPosition="right"
                    >
                      Read Case Study
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
