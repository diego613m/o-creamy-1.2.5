import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const PoliticasDeCambios = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Política de cambios y devoluciones</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">1. Cambios</h2>
              <p className="text-ocreamy-brown-light mb-4">Proceden únicamente cuando:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>El producto entregado no coincide con lo solicitado.</li>
                <li>El producto llega en mal estado o con derrames severos.</li>
              </ul>
              <p className="text-ocreamy-brown-light mb-2">Para solicitar un cambio:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Envíanos una foto del producto dentro de los primeros 5 minutos de recibido.</li>
                <li>Verificaremos el caso y programaremos un reemplazo sin costo adicional.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">2. Devoluciones</h2>
              <p className="text-ocreamy-brown-light mb-4">Solo aplican cuando:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>No es posible realizar el cambio del producto.</li>
                <li>El pedido fue cobrado y no puede entregarse por falta de disponibilidad.</li>
              </ul>
              <p className="text-ocreamy-brown-light mb-4">No aplican devoluciones por:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Cambios de opinión</li>
                <li>Pedidos consumidos parcialmente</li>
                <li>Falta de disponibilidad de toppings opcionales cuando se ofrecen alternativas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">3. Tiempos</h2>
              <p className="text-ocreamy-brown-light mb-2">
                Los cambios se realizan en un rango de 20 a 60 min según zona.
              </p>
              <p className="text-ocreamy-brown-light">
                Las devoluciones se procesan en un máximo de 48 horas hábiles.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticasDeCambios;
