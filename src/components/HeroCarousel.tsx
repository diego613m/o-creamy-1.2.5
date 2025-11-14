import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620255/HERO_IMG_1_jbgysk.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620255/HERO_IMG_2_f5bfrn.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620255/HERO_IMG_3_kwrmvs.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762619530/HERO_IMG_4_xzd66l.png",
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-4 px-4">
        <h1
          className="text-[clamp(1.4rem,2.2vw,2rem)] font-bold text-center text-white max-w-3xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          Obleas y Fresas con Crema que roban corazones 💞
        </h1>
        <Link
          to="/ubicacion"
          className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          style={{ color: 'hsl(var(--ocreamy-brown))' }}
        >
          <MapPin size={20} />
          <span className="font-semibold">Mall Aventura Santa Anita · Nivel 3, Zona Oasis</span>
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-32 md:bottom-36 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
