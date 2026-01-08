import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaSearch, FaTimes } from 'react-icons/fa';

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const filterImages = (images) => {
    if (category === 'all') return images;
    return images.filter(img => img.category === category);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding text-center">
        <FadeInAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Gallery
          </h1>
        </FadeInAnimation>
        <FadeInAnimation delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning lunar photographs, capturing the moon's
            beauty in various phases and celestial events.
          </p>
        </FadeInAnimation>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                category === cat.value
                  ? 'bg-moon-blue text-white'
                  : 'bg-moon-gray/30 text-gray-300 hover:bg-moon-gray/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterImages(galleryImages).map((image, index) => (
            <FadeInAnimation key={index} delay={index * 0.1}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <FaSearch className="w-8 h-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            </FadeInAnimation>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-moon-silver"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const categories = [
  { value: 'all', label: 'All' },
  { value: 'full-moon', label: 'Full Moon' },
  { value: 'phases', label: 'Moon Phases' },
  { value: 'eclipse', label: 'Eclipses' },
  { value: 'landscape', label: 'Moonscapes' }
];

const galleryImages = [
  {
    url: './gallery/full-moon-1.jpg',
    title: 'Full Moon Glory',
    description: 'A detailed capture of the full moon showing its magnificent craters and maria.',
    category: 'full-moon'
  },
  {
    url: './gallery/eclipse-1.jpg',
    title: 'Lunar Eclipse',
    description: 'The moon during a total lunar eclipse, showcasing the blood moon effect.',
    category: 'eclipse'
  },
  {
    url: './gallery/phase-1.jpg',
    title: 'Waxing Crescent',
    description: 'A delicate crescent moon phase with earthshine.',
    category: 'phases'
  },
  {
    url: './gallery/landscape-1.jpg',
    title: 'Mountain Moonrise',
    description: 'The moon rising over mountain peaks at twilight.',
    category: 'landscape'
  },
  // Add more images as needed
];

export default Works;