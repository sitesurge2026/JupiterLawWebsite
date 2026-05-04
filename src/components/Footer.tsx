import { Link } from 'react-router-dom';
import { Triangle, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Triangle className="text-brand-gold fill-brand-gold/10 w-7 h-7" />
              <span className="text-xl font-semibold tracking-tight">JUPITER LAW</span>
            </Link>
            <p className="text-brand-text-muted body-medium mb-6">
              Singular Authority in Manchester. Professional legal representation regulated by the Solicitors Regulation Authority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-[2px] hover:bg-brand-gold hover:text-brand-gold-text transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-[2px] hover:bg-brand-gold hover:text-brand-gold-text transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="caps-label text-brand-gold mb-6">Practice Areas</h4>
            <ul className="flex flex-col gap-3 text-brand-text-muted">
              <li><Link to="/practice-areas" className="hover:text-brand-text transition-colors">Complex Commercial Litigation</Link></li>
              <li><Link to="/practice-areas" className="hover:text-brand-text transition-colors">Professional Advocacy</Link></li>
              <li><Link to="/practice-areas" className="hover:text-brand-text transition-colors">Corporate Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="caps-label text-brand-gold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-brand-text-muted">
              <li><Link to="/about" className="hover:text-brand-text transition-colors">Our Firm</Link></li>
              <li><Link to="/about" className="hover:text-brand-text transition-colors">Legal Team</Link></li>
              <li><Link to="/contact" className="hover:text-brand-text transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-text transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="caps-label text-brand-gold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-brand-text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold w-5 h-5 shrink-0" />
                <span>Bartle House, Oxford Court<br />Manchester, M2 3WQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold w-5 h-5 shrink-0" />
                <span>07711 287 111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold w-5 h-5 shrink-0" />
                <span>enquiries@jupiterlaw.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-brand-text-muted/50 gap-4">
          <p>© 2026 Jupiter Law. Regulated by the Solicitors Regulation Authority.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-text">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
