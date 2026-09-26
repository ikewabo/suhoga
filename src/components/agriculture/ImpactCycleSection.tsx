'use client';

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const ImpactCycleSection: React.FC = () => {
  const { impactCycle } = agricultureContent;

  return (
    <section id="impact-cycle" className="py-20 md:py-28 px-6 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] font-semibold">
            Sustainable Model
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#0E1B20] font-normal">
            A Cycle of{' '}
            <span className="italic text-[#3E5140]">Community Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A60] leading-relaxed">
            SuhoG&apos;s long-term vision is to connect enterprise, partnerships, community participation, and sustainable development in ways that create lasting opportunity.
          </p>
        </div>

        {/* Desktop Flow: 5 Steps in an interconnected grid */}
        <div className="hidden lg:grid grid-cols-5 gap-3 relative items-stretch">
          {impactCycle.map((item, idx) => {
            const isLast = idx === impactCycle.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col">
                <div className="flex-1 flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#0E1B20]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#3E5140] px-2 py-0.5 rounded bg-[#EBF0EA]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-editorial text-lg text-[#0E1B20] font-semibold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4B5A60] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#3E5140] text-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="lg:hidden flex flex-col space-y-3">
          {impactCycle.map((item, idx) => {
            const isLast = idx === impactCycle.length - 1;

            return (
              <React.Fragment key={item.step}>
                <div className="p-6 rounded-2xl bg-white border border-[#0E1B20]/10 shadow-sm flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#3E5140] px-2.5 py-1 rounded bg-[#EBF0EA] shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-editorial text-lg text-[#0E1B20] font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-6 h-6 rounded-full bg-[#EBF0EA] border border-[#3E5140]/20 flex items-center justify-center text-[#3E5140]">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
