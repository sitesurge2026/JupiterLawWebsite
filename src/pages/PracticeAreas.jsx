import React from 'react';
import { Link } from 'react-router-dom';

export default function PracticeAreas() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[716px] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover object-center"
            alt="Manchester skyline"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRoleyrurh7XxnyioJjo2RCXQ3E5DMQ7aHN9iRuIK1tQfB-sHNJ7dSzO9edTbNZnoFmi6ijfex4YjlPtQlMbQyf0kRVoEcTiUAPFPq_YMoaC9qgKIJMgkPpE2jLQB09N9XQrsZmSF9gk3ngjs4rDBRgMEkGLn5_kuvU1Yb5Bp4-EMZILEwqWuzdri89LYbvHgEkKYtyW9MSj1_Cqpoy7hqDRHG-zVPUPdbp1nOXDzrG-aCvr0uqKpYPTXmcRTrEGiyyNukLd_kBS9E"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">MANCHESTER-BASED LEGAL ADVISORS</span>
            <h1 className="font-display-hero text-display-hero text-on-surface mb-6">Expertise Built on Strategic Precision.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Specialising in high-stakes litigation and advisory, Jupiter Law provides authoritative representation for individuals and corporations navigating complex legal landscapes.
            </p>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-surface-container-lowest border-y border-slate-400/10 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
          <span className="font-label-caps text-label-caps tracking-[0.2em]">SRA REGULATED</span>
          <span className="font-label-caps text-label-caps tracking-[0.2em]">LEGAL 500 RECOGNISED</span>
          <span className="font-label-caps text-label-caps tracking-[0.2em]">CHAMBERS UK PARTNER</span>
          <span className="font-label-caps text-label-caps tracking-[0.2em]">MANCHESTER LAW SOCIETY</span>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <main className="max-w-7xl mx-auto px-8 py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Strategic Approach Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Our Strategic Approach</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                We don't just provide advice; we architect solutions. Our Manchester office serves as a hub for rigorous legal analysis and assertive representation.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary">account_balance</span>
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">Architectural Rigour</h4>
                    <p className="text-sm text-on-surface-variant">Every case is built on a foundation of exhaustive discovery and precedent analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary">gavel</span>
                  <div>
                    <h4 className="font-body-md text-body-md font-bold text-on-surface">Assertive Litigation</h4>
                    <p className="text-sm text-on-surface-variant">A commitment to protecting our clients' interests through decisive action in and out of court.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Practice Areas */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Personal Injury */}
            <div className="md:col-span-2 group relative p-8 bg-surface-container-low tonal-border rounded-lg overflow-hidden transition-all duration-500 hover:border-secondary">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl text-secondary">medical_services</span>
                  <span className="font-label-caps text-label-caps text-outline">LITIGATION</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Personal Injury</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                  Specialising in catastrophic injury and complex clinical negligence claims. We provide a meticulous service for those seeking accountability and significant redress following life-altering events.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-variant/30 border border-outline-variant rounded-full text-[10px] font-bold tracking-widest uppercase">Catastrophic Injury</span>
                  <span className="px-3 py-1 bg-surface-variant/30 border border-outline-variant rounded-full text-[10px] font-bold tracking-widest uppercase">Clinical Negligence</span>
                  <span className="px-3 py-1 bg-surface-variant/30 border border-outline-variant rounded-full text-[10px] font-bold tracking-widest uppercase">Public Liability</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale pointer-events-none group-hover:opacity-20 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  alt="Medical research facility"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUqs2mrlWdp66VIXHWmxipYLOfrBeUMw6uKk9Rc9bWpbfYtGFdFGgwv6yYX8kTJRzEnTvaHwQcim_2BLMBGuOrcwWmemwLykjfMIYIFQy60ruOpAbnwazGZ9ZOFk4VMbJ6fb3LCAvGSnMpwQvdTP1QQdW0eJGzgTFAyLzCqVdUTCIYKQwcagdrat8MZBw13l522FQYnE9C4tTz6FJsZy_epfNJJKZx1mBQQTQftwIU91sqTfCvMKoI2eLtN-ufFLV54kJFUe5Gws2c"
                />
              </div>
            </div>

            {/* Immigration Law */}
            <div className="group p-8 bg-surface-container-low tonal-border rounded-lg transition-all duration-500 hover:border-secondary">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary">public</span>
                <span className="font-label-caps text-label-caps text-outline">ADVISORY</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Immigration Law</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Strategic guidance for corporate entities and high-net-worth individuals navigating the UK's points-based system. Expert handling of Sponsor Licences and Tier 1 applications.
              </p>
              <Link className="inline-flex items-center gap-2 text-secondary font-button text-button uppercase tracking-widest hover:gap-4 transition-all" to="/contact">
                Enquire <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Corporate Litigation */}
            <div className="group p-8 bg-surface-container-low tonal-border rounded-lg transition-all duration-500 hover:border-secondary">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary">business_center</span>
                <span className="font-label-caps text-label-caps text-outline">CORPORATE</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Corporate Litigation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Protecting commercial interests through robust dispute resolution and shareholder litigation. We navigate Manchester's business sector with unwavering commercial focus.
              </p>
              <Link className="inline-flex items-center gap-2 text-secondary font-button text-button uppercase tracking-widest hover:gap-4 transition-all" to="/contact">
                Enquire <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-surface-container py-section-gap border-y border-slate-400/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Secure Authoritative Representation.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            Our Manchester-based partners are available for confidential consultations. Contact Jupiter Law to discuss your strategic requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-button text-button uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Initial Enquiry
            </Link>
            <Link
              to="/about"
              className="bg-transparent border border-outline px-10 py-4 rounded-lg font-button text-button uppercase tracking-widest text-on-surface hover:border-secondary hover:text-secondary transition-all"
            >
              Our Partners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
