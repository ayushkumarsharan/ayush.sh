'use client';
import React, { useEffect, useRef } from 'react';
import { useMode } from '@/lib/ModeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const AtmosphericBackground: React.FC = () => {
  const { activeAtmosphere } = useMode();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'var(--bg-primary)', transition: 'background 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAtmosphere}
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        >
          <ComplexCanvasEngine mode={activeAtmosphere} />
        </motion.div>
      </AnimatePresence>
      <div 
        style={{ 
          position: 'absolute', inset: 0, opacity: 0.05, mixBlendMode: 'overlay', pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />
    </div>
  );
};

const ComplexCanvasEngine = ({ mode }: { mode: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let animationFrameId: number;

    let mouse = { x: width / 2, y: height / 2, radius: 250 };
    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', handleMouseMove);
    const handleResize = () => { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; };
    window.addEventListener('resize', handleResize);

    const drawStarShape = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fill();
    };

    if (mode === 'cosmos') {
      const stars: any[] = [];
      const clusters: any[] = [];
      let time = 0;
      
      for(let i = 0; i < 500; i++) {
        stars.push({
          x: Math.random() * width, y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          twinkle: Math.random() * 0.05, phase: Math.random() * Math.PI * 2,
          isPulsar: Math.random() > 0.95
        });
      }
      for(let c = 0; c < 8; c++) {
        clusters.push({ cx: Math.random() * width, cy: Math.random() * height, nodes: Array.from({length: 6}, () => ({ dx: (Math.random()-0.5)*150, dy: (Math.random()-0.5)*150 })) });
      }

      const animateCosmos = () => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
        time++;

        // Draw Central Blackhole
        ctx.save();
        ctx.translate(width/2, height/2);
        
        // Accretion disk
        ctx.rotate(time * 0.01);
        ctx.beginPath();
        ctx.ellipse(0, 0, 300, 80, 0, 0, Math.PI*2);
        const grad = ctx.createRadialGradient(0,0,80,0,0,300);
        grad.addColorStop(0, 'rgba(255, 200, 100, 0.4)');
        grad.addColorStop(0.5, 'rgba(100, 50, 255, 0.1)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fill();
        
        // Event Horizon
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI*2);
        ctx.fillStyle = '#000';
        ctx.shadowBlur = 40;
        ctx.shadowColor = 'rgba(200,100,50,0.8)';
        ctx.fill();
        ctx.restore();

        stars.forEach(s => {
          s.x -= 0.1; if(s.x < 0) s.x = width;
          const alpha = (Math.sin(time * s.twinkle + s.phase) + 1)/2;
          ctx.fillStyle = s.isPulsar ? `rgba(100, 200, 255, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.8})`;
          if(s.isPulsar) {
            ctx.shadowBlur = 10; ctx.shadowColor = '#00aaff';
            drawStarShape(ctx, s.x, s.y, s.size * 3);
          } else {
            ctx.shadowBlur = 0;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI*2); ctx.fill();
          }
        });

        clusters.forEach(c => {
          c.cx -= 0.1; if(c.cx < -150) c.cx = width + 150;
          ctx.beginPath();
          c.nodes.forEach((n: any, i: number) => {
            const x = c.cx + n.dx; const y = c.cy + n.dy;
            if(i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)'; ctx.stroke();
          c.nodes.forEach((n: any) => {
            drawStarShape(ctx, c.cx + n.dx, c.cy + n.dy, 3);
            ctx.fillStyle = 'rgba(200,220,255,0.8)'; ctx.fill();
          });
        });

        animationFrameId = requestAnimationFrame(animateCosmos);
      };
      animateCosmos();
    } 
    else if (mode === 'midnight') {
      const fireflies: any[] = [];
      for(let i=0; i<150; i++) fireflies.push({ x: Math.random()*width, y: Math.random()*height, vx: (Math.random()-0.5)*0.5, vy: -Math.random()*1 - 0.2, phase: Math.random()*Math.PI*2 });
      let time = 0;
      const animateMidnight = () => {
        ctx.clearRect(0,0,width,height);
        time+=0.05;
        fireflies.forEach(f => {
          f.x += f.vx + Math.sin(time + f.phase)*0.5;
          f.y += f.vy;
          if(f.y < -10) { f.y = height + 10; f.x = Math.random()*width; }
          
          let dx = mouse.x - f.x; let dy = mouse.y - f.y; let dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < 150) { f.x -= dx*0.01; f.y -= dy*0.01; } // Scatter from mouse

          const alpha = (Math.sin(time*0.5 + f.phase)+1)/2 * 0.8 + 0.2;
          ctx.beginPath(); ctx.arc(f.x, f.y, 2, 0, Math.PI*2);
          ctx.fillStyle = `rgba(180, 255, 100, ${alpha})`;
          ctx.shadowBlur = 15; ctx.shadowColor = 'rgba(150, 255, 50, 0.8)';
          ctx.fill();
        });
        animationFrameId = requestAnimationFrame(animateMidnight);
      };
      animateMidnight();
    }
    else if (mode === 'ocean') {
      const bubbles: any[] = [];
      for(let i=0; i<200; i++) bubbles.push({ x: Math.random()*width, y: Math.random()*height, size: Math.random()*4+1, speed: Math.random()*2+0.5 });
      let time = 0;
      const animateOcean = () => {
        ctx.clearRect(0,0,width,height);
        time+=0.02;

        // Light rays from top
        ctx.globalCompositeOperation = 'screen';
        for(let i=0; i<5; i++) {
          ctx.beginPath(); ctx.moveTo(width*0.2 + i*200 + Math.sin(time)*50, -50);
          ctx.lineTo(width*0.4 + i*200 + Math.sin(time+i)*100, height+50);
          ctx.lineTo(width*0.1 + i*200 + Math.sin(time+i)*50, height+50);
          const grad = ctx.createLinearGradient(0,0,0,height);
          grad.addColorStop(0, 'rgba(0,150,255,0.1)'); grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad; ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';

        bubbles.forEach(b => {
          b.y -= b.speed;
          b.x += Math.sin(time + b.y*0.01)*1;
          if(b.y < -10) { b.y = height+10; b.x = Math.random()*width; }
          ctx.beginPath(); ctx.arc(b.x, b.y, b.size, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(200,255,255,0.5)'; ctx.lineWidth = 1; ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.fill();
        });
        animationFrameId = requestAnimationFrame(animateOcean);
      };
      animateOcean();
    }
    else if (mode === 'aurora') {
      let time = 0;
      const animateAurora = () => {
        ctx.clearRect(0, 0, width, height);
        time += 0.01;
        ctx.globalCompositeOperation = 'screen';
        const ribbons = [
          { color: '0, 255, 178', yOffset: height * 0.3, amp1: 120, amp2: 60, speed1: 0.8, speed2: 1.2, phase: 0 },
          { color: '50, 150, 255', yOffset: height * 0.5, amp1: 150, amp2: 80, speed1: 1.1, speed2: 0.7, phase: 100 },
          { color: '139, 92, 246', yOffset: height * 0.4, amp1: 100, amp2: 50, speed1: 0.9, speed2: 1.5, phase: 200 }
        ];

        ribbons.forEach((r) => {
          ctx.beginPath(); ctx.moveTo(-100, height);
          let prevX = -100; let prevY = height;
          for (let x = -100; x <= width + 100; x += 30) {
            let y = r.yOffset + Math.sin(x * 0.002 + time * r.speed1 + r.phase) * r.amp1 + Math.cos(x * 0.004 - time * r.speed2) * r.amp2;
            let dx = mouse.x - x; let dy = mouse.y - y; let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 400) y -= Math.pow((400 - dist) / 400, 2) * 150;
            ctx.quadraticCurveTo(prevX, prevY, (prevX + x) / 2, (prevY + y) / 2);
            prevX = x; prevY = y;
          }
          ctx.lineTo(width + 100, height); ctx.closePath();
          const grad = ctx.createLinearGradient(0, r.yOffset - 200, 0, height);
          grad.addColorStop(0, `rgba(${r.color}, 0)`);
          grad.addColorStop(0.2, `rgba(${r.color}, 0.8)`);
          grad.addColorStop(1, `rgba(${r.color}, 0)`);
          ctx.fillStyle = grad; ctx.fill();
        });
        ctx.globalCompositeOperation = 'source-over';
        animationFrameId = requestAnimationFrame(animateAurora);
      };
      animateAurora();
    }
    else {
      let particles: any[] = [];
      let config = { count: 100, speed: 1, size: 2, color: 'rgba(255,255,255,0.1)' };
      if(mode === 'hacker') config = { count: 300, speed: 5, size: 1, color: 'rgba(0,255,0,0.6)' };
      if(mode === 'neon') config = { count: 100, speed: 2, size: 3, color: 'rgba(0,255,255,0.3)' };

      for(let i=0; i<config.count; i++) particles.push({ x: Math.random()*width, y: Math.random()*height, vy: config.speed, size: config.size });
      
      const animateStd = () => {
        ctx.clearRect(0,0,width,height);
        particles.forEach(p => {
          p.y += p.vy; if(p.y > height) { p.y = 0; p.x = Math.random()*width; }
          ctx.fillStyle = config.color;
          if(mode === 'hacker') ctx.fillRect(p.x, p.y, 2, 10);
          else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill(); }
        });
        animationFrameId = requestAnimationFrame(animateStd);
      };
      animateStd();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-primary)' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', opacity: 0.8 }} />
      {/* Soft gradient mask for text legibility, ensuring edges don't blast out light text */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(circle at center, transparent 30%, var(--bg-primary) 100%)'
      }} />
    </div>
  );
};
