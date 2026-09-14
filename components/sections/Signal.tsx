'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { GravityText } from '@/components/ui/GravityText';
import { profile } from '@/content/profile';
import { ShieldCheck, Award, BookOpen, Cpu, DollarSign, Layers } from 'lucide-react';
import { useNodeFocus } from '@/lib/useNodeFocus';

export const Signal: React.FC = () => {
  const sectionRef = useNodeFocus('exp-m2p', 0.3) as any;

  return (
    <section id="signal" ref={sectionRef} className="section-wrapper">
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
                I work at the intersection of quality engineering and system design. At <GravityText nodeId="exp-m2p">M2P Fintech</GravityText>, I build automation frameworks for high-volume fintech platforms—the kind of distributed systems where a missed edge-case means someone's payment gets stuck at 2 AM.
              </p>
              <p>
                Before that, I worked on avionics at <strong>Thales</strong>, where system reliability isn't just an engineering aspiration—it's a strict operational mandate. And at <GravityText nodeId="exp-tech-mahindra">Tech Mahindra Makers Lab</GravityText>, I saw the economic power of cloud optimization by architecting pixel-streaming infrastructure that cut hosting costs by <GravityText nodeId="ach-76-percent">76%</GravityText>.
              </p>
              <p>
                I'm drawn to problems that sit between disciplines: my <GravityText nodeId="ach-ieee">IEEE-published research</GravityText> synthesized quantum networking with ML signal processing, while my personal pursuits span observational watercolor, economics, and 3D environment shaders.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', paddingTop: 'var(--space-2)' }}>
                Graduated as <GravityText nodeId="ach-gold-medal">University Gold Medallist</GravityText> in IT & Computer Science (Amity, CGPA 8.81/10).
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
