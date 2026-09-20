import './globals.css';
import '../styles/tokens.css';
import '../styles/reset.css';
import '../styles/base.css';
import { ModeProvider } from '@/lib/ModeContext';
import { UniverseProvider } from '@/lib/UniverseContext';
import { AtmosphericBackground } from '@/components/features/AtmosphericBackground';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { Suspense } from 'react';

import CustomCursor from '@/components/ui/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import { GlobalScrollProgress } from '@/components/layout/GlobalScrollProgress';

export const metadata = {
  title: 'Ayush Kumar Sharan | Engineer, Builder, Problem Solver',
  description: 'Personal Universe and Digital Archive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ModeProvider>
            <UniverseProvider>
              <GlobalScrollProgress />
              <CustomCursor />
              <AtmosphericBackground />
              <Navigation />
              <LayoutWrapper>
                <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
                  {children}
                </main>
              </LayoutWrapper>
            </UniverseProvider>
          </ModeProvider>
        </Suspense>
      </body>
    </html>
  );
}
