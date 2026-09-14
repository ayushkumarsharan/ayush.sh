'use client';

import React, { useRef, useEffect } from 'react';
import { useUniverse } from '@/lib/UniverseContext';
import { useMode } from '@/lib/ModeContext';
import { universeGraph, UniverseNode, RelationType } from '@/content/universe';
import { modeOrder } from '@/content/modes';

// Deterministic node positions
interface RenderNode {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  targetRadius: number;
  alpha: number;
  targetAlpha: number;
  color: string;
  type: string;
  priority: number;
}

export const LivingAtmosphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { activeNode, hoveredNode, relatedNodes, isLowSignalMode } = useUniverse();
  const { activeMode } = useMode();

  const stateRef = useRef({
    activeNode,
    hoveredNode,
    relatedNodes,
    activeMode,
    isLowSignalMode
  });

  useEffect(() => {
    stateRef.current = { activeNode, hoveredNode, relatedNodes, activeMode, isLowSignalMode };
  }, [activeNode, hoveredNode, relatedNodes, activeMode, isLowSignalMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 3);
    const isMobile = width < 768;

    const setupCanvasSize = () => {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();
    window.addEventListener('resize', setupCanvasSize);
    window.addEventListener('orientationchange', setupCanvasSize);

    // Initialize deterministic nodes
    const renderNodes: Record<string, RenderNode> = {};
    Object.values(universeGraph).forEach((node) => {
      const isCoord = node.type === 'mode_coordinate';
      renderNodes[node.id] = {
        id: node.id,
        x: width / 2,
        y: height / 2,
        targetX: width / 2,
        targetY: height / 2,
        radius: 0,
        targetRadius: isCoord ? 4 : (node.priority > 8 ? 3 : 1.5),
        alpha: 0,
        targetAlpha: 0,
        color: isCoord ? 'rgba(245, 158, 11,' : 'rgba(20, 184, 166,',
        type: node.type,
        priority: node.priority,
      };
    });

    const getRelationStyle = (type: RelationType, alpha: number) => {
      switch (type) {
        case 'worked-with': return { color: `rgba(20, 184, 166, ${alpha})`, dash: [] }; // Solid structural
        case 'built-with': return { color: `rgba(14, 165, 233, ${alpha})`, dash: [4, 4] }; // Technical energy
        case 'achieved': return { color: `rgba(245, 158, 11, ${alpha * 1.5})`, dash: [] }; // Luminous
        case 'explores': return { color: `rgba(139, 92, 246, ${alpha})`, dash: [2, 6] }; // Orbital/Loose
        case 'inspired-by': return { color: `rgba(148, 163, 184, ${alpha * 0.6})`, dash: [1, 8] }; // Distant
        case 'related-to': return { color: `rgba(45, 212, 191, ${alpha * 0.8})`, dash: [] }; // Standard
        default: return { color: `rgba(20, 184, 166, ${alpha})`, dash: [] };
      }
    };

    let time = 0;
    let cameraX = width / 2;
    let cameraY = height / 2;
    let targetCameraX = width / 2;
    let targetCameraY = height / 2;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);
      const state = stateRef.current;

      if (state.isLowSignalMode) {
        ctx.fillStyle = 'rgba(20, 184, 166, 0.02)';
        ctx.fillRect(0, 0, width, height);
        animationId = requestAnimationFrame(render);
        return;
      }

      // Camera interpolation
      cameraX += (targetCameraX - cameraX) * 0.05;
      cameraY += (targetCameraY - cameraY) * 0.05;

      const centerNodeId = state.hoveredNode || state.activeNode;
      const relatedIds = new Set(state.relatedNodes.map(n => n.id));

      // --- LAYOUT ENGINE ---
      if (!state.activeMode && !centerNodeId) {
        // ARRIVAL STATE: Only show the 6 mode coordinates in a large constellation
        targetCameraX = width / 2;
        targetCameraY = height / 2;
        
        modeOrder.filter(m => m !== 'life').forEach((mId, index) => {
          const id = `coord-${mId}`;
          const rn = renderNodes[id];
          if (!rn) return;
          const angle = (index / 6) * Math.PI * 2 + (time * 0.05); // slow rotation
          const radius = isMobile ? height * 0.35 : height * 0.42;
          rn.targetX = width / 2 + Math.cos(angle) * radius;
          rn.targetY = height / 2 + Math.sin(angle) * radius;
          rn.targetAlpha = 0.8;
          rn.targetRadius = 4;
        });

        // Hide everything else
        Object.values(renderNodes).forEach(rn => {
          if (rn.type !== 'mode_coordinate') rn.targetAlpha = 0;
        });
      } 
      else if (centerNodeId) {
        // MESO/MICRO STATE: Focused on a specific node
        targetCameraX = width * 0.75; // Move camera to right side (since text is usually left)
        targetCameraY = height / 2;

        const centerRn = renderNodes[centerNodeId];
        if (centerRn) {
          centerRn.targetX = targetCameraX;
          centerRn.targetY = targetCameraY;
          centerRn.targetAlpha = 1;
          centerRn.targetRadius = 5;
        }

        // Arrange related nodes in an orbit
        const relNodes = Array.from(relatedIds);
        relNodes.forEach((id, index) => {
          const rn = renderNodes[id];
          if (!rn) return;
          const angle = (index / relNodes.length) * Math.PI * 2 + (time * 0.1);
          const orbitDist = 180 + (10 - rn.priority) * 15; // Higher priority = closer
          rn.targetX = targetCameraX + Math.cos(angle) * orbitDist;
          rn.targetY = targetCameraY + Math.sin(angle) * orbitDist;
          rn.targetAlpha = 0.6;
          rn.targetRadius = rn.priority > 8 ? 3 : 2;
        });

        // Hide unrelated
        Object.values(renderNodes).forEach(rn => {
          if (rn.id !== centerNodeId && !relatedIds.has(rn.id) && rn.type !== 'mode_coordinate') {
            rn.targetAlpha = 0.05; // Peripheral noise
          }
        });
      } 
      else if (state.activeMode) {
        // MACRO STATE: Mode selected, show mode-specific hierarchy
        targetCameraX = width / 2;
        targetCameraY = height / 2;
        
        const modeNodes = Object.values(universeGraph).filter(n => n.modes.includes(state.activeMode!));
        modeNodes.forEach((node, index) => {
          const rn = renderNodes[node.id];
          if (!rn) return;
          
          // Deterministic organic scatter based on priority
          const angle = (index / modeNodes.length) * Math.PI * 2;
          const dist = (10 - node.priority) * 60 + 100;
          
          rn.targetX = targetCameraX + Math.cos(angle) * dist + Math.sin(time * 0.2 + index) * 10;
          rn.targetY = targetCameraY + Math.sin(angle) * dist + Math.cos(time * 0.2 + index) * 10;
          rn.targetAlpha = node.priority > 8 ? 0.7 : 0.3;
          rn.targetRadius = node.priority > 8 ? 3 : 1.5;
        });

        Object.values(renderNodes).forEach(rn => {
          if (!modeNodes.find(n => n.id === rn.id) && rn.type !== 'mode_coordinate') {
            rn.targetAlpha = 0;
          }
        });
      }

      // --- RENDER EDGES (SEMANTIC LINES) ---
      // Draw lines only between visible nodes to avoid spider webs
      ctx.lineWidth = 1.2;
      const visibleNodes = Object.values(renderNodes).filter(n => n.alpha > 0.05);
      
      visibleNodes.forEach(n1 => {
        const uNode = universeGraph[n1.id];
        if (!uNode) return;
        
        uNode.relationships.forEach(rel => {
          const n2 = renderNodes[rel.targetId];
          if (n2 && n2.alpha > 0.05) {
            const edgeAlpha = Math.min(n1.alpha, n2.alpha) * 0.8;
            if (edgeAlpha < 0.05) return;

            const style = getRelationStyle(rel.type, edgeAlpha);
            ctx.beginPath();
            ctx.setLineDash(style.dash);
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = style.color;
            ctx.stroke();
          }
        });
      });
      ctx.setLineDash([]); // Reset

      // --- RENDER NODES ---
      Object.values(renderNodes).forEach(rn => {
        // Interpolate
        rn.x += (rn.targetX - rn.x) * 0.08;
        rn.y += (rn.targetY - rn.y) * 0.08;
        rn.alpha += (rn.targetAlpha - rn.alpha) * 0.08;
        rn.radius += (rn.targetRadius - rn.radius) * 0.1;

        if (rn.alpha > 0.02) {
          // Glow
          ctx.beginPath();
          ctx.arc(rn.x, rn.y, rn.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${rn.color} ${rn.alpha * 0.3})`;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(rn.x, rn.y, rn.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${rn.color} ${rn.alpha})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvasSize);
      window.removeEventListener('orientationchange', setupCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};
