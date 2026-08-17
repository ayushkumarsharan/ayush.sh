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
    summary: "Architecting enterprise-grade test automation and CI/CD validation for high-throughput fintech microservices, ecommerce checkout engines, and payment card platforms.",
    tags: ["Playwright", "TypeScript", "POM Architecture", "REST API", "Microservices", "Fintech", "CI/CD", "Kafka"],
    highlights: [
      "Built resilient Playwright-based E2E automation frameworks using TypeScript and modular Page Object Model (POM) architecture, cutting regression test execution time by 60%.",
      "Validated distributed fintech microservices, ecommerce checkout flows, and payment card processing systems through regression, sanity, hotfix, and production release testing.",
      "Engineered prompt-driven backend API automation workflows for Merchant Management Systems utilizing structured JSON payload validation and dynamic assertions.",
      "Collaborated across cross-functional product, development, and DevOps teams to isolate critical edge-case bugs and continuously monitor application uptime in distributed staging and prod environments."
    ],
    metrics: [
      { label: "Automation Architecture", value: "Playwright + TS" },
      { label: "Domain Focus", value: "Core Fintech & APIs" }
    ]
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
      "Supported commercial aircraft avionics and inflight entertainment systems, ensuring compliance with strict aviation security and reliability protocols.",
      "Managed deployment pipelines, real-time telemetry monitoring, and systematic hardware-in-the-loop troubleshooting for high-availability airborne systems.",
      "Conducted root-cause analysis on complex distributed hardware/software anomalies, collaborating with global systems engineering divisions."
    ],
    metrics: [
      { label: "Industry", value: "Aerospace & Defense" },
      { label: "Core Priority", value: "Zero Downtime" }
    ]
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
    ]
  }
];
