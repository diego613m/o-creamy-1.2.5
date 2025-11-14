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
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Aceptación de términos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Al realizar un pedido o utilizar nuestros servicios, aceptas estos términos y condiciones.
                Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestros
                servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Servicio de delivery</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Nuestro servicio de delivery está disponible en zonas específicas. Los tiempos de entrega
                son estimados y pueden variar según las condiciones del tráfico y el clima.
              </p>
              <p className="text-ocreamy-brown-light mb-4">
                El costo de delivery se calcula según la distancia y se informará al momento de realizar
                el pedido por{" "}
                <a
                  href="https://wa.link/4rvzrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocreamy-red hover:underline font-semibold"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Pedidos y pagos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Todos los pedidos deben realizarse a través de WhatsApp. Aceptamos pagos en efectivo al
                momento de la entrega o mediante transferencia bancaria (previa coordinación).
              </p>
              <p className="text-ocreamy-brown-light mb-4">
                Nos reservamos el derecho de rechazar o cancelar pedidos en caso de información
                incompleta o incorrecta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Cancelaciones y devoluciones
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Las cancelaciones deben solicitarse con al menos 30 minutos de anticipación antes de la
                entrega programada. No se aceptan devoluciones una vez que el pedido ha sido entregado,
                excepto en casos de productos defectuosos o incorrectos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Alérgenos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Nuestros productos pueden contener o haber estado en contacto con alérgenos comunes. Para
                información detallada, consulta nuestra cartilla de alérgenos o contáctanos por{" "}
                <a
                  href="https://wa.link/4rvzrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocreamy-red hover:underline font-semibold"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Responsabilidad
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                O'Creamy no se hace responsable por reacciones alérgicas si el cliente no ha consultado
                previamente sobre los ingredientes. Tampoco somos responsables por demoras causadas por
                factores externos fuera de nuestro control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Modificación de términos
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
                Los cambios serán efectivos inmediatamente después de su publicación en este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Contacto</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Para consultas sobre estos términos y condiciones, contáctanos por{" "}
                <a
                  href="https://wa.link/4rvzrv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocreamy-red hover:underline font-semibold"
                >
                  WhatsApp
                </a>
                .
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
