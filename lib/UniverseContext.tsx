'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ModeId } from '@/content/modes';
import { UniverseNode, getRelatedNodes, universeGraph } from '@/content/universe';
import { useMode } from './ModeContext';

interface UniverseContextType {
  activeNode: string | null;
  hoveredNode: string | null;
  relatedNodes: UniverseNode[];
  isLowSignalMode: boolean;
  setHoveredNode: (id: string | null) => void;
  setActiveNode: (id: string | null) => void;
  toggleLowSignalMode: () => void;
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined);

export function UniverseProvider({ children }: { children: React.ReactNode }) {
  const [activeNode, setActiveNodeState] = useState<string | null>(null);
  const [hoveredNode, setHoveredNodeState] = useState<string | null>(null);
  const [relatedNodes, setRelatedNodes] = useState<UniverseNode[]>([]);
  const [isLowSignalMode, setIsLowSignalMode] = useState(false);
  const pathname = usePathname();

  // URL -> Coordinate sync
  useEffect(() => {
    // If the URL is exactly /, the active node is null (arrival state)
    if (pathname === '/') {
      setActiveNodeState(null);
    } else {
      // Very basic URL to Node mapping (in a real system, you'd have a robust router map)
      if (pathname.includes('/projects/quantum')) setActiveNodeState('proj-quantum');
      else if (pathname.includes('/work/m2p')) setActiveNodeState('exp-m2p');
    }
  }, [pathname]);

  // Relation Engine: Update related nodes when hover or active changes
  useEffect(() => {
    const targetId = hoveredNode || activeNode;
    if (targetId) {
      setRelatedNodes(getRelatedNodes(targetId));
    } else {
      setRelatedNodes([]);
    }
  }, [hoveredNode, activeNode]);

  return (
    <UniverseContext.Provider value={{
      activeNode,
      hoveredNode,
      relatedNodes,
      isLowSignalMode,
      setHoveredNode: setHoveredNodeState,
      setActiveNode: setActiveNodeState,
      toggleLowSignalMode: () => setIsLowSignalMode(prev => !prev)
    }}>
      {children}
    </UniverseContext.Provider>
  );
}

export function useUniverse() {
  const context = useContext(UniverseContext);
  if (context === undefined) {
    throw new Error('useUniverse must be used within a UniverseProvider');
  }
  return context;
}
