import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
// Sample gallery images
const galleryImages = [
  {
    id: 1,
    category: 'wedding',
    url: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg',
    alt: 'Wedding couple in beautiful garden',
    size: 'large',
  },
  {
    id: 2,
    category: 'portrait',
    url: 'https://images.pexels.com/photos/1719344/pexels-photo-1719344.jpeg',
    alt: 'Portrait of woman in natural light',
    size: 'small',
  },
  {
    id: 3,
    category: 'fashion',
    url: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
    alt: 'Fashion model in urban setting',
    size: 'medium',
  },
  {
    id: 4,
    category: 'product',
    url: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg',
    alt: 'Elegant product shot with soft lighting',
    size: 'small',
  },
  {
    id: 5,
    category: 'event',
    url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
    alt: 'Corporate event photography',
    size: 'medium',
  },
  {
    id: 6,
    category: 'wedding',
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
    alt: 'Romantic wedding moment',
    size: 'medium',
  },
  {
    id: 7,
    category: 'portrait',
    url: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg',
    alt: 'Artistic portrait with dramatic lighting',
    size: 'large',
  },
  {
    id: 8,
    category: 'fashion',
    url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    alt: 'High fashion editorial shot',
    size: 'small',
  },
  {
    id: 9,
    category: 'product',
    url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    alt: 'Minimalist product photography',
    size: 'medium',
  },
  {
    id: 10,
    category: 'event',
    url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
    alt: 'Live event photography',
    size: 'large',
  },
];

const categories = ['all', 'wedding', 'portrait', 'fashion', 'product', 'event'];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Gallery</h2>
          <p data-aos="fade-up" className="text-gray-300 max-w-2xl mx-auto mb-8">
            Browse through our portfolio showcasing our finest work across different photography styles.
          </p>
          
          <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 capitalize
                  ${selectedCategory === category 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105`}
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={30} />
            </button>
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.url} 
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[85vh] object-contain transition-all duration-300 ease-in-out"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
