import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

AOS.init();

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className={`nv fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/70 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-white font-bold text-xl sm:text-2xl tracking-wide"
        >
          PRASANNA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm transition-transform transform hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Slide Menu with Gradient Background */}
      <div
        className={`fixed  top-0 right-0 h-full w-4/5 max-w-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col mt-6 px-6 space-y-5 text-base text-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
