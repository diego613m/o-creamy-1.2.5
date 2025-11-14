import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const ZonasDeReparto = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Zonas de reparto</h1>

          <div className="space-y-6 text-ocreamy-brown-light">
            <p>
              En O'Creamy realizamos entregas en zonas cercanas a Mall Aventura Santa Anita. Para confirmar si llegamos a tu ubicación, por favor contáctanos por{" "}
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocreamy-red hover:underline font-semibold"
              >
                WhatsApp
              </a>
            </p>

            <p>
              Nuestro equipo estará encantado de ayudarte y coordinar los detalles de tu pedido para que disfrutes nuestras obleas y fresas con crema en la comodidad de tu hogar. 🍓💞
            </p>

            <div className="flex justify-center pt-6">
              <a
                href="https://wa.link/4rvzrv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ZonasDeReparto;
