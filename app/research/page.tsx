'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { QuantumCanvas } from '@/components/features/QuantumCanvas';
import { researchData } from '@/content/research';
import { ArrowLeft, BookOpen, Award, Sparkles, Cpu, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Button href="/#projects" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to Overview
          </Button>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: '900px', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: 'var(--space-3)' }}>
            <Badge variant="accent" size="sm">IEEE Published Research</Badge>
            <Badge variant="warm" size="sm">Best Paper Award</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              ICRITO 2024
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            {researchData.paperTitle}
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--accent-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            {researchData.authors} • {researchData.conference}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            {researchData.abstract}
          </p>
        </div>

        {/* 30-Second Executive Summary Card */}
        <Card
          variant="elevated"
          padding="lg"
          style={{
            border: '1px solid var(--accent-border)',
            backgroundColor: 'var(--bg-surface-elevated)',
            marginBottom: 'var(--space-12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-3)' }}>
            <Sparkles size={18} style={{ color: 'var(--accent-warm)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-primary)' }}>
              The Research in 30 Seconds
            </h3>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {researchData.executiveSummary}
          </p>
        </Card>

        {/* Interactive Physics & Signal Simulation Canvas */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <QuantumCanvas />
        </div>

        {/* Peer-Reviewed Awards Wall */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
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
            Honors & Conference Citations
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {researchData.awards.map((award, i) => (
              <Card key={i} variant="surface" padding="md">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-2)' }}>
                  <Award size={18} style={{ color: 'var(--accent-warm)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {award.title}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
                  {award.organization}
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {award.note}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', marginBottom: 'var(--space-16)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-tertiary)',
            }}
          >
            Technical Blueprint & Methodology
          </div>

          {researchData.sections.map((section) => (
            <Card key={section.id} variant="surface" padding="lg">
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-1)',
                }}
              >
                {section.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.925rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 500,
                  marginBottom: 'var(--space-4)',
                }}
              >
                {section.subtitle}
              </div>

              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-4)' }}>
                {section.summary}
              </p>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-warm)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                  Core Principle
                </span>
                <span style={{ fontSize: '0.885rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  "{section.takeaway}"
                </span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {section.details.map((detail, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      fontSize: '0.885rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Simulation Specs Box */}
        <Card variant="elevated" padding="lg">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-4)' }}>
            <Cpu size={18} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Simulation Benchmark Parameters
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', fontSize: '0.85rem' }}>
            <div>
              <div style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>Qubit Register:</div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {researchData.simulationParams.qubitCount} Entangled Statevectors
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>Coherence Window (T2):</div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {researchData.simulationParams.coherenceTimeT2}
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>Target Fidelity Threshold:</div>
              <div style={{ fontWeight: 600, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                {researchData.simulationParams.fidelityTarget}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
