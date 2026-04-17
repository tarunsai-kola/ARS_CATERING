
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Your list of images is now directly inside the component file.
const imageUrls: string[] = [
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967779/IMG-20250923-WA0063_r5bwpr.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967779/IMG-20250923-WA0064_jsd1y6.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967776/IMG-20250923-WA0062_y8ytuw.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967775/IMG-20250923-WA0061_rtqjp5.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967774/IMG-20250923-WA0059_i63twk.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967774/IMG-20250923-WA0058_oy8iqz.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967774/IMG-20250923-WA0056_irwqap.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967773/IMG-20250923-WA0057_ekdsn0.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967770/IMG-20250923-WA0055_dyyrz0.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967769/IMG-20250923-WA0054_g664hd.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967769/IMG-20250923-WA0053_cqngms.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967768/IMG-20250923-WA0051_fsclwd.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967768/IMG-20250923-WA0052_nwehwu.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967768/IMG-20250923-WA0050_iewm87.jpg",
  "https://res.cloudinary.com/dkl5lrqat/image/upload/v1758967767/IMG-20250923-WA0049_dh8mt6.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipORWDUdBTgJ8_HZK3D1CJDy4VTpr13KA8pVyw08=w141-h141-n-k-no-nu"
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % imageUrls.length);
  };
  const prevImage = () => {
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold text-secondary-800 mb-6">Our Gallery</h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A visual journey through our culinary creations and memorable events.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imageUrls.map((url, index) => (
              <motion.div
                key={url}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageUrls[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

