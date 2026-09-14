'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useMode } from '@/lib/ModeContext';
import { universeConfig, ThemeId } from '@/content/universe.config';

export const ThemeSwitcher: React.FC = () => {
  const { activeTheme, setTheme } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const themes = Object.keys(universeConfig.themes) as ThemeId[];

  return (
    <div style={{ position: 'relative' }} ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Theme"
        title="Switch Theme"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '34px',
          height: '34px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-medium)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        <Palette size={16} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 0.5rem)',
          right: 0,
          width: '240px',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          padding: '0.5rem',
          zIndex: 100,
          animation: 'fadeIn 0.15s ease-out',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.5rem', padding: '0 0.5rem' }}>
            Environment Theme
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {themes.map(tId => {
              const theme = universeConfig.themes[tId];
              const isSelected = activeTheme === tId;
              
              return (
                <button
                  key={tId}
                  onClick={() => { setTheme(tId); setIsOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isSelected ? 'var(--bg-surface)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  className="interactive-hover"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      width: '16px', height: '16px', borderRadius: '50%',
                      background: theme.colors.bgPrimary,
                      border: '1px solid ' + theme.colors.borderMedium,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', background: theme.colors.accentPrimary }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)', fontWeight: 500 }}>
                        {theme.label}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check size={14} style={{ color: 'var(--accent-primary)' }} />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
};
