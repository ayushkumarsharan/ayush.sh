import type { ModeId, EvidenceType } from './modes';

export interface IntersectionNode {
  id: string;
  label: string;
  category: "engineering" | "creativity" | "research" | "systems" | "life";
  tagline: string;
  description: string;
  connectedTo: string[];
  evidence: string;
  tools: string[];
  modes: ModeId[];
}

export const intersectionNodes: IntersectionNode[] = [
  {
    id: "automation",
    label: "Automation",
    category: "engineering",
    tagline: "Resilience through systematic test design",
    description: "Designing end-to-end test architectures, contract validations, and regression safety nets for high-throughput fintech microservices at M2P.",
    connectedTo: ["systems", "research", "api-testing"],
    evidence: "Built Playwright + TS frameworks reducing regression cycles by 60%.",
    tools: ["Playwright", "TypeScript", "Postman", "CI/CD"],
    modes: ['engineer', 'builder']
  },
  {
    id: "systems",
    label: "Cloud & Systems",
    category: "systems",
    tagline: "Scalable infrastructure & operational uptime",
    description: "Architecting cloud deployments across AWS and GCP, containerization with Docker, and high-availability operations in avionics and fintech.",
    connectedTo: ["automation", "creativity", "economics"],
    evidence: "76% cloud hosting cost reduction for Unreal Engine Pixel Streaming at Tech Mahindra Makers Lab.",
    tools: ["AWS", "GCP", "Docker", "Kubernetes", "Linux"],
    modes: ['engineer', 'explorer']
  },
  {
    id: "research",
    label: "Quantum & Research",
    category: "research",
    tagline: "Bridging theoretical physics with ML algorithms",
    description: "Investigating quantum state superposition and neural noise filtering for advanced communication systems.",
    connectedTo: ["automation", "ai-ml", "creativity"],
    evidence: "IEEE publication and Best Paper Award at ICRITO 2024.",
    tools: ["Python", "Qiskit", "NumPy", "LaTeX"],
    modes: ['explorer', 'engineer']
  },
  {
    id: "creativity",
    label: "3D & Creative Tech",
    category: "creativity",
    tagline: "Spatial environments, game mechanics & shaders",
    description: "Constructing interactive 3D virtual spaces in Unreal Engine 5, Unity, and Blender, merging visual immersion with cloud streaming.",
    connectedTo: ["systems", "design", "research"],
    evidence: "Modeled 3D assets and deployed low-latency WebRTC pixel streams for Makers Lab.",
    tools: ["Unreal Engine 5", "Unity", "Blender", "WebRTC"],
    modes: ['creative', 'builder', 'explorer']
  },
  {
    id: "design",
    label: "Visual Art & Design",
    category: "creativity",
    tagline: "Analog watercolor, ergonomics & typography",
    description: "Studying human visual perception, optical rhythm in typography, and physical analog watercolor studies.",
    connectedTo: ["creativity", "systems", "economics", "presentation"],
    evidence: "Ranked in Top 2% nationally in NPTEL Understanding Design (IIT).",
    tools: ["Watercolor", "Figma", "Design Systems", "Typography"],
    modes: ['creative', 'life']
  },
  {
    id: "economics",
    label: "Economics & Incentives",
    category: "systems",
    tagline: "Resource constraints & system equilibrium",
    description: "Applying macroeconomic models, queuing theory, and incentive structures to distributed software architecture.",
    connectedTo: ["systems", "design", "automation"],
    evidence: "Completed NPTEL Principles of Economics with distinction.",
    tools: ["Game Theory", "Queuing Theory", "Cost Modeling"],
    modes: ['thinker', 'explorer']
  },
  {
    id: "ai-ml",
    label: "Applied AI / ML",
    category: "research",
    tagline: "Signal estimation, LLM datasets & test synthesis",
    description: "Working with localized dataset operations for Project Indus (India-focused LLM) and training neural regressors for channel estimation.",
    connectedTo: ["research", "automation"],
    evidence: "Contributed to Tech Mahindra Indus Project and ML-based signal processing models.",
    tools: ["Python", "TensorFlow / PyTorch", "LLMs", "JSON Schema"],
    modes: ['explorer', 'builder', 'engineer']
  },
  {
    id: "api-testing",
    label: "API Architecture",
    category: "engineering",
    tagline: "Contract assertions & idempotency validation",
    description: "Validating financial transactions, merchant management interfaces, and card processing APIs under load.",
    connectedTo: ["automation", "systems"],
    evidence: "Prompt-driven JSON assertion frameworks for M2P Merchant Management.",
    tools: ["Postman", "Playwright API", "JSON Schema", "Kafka"],
    modes: ['engineer', 'builder']
  },
  {
    id: "psychology",
    label: "Psychology & Behavior",
    category: "life",
    tagline: "Cognitive patterns & personality",
    description: "Analyzing human behavior, historical contexts, and personality frameworks (INFJ-T, astrology) to understand the people using and building systems.",
    connectedTo: ["design", "economics"],
    evidence: "Applying behavioral empathy to design and team dynamics.",
    tools: ["Psychology", "Astrology", "Observation"],
    modes: ['life', 'thinker']
  },
  {
    id: "presentation",
    label: "Narrative & Presentation",
    category: "creativity",
    tagline: "Structuring complex ideas",
    description: "Expertise in crafting compelling presentations, analyzing film lore, and breaking down complex concepts for different audiences.",
    connectedTo: ["design", "creativity"],
    evidence: "Creating structural documents, PowerPoint decks, and Canva assets.",
    tools: ["Word", "PowerPoint", "Canva", "Writing"],
    modes: ['creative', 'builder', 'life']
  }
];
