'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/content/experience';
import { ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const Workbench: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('m2p');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="02"
          label="The Workbench"
          title="Where I've Been Building"
          subtitle="Engineering chapters across fintech microservices, avionics telemetry, and cloud infrastructure."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {experiences.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <Card
                key={item.id}
                variant="surface"
                padding="none"
                style={{
                  border: isExpanded ? '1px solid var(--accent-border)' : '1px solid var(--border-medium)',
                  boxShadow: isExpanded ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)',
                  overflow: 'hidden',
                }}
              >
                {/* Header / Clickable Bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  style={{
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    backgroundColor: isExpanded ? 'var(--bg-surface-elevated)' : 'transparent',
                    transition: 'background-color var(--transition-fast)',
                  }}
                  className="interactive-hover"
                >
                  <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.company}
                      </h3>
                      {item.current && <Badge variant="accent" size="sm">Current Role</Badge>}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--accent-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.role}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                        fontStyle: 'italic',
                      }}
                    >
                      "{item.frame}"
                    </div>
                  </div>

                  {/* Metadata and Toggle Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={13} style={{ color: 'var(--accent-primary)' }} />
                        <span>{item.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                        <MapPin size={13} style={{ color: 'var(--text-tertiary)' }} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-surface-subtle)',
                        color: 'var(--text-primary)',
                        flexShrink: 0,
                      }}
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div
                    style={{
                      padding: 'clamp(1rem, 3vw, 1.5rem)',
                      borderTop: '1px solid var(--border-subtle)',
                      backgroundColor: 'var(--bg-surface)',
                      animation: 'fadeIn 0.2s ease-out',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.925rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        marginBottom: 'var(--space-6)',
                      }}
                    >
                      {item.summary}
                    </p>

                    {/* Bullet Highlights */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.725rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--text-tertiary)',
                          marginBottom: 'var(--space-3)',
                        }}
                      >
                        Key Engineering Highlights
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '0.9rem',
                              color: 'var(--text-primary)',
                              lineHeight: 1.6,
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.2rem' }}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: 'var(--space-2)' }}>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="subtle" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
