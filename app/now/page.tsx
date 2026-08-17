'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { nowData } from '@/content/now';
import { Clock, ArrowLeft, Briefcase, BookOpen, Sparkles, Cpu, Layers, CheckCircle2 } from 'lucide-react';

export default function NowPage() {
  const items = [
    {
      label: 'Working On',
      icon: <Briefcase size={18} style={{ color: 'var(--accent-primary)' }} />,
      data: nowData.focus.working,
    },
    {
      label: 'Studying & Certifying',
      icon: <Cpu size={18} style={{ color: 'var(--accent-warm)' }} />,
      data: nowData.focus.learning,
    },
    {
      label: 'Experimenting With',
      icon: <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />,
      data: nowData.focus.experimenting,
    },
    {
      label: 'Reading & Analyzing',
      icon: <BookOpen size={18} style={{ color: 'var(--text-secondary)' }} />,
      data: nowData.focus.reading,
    },
    {
      label: 'Building & Polishing',
      icon: <Layers size={18} style={{ color: 'var(--accent-primary)' }} />,
      data: nowData.focus.building,
    },
  ];

  return (
    <div style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Button href="/" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to Overview
          </Button>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
            <Clock size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
              The Present Chapter
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
            What I'm Doing Now
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
            <span>Last Updated: {nowData.lastUpdated}</span>
            <span>•</span>
            <span>Location: {nowData.location}</span>
          </div>
        </div>

        {/* Focus List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
          {items.map((item, idx) => (
            <Card key={idx} variant="elevated" padding="lg" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: 'var(--space-2)' }}>
                {item.icon}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {item.label}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {item.data.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {item.data.detail}
              </p>
            </Card>
          ))}
        </div>

        {/* Guiding Principles */}
        <Card variant="surface" padding="lg">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Guiding Operating Principles
          </h3>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {nowData.principles.map((pr, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.625rem',
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{pr}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
