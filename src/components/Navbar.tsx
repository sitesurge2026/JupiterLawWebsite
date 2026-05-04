import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Triangle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Triangle className="text-brand-gold fill-brand-gold/10 w-6 h-6 transition-transform group-hover:scale-110" />
          <span className="text-xl font-semibold tracking-[0.1em] text-brand-text uppercase">Jupiter Law</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="btn-label text-brand-text-muted hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="magnetic-button bg-brand-gold px-6 py-3 rounded-default btn-label text-brand-gold-text"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-brand-navy-dark border-b border-white/10 px-8 py-10 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-brand-text hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
