import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const TerminosYCondiciones = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Términos y condiciones</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Aceptación de Términos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos y condiciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Pedidos y Pagos</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Los pedidos se confirman una vez procesado el pago</li>
                <li>Los precios están sujetos a cambios sin previo aviso</li>
                <li>Aceptamos efectivo y transferencias bancarias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Delivery</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>El delivery opera solo dentro de las zonas indicadas.</li>
                <li>Los tiempos de entrega son referenciales y pueden variar por tráfico o clima.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Productos</h2>
              <p className="text-ocreamy-brown-light mb-2">
                Las imágenes son referenciales, pero representan fielmente el producto real.
              </p>
              <p className="text-ocreamy-brown-light">
                Los toppings pueden variar según disponibilidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Cancelaciones</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Las cancelaciones deben realizarse con al menos 30 minutos de anticipación. Después de ese tiempo, el pedido no podrá ser cancelado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Reembolsos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Solo se aplican en casos específicos descritos en la política de cambios y devoluciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Alergias e Intolerancias</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Es responsabilidad del cliente informar sobre cualquier alergia o intolerancia alimentaria. Consulta nuestra cartilla de alérgenos para más información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Uso del sitio web</h2>
              <p className="text-ocreamy-brown-light mb-2">
                El contenido (logos, imágenes, textos y diseño) pertenece a O'Creamy.
              </p>
              <p className="text-ocreamy-brown-light">
                Se prohíbe copiar o reproducir sin autorización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Contacto</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Para consultas sobre estos términos, contáctanos por{" "}
                <a
                  href="https://wa.link/4rvzrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocreamy-red hover:underline font-semibold"
                >
                  WhatsApp
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosYCondiciones;
