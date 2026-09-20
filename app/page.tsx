'use client';

import Hero from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import InterestsSection from "@/components/sections/InterestsSection";
import EducationShelf from "@/components/sections/EducationShelf";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <div className="universe-container" style={{ background: 'transparent', minHeight: '100vh', overflow: 'hidden' }}>
      <Hero />
      <Identity />
      <WorkSection />
      <ResearchSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <InterestsSection />
      <CertificationsSection />
      <EducationShelf />
      <ContactSection />
    </div>
  );
}
