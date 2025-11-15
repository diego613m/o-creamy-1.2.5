import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import HeroCarousel from "@/components/HeroCarousel";

const testimonials = [
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762627820/TESTIMONIO_1_e01iel.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762627820/TESTIMONIO_2_acdleo.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762627822/TESTIMONIO_3_lgkvie.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762627822/TESTIMONIO_4_mgilr0.png",
];

const galleryImages = [
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624582/GAL_IMG_1_pgs32y.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624583/GAL_IMG_2_ye6obg.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624584/GAL_IMG_3_jjwpfu.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624586/GAL_IMG_4_tcwahf.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624588/GAL_IMG_5_njicvp.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624587/GAL_IMG_6_qd4pxg.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624590/GAL_IMG_7_xv4ace.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624590/GAL_IMG_8_xsnt2z.png",
  "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762624584/GAL_IMG_9_uqo3ea.png",
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main>
        {/* Hero */}
        <div className="pt-20">
          <HeroCarousel />
        </div>

        {/* ¡Antójate hoy! */}
        <section className="oc-section bg-white">
          <div className="oc-container">
            <h2 className="oc-section-title">¡Antójate hoy!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620992/FAV_OBLEA_IMG_w2uz6j.jpg"
                    alt="Obleas"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="oc-subtitle mb-2">Obleas</h3>
                <p className="mb-4 flex-grow" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Crocantes y deliciosas, con los mejores ingredientes
                </p>
                <Link to="/menu#obleas" className="btn btn-primary-red mt-auto">
                  Ver más
                </Link>
              </div>
              </div>

              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620992/FAV_FRESAS_IMG_xbu8vv.jpg"
                    alt="Fresas con crema"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="oc-subtitle mb-2">Fresas con crema</h3>
                <p className="mb-4 flex-grow" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Frescas y cremosas, el postre perfecto
                </p>
                <Link to="/menu#fresas" className="btn btn-primary-red mt-auto">
                  Ver más
                </Link>
              </div>
              </div>

              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620992/FAV_OBLEA_IMG_w2uz6j.jpg"
                    alt="Toppings"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="oc-subtitle mb-2">Toppings</h3>
                <p className="mb-4 flex-grow" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Personaliza tu postre con nuestros toppings
                </p>
                <Link to="/menu#toppings" className="btn btn-primary-red mt-auto">
                  Ver más
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¡Mira lo que hacemos! */}
        <section className="oc-section" style={{ backgroundColor: '#EDE8DF' }}>
          <div className="oc-container">
            <h2 className="oc-section-title">¡Mira lo que hacemos!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video */}
              <div className="flex justify-center">
                <video
                  src="https://res.cloudinary.com/dw1eowmmp/video/upload/v1762621083/VIDEO_LINK_xlpllh.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-[299px] rounded-2xl shadow-lg"
                />
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <h3 className="oc-subtitle mb-2">Hecho con Amor</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Cada postre es preparado con dedicación y pasión
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <h3 className="oc-subtitle mb-2">Ingredientes Frescos</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Usamos solo los mejores ingredientes del día
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <h3 className="oc-subtitle mb-2">Clientes Felices</h3>
                  <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Tu sonrisa es nuestra mejor recompensa
                  </p>
                </div>
                <p className="text-center text-[1.3rem] font-semibold mt-2" style={{ color: 'hsl(var(--ocreamy-brown))' }}>
                  Así se ven nuestras obleas y fresas con crema que roban corazones 💖💗🥰💞
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="oc-section" style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}>
          <div className="oc-container">
            <h2 className="oc-section-title">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl transition-transform hover:scale-105 shadow-md"
                >
                  <img
                    src={img}
                    alt={`Galería ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="oc-section" style={{ backgroundColor: 'hsl(var(--ocreamy-cream))' }}>
          <div className="oc-container">
            <h2 className="oc-section-title">Lo que dicen nuestros clientes</h2>
            <div className="flex justify-center">
              <div className="relative max-w-[288px] w-full">
                {testimonials.map((img, idx) => (
                  <div
                    key={idx}
                    className={`transition-opacity duration-700 ${
                      idx === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Testimonio ${idx + 1}`}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonial ? "bg-ocreamy-red w-6" : "bg-ocreamy-brown/30"
                  }`}
                  aria-label={`Testimonio ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="oc-section bg-ocreamy-red text-white">
          <div className="oc-container text-center">
            <h2 className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold mb-4">
              ¿Listo para endulzar tu día?
            </h2>
            <p className="text-lg mb-6">
              Visítanos o haz tu pedido por WhatsApp
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/menu" 
                className="btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all hover:scale-105 h-11 px-4 py-2"
                style={{ backgroundColor: '#836140', color: '#ffffff' }}
              >
                Ver Carta
              </Link>
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
