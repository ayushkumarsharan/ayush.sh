'use client';

import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight <= 0) return;
      const current = (window.scrollY / totalHeight) * 100;
      setProgress(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '2.5px',
        backgroundColor: 'var(--accent-primary)',
        zIndex: 10000,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 8px var(--accent-glow)',
      }}
    />
  );
};
