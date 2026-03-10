import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/salem.jpg" 
                alt="Salem Home Innovation" 
                className="h-12 w-auto rounded-sm brightness-90"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl text-white tracking-tight">
                SALEM HOME
              </span>
            </Link>

            <p className="text-sm leading-relaxed opacity-70">
              Your trusted partner for property sales, rentals, home renovations, and property management in Johannesburg and surrounding areas.
            </p>

            <div className="flex gap-4">
              <a href="https://facebook.com/alain.ngudia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/alainngudia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/in/alain-kalengayi-4bbb70174/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.tiktok.com/@alain.kale5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.13 2.02.74 2.81.59.8 1.54 1.29 2.54 1.35 1.02.07 2.07-.3 2.84-1.02.67-.62 1.07-1.51 1.1-2.42V0h.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/properties" className="hover:text-white transition-colors">Available Properties</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Property Rentals</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Home Renovations</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Property Management</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Real Estate Consulting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-stone-500" />
                <span>51, 5th Avenue, Fontainebleau, Johannesburg, 2032</span>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-stone-500" />
                <a href="tel:+27100167454" className="hover:text-white transition-colors">
                  +27 10 016 7454
                </a>
              </li>

              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-stone-500" />
                <a href="mailto:info@salemhi.co.za" className="hover:text-white transition-colors">
                  info@salemhi.co.za
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 text-center text-xs opacity-50">
          <p>&copy; {currentYear} Salem Home Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
