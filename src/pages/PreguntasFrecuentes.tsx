import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Estamos en Mall Aventura Santa Anita – Nivel 3 (Zona Oasis). Atendemos todos los días de 12:00 pm a 10:00 pm.",
  },
  {
    question: "¿Qué productos venden?",
    answer:
      "Somos especialistas en obleas colombianas y fresas con crema, preparadas al instante y con ingredientes frescos. Consulta nuestra página de Menú para ver todos los sabores, tamaños y opciones de toppings.",
  },
  {
    question: "¿Hacen delivery?",
    answer:
      "Sí. Realizamos delivery mediante: Delivery propio en zonas específicas, Pedidos por WhatsApp, y Recojo en tienda. Consulta la página de Zonas de Reparto para ver las áreas disponibles.",
  },
  {
    question: "¿Cómo se realizan los pagos?",
    answer:
      "Los pagos son anticipados para confirmar tu pedido. Aceptamos: Yape / Plin, Tarjeta (POS), Transferencia, y Efectivo en tienda.",
  },
  {
    question: "¿Puedo pedir sin pagar primero?",
    answer:
      "No. Todos los pedidos deben estar pagados antes de ser preparados.",
  },
  {
    question: "¿Puedo personalizar mi pedido?",
    answer:
      "Sí. Puedes agregar toppings clásicos, toppings premium o retirar algún ingrediente si lo deseas.",
  },
  {
    question: "¿Hacen envíos a todo Lima?",
    answer:
      "Por ahora no. Trabajamos con zonas de envío definidas según distancia y disponibilidad.",
  },
  {
    question: "¿Cuánto demora el delivery?",
    answer:
      "Usualmente entre 20 y 40 minutos, dependiendo de la hora y el tráfico dentro de la zona de reparto.",
  },
  {
    question: "¿Puedo recoger en tienda?",
    answer:
      "Claro. Puedes pasar por nuestro local y pedir para llevar o para disfrutar en el mall.",
  },
  {
    question: "¿Las obleas se ablandan?",
    answer:
      "Recomendamos consumirlas inmediatamente, ya que la oblea es crocante y con el tiempo absorbe humedad.",
  },
];

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFAB />

      <main className="pt-28 pb-16">
        <div className="oc-container max-w-4xl">
          <h1 className="oc-page-title">Preguntas frecuentes</h1>
          <p className="text-center text-ocreamy-brown-light mb-12">
            Encuentra respuestas a las preguntas más comunes sobre O'Creamy
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-ocreamy-brown pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-ocreamy-red transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-ocreamy-brown-light leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ocreamy-brown-light mb-4">
              ¿No encuentras la respuesta que buscas?
            </p>
            <a
              href="https://wa.link/4rvzrv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PreguntasFrecuentes;
