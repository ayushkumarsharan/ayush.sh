'use client';

import React from 'react';
import { useUniverse } from '@/lib/UniverseContext';

interface GravityTextProps {
  nodeId: string;
  children: React.ReactNode;
}

export const GravityText: React.FC<GravityTextProps> = ({ nodeId, children }) => {
  const { setHoveredNode } = useUniverse();

  return (
    <span
      onMouseEnter={() => setHoveredNode(nodeId)}
      onMouseLeave={() => setHoveredNode(null)}
      style={{
        display: 'inline-block',
        color: 'var(--accent-primary)',
        fontWeight: 'bold',
        cursor: 'crosshair',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.textShadow = '0 0 12px var(--accent-primary)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.textShadow = 'none';
      }}
    >
      {children}
    </span>
  );
};
