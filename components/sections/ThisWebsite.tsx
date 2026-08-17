'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Code, Sparkles, Cpu, Layers, ArrowRight } from 'lucide-react';

export const ThisWebsite: React.FC = () => {
  return (
    <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <SectionHeading
          number="09"
          label="The Craft"
          title="This Website Is Also a Project"
          subtitle="Engineered from scratch as a part-time passion project to explore modern web performance, accessible typography, and AI-assisted development."
        />

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
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
                <Code size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.785rem', color: 'var(--accent-primary)' }}>
                  HAND-CRAFTED • ZERO TEMPLATES
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.65rem',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Demonstrating What Modern Web Tech Can Do
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                I wanted a better way to represent the things that don't fit on a standard 1-page resume PDF. This site is built with Next.js, TypeScript, and pure bespoke CSS tokens—no generic UI libraries or template shortcuts.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Every micro-interaction, keyboard shortcut (<code>⌘K</code>), theme transition, and data-driven module is engineered to load under 1 second with a 95+ target across all Lighthouse benchmarks.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Button href="/lab" variant="primary" size="sm" icon={<Layers size={14} />}>
                  Explore The Lab Archive
                </Button>
                <Button href="/now" variant="secondary" size="sm">
                  View "Now" Focus
                </Button>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                backgroundColor: 'var(--bg-surface)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.25rem',
                }}
              >
                Architecture Blueprint
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Framework:</span>
                <Badge variant="subtle" size="sm">Next.js App Router</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Styling:</span>
                <Badge variant="accent" size="sm">Pure Handcrafted CSS Tokens</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Data Model:</span>
                <Badge variant="subtle" size="sm">100% Typed Single-Source Content</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Intelligence:</span>
                <Badge variant="warm" size="sm">Explore Ayush Client-Side Engine</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Hosting:</span>
                <Badge variant="subtle" size="sm">Global Edge CDN (Free Tier Ready)</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
