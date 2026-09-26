'use client';

import React from 'react';
import { Landmark, Users2, Building2, Send, ArrowRight } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

const ICONS = [Landmark, Users2, Building2, Send];

export const WorkStartedSection: React.FC = () => {
  const { progressCards } = agricultureContent;

  return (
    <section id="work-started" className="py-20 md:py-28 px-6 bg-[#F3F0EA]/80 border-t border-b border-[#0E1B20]/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85338]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#B85338] font-semibold">
              The Work Has Started
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#0E1B20] font-normal mb-4">
            Building relationships to move from vision to{' '}
            <span className="italic text-[#3E5140]">sustainable community agriculture.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4B5A60] leading-relaxed">
            We are building the institutional relationships, agricultural networks, and practical partnerships needed to ground our food security initiative in reality.
          </p>
        </div>

        {/* 4 Large Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {progressCards.map((card, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={card.num}
                className="relative p-7 sm:p-9 rounded-3xl bg-white/70 backdrop-blur-md border border-[#0E1B20]/8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Oversized Translucent Number Watermark */}
                <div className="absolute right-4 -top-3 text-7xl sm:text-8xl font-editorial font-bold text-[#0E1B20]/[0.05] group-hover:text-[#3E5140]/[0.09] transition-colors pointer-events-none select-none">
                  {card.num}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3E5140] font-semibold px-3 py-1 rounded-full bg-[#EBF0EA]">
                      {card.tag}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#3E5140]/70" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-2xl font-normal text-[#0E1B20] leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#0E1B20]/5 flex items-center justify-between text-xs font-mono text-[#0E1B20]/60 relative z-10">
                  <span>Phase {card.num} / Action Stream</span>
                  <ArrowRight className="w-4 h-4 text-[#B85338] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Bold Assertion */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E1B20] via-[#162725] to-[#0E1B20] text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAB308] block">
              Clear Commitment
            </span>
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
              &ldquo;This isn&rsquo;t simply an idea for tomorrow.{' '}
              <span className="italic text-[#EAB308] font-normal block sm:inline">
                The work has already begun.&rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
