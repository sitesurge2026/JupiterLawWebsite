import React from 'react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Manchester skyline at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3fAxwKTonxtYH9aDa9ZWnHntjKsTn6TAM2R6U6Ef4S5_KbEdvtJheCmbo8Xhg9NpHrtRRYEAIKcSgiX7EUmlgnrsp9pOzexunXNPxTKSNxnOXP_22O9d0yCYOBlexwHQwKKOkArGk0MkBk0q6D4ywlk5G8xQ5tnTwgi6rJyjczKsrwAdSFkus5YtPG4pG9l_fdRCunNK304m1iIvaoHZb2r38ihuOFWcgncsZ1icGvh6Jw_OVnIwQONUUmx1OvWR7N6Jn9G6yEji"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-secondary block mb-4">ESTABLISHED IN MANCHESTER</span>
            <h1 className="font-display-hero text-display-hero text-on-surface mb-6">Our Legacy is Built on Singular Authority.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Jupiter Law represents the pinnacle of legal counsel in the North West. We provide authoritative representation for high-stakes litigation, guided by unwavering expertise.
            </p>
          </div>
        </div>
      </section>

      {/* The Principal Solicitor Section */}
      <section className="py-section-gap px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Aatif Iqbal, Principal Solicitor"
                src="/founder.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-surface-container-highest border border-outline-variant/50 p-6 hidden md:block">
              <div className="font-label-caps text-label-caps text-secondary">PRINCIPAL SOLICITOR</div>
              <div className="font-headline-md text-headline-md text-on-surface">Aatif Iqbal</div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-16 mt-12 lg:mt-0">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Singular Leadership, Absolute Accountability.</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Jupiter Law is defined by the vision and relentless dedication of its Principal Solicitor, Aatif Iqbal. Unlike traditional firms where responsibility is diluted across vast partnerships, Jupiter Law offers a direct line to authoritative counsel.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Aatif Iqbal has spent his career navigating the complexities of high-stakes legal disputes within the Manchester legal circuit. His approach is surgical, his preparation is exhaustive, and his commitment to his clients' success is absolute. Under his stewardship, the firm has become synonymous with strategic brilliance and executive-level litigation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
                <div>
                  <div className="font-label-caps text-label-caps text-secondary mb-2">EXPERTISE</div>
                  <div className="font-body-md text-body-md text-on-surface italic">Complex Commercial Litigation</div>
                </div>
                <div>
                  <div className="font-label-caps text-label-caps text-secondary mb-2">ADMISSION</div>
                  <div className="font-body-md text-body-md text-on-surface italic">Solicitor of the Senior Courts</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">REGULATED BY THE SOLICITORS REGULATION AUTHORITY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Story / Manchester Roots */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-caps text-label-caps text-secondary block mb-4">OUR FOUNDATION</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Forged in the Industrial Heart of Manchester.</h2>
              <div className="space-y-6">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Manchester is a city defined by its grit, its innovation, and its uncompromising work ethic. Jupiter Law was founded on these same principles. We are not just located in Manchester; we are of Manchester.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  From our central offices, we look out upon a city that demands results. We serve the entrepreneurs, the developers, and the high-net-worth individuals who drive this economy forward. Our story is one of rapid ascent, achieved through a refusal to accept anything less than total legal victory for those we represent.
                </p>
              </div>
            </div>
            {/* Values Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-8 border border-outline-variant/20 bg-surface-container-high rounded-lg">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">gavel</span>
                <h3 className="font-headline-md text-xl text-on-surface mb-2">Authority</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Decisive legal strategies that command respect in the courtroom.</p>
              </div>
              <div className="p-8 border border-outline-variant/20 bg-surface-container-high rounded-lg">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">precision_manufacturing</span>
                <h3 className="font-headline-md text-xl text-on-surface mb-2">Meticulous</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Exhaustive attention to detail in every contractual clause and deposition.</p>
              </div>
              <div className="p-8 border border-outline-variant/20 bg-surface-container-high rounded-lg">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">shield</span>
                <h3 className="font-headline-md text-xl text-on-surface mb-2">Integrity</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Unwavering ethical standards that protect the reputation of our clients.</p>
              </div>
              <div className="p-8 border border-outline-variant/20 bg-surface-container-high rounded-lg">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">location_city</span>
                <h3 className="font-headline-md text-xl text-on-surface mb-2">Local Focus</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Deeply integrated into the Manchester professional landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-t border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
          <span className="font-label-caps text-label-caps text-slate-400">LAW SOCIETY OF ENGLAND &amp; WALES</span>
          <span className="font-label-caps text-label-caps text-slate-400">CHAMBERS AND PARTNERS RANKED</span>
          <span className="font-label-caps text-label-caps text-slate-400">LEGAL 500 RECOGNITION</span>
          <span className="font-label-caps text-label-caps text-slate-400">MANCHESTER LAW SOCIETY MEMBER</span>
        </div>
      </section>
    </>
  );
}
