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

          <div className="space-y-8">
            <p className="text-ocreamy-brown-light">
              Estas zonas pueden modificarse por distancia o tráfico.
              Solo entregamos dentro de las siguientes áreas cercanas a Mall Aventura Santa Anita:
            </p>

            <section className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-3 text-ocreamy-brown">ZONA 1 – S/5.00</h2>
              <ul className="list-disc pl-6 space-y-1 text-ocreamy-brown-light mb-3">
                <li>Santa Anita (cercano al Mall)</li>
                <li>Cooperativa Universal</li>
                <li>El Gramadal</li>
                <li>Carlos Cueto Fernandini</li>
              </ul>
              <p className="text-ocreamy-brown-light italic">Tiempo estimado: 20–30 min.</p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-3 text-ocreamy-brown">ZONA 2 – S/7.00</h2>
              <ul className="list-disc pl-6 space-y-1 text-ocreamy-brown-light mb-3">
                <li>Santa Anita (zonas intermedias)</li>
                <li>Los Ficus</li>
                <li>Santa Rosa</li>
                <li>12 de Octubre</li>
              </ul>
              <p className="text-ocreamy-brown-light italic">Tiempo estimado: 25–35 min.</p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-3 text-ocreamy-brown">ZONA 3 – S/10.00</h2>
              <ul className="list-disc pl-6 space-y-1 text-ocreamy-brown-light mb-3">
                <li>Ate (zonas cercanas)</li>
                <li>Salamanca (límite con Santa Anita)</li>
                <li>Mayorazgo entrada</li>
              </ul>
              <p className="text-ocreamy-brown-light italic">Tiempo estimado: 30–40 min.</p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-3 text-ocreamy-brown">IMPORTANTE</h2>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>Los costos pueden variar según disponibilidad del delivery.</li>
                <li>Fuera de estas zonas, consultar por WhatsApp.</li>
                <li>Los pedidos se preparan solo después del pago.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-ocreamy-brown">Horarios de envío</h2>
              <p className="text-ocreamy-brown-light mb-4">
                Lunes a domingo: 12:00 pm – 10:00 pm
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-ocreamy-brown">Proceso de pedido</h3>
              <ol className="list-decimal pl-6 space-y-2 text-ocreamy-brown-light mb-6">
                <li>El cliente envía pedido por WhatsApp.</li>
                <li>Confirmamos disponibilidad y monto.</li>
                <li>El cliente realiza el pago.</li>
                <li>El pedido ingresa a cocina.</li>
                <li>Se entrega en el rango estimado.</li>
              </ol>

              <h3 className="text-xl font-bold mb-3 text-ocreamy-brown">Consideraciones</h3>
              <ul className="list-disc pl-6 space-y-2 text-ocreamy-brown-light">
                <li>No se pueden modificar pedidos una vez pagados.</li>
                <li>Si el repartidor llega y no hay nadie para recibirlo, deberás reprogramar con un nuevo pago de delivery.</li>
                <li>Los productos son delicados y deben consumirse apenas recibidos.</li>
              </ul>
            </section>

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
