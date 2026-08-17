export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage: string;
  accentColor: string;
  navLinks: NavLink[];
  socialLinks: { platform: string; url: string; handle?: string; icon: string }[];
  projectStatement: string;
}

export const siteConfig: SiteConfig = {
  name: "Ayush Kumar Sharan",
  title: "Ayush Kumar Sharan — Systems, Automation & Creative Technology",
  description: "Systems & Automation Engineer with hands-on experience in QA Automation, Cloud Infrastructure, and published IEEE research in quantum-driven signal processing. University Gold Medallist.",
  author: "Ayush Kumar Sharan",
  url: "https://ayushkumarsharan.com",
  ogImage: "/og-image.png",
  accentColor: "#0d9488", // Refined deep teal accent
  navLinks: [
    { label: "Overview", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Intersection", href: "/#intersection" },
    { label: "Projects", href: "/#projects" },
    { label: "Research", href: "/research", badge: "IEEE" },
    { label: "Lab", href: "/lab", badge: "Live" },
    { label: "About", href: "/#about" },
    { label: "Now", href: "/now" }
  ],
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/ayush-kumar-sharan", handle: "ayush-kumar-sharan", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com/ayushkumarsharan", handle: "ayushkumarsharan", icon: "github" },
    { platform: "Email", url: "mailto:ayuskumarsharan@gmail.com", handle: "ayuskumarsharan@gmail.com", icon: "mail" },
    { platform: "Phone", url: "tel:+919667972192", handle: "+91 9667972192", icon: "phone" }
  ],
  projectStatement: "This website is a part-time personal project engineered by Ayush Kumar Sharan to explore modern web performance, accessible typography, and interdisciplinary visual storytelling."
};
