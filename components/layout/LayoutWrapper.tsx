'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AskAyush } from '@/components/features/AskAyush';

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);

  return (
    <>
      <Navigation onOpenAskAI={() => setIsAskAIOpen(true)} />
      {children}
      <Footer />
      <AskAyush isOpen={isAskAIOpen} onClose={() => setIsAskAIOpen(false)} />
    </>
  );
};
