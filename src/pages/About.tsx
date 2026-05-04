import { motion } from 'motion/react';
import { Award, Briefcase, Users, History, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-32 pb-20 px-8 md:px-16 bg-brand-navy-dark">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="caps-label mb-6 block">Principal Solicitor</span>
          <h1 className="hero-display text-white mb-8">Aatif Iqbal</h1>
          <p className="body-lg text-brand-text-muted max-w-3xl mx-auto uppercase tracking-widest font-semibold text-xs border-y border-brand-outline py-4">
            Singular Leadership, Absolute Accountability.
          </p>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="section-gap px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="caps-label mb-6 block">Leadership</span>
            <h2 className="headline-lg text-white mb-8">Authoritative Counsel, Direct Accountability.</h2>
            <div className="space-y-6 text-brand-text-muted body-lg">
              <p>
                Jupiter Law is defined by the vision and relentless dedication of its Principal Solicitor, Aatif Iqbal. Unlike traditional firms where responsibility is diluted across vast partnerships, Jupiter Law offers a direct line to authoritative counsel.
              </p>
              <p>
                Aatif Iqbal has spent his career navigating the complexities of high-stakes legal disputes within the Manchester legal circuit. His approach is surgical, his preparation is exhaustive, and his commitment to his clients' success is absolute.
              </p>
              <p>
                Under his stewardship, the firm has become synonymous with strategic brilliance and executive-level litigation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 border border-brand-outline rounded-[4px] bg-brand-navy-light">
                <span className="caps-label text-[10px] mb-2">Expertise</span>
                <span className="text-lg font-bold text-white block">Complex Commercial Litigation</span>
              </div>
              <div className="p-6 border border-brand-outline rounded-[4px] bg-brand-navy-light">
                <span className="caps-label text-[10px] mb-2">Admission</span>
                <span className="text-lg font-bold text-white block">Solicitor of the Senior Courts</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4px] overflow-hidden border border-brand-outline">
              <img 
                src="/portrait.png" 
                alt="Aatif Iqbal - Principal Solicitor" 
                className="w-full h-full object-cover grayscale-img"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-surface p-10 rounded-[4px] border border-brand-outline hidden md:block">
              <ShieldCheck size={48} className="mb-4 text-brand-gold" />
              <p className="font-bold text-xl uppercase tracking-tighter text-white">SRA<br/>REGULATED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="section-gap px-8 md:px-16 bg-brand-navy-dark">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 aspect-video rounded-[4px] overflow-hidden border border-brand-outline">
                <img 
                  src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop" 
                  alt="Manchester Cityscape" 
                  className="w-full h-full object-cover grayscale-img"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="order-1 lg:order-2">
                <span className="caps-label mb-6 block">Our Foundation</span>
                <h2 className="headline-lg text-white mb-8">Forged in the Industrial Heart of Manchester.</h2>
                <p className="body-lg text-brand-text-muted mb-6">
                  Manchester is a city defined by its grit, its innovation, and its uncompromising work ethic. Jupiter Law was founded on these same principles. We are not just located in Manchester; we are of Manchester.
                </p>
                <p className="body-lg text-brand-text-muted">
                  From our central offices, we look out upon a city that demands results. We serve the entrepreneurs, the developers, and the high-net-worth individuals who drive this economy forward.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
