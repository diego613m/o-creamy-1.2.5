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
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">¿Qué son las cookies?</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
                visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y entender
                cómo interactúas con nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Tipos de cookies que utilizamos
              </h2>
              <div className="space-y-4 text-ocreamy-brown-light">
                <div>
                  <h3 className="font-bold text-ocreamy-brown mb-2">Cookies esenciales</h3>
                  <p>
                    Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies,
                    algunas funciones no estarían disponibles.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ocreamy-brown mb-2">Cookies de rendimiento</h3>
                  <p>
                    Nos permiten analizar cómo los visitantes utilizan nuestro sitio web, para poder
                    mejorar su funcionamiento.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ocreamy-brown mb-2">Cookies de funcionalidad</h3>
                  <p>Permiten recordar tus preferencias y personalizar tu experiencia en el sitio.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Gestión de cookies
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten
                en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Cookies de terceros</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Utilizamos servicios de terceros como Google Maps para mejorar la experiencia del usuario.
                Estos servicios pueden establecer sus propias cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">
                Actualizaciones de esta política
              </h2>
              <p className="text-ocreamy-brown-light mb-4">
                Podemos actualizar esta política de cookies ocasionalmente. Te recomendamos revisarla
                periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Más información</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Si tienes preguntas sobre nuestra política de cookies, contáctanos por{" "}
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

export default PoliticasDeCookies;
