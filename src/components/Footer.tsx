import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Instagram, Music2, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f8ebdf] border-t border-black/5 pt-12 pb-6">
      <div className="oc-container">
        {/* Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Enlaces */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'hsl(var(--foreground))' }}>
              Enlaces
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Home
              </Link>
              <Link to="/menu" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Carta
              </Link>
              <Link to="/nosotros" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Nosotros
              </Link>
              <Link to="/ubicacion" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Ubicación
              </Link>
            </div>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'hsl(var(--foreground))' }}>
              Información
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762631882/FAVICON_yj78df.png"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                Cartilla de alérgenos
              </a>
              <Link to="/zonas-de-reparto" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Zonas de reparto
              </Link>
            </div>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'hsl(var(--foreground))' }}>
              Políticas
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/politicas-de-privacidad" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Políticas de privacidad
              </Link>
              <Link to="/politicas-de-cookies" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Políticas de cookies
              </Link>
              <Link to="/politicas-de-cambios" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Política de cambios y devoluciones
              </Link>
              <Link to="/terminos-y-condiciones" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Términos y condiciones
              </Link>
              <Link to="/preguntas-frecuentes" className="transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-black/5">
          {/* Social Icons with Official Colors */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ocreamyobleasperu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
              }}
              aria-label="Instagram"
            >
              <FaInstagram
                size={25}
                className="text-white"
              />
            </a>
            <a
              href="https://www.tiktok.com/@ocreamyobleasperu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center transition-transform hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok
                size={25}
                className="text-white"
              />

            </a>
            <a
              href="https://wwww.facebook.com/ocreamyobleasperu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF
                size={25}
                className="text-white"
              />

            </a>
            <a
              href="https://wa.link/4rvzrv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp
                size={25}
                className="text-white"
              />

            </a>
          </div>

          {/* Copyright */}
          <p className="text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
            © 2025 O'Creamy. Lima, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
