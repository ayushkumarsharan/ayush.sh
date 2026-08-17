export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  honors: { title: string; subtitle: string; description: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  code?: string;
  status: "Completed" | "In Progress" | "Ranked Top 2%";
  category: "Cloud" | "Networking" | "Computer Science & Design" | "Economics";
  date?: string;
  description: string;
  badgeText?: string;
}

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology & Computer Science",
  institution: "Amity University",
  location: "Noida, India",
  period: "August 2020 – July 2024",
  grade: "CGPA: 8.81 / 10.00 — First Division with Distinction",
  honors: [
    {
      title: "University Gold Medallist",
      subtitle: "Academic Excellence Rank 1",
      description: "Conferred for attaining the highest academic standing and rigorous scholastic distinction across the graduating cohort."
    },
    {
      title: "Shree Baljit Shastri Award",
      subtitle: "Human & Traditional Values",
      description: "Bestowed upon a select individual exemplifying outstanding human values, integrity, humility, and positive community leadership."
    }
  ]
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified SysOps Administrator Associate",
    issuer: "Amazon Web Services",
    code: "SOA-C02",
    status: "In Progress",
    category: "Cloud",
    description: "In-depth validation of deploying, managing, and operating scalable, highly available systems on AWS."
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    status: "Completed",
    category: "Cloud",
    description: "Foundational mastery of cloud services, security, privacy, compliance, and Azure architecture principles."
  },
  {
    name: "Cisco CyberOps Associate",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Security operations concepts, monitoring, network vulnerability analysis, and incident response fundamentals."
  },
  {
    name: "CCNAv7: Routing, Switching & Wireless",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Architecting enterprise LAN/WLAN topologies, VLAN segmentation, and dynamic routing protocols."
  },
  {
    name: "CCNA: Enterprise Networking & Security",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Scalable WAN infrastructure, network automation architectures, VPN security, and QoS configuration."
  },
  {
    name: "Understanding Design",
    issuer: "NPTEL / IIT",
    status: "Ranked Top 2%",
    category: "Computer Science & Design",
    description: "Ranked in the top 2% nationwide in foundational design thinking, human visual perception, and ergonomics."
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL / IIT",
    status: "Completed",
    category: "Computer Science & Design",
    description: "Mathematical formulation of supervised learning, decision surfaces, neural representations, and validation theory."
  },
  {
    name: "Principles of Economics",
    issuer: "NPTEL / IIT",
    status: "Completed",
    category: "Economics",
    description: "Micro & macro market dynamics, resource optimization models, incentives, and economic decision frameworks."
  }
];

export const achievements = [
  {
    title: "University Gold Medal",
    context: "Amity University (2020–2024)",
    reason: "Awarded for supreme academic distinction and securing the highest CGPA (8.81/10) in B.Tech IT & CS."
  },
  {
    title: "IEEE Publication & Best Paper Award",
    context: "ICRITO 2024 (IEEE Xplore)",
    reason: "Peer-reviewed publication integrating quantum networking with ML signal processing; awarded Best Paper among global submissions."
  },
  {
    title: "1st Place Winner — Technovate 2024",
    context: "Technovate Innovation Summit",
    reason: "Secured first prize across competitive technical project presentations for quantum-assisted communication architecture."
  },
  {
    title: "Most Promising Project Award",
    context: "Tech-Genesis / InCITe 2024",
    reason: "Recognized by industry evaluators for impactful research bridging theoretical physics and applied engineering."
  },
  {
    title: "76% Cloud Cost Reduction",
    context: "Tech Mahindra Makers Lab",
    reason: "Engineered automated cloud autoscaling for Unreal Engine 5 Pixel Streaming, cutting continuous infrastructure expenditure by three-quarters."
  },
  {
    title: "Top 2% National Ranking — Understanding Design",
    context: "NPTEL / IIT",
    reason: "Nationwide top-tier placement demonstrating formal mastery of visual grammar, user cognition, and industrial design aesthetics."
  }
];
