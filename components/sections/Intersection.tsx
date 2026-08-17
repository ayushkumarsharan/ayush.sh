'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { intersectionNodes, IntersectionNode } from '@/content/intersection';
import { Sparkles, ArrowRight, Activity } from 'lucide-react';

export const Intersection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<IntersectionNode>(intersectionNodes[0]);

  return (
    <section id="intersection" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface-subtle)' }}>
      <div className="container">
        <SectionHeading
          number="03"
          label="The Signature Intersection"
          title="Where Disciplines Collide & Connect"
          subtitle="Engineering does not live in isolation. Explore the conceptual map of how systems, research, visual craft, and economics cross-pollinate."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Interactive Topology Node Selector */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Activity size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>Select any conceptual node to explore connections</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '0.625rem',
              }}
            >
              {intersectionNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isConnected = selectedNode.connectedTo.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{
                      padding: '0.875rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected
                        ? 'var(--accent-primary)'
                        : isConnected
                        ? 'var(--accent-subtle)'
                        : 'var(--bg-surface-elevated)',
                      color: isSelected
                        ? '#ffffff'
                        : isConnected
                        ? 'var(--accent-primary)'
                        : 'var(--text-primary)',
                      border: isSelected
                        ? '1px solid var(--accent-primary)'
                        : isConnected
                        ? '1px solid var(--accent-border)'
                        : '1px solid var(--border-medium)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                    }}
                    className="interactive-hover"
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        opacity: isSelected ? 0.9 : 0.6,
                        marginBottom: '0.2rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      {node.category}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.925rem' }}>{node.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Context Deep-Dive Card */}
          <Card
            variant="elevated"
            padding="lg"
            style={{
              border: '1px solid var(--accent-border)',
              backgroundColor: 'var(--bg-surface-elevated)',
              boxShadow: 'var(--shadow-md)',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                <Badge variant="accent" size="sm">
                  {selectedNode.category.toUpperCase()}
                </Badge>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  Connections: {selectedNode.connectedTo.length}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-1)',
                }}
              >
                {selectedNode.label}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 500,
                  marginBottom: 'var(--space-4)',
                }}
              >
                {selectedNode.tagline}
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-6)',
                }}
              >
                {selectedNode.description}
              </p>

              {/* Concrete evidence */}
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.725rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  Demonstrated Real-World Evidence
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {selectedNode.evidence}
                </div>
              </div>
            </div>

            {/* Tools involved */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                Core Tooling & Media
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {selectedNode.tools.map((t) => (
                  <Badge key={t} variant="subtle" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
