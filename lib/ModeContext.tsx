"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ModeId, modeOrder, getModeById } from '@/content/modes';
import { universeConfig, ThemeId } from '@/content/universe.config';
import { AtmosphereId, atmospheres } from '@/content/atmospheres';

interface ModeContextType {
  activeMode: ModeId | null;
  activeAtmosphere: AtmosphereId;
  setMode: (mode: ModeId | null) => void;
  setAtmosphere: (atmosphere: AtmosphereId) => void;
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
  const [activeAtmosphere, setActiveAtmosphereState] = useState<AtmosphereId>('cosmos');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Sync mode and atmosphere to data attributes for CSS driving
  useEffect(() => {
    setIsInitialLoad(false);
    const root = document.documentElement;
    
    if (activeMode) {
      root.setAttribute('data-world', activeMode);
    } else {
      root.removeAttribute('data-world');
    }

    if (activeAtmosphere) {
      root.setAttribute('data-atmosphere', activeAtmosphere);
      // Let's also set the structural profiles to CSS so the engine can adapt
      const config = atmospheres[activeAtmosphere];
      if (config) {
        root.setAttribute('data-typography-profile', config.typographyProfile);
        root.setAttribute('data-surface-material', config.surfaceMaterial);
        root.setAttribute('data-motion-language', config.motionLanguage);
        root.setAttribute('data-background-renderer', config.backgroundRenderer);
      }
    }
  }, [activeMode, activeAtmosphere]);

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

  const setAtmosphere = (atmosphere: AtmosphereId) => {
    startTransition(() => {
      setActiveAtmosphereState(atmosphere);
    });
  };

  return (
    <ModeContext.Provider value={{
      activeMode,
      activeAtmosphere,
      setMode,
      setAtmosphere,
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
