import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/practice-areas', label: 'Practice Areas' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-400/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-100 uppercase">
          Jupiter Law
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`tracking-tight text-sm uppercase font-semibold transition-colors ${
                isActive(link.to)
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                  : 'text-slate-300 hover:text-amber-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg font-button text-button uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all"
          >
            Consultation
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-400/20 px-8 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block tracking-tight text-sm uppercase font-semibold transition-colors ${
                isActive(link.to) ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
