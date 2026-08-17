'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroAmbientCanvas } from '@/components/features/HeroAmbientCanvas';

export const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [liveLatency, setLiveLatency] = useState<number>(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % profile.taglines.length);
        setFadeState('in');
      }, 350);
    }, 4500);

    // Subtle live telemetry pulse fluctuation
    const telemetryInterval = setInterval(() => {
      setLiveLatency(Math.floor(22 + Math.random() * 6));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(telemetryInterval);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-20)',
        overflow: 'hidden',
      }}
    >
      {/* Real-Time Ambient Interactive Wave Canvas */}
      <HeroAmbientCanvas />

      {/* Organic Ambient Slow-Morphing Backdrop Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '540px',
          height: '540px',
          borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        className="animate-float-slow"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '940px' }}>
          {/* Top Live Telemetry Pill */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: 'var(--space-6)',
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--accent-primary)',
                }}
                className="pulse-dot"
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.785rem',
                  color: 'var(--text-secondary)',
                }}
              >
                QA & Automation at M2P Fintech • IEEE Published
              </span>
            </div>

            <span style={{ color: 'var(--border-strong)', fontSize: '0.75rem' }}>|</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)' }}>
              <Activity size={12} />
              <span>{liveLatency}ms latency</span>
            </div>
          </div>

          {/* Bold Editorial Wordmark Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.85rem, 7vw, 5.5rem)',
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            {profile.name}
          </h1>

          {/* Rotating Tagline Statement */}
          <div
            style={{
              minHeight: '2.5rem',
              marginBottom: 'var(--space-6)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.2rem, 2.3vw, 1.75rem)',
                color: 'var(--accent-primary)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                opacity: fadeState === 'in' ? 1 : 0,
                transform: fadeState === 'in' ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {profile.taglines[taglineIndex]}
            </p>
          </div>

          {/* Summary Narrative */}
          <p
            style={{
              fontSize: 'clamp(1.025rem, 1.3vw, 1.225rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '740px',
              marginBottom: 'var(--space-10)',
            }}
          >
            Systems & Automation Engineer engineering high-reliability test architectures and cloud infrastructure across fintech and aviation. University Gold Medallist with a deep curiosity for quantum networking, 3D technology, and thoughtful design.
          </p>

          {/* Primary CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: 'var(--space-12)',
            }}
          >
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={17} />}
              iconPosition="right"
            >
              Explore Where I've Built
            </Button>

            <Button
              href="#intersection"
              variant="secondary"
              size="lg"
            >
              The Intersection Map
            </Button>

            <Button
              href="/research"
              variant="outline"
              size="lg"
            >
              IEEE Research
            </Button>
          </div>

          {/* Footnote statement */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.785rem',
              color: 'var(--text-muted)',
            }}
          >
            <Terminal size={14} style={{ color: 'var(--accent-primary)' }} />
            <span>Digital Profile & Archive • Press [Cmd/Ctrl + K] for command palette</span>
          </div>
        </div>
      </div>
    </section>
  );
};
