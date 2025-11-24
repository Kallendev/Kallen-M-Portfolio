import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
}

// ⭐ Replace these with your actual Cloudinary URLs
const cloudinaryImages: GalleryImage[] = [
  {
    id: "1",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530679/samples/cup-on-a-table.jpg",
    caption: "Hackathon Nairobi 2025 — Team Project Collaboration",
  },
  {
    id: "2",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530678/samples/coffee.jpg",
    caption: "Code Review Session — Pair Programming Excellence",
  },
  {
    id: "3",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530665/samples/people/bicycle.jpg",
    caption: "UI/UX Design Workshop — Crafting User Experiences",
  },
  {
    id: "4",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530671/samples/two-ladies.jpg",
    caption: "Tech Conference 2024 — Speaking on Modern Web Development",
  },
  {
    id: "5",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530663/samples/bike.jpg",
    caption: "Design Sprint — Prototyping Mobile Applicationse",
  },
  {
    id: "6",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530679/samples/woman-on-a-football-field.jpg",
    caption: "Developer Meetup — Networking with the Tech Community",
  },
];

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setImages(cloudinaryImages);
    setLoading(false);
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#00F0FF] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              A visual journey through my projects, events, and creative moments.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
          </div>

          {images.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                Gallery images coming soon. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#00F0FF]/20"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={image.image_url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm font-medium p-4">
                      {image.caption}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#00F0FF] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
