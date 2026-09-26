'use client';

import React from 'react';
import Image from 'next/image';
import { Sprout, CheckCircle2 } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const FromGroundUpSection: React.FC = () => {
  const { intro } = agricultureContent;

  return (
    <section id="from-the-ground-up" className="py-20 md:py-28 px-6 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3E5140]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] font-semibold">
                {intro.label}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#0E1B20] font-normal">
              Agriculture with{' '}
              <span className="italic text-[#3E5140]">purpose.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4B5A60] leading-relaxed">
              {intro.paragraphs.map((p, i) => (
                <p key={i} className={i === 1 ? 'text-[#0E1B20] font-medium' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars preview */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#EBF0EA]/60 border border-[#3E5140]/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3E5140] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-[#0E1B20] block">
                    Food Security
                  </span>
                  <span className="text-[11px] text-[#4B5A60]">
                    Nutritious staple access for vulnerable households.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF0EC]/60 border border-[#B85338]/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B85338] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-[#0E1B20] block">
                    Economic Dignity
                  </span>
                  <span className="text-[11px] text-[#4B5A60]">
                    Sustainable livelihoods that build independence.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] w-full border border-[#0E1B20]/10">
              <Image
                src="/images/agriculture/agriculture_soil_hands.jpg"
                alt="African hands holding fertile soil and a tender green seedling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Glass Highlight */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#EAB308] text-xs font-mono uppercase tracking-wider">
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Seedling to Harvest</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-snug">
                  Supporting smallholders with inputs, technical training, and community-led collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
