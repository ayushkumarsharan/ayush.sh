export interface LabExperiment {
  id: string;
  title: string;
  category: "AI & ML" | "Web & UI" | "Systems & Cloud" | "3D & Creative" | "Research";
  status: "Idea" | "Exploring" | "Building" | "Experiment" | "Completed";
  date: string;
  summary: string;
  tools: string[];
  notes: string;
  link?: string;
}

export const labExperiments: LabExperiment[] = [
  {
    id: "exp-01",
    title: "Quantum Superposition & Wave Interference Canvas",
    category: "Research",
    status: "Completed",
    date: "2024",
    summary: "An interactive mathematical canvas visualizing quantum state probability amplitudes, phase coherence, and classical wave superposition in real-time.",
    tools: ["HTML5 Canvas", "TypeScript", "Complex Vector Math", "Physics Simulation"],
    notes: "Built to translate mathematical equations from my IEEE research paper into tactile, intuitive visual representations.",
    link: "/research"
  },
  {
    id: "exp-02",
    title: "Prompt-Driven API Assertion Generator",
    category: "AI & ML",
    status: "Building",
    date: "2025",
    summary: "Experimental utility converting OpenAPI/Swagger specifications and natural language business rules into resilient TypeScript Playwright API test suites.",
    tools: ["TypeScript", "Playwright", "LLM Structured JSON", "AST Parsing"],
    notes: "Exploring how structured prompt engineering can eliminate boilerplate test suite scaffolding while maintaining strict type safety."
  },
  {
    id: "exp-03",
    title: "Editorial Design System with Pure CSS Tokens",
    category: "Web & UI",
    status: "Completed",
    date: "2026",
    summary: "A zero-framework web architecture exploring modern typography, tactile CSS grain overlays, dark/light contrast geometry, and sub-second load times.",
    tools: ["Next.js", "Vanilla CSS", "CSS Custom Properties", "Intersection Observer"],
    notes: "The foundational design system powering this very website. No template libraries, no generic Tailwind utilities—pure handcrafted craft.",
    link: "/"
  },
  {
    id: "exp-04",
    title: "Cloud Spot-Instance Heartbeat Orchestrator",
    category: "Systems & Cloud",
    status: "Completed",
    date: "2023",
    summary: "Lightweight session-aware daemon that dynamically provisions and de-provisions high-cost GPU compute nodes based on WebRTC client presence.",
    tools: ["AWS SDK", "GCP Compute Engine", "Node.js", "WebRTC Signalling"],
    notes: "Achieved 76% reduction in cloud infrastructure expenses during 3D pixel streaming deployments at Makers Lab."
  },
  {
    id: "exp-05",
    title: "Spatial Lighting & Atmospheric Shaders in Blender",
    category: "3D & Creative",
    status: "Experiment",
    date: "2024",
    summary: "Procedural volumetric fog and Rayleigh scattering shader nodes studying how atmospheric particle density affects contrast and depth perception.",
    tools: ["Blender", "Cycles Engine", "Procedural Shaders", "Ray Tracing"],
    notes: "Investigating how physical photon behavior informs digital contrast models and UI dark mode color tuning."
  },
  {
    id: "exp-06",
    title: "Decentralized Fault-Tolerant State Machine Engine",
    category: "Systems & Cloud",
    status: "Exploring",
    date: "2026",
    summary: "Theoretical blueprint for a deterministic event-sourced state machine with distributed gossip consensus for microservice checkout orchestration.",
    tools: ["TypeScript", "Distributed Systems Theory", "State Machines"],
    notes: "Analyzing edge failure modes in payment gateway state transitions."
  }
];
