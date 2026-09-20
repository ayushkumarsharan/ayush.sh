'use client';
import React, { useEffect, useRef } from 'react';

export const ProjectVisualizer = ({ slug }: { slug: string }) => {
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
    let time = 0;
    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      ctx.save();
      ctx.translate(width / 2, height / 2);

      if (slug === 'personal-universe') {
        // Draw spatial interconnected nodes
        for (let i = 0; i < 20; i++) {
          const r = Math.sin(time + i) * 100 + 150;
          const a = (i / 20) * Math.PI * 2 + time * 0.2;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'var(--accent-primary)';
          ctx.fill();
          
          if (i > 0) {
            const rPrev = Math.sin(time + i - 1) * 100 + 150;
            const aPrev = ((i - 1) / 20) * Math.PI * 2 + time * 0.2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(aPrev) * rPrev, Math.sin(aPrev) * rPrev);
            ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.stroke();
          }
        }
      } 
      else if (slug === 'lit-parking') {
        // Draw city grid with moving cars (rects)
        ctx.scale(1, 0.5); // Isometric
        ctx.rotate(Math.PI / 4);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        for(let i = -200; i <= 200; i+= 40) {
          ctx.beginPath(); ctx.moveTo(i, -200); ctx.lineTo(i, 200); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(-200, i); ctx.lineTo(200, i); ctx.stroke();
        }
        // Active spot
        const pulse = (Math.sin(time * 3) + 1) / 2;
        ctx.fillStyle = `rgba(16, 185, 129, ${pulse})`;
        ctx.fillRect(-20, -20, 40, 40);
      }
      else if (slug === 'mindset-app') {
        // Draw calm circular tracking rings
        ctx.lineCap = 'round';
        for(let i = 1; i <= 3; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, i * 40, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (0.3 * i + Math.sin(time)*0.1));
          ctx.strokeStyle = 'var(--accent-primary)';
          ctx.lineWidth = 10;
          ctx.stroke();
          // background ring
          ctx.beginPath();
          ctx.arc(0, 0, i * 40, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255,255,255,0.05)';
          ctx.lineWidth = 10;
          ctx.stroke();
        }
      }
      else {
        // Generic AI/Code data stream for other projects (like local-rag, savvy)
        for(let i=0; i<10; i++) {
          const y = -150 + ((time * 50 + i * 30) % 300);
          ctx.fillStyle = 'var(--accent-primary)';
          ctx.font = '14px monospace';
          ctx.fillText(Math.random().toString(36).substring(7), (i - 5) * 40, y);
        }
      }

      ctx.restore();
      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(frameId);
  }, [slug]);

  return (
    <div style={{ width: '100%', height: '400px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)' }}>
        INTERACTIVE VIZ_
      </div>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};
