'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '@/lib/ModeContext';
import { Palette, Check } from 'lucide-react';
import { atmospheres } from '@/content/atmospheres';

import { Magnetic } from './Magnetic';

export default function ModeSwitcher() {
  const { activeAtmosphere, setAtmosphere } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const modeList = Object.values(atmospheres);

  return (
    <div ref={containerRef} style={{ position: 'relative', zIndex: 100 }}>
      <Magnetic strength={0.4}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid var(--border-subtle, rgba(255,255,255,0.1))',
            background: 'var(--bg-surface, rgba(0,0,0,0.2))',
            backdropFilter: 'blur(10px)',
            color: 'inherit',
            cursor: 'pointer',
            transition: 'background 0.2s ease, border 0.2s ease',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
          aria-label="Switch Theme"
        >
          <Palette size={20} />
        </button>
      </Magnetic>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 12px)',
              right: 0,
              width: '200px',
              maxHeight: '400px',
              overflowY: 'auto',
              padding: '6px',
              borderRadius: '16px',
              background: 'var(--bg-surface, rgba(15, 15, 15, 0.6))',
              backdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid var(--border-subtle, rgba(255,255,255,0.1))',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              color: 'var(--text-primary, #fff)'
            }}
          >
            {modeList.map((mode) => {
              const isActive = activeAtmosphere === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setAtmosphere(mode.id as any);
                    setIsOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: 'none',
                    background: isActive ? 'var(--bg-element, rgba(255,255,255,0.1))' : 'transparent',
                    color: 'inherit',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem'
                  }}
                >
                  <span>{mode.name}</span>
                  {isActive && <Check size={14} opacity={0.7} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
