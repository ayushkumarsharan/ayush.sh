import type { ModeId } from './modes';

export type ThemeId = 'cosmos' | 'daylight' | 'terminal' | 'paper' | 'aurora' | 'minimal';

export interface ThemeDefinition {
  id: ThemeId;
  label: string;
  description: string;
  colors: {
    bgPrimary: string;
    bgSurface: string;
    bgSurfaceElevated: string;
    bgTranslucent: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textMuted: string;
    accentPrimary: string;
    accentWarm: string;
    borderSubtle: string;
    borderMedium: string;
  };
  fontEmphasis: 'display' | 'mono' | 'body';
  visualGrain: boolean;
  particleOpacity: number;
}

export interface UniverseConfig {
  siteName: string;
  defaultMode: ModeId;
  defaultTheme: ThemeId;
  themes: Record<ThemeId, ThemeDefinition>;
  orbitalIntensity: number;
  backgroundDensity: number;
  animationDensity: number;
  enableSound: boolean;
  enableCustomCursor: boolean;
}

export const universeConfig: UniverseConfig = {
  siteName: "Ayush Kumar Sharan | The Universe Portal",
  defaultMode: 'engineer',
  defaultTheme: 'cosmos',
  orbitalIntensity: 1.0,
  backgroundDensity: 1.0,
  animationDensity: 1.0,
  enableSound: false, // Metaphorical only, as requested
  enableCustomCursor: true,
  themes: {
    cosmos: {
      id: 'cosmos',
      label: 'Cosmos',
      description: 'Deep space dark, contemplative.',
      colors: {
        bgPrimary: '#0a0d12',
        bgSurface: '#12161f',
        bgSurfaceElevated: '#1a1f2e',
        bgTranslucent: 'rgba(10, 13, 18, 0.7)',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
        textTertiary: '#64748b',
        textMuted: '#475569',
        accentPrimary: '#14b8a6',
        accentWarm: '#f59e0b',
        borderSubtle: 'rgba(255, 255, 255, 0.05)',
        borderMedium: 'rgba(255, 255, 255, 0.1)',
      },
      fontEmphasis: 'display',
      visualGrain: true,
      particleOpacity: 0.85
    },
    daylight: {
      id: 'daylight',
      label: 'Daylight',
      description: 'Bright, professional, warm.',
      colors: {
        bgPrimary: '#f8f6f2',
        bgSurface: '#ffffff',
        bgSurfaceElevated: '#fdfbfa',
        bgTranslucent: 'rgba(248, 246, 242, 0.8)',
        textPrimary: '#18181b',
        textSecondary: '#52525b',
        textTertiary: '#71717a',
        textMuted: '#a1a1aa',
        accentPrimary: '#0d9488',
        accentWarm: '#d97706',
        borderSubtle: 'rgba(0, 0, 0, 0.05)',
        borderMedium: 'rgba(0, 0, 0, 0.1)',
      },
      fontEmphasis: 'body',
      visualGrain: false,
      particleOpacity: 0.3
    },
    terminal: {
      id: 'terminal',
      label: 'Terminal',
      description: 'Phosphor retro-tech.',
      colors: {
        bgPrimary: '#0c1117',
        bgSurface: '#161b22',
        bgSurfaceElevated: '#21262d',
        bgTranslucent: 'rgba(12, 17, 23, 0.85)',
        textPrimary: '#22c55e',
        textSecondary: '#16a34a',
        textTertiary: '#15803d',
        textMuted: '#14532d',
        accentPrimary: '#4ade80',
        accentWarm: '#fbbf24',
        borderSubtle: 'rgba(34, 197, 94, 0.15)',
        borderMedium: 'rgba(34, 197, 94, 0.3)',
      },
      fontEmphasis: 'mono',
      visualGrain: true,
      particleOpacity: 0.6
    },
    paper: {
      id: 'paper',
      label: 'Paper',
      description: 'Warm newsprint editorial.',
      colors: {
        bgPrimary: '#f5f0e8',
        bgSurface: '#efe8dd',
        bgSurfaceElevated: '#e8dfd2',
        bgTranslucent: 'rgba(245, 240, 232, 0.8)',
        textPrimary: '#1a1a1a',
        textSecondary: '#404040',
        textTertiary: '#595959',
        textMuted: '#808080',
        accentPrimary: '#991b1b',
        accentWarm: '#c2410c',
        borderSubtle: 'rgba(26, 26, 26, 0.1)',
        borderMedium: 'rgba(26, 26, 26, 0.2)',
      },
      fontEmphasis: 'display',
      visualGrain: true, // heavy grain via CSS
      particleOpacity: 0.15
    },
    aurora: {
      id: 'aurora',
      label: 'Aurora',
      description: 'Ethereal northern lights gradient.',
      colors: {
        bgPrimary: '#0f172a',
        bgSurface: '#1e293b',
        bgSurfaceElevated: '#334155',
        bgTranslucent: 'rgba(15, 23, 42, 0.7)',
        textPrimary: '#f1f5f9',
        textSecondary: '#cbd5e1',
        textTertiary: '#94a3b8',
        textMuted: '#64748b',
        accentPrimary: '#8b5cf6', // Shifts in CSS
        accentWarm: '#ec4899',
        borderSubtle: 'rgba(139, 92, 246, 0.15)',
        borderMedium: 'rgba(139, 92, 246, 0.3)',
      },
      fontEmphasis: 'body',
      visualGrain: false,
      particleOpacity: 0.7
    },
    minimal: {
      id: 'minimal',
      label: 'Minimal',
      description: 'Ultra-stripped, Dieter Rams inspired.',
      colors: {
        bgPrimary: '#ffffff',
        bgSurface: '#f4f4f5',
        bgSurfaceElevated: '#e4e4e7',
        bgTranslucent: 'rgba(255, 255, 255, 0.9)',
        textPrimary: '#000000',
        textSecondary: '#3f3f46',
        textTertiary: '#71717a',
        textMuted: '#a1a1aa',
        accentPrimary: '#000000',
        accentWarm: '#52525b',
        borderSubtle: 'rgba(0, 0, 0, 0.1)',
        borderMedium: 'rgba(0, 0, 0, 0.2)',
      },
      fontEmphasis: 'body',
      visualGrain: false,
      particleOpacity: 0.1
    }
  }
};
