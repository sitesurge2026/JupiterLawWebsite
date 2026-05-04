import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-400/20">
      <div className="w-full py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-bold text-slate-200 uppercase tracking-tighter block">
            Jupiter Law
          </Link>
          <p className="text-xs uppercase tracking-widest text-slate-400 max-w-xs">
            Authoritative Legal Representation across the United Kingdom. Regulated by the Solicitors Regulation Authority.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-amber-400 transition-colors">language</span>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-amber-400 transition-colors">verified_user</span>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-amber-400 transition-colors">gavel</span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-label-caps text-label-caps text-slate-100 uppercase mb-6">Manchester Chambers</p>
          <div className="text-xs uppercase tracking-widest text-slate-400 space-y-2">
            <p>Bartle House, Oxford Court</p>
            <p>Manchester, M2 3WQ</p>
            <p className="text-amber-400 mt-4">T: 07711 287 111</p>
            <p>E: enquiries@jupiterlaw.co.uk</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-label-caps text-label-caps text-slate-100 uppercase mb-6">Quick Links</p>
          <ul className="text-xs uppercase tracking-widest text-slate-400 space-y-3">
            <li><Link className="hover:text-amber-400 transition-colors" to="/practice-areas">Practice Areas</Link></li>
            <li><Link className="hover:text-amber-400 transition-colors" to="/about">About Us</Link></li>
            <li><Link className="hover:text-amber-400 transition-colors" to="/contact">Contact</Link></li>
            <li><a className="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-amber-400 transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-400/10 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">
          © 2024 Jupiter Law. Authoritative Legal Representation.
        </p>
      </div>
    </footer>
  );
}
