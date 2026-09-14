import type { ModeId, EvidenceType } from './modes';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
  frame: string;
  summary: string;
  tags: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  modes: ModeId[];
  evidenceType: EvidenceType;
}

export const experiences: Experience[] = [
  {
    id: "m2p",
    company: "M2P Fintech",
    role: "QA & Automation Engineer",
    period: "October 2025 – Present",
    current: true,
    location: "Noida / Remote",
    frame: "Validating the distributed systems that move money.",
    summary: "Participating directly in production sprints across development and quality engineering, building Playwright POM frameworks, and validating backend APIs.",
    tags: ["Playwright", "TypeScript", "POM Architecture", "REST API", "Microservices", "Fintech", "CI/CD", "Kafka"],
    highlights: [
      "Contribute 4-5 feature and bug-fix tasks per production sprint while concurrently validating other developers' work.",
      "Implement feature enhancements and production bug fixes by understanding existing code structure and tracing application behavior.",
      "Review and refine AI-generated code for correctness, architectural fit, edge cases, and integration impact before validation.",
      "Build resilient Playwright-based E2E automation frameworks using TypeScript and modular Page Object Model (POM) architecture.",
      "Validate fintech microservices, e-commerce checkout flows, and backend APIs through regression, sanity, hotfix, and release testing.",
      "Design prompt-driven backend API automation workflows for Merchant Management Systems utilizing structured JSON payload validation."
    ],
    metrics: [
      { label: "Sprint Output", value: "4-5 Fixes/Features" },
      { label: "Automation Architecture", value: "Playwright + TS" }
    ],
    modes: ['engineer', 'builder', 'journey'],
    evidenceType: 'professional'
  },
  {
    id: "thales",
    company: "Thales",
    role: "Systems & Avionics Engineer",
    period: "March 2024 – March 2025",
    current: false,
    location: "Noida / Bengaluru",
    frame: "Engineering operational reliability where failure is not an option.",
    summary: "Supported high-reliability airborne avionics and connected inflight entertainment (IFE) hardware/software ecosystems with rigorous monitoring, diagnostics, and deployment procedures.",
    tags: ["Avionics", "IFE Systems", "System Monitoring", "Linux", "Troubleshooting", "Operational Reliability"],
    highlights: [
      "Supported commercial aircraft avionics and inflight entertainment systems with a focus on deployment, troubleshooting, and operational reliability.",
      "Worked across system behavior, issue investigation, and operational support in an aviation environment where reliability and controlled releases were critical.",
      "Conducted root-cause analysis on complex distributed hardware/software anomalies, collaborating with global systems engineering divisions."
    ],
    metrics: [
      { label: "Industry", value: "Aerospace & Defense" },
      { label: "Core Priority", value: "Zero Downtime" }
    ],
    modes: ['engineer', 'journey', 'thinker'],
    evidenceType: 'professional'
  },
  {
    id: "tech-mahindra",
    company: "Tech Mahindra Makers Lab",
    role: "Cloud & Development Trainee",
    period: "June 2023 – September 2023",
    current: false,
    location: "Noida",
    frame: "Connecting cloud infrastructure with immersive 3D technology & AI.",
    summary: "R&D focused on interactive 3D rendering pipelines, cloud pixel streaming cost-optimization, and data engineering for India's localized LLM initiative.",
    tags: ["AWS", "GCP", "Unity", "Unreal Engine", "Blender", "Pixel Streaming", "LLM", "Indus Project"],
    highlights: [
      "Architected cost-effective cloud deployment infrastructure on AWS and GCP for Unreal Engine Pixel Streaming applications, driving down hosting operational expenses by 76%.",
      "Designed and modeled interactive 3D virtual environments and spatial assets using Unity, Unreal Engine 5, and Blender.",
      "Contributed to data engineering and localized linguistic dataset operations for Project Indus—the landmark India-focused foundational LLM initiative."
    ],
    metrics: [
      { label: "Hosting Cost Reduction", value: "76%" },
      { label: "R&D Initiative", value: "Indus LLM & 3D" }
    ],
    modes: ['engineer', 'builder', 'creative', 'explorer', 'journey'],
    evidenceType: 'professional'
  }
];
