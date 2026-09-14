'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { useMode } from '@/lib/ModeContext';
import { Route, Zap, Eye, Lightbulb } from 'lucide-react';

interface JourneyNode {
  year: string;
  stage: string;
  event: string;
  learned: string;
  changed: string;
  icon: React.ReactNode;
}

const journeyNodes: JourneyNode[] = [
  {
    year: '2017',
    stage: 'Foundational',
    event: 'First exposure to systems and structured logic.',
    learned: 'How computers actually think at the lowest levels.',
    changed: 'Shifted from passive consumer of technology to curious builder.',
    icon: <Eye size={16} />
  },
  {
    year: '2020',
    stage: 'Formal Discipline',
    event: 'Began B.Tech in IT & Computer Science at Amity University.',
    learned: 'Data structures, algorithms, and the discipline of academic research.',
    changed: 'Gained a formal vocabulary for engineering concepts; discovered quantum computing.',
    icon: <Lightbulb size={16} />
  },
  {
    year: '2023',
    stage: 'Applied Complexity',
    event: 'Joined Tech Mahindra Makers Lab for cloud and 3D R&D.',
    learned: 'Cloud infrastructure cost structures, pixel streaming, and LLM dataset operations.',
    changed: 'Realized that optimization isn\'t just code—it\'s economics and architecture.',
    icon: <Zap size={16} />
  },
  {
    year: '2024',
    stage: 'Mission Critical',
    event: 'Worked at Thales on avionics; Published IEEE Quantum Paper.',
    learned: 'What "five nines" reliability actually means in an environment where failure is not an option.',
    changed: 'Developed a deep respect for operational monitoring, safety-critical systems, and rigorous peer review.',
    icon: <Route size={16} />
  },
  {
    year: '2025 – NOW',
    stage: 'Production Scale',
    event: 'QA & Automation Engineer at M2P Fintech.',
    learned: 'Designing Playwright POM architectures, automating distributed API validations, and integrating AI into the sprint cycle.',
    changed: 'My focus shifted from just building to ensuring what is built survives contact with reality.',
    icon: <Route size={16} />
  }
];

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="timeline" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="TL"
          label="The Journey"
          title="Direction Changes"
          subtitle="A chronology of learning milestones, pivots, and the realizations that shaped my engineering philosophy."
        />

        <div style={{ position: 'relative', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {/* Timeline continuous line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '3px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
            opacity: 0.3
          }} />

          {journeyNodes.map((node, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Timeline Node Dot */}
              <div style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '0.2rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-primary)',
                border: '2px solid var(--accent-primary)',
                boxShadow: '0 0 10px var(--accent-glow)'
              }} />

              <Card variant="surface" padding="md" style={{ border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
                    {node.year}
                  </h3>
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--accent-primary)',
                    background: 'var(--accent-subtle)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {node.stage.toUpperCase()}
                  </div>
                </div>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {node.event}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ color: 'var(--text-tertiary)', marginTop: '0.1rem' }}>
                      <Lightbulb size={16} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.1rem' }}>
                        What was learned
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                        {node.learned}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ color: 'var(--accent-primary)', marginTop: '0.1rem' }}>
                      <Route size={16} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.1rem' }}>
                        How it changed my trajectory
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                        {node.changed}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
