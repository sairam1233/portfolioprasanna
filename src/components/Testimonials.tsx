import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    type: 'Wedding Clients',
    quote: 'Lumina captured our wedding day better than we could have ever imagined. The photos have such an emotional quality to them—they truly tell the story of our day. Every time we look at them, we\'re transported back to those special moments.',
    image: 'https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alexandra Chen',
    type: 'Fashion Model',
    quote: 'Working with Lumina Studio was an absolute pleasure. They have an exceptional eye for composition and lighting that brings out the best in every subject. The images we created together have become the cornerstone of my portfolio.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Luxe Timepieces',
    type: 'Product Client',
    quote: 'The product photography exceeded our expectations. Every detail of our watches was captured with precision and artistry. The images have significantly improved our online conversion rates and brand perception.',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
    rating: 5,
  },
  {
    id: 4,
    name: 'The Johnson Family',
    type: 'Portrait Session',
    quote: 'We\'ve been coming to Lumina for our family portraits for three years now, and they always manage to capture our family\'s personality and connections beautifully. Even our teenagers look forward to the sessions!',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Client Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences working with Lumina Studio.
          </p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden p-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div data-aos="zoom-out" key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="glass-card p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-purple-400 p-1">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-200 text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                    
                    <cite className="not-italic">
                      <span className="font-bold text-white block">{testimonial.name}</span>
                      <span className="text-purple-400 text-sm">{testimonial.type}</span>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;