export interface NowData {
  lastUpdated: string;
  location: string;
  focus: {
    working: { title: string; detail: string };
    learning: { title: string; detail: string };
    experimenting: { title: string; detail: string };
    reading: { title: string; detail: string };
    building: { title: string; detail: string };
  };
  principles: string[];
}

export const nowData: NowData = {
  lastUpdated: "August 2026",
  location: "Noida / NCR, India",
  focus: {
    working: {
      title: "Fintech Automation Architecture at M2P",
      detail: "Scaling Playwright E2E automation pipelines, refining backend API assertion matrices, and ensuring production stability for core payment systems."
    },
    learning: {
      title: "AWS SysOps Administrator Associate (SOA-C02)",
      detail: "Deep-diving into advanced AWS infrastructure operations, high-availability VPC topologies, CloudWatch alerting thresholds, and automated remediation."
    },
    experimenting: {
      title: "Prompt-driven Test Synthesis & Signal Visualization",
      detail: "Exploring structured schema validation techniques and interactive mathematical canvas simulations for complex systems."
    },
    reading: {
      title: "Distributed Systems Architecture & Design Classics",
      detail: "Re-reading foundational texts on distributed consensus, network reliability patterns, and modern visual design principles."
    },
    building: {
      title: "This Digital Home & Creative Archive",
      detail: "Continuously polishing this personal space as a living demonstration of modern web performance, accessible typography, and thoughtful craft."
    }
  },
  principles: [
    "Prioritize clarity over cleverness; clean systems outlive complex ones.",
    "Make time for deliberate analog practice—sketching, painting, and deep reading.",
    "Let evidence and craft carry the weight rather than exaggerated claims.",
    "Learn across disciplines; the most exciting ideas sit at the intersections."
  ]
};
