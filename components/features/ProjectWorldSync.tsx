'use client';

import { useEffect } from 'react';
import { useUniverse } from '@/lib/UniverseContext';

export const ProjectWorldSync: React.FC<{ projectSlug: string }> = ({ projectSlug }) => {
  const { setActiveNode, setHoveredNode } = useUniverse();

  useEffect(() => {
    // Determine node ID from slug
    // e.g. "quantum-signal-processing" -> "proj-quantum"
    // "cloud-pixel-streaming" -> "exp-tech-mahindra" (or whatever node represents it)
    
    // For simplicity, we can do a crude map or assume 'proj-[slug]' is the ID if it matches
    // Let's do a basic map based on our known nodes
    let nodeId = `proj-${projectSlug}`;
    if (projectSlug === 'quantum-signal-processing') nodeId = 'proj-quantum';
    if (projectSlug === 'cloud-pixel-streaming') nodeId = 'exp-tech-mahindra'; // It's an experience/achievement in graph
    
    setActiveNode(nodeId);
    setHoveredNode(null); // Clear any lingering hovers

    return () => {
      // Don't reset on unmount immediately, allow the next page to set its own active node
      // or if going back to home, the home page will reset it.
    };
  }, [projectSlug, setActiveNode, setHoveredNode]);

  return null;
};
