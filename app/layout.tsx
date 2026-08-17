import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/content/site';
import { profile } from '@/content/profile';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { EasterEggModal } from '@/components/ui/EasterEggModal';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
import { LivingAtmosphereCanvas } from '@/components/features/LivingAtmosphereCanvas';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  keywords: [
    'Ayush Kumar Sharan',
    'Systems Engineer',
    'Automation Engineer',
    'QA Automation',
    'Playwright',
    'TypeScript',
    'Cloud DevOps',
    'IEEE Research',
    'Quantum Signal Processing',
    'Amity Gold Medallist',
    'Creative Technology',
    'Unreal Engine Pixel Streaming'
  ],
  metadataBase: new URL(siteConfig.url || 'https://ayushkumarsharan.com'),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: profile.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Digital Profile & Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@ayushsharan',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: siteConfig.url,
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Amity University, Noida',
    },
    award: [
      'University Gold Medallist',
      'Shree Baljit Shastri Award',
      'IEEE ICRITO 2024 Best Paper Award',
      'Technovate 2024 1st Place',
    ],
    knowsAbout: [
      'QA Automation',
      'Cloud Infrastructure',
      'Playwright',
      'TypeScript',
      'Python',
      'Quantum Signal Processing',
      'Fintech Systems',
      'Avionics',
    ],
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <EasterEggModal />

        {/* Continuous Living Atmosphere Background Canvas */}
        <LivingAtmosphereCanvas />

        <LayoutWrapper>
          <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
