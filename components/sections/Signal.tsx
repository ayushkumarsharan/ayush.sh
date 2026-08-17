'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { profile } from '@/content/profile';
import { ShieldCheck, Award, BookOpen, Cpu, DollarSign, Layers } from 'lucide-react';

export const Signal: React.FC = () => {
  return (
    <section id="signal" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="01"
          label="The Signal"
          title="What I spend my time doing and why it matters."
          subtitle="A realistic look at engineering priorities, system fault-tolerance, and interdisciplinary curiosity."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Left Narrative */}
          <Card variant="surface" padding="lg" style={{ height: '100%' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.65rem',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Between Systems & Curiosity
            </h3>

            <div
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
            >
              <p>
                I work at the intersection of quality engineering and system design. At <strong>M2P Fintech</strong>, I build automation frameworks for high-volume fintech platforms—the kind of distributed systems where a missed edge-case means someone's payment gets stuck at 2 AM.
              </p>
              <p>
                Before that, I worked on avionics at <strong>Thales</strong>, where system reliability isn't just an engineering aspiration—it's a strict operational mandate. And at <strong>Tech Mahindra Makers Lab</strong>, I saw the economic power of cloud optimization by architecting pixel-streaming infrastructure that cut hosting costs by 76%.
              </p>
              <p>
                I'm drawn to problems that sit between disciplines: my IEEE-published research synthesized quantum networking with ML signal processing, while my personal pursuits span observational watercolor, economics, and 3D environment shaders.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', paddingTop: 'var(--space-2)' }}>
                Graduated as University Gold Medallist in IT & Computer Science (Amity, CGPA 8.81/10).
              </p>
            </div>
          </Card>

          {/* Right Signal Board (Key factual data points) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {profile.stats.map((stat, idx) => (
              <Card
                key={idx}
                variant="elevated"
                padding="md"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '140px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      lineHeight: 1.1,
                      marginBottom: 'var(--space-1)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.925rem',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {stat.context}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
