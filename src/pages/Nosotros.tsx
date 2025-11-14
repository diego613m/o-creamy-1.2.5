import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28">
        {/* Title */}
        <div className="oc-container">
          <h1 className="oc-page-title">Sobre Nosotros</h1>
        </div>

        {/* Nuestra Historia */}
        <section className="oc-section">
          <div className="oc-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-ocreamy-brown">Nuestra historia</h2>
                <div className="space-y-4 text-ocreamy-brown-light">
                  <p>
                    O'Creamy nace del amor por los postres tradicionales peruanos y el deseo de compartir
                    momentos dulces con cada uno de nuestros clientes.
                  </p>
                  <p>
                    Comenzamos como un pequeño emprendimiento familiar con la visión de ofrecer obleas y
                    fresas con crema de la más alta calidad, preparadas con ingredientes frescos y mucho
                    cariño.
                  </p>
                  <p>
                    Hoy, en Mall Aventura Santa Anita, seguimos esa misma filosofía: crear postres que no
                    solo endulcen tu paladar, sino que también roben tu corazón.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762627345/NOSOTROS_IMG_eape7j.png"
                  alt="Sobre Nosotros"
                  className="w-full max-w-lg rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="oc-section" style={{ backgroundColor: 'hsl(var(--ocreamy-cream))' }}>
          <div className="oc-container">
            <h2 className="oc-section-title">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-md text-center" style={{ minHeight: "260px" }}>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-3 text-ocreamy-brown">Hecho con Amor</h3>
                  <p className="text-lg text-ocreamy-brown-light">
                    Cada postre que sale de nuestra cocina está hecho con pasión, dedicación y mucho
                    cariño para endulzar tu día.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center" style={{ minHeight: "260px" }}>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-3 text-ocreamy-brown">Ingredientes Frescos</h3>
                  <p className="text-lg text-ocreamy-brown-light">
                    Seleccionamos cuidadosamente los mejores ingredientes del día para garantizar frescura
                    y sabor en cada bocado.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center" style={{ minHeight: "260px" }}>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-3 text-ocreamy-brown">Clientes Felices</h3>
                  <p className="text-lg text-ocreamy-brown-light">
                    Tu sonrisa y satisfacción son nuestra mayor recompensa. Trabajamos cada día para
                    superar tus expectativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="oc-section bg-ocreamy-red text-white">
          <div className="oc-container text-center">
            <h2 className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold mb-4">
              ¿Listo para probar nuestros postres?
            </h2>
            <p className="text-lg mb-6">
              Visítanos en Mall Aventura Santa Anita o pide por WhatsApp
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="btn btn-brown">
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

export default Nosotros;
