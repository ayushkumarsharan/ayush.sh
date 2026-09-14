import type { ModeId, EvidenceType } from './modes';

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  honors: { title: string; subtitle: string; description: string }[];
  modes: ModeId[];
  evidenceType: EvidenceType;
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
  verifyUrl?: string;
  modes: ModeId[];
  evidenceType: EvidenceType;
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
  ],
  modes: ['engineer', 'journey', 'thinker'],
  evidenceType: 'academic',
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified SysOps Administrator Associate",
    issuer: "Amazon Web Services",
    code: "SOA-C02",
    status: "In Progress",
    category: "Cloud",
    description: "In-depth validation of deploying, managing, and operating scalable, highly available systems on AWS.",
    modes: ['engineer', 'explorer'],
    evidenceType: 'professional',
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    status: "Completed",
    category: "Cloud",
    description: "Foundational mastery of cloud services, security, privacy, compliance, and Azure architecture principles.",
    verifyUrl: "https://coursera.org/share/93e8426ca7e27f5809b98c39b09ce979",
    modes: ['engineer'],
    evidenceType: 'professional',
  },
  {
    name: "Cisco CyberOps Associate",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Security operations concepts, monitoring, network vulnerability analysis, and incident response fundamentals.",
    verifyUrl: "https://web.cvent.com/survey/certificate/a7bf66fe-432f-4d7b-a5e3-610f367fb0f9?r=3dc9f13f-00d0-4179-a53d-54b189cee1e7&code=Bronze+certificate",
    modes: ['engineer', 'explorer'],
    evidenceType: 'professional',
  },
  {
    name: "CCNAv7: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Architecting enterprise LAN/WLAN topologies, VLAN segmentation, and dynamic routing protocols.",
    verifyUrl: "https://www.credly.com/badges/f8fb3e0f-9df7-4261-b4fe-a3766db19c8e/public_url",
    modes: ['engineer'],
    evidenceType: 'professional',
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Foundational network architecture, IPv4/IPv6 addressing, switching concepts, and router configuration.",
    verifyUrl: "https://www.credly.com/badges/8b9f0812-41d6-429a-9e3c-8dab08b1efe1/public_url",
    modes: ['engineer'],
    evidenceType: 'professional',
  },
  {
    name: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    status: "Completed",
    category: "Networking",
    description: "Scalable WAN infrastructure, network automation architectures, VPN security, and QoS configuration.",
    verifyUrl: "https://www.credly.com/badges/5da7ff5c-f572-46b6-9ce8-e8176bd1adce/linked_in_profile",
    modes: ['engineer'],
    evidenceType: 'professional',
  },
  {
    name: "Salesforce Platform",
    issuer: "Salesforce / SmartInternz",
    status: "Completed",
    category: "Computer Science & Design",
    description: "Enterprise CRM platform fundamentals, Apex development workflows, and cloud application architecture.",
    verifyUrl: "https://smartinternz.com/internships/salesforce_certificates/81dae96e79ec97a41a71b87f6abd8968",
    modes: ['engineer'],
    evidenceType: 'professional',
  },
  {
    name: "Understanding Design",
    issuer: "NPTEL / IIT",
    status: "Ranked Top 2%",
    category: "Computer Science & Design",
    description: "Ranked in the top 2% nationwide in foundational design thinking, human visual perception, and ergonomics.",
    modes: ['creative', 'thinker'],
    evidenceType: 'academic',
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL / IIT",
    status: "Completed",
    category: "Computer Science & Design",
    description: "Mathematical formulation of supervised learning, decision surfaces, neural representations, and validation theory.",
    modes: ['engineer', 'explorer'],
    evidenceType: 'academic',
  },
  {
    name: "Principles of Economics",
    issuer: "NPTEL / IIT",
    status: "Completed",
    category: "Economics",
    description: "Micro & macro market dynamics, resource optimization models, incentives, and economic decision frameworks.",
    modes: ['thinker', 'life'],
    evidenceType: 'academic',
  }
];

export const achievements = [
  {
    title: "University Gold Medal",
    context: "Amity University (2020–2024)",
    reason: "Awarded for supreme academic distinction and securing the highest CGPA (8.81/10) in B.Tech IT & CS.",
    modes: ['journey', 'engineer'] as ModeId[],
    evidenceType: 'academic' as EvidenceType,
  },
  {
    title: "IEEE Publication & Best Paper Award",
    context: "ICRITO 2024 (IEEE Xplore)",
    reason: "Peer-reviewed publication integrating quantum networking with ML signal processing; awarded Best Paper among global submissions.",
    link: "https://ieeexplore.ieee.org/abstract/document/10522244",
    modes: ['engineer', 'explorer', 'builder', 'journey'] as ModeId[],
    evidenceType: 'research' as EvidenceType,
  },
  {
    title: "1st Place Winner — Technovate 2024",
    context: "Technovate Innovation Summit",
    reason: "Secured first prize across competitive technical project presentations for quantum-assisted communication architecture.",
    modes: ['builder', 'journey'] as ModeId[],
    evidenceType: 'research' as EvidenceType,
  },
  {
    title: "Most Promising Project Award",
    context: "Tech-Genesis / InCITe 2024",
    reason: "Recognized by industry evaluators for impactful research bridging theoretical physics and applied engineering.",
    modes: ['explorer', 'journey'] as ModeId[],
    evidenceType: 'research' as EvidenceType,
  },
  {
    title: "76% Cloud Cost Reduction",
    context: "Tech Mahindra Makers Lab",
    reason: "Engineered automated cloud autoscaling for Unreal Engine 5 Pixel Streaming, cutting continuous infrastructure expenditure by three-quarters.",
    modes: ['engineer', 'builder'] as ModeId[],
    evidenceType: 'professional' as EvidenceType,
  },
  {
    title: "Top 2% National Ranking — Understanding Design",
    context: "NPTEL / IIT",
    reason: "Nationwide top-tier placement demonstrating formal mastery of visual grammar, user cognition, and industrial design aesthetics.",
    modes: ['creative', 'thinker'] as ModeId[],
    evidenceType: 'academic' as EvidenceType,
  },
  {
    title: "Shree Baljit Shastri Award",
    context: "Amity University",
    reason: "Recognized for exceptional human values, integrity, humility, and positive community leadership — a select honor beyond academic merit.",
    modes: ['journey', 'life', 'thinker'] as ModeId[],
    evidenceType: 'academic' as EvidenceType,
  },
  {
    title: "AUUP 100% Merit Scholarship",
    context: "Amity University",
    reason: "Full academic merit scholarship awarded for sustained scholastic excellence throughout the undergraduate program.",
    modes: ['journey'] as ModeId[],
    evidenceType: 'academic' as EvidenceType,
  }
];
