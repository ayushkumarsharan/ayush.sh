export type ModeId = 'engineer' | 'builder' | 'explorer' | 'creative' | 'thinker' | 'journey' | 'life';
export type EvidenceType = 'professional' | 'project' | 'research' | 'academic' | 'exploration' | 'interest';

export interface Mode {
  id: ModeId;
  label: string;
  subtitle: string;
  description: string;
  icon: string;              // Lucide icon name from lucide-react
  visualDensity: 'structured' | 'spatial' | 'fluid' | 'quiet' | 'temporal' | 'editorial';
  accentHue: number;         // HSL hue for mode-specific atmosphere  
  backgroundBehavior: 'grid' | 'orbital' | 'wave' | 'particles' | 'typography' | 'timeline';
  motionIntensity: number;   // 0-1 scale
  typographyScale: number;   // 0.9-1.2 relative scale
  sections: string[];        // Which sections to show (in order) when this mode is active
}

export const modes: Record<ModeId, Mode> = {
  engineer: {
    id: 'engineer',
    label: 'ENGINEER',
    subtitle: 'How I build systems',
    description: 'Software, QA, automation, cloud, infrastructure, reliability',
    icon: 'Terminal',
    visualDensity: 'structured',
    accentHue: 168,
    backgroundBehavior: 'grid',
    motionIntensity: 0.4,
    typographyScale: 1.0,
    sections: ['signal', 'workbench', 'toolkit', 'projects', 'shelf', 'intersection']
  },
  builder: {
    id: 'builder',
    label: 'BUILDER',
    subtitle: 'What I\'ve actually made',
    description: 'Projects, applications, experiments, systems, artifacts',
    icon: 'Hammer',
    visualDensity: 'structured',
    accentHue: 210,
    backgroundBehavior: 'particles',
    motionIntensity: 0.5,
    typographyScale: 1.0,
    sections: ['projects', 'workbench', 'lab', 'toolkit', 'thisWebsite']
  },
  explorer: {
    id: 'explorer',
    label: 'EXPLORER',
    subtitle: 'What I investigate',
    description: 'AI, quantum, networking, game tech, new tools, curiosity-driven research',
    icon: 'Compass',
    visualDensity: 'spatial',
    accentHue: 260,
    backgroundBehavior: 'orbital',
    motionIntensity: 0.7,
    typographyScale: 1.0,
    sections: ['intersection', 'research', 'lab', 'projects', 'toolkit']
  },
  creative: {
    id: 'creative',
    label: 'CREATIVE',
    subtitle: 'Where technology meets imagination',
    description: 'Design, visual thinking, 3D, interaction, game spaces, creative tech',
    icon: 'Palette',
    visualDensity: 'fluid',
    accentHue: 330,
    backgroundBehavior: 'wave',
    motionIntensity: 0.8,
    typographyScale: 1.05,
    sections: ['creativeArchive', 'intersection', 'projects', 'humanSide']
  },
  thinker: {
    id: 'thinker',
    label: 'THINKER',
    subtitle: 'How I approach problems',
    description: 'Questions, patterns, systems thinking, trade-offs, observations',
    icon: 'Brain',
    visualDensity: 'quiet',
    accentHue: 45,
    backgroundBehavior: 'typography',
    motionIntensity: 0.15,
    typographyScale: 1.15,
    sections: ['thoughts', 'signal', 'humanSide', 'coreIdentity']
  },
  journey: {
    id: 'journey',
    label: 'JOURNEY',
    subtitle: 'How these pieces evolved',
    description: 'Chronology of direction changes, learning milestones, pivots',
    icon: 'Route',
    visualDensity: 'temporal',
    accentHue: 168,
    backgroundBehavior: 'timeline',
    motionIntensity: 0.3,
    typographyScale: 1.0,
    sections: ['timeline', 'workbench', 'shelf', 'signal']
  },
  life: {
    id: 'life',
    label: 'LIFE',
    subtitle: 'Beyond the stack',
    description: 'Music, psychology, astrology, analog practices, philosophy',
    icon: 'Heart',
    visualDensity: 'editorial',
    accentHue: 25,
    backgroundBehavior: 'particles',
    motionIntensity: 0.25,
    typographyScale: 1.1,
    sections: ['humanSide', 'interests', 'creativeArchive', 'thoughts']
  }
};

export const getModeById = (id: ModeId): Mode => modes[id];
export const modeOrder: ModeId[] = ['engineer', 'builder', 'explorer', 'creative', 'thinker', 'journey', 'life'];
