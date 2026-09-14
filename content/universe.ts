import { ModeId } from './modes';

export type NodeType =
  | "person"
  | "experience"
  | "project"
  | "technology"
  | "achievement"
  | "interest"
  | "thought"
  | "education"
  | "mode_coordinate";

export type RelationType =
  | "worked-with"
  | "built-with"
  | "learned-through"
  | "inspired-by"
  | "related-to"
  | "demonstrates"
  | "explores"
  | "achieved";

export interface Relationship {
  targetId: string;
  type: RelationType;
}

export interface UniverseNode {
  id: string;
  type: NodeType;
  title: string;
  subtitle?: string;
  description?: string;
  modes: ModeId[];
  relationships: Relationship[];
  priority: number; // 1-10 scale for gravitational weight
}

export const universeGraph: Record<string, UniverseNode> = {
  // --- CORE COORDINATES ---
  "coord-engineer": {
    id: "coord-engineer",
    type: "mode_coordinate",
    title: "ENGINEER",
    modes: ["engineer"],
    relationships: [],
    priority: 10,
  },
  "coord-builder": {
    id: "coord-builder",
    type: "mode_coordinate",
    title: "BUILDER",
    modes: ["builder"],
    relationships: [],
    priority: 10,
  },
  "coord-explorer": {
    id: "coord-explorer",
    type: "mode_coordinate",
    title: "EXPLORER",
    modes: ["explorer"],
    relationships: [],
    priority: 10,
  },
  "coord-creative": {
    id: "coord-creative",
    type: "mode_coordinate",
    title: "CREATIVE",
    modes: ["creative"],
    relationships: [],
    priority: 10,
  },
  "coord-thinker": {
    id: "coord-thinker",
    type: "mode_coordinate",
    title: "THINKER",
    modes: ["thinker"],
    relationships: [],
    priority: 10,
  },
  "coord-journey": {
    id: "coord-journey",
    type: "mode_coordinate",
    title: "JOURNEY",
    modes: ["journey"],
    relationships: [],
    priority: 10,
  },

  // --- EXPERIENCES ---
  "exp-m2p": {
    id: "exp-m2p",
    type: "experience",
    title: "M2P Fintech",
    subtitle: "Software Engineer",
    description: "Production sprint development and QA automation across fintech platforms.",
    modes: ["engineer", "journey"],
    priority: 9,
    relationships: [
      { targetId: "tech-playwright", type: "worked-with" },
      { targetId: "tech-typescript", type: "worked-with" },
      { targetId: "tech-api-testing", type: "worked-with" },
      { targetId: "tech-cicd", type: "worked-with" }
    ]
  },
  "exp-tech-mahindra": {
    id: "exp-tech-mahindra",
    type: "experience",
    title: "Tech Mahindra Makers Lab",
    subtitle: "Cloud & Unreal Engine Innovator",
    description: "Engineered automated cloud autoscaling for Unreal Engine 5 Pixel Streaming.",
    modes: ["engineer", "builder", "creative"],
    priority: 9,
    relationships: [
      { targetId: "ach-76-percent", type: "achieved" },
      { targetId: "tech-aws", type: "worked-with" },
      { targetId: "tech-gcp", type: "worked-with" },
      { targetId: "tech-linux", type: "worked-with" },
      { targetId: "tech-pixel-streaming", type: "worked-with" },
      { targetId: "tech-unreal", type: "worked-with" }
    ]
  },

  // --- PROJECTS ---
  "proj-quantum": {
    id: "proj-quantum",
    type: "project",
    title: "Quantum Signal Processing",
    modes: ["engineer", "explorer", "thinker"],
    priority: 10,
    relationships: [
      { targetId: "ach-ieee", type: "achieved" },
      { targetId: "tech-qkd", type: "explores" },
      { targetId: "tech-ml", type: "built-with" },
      { targetId: "tech-routing", type: "explores" }
    ]
  },

  // --- ACHIEVEMENTS (Gravitational Points) ---
  "ach-76-percent": {
    id: "ach-76-percent",
    type: "achievement",
    title: "76% Cost Reduction",
    description: "Achieved through intelligent cloud orchestration and infrastructure scaling.",
    modes: ["engineer", "builder"],
    priority: 10,
    relationships: [
      { targetId: "exp-tech-mahindra", type: "related-to" }
    ]
  },
  "ach-ieee": {
    id: "ach-ieee",
    type: "achievement",
    title: "IEEE Publication",
    description: "Peer-reviewed research on quantum networking and machine learning.",
    modes: ["engineer", "explorer", "thinker"],
    priority: 10,
    relationships: [
      { targetId: "proj-quantum", type: "related-to" }
    ]
  },
  "ach-gold-medal": {
    id: "ach-gold-medal",
    type: "achievement",
    title: "University Gold Medal",
    subtitle: "8.81 CGPA",
    modes: ["journey", "engineer"],
    priority: 8,
    relationships: []
  },

  // --- TECHNOLOGIES (Connective Tissue) ---
  "tech-playwright": { id: "tech-playwright", type: "technology", title: "Playwright", modes: ["engineer"], priority: 6, relationships: [] },
  "tech-typescript": { id: "tech-typescript", type: "technology", title: "TypeScript", modes: ["engineer", "builder"], priority: 8, relationships: [] },
  "tech-api-testing": { id: "tech-api-testing", type: "technology", title: "API Testing", modes: ["engineer"], priority: 5, relationships: [] },
  "tech-cicd": { id: "tech-cicd", type: "technology", title: "CI/CD", modes: ["engineer"], priority: 7, relationships: [] },
  "tech-aws": { id: "tech-aws", type: "technology", title: "AWS", modes: ["engineer", "builder"], priority: 8, relationships: [] },
  "tech-gcp": { id: "tech-gcp", type: "technology", title: "GCP", modes: ["engineer", "builder"], priority: 7, relationships: [] },
  "tech-linux": { id: "tech-linux", type: "technology", title: "Linux Systems", modes: ["engineer"], priority: 8, relationships: [] },
  "tech-pixel-streaming": { id: "tech-pixel-streaming", type: "technology", title: "Pixel Streaming", modes: ["engineer", "creative"], priority: 6, relationships: [] },
  "tech-unreal": { id: "tech-unreal", type: "technology", title: "Unreal Engine 5", modes: ["builder", "creative"], priority: 7, relationships: [] },
  "tech-qkd": { id: "tech-qkd", type: "technology", title: "QKD", modes: ["explorer", "thinker"], priority: 5, relationships: [] },
  "tech-ml": { id: "tech-ml", type: "technology", title: "Machine Learning", modes: ["engineer", "explorer"], priority: 8, relationships: [] },
  "tech-routing": { id: "tech-routing", type: "technology", title: "Routing Architecture", modes: ["engineer"], priority: 6, relationships: [] },
};

// Helper to query the graph based on mode/query
export const queryGraph = (mode: ModeId | 'all'): UniverseNode[] => {
  const nodes = Object.values(universeGraph);
  if (mode === 'all') return nodes;
  return nodes.filter(node => node.modes.includes(mode)).sort((a, b) => b.priority - a.priority);
};

export const getRelatedNodes = (nodeId: string): UniverseNode[] => {
  const node = universeGraph[nodeId];
  if (!node) return [];
  // Include explicit targets
  const related = node.relationships.map(rel => universeGraph[rel.targetId]).filter(Boolean);
  
  // Include nodes that target THIS node (bidirectional resolution)
  const incoming = Object.values(universeGraph).filter(n => 
    n.relationships.some(rel => rel.targetId === nodeId)
  );
  
  // Deduplicate
  const combined = [...related, ...incoming];
  return Array.from(new Set(combined));
};
