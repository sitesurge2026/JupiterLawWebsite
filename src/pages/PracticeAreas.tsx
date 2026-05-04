import { motion } from 'motion/react';
import { Building2, Landmark, Gavel, Scale, Briefcase, FileText, Lock, Globe } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    { 
      title: "Complex Commercial Litigation", 
      icon: Building2, 
      desc: "Surgical and exhaustive preparation for high-stakes commercial disputes and executive-level litigation.",
      className: "md:col-span-2 md:row-span-2"
    },
    { 
      title: "Professional Advocacy", 
      icon: Lock, 
      desc: "Strategic representation that commands respect within the Manchester legal circuit.",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Corporate Strategy", 
      icon: Scale, 
      desc: "Authoritative legal counsel for corporate entities facing multi-jurisdictional challenges.",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Private Client Advocacy", 
      icon: Landmark, 
      desc: "Direct-line counsel for high-net-worth individuals requiring total legal discretion.",
      className: "md:col-span-1 md:row-span-2"
    },
    { 
      title: "Arbitration", 
      icon: Briefcase, 
      desc: "Decisive legal strategies refined for commercial arbitration and mediation.",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Asset Protection", 
      icon: Globe, 
      desc: "Meticulous oversight of generational wealth and complex corporate asset structures.",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-32 pb-20 px-8 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="caps-label text-brand-gold mb-6 block">Our Expertise</span>
          <h1 className="hero-display text-white mb-8">Specialised Litigation & Strategy.</h1>
          <p className="body-lg text-brand-text-muted max-w-3xl mx-auto">
            Deep legal insight tailored for the complex requirements of corporate leaders and private figures.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-8 md:px-16 max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.99 }}
              className={`bg-brand-surface p-10 rounded-default tonal-border group relative overflow-hidden flex flex-col justify-end ${area.className}`}
            >
              <div className="absolute top-10 left-10 text-brand-gold transition-transform group-hover:-translate-y-2 group-hover:scale-110">
                <area.icon size={32} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{area.title}</h3>
                <p className="text-brand-text-muted body-medium max-w-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {area.desc}
                </p>
              </div>
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Services list */}
      <section className="section-gap px-8 md:px-16 bg-brand-navy-dark mt-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="headline-lg text-white mb-8">Specific Advisory Chambers</h2>
            <div className="space-y-4">
              {[
                "Corporate Governance & Ethics",
                "IP Protection & Patent Disputes",
                "High-Value Real Estate Litigation",
                "Media & Entertainment Defence",
                "Regulatory Compliance Oversight"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5 text-brand-text-muted hover:text-brand-gold transition-colors cursor-pointer group">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                  <span className="text-lg font-medium">{item}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"><Gavel size={16} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-surface tonal-border p-12 rounded-lg flex flex-col justify-center">
            <h3 className="headline-md mb-6 text-white text-center">Uncompromising Quality.</h3>
            <p className="body-lg text-brand-text-muted text-center mb-10">
              Each practice area is led by a partner with a minimum of 20 years experience in Manchester litigation.
            </p>
            <div className="flex justify-center">
              <FileText className="text-brand-gold w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
