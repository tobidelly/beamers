import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
    caption: "Students engaged in interactive learning"
  },
  {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60",
    caption: "Our modern school facilities"
  },
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
    caption: "Art and creativity sessions"
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60",
    caption: "Well-stocked library"
  },
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60",
    caption: "Science laboratory activities"
  },
  {
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=60",
    caption: "Sports and physical education"
  },
  {
    url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=60",
    caption: "Group study sessions"
  },
  {
    url: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=800&auto=format&fit=crop&q=60",
    caption: "Music and performing arts"
  }
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    let newIndex = direction === 'next' 
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">School Life</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant atmosphere of Beamers International Schools through our gallery 
            showcasing various activities, facilities, and memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-5xl max-h-[80vh] px-4">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              <p className="text-white text-center mt-4">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};