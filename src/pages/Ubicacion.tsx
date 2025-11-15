import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { SiWaze } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";
import { MapPin, Clock, MessageCircle, Instagram, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Ubicacion = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleMapButtonClick = () => {
    if (window.innerWidth <= 768) {
      setIsSheetOpen(true);
    } else {
      window.open("https://maps.app.goo.gl/ThucoxDYwYWT9Vjs6", "_blank");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28">
        <div className="oc-container">
          <h1 className="oc-page-title">Ubicación</h1>

          {/* Map Card */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Info Column */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      className="mt-1 flex-shrink-0"
                      size={26}
                      style={{ color: '#ef3e36' }}
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-ocreamy-brown">Dirección</h3>
                      <p className="text-ocreamy-brown-light">
                        Mall Aventura Santa Anita · Nivel 3, Zona Oasis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaClock 
                      className="mt-1 flex-shrink-0"
                      size={26}
                      style={{ color: '#836140' }}
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-ocreamy-brown">Horario</h3>
                      <p className="text-ocreamy-brown-light">Lunes a Domingo · 12:00 pm – 10:00 pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaWhatsapp
                      className="mt-1 flex-shrink-0"
                      size={28}
                      style={{ color: '#25D366' }}
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-ocreamy-brown">WhatsApp</h3>
                      <a
                        href="https://wa.link/4rvzrv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ocreamy-brown-light hover:text-ocreamy-red transition-colors"
                      >
                        +51 963 807 150
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaInstagram
                      className="mt-1 flex-shrink-0"
                      size={28}
                      style={{ color: '#E4405F' }}
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-ocreamy-brown">Instagram</h3>
                      <a
                        href="https://www.instagram.com/ocreamyobleasperu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ocreamy-brown-light hover:text-ocreamy-red transition-colors"
                      >
                        @ocreamyobleasperu
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Column */}
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.819193359312!2d-76.9729004!3d-12.0559581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c1373c350e53%3A0x4476a9b5944fb7b2!2sO'Creamy!5e0!3m2!1ses-419!2spe!4v1761940773313!5m2!1ses-419!2spe"
                    className="w-full h-[360px] rounded-xl"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <button
                    onClick={handleMapButtonClick}
                    className="btn btn-primary-red w-[80%] sm:w-1/3 mx-auto mt-4 block"
                  >
                    Cómo llegar
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="oc-section bg-ocreamy-red text-white w-full">
          <div className="oc-container text-center">
            <h2 className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold mb-4">¡Te esperamos!</h2>
            <p className="text-lg mb-6">Visítanos o haz tu pedido por WhatsApp</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="btn btn-brown">
                Ver Carta
              </Link>
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa h-11 px-4 py-2 flex items-center justify-center"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sheet */}
      {isSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setIsSheetOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 p-6 md:hidden animate-in slide-in-from-bottom duration-300">
            <button
              onClick={() => setIsSheetOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-6 text-ocreamy-brown">Cómo llegar</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/ThucoxDYwYWT9Vjs6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                  <SiGooglemaps
                    className="mt-1 flex-shrink-0"
                    size={28}
                    style={{ color: '#ef3e36' }} // Rojo O'Creamy
                  />
                <span className="font-semibold text-ocreamy-brown">Google Maps</span>
              </a>
              <a
                href="https://waze.com/ul/h6mc72mrbv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <SiWaze 
                  className="flex-shrink-0" 
                  size={28} 
                  style={{ color: '#33CCFF' }}
                />
                <span className="font-semibold text-ocreamy-brown">Waze</span>
              </a>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Ubicacion;
