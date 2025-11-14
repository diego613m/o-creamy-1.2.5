import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Nos encontramos en Mall Aventura Santa Anita, Nivel 3, Zona Oasis. Nuestro horario de atención es de lunes a domingo de 12:00 pm a 10:00 pm.",
  },
  {
    question: "¿Hacen delivery?",
    answer:
      "Sí, realizamos delivery a diversos distritos de Lima incluyendo Santa Anita, Ate, La Molina, San Luis, El Agustino y zonas aledañas. El costo varía según la distancia. Consulta disponibilidad por WhatsApp.",
  },
  {
    question: "¿Cómo puedo hacer un pedido?",
    answer:
      "Puedes hacer tu pedido directamente por WhatsApp al +51 963 807 150 o visitarnos en nuestro local en Mall Aventura Santa Anita.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos pago en efectivo al momento de la entrega y también transferencias bancarias (previa coordinación).",
  },
  {
    question: "¿Puedo personalizar mi postre?",
    answer:
      "¡Por supuesto! Ofrecemos diversos toppings clásicos y premium para que personalices tu oblea o fresas con crema. Consulta las opciones en nuestra carta.",
  },
  {
    question: "¿Los productos contienen alérgenos?",
    answer:
      "Nuestros productos pueden contener o haber estado en contacto con lácteos, frutos secos, gluten y otros alérgenos comunes. Para información específica, consulta nuestra cartilla de alérgenos o contáctanos por WhatsApp.",
  },
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer:
      "El tiempo de entrega varía según la zona y las condiciones del tráfico, pero generalmente es entre 30 a 60 minutos. Te confirmaremos un tiempo estimado al realizar tu pedido.",
  },
  {
    question: "¿Puedo cancelar mi pedido?",
    answer:
      "Sí, puedes cancelar tu pedido comunicándote con nosotros por WhatsApp con al menos 30 minutos de anticipación antes de la entrega programada.",
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
