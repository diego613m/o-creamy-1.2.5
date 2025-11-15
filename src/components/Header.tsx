import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Music2, Facebook, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Carta" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/ubicacion", label: "Ubicación" },
  ];

  const filteredNavLinks = navLinks.filter(link => link.path !== location.pathname);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-background shadow-sm'}`}>
        <div className="oc-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative h-[67px] w-auto">
              <img
                src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620585/LOGO_IMAGE_pwhxed.png"
                alt="O'Creamy Logo"
                className={`h-full w-auto object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620585/LOGO_NEGRO_IMAGE_orimm1.png"
                alt="O'Creamy Logo"
                className={`absolute top-0 left-0 h-full w-auto object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
              />
            </Link>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-3">
              {/* Social Icons */}
              <a
                href="https://www.instagram.com/ocreamyobleasperu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}
                aria-label="Instagram"
              >
                <Instagram size={20} style={{ color: 'hsl(var(--ocreamy-brown))' }} />
              </a>
              <a
                href="https://www.tiktok.com/@ocreamyobleasperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}
                aria-label="TikTok"
              >
                <FaTiktok size={20} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571175464831"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}
                aria-label="Facebook"
              >
                <FaFacebookF size={20} style={{ color: 'hsl(var(--ocreamy-brown))' }} />
              </a>
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} className="text-white" />
              </a>

              {/* Ver Carta Button */}
              <Link to="/menu" className="btn btn-primary-red ml-2">
                Ver Carta
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}
                aria-label="Menú"
              >
                <Menu size={20} style={{ color: 'hsl(var(--ocreamy-brown))' }} />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'hsl(var(--ocreamy-cream-pink))' }}
              aria-label="Menú"
            >
              <Menu size={20} style={{ color: 'hsl(var(--ocreamy-brown))' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Menu Panel */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-24 right-4 md:right-8 bg-white rounded-2xl shadow-2xl z-50 p-6 min-w-[200px]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <nav className="flex flex-col gap-3 mt-2">
              {filteredNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-semibold transition-colors"
                  style={{ color: 'hsl(var(--ocreamy-brown))' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
