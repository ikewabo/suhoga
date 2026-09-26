'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sprout } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const AgricultureGatewaySection: React.FC = () => {
  const { homepageTeaser } = agricultureContent;

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F5F2EB] border-t border-[#0E1B20]/5">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#0E1B20] text-white shadow-xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3E5140]/40 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] w-full overflow-hidden">
              <Image
                src="/images/agriculture/agriculture_hero.jpg"
                alt="SuhoG Agriculture Initiative field at sunrise"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider text-white">
                <Sprout className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>Growing Food. Growing Futures.</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#4ADE80] font-semibold">
                  {homepageTeaser.badge}
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal leading-tight">
                A New Seed of <span className="italic text-[#4ADE80]">Impact</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {homepageTeaser.copy}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={homepageTeaser.href}
                  className="px-6 py-3.5 rounded-full bg-[#4ADE80] text-[#0E1B20] font-semibold text-sm hover:bg-[#22C55E] transition-colors inline-flex items-center justify-center gap-2 shadow-md group"
                >
                  <span>{homepageTeaser.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-white/60 font-mono self-center">
                  An initiative of SuhoG Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
