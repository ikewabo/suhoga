import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 md:py-28 px-6 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E5140]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140]">
              Where We Work
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#0E1B20] font-normal">
            A grounded local presence,{' '}
            <span className="italic text-[#3E5140]">connecting families across borders.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A60] mt-4 leading-relaxed">
            From our founding base in Abia State, Nigeria, SuhoG maintains active community outreach across Nigeria, Scotland and Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suhogContent.locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#0E1B20]/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#3E5140]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#3E5140] bg-[#EBF0EA] px-2.5 py-1 rounded-full">
                    {loc.country}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#738086] block mb-1">
                  {loc.role}
                </span>
                <h3 className="font-editorial text-xl font-medium text-[#0E1B20] mb-3">
                  {loc.title}
                </h3>

                <address className="not-italic text-xs sm:text-sm text-[#4B5A60] leading-relaxed space-y-0.5">
                  {loc.addressLines.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </address>
              </div>

              {loc.phones && loc.phones.length > 0 && (
                <div className="mt-6 pt-4 border-t border-[#0E1B20]/6 space-y-1.5">
                  <span className="text-[11px] font-mono text-[#738086] block uppercase tracking-wider">
                    Direct Contact
                  </span>
                  {loc.phones.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={phone.href}
                      className="text-xs font-mono text-[#0E1B20] hover:text-[#B85338] transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-[#B85338]" />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
