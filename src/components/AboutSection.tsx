import React from 'react';
import { HeartHandshake, ShieldCheck, Users, Eye, Sparkles } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

const VALUE_ICONS = [Eye, Users, ShieldCheck, HeartHandshake];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto">
        {/* Top Watermark & Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0E1B20]/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3E5140]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140]">
                {suhogContent.about.eyebrow}
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#0E1B20] max-w-2xl font-normal">
              A longstanding commitment,{' '}
              <span className="italic text-[#3E5140]">shaped for today’s families.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-3xl font-semibold text-[#0E1B20]">2001</span>
            <span className="text-xs text-[#4B5A60] tracking-wide">
              Founded in Abia State, Nigeria
            </span>
          </div>
        </div>

        {/* Narrative & Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-[#0E1B20]/90 leading-relaxed text-base sm:text-lg">
            {suhogContent.about.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl font-medium text-[#0E1B20]' : ''}>
                {p}
              </p>
            ))}

            {/* Note clarifying concept film vs real operations */}
            <div className="pt-4 p-5 rounded-2xl bg-[#EBF0EA]/60 border border-[#3E5140]/15 text-xs sm:text-sm text-[#3E5140] leading-relaxed">
              <strong className="font-semibold block mb-1">Authentic Care, Tailored to the Home:</strong>
              The house shown in our opening visual film illustrates the warmth of a residential setting. In practice, SuhoG works with older adults across our communities—whether supporting an independent retired professional in their own home or coordinating specialized daily companionship.
            </div>
          </div>

          {/* Core Values Card Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4B5A60] block">
              Core Principles
            </span>

            {suhogContent.about.values.map((val, idx) => {
              const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
              return (
                <div
                  key={val.num}
                  className="bg-white p-5 rounded-2xl border border-[#0E1B20]/8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#3E5140] flex-shrink-0 font-mono text-xs font-bold">
                    {val.num}
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg font-medium text-[#0E1B20] mb-1">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
