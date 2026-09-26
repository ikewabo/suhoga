import type { Metadata } from 'next';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AgricultureHero } from '@/components/agriculture/AgricultureHero';
import { FromGroundUpSection } from '@/components/agriculture/FromGroundUpSection';
import { WorkStartedSection } from '@/components/agriculture/WorkStartedSection';
import { EcosystemSection } from '@/components/agriculture/EcosystemSection';
import { SoapToSoilSection } from '@/components/agriculture/SoapToSoilSection';
import { ImpactCycleSection } from '@/components/agriculture/ImpactCycleSection';
import { AgriculturePartnerSection } from '@/components/agriculture/AgriculturePartnerSection';
import { AgricultureClosingSection } from '@/components/agriculture/AgricultureClosingSection';

export const metadata: Metadata = {
  title: 'SuhoG Agriculture Initiative | Growing Food. Growing Futures.',
  description:
    'Discover the SuhoG Agriculture Initiative — a community-focused effort supporting food security, sustainable livelihoods, agricultural partnerships, and stronger communities.',
  openGraph: {
    title: 'SuhoG Agriculture Initiative | Growing Food. Growing Futures.',
    description:
      'A community-focused effort supporting food security, sustainable livelihoods, agricultural partnerships, and stronger communities.',
    url: 'https://suhogproject.org/agriculture',
    siteName: 'SuhoG Project',
    images: [
      {
        url: '/images/agriculture/agriculture_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'SuhoG Agriculture Initiative — Growing Food. Growing Futures.',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
};

export default function AgriculturePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#0E1B20]">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AgricultureHero />

      {/* From The Ground Up (Purpose & Pillars) */}
      <FromGroundUpSection />

      {/* The Work Has Started (01 to 04 Status Cards) */}
      <WorkStartedSection />

      {/* SuhoG Ecosystem: One Mission. Distinct Pathways. */}
      <EcosystemSection />

      {/* Signature Narrative: From Soap to Soil */}
      <SoapToSoilSection />

      {/* Impact Cycle: A Cycle of Community Impact */}
      <ImpactCycleSection />

      {/* Get Involved / Partner Section with Form */}
      <AgriculturePartnerSection />

      {/* Closing Statement */}
      <AgricultureClosingSection />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
