import React from 'react';
import { Heart, PackageCheck, Users2, ArrowRight } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

const ICONS = [Heart, PackageCheck, Users2];

export const GetInvolvedSection: React.FC = () => {
  return (
    <section id="get-involved" className="py-20 px-6 bg-[#F3F0EA]/50 border-t border-[#0E1B20]/6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85338]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B85338]">
                Get Involved
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl leading-[1.15] text-[#0E1B20] font-normal">
              Support our community mission.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5A60] max-w-md leading-relaxed">
            Alongside our primary family care services, we welcome financial contributions, practical essential supplies, and professional voluntary partnerships to sustain our wider charitable work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suhogContent.getInvolved.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0E1B20]/8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#B85338] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-xl font-medium text-[#0E1B20] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5A60] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E1B20] hover:text-[#B85338] transition-colors"
                >
                  <span>{item.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
