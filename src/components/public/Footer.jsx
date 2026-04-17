import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-dark border-t border-white/5 pt-20 pb-10 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-all">
                S
              </div>
              <span className="text-3xl font-display font-bold text-white tracking-tight">
                Sportify
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed text-lg">
              Mumbai's premier sports booking platform. Elevate your game with elite venues and seamless scheduling.
            </p>
            <div className="flex gap-4 pt-4">
              {['FB', 'X', 'IG', 'IN'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 font-bold text-xs">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">Elite About Us</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Explore Venues</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Member Perks</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">24/7 Support</Link></li>
            </ul>
          </div>

          {/* Popular Sports */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-8">Top Disciplines</h3>
            <ul className="space-y-4">
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Basketball Courts</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Gymnastics Hub</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Football Turfs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-8">HQ Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={24} />
                <span className="text-white/70"> Andheri East, Mumbai, 400093</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary-500 shrink-0" size={24} />
                <span className="text-white/70">+91 99676 73241</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary-500 shrink-0" size={24} />
                <span className="text-white/70">inspiresports17@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} SPORTIFY PREMIUM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
