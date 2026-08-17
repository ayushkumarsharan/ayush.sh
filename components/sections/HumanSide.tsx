'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { interestsData } from '@/content/interests';
import { Sparkles, Music, Compass, BookOpen, Lightbulb } from 'lucide-react';

export const HumanSide: React.FC = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="08"
          label="The Human Side"
          title="Things That Keep the Mind Moving"
          subtitle="Engineering is where I build; curiosity across music, watercolor, economics, and design is what fuels the building."
        />

        {/* Narrative Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)',
          }}
        >
          {interestsData.stories.map((story) => (
            <Card
              key={story.id}
              variant="surface"
              padding="lg"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-2)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {story.theme}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {story.statement}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {story.narrative}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-3)' }}>
                {story.disciplines.map((d) => (
                  <Badge key={d} variant="subtle" size="sm">
                    {d}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Active Curiosities Bar */}
        <Card variant="elevated" padding="lg" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-4)' }}>
            <Lightbulb size={18} style={{ color: 'var(--accent-warm)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Questions I'm Currently Thinking About
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {interestsData.curiosities.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.625rem',
                  fontSize: '0.885rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  padding: '0.5rem 0',
                }}
              >
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
