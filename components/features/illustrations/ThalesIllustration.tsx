'use client';
import React, { useEffect, useRef } from 'react';

export const ThalesIllustration = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    let frameId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // Draw Radar Grid
      ctx.save();
      ctx.translate(cx, cy);
      // Perspective tilt
      ctx.scale(1, 0.5);

      // Concentric circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, radius * (i / 4), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 + (i*0.05)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath(); ctx.moveTo(-radius, 0); ctx.lineTo(radius, 0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -radius); ctx.lineTo(0, radius); ctx.stroke();

      // Sweeper
      ctx.rotate(time);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, 0);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, -Math.PI/2, true);
      ctx.lineTo(0,0);
      const sweepGrad = ctx.createRadialGradient(0,0,0, 0,0,radius);
      sweepGrad.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      sweepGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();

      // Flight Paths (Nodes)
      const flights = [
        { phase: 0, r: radius * 0.5, speed: 0.5 },
        { phase: Math.PI, r: radius * 0.8, speed: 0.3 },
        { phase: Math.PI / 2, r: radius * 0.3, speed: 0.8 },
      ];

      flights.forEach(f => {
        const angle = time * f.speed + f.phase;
        // Transform to 3D perspective space
        const x = cx + Math.cos(angle) * f.r;
        const y = cy + Math.sin(angle) * f.r * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#10b981';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Data readouts
        ctx.font = '10px var(--font-mono)';
        ctx.fillStyle = '#10b981';
        ctx.fillText(`FLT-${Math.floor(x)}`, x + 10, y - 10);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillText(`Edge Node Sync`, x + 10, y);
      });

      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};
