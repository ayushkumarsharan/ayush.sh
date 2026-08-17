export interface Profile {
  name: string;
  wordmark: string;
  role: string;
  identity: string;
  taglines: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bioBrief: string;
  narrative: string;
  stats: { value: string; label: string; context: string }[];
  footerNote: string;
}

export const profile: Profile = {
  name: "Ayush Kumar Sharan",
  wordmark: "AYUSH KUMAR SHARAN",
  role: "Systems & Automation Engineer",
  identity: "Systems • Automation • Cloud • Research • Creative Technology",
  taglines: [
    "Building systems. Exploring ideas.",
    "Somewhere between systems engineering and creative curiosity.",
    "Technology, research, and everything in between.",
    "Precision in automation. Curiosity in design."
  ],
  location: "Noida / Bengaluru, India",
  email: "ayuskumarsharan@gmail.com",
  phone: "+91 9667972192",
  linkedin: "https://linkedin.com/in/ayush-kumar-sharan",
  github: "https://github.com/ayushkumarsharan",
  bioBrief: "Systems & Automation Engineer with hands-on experience in QA Automation, Cloud Infrastructure, API Testing, and DevOps workflows across fintech and aviation domains. University Gold Medallist and IEEE-published researcher.",
  narrative: `I work at the intersection of quality engineering, cloud systems, and thoughtful design. At M2P, I build scalable end-to-end automation frameworks for critical fintech microservices and payment rails—where reliability isn't just an aspiration, but a 24/7 reality. Before that, at Thales, I worked with avionics and inflight entertainment systems where system fault-tolerance is mission-critical.

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
  footerNote: "Designed & engineered by Ayush Kumar Sharan as a part-time project — powered by curiosity, precision, and modern web craft."
};
