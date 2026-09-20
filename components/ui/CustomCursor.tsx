'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState<'none' | 'link' | 'text'>('none');
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // High-speed tracking spring for the main dot
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  // Slower trailing spring for the fluid outline
  const trailX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  // Velocity calculation for stretching
  const velocity = useMotionValue(0);
  const angle = useMotionValue(0);
  const lastMousePos = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Calculate velocity and angle
      const now = performance.now();
      const dt = now - lastMousePos.current.time;
      if (dt > 0) {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const v = Math.min(dist / dt, 5); // cap velocity
        velocity.set(v);
        
        if (dist > 1) {
          angle.set(Math.atan2(dy, dx) * (180 / Math.PI));
        }
      }
      lastMousePos.current = { x: e.clientX, y: e.clientY, time: now };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();
      const style = window.getComputedStyle(target);
      
      if (style.cursor === 'pointer' || tag === 'a' || tag === 'button') {
        setHoverState('link');
      } else if (style.cursor === 'text' || tag === 'p' || tag === 'h1' || tag === 'h2') {
        setHoverState('text');
      } else {
        setHoverState('none');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Decay velocity when mouse stops
    const decay = setInterval(() => {
      velocity.set(velocity.get() * 0.8);
    }, 50);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(decay);
    };
  }, [mouseX, mouseY, isVisible, velocity, angle]);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = 'none';
      const style = document.createElement('style');
      style.id = 'custom-cursor-style';
      style.innerHTML = '* { cursor: none !important; }';
      document.head.appendChild(style);
      return () => {
        document.body.style.cursor = 'auto';
        const el = document.getElementById('custom-cursor-style');
        if (el) el.remove();
      };
    }
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Transform velocity into stretch scale (Must be declared BEFORE any early returns)
  const scaleX = useTransform(velocity, [0, 5], [1, 2.5]);
  const scaleY = useTransform(velocity, [0, 5], [1, 0.4]);

  if (!mounted) {
    return null;
  }
  if (window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999, pointerEvents: 'none', mixBlendMode: 'difference' }}>
      
      {/* The trailing fluid shape */}
      <motion.div
        style={{
          position: 'absolute',
          left: -20,
          top: -20,
          x: trailX,
          y: trailY,
          width: 40,
          height: 40,
          rotate: angle,
          scaleX: hoverState === 'none' ? scaleX : 1.5,
          scaleY: hoverState === 'none' ? scaleY : 1.5,
          border: hoverState === 'link' ? '1px dashed var(--accent-primary)' : '1px solid var(--text-primary)',
          borderRadius: hoverState === 'link' ? '4px' : '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isVisible ? (hoverState === 'none' ? 0.3 : 0.8) : 0,
        }}
        animate={{
          rotate: hoverState === 'link' ? 45 : undefined,
          borderRadius: hoverState === 'link' ? '8px' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {hoverState === 'link' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            style={{ width: 10, height: 10, background: 'var(--accent-primary)', borderRadius: '2px' }} 
          />
        )}
      </motion.div>

      {/* The high-speed dot */}
      <motion.div
        style={{
          position: 'absolute',
          left: -4,
          top: -4,
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-primary)',
          opacity: isVisible && hoverState === 'none' ? 1 : 0,
        }}
      />
      
      {/* Text hover vertical bar */}
      <motion.div
        style={{
          position: 'absolute',
          left: -1,
          top: -12,
          x: dotX,
          y: dotY,
          width: 2,
          height: 24,
          backgroundColor: 'var(--text-primary)',
          opacity: hoverState === 'text' && isVisible ? 1 : 0,
        }}
        animate={{ scaleY: hoverState === 'text' ? 1 : 0 }}
      />
    </div>
  );
}
