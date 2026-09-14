'use client';

import React, { useRef, useEffect } from 'react';
import { useUniverse } from '@/lib/UniverseContext';
import { useMode } from '@/lib/ModeContext';
import { universeGraph, UniverseNode } from '@/content/universe';

interface NodeParticle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  pulsePhase: number;
  isCoordinate: boolean;
  orbitAngle: number;
}

export const LivingAtmosphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const { activeNode, hoveredNode, relatedNodes, isLowSignalMode } = useUniverse();
  const { activeMode } = useMode();

  // Mutable ref to access React state inside the rAF loop without restarting it
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

    // Initialize particles from the Universe Graph
    const nodes = Object.values(universeGraph);
    const particles: NodeParticle[] = nodes.map((node) => {
      const isCoord = node.type === 'mode_coordinate';
      return {
        id: node.id,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius: isCoord ? 3 : (node.priority > 8 ? 2.5 : 1.5),
        radius: 2,
        color: isCoord ? 'rgba(245, 158, 11,' : 'rgba(20, 184, 166,',
        alpha: 0,
        targetAlpha: 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        isCoordinate: isCoord,
        orbitAngle: Math.random() * Math.PI * 2,
      };
    });

    let pointer = { x: -1000, y: -1000, isActive: false };
    
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.isActive = true;
    };
    const handleMouseLeave = () => { pointer.isActive = false; };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const state = stateRef.current;
      
      // If Low Signal Mode is ON, we drastically reduce rendering
      if (state.isLowSignalMode) {
        ctx.fillStyle = 'rgba(20, 184, 166, 0.05)';
        ctx.fillRect(0, 0, width, height);
        animationId = requestAnimationFrame(render);
        return;
      }

      const targetCenter = state.hoveredNode || state.activeNode;
      const relatedIds = new Set(state.relatedNodes.map(n => n.id));

      // 1. Update Particle Physics & Alpha based on Semantic State
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const node = universeGraph[p.id];
        
        // Determine semantic state
        const isTarget = p.id === targetCenter;
        const isRelated = relatedIds.has(p.id);
        const matchesMode = state.activeMode ? node.modes.includes(state.activeMode) : true;
        const isArrival = !state.activeMode;

        // Visual Weight Logic
        if (targetCenter) {
          if (isTarget) p.targetAlpha = 1.0;
          else if (isRelated) p.targetAlpha = 0.7;
          else p.targetAlpha = 0.05;
        } else {
          // No specific target focused
          if (isArrival) {
            p.targetAlpha = p.isCoordinate ? 0.8 : 0.15;
          } else {
            p.targetAlpha = matchesMode ? 0.6 : 0.1;
          }
        }

        // Smooth alpha transition
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;

        // Physics Forces
        if (isTarget) {
          // Pull target gently towards center-right of screen
          const tx = width * 0.7;
          const ty = height * 0.5;
          p.vx += (tx - p.x) * 0.002;
          p.vy += (ty - p.y) * 0.002;
        } else if (targetCenter && isRelated) {
          // Orbit the target node
          const targetParticle = particles.find(pt => pt.id === targetCenter);
          if (targetParticle) {
            p.orbitAngle += 0.005;
            const orbitRadius = 150 + (node.priority * 10);
            const tx = targetParticle.x + Math.cos(p.orbitAngle) * orbitRadius;
            const ty = targetParticle.y + Math.sin(p.orbitAngle) * orbitRadius;
            p.vx += (tx - p.x) * 0.003;
            p.vy += (ty - p.y) * 0.003;
          }
        } else {
          // Idle drift
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
        }

        // Friction
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        // Wrapping
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        // Render Particle
        if (p.alpha > 0.01) {
          p.pulsePhase += 0.05;
          p.radius = p.baseRadius * (1 + Math.sin(p.pulsePhase) * 0.2);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${p.alpha * 0.4})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${p.alpha})`;
          ctx.fill();
        }
      }

      // 2. Draw Semantic Constellation Lines
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.alpha < 0.05) continue;
        
        const node1 = universeGraph[p1.id];
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.alpha < 0.05) continue;

          // Only draw lines if there is a real semantic relationship OR if they are both highlighted by mode
          const hasDirectRelation = node1.relationships.some(r => r.targetId === p2.id) || 
                                    universeGraph[p2.id].relationships.some(r => r.targetId === p1.id);
          
          let drawLine = false;
          let lineAlpha = 0;

          if (targetCenter) {
             if (hasDirectRelation && (p1.id === targetCenter || p2.id === targetCenter)) {
               drawLine = true;
               lineAlpha = Math.min(p1.alpha, p2.alpha) * 0.6;
             } else if (hasDirectRelation && relatedIds.has(p1.id) && relatedIds.has(p2.id)) {
               drawLine = true;
               lineAlpha = Math.min(p1.alpha, p2.alpha) * 0.3;
             }
          } else {
             // Idle Mode: Draw lines between related items nearby
             const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
             if (hasDirectRelation && dist < 250) {
               drawLine = true;
               lineAlpha = (1 - dist/250) * Math.min(p1.alpha, p2.alpha) * 0.4;
             }
          }

          if (drawLine) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvasSize);
      window.removeEventListener('orientationchange', setupCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
};
