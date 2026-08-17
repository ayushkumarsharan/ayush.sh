'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a, button, [role="button"], input, textarea, .interactive-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrame: number;
    const animateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(animateTrailing);
    };
    animationFrame = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div style={{ pointerEvents: 'none' }}>
      {/* Precision Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent-primary)',
          borderRadius: '50%',
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          zIndex: 9999,
          pointerEvents: 'none',
          transition: 'transform 0.05s ease-out, background-color 0.2s ease',
        }}
      />
      {/* Soft Trailing Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          border: '1.5px solid var(--accent-primary)',
          opacity: isHovering ? 0.6 : 0.25,
          borderRadius: '50%',
          transform: `translate(${trailing.x - (isHovering ? 22 : 13)}px, ${
            trailing.y - (isHovering ? 22 : 13)
          }px)`,
          zIndex: 9998,
          pointerEvents: 'none',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out, border-color 0.2s ease',
        }}
      />
    </div>
  );
};
