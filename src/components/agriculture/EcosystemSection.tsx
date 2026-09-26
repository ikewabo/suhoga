'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Sparkles, Sprout } from 'lucide-react';
import { agricultureContent } from '@/data/suhogContent';

export const EcosystemSection: React.FC = () => {
  const { ecosystem } = agricultureContent;

  const iconMap: Record<string, React.ReactNode> = {
    project: <HeartHandshake className="w-5 h-5 text-[#B85338]" />,
    naturals: <Sparkles className="w-5 h-5 text-[#D97706]" />,
    agriculture: <Sprout className="w-5 h-5 text-[#3E5140]" />,
  };

  const accentStyles: Record<
    string,
    { badgeBg: string; badgeBorder: string; badgeText: string; activeBorder: string }
  > = {
    project: {
      badgeBg: 'bg-[#FAF0EC]',
      badgeBorder: 'border-[#B85338]/20',
      badgeText: 'text-[#B85338]',
      activeBorder: 'hover:border-[#B85338]/40',
    },
    naturals: {
      badgeBg: 'bg-[#FEF3C7]/60',
      badgeBorder: 'border-[#D97706]/20',
      badgeText: 'text-[#B45309]',
      activeBorder: 'hover:border-[#D97706]/40',
    },
    agriculture: {
      badgeBg: 'bg-[#EBF0EA]',
      badgeBorder: 'border-[#3E5140]/30',
      badgeText: 'text-[#2D3E2F]',
      activeBorder: 'border-[#3E5140]/40 shadow-lg ring-1 ring-[#3E5140]/10',
    },
  };

  return (
    <section id="ecosystem" className="py-20 md:py-28 px-6 bg-[#F5F2EB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] font-semibold">
            The SuhoG Ecosystem
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#0E1B20] font-normal">
            One Mission.{' '}
            <span className="italic text-[#3E5140]">Distinct Pathways.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A60] leading-relaxed">
            {ecosystem.subheading}
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ecosystem.entities.map((item) => {
            const styles = accentStyles[item.id] || accentStyles.project;
            const isAg = item.id === 'agriculture';

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border transition-all duration-300 ${
                  styles.activeBorder || 'border-[#0E1B20]/10'
                }`}
              >
                {isAg && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#3E5140] text-white text-[11px] font-mono uppercase tracking-wider font-semibold shadow-sm">
                    Current Focus
                  </div>
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles.badgeBg} ${styles.badgeBorder} ${styles.badgeText}`}
                    >
                      {item.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-[#F5F2EB] border border-[#0E1B20]/5">
                      {iconMap[item.id]}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#738288] block font-semibold">
                      {item.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl text-[#0E1B20] font-semibold mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4B5A60] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#0E1B20]/5">
                  <Link
                    href={item.cta.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group ${
                      isAg ? 'text-[#3E5140] hover:text-[#28362A]' : 'text-[#0E1B20] hover:text-[#3E5140]'
                    }`}
                  >
                    <span>{item.cta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Clarity Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#738288] max-w-xl mx-auto italic">
            * SuhoG Agriculture Initiative is an initiative of SuhoG Project. Each pathway shares our foundational commitment to community dignity and self-reliance while maintaining distinct operational focuses.
          </p>
        </div>
      </div>
    </section>
  );
};
