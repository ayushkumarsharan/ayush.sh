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
}

export const LivingAtmosphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 3); // Full native Retina / OLED scaling

    const setupCanvasSize = () => {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Native internal buffer resolution
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      
      // Explicit CSS display dimensions
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform matrix
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    setupCanvasSize();
    window.addEventListener('resize', setupCanvasSize);
    window.addEventListener('orientationchange', setupCanvasSize);

    // Pointer coordinates (Mouse + Multi-Touch)
    let pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
      radius: width < 768 ? 160 : 220,
    };

    let lastInteractionTime = Date.now();
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const updatePointerPos = (clientX: number, clientY: number) => {
      pointer.targetX = clientX;
      pointer.targetY = clientY;
      pointer.isActive = true;
      lastInteractionTime = Date.now();
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointerPos(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      pointer.targetX = -1000;
      pointer.targetY = -1000;
      pointer.isActive = false;
    };

    // Full Mobile Touch Support
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY);
        createShockwave(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        pointer.isActive = false;
      }, 800);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.18;
      lastScrollY = currentScrollY;
      lastInteractionTime = Date.now();
    };

    // Click / Touch Shockwaves
    const shockwaves: { x: number; y: number; radius: number; maxRadius: number; alpha: number }[] = [];

    const createShockwave = (x: number, y: number) => {
      shockwaves.push({
        x,
        y,
        radius: 6,
        maxRadius: width < 768 ? 150 : 200,
        alpha: 0.8,
      });
      lastInteractionTime = Date.now();
    };

    const handleClick = (e: MouseEvent) => {
      createShockwave(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);

    // Initialize lively particles tailored for crisp high-density screens
    const isMobile = width < 768;
    const particleCount = isMobile ? 42 : Math.min(75, Math.floor((width * height) / 18000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(20, 184, 166,',  // Teal Primary
      'rgba(45, 212, 191,',  // Teal Bright
      'rgba(14, 165, 233,',  // Electric Sky Blue
      'rgba(245, 158, 11,',  // Warm Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseR = isMobile ? Math.random() * 1.8 + 1.2 : Math.random() * 2.2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.6 : 0.7),
        vy: (Math.random() - 0.5) * (isMobile ? 0.6 : 0.7),
        radius: baseR,
        baseRadius: baseR,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: isMobile ? Math.random() * 0.45 + 0.5 : Math.random() * 0.5 + 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;

      // Pointer smooth interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.14;
      pointer.y += (pointer.targetY - pointer.y) * 0.14;

      // Scroll physics
      scrollVelocity *= 0.93;

      ctx.clearRect(0, 0, width, height);

      const isIdle = Date.now() - lastInteractionTime > 1800;

      // 1. Fluid Ambient Harmonic Filaments
      ctx.lineWidth = isMobile ? 1.0 : 1.2;
      for (let wave = 0; wave < (isMobile ? 2 : 3); wave++) {
        const offset = wave * (isMobile ? 320 : 220);
        const waveY = (height * 0.25 + offset + Math.sin(time * 0.8 + wave) * 50) % height;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const y = waveY + Math.sin(x * 0.005 + time * 1.1 + wave) * 30 + Math.cos(x * 0.01 - time * 0.7) * 16;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(20, 184, 166, ${isMobile ? 0.11 : 0.08})`;
        ctx.stroke();
      }

      // 2. Render shockwaves (Touch taps & Clicks)
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += isMobile ? 3.8 : 4.2;
        sw.alpha *= 0.93;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(45, 212, 191, ${sw.alpha})`;
        ctx.lineWidth = isMobile ? 2.0 : 2.5;
        ctx.stroke();

        if (sw.alpha < 0.02 || sw.radius > sw.maxRadius) {
          shockwaves.splice(i, 1);
        }
      }

      // 3. Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle breathing harmonic pulse
        p.pulsePhase += 0.035;
        const pulse = Math.sin(p.pulsePhase) * 0.4 + 1;
        p.radius = p.baseRadius * pulse;

        // Position drift + vertical scroll drift
        p.x += p.vx;
        p.y += p.vy + scrollVelocity * 0.25;

        // Screen boundary wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Pointer Gravity & Direct Laser Connection
        let distPointer = 9999;
        if (pointer.isActive) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          distPointer = Math.hypot(dx, dy);

          if (distPointer < pointer.radius) {
            const force = (1 - distPointer / pointer.radius) * 1.6;
            p.x += (dx / distPointer) * force * 2.8;
            p.y += (dy / distPointer) * force * 2.8;

            // Direct laser connection to fingertip / mouse
            const laserAlpha = (1 - distPointer / pointer.radius) * (isMobile ? 0.7 : 0.55);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${laserAlpha})`;
            ctx.lineWidth = isMobile ? 1.1 : 1;
            ctx.stroke();
          }
        }

        // Draw Pin-Sharp Glowing Particle Node
        ctx.beginPath();
        const currentAlpha = pointer.isActive && distPointer < pointer.radius ? Math.min(1, p.alpha + 0.45) : p.alpha;
        
        // Outer soft glow
        ctx.fillStyle = `${p.color} ${currentAlpha * 0.7})`;
        ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid crisp core
        ctx.beginPath();
        ctx.fillStyle = `${p.color} ${Math.min(1, currentAlpha * 1.2)})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // 4. Inter-particle constellation web
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = isMobile ? 105 : (isIdle ? 115 : 140);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (isMobile ? 0.32 : (isIdle ? 0.18 : 0.32));
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.lineWidth = isMobile ? 0.9 : 0.8;
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
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
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
          imageRendering: '-webkit-optimize-contrast',
        }}
      />
    </div>
  );
};
