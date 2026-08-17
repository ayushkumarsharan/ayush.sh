export interface CreativeItem {
  id: string;
  title: string;
  medium: string;
  year: string;
  category: "3D & Interactive" | "Visual & Sketching" | "Design & Systems";
  description: string;
  tags: string[];
  gradientTheme?: string;
  palette?: string[];
  notes?: string;
}

export const creativeWorks: CreativeItem[] = [
  {
    id: "spatial-3d-environments",
    title: "Spatial Atmosphere & Unreal 3D Environments",
    medium: "Unreal Engine 5 • Blender • Lumen Lighting",
    year: "2023 – 2024",
    category: "3D & Interactive",
    description: "Explorations into architectural lighting, atmospheric volumetrics, and procedural environment composition built to investigate spatial immersion and physical rendering models.",
    tags: ["Unreal Engine 5", "Blender", "Spatial Design", "Lumen", "3D Modeling"],
    gradientTheme: "linear-gradient(135deg, #1f2937, #111827)",
    palette: ["#111827", "#1f2937", "#374151", "#2dd4bf"],
    notes: "Studying how light behaves when moving through atmospheric fog teaches you fundamental lessons about perception, contrast, and visual hierarchy that apply directly to interface design."
  },
  {
    id: "watercolor-sketches",
    title: "Observational Watercolor & Charcoal Studies",
    medium: "Watercolor on Cold-Press Paper • Charcoal & Graphite",
    year: "2022 – Present",
    category: "Visual & Sketching",
    description: "Analog painting and tactile sketches capturing natural forms, urban silhouettes, and light gradients. A deliberate practice in working with materials where mistakes cannot be undone with Ctrl+Z.",
    tags: ["Watercolor", "Charcoal", "Observational Art", "Composition", "Color Theory"],
    gradientTheme: "linear-gradient(135deg, #2d3748, #1a202c)",
    palette: ["#e2e8f0", "#94a3b8", "#475569", "#0d9488"],
    notes: "Watercolor forces patience and decisiveness: pigment flows where water leads. It trains the eye to see values and negative space before details."
  },
  {
    id: "interface-design-systems",
    title: "Design Systems & Visual Grammar Exploration",
    medium: "Figma • Typographic Architecture • Micro-Interactions",
    year: "2023 – Present",
    category: "Design & Systems",
    description: "Bespoke design systems investigating typographic scale, tactile affordances, optical spacing, and minimalist information density. Rooted in formal design theory (Top 2% in NPTEL Understanding Design).",
    tags: ["Design Systems", "Typography", "Figma", "Interaction Design", "Swiss Design"],
    gradientTheme: "linear-gradient(135deg, #1e293b, #0f172a)",
    palette: ["#0f172a", "#1e293b", "#38bdf8", "#f8fafc"],
    notes: "Good typography creates quiet clarity. When letter-spacing, line-height, and rhythm are calibrated with precision, words communicate before they are even read."
  },
  {
    id: "game-mechanics-prototyping",
    title: "Physics & Game Mechanics Prototypes",
    medium: "Unity 3D • C# • State Machine Architectures",
    year: "2023",
    category: "3D & Interactive",
    description: "Experimental game prototypes testing kinematic character controllers, procedural physics reactions, and real-time state machines.",
    tags: ["Unity", "C#", "Game Physics", "Kinematics", "State Machines"],
    gradientTheme: "linear-gradient(135deg, #18181b, #09090b)",
    palette: ["#09090b", "#27272a", "#a1a1aa", "#14b8a6"],
    notes: "Game mechanics are pure system design: inputs, state transforms, feedback loops, and edge-case physics resolution."
  }
];
