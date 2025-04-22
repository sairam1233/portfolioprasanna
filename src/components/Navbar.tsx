import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import './index.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#packages', label: 'Packages' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/70 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-white font-bold text-2xl tracking-wider font-sans"
          >
            PRASANNA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-shadow-lg"
                style={{
                  transitionDelay: `${index * 0.1}s`, // Stagger animation on hover
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className="md:hidden fixed top-0 left-0 w-full h-full bg-black/80 z-40 flex justify-center items-center transition-all duration-300 ease-in-out transform opacity-100"
            onClick={() => setIsOpen(false)} // Close on click outside
          >
            <div
              className="flex flex-col space-y-6 text-white text-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-shadow-lg py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
