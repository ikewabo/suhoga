'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Sprout, ArrowRight, Check } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const SoapToSoilSection: React.FC = () => {
  const { soapToSoil } = agricultureContent;

  return (
    <section id="soap-to-soil" className="py-20 md:py-28 px-6 bg-[#0E1B20] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#3E5140]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#B85338]/15 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono tracking-widest uppercase text-[#F5F2EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>The Signature Narrative</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[50px] leading-[1.1] text-white font-normal">
            From Soap <span className="italic text-[#EAB308]">to Soil.</span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            {soapToSoil.subheading}
          </p>
        </div>

        {/* Dual Split Visual & Narrative Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
          {/* Left Column: SuhoG Naturals (The Product) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#EAB308] font-semibold">
                  Phase 1 • Purpose Enterprise
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/90">
                  VIZZ & FIZZ
                </span>
              </div>

              <h3 className="font-editorial text-2xl text-white font-medium mb-3">
                Everyday Products, Social Value
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                SuhoG Naturals crafts quality soap bars that serve daily household needs while generating sustained internal funding for grassroots development.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-inner">
              <Image
                src="/images/agriculture/agriculture_naturals_soap.jpg"
                alt="SuhoG Naturals VIZZ Beauty Bar and FIZZ Laundry Bar artisanal soap packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-white/90">
                Artisanal Production & Sustainable Commerce
              </div>
            </div>
          </div>

          {/* Right Column: SuhoG Agriculture (The Harvest) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#4ADE80] font-semibold">
                  Phase 2 • Community Groundwork
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#3E5140] text-white">
                  Seeds & Harvest
                </span>
              </div>

              <h3 className="font-editorial text-2xl text-white font-medium mb-3">
                Grassroots Farming & Food Security
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Channeling enterprise momentum into seeds, farmer inputs, and agricultural initiatives that empower local families to cultivate long-term self-sufficiency.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 shadow-inner">
              <Image
                src="/images/agriculture/agriculture_community_harvest.jpg"
                alt="Nigerian community farmers inspecting healthy crops and agricultural harvest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-white/90">
                Community Harvest & Sustainable Livelihoods
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Impact Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                When you support SuhoG Naturals, you&apos;re supporting something bigger than a product.
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                {soapToSoil.copy}
              </p>
            </div>

            <div className="md:col-span-5 space-y-3 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              {soapToSoil.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ADE80]/20 border border-[#4ADE80]/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#4ADE80]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/60 italic">
              {soapToSoil.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
