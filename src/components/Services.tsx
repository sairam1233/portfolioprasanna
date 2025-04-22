import React from 'react';
import { Flower2, Video, Baby , Users, User, Cake, PartyPopper, Heart, Camera } from 'lucide-react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const services = [
  {
    icon: <Heart size={40} className="text-pink-400 mb-4" />,
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with artistic vision and technical precision.',
  },
  {
    icon: <User size={40} className="text-blue-400 mb-4" />,
    title: 'Portrait Sessions',
    description: 'Revealing your authentic self through carefully crafted portraiture that tells your story.',
  },
  {
    icon: <Baby size={40} className="text-pink-400 mb-4" />,
    title: 'Kids Photography',
    description: 'Capturing joyful moments and timeless memories with a playful and creative touch.',
  }, 
  {
    icon: <Flower2 size={40} className="text-rose-400 mb-4" />,
    title: 'Half Saree Ceremony',
    description: 'Preserving the elegance and grace of this beautiful tradition with vibrant, heartfelt photography.',
  },
  {
    icon: <Cake size={40} className="text-fuchsia-500 mb-4" />,
    title: 'Birthday Photography',
    description: 'Capturing laughter, fun, and all the special moments that make birthdays unforgettable.',
  },
  {
    icon: <PartyPopper size={40} className="text-yellow-400 mb-4" />,
    title: 'Event Coverage',
    description: 'Documenting corporate events, galas, and celebrations with unobtrusive professionalism.',
  },
  {
    icon: <Users size={40} className="text-green-400 mb-4" />,
    title: 'Family Sessions',
    description: 'Preserving precious family moments with natural, joyful photography.',
  },
  {
    icon: <Video size={40} className="text-orange-500 mb-4" />,
    title: 'Candid Video',
    description: 'Capturing genuine moments in motion with a storytelling style that feels natural and real.',
  },
  {
    icon: <Camera size={40} className="text-teal-500 mb-4" />,
    title: 'Live Streaming',
    description: 'Seamlessly streaming your events in real-time with professional quality and clarity.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of photography services tailored to your unique vision and needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              data-aos="fade-up"
              key={index}
              className="cd glass-card p-8 rounded-xl text-center backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10 hover:shadow-glow group"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#contact" className="text-sm font-medium text-white hover:text-purple-300 transition">
                  Book a Session →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;