'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
  orbitSpeed: number;
}

export const LivingAtmosphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
      radius: 200,
    };

    let lastInteractionTime = Date.now();
    let scrollOffset = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
      lastInteractionTime = Date.now();
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isActive = false;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.15;
      lastScrollY = currentScrollY;
      lastInteractionTime = Date.now();
    };

    // Click wave shockwave
    const shockwaves: { x: number; y: number; radius: number; maxRadius: number; alpha: number }[] = [];

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.6,
      });
      lastInteractionTime = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);

    // Initialize lively particles
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(20, 184, 166,',   // Teal Primary
      'rgba(45, 212, 191,',   // Teal Bright
      'rgba(13, 148, 136,',   // Teal Deep
      'rgba(245, 158, 11,',   // Warm Amber Accent
      'rgba(56, 189, 248,',   // Electric Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseR = Math.random() * 2.2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: baseR,
        baseRadius: baseR,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.018;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Scroll decay
      scrollVelocity *= 0.92;
      scrollOffset += scrollVelocity;

      ctx.clearRect(0, 0, width, height);

      // Check if user has been idle for > 2 seconds
      const isIdle = Date.now() - lastInteractionTime > 2000;

      // 1. Draw subtle ambient fluid wave filaments across background
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.07)';
      ctx.lineWidth = 1.2;

      for (let wave = 0; wave < 3; wave++) {
        const offset = wave * 220;
        const waveY = (height * 0.3 + offset + Math.sin(time + wave) * 60) % height;

        ctx.beginPath();
        for (let x = 0; x < width; x += 15) {
          const y = waveY + Math.sin(x * 0.004 + time * 1.2 + wave) * 35 + Math.cos(x * 0.008 - time * 0.8) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // 2. Render shockwaves from clicks
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4;
        sw.alpha *= 0.94;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(45, 212, 191, ${sw.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (sw.alpha < 0.02 || sw.radius > sw.maxRadius) {
          shockwaves.splice(i, 1);
        }
      }

      // 3. Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle harmonic breathing
        p.pulsePhase += 0.03;
        const pulse = Math.sin(p.pulsePhase) * 0.5 + 1;
        p.radius = p.baseRadius * pulse;

        // Base velocity drift
        p.x += p.vx;
        p.y += p.vy + scrollVelocity * 0.2;

        // Wrap around screen boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Interactive mouse gravity & connection
        let distMouse = 9999;
        if (mouse.isActive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          distMouse = Math.hypot(dx, dy);

          if (distMouse < mouse.radius) {
            const force = (1 - distMouse / mouse.radius) * 1.5;
            p.x += (dx / distMouse) * force * 2.5;
            p.y += (dy / distMouse) * force * 2.5;

            // Draw direct laser filament to cursor
            const laserAlpha = (1 - distMouse / mouse.radius) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${laserAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw particle glow
        ctx.beginPath();
        const currentAlpha = mouse.isActive && distMouse < mouse.radius ? Math.min(1, p.alpha + 0.4) : p.alpha;
        ctx.fillStyle = `${p.color} ${currentAlpha})`;
        ctx.shadowColor = 'rgba(20, 184, 166, 0.4)';
        ctx.shadowBlur = p.radius * 3;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // 4. Inter-particle constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = isIdle ? 110 : 135;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (isIdle ? 0.16 : 0.28);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
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
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
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
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};
