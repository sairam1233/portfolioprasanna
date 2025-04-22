import React from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const packages = [
  {
    name: 'SILVER',
    price: '$699',
    description: 'Perfect for individuals and small events requiring professional quality photography.',
    features: [
      'Groom formalities',
      'Bride formalities',
      'Traditional Photo',
      'Traditional Video',
      'Groom haldi',
      'Bride haldi',
      'Wedding ceremony',
      'Outputs:12x36 album',
      '4K Video 3hr,With pendrive,'

    ],
    most_popular: false,
  },
  {
    name: 'GOLD',
    price: '$1,299',
    description: 'Our most popular package for weddings and significant events with comprehensive coverage.',
    features: [
      '8-hour photo session',
      'Multiple locations',
      '200+ edited digital images',
      'Online gallery (90 days)',
      'Print release for personal use',
      '11x14" Fine art print',
      'Engagement session included',
      'Second photographer',
    ],
    most_popular: true,
  },
  {
    name: 'PLATINUM',
    price: '$2,499',
    description: 'The ultimate photography experience with premium products and unlimited coverage.',
    features: [
      'Full day coverage (up to 12 hours)',
      'Unlimited locations',
      '500+ edited digital images',
      'Online gallery (1 year)',
      'Print release for personal use',
      'Custom handcrafted album',
      'Engagement session included',
      'Second photographer',
      '16x20" Fine art canvas print',
      'Rush delivery (72 hours)',
    ],
    most_popular: false,
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-black relative">
      <div data-aos="fade-up" className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Investment</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect photography package to meet your needs and budget.
          </p>
        </div>
        
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              
              key={index}
              className={`glass-card p-8 rounded-xl bg-white/5 backdrop-blur-md border ${
                pkg.most_popular 
                ? 'border-purple-400 relative transform scale-105 md:scale-110 shadow-glow' 
                : 'border-white/10'
              } flex flex-col h-full`}
            >
              {pkg.most_popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs uppercase font-bold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">{pkg.description}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact"
                className={`block text-center py-3 px-4 rounded-full font-medium transition duration-300 ${
                  pkg.most_popular 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transform hover:scale-105' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-white mb-6">Additional Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div data-aos="zoom-in" className="glass-card p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-bold text-white mb-2">Drone Photography</h4>
              <p className="text-gray-300 text-sm">Breathtaking aerial shots to add a unique perspective. <span className="text-purple-400">+$299</span></p>
            </div>
            <div data-aos="zoom-in" className="glass-card p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-bold text-white mb-2">Same-Day Edits</h4>
              <p className="text-gray-300 text-sm">Preview select images on the same day of your session. <span className="text-purple-400">+$199</span></p>
            </div>
            <div data-aos="zoom-in" className="glass-card p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-bold text-white mb-2">Fine Art Albums</h4>
              <p className="text-gray-300 text-sm">Handcrafted albums with archival quality materials. <span className="text-purple-400">Starting at $499</span></p>
            </div>
            <div data-aos="zoom-in" className="glass-card p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-bold text-white mb-2">Extended Hours</h4>
              <p className="text-gray-300 text-sm">Additional coverage hours for your event. <span className="text-purple-400">$150/hour</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;