import React from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Infinite animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1f1f1f] to-[#2a133b] bg-[length:300%_300%] animate-loop-gradient" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Blurred animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-purple-900/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[35%] right-[20%] w-72 h-72 bg-indigo-900/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-[20%] left-[30%] w-60 h-60 bg-gray-800/30 rounded-full blur-3xl animate-blob animation-delay-6000" />
      </div>

      {/* Main Content */}
      <div data-aos="fade-up" className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Capturing Emotion Through the Lens
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Elevating moments into timeless memories with artistic vision and technical precision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#gallery"
            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-medium rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white text-white font-medium rounded-full transition-transform duration-300 hover:scale-105 hover:bg-white/10"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll Down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
