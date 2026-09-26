'use client';

import React, { useState } from 'react';
import {
  HeartHandshake,
  BookOpen,
  Stethoscope,
  Home,
  TrendingUp,
  Sprout,
  Droplets,
  Search,
  CheckCircle,
  ArrowRight,
  Info,
} from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

const COMMUNITY_ICONS: Record<string, React.ElementType> = {
  'rural-education': BookOpen,
  'community-healthcare': Stethoscope,
  'poverty-relief': Home,
  'womens-livelihoods': TrendingUp,
  microfinance: Sprout,
  'clean-water': Droplets,
  'ageing-research': Search,
};

export const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ageing' | 'community'>('ageing');

  return (
    <section id="work" className="py-20 md:py-28 px-6 bg-[#F3F0EA]/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85338]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#B85338]">
              What We Do
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#0E1B20] font-normal">
            Care for older people,{' '}
            <span className="italic text-[#B85338]">support for whole communities.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A60] mt-4 leading-relaxed">
            While SuhoG leads with personalised care coordination for older adults and their families, our work has long extended into the vital foundations of community life across Nigeria and beyond.
          </p>
        </div>

        {/* Programme Category Switcher */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('ageing')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'ageing'
                ? 'bg-[#0E1B20] text-white shadow-sm'
                : 'bg-white text-[#0E1B20] border border-[#0E1B20]/10 hover:bg-[#EBF0EA]'
            }`}
          >
            Dignified Ageing &amp; Family Support (Primary)
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'community'
                ? 'bg-[#0E1B20] text-white shadow-sm'
                : 'bg-white text-[#0E1B20] border border-[#0E1B20]/10 hover:bg-[#EBF0EA]'
            }`}
          >
            7 Wider Community Programmes
          </button>
        </div>

        {/* PRIMARY: DIGNIFIED AGEING SERVICES */}
        {activeTab === 'ageing' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0E1B20]/8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#0E1B20]/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] block mb-1">
                    Family Care &amp; Coordination
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#0E1B20]">
                    Personalised assistance, organised around the individual.
                  </h3>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#B85338] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#A34730] transition-colors self-start md:self-auto"
                >
                  <span>Enquire for a Parent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 6 Core Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {suhogContent.programmes.primary.services.map((svc) => (
                  <div
                    key={svc.num}
                    className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#0E1B20]/6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0E1B20]/5 text-[#3E5140]">
                          {svc.num}
                        </span>
                        <CheckCircle className="w-4 h-4 text-[#3E5140]" />
                      </div>
                      <h4 className="font-editorial text-lg font-medium text-[#0E1B20] mb-2">
                        {svc.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed">
                        {svc.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinical Responsibility Disclaimer */}
              <div className="mt-8 p-4 rounded-xl bg-[#FAF0EC] border border-[#B85338]/20 flex items-start gap-3 text-xs text-[#8A3620] leading-relaxed">
                <Info className="w-4 h-4 text-[#B85338] flex-shrink-0 mt-0.5" />
                <span>{suhogContent.programmes.primary.disclaimer}</span>
              </div>
            </div>
          </div>
        )}

        {/* WIDER COMMUNITY PROGRAMMES (COMPACT, ORDERED LAYOUT) */}
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0E1B20]/8 shadow-sm">
              <div className="mb-8">
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#0E1B20] mb-2">
                  Published Community Programmes
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A60] max-w-2xl leading-relaxed">
                  Established in 2001, SuhoG’s outreach addresses key community challenges that affect older people and multigenerational families across underserved rural and urban areas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suhogContent.programmes.community.map((prog) => {
                  const Icon = COMMUNITY_ICONS[prog.id] || Sprout;
                  return (
                    <div
                      key={prog.id}
                      className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#0E1B20]/6 flex flex-col justify-between hover:border-[#3E5140]/30 transition-colors"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#0E1B20]/8 flex items-center justify-center text-[#3E5140] mb-4 shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-editorial text-lg font-medium text-[#0E1B20] mb-2">
                          {prog.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed">
                          {prog.desc}
                        </p>
                      </div>

                      <div className="pt-6">
                        <a
                          href="#contact"
                          className="text-xs font-medium text-[#B85338] hover:text-[#0E1B20] inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Enquire or support</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
