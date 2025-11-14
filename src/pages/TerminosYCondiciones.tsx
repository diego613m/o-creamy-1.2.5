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
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">1. Aceptación del servicio</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Al realizar un pedido en O'Creamy, aceptas estas condiciones y confirmas que la información brindada es correcta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">2. Pagos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Todos los pedidos requieren pago anticipado. Los precios están expresados en moneda soles (S/).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">3. Delivery</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>El delivery opera solo dentro de las zonas indicadas.</li>
                <li>Los tiempos de entrega son referenciales y pueden variar por tráfico o clima.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">4. Productos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Las imágenes son referenciales, pero representan fielmente el producto real.
                Los toppings pueden variar según disponibilidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">5. Reembolsos</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Solo se aplican en casos específicos descritos en la política de cambios y devoluciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">6. Uso del sitio web</h2>
              <p className="text-ocreamy-brown-light mb-4">
                El contenido (logos, imágenes, textos y diseño) pertenece a O'Creamy.
                Se prohíbe copiar o reproducir sin autorización.
              </p>
            </section>

            <section className="border-t border-ocreamy-brown/10 pt-8">
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Política de cambios y devoluciones</h2>
              
              <h3 className="text-xl font-bold mb-3 text-ocreamy-brown">1. Cambios</h3>
              <p className="text-ocreamy-brown-light mb-3">Proceden únicamente cuando:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>El producto entregado no coincide con lo solicitado.</li>
                <li>El producto llega en mal estado o con derrames severos.</li>
              </ul>
              <p className="text-ocreamy-brown-light mb-3">Para solicitar un cambio:</p>
              <ol className="list-decimal pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>Envíanos una foto del producto dentro de los primeros 5 minutos de recibido.</li>
                <li>Verificaremos el caso y programaremos un reemplazo sin costo adicional.</li>
              </ol>

              <h3 className="text-xl font-bold mb-3 text-ocreamy-brown">2. Devoluciones</h3>
              <p className="text-ocreamy-brown-light mb-3">Solo aplican cuando:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>No es posible realizar el cambio del producto.</li>
                <li>El pedido fue cobrado y no puede entregarse por falta de disponibilidad.</li>
              </ul>
              <p className="text-ocreamy-brown-light mb-3">No aplican devoluciones por:</p>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light mb-4">
                <li>Cambios de opinión</li>
                <li>Pedidos consumidos parcialmente</li>
                <li>Falta de disponibilidad de toppings opcionales cuando se ofrecen alternativas</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-ocreamy-brown">3. Tiempos</h3>
              <p className="text-ocreamy-brown-light mb-4">
                Los cambios se realizan en un rango de 20 a 40 min según zona.
                Las devoluciones se procesan en un máximo de 48 horas.
              </p>
            </section>

            <section className="border-t border-ocreamy-brown/10 pt-8">
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Descargo legal</h2>
              <p className="text-ocreamy-brown-light mb-4">
                O'Creamy Obleas es una marca registrada.
                El sitio web, su diseño, textos, imágenes, videos, logotipos y estilo gráfico son propiedad exclusiva de O'Creamy. Cualquier uso no autorizado será considerado una infracción a los derechos de autor.
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
