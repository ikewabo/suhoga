'use client';

import React, { useState } from 'react';
import { Mail, Phone, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    relativeCity: '',
    areaOfInterest: 'Dignified Ageing & Companionship',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `SuhoG Family Care Enquiry from ${formData.name || 'Website Visitor'}`
    );
    const body = encodeURIComponent(
      `SuhoG Family Enquiry Details:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Country of Residence: ${formData.country}\n` +
        `• Relative's Location in Nigeria: ${formData.relativeCity}\n` +
        `• Area of Interest: ${formData.areaOfInterest}\n\n` +
        `Overview / Family Questions:\n${formData.message}\n\n` +
        `[Note: Sent via SuhoG Project Official Website]`
    );

    window.location.href = `mailto:${suhogContent.meta.canonicalEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Reassurance & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B85338]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#B85338]">
                  A Private First Conversation
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-[#0E1B20] font-normal mb-4">
                You do not have to coordinate everything{' '}
                <span className="italic text-[#B85338]">from another country.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4B5A60] leading-relaxed">
                Whether you are an older Nigerian professional planning your own support or an adult child living abroad seeking attentive care for a parent, we welcome an unhurried first conversation.
              </p>
            </div>

            {/* Respectful guidance box */}
            <div className="p-5 rounded-2xl bg-[#F3F0EA] border border-[#0E1B20]/8 space-y-2 text-xs text-[#4B5A60] leading-relaxed">
              <div className="flex items-center gap-2 font-medium text-[#0E1B20]">
                <ShieldCheck className="w-4 h-4 text-[#3E5140]" />
                <span>Our Enquiry Philosophy</span>
              </div>
              <p>
                We do not treat care as a room booking or transactional catalogue. We discuss your parent&rsquo;s actual daily routines, comfort, and preferences. Please do not send medical files with this initial note.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${suhogContent.meta.canonicalEmail}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0E1B20]/8 hover:border-[#3E5140]/30 transition-all shadow-2xs group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF0EA] flex items-center justify-center text-[#3E5140] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#738086] block">
                    Official Email
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0E1B20]">
                    {suhogContent.meta.canonicalEmail}
                  </span>
                </div>
              </a>

              <a
                href="tel:+2348059212551"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0E1B20]/8 hover:border-[#3E5140]/30 transition-all shadow-2xs group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FAF0EC] flex items-center justify-center text-[#B85338] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#738086] block">
                    Direct Phone (Nigeria)
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0E1B20]">
                    {suhogContent.meta.primaryPhone}
                  </span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white border border-[#0E1B20]/8 text-xs text-[#4B5A60] space-y-1">
                <span className="font-mono uppercase tracking-wider text-[#738086] block text-[10px]">
                  Additional Support Lines
                </span>
                <div>Lagos Liaison: <a href="tel:+23418709913" className="font-mono font-medium text-[#0E1B20] hover:underline">+234 1 870 9913</a></div>
                <div>Regional Mobile: <a href="tel:+2348022395734" className="font-mono font-medium text-[#0E1B20] hover:underline">+234 802 239 5734</a></div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#0E1B20]/8 shadow-sm">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EBF0EA] text-[#3E5140] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-medium text-[#0E1B20] mb-3">
                  Enquiry Prepared
                </h3>
                <p className="text-sm text-[#4B5A60] max-w-md leading-relaxed mb-6">
                  Your mail application has opened with your structured message addressed to <span className="font-semibold text-[#0E1B20]">{suhogContent.meta.canonicalEmail}</span>. You can review and send it directly from your own email account.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#B85338] hover:underline cursor-pointer"
                >
                  &larr; Write another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="font-editorial text-xl font-medium text-[#0E1B20] block mb-1">
                    Enquire About Care for a Parent
                  </span>
                  <p className="text-xs text-[#738086]">
                    All enquiries are treated with confidentiality and discretion.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Your Name
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ngozi Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Your Email
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Your Phone / WhatsApp
                    <input
                      type="tel"
                      placeholder="+44 or +1 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Where Do You Live?
                    <input
                      type="text"
                      placeholder="e.g. London UK, Houston USA, Lagos"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Parent or Relative’s Location in Nigeria
                    <input
                      type="text"
                      required
                      placeholder="e.g. Umuahia, Lagos, Enugu, Abuja"
                      value={formData.relativeCity}
                      onChange={(e) => setFormData({ ...formData, relativeCity: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                    Area of Interest
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140]"
                    >
                      <option value="Dignified Ageing & Companionship">Dignified Ageing &amp; Companionship</option>
                      <option value="Healthcare Appointment Support">Healthcare Appointment Escort</option>
                      <option value="Daily Routine & Medication Reminders">Daily Routine &amp; Household Help</option>
                      <option value="Wider Community Programme / Donation">Wider Community Programme / Donation</option>
                      <option value="General Conversation">General Initial Conversation</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-1 text-xs font-medium text-[#0E1B20]">
                  How can SuhoG best assist your family?
                  <textarea
                    rows={4}
                    required
                    placeholder="Share a brief overview of your parent or relative’s situation, household routines or questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/10 text-sm focus:outline-none focus:border-[#3E5140] resize-none"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0E1B20] text-white py-3.5 px-6 rounded-full font-medium text-sm hover:bg-[#3E5140] transition-colors shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <span>Prepare My Confidential Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-[#738086] text-center pt-1">
                  Pre-fills your local email client with your enquiry details to review before sending.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
