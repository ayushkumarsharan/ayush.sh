"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ModeId, modeOrder, getModeById } from '@/content/modes';
import { universeConfig, ThemeId } from '@/content/universe.config';
import { applyTheme as applyBasicTheme, getInitialTheme } from '@/lib/theme';

interface ModeContextType {
  activeMode: ModeId;
  activeTheme: ThemeId;
  setMode: (mode: ModeId) => void;
  setTheme: (theme: ThemeId) => void;
  isTransitioning: boolean;
  isInitialLoad: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  // Try to get from URL, fallback to config default
  const modeParam = searchParams.get('mode') as ModeId | null;
  const initialMode = (modeParam && modeOrder.includes(modeParam)) 
    ? modeParam 
    : universeConfig.defaultMode;

  const [activeMode, setActiveModeState] = useState<ModeId>(initialMode);
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
    const modeData = getModeById(activeMode);
    if (!modeData) return;

    const root = document.documentElement;
    root.style.setProperty('--mode-hue', modeData.accentHue.toString());
    root.style.setProperty('--mode-motion', modeData.motionIntensity.toString());
    root.style.setProperty('--mode-scale', modeData.typographyScale.toString());
    root.setAttribute('data-mode', activeMode);
    
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
  const setMode = (mode: ModeId) => {
    startTransition(() => {
      setActiveModeState(mode);
      
      // Update URL search params without full reload
      const params = new URLSearchParams(window.location.search);
      params.set('mode', mode);
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
