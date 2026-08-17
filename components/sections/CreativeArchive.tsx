'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { creativeWorks, CreativeItem } from '@/content/creative';
import { Palette, Box, Layers, Eye } from 'lucide-react';

export const CreativeArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Creative' },
    { id: '3D & Interactive', label: '3D & Spatial Tech' },
    { id: 'Visual & Sketching', label: 'Watercolor & Analog Art' },
    { id: 'Design & Systems', label: 'Design Systems' },
  ];

  const filtered = selectedCategory === 'all'
    ? creativeWorks
    : creativeWorks.filter((item) => item.category === selectedCategory);

  return (
    <section id="creative" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <SectionHeading
          number="07"
          label="Creative Studio"
          title="The Things That Don't Fit Neatly on a Resume"
          subtitle="Spatial 3D engines, observational watercolor on paper, and visual design systems that inform how I think about user perception."
        />

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 'var(--space-8)' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.825rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: selectedCategory === cat.id ? 'var(--accent-primary)' : 'var(--bg-surface-elevated)',
                color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                border: selectedCategory === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-medium)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Creative Works Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
          {filtered.map((item) => (
            <Card
              key={item.id}
              variant="elevated"
              padding="none"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface-elevated)',
              }}
            >
              {/* Artistic Abstract Backdrop Canvas Header */}
              <div
                style={{
                  height: '140px',
                  background: item.gradientTheme || 'linear-gradient(135deg, #1f2937, #111827)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
              >
                {/* Palette chips */}
                {item.palette && (
                  <div style={{ display: 'flex', gap: '0.35rem', position: 'absolute', top: '1rem', right: '1rem' }}>
                    {item.palette.map((color, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: color,
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                      />
                    ))}
                  </div>
                )}

                <Badge variant="accent" size="sm">
                  {item.category}
                </Badge>
              </div>

              {/* Body */}
              <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {item.medium}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {item.year}
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
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {item.description}
                  </p>

                  {item.notes && (
                    <div
                      style={{
                        padding: '0.75rem',
                        backgroundColor: 'var(--bg-surface)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.8rem',
                        color: 'var(--text-tertiary)',
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                        marginBottom: 'var(--space-4)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      "{item.notes}"
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {item.tags.map((t) => (
                    <Badge key={t} variant="subtle" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
