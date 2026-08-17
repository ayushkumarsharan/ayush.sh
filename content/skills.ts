export interface SkillItem {
  name: string;
  context: string;
  level?: "core" | "exploring" | "experienced";
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  capability: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: Record<string, SkillCategory> = {
  build: {
    title: "Build",
    capability: "Core Programming & Logic",
    description: "Writing maintainable, modular software and backend systems across diverse paradigms.",
    skills: [
      { name: "TypeScript", context: "E2E frameworks, modern web applications, typed APIs", level: "core", highlight: true },
      { name: "Python", context: "Data modeling, ML pipelines, automation scripts & research", level: "core", highlight: true },
      { name: "Java", context: "Android application architecture, OOP, backend microservices", level: "experienced" },
      { name: "SQL", context: "Relational queries, schema design, performance analysis", level: "experienced" },
      { name: "JSON / REST", context: "Schema validation, payload assertions, contract testing", level: "core" }
    ]
  },
  automate: {
    title: "Automate",
    capability: "Quality Engineering & Assurance",
    description: "Building scalable test architectures that catch subtle defects before production releases.",
    skills: [
      { name: "Playwright", context: "Cross-browser E2E automation with Page Object Model", level: "core", highlight: true },
      { name: "Postman", context: "API collection runners, pre-request scripts, automated suites", level: "core", highlight: true },
      { name: "API Testing", context: "Contract testing, idempotency validation, error boundaries", level: "core" },
      { name: "Regression & Sanity", context: "Production release validation, hotfix sign-offs", level: "core" },
      { name: "STLC & Test Design", context: "Test matrix formulation, edge-case isolation", level: "core" }
    ]
  },
  systems: {
    title: "Systems",
    capability: "Cloud Infrastructure & DevOps",
    description: "Deploying and orchestrating resilient containerized cloud environments.",
    skills: [
      { name: "AWS", context: "EC2, S3, IAM, CloudWatch, SysOps architecture", level: "core", highlight: true },
      { name: "GCP", context: "Compute Engine, Cloud Storage, pixel streaming instances", level: "experienced" },
      { name: "Azure", context: "Fundamentals (AZ-900), cloud governance concepts", level: "experienced" },
      { name: "Docker", context: "Containerization, multi-stage builds, isolated test environments", level: "core" },
      { name: "Kubernetes & Argo CD", context: "Declarative GitOps, cluster workload operations", level: "experienced" },
      { name: "Linux / Bash", context: "Server administration, shell scripting, performance diagnostics", level: "core" },
      { name: "CI/CD Workflows", context: "Automated test triggers, deployment gates, GitHub Actions", level: "core" }
    ]
  },
  data: {
    title: "Data / Backend",
    capability: "Persistence & Event Streams",
    description: "Working with data persistence, schema contracts, and streaming queues.",
    skills: [
      { name: "MongoDB", context: "Document persistence, aggregation queries, index design", level: "experienced" },
      { name: "Kafka", context: "Distributed event streaming, message queue verification", level: "experienced" },
      { name: "Firebase", context: "Realtime database, Cloud Functions, auth synchronization", level: "experienced" }
    ]
  },
  observe: {
    title: "Observe",
    capability: "Telemetry & Diagnostics",
    description: "Monitoring operational telemetry and isolating root cause anomalies.",
    skills: [
      { name: "DataDog", context: "APM tracing, metric dashboards, log aggregation alerts", level: "experienced" },
      { name: "Browser DevTools", context: "Network inspection, performance profiling, DOM diagnostics", level: "core" },
      { name: "Git & Jira", context: "Version control workflows, release tracking, bug triage", level: "core" }
    ]
  },
  create: {
    title: "Create",
    capability: "3D & Visual Craft",
    description: "Spatial modeling, real-time rendering engines, and human-centered design.",
    skills: [
      { name: "Unity", context: "Interactive 3D environments, C# scripting, simulation", level: "experienced" },
      { name: "Unreal Engine 5", context: "Pixel Streaming, Lumen lighting, spatial design", level: "experienced", highlight: true },
      { name: "Blender", context: "Hard-surface 3D modeling, UV unwrapping, asset creation", level: "experienced" },
      { name: "Figma & Canva", context: "Wireframing, design systems, visual presentation craft", level: "experienced" }
    ]
  },
  explore: {
    title: "Explore",
    capability: "Emerging Frontiers",
    description: "Areas of active study, interdisciplinary research, and ongoing experimentation.",
    skills: [
      { name: "Quantum Computing", context: "Superposition modeling, quantum networking theory", level: "exploring", highlight: true },
      { name: "Machine Learning", context: "Neural signal processing, regression models, NPTEL", level: "exploring" },
      { name: "Game Architecture", context: "State machines, entity systems, game mechanics", level: "exploring" },
      { name: "LLM Datasets", context: "Linguistic curation for Project Indus (Tech Mahindra)", level: "exploring" }
    ]
  }
};
