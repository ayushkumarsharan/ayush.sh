'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { labExperiments, LabExperiment } from '@/content/lab';
import { FlaskConical, ArrowLeft, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function LabPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const statuses = ['all', 'Completed', 'Building', 'Experiment', 'Exploring', 'Idea'];
  const categories = ['all', 'AI & ML', 'Web & UI', 'Systems & Cloud', '3D & Creative', 'Research'];

  const filtered = labExperiments.filter((exp) => {
    const matchStatus = selectedStatus === 'all' || exp.status === selectedStatus;
    const matchCat = selectedCategory === 'all' || exp.category === selectedCategory;
    return matchStatus && matchCat;
  });

  return (
    <div style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Button href="/" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to Overview
          </Button>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: '840px', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
            <FlaskConical size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
              Living Experimental Archive
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            The Sandbox & Lab
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            A space where unfinished ideas, small prototypes, and exploratory code are allowed to breathe. Some become core architecture; others remain deliberate experiments in craft.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          style={{
            padding: 'var(--space-4)',
            backgroundColor: 'var(--bg-surface-elevated)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            marginBottom: 'var(--space-8)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Status filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginRight: '0.5rem' }}>
              Status:
            </span>
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: selectedStatus === st ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: selectedStatus === st ? '#ffffff' : 'var(--text-secondary)',
                  border: selectedStatus === st ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                }}
              >
                {st}
              </button>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            Showing {filtered.length} of {labExperiments.length} experiments
          </div>
        </div>

        {/* Experiments Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {filtered.map((exp) => (
            <Card
              key={exp.id}
              variant="elevated"
              padding="lg"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-surface-elevated)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <Badge variant="subtle" size="sm">
                    {exp.category}
                  </Badge>
                  <Badge
                    variant={exp.status === 'Completed' ? 'accent' : exp.status === 'Building' ? 'warm' : 'outline'}
                    size="sm"
                  >
                    {exp.status}
                  </Badge>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {exp.summary}
                </p>

                <div
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-tertiary)',
                    lineHeight: 1.5,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>Notes:</strong> {exp.notes}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: 'var(--space-4)' }}>
                  {exp.tools.map((t) => (
                    <Badge key={t} variant="subtle" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>

                {exp.link && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-3)' }}>
                    <Button href={exp.link} variant="ghost" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
                      Explore Artifact
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
