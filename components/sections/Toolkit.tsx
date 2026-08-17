'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skillCategories, SkillItem } from '@/content/skills';
import { Sparkles, Terminal, Info } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  return (
    <section id="toolkit" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="04"
          label="The Toolkit"
          title="Capabilities Organized by Action"
          subtitle="No arbitrary percentage progress bars. A categorized taxonomy of tools, runtime environments, and frameworks with real context."
        />

        {/* Dynamic Context Tooltip Bar */}
        <div
          style={{
            minHeight: '52px',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-8)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s ease',
          }}
        >
          <Info size={17} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <div style={{ fontSize: '0.885rem', color: 'var(--text-secondary)' }}>
            {activeSkill ? (
              <span>
                <strong style={{ color: 'var(--text-primary)' }}>{activeSkill.name}:</strong> {activeSkill.context}
              </span>
            ) : (
              <span style={{ color: 'var(--text-tertiary)' }}>
                Hover or tap any skill chip below to reveal where and how it was applied.
              </span>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <Card
              key={key}
              variant="surface"
              padding="md"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {category.title}
                  </h3>
                  <Badge variant={key === 'explore' ? 'warm' : 'subtle'} size="sm">
                    {category.capability}
                  </Badge>
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-tertiary)',
                    lineHeight: 1.5,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {category.description}
                </p>
              </div>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {category.skills.map((skill) => {
                  const isHovered = activeSkill?.name === skill.name;

                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      onClick={() => setActiveSkill(skill)}
                      style={{
                        padding: '0.4rem 0.75rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.825rem',
                        fontWeight: 500,
                        backgroundColor: isHovered
                          ? 'var(--accent-primary)'
                          : skill.highlight
                          ? 'var(--accent-subtle)'
                          : 'var(--bg-surface-elevated)',
                        color: isHovered
                          ? '#ffffff'
                          : skill.highlight
                          ? 'var(--accent-primary)'
                          : 'var(--text-primary)',
                        border: isHovered
                          ? '1px solid var(--accent-primary)'
                          : skill.highlight
                          ? '1px solid var(--accent-border)'
                          : '1px solid var(--border-medium)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        lineHeight: 1,
                      }}
                      className="interactive-hover"
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
