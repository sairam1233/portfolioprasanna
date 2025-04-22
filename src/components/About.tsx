import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card max-w-6xl mx-auto p-6 md:p-12 rounded-2xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div data-aos="fade-right" className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">About Prasanna Studio</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Prasanna Studio, established in 2015, started as a passion project and has since evolved into one of the most in-demand photography studios in the area. We blend technical skill with creative vision, crafting photos that truly capture emotion and tell an authentic story.</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
              With years of experience and a creative eye, every shoot is approached with a unique perspective. From the quiet connection in a portrait to the raw emotion of a wedding or the clean elegance of product photography, we’re all about capturing what truly matters.              </p>
              <p className="text-gray-300 leading-relaxed">
              Great photography goes beyond the camera—it's about noticing the little things, understanding the moment, and creating something that feels real and meaningful.              </p>
            </div>
            <div data-aos="fade-left" className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg" 
                alt="Photographer with camera" 
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-aos="fade-up" className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-300">
              To turn your special moments into lasting memories that feel personal, real, and unforgettable.              </p>
            </div>
            <div data-aos="fade-up" className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
              <p className="text-gray-300">
              We combine skill with creativity to deliver photos that are both beautiful and full of feeling.              </p>
            </div>
            <div data-aos="fade-up" className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Our Promise</h3>
              <p className="text-gray-300">
              Every photo is thoughtfully crafted with care and a focus on true artistic vision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;