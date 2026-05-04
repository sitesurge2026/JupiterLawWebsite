import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Manchester skyline at dusk featuring Deansgate Square and Beetham Tower"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmdH8pZylIUrEVezBPXiG1KMM1WGo8HP-ygr1fN3wdxq44K6VKZ-AkTFO87LrsqbO1Qn827Oke2HjIxtDVLK_ddBAWxq2A6F-NEbPGBL_N_zwiZlPZhHqWUAjvnsergzScRy_jNRRAY_5whNvn1Q65RoJYCAvofKGleKQ5sIXi6H9bE4rKP1pqdLlXxdL8FDuxSsJE934G545VBC-5MippAW6usxPRzTzg87BSRhmRTnH1p53fnwX-b72DWhmdt85la8vhpCHjZyab"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-5xl px-8 text-center">
          <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase tracking-[0.2em]">
            Established Excellence
          </span>
          <h1 className="font-display-hero text-display-hero text-on-surface mb-8">
            Authoritative Legal Representation in Complex Matters
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Specialising in Personal Injury, Immigration, and Corporate Litigation for clients who demand meticulous expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-on-secondary font-button py-4 px-10 rounded-lg hover:brightness-110 transition-all uppercase tracking-widest"
            >
              Secure Counsel
            </Link>
            <Link
              to="/practice-areas"
              className="border border-outline font-button py-4 px-10 rounded-lg hover:bg-surface-variant/30 transition-all text-on-surface uppercase tracking-widest"
            >
              Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-outline-variant/30 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale">
          <span className="text-xl font-bold tracking-widest text-on-surface">THE LAW SOCIETY</span>
          <span className="text-xl font-bold tracking-widest text-on-surface">LEGAL 500</span>
          <span className="text-xl font-bold tracking-widest text-on-surface">CHAMBERS UK</span>
          <span className="text-xl font-bold tracking-widest text-on-surface">SOLICITORS REGULATION AUTHORITY</span>
        </div>
      </section>

      {/* Practice Areas Bento Grid */}
      <section className="py-section-gap px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Meticulous Core Specialisms</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We operate with surgical precision across three primary disciplines, ensuring that high-stakes litigation is handled with executive-level attention to detail.
            </p>
          </div>
          <Link
            className="font-label-caps text-label-caps text-secondary flex items-center gap-2 hover:translate-x-1 transition-transform mb-2 mt-4 md:mt-0"
            to="/practice-areas"
          >
            ALL SERVICES <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
          {/* Corporate Litigation - Large */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant/20 p-10 rounded-lg relative overflow-hidden group hover:border-secondary transition-colors">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">balance</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Corporate Litigation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                Navigating complex commercial disputes with a focus on strategic resolution and asset protection for UK and international firms.
              </p>
              <Link to="/practice-areas" className="font-button text-button text-secondary uppercase tracking-widest flex items-center gap-2">
                Explore Practice <span className="material-symbols-outlined text-base">chevron_right</span>
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 scale-150 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[300px]">business</span>
            </div>
          </div>
          {/* Personal Injury */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-10 rounded-lg group hover:border-secondary transition-colors flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">gavel</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Personal Injury</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Authoritative representation for life-changing events, securing the maximum redress for our clients.
            </p>
            <Link to="/practice-areas" className="font-button text-button text-secondary uppercase tracking-widest flex items-center gap-2">
              Explore Practice <span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          </div>
          {/* Immigration */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-10 rounded-lg group hover:border-secondary transition-colors flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">travel_explore</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Immigration</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Expert navigation of UK immigration law for high-net-worth individuals and corporate transfers.
            </p>
            <Link to="/practice-areas" className="font-button text-button text-secondary uppercase tracking-widest flex items-center gap-2">
              Explore Practice <span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          </div>
          {/* Consult CTA */}
          <div className="md:col-span-8 bg-surface-variant/10 border border-outline-variant/20 p-10 rounded-lg flex items-center justify-center text-center">
            <div className="max-w-md">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-4">Consult Our Lead Counsel</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Direct access to elite legal minds for complex case evaluations and risk assessments.
              </p>
              <Link to="/contact" className="inline-block bg-secondary text-on-secondary font-button py-3 px-8 rounded-lg uppercase tracking-widest">
                Request Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Principal */}
      <section className="py-section-gap bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-secondary/20 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
              <img
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                alt="Aatif Iqbal, Principal Solicitor of Jupiter Law"
                src="/founder.jpg"
              />
              <div className="absolute bottom-8 left-8 bg-surface p-6 border border-outline-variant/20 backdrop-blur-xl">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1">Aatif Iqbal</h4>
                <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Sole Partner &amp; Principal</p>
              </div>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase tracking-[0.2em]">Leadership</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Meet our Principal</h2>
              <p className="font-body-lg text-body-lg text-on-surface mb-6 leading-relaxed">
                Under the leadership of Aatif Iqbal, Jupiter Law has established a reputation for uncompromising excellence in the Manchester legal community.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 italic">
                "Our firm was founded on the principle that every client deserves meticulous, elite-level representation. We do not just process cases; we engineer successful legal outcomes with surgical precision."
              </p>
              <div className="space-y-4 border-l-2 border-secondary pl-8">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface uppercase text-[10px]">LITIGATION TRACK RECORD</p>
                  <p className="font-headline-md text-headline-md text-on-surface font-bold">£50M+</p>
                  <p className="text-xs text-on-surface-variant">IN RECOVERED ASSETS</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface uppercase text-[10px]">CASE SUCCESS RATE</p>
                  <p className="font-headline-md text-headline-md text-on-surface font-bold">98%</p>
                  <p className="text-xs text-on-surface-variant">ON COMPLEX IMMIGRATION APPEALS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap px-8">
        <div className="max-w-7xl mx-auto bg-surface-container-high border border-outline-variant/30 rounded-lg p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Expertise When It Matters Most</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Secure your legal position today with an authoritative initial assessment from our lead counsel.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-on-secondary font-button py-4 px-12 rounded-lg uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(233,193,118,0.3)] transition-all"
            >
              Book a Consultation
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-secondary/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 border-b-2 border-l-2 border-secondary/10 translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        </div>
      </section>
    </>
  );
}
