'use client';

import React from 'react';
import { useMode } from '@/lib/ModeContext';
import { getModeById } from '@/content/modes';

import { PortalEntry } from '@/components/sections/PortalEntry';
import { Signal } from '@/components/sections/Signal';
import { Workbench } from '@/components/sections/Workbench';
import { Intersection } from '@/components/sections/Intersection';
import { Toolkit } from '@/components/sections/Toolkit';
import { Shelf } from '@/components/sections/Shelf';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CreativeArchive } from '@/components/sections/CreativeArchive';
import { HumanSide } from '@/components/sections/HumanSide';
import { ThisWebsite } from '@/components/sections/ThisWebsite';
import { Connect } from '@/components/sections/Connect';
// We also have 'research', 'lab', 'thoughts', 'timeline', 'interests' which we need to map eventually,
// but for now we'll stick to the existing sections mapped to the mode's sections array if possible.

// We will map the section IDs from mode.sections to the actual React components.
const SectionMap: Record<string, React.FC> = {
  signal: Signal,
  workbench: Workbench,
  intersection: Intersection,
  toolkit: Toolkit,
  shelf: Shelf,
  projects: ProjectsSection,
  creativeArchive: CreativeArchive,
  humanSide: HumanSide,
  thisWebsite: ThisWebsite,
  // Fallbacks for sections not yet created
  thoughts: Signal, // temporary fallback
  timeline: Workbench, // temporary fallback
  interests: HumanSide, // temporary fallback
  lab: ProjectsSection, // temporary fallback
  research: Intersection, // temporary fallback
  coreIdentity: ThisWebsite, // temporary fallback
};

export default function HomePage() {
  const { activeMode } = useMode();
  const modeDef = getModeById(activeMode);
  
  // The layout engine: Only render sections dictated by the active mode, in the order specified.
  const activeSections = modeDef.sections;

  return (
    <div style={{ transition: 'opacity 0.4s ease-in-out' }}>
      <PortalEntry />
      
      {activeSections.map((sectionId) => {
        const SectionComponent = SectionMap[sectionId];
        if (!SectionComponent) return null;
        
        return (
          <div 
            key={sectionId}
            className="mode-section-animate"
          >
            <SectionComponent />
          </div>
        );
      })}

      <Connect />
    </div>
  );
}
