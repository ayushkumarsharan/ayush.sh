export interface QAItem {
  id: string;
  question: string;
  category: "Experience" | "Research" | "Skills" | "Education" | "Creative" | "Contact";
  keywords: string[];
  answer: string;
  citations?: { label: string; url: string }[];
}

export const aiKnowledgeBase: QAItem[] = [
  {
    id: "role-current",
    question: "What is Ayush's current role?",
    category: "Experience",
    keywords: ["current", "role", "job", "m2p", "work", "company", "doing", "now"],
    answer: "Ayush is currently working as a QA & Automation Engineer at M2P Fintech (October 2025 – Present). He designs resilient Playwright-based E2E automation frameworks using TypeScript with Page Object Model (POM) architecture, tests critical microservices, ecommerce checkout engines, and card processing APIs, and designs prompt-driven API test workflows for Merchant Management Systems.",
    citations: [{ label: "View Experience", url: "/#work" }]
  },
  {
    id: "experience-thales",
    question: "What did Ayush do at Thales?",
    category: "Experience",
    keywords: ["thales", "avionics", "aviation", "inflight", "ife", "reliability"],
    answer: "At Thales (March 2024 – March 2025), Ayush worked as a Systems & Avionics Engineer. He supported avionics and inflight entertainment systems with a heavy emphasis on operational reliability, telemetry monitoring, deployment procedures, and root-cause hardware/software troubleshooting.",
    citations: [{ label: "View Experience", url: "/#work" }]
  },
  {
    id: "experience-makers-lab",
    question: "What did Ayush do at Tech Mahindra Makers Lab?",
    category: "Experience",
    keywords: ["tech mahindra", "makers lab", "cloud", "pixel streaming", "3d", "unreal", "blender", "indus", "llm", "cost"],
    answer: "At Tech Mahindra Makers Lab (June 2023 – September 2023), Ayush architected cloud infrastructure on AWS/GCP for Unreal Engine Pixel Streaming, cutting continuous hosting costs by 76%. He also designed interactive 3D virtual environments in Unity and Blender, and contributed to dataset curation for Project Indus (India-focused LLM).",
    citations: [{ label: "View Pixel Streaming Project", url: "/projects/cloud-pixel-streaming" }]
  },
  {
    id: "research-quantum",
    question: "What is Ayush's research about?",
    category: "Research",
    keywords: ["research", "quantum", "ieee", "paper", "icrito", "signal processing", "award", "technovate"],
    answer: "Ayush authored IEEE-published research titled 'Quantum-Driven Signal Processing for Next-Generation Communication Channels.' The paper explored combining quantum state superposition simulations with adaptive machine learning regressors to counteract turbulent noise in high-frequency channels. It won the Best Paper Award at IEEE ICRITO 2024, 1st Place at Technovate 2024, and Most Promising Project at InCITe 2024.",
    citations: [{ label: "Explore Research Blueprint", url: "/research" }]
  },
  {
    id: "education-academics",
    question: "Where did Ayush study and what honors did he receive?",
    category: "Education",
    keywords: ["education", "degree", "college", "amity", "gold medal", "cgpa", "marks", "university", "award", "baljit shastri"],
    answer: "Ayush earned his B.Tech in Information Technology & Computer Science from Amity University, Noida (2020–2024). He graduated as the University Gold Medallist with a CGPA of 8.81/10.00 (First Division with Distinction), and received the prestigious Shree Baljit Shastri Award for exceptional human and traditional values.",
    citations: [{ label: "View Credentials", url: "/#shelf" }]
  },
  {
    id: "tech-skills",
    question: "What are Ayush's main technical skills?",
    category: "Skills",
    keywords: ["skills", "technologies", "tech stack", "languages", "tools", "python", "typescript", "playwright", "aws", "docker"],
    answer: "Ayush's core technical toolkit includes: Languages (TypeScript, Python, Java, SQL), Quality & Automation (Playwright, Postman, API Testing, E2E, Regression, STLC), Cloud & Systems (AWS, GCP, Azure, Docker, Kubernetes, Argo CD, Linux, CI/CD), Data & Messaging (MongoDB, Kafka, Firebase, JSON), Observability (DataDog, DevTools), and Creative Tech (Unreal Engine 5, Unity, Blender, Figma).",
    citations: [{ label: "Explore Toolkit", url: "/#toolkit" }]
  },
  {
    id: "creative-hobbies",
    question: "What are Ayush's creative interests and hobbies?",
    category: "Creative",
    keywords: ["creative", "hobbies", "interests", "art", "watercolor", "painting", "drawing", "music", "3d", "gaming", "design"],
    answer: "Outside of engineering, Ayush practices observational watercolor and charcoal sketching, studies music dynamics and acoustic textures, experiments with 3D environments in Unreal Engine/Blender, and explores economics and incentive design. He also ranked in the Top 2% nationally in NPTEL's Understanding Design course.",
    citations: [{ label: "View Human Side", url: "/#human" }]
  },
  {
    id: "contact-info",
    question: "How can I contact or connect with Ayush?",
    category: "Contact",
    keywords: ["contact", "email", "phone", "linkedin", "hire", "message", "reach"],
    answer: "You can reach Ayush directly via email at ayuskumarsharan@gmail.com, phone at +91 9667972192, or on LinkedIn at linkedin.com/in/ayush-kumar-sharan.",
    citations: [{ label: "Go to Contact", url: "/#connect" }]
  }
];

export function findAIAnswer(query: string): QAItem | null {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return null;

  let bestMatch: QAItem | null = null;
  let highestScore = 0;

  for (const item of aiKnowledgeBase) {
    let score = 0;
    
    // Exact question match
    if (normalized.includes(item.question.toLowerCase())) {
      score += 10;
    }
    
    // Keyword matches
    for (const kw of item.keywords) {
      if (normalized.includes(kw)) {
        score += 2;
      }
    }
    
    // Category match
    if (normalized.includes(item.category.toLowerCase())) {
      score += 1.5;
    }

    if (score > highestScore && score >= 2) {
      highestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}
