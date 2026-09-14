'use client';

import React from 'react';
import Link from 'next/link';
import { useUniverse } from '@/lib/UniverseContext';
import { ArrowUpRight } from 'lucide-react';

interface PortalLinkProps {
  href: string;
  nodeId?: string; // If provided, hovers/activates this node
  children: React.ReactNode;
  variant?: 'inline' | 'card';
}

export const PortalLink: React.FC<PortalLinkProps> = ({ href, nodeId, children, variant = 'inline' }) => {
  const { setHoveredNode, setActiveNode } = useUniverse();

  const handleMouseEnter = () => {
    if (nodeId) setHoveredNode(nodeId);
  };

  const handleMouseLeave = () => {
    if (nodeId) setHoveredNode(null);
  };

  const handleClick = () => {
    if (nodeId) {
      setActiveNode(nodeId);
      setHoveredNode(null);
    }
  };

  if (variant === 'inline') {
    return (
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--accent-primary)',
          fontWeight: 600,
          textDecoration: 'none',
          borderBottom: '1px dashed var(--accent-primary)',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-warm)';
          e.currentTarget.style.borderBottomColor = 'var(--accent-warm)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = 'var(--accent-primary)';
          e.currentTarget.style.borderBottomColor = 'var(--accent-primary)';
        }}
      >
        {children}
        <ArrowUpRight size={14} />
      </Link>
    );
  }

  // Card variant
  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div 
        style={{
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-primary)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {children}
      </div>
    </Link>
  );
};
