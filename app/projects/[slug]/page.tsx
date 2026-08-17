import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, CheckCircle2, Award, Layers, Sparkles, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back navigation */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Button href="/#projects" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to All Projects
          </Button>
        </div>

        {/* Case Study Header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              {project.timeline}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: 'var(--accent-primary)',
              fontWeight: 500,
              marginBottom: 'var(--space-6)',
            }}
          >
            {project.subtitle}
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {caseStudy.overview}
          </p>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-12)',
            }}
          >
            {project.metrics.map((m, idx) => (
              <Card key={idx} variant="elevated" padding="md">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {m.label}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', marginBottom: 'var(--space-16)' }}>
          {/* 01 Context & Background */}
          <Card variant="surface" padding="lg">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              01 — Context & Background
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
              The Operational Landscape
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {caseStudy.context}
            </p>
          </Card>

          {/* 02 The Core Challenge */}
          <Card variant="surface" padding="lg">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-warm)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              02 — Core Challenge
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
              Bottlenecks & Constraints
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {caseStudy.challenge}
            </p>
          </Card>

          {/* 03 Architecture Blueprint */}
          <Card variant="elevated" padding="lg" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              03 — System Architecture
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
              The Engineering Approach
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              {caseStudy.architecture}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-3)' }}>
              {project.tags.map((t) => (
                <Badge key={t} variant="subtle" size="sm">
                  {t}
                </Badge>
              ))}
            </div>
          </Card>

          {/* 04 Implementation Details */}
          <Card variant="surface" padding="lg">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              04 — Implementation
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
              Key Execution Steps
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {caseStudy.implementation.map((step, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* 05 Outcomes */}
          <Card variant="surface" padding="lg">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-warm)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              05 — Measured Outcomes
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
              Impact & Results
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {caseStudy.outcomes.map((out, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.925rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  <Award size={16} style={{ color: 'var(--accent-warm)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* 06 What I Learned */}
          {caseStudy.learned && (
            <Card variant="elevated" padding="lg" style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--accent-border)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                06 — Retrospective & Key Learning
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                What Building This Taught Me
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{caseStudy.learned}"
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
