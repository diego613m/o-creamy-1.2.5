import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("obleas");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28">
        <div className="oc-container">
          <h1 className="oc-page-title">Carta</h1>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap px-4">
            <button
              onClick={() => scrollToSection("obleas")}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeSection === "obleas"
                  ? "bg-ocreamy-red text-white"
                  : "bg-white text-ocreamy-brown border border-border"
              }`}
            >
              Obleas
            </button>
            <button
              onClick={() => scrollToSection("fresas")}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeSection === "fresas"
                  ? "bg-ocreamy-red text-white"
                  : "bg-white text-ocreamy-brown border border-border"
              }`}
            >
              Fresas con Crema
            </button>
            <button
              onClick={() => scrollToSection("toppings")}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeSection === "toppings"
                  ? "bg-ocreamy-red text-white"
                  : "bg-white text-ocreamy-brown border border-border"
              }`}
            >
              Toppings
            </button>
          </div>

          {/* Obleas Section */}
          <section id="obleas" className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-ocreamy-brown">Obleas</h2>
            
            {/* Clásicas */}
            <h3 className="text-xl font-semibold mb-6 text-ocreamy-brown-light">Clásicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Solterona",
                  price: "S/ 11.00",
                  desc: "Oblea crocante con Manjar.",
                  img: "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626526/OBLEA_1_jj62ah.jpg",
                },
                {
                  name: "Primer Beso",
                  price: "S/ 14.00",
                  desc: "Oblea crocante con Manjar y Crema de Leche.",
                  img: "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626520/OBLEA_2_tndyww.jpg",
                },
              ].map((product, idx) => (
                <div key={idx} className="oc-card flex flex-col">
                  <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">{product.name}</h4>
                    <p className="mb-4 flex-grow text-ocreamy-brown-light">{product.desc}</p>
                    <div className="mt-auto flex items-center">
                      <span className="text-xl font-bold text-ocreamy-red">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Especiales */}
            <h3 className="text-xl font-semibold mb-6 text-ocreamy-brown-light">Especiales</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Encanto",
                  price: "S/ 17.00",
                  desc: "Oblea crocante con Manjar, Crema de Leche, Queso y Dulce de Frutos Rojos.",
                  img: "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626518/OBLEA_3_mth9xd.jpg",
                },
                {
                  name: "Pa' No Olvidarte",
                  price: "S/ 20.00",
                  desc: "Oblea crocante con Manjar, Crema, Queso, Frutos Rojos, Fresa y Hershey's.",
                  img: "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626525/OBLEA_4_gv0h6w.jpg",
                },
                {
                  name: "Pa' Quererte",
                  price: "S/ 24.00",
                  desc: "Oblea crocante con Nutella, Crema de Leche, Queso, Frutos Rojos, Fresa y Hershey's.",
                  img: "https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626523/OBLEA_5_giavwn.jpg",
                },
              ].map((product, idx) => (
                <div key={idx} className="oc-card flex flex-col">
                  <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">{product.name}</h4>
                    <p className="mb-4 flex-grow text-ocreamy-brown-light">{product.desc}</p>
                    <div className="mt-auto flex items-center">
                      <span className="text-xl font-bold text-ocreamy-red">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fresas Section */}
          <section id="fresas" className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-ocreamy-brown">Fresas con Crema</h2>
            <p className="mb-6 text-ocreamy-brown-light">
              Todos nuestros vasos incluyen: Fresas, Crema de Leche, Manjar y Masmelos
            </p>

            <h3 className="text-xl font-semibold mb-4 text-ocreamy-brown">Medianas (12 oz)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626522/FRESAS_1_nlxsca.jpg"
                    alt="Suspiro de Amor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Suspiro de Amor</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Incluye 2 toppings clásicos a elección
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 14.00</span>
                  </div>
                </div>
              </div>

              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626519/FRESAS_2_r8fy7h.jpg"
                    alt="Dulce Pecado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Dulce Pecado</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Incluye 2 toppings premium a elección
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 16.00</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-ocreamy-brown">Grandes (16 oz)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626522/FRESAS_1_nlxsca.jpg"
                    alt="Suspiro de Amor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Suspiro de Amor</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Incluye 3 toppings clásicos a elección
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 17.00</span>
                  </div>
                </div>
              </div>

              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762626519/FRESAS_2_r8fy7h.jpg"
                    alt="Dulce Pecado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Dulce Pecado</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Incluye 3 toppings premium a elección
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 19.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Toppings Section */}
          <section id="toppings" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-ocreamy-brown">Toppings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762718004/TOPPINGS_CLASICOS_rdozmh.png"
                    alt="Toppings Clásicos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Toppings Clásicos</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Oreo, Chinchin, Gomitas, Masmelos.
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 2.00 c/u</span>
                  </div>
                </div>
              </div>

              <div className="oc-card flex flex-col">
                <div style={{ aspectRatio: "6 / 7" }} className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762718005/TOPPINGS_PREMIUM_z9my2y.png"
                    alt="Toppings Premium"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2 text-ocreamy-brown">Toppings Premium</h4>
                  <p className="mb-4 flex-grow text-ocreamy-brown-light">
                    Queso rallado, Nutella, Hershey's Syrup.
                  </p>
                  <div className="mt-auto flex items-center">
                    <span className="text-xl font-bold text-ocreamy-red">S/ 3.00 c/u</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <section className="oc-section bg-ocreamy-red text-white">
          <div className="oc-container text-center">
            <h2 className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold mb-4">
              ¿Listo para pedir tus favoritos?
            </h2>
            <p className="text-lg mb-6">
              Haz tu pedido ahora por WhatsApp
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa h-11 px-4 py-2 flex items-center justify-center"
              >
                Pedir por WhatsApp
              </a>
              <Link to="/" className="btn btn-brown">
                Volver al Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
