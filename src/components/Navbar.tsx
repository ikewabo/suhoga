'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone, Sprout } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAgriculture = pathname?.startsWith('/agriculture');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getAnchor = (id: string) => (isAgriculture ? `/${id}` : id);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#0E1B20]/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3.5'
            : 'bg-gradient-to-b from-[#0E1B20]/40 via-[#0E1B20]/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex flex-col group transition-transform active:scale-[0.99]"
            aria-label="SuhoG Home"
          >
            <div className="flex items-center gap-2">
              <span
                className={`font-editorial text-2xl font-semibold tracking-tight transition-colors ${
                  scrolled ? 'text-[#0E1B20]' : 'text-white'
                }`}
              >
                SuhoG
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full transition-colors ${
                  scrolled
                    ? 'bg-[#3E5140]/10 text-[#3E5140]'
                    : 'bg-white/15 text-white/90'
                }`}
              >
                Est. 2001
              </span>
            </div>
            <span
              className={`text-[11px] tracking-wide hidden sm:inline-block transition-colors ${
                scrolled ? 'text-[#4B5A60]' : 'text-white/80'
              }`}
            >
              Support Home of God Project
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href={getAnchor('#about')}
              className={`text-sm font-medium transition-colors hover:text-[#B85338] ${
                scrolled ? 'text-[#0E1B20]' : 'text-white/90'
              }`}
            >
              About
            </Link>
            <Link
              href={getAnchor('#work')}
              className={`text-sm font-medium transition-colors hover:text-[#B85338] ${
                scrolled ? 'text-[#0E1B20]' : 'text-white/90'
              }`}
            >
              Our Work
            </Link>
            <Link
              href="/agriculture"
              className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                isAgriculture
                  ? 'bg-[#3E5140] text-white shadow-sm font-semibold'
                  : scrolled
                  ? 'bg-[#3E5140]/10 text-[#3E5140] hover:bg-[#3E5140] hover:text-white'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Agriculture</span>
              {!isAgriculture && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
              )}
            </Link>
            <Link
              href={getAnchor('#locations')}
              className={`text-sm font-medium transition-colors hover:text-[#B85338] ${
                scrolled ? 'text-[#0E1B20]' : 'text-white/90'
              }`}
            >
              Where We Work
            </Link>
            <Link
              href={getAnchor('#get-involved')}
              className={`text-sm font-medium transition-colors hover:text-[#B85338] ${
                scrolled ? 'text-[#0E1B20]' : 'text-white/90'
              }`}
            >
              Get Involved
            </Link>
            <Link
              href={isAgriculture ? '#partner' : getAnchor('#contact')}
              className={`text-sm font-medium transition-colors hover:text-[#B85338] ${
                scrolled ? 'text-[#0E1B20]' : 'text-white/90'
              }`}
            >
              {isAgriculture ? 'Partner' : 'Contact'}
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+2348059212551"
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                scrolled
                  ? 'border-[#0E1B20]/15 text-[#0E1B20] hover:bg-[#0E1B20]/5'
                  : 'border-white/20 text-white/90 hover:bg-white/10'
              }`}
              title="Direct Telephone"
            >
              <Phone className="w-3 h-3 text-[#B85338]" />
              <span>+234 805 921 2551</span>
            </a>

            <Link
              href={isAgriculture ? '#partner' : getAnchor('#contact')}
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 active:scale-[0.98] ${
                isAgriculture
                  ? scrolled
                    ? 'bg-[#3E5140] text-white hover:bg-[#28362A] shadow-sm'
                    : 'bg-[#4ADE80] text-[#0E1B20] font-semibold hover:bg-[#22C55E] shadow-sm'
                  : scrolled
                  ? 'bg-[#0E1B20] text-white hover:bg-[#3E5140]'
                  : 'bg-[#B85338] text-white hover:bg-[#A34730] shadow-sm'
              }`}
            >
              <span>{isAgriculture ? 'Partner With Us' : 'Enquire About Care'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-[#0E1B20] hover:bg-black/5'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E1B20]/60 backdrop-blur-sm lg:hidden flex flex-col justify-end">
          <div className="bg-[#FBF9F5] rounded-t-3xl p-6 sm:p-8 space-y-6 shadow-2xl border-t border-[#0E1B20]/10 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#0E1B20]/10">
              <div>
                <span className="font-editorial text-xl font-semibold text-[#0E1B20] block">
                  SuhoG Project
                </span>
                <span className="text-xs text-[#4B5A60]">
                  Reaching every heart with love &bull; Founded 2001
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#4B5A60] hover:text-[#0E1B20]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 text-base font-medium text-[#0E1B20]">
              <Link
                href={getAnchor('#about')}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#0E1B20]/5 flex items-center justify-between"
              >
                <span>About SuhoG</span>
                <ArrowUpRight className="w-4 h-4 text-[#738086]" />
              </Link>
              <Link
                href={getAnchor('#work')}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#0E1B20]/5 flex items-center justify-between"
              >
                <span>Dignified Ageing &amp; Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#738086]" />
              </Link>
              <Link
                href="/agriculture"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-2xl bg-[#EBF0EA] border border-[#3E5140]/20 flex items-center justify-between text-[#2D3E2F]"
              >
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-[#3E5140]" />
                  <span className="font-semibold">SuhoG Agriculture</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#3E5140] text-white">
                  Initiative
                </span>
              </Link>
              <Link
                href={getAnchor('#locations')}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#0E1B20]/5 flex items-center justify-between"
              >
                <span>Where We Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#738086]" />
              </Link>
              <Link
                href={getAnchor('#get-involved')}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#0E1B20]/5 flex items-center justify-between"
              >
                <span>Get Involved &amp; Support</span>
                <ArrowUpRight className="w-4 h-4 text-[#738086]" />
              </Link>
              <Link
                href={isAgriculture ? '#partner' : getAnchor('#contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 flex items-center justify-between"
              >
                <span>{isAgriculture ? 'Agricultural Partnership' : 'Contact &amp; Enquiry'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#738086]" />
              </Link>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              {isAgriculture ? (
                <Link
                  href="#partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#3E5140] text-white py-3.5 rounded-full font-medium text-sm hover:bg-[#28362A] transition-colors"
                >
                  Partner With Agriculture
                </Link>
              ) : (
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#0E1B20] text-white py-3.5 rounded-full font-medium text-sm hover:bg-[#3E5140] transition-colors"
                >
                  Enquire About Care for a Parent
                </Link>
              )}
              <a
                href={`tel:${suhogContent.meta.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full text-center border border-[#0E1B20]/15 text-[#0E1B20] py-3 rounded-full font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B85338]" />
                <span>Call Nigeria: {suhogContent.meta.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
