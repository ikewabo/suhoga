'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown, Sprout, Handshake } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const AgricultureHero: React.FC = () => {
  const { hero, meta } = agricultureContent;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1410] pt-24 pb-16 px-5 sm:px-8">
      {/* Background Image with Dark Vignette for Text Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/agriculture/agriculture_hero.jpg"
          alt="Lush fertile Nigerian farmland at golden sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Environmental Gradients & Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1410] via-[#0A1410]/50 to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A1410]/40 to-[#0A1410]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Initiative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#A3E635] text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Sprout className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>{hero.eyebrow}</span>
          <span className="text-white/40">&bull;</span>
          <span className="text-white/80 normal-case font-sans tracking-normal text-[11px]">
            {meta.parentRelationship}
          </span>
        </div>

        {/* Main Dramatic Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-white leading-[1.08] tracking-tight mb-6 film-headline max-w-4xl">
          GROWING FOOD.{' '}
          <span className="italic text-[#EAB308] font-normal block sm:inline">
            GROWING FUTURES.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10 text-balance film-subtext">
          {hero.lead}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center gap-2.5 bg-[#B85338] hover:bg-[#A34730] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <Handshake className="w-4 h-4" />
            <span>{hero.primaryCta.label}</span>
          </a>

          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 px-7 py-3.5 rounded-full text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <span>{hero.secondaryCta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Nudge */}
        <div className="pt-12 sm:pt-16 flex flex-col items-center gap-1.5 text-white/60">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
            Scroll to explore initiative
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#EAB308]" />
        </div>
      </div>
    </section>
  );
};
