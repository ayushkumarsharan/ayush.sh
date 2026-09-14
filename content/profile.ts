import type { ModeId, EvidenceType } from './modes';

export interface Profile {
  name: string;
  wordmark: string;
  role: string;
  identity: string;
  taglines: string[];
  location: string;
  email: string;
  phone: string;
  phoneVisibility: 'public' | 'request';
  linkedin: string;
  github: string;
  bioBrief: string;
  narrative: string;
  stats: { value: string; label: string; context: string }[];
  footerNote: string;

  // Universe Portal: Core identity
  coreStatement: string;
  portalGreeting: string;
  identityNarrative: string[];
  personalityType?: string;
  personalDimensions?: {
    label: string;
    description: string;
    visibility: 'public' | 'discovery' | 'life-mode';
  }[];
}

export const profile: Profile = {
  name: "Ayush Kumar Sharan",
  wordmark: "AYUSH KUMAR SHARAN",
  role: "Systems & Automation Engineer",
  identity: "Engineer • Builder • Problem Solver",
  taglines: [
    "Building systems. Exploring ideas.",
    "Somewhere between systems engineering and creative curiosity.",
    "Technology, research, and everything in between.",
    "Precision in automation. Curiosity in design.",
    "I contain multitudes."
  ],
  location: "Noida / Bengaluru, India",
  email: "ayuskumarsharan@gmail.com",
  phone: "+91 9667972192",
  phoneVisibility: 'request',
  linkedin: "https://linkedin.com/in/ayush-kumar-sharan",
  github: "https://github.com/ayushkumarsharan",
  bioBrief: "Systems and Automation Engineer working across software development, QA automation, cloud infrastructure, backend API validation, and production systems. I approach engineering problems end-to-end: understand the system, investigate failure modes, implement or automate a solution, and verify the result.",
  narrative: `I work at the intersection of quality engineering, cloud systems, and thoughtful design. At M2P, my work spans production sprint development and QA, including feature and bug-fix implementation, AI-assisted coding, Playwright automation, API validation, and release testing across fintech platforms. Before that, at Thales, I worked with avionics and inflight entertainment systems where system fault-tolerance is mission-critical.

I'm naturally drawn to problems spanning multiple disciplines. My IEEE-published research explored the convergence of quantum networking and machine learning for advanced signal processing, while my creative experiments range from 3D environment optimization in Unreal/Unity to visual arts, watercolor, and interactive tools.

I graduated as the University Gold Medallist in IT & Computer Science from Amity University, Noida. I treat this website as a living canvas—a place where technical rigor meets personal curiosity.`,
  stats: [
    { value: "2+", label: "Years in Industry", context: "Fintech, Aviation & Cloud" },
    { value: "1", label: "IEEE Publication", context: "Quantum Signal Processing" },
    { value: "3", label: "Major Awards", context: "ICRITO, InCITe & Technovate" },
    { value: "8.81", label: "CGPA (Gold Medal)", context: "B.Tech IT & CS Distinction" },
    { value: "76%", label: "Cloud Cost Saved", context: "Pixel Streaming on AWS/GCP" },
    { value: "6+", label: "Certifications", context: "Cloud, Cisco & Machine Learning" }
  ],
  footerNote: "Designed & engineered by Ayush Kumar Sharan as a part-time project — powered by curiosity, precision, and modern web craft.",

  // Universe Portal: Core identity
  coreStatement: "Understand the system. Find the problem. Build the solution. Make it useful.",
  portalGreeting: "I like understanding what is happening underneath things — and then building something useful with what I find.",
  identityNarrative: [
    "I have never been particularly interested in learning technology just to be able to say that I know it.",
    "What interests me is what happens when something does not work. Why did it fail? Where is the real problem? What is the system doing underneath what I can see? Can I change it? Automate it? Simplify it? Build something better around it?",
    "That instinct has followed me through very different kinds of work.",
    "On paper, that can look scattered. Fintech. QA. Automation. Cloud. Aviation. AI. Quantum. Game development. Mobile applications. 3D. Networking. Cybersecurity. Design.",
    "To me, it has always been the same pursuit.",
    "Understand the system. Find the problem. Build the solution. Make it useful."
  ],
  personalityType: "INFJ-T",
  personalDimensions: [
    {
      label: "INFJ-T — The Advocate",
      description: "An introspective, pattern-seeking personality drawn to deep understanding, meaningful connections, and purposeful action. Approaches problems through intuition refined by analysis.",
      visibility: 'life-mode',
    },
    {
      label: "Vedic Astrology & Palmistry",
      description: "A personal practice of studying Vedic astrology, palmistry, and gemstone properties — not as pseudoscience, but as an ancient framework for understanding human patterns. I explore these to help people, not to invoke fear.",
      visibility: 'life-mode',
    },
    {
      label: "Interdisciplinary Curiosity",
      description: "The recurring pattern underneath everything: understand, question, explore, build, break, learn, improve.",
      visibility: 'public',
    }
  ],
};
