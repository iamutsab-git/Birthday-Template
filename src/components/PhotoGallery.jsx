import { useState } from 'react';
import { X, Heart, Camera } from 'lucide-react';

// Sample photos - replace these URLs with your actual photos
const samplePhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=600&fit=crop",
    alt: "Beautiful memory 1",
    caption: "Our first adventure together"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=500&fit=crop",
    alt: "Beautiful memory 2",
    caption: "Sweet moments"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/fd/f7/10/fdf710aeb1c17b096bcdad0ee4bc5163.jpg",
    alt: "Beautiful memory 3",
    caption: "Life like Flower"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=550&fit=crop",
    alt: "Beautiful memory 4",
    caption: "Golden hour with you"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop",
    alt: "Beautiful memory 5",
    caption: "Dancing in the kitchen"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop",
    alt: "Beautiful memory 6",
    caption: "Sunday morning coffee"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header remains the same */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Camera className="text-pink-400 w-8 h-8 mr-3" />
            <h2 className="text-4xl font-light text-gray-800">
              Our Beautiful Memories
            </h2>
            <Heart className="text-pink-400 w-8 h-8 ml-3 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg">
            Every photo tells our story
          </p>
        </div>
        
        {/* Fixed-size grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {samplePhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative group aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Fixed-size image container */}
              <div className="w-full h-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal (unchanged) */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-5xl max-h-full w-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                {selectedPhoto.caption && (
                  <div className="mt-6 text-center max-w-2xl">
                    <p className="text-white text-xl font-light bg-black/50 rounded-2xl px-6 py-3 backdrop-blur-sm">
                      {selectedPhoto.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;