import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const PoliticasDeCookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Políticas de cookies</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">¿Qué son las Cookies?</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Tipos de Cookies que Utilizamos</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Cookies esenciales: Necesarias para el funcionamiento básico del sitio</li>
                <li>Cookies de análisis: Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio (Google Analytics)</li>
                <li>Cookies de redes sociales: Permiten compartir contenido en redes sociales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Control de Cookies</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para evitar que se instalen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Más Información</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Si tienes preguntas sobre nuestro uso de cookies, contáctanos por{" "}
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

export default PoliticasDeCookies;
