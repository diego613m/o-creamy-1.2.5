import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const PoliticasDePrivacidad = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Políticas de privacidad</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Protección de Datos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                En O'Creamy respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
                Esta política explica cómo recopilamos, usamos y protegemos tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Información que Recopilamos
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Cuando realizas un pedido a través de WhatsApp, recopilamos tu nombre, número de teléfono
                y dirección de entrega. Esta información es utilizada exclusivamente para procesar y
                entregar tu pedido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Uso de la Información</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Tu información personal se utiliza para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Procesar y entregar tus pedidos</li>
                <li>Comunicarnos contigo sobre tu pedido</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Enviarte información promocional (solo si has dado tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Seguridad de tus Datos
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Implementamos medidas de seguridad para proteger tu información personal contra acceso no
                autorizado, alteración o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Tus Derechos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier
                momento. Para ejercer estos derechos, contáctanos por{" "}
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
                Cambios a esta Política
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Nos reservamos el derecho de actualizar esta política en cualquier momento. Te
                notificaremos sobre cambios significativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Contacto</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Si tienes preguntas sobre nuestra política de privacidad, contáctanos por{" "}
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

export default PoliticasDePrivacidad;
