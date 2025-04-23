import React from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";
AOS.init();

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1f1f1f] to-[#2a133b] bg-[length:300%_300%] animate-loop-gradient" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-purple-900/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[35%] right-[10%] w-44 h-44 sm:w-72 sm:h-72 bg-indigo-900/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-[20%] left-[25%] w-40 h-40 sm:w-60 sm:h-60 bg-gray-800/30 rounded-full blur-3xl animate-blob animation-delay-6000" />
      </div>

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Capturing Emotion Through the Lens
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Elevating moments into timeless memories with artistic vision and technical precision.
        </p>

        {/* Buttons */}
        <div className="fl flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#gallery"
            className="bb px-6 sm:px-8 py-3 text-sm sm:text-base bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-medium rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className=" bb px-6 sm:px-8 py-3 text-sm sm:text-base border border-white text-white font-medium rounded-full transition-transform duration-300 hover:scale-105 hover:bg-white/10"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll Down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
