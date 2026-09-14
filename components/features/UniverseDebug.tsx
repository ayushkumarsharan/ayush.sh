'use client';

import React from 'react';
import { useUniverse } from '@/lib/UniverseContext';
import { useMode } from '@/lib/ModeContext';
import { universeGraph } from '@/content/universe';

export const UniverseDebug: React.FC = () => {
  const { activeNode, hoveredNode, relatedNodes } = useUniverse();
  const { activeMode } = useMode();

  // Only render if a specific localStorage flag is set, or maybe just hardcoded to false in production
  // For now, we render it conditionally if an environment variable is set or we just keep it hidden
  // We'll use a hotkey (e.g., Ctrl+Shift+D) to toggle it.
  
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const centerNodeId = hoveredNode || activeNode;
  const centerNode = centerNodeId ? universeGraph[centerNodeId] : null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(10, 13, 18, 0.9)',
        border: '1px solid var(--accent-primary)',
        padding: '1rem',
        borderRadius: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-primary)',
        zIndex: 9999,
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        pointerEvents: 'none'
      }}
    >
      <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        UNIVERSE GRAPH DEBUG
      </div>
      <div><strong>Active Mode:</strong> {activeMode || 'null (Arrival)'}</div>
      <div><strong>Target Node:</strong> {centerNode ? centerNode.id : 'null (Macro/Field)'}</div>
      
      {centerNode && (
        <div style={{ marginTop: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
          <div><strong>Type:</strong> {centerNode.type}</div>
          <div><strong>Priority:</strong> {centerNode.priority}</div>
          <div><strong>Edges ({centerNode.relationships.length}):</strong></div>
          <ul style={{ paddingLeft: '1rem', margin: '0.25rem 0', color: 'var(--text-secondary)' }}>
            {centerNode.relationships.map(rel => (
              <li key={rel.targetId}>
                <span style={{ color: 'var(--accent-warm)' }}>{rel.type}</span> → {rel.targetId}
              </li>
            ))}
          </ul>
        </div>
      )}

      {relatedNodes.length > 0 && (
        <div style={{ marginTop: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
          <div><strong>Computed Related:</strong> {relatedNodes.length}</div>
        </div>
      )}
    </div>
  );
};
