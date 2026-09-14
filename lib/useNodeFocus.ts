'use client';

import { useEffect, useRef } from 'react';
import { useUniverse } from '@/lib/UniverseContext';

export function useNodeFocus(nodeId: string, threshold = 0.5) {
  const ref = useRef<HTMLElement | null>(null);
  const { setActiveNode, activeNode } = useUniverse();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use Intersection Observer to detect when this DOM section is the primary focus
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only set if not already active to avoid unnecessary state updates
            if (activeNode !== nodeId) {
              setActiveNode(nodeId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [nodeId, setActiveNode, activeNode, threshold]);

  return ref;
}
