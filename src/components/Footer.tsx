import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E1B20] text-white pt-16 pb-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-2xl font-semibold text-white tracking-tight">
                SuhoG Project
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                Est. 2001
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Support Home of God Project is a registered non-governmental, non-denominational charitable organisation founded in Nigeria in 2001.
            </p>

            <p className="text-xs text-[#E68A75] font-mono">
              &ldquo;Reaching every heart with love&rdquo;
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <a href="/#about" className="hover:text-[#E68A75] transition-colors">
                  About SuhoG
                </a>
              </li>
              <li>
                <a href="/#work" className="hover:text-[#E68A75] transition-colors">
                  Dignified Ageing Services
                </a>
              </li>
              <li>
                <a href="/agriculture" className="text-[#4ADE80] hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <span>SuhoG Agriculture</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#3E5140] text-white">New</span>
                </a>
              </li>
              <li>
                <a href="/#work" className="hover:text-[#E68A75] transition-colors">
                  Community Programmes
                </a>
              </li>
              <li>
                <a href="/#locations" className="hover:text-[#E68A75] transition-colors">
                  Where We Work
                </a>
              </li>
              <li>
                <a href="/#get-involved" className="hover:text-[#E68A75] transition-colors">
                  Support &amp; Giving
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#E68A75] transition-colors">
                  Care Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact summary */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-2">
              Primary Contacts
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E68A75]" />
                <a
                  href={`mailto:${suhogContent.meta.canonicalEmail}`}
                  className="hover:underline"
                >
                  {suhogContent.meta.canonicalEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E68A75]" />
                <a
                  href={`tel:${suhogContent.meta.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:underline"
                >
                  {suhogContent.meta.primaryPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#E68A75] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-xs">
                  No. 1 SuhoG Ville, Amizi, Ikwuano LGA, Umuahia, Abia State, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-white/50 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-white/70">Context &amp; Transparency Notice:</strong> The house in the film is illustrative concept imagery of a residential care setting. SuhoG provides personalised elder care coordination, companionship and community support; rooms are not presented as available to book. Medical diagnosis and clinical treatment remain the responsibility of licensed healthcare practitioners.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 border-t border-white/5">
          <span>
            &copy; {new Date().getFullYear()} Support Home of God Project. All rights reserved.
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <span>Dignity, companionship and care for Nigerian families</span>
            <Heart className="w-3 h-3 text-[#B85338]" />
          </span>
        </div>
      </div>
    </footer>
  );
};
