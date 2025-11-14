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
            <p className="text-ocreamy-brown-light mb-4">
              En O'Creamy valoramos tu privacidad y protegemos tus datos personales conforme a la Ley N.º 29733 – Ley de Protección de Datos Personales del Perú.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">1. Información que Recopilamos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>Realizas un pedido</li>
                <li>Te comunicas con nosotros por{" "}
                  <a
                    href="https://wa.link/4rvzrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocreamy-red hover:underline font-semibold"
                  >
                    WhatsApp
                  </a>{" "}o redes sociales
                </li>
                <li>Visitas nuestro sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">2. Datos que recopilamos</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Nombre y apellido</li>
                <li>Número de teléfono</li>
                <li>Dirección de entrega</li>
                <li>Métodos de pago utilizados</li>
                <li>Historial de pedidos</li>
                <li>Información enviada voluntariamente por{" "}
                  <a
                    href="https://wa.link/4rvzrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocreamy-red hover:underline font-semibold"
                  >
                    WhatsApp
                  </a>{" "}o formularios del sitio
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">3. ¿Para qué usamos tu información?</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Procesar y entregar pedidos</li>
                <li>Contactarte para coordinar entregas</li>
                <li>Confirmar pagos</li>
                <li>Ofrecer soporte antes y después de tu compra</li>
                <li>Enviar comunicaciones relacionadas con tu pedido</li>
                <li>Mejorar nuestra experiencia de atención</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">4. ¿Con quién compartimos tu información?</h2>
              <p className="text-ocreamy-brown-light mb-2">Solo con:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>Personal de O'Creamy encargado de preparar y entregar pedidos</li>
                <li>Servicios de mensajería (si aplica)</li>
              </ul>
              <p className="text-ocreamy-brown-light">No vendemos ni cedemos datos personales a terceros.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">5. Seguridad de la información</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Aplicamos medidas razonables de protección para evitar el acceso no autorizado, pérdida o alteración de tus datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">6. Derechos del usuario</h2>
              <p className="text-ocreamy-brown-light mb-2">Puedes solicitar en cualquier momento:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>Acceso a tus datos</li>
                <li>Rectificación</li>
                <li>Cancelación</li>
                <li>Oposición</li>
              </ul>
              <p className="text-ocreamy-brown-light">Escríbenos por WhatsApp para gestionar cualquier solicitud.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">7. Contacto</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Si tienes preguntas sobre nuestras políticas de privacidad, contáctanos por{" "}
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
