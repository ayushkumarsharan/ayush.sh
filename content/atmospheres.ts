export type AtmosphereId = 'cosmos' | 'aurora' | 'paper' | 'material' | 'minimal' | 'terminal' | 'light' | 'dark' | 'grey' | 'oldschool' | 'classic' | 'modern' | 'cyberpunk' | 'ocean' | 'glass' | 'midnight' | 'neon' | 'hacker';

export interface AtmosphereConfig {
  id: AtmosphereId;
  name: string;
  description: string;
  visualLanguage: string;
  typographyProfile: string;
  surfaceMaterial: string;
  motionLanguage: string;
  backgroundRenderer: string;
}

export const atmospheres: Record<AtmosphereId, AtmosphereConfig> = {
  cosmos: { id: 'cosmos', name: 'Cosmos', description: 'Vastness, silence, distance.', visualLanguage: 'spatial', typographyProfile: 'display-sans', surfaceMaterial: 'invisible', motionLanguage: 'drift', backgroundRenderer: 'gradient-field' },
  aurora: { id: 'aurora', name: 'Aurora', description: 'Fluidity, wonder, energy.', visualLanguage: 'fluid', typographyProfile: 'display-sans', surfaceMaterial: 'translucent-blur', motionLanguage: 'flow', backgroundRenderer: 'aurora-mesh' },
  paper: { id: 'paper', name: 'Paper', description: 'A beautifully designed research notebook.', visualLanguage: 'editorial', typographyProfile: 'display-serif', surfaceMaterial: 'grain-textured', motionLanguage: 'page-turn', backgroundRenderer: 'paper-texture' },
  material: { id: 'material', name: 'Material', description: 'Physicality, light, and layered surfaces.', visualLanguage: 'tactile', typographyProfile: 'pure-sans', surfaceMaterial: 'glass-layered', motionLanguage: 'spring-depth', backgroundRenderer: 'ambient-light' },
  minimal: { id: 'minimal', name: 'Minimal', description: 'Almost everything disappears.', visualLanguage: 'reductive', typographyProfile: 'pure-sans', surfaceMaterial: 'invisible', motionLanguage: 'static', backgroundRenderer: 'none' },
  terminal: { id: 'terminal', name: 'Terminal', description: 'Command line and structured logs.', visualLanguage: 'computational', typographyProfile: 'mono-dominant', surfaceMaterial: 'opaque-matte', motionLanguage: 'snap', backgroundRenderer: 'none' },
  light: { id: 'light', name: 'Light', description: 'Clean, bright, high contrast.', visualLanguage: 'editorial', typographyProfile: 'pure-sans', surfaceMaterial: 'invisible', motionLanguage: 'static', backgroundRenderer: 'none' },
  dark: { id: 'dark', name: 'Dark', description: 'Deep blacks, pure focus.', visualLanguage: 'reductive', typographyProfile: 'pure-sans', surfaceMaterial: 'invisible', motionLanguage: 'static', backgroundRenderer: 'none' },
  grey: { id: 'grey', name: 'Grey', description: 'Monochrome and muted elegance.', visualLanguage: 'tactile', typographyProfile: 'display-sans', surfaceMaterial: 'opaque-matte', motionLanguage: 'static', backgroundRenderer: 'none' },
  oldschool: { id: 'oldschool', name: 'Old School', description: 'Retro pixelated aesthetics.', visualLanguage: 'historical', typographyProfile: 'mono-dominant', surfaceMaterial: 'grain-textured', motionLanguage: 'snap', backgroundRenderer: 'none' },
  classic: { id: 'classic', name: 'Classic', description: 'Timeless serifs and structured layouts.', visualLanguage: 'editorial', typographyProfile: 'display-serif', surfaceMaterial: 'invisible', motionLanguage: 'flow', backgroundRenderer: 'none' },
  modern: { id: 'modern', name: 'Modern', description: 'Swiss design, grid locked.', visualLanguage: 'precise', typographyProfile: 'display-sans', surfaceMaterial: 'invisible', motionLanguage: 'spring-depth', backgroundRenderer: 'none' },
  cyberpunk: { id: 'cyberpunk', name: 'Cyberpunk', description: 'High contrast neon and glitch.', visualLanguage: 'expressive', typographyProfile: 'mono-dominant', surfaceMaterial: 'glass-layered', motionLanguage: 'snap', backgroundRenderer: 'aurora-mesh' },
  ocean: { id: 'ocean', name: 'Ocean', description: 'Deep blues and fluid waves.', visualLanguage: 'fluid', typographyProfile: 'display-sans', surfaceMaterial: 'translucent-blur', motionLanguage: 'flow', backgroundRenderer: 'gradient-field' },
  glass: { id: 'glass', name: 'Glass', description: 'Extreme frosted layers.', visualLanguage: 'spatial', typographyProfile: 'pure-sans', surfaceMaterial: 'glass-layered', motionLanguage: 'flow', backgroundRenderer: 'ambient-light' },
  midnight: { id: 'midnight', name: 'Midnight', description: 'Deep purple and starry silence.', visualLanguage: 'spatial', typographyProfile: 'display-sans', surfaceMaterial: 'invisible', motionLanguage: 'float', backgroundRenderer: 'none' },
  neon: { id: 'neon', name: 'Neon', description: 'Synthwave glowing vectors.', visualLanguage: 'expressive', typographyProfile: 'display-sans', surfaceMaterial: 'invisible', motionLanguage: 'snap', backgroundRenderer: 'none' },
  hacker: { id: 'hacker', name: 'Hacker', description: 'Raw root access.', visualLanguage: 'computational', typographyProfile: 'mono-dominant', surfaceMaterial: 'opaque-matte', motionLanguage: 'snap', backgroundRenderer: 'matrix' }
};
