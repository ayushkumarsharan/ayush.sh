'use client';

import React, { useRef, useEffect } from 'react';

export const HeroAmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let mouseX = width * 0.7;
    let mouseY = height * 0.4;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;

    // Node grid parameters for idle ambient flow
    const cols = 28;
    const rows = 14;

    const render = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      t += 0.015;

      ctx.clearRect(0, 0, width, height);

      const cellX = width / cols;
      const cellY = height / rows;

      // Draw subtle connective threads
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * cellX + cellX / 2;
          const baseY = j * cellY + cellY / 2;

          // Idle wave mathematics (superposition of multiple sines)
          const distToMouse = Math.hypot(baseX - mouseX, baseY - mouseY);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 280) * 22;

          const waveX = Math.sin(t + j * 0.35 + i * 0.2) * 12 + Math.cos(t * 0.7 + i * 0.3) * 6;
          const waveY = Math.cos(t * 0.8 + i * 0.35 + j * 0.2) * 12 + Math.sin(t * 1.1 + j * 0.4) * 6;

          const x = baseX + waveX + (mouseX - baseX) * (mouseInfluence * 0.012);
          const y = baseY + waveY + (mouseY - baseY) * (mouseInfluence * 0.012);

          // Subtle dot rendering
          const alpha = Math.max(0.04, Math.min(0.35, 0.08 + (mouseInfluence / 22) * 0.25 + Math.sin(t + i) * 0.03));

          ctx.fillStyle = `rgba(20, 184, 166, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fill();

          // Connect to right neighbor
          if (i < cols - 1) {
            const nextBaseX = (i + 1) * cellX + cellX / 2;
            const nextBaseY = j * cellY + cellY / 2;
            const nextWaveX = Math.sin(t + j * 0.35 + (i + 1) * 0.2) * 12;
            const nextWaveY = Math.cos(t * 0.8 + (i + 1) * 0.35 + j * 0.2) * 12;
            const nextX = nextBaseX + nextWaveX;
            const nextY = nextBaseY + nextWaveY;

            ctx.strokeStyle = `rgba(20, 184, 166, ${alpha * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
        maskImage: 'radial-gradient(ellipse 80% 60% at 70% 40%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 70% 40%, black 30%, transparent 80%)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};
