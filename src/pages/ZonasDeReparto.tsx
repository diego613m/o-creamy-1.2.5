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
              En O'Creamy queremos que disfrutes de nuestros postres donde quiera que estés. Por eso,
              ofrecemos servicio de delivery a diversas zonas de Lima.
            </p>

            <p>
              Actualmente realizamos entregas a domicilio en los siguientes distritos: Santa Anita, Ate,
              La Molina, San Luis, El Agustino, y zonas aledañas.
            </p>

            <p>
              Los pedidos se realizan únicamente a través de WhatsApp. El costo de delivery puede variar
              según la distancia y se confirmará al momento de tu pedido.
            </p>

            <p>
              Si no estás seguro de si llegamos a tu zona, no dudes en consultarnos. Siempre buscamos la
              manera de llevarte nuestros postres que roban corazones.
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
