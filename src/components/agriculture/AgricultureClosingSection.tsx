'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sprout, ArrowRight } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const AgricultureClosingSection: React.FC = () => {
  const { closing } = agricultureContent;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-24 px-6 overflow-hidden bg-[#0E1B20]">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/agriculture/agriculture_community_harvest.jpg"
          alt="SuhoG Agriculture community farming initiative"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B20] via-black/50 to-[#0E1B20]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-widest uppercase">
          <Sprout className="w-3.5 h-3.5 text-[#4ADE80]" />
          <span>{closing.subline}</span>
        </div>

        <div className="space-y-1">
          {closing.headline.map((line, idx) => (
            <h2
              key={idx}
              className={`font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight ${
                idx === 2 ? 'text-[#4ADE80]' : 'text-white'
              }`}
            >
              {line}
            </h2>
          ))}
        </div>

        <p className="text-base sm:text-xl text-white/80 font-editorial italic max-w-xl mx-auto">
          {closing.tagline}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#partner"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4ADE80] text-[#0E1B20] font-semibold text-sm hover:bg-[#22C55E] transition-all duration-300 shadow-lg text-center"
          >
            Partner With Us
          </Link>
          <Link
            href="/#about"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-center"
          >
            <span>Return to SuhoG Care & Mission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
