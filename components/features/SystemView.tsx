'use client';

import React, { useState } from 'react';
import { Network, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SystemNode {
  id: string;
  label: string;
  description: string;
}

interface SystemViewProps {
  nodes?: SystemNode[];
}

export const SystemView: React.FC<SystemViewProps> = ({ nodes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNode, setActiveNode] = useState<SystemNode | null>(null);

  // Default conceptual nodes if none provided
  const defaultNodes: SystemNode[] = [
    { id: 'user', label: 'User/Client', description: 'Entry point for external requests or interaction.' },
    { id: 'app', label: 'Application Layer', description: 'Core business logic and routing.' },
    { id: 'api', label: 'API Gateway', description: 'Validation, rate-limiting, and protocol translation.' },
    { id: 'process', label: 'Processing Engine', description: 'Async workers or heavy compute nodes.' },
    { id: 'db', label: 'Data Store', description: 'Persistent state and relational data.' },
    { id: 'monitor', label: 'Telemetry', description: 'Observability and alerting.' },
  ];

  const renderNodes = nodes || defaultNodes;

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)} 
        variant="outline" 
        size="sm" 
        icon={<Network size={16} />}
      >
        Open System View
      </Button>
    );
  }

  return (
    <div style={{
      marginTop: 'var(--space-8)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-surface-elevated)',
      border: '1px solid var(--accent-primary)',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <button 
          onClick={() => setIsOpen(false)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: 'var(--space-6)' }}>
        CONCEPTUAL SYSTEM ARCHITECTURE
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {renderNodes.map((node, idx) => (
          <div key={node.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            {/* Node Box */}
            <div 
              onMouseEnter={() => setActiveNode(node)}
              style={{
                padding: '0.75rem 1rem',
                background: activeNode?.id === node.id ? 'var(--accent-primary)' : 'var(--bg-primary)',
                color: activeNode?.id === node.id ? '#000' : 'var(--text-primary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                minWidth: '160px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.2s ease',
              }}
            >
              {node.label}
            </div>

            {/* Connection Line */}
            {idx < renderNodes.length - 1 && (
              <div style={{ width: '2px', height: '24px', background: 'var(--border-subtle)', marginLeft: '-0.5rem', marginTop: '2.5rem', position: 'absolute' }} />
            )}

            {/* Details Panel */}
            <div style={{
              flex: 1,
              padding: '0.75rem',
              opacity: activeNode?.id === node.id ? 1 : 0.4,
              transition: 'opacity 0.2s ease',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              {node.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
