'use client';
import React, { useEffect, useRef } from 'react';

export const TechMahindraIllustration = () => {
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

    const drawCube = (x: number, y: number, size: number, color: string, time: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, 0.5); // Isometric tilt
      ctx.rotate(time * 0.5); // Spin
      
      ctx.beginPath();
      ctx.rect(-size/2, -size/2, size, size);
      ctx.fillStyle = `rgba(255,255,255,0.05)`;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const dataStreams: any[] = [];
    for(let i=0; i<30; i++) {
      dataStreams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 5 + 2,
        length: Math.random() * 50 + 20,
        color: Math.random() > 0.5 ? '#f43f5e' : '#3b82f6' // Red/Blue glitch
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      // Draw Data Streams (Pixel Streaming)
      dataStreams.forEach(stream => {
        stream.y += stream.speed;
        if (stream.y > height + stream.length) stream.y = -stream.length;

        ctx.beginPath();
        ctx.moveTo(stream.x, stream.y);
        ctx.lineTo(stream.x, stream.y - stream.length);
        const grad = ctx.createLinearGradient(0, stream.y, 0, stream.y - stream.length);
        grad.addColorStop(0, stream.color);
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw Central Server Cluster
      drawCube(width/2, height/2 + Math.sin(time)*10, 80, '#f43f5e', time);
      drawCube(width/2, height/2 + 30 + Math.cos(time)*10, 60, '#3b82f6', -time);

      // Overlays
      ctx.font = '12px var(--font-mono)';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.fillText('AWS / GCP PIXEL STREAMING', width/2, height/2 - 60);

      // Glitch effect occasionally
      if (Math.random() > 0.95) {
        const sliceY = Math.random() * height;
        const sliceH = Math.random() * 20;
        const imgData = ctx.getImageData(0, sliceY, width, sliceH);
        ctx.putImageData(imgData, (Math.random() - 0.5) * 20, sliceY);
      }

      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};
