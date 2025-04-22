import React from 'react';
import { ChevronUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer data-aos="fade-up" className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors mb-6"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          <h2 className="text-white font-bold text-2xl tracking-wider mb-2">Prasanna</h2>
          <p className="text-gray-400 text-sm max-w-md text-center">
            Creating timeless images that capture the emotion, beauty, and unique character of every subject.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Wedding</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Portrait</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Fashion</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Commercial</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Client Login</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for photography tips and exclusive offers.</p>
            
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lumina Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;