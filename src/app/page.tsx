import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FilmScrollExperience } from '@/components/FilmScrollExperience';
import { AboutSection } from '@/components/AboutSection';
import { WorkSection } from '@/components/WorkSection';
import { AgricultureGatewaySection } from '@/components/AgricultureGatewaySection';
import { LocationsSection } from '@/components/LocationsSection';
import { GetInvolvedSection } from '@/components/GetInvolvedSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#0E1B20]">
      {/* Fixed / Sticky Navigation */}
      <Navbar />

      {/* Hero: Pinned Dynamic Film Scroll Experience */}
      <FilmScrollExperience />

      {/* Post-Film Section: About SuhoG */}
      <AboutSection />

      {/* Post-Film Section: What We Do (Dignified Ageing & 7 Programmes) */}
      <WorkSection />

      {/* Agriculture Gateway (New Seed of Impact) */}
      <AgricultureGatewaySection />

      {/* Post-Film Section: Where We Work (Footprint & Offices) */}
      <LocationsSection />

      {/* Post-Film Section: Get Involved (Giving & Volunteering) */}
      <GetInvolvedSection />

      {/* Post-Film Section: Contact & Confidential Care Enquiry */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
