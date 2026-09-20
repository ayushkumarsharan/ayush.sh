'use client';
import React, { useEffect, useRef } from 'react';

export const M2PIllustration = () => {
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

    // Define nodes in a microservice architecture layout
    const nodes = [
      { id: 'gateway', x: width * 0.1, y: height * 0.5, label: 'API Gateway', color: '#8b5cf6' },
      { id: 'auth', x: width * 0.4, y: height * 0.2, label: 'Auth Service', color: '#0ea5e9' },
      { id: 'validation', x: width * 0.4, y: height * 0.8, label: 'Validation', color: '#f59e0b' },
      { id: 'ledger', x: width * 0.7, y: height * 0.3, label: 'Core Ledger', color: '#10b981' },
      { id: 'checkout', x: width * 0.9, y: height * 0.6, label: 'Checkout UI', color: '#ef4444' },
    ];

    // Define paths between nodes
    const paths = [
      { from: 0, to: 1, type: 'auth_check' },
      { from: 0, to: 2, type: 'payload_validate' },
      { from: 1, to: 3, type: 'secure_token' },
      { from: 2, to: 3, type: 'validated_data' },
      { from: 3, to: 4, type: 'success_response' },
    ];

    const packets: any[] = [];
    const spawnPacket = () => {
      const pathIdx = Math.floor(Math.random() * 2); // Start from gateway
      packets.push({ pathIdx, progress: 0, speed: Math.random() * 0.01 + 0.005 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time++;

      if (time % 60 === 0) spawnPacket();

      // Draw Grid Background
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      for(let x=0; x<width; x+=40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
      for(let y=0; y<height; y+=40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }

      // Draw Paths
      paths.forEach(p => {
        const from = nodes[p.from];
        const to = nodes[p.to];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = -time * 0.5;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw Packets
      for(let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        
        let currentPath = paths[p.pathIdx];
        let from = nodes[currentPath.from];
        let to = nodes[currentPath.to];
        
        let x = from.x + (to.x - from.x) * p.progress;
        let y = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = to.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = to.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        if (p.progress >= 1) {
          // Route to next node
          const nextPaths = paths.map((path, idx) => ({ path, idx })).filter(pt => pt.path.from === currentPath.to);
          if (nextPaths.length > 0) {
            p.pathIdx = nextPaths[Math.floor(Math.random() * nextPaths.length)].idx;
            p.progress = 0;
          } else {
            packets.splice(i, 1);
          }
        }
      }

      // Draw Nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = 'var(--bg-surface-elevated)';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fill();
        
        // Pulse ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 15 + Math.sin(time*0.05)*5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${parseInt(n.color.slice(1,3),16)},${parseInt(n.color.slice(3,5),16)},${parseInt(n.color.slice(5,7),16)},0.3)`;
        ctx.stroke();

        ctx.font = '12px var(--font-mono)';
        ctx.fillStyle = 'var(--text-primary)';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y - 25);
      });

      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};
