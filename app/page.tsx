import React from 'react';
import { Hero } from '@/components/sections/Hero';
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Signal />
      <Workbench />
      <Intersection />
      <Toolkit />
      <Shelf />
      <ProjectsSection />
      <CreativeArchive />
      <HumanSide />
      <ThisWebsite />
      <Connect />
    </>
  );
}
