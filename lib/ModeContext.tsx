"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ModeId, modeOrder, getModeById } from '@/content/modes';
import { universeConfig, ThemeId } from '@/content/universe.config';
import { applyTheme as applyBasicTheme, getInitialTheme } from '@/lib/theme';

interface ModeContextType {
  activeMode: ModeId | null;
  activeTheme: ThemeId;
  setMode: (mode: ModeId | null) => void;
  setTheme: (theme: ThemeId) => void;
  isTransitioning: boolean;
  isInitialLoad: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  // Try to get from URL, fallback to null (Arrival State)
  const modeParam = searchParams.get('mode') as ModeId | null;
  const initialMode = (modeParam && modeOrder.includes(modeParam)) 
    ? modeParam 
    : null;

  const [activeMode, setActiveModeState] = useState<ModeId | null>(initialMode);
  const [activeTheme, setActiveThemeState] = useState<ThemeId>(universeConfig.defaultTheme);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Sync theme on mount
  useEffect(() => {
    setIsInitialLoad(false);
    const saved = getInitialTheme();
    setActiveThemeState(saved);
  }, []);

  // Sync mode changes to CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    
    if (activeMode) {
      const modeData = getModeById(activeMode);
      if (modeData) {
        root.style.setProperty('--mode-hue', modeData.accentHue.toString());
        root.style.setProperty('--mode-motion', modeData.motionIntensity.toString());
        root.style.setProperty('--mode-scale', modeData.typographyScale.toString());
        root.setAttribute('data-mode', activeMode);
      }
    } else {
      // Arrival state styles (quiet, neutral)
      root.style.setProperty('--mode-hue', '220');
      root.style.setProperty('--mode-motion', '0.2');
      root.style.setProperty('--mode-scale', '1');
      root.removeAttribute('data-mode');
    }
    
    // Sync theme colors
    const themeData = universeConfig.themes[activeTheme];
    if (themeData) {
      root.setAttribute('data-universe-theme', activeTheme);
      root.style.setProperty('--bg-primary', themeData.colors.bgPrimary);
      root.style.setProperty('--bg-surface', themeData.colors.bgSurface);
      root.style.setProperty('--bg-surface-elevated', themeData.colors.bgSurfaceElevated);
      root.style.setProperty('--bg-translucent', themeData.colors.bgTranslucent);
      
      root.style.setProperty('--text-primary', themeData.colors.textPrimary);
      root.style.setProperty('--text-secondary', themeData.colors.textSecondary);
      root.style.setProperty('--text-tertiary', themeData.colors.textTertiary);
      root.style.setProperty('--text-muted', themeData.colors.textMuted);
      
      root.style.setProperty('--accent-primary', themeData.colors.accentPrimary);
      root.style.setProperty('--accent-warm', themeData.colors.accentWarm);
      
      root.style.setProperty('--border-subtle', themeData.colors.borderSubtle);
      root.style.setProperty('--border-medium', themeData.colors.borderMedium);
    }

  }, [activeMode, activeTheme]);

  // Handle URL sync
  const setMode = (mode: ModeId | null) => {
    startTransition(() => {
      setActiveModeState(mode);
      
      const params = new URLSearchParams(window.location.search);
      if (mode) {
        params.set('mode', mode);
      } else {
        params.delete('mode');
      }
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const setTheme = (theme: ThemeId) => {
    startTransition(() => {
      setActiveThemeState(theme);
      applyBasicTheme(theme);
    });
  };

  return (
    <ModeContext.Provider value={{
      activeMode,
      activeTheme,
      setMode,
      setTheme,
      isTransitioning: isPending,
      isInitialLoad
    }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
