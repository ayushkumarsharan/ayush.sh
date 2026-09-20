'use client';
import React, { useEffect, useRef } from 'react';

export const QuantumIllustration = () => {
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

    const drawBlochSphere = (cx: number, cy: number, r: number, phaseX: number, phaseY: number) => {
      // Outer sphere
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Equator
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.3, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();

      // Z Axis
      ctx.beginPath();
      ctx.moveTo(cx, cy - r - 20);
      ctx.lineTo(cx, cy + r + 20);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = '10px var(--font-mono)';
      ctx.fillText('|0⟩', cx - 5, cy - r - 25);
      ctx.fillText('|1⟩', cx - 5, cy + r + 35);

      // State Vector
      const vx = cx + Math.cos(phaseX) * r * Math.sin(phaseY);
      const vy = cy + Math.cos(phaseY) * r;
      
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(vx, vy);
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(vx, vy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#8b5cf6';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#8b5cf6';
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw two entangled qubits
      const q1x = width * 0.3;
      const q2x = width * 0.7;
      const qy = height * 0.5;
      const r = Math.min(width, height) * 0.25;

      // Entanglement link
      ctx.beginPath();
      ctx.moveTo(q1x, qy);
      // Wavy connection
      for(let x = q1x; x <= q2x; x += 10) {
        ctx.lineTo(x, qy + Math.sin(x * 0.05 - time * 5) * 20);
      }
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Superposition state is linked (opposite phases for Bell State)
      drawBlochSphere(q1x, qy, r, time, time * 0.5);
      drawBlochSphere(q2x, qy, r, time + Math.PI, -time * 0.5); // Entangled mirrored state

      // Metrics
      ctx.fillStyle = 'var(--text-secondary)';
      ctx.font = '12px var(--font-mono)';
      ctx.textAlign = 'center';
      ctx.fillText('Bell State: |Φ+⟩ = (|00⟩ + |11⟩) / √2', width / 2, height - 30);

      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};
