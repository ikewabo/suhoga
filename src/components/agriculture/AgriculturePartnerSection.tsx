'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sprout, Mail, Phone, MapPin } from 'lucide-react';
import { agricultureContent, suhogContent } from '@/data/suhogContent';

export const AgriculturePartnerSection: React.FC = () => {
  const { partnership } = agricultureContent;

  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    partnershipType: 'Government / Public Sector',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission handling
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="partner" className="py-20 md:py-28 px-6 bg-[#F5F2EB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3E5140]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] font-semibold">
                {partnership.eyebrow}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] text-[#0E1B20] font-normal">
              Let&apos;s grow <span className="italic text-[#3E5140]">together.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4B5A60] leading-relaxed">
              {partnership.copy}
            </p>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-white/70 border border-[#0E1B20]/10 backdrop-blur-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#738288] block font-semibold">
                Direct Contact
              </span>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${suhogContent.meta.canonicalEmail}`}
                  className="flex items-center gap-3 text-[#0E1B20] hover:text-[#3E5140] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#3E5140]" />
                  <span>{suhogContent.meta.canonicalEmail}</span>
                </a>

                <a
                  href={`tel:${suhogContent.meta.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-[#0E1B20] hover:text-[#3E5140] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3E5140]" />
                  <span>{suhogContent.meta.primaryPhone}</span>
                </a>

                <div className="flex items-start gap-3 text-[#4B5A60]">
                  <MapPin className="w-4 h-4 text-[#3E5140] mt-0.5 shrink-0" />
                  <span>SuhoG Project • Regional & Agricultural Initiatives, Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#0E1B20]/10 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EBF0EA] text-[#3E5140] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#0E1B20] font-medium">
                    Thank You for Your Interest
                  </h3>
                  <p className="text-sm text-[#4B5A60] max-w-md mx-auto leading-relaxed">
                    We have received your message regarding the SuhoG Agriculture Initiative. A member of our partnership outreach team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3E5140] hover:underline pt-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#0E1B20]/10 pb-4 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#3E5140] font-semibold block mb-1">
                      Partnership Inquiry
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#0E1B20] font-medium">
                      Join the Agricultural Initiative
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Dr. Ngozi Adeleke"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] placeholder-[#738288] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                        Organization / Affiliation
                      </label>
                      <input
                        type="text"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        placeholder="e.g. Agricultural Development Agency"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] placeholder-[#738288] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@organization.org"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] placeholder-[#738288] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+234 ..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] placeholder-[#738288] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                      Type of Partnership *
                    </label>
                    <select
                      value={formState.partnershipType}
                      onChange={(e) => setFormState({ ...formState, partnershipType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140]"
                    >
                      {partnership.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4B5A60] mb-1.5 font-semibold">
                      Message / Collaboration Ideas *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details regarding your program, resources, or how we might collaborate..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#0E1B20]/15 text-sm text-[#0E1B20] placeholder-[#738288] focus:outline-none focus:ring-2 focus:ring-[#3E5140]/30 focus:border-[#3E5140] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-full bg-[#3E5140] text-white font-medium hover:bg-[#28362A] transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Partnership Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
