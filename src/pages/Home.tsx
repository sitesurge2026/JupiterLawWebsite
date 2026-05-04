import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, ShieldCheck, TrendingUp, Scale, Gavel, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="caps-label">ESTABLISHED IN MANCHESTER</span>
            <h1 className="hero-display mb-8 text-white">
              Our Legacy is Built on<br /><span className="text-brand-gold">Singular Authority.</span>
            </h1>
            <p className="body-lg text-brand-text-muted mb-10 max-w-lg">
              Jupiter Law represents the pinnacle of legal counsel in the North West. We provide authoritative representation for high-stakes litigation, guided by unwavering expertise.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="btn-primary">
                Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:col-span-5 lg:flex flex-col gap-6"
          >
            <div className="card-base flex flex-col justify-between min-h-[320px] shadow-2xl relative overflow-hidden">
              <div>
                <span className="caps-label mb-4">Manchester Chambers</span>
                <h2 className="text-2xl font-medium mb-4 leading-tight text-white">Bartle House<br />Oxford Court, M2 3WQ</h2>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Deeply integrated into the Manchester professional landscape, our chambers serve as the strategic hub for elite dispute resolution.
                </p>
              </div>
              <div className="stat-block">
                <span className="stat-val">Aatif Iqbal</span>
                <span className="stat-label">Principal Solicitor</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-5 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-brand-navy-dark border-y border-brand-outline overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16 flex flex-wrap justify-between items-center gap-10 opacity-40 hover:opacity-100 transition-opacity">
          <span className="font-semibold tracking-[0.2em] text-xs uppercase">Law Society of England & Wales</span>
          <span className="font-semibold tracking-[0.2em] text-xs uppercase">Chambers and Partners Ranked</span>
          <span className="font-semibold tracking-[0.2em] text-xs uppercase">Legal 500 Recognition</span>
          <span className="font-semibold tracking-[0.2em] text-xs uppercase">Manchester Law Society Member</span>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-gap px-8 md:px-16 bg-brand-navy">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="caps-label">Our Foundation</span>
              <h2 className="headline-lg text-white mb-6">Forged in the Industrial Heart of Manchester.</h2>
              <p className="body-lg text-brand-text-muted">
                Manchester is a city defined by its grit, its innovation, and its uncompromising work ethic. Jupiter Law was founded on these same principles.
              </p>
            </div>
            <Link to="/practice-areas" className="btn-label flex items-center gap-2 hover:text-brand-gold transition-colors pb-2 border-b border-white/10 uppercase">
              View Expertise <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "Authority", title: "Authority", desc: "Decisive legal strategies that command respect in the courtroom.", icon: Gavel },
              { id: "Meticulous", title: "Meticulous", desc: "Exhaustive attention to detail in every contractual clause and deposition.", icon: Scale },
              { id: "Integrity", title: "Integrity", desc: "Unwavering ethical standards that protect the reputation of our clients.", icon: ShieldCheck },
              { id: "Local", title: "Local Focus", desc: "Deeply integrated into the Manchester professional landscape.", icon: Building2 }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-brand-navy-light border border-brand-outline p-8 rounded-[4px] group transition-all duration-300 hover:bg-brand-surface hover:border-brand-gold cursor-pointer"
              >
                <feature.icon className="text-brand-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-[20px] font-medium text-white mb-4 group-hover:text-brand-gold transition-colors uppercase tracking-tight">{feature.title}</h3>
                <p className="text-[14px] leading-[1.5] text-brand-text-muted">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gap relative">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="bg-brand-surface-high rounded-lg p-12 md:p-20 relative overflow-hidden tonal-border text-center">
            <div className="relative z-10">
              <h2 className="headline-lg text-white mb-6">Ready to discuss your case?</h2>
              <p className="body-lg text-brand-text-muted mb-10 max-w-2xl mx-auto">
                Confidentiality is our baseline. Contact our Manchester chambers to schedule a private consultation with our principal advisers.
              </p>
              <Link to="/contact" className="magnetic-button bg-brand-gold px-12 py-5 rounded-default btn-label text-brand-gold-text inline-block">
                Initialise Consultation
              </Link>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold opacity-5 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
