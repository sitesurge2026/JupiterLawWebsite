import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-32 pb-20 px-8 md:px-16 bg-brand-navy-dark">
        <div className="max-w-[1280px] mx-auto">
          <span className="caps-label text-brand-gold mb-6 block font-bold">Confidential Access</span>
          <h1 className="hero-display text-white mb-8">Begin the Engagement.</h1>
          <p className="body-lg text-brand-text-muted max-w-2xl">
            Our offices are situated at the heart of Manchester's professional district. We operate by appointment only to ensure absolute client confidentiality.
          </p>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section-gap px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
          
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="caps-label mb-8">Manchester Chambers</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 border border-brand-outline rounded-[2px] flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-white font-semibold mb-2">Chambers Location</span>
                    <p className="text-brand-text-muted text-sm leading-relaxed">
                      Bartle House, Oxford Court<br />Manchester, M2 3WQ<br />United Kingdom
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 border border-brand-outline rounded-[2px] flex items-center justify-center shrink-0">
                    <Phone className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-white font-semibold mb-2">Direct Line</span>
                    <p className="text-brand-text-muted text-sm">07711 287 111</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 border border-brand-outline rounded-[2px] flex items-center justify-center shrink-0">
                    <Mail className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-white font-semibold mb-2">Enquiries</span>
                    <p className="text-brand-text-muted text-sm">enquiries@jupiterlaw.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border border-brand-gold/20 rounded-[2px] bg-brand-gold/5">
              <div className="flex items-center gap-3 mb-4 text-brand-gold">
                <MessageCircle size={20} />
                <span className="font-bold uppercase tracking-widest text-[10px]">Secure Channel</span>
              </div>
              <p className="text-brand-text-muted text-xs leading-5 italic">
                All communications via this portal are protected under legal professional privilege. Encrypted digital consultations are available upon request.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-surface tonal-border p-10 md:p-14 rounded-lg"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="caps-label text-[10px] text-brand-gold block mb-3 group-focus-within:translate-x-1 transition-transform">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Alastair Sterling"
                      className="w-full bg-brand-navy-dark border-b border-brand-outline py-3 px-1 text-brand-text focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text-muted/20"
                    />
                  </div>
                  <div className="relative group">
                    <label className="caps-label text-[10px] text-brand-gold block mb-3 group-focus-within:translate-x-1 transition-transform">Professional Email</label>
                    <input 
                      type="email" 
                      placeholder="alastair@sterling-equity.com"
                      className="w-full bg-brand-navy-dark border-b border-brand-outline py-3 px-1 text-brand-text focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text-muted/20"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="caps-label text-[10px] text-brand-gold block mb-3 group-focus-within:translate-x-1 transition-transform">Subject of Enquiry</label>
                  <select className="w-full bg-brand-navy-dark border-b border-brand-outline py-3 px-1 text-brand-text focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                    <option>Corporate Litigation</option>
                    <option>Private Asset Management</option>
                    <option>Divorce & Family Divestment</option>
                    <option>Commercial Arbitration</option>
                    <option>Other / General</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="caps-label text-[10px] text-brand-gold block mb-3 group-focus-within:translate-x-1 transition-transform">Enquiry Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="Briefly outline your situation. All details shared are confidential."
                    className="w-full bg-brand-navy-dark border-b border-brand-outline py-3 px-1 text-brand-text focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder:text-brand-text-muted/20"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full magnetic-button bg-brand-gold py-5 btn-label text-brand-gold-text text-center rounded-default inline-flex items-center justify-center gap-4"
                >
                  Request Consultation <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-8 md:px-16 py-12">
        <div className="max-w-[1280px] mx-auto h-[400px] bg-brand-surface rounded-lg tonal-border relative overflow-hidden grayscale brightness-50">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-brand-text-muted">
            <MapPin size={48} className="mb-4 text-brand-gold" />
            <span className="caps-label">Map Interface Suppressed for Discretion</span>
            <p className="text-xs mt-2">100 King St, Manchester, M2 4WU</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop" 
            alt="Manchester Map Placeholder" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
