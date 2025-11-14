import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer:
      "🍓✨ Estamos en Mall Aventura Santa Anita – Nivel 3 (Zona Oasis), justo donde empiezan los antojitos 💕\n\nAtendemos todos los días de 12:00 pm a 10:00 pm, así que siempre tienes un espacio para venir por tu dulzura favorita 😋💖",
  },
  {
    question: "¿Cuál es su horario de atención?",
    answer:
      "¡Te esperamos de lunes a domingo de 12:00 pm a 10:00 pm en Mall Aventura Santa Anita, Nivel 3, Zona Oasis! 🍓✨",
  },
  {
    question: "¿Qué productos venden?",
    answer:
      "😍 Preparamos obleas colombianas y fresas con crema súper deli, fresquitas y hechas al momento.\n\nSi quieres ver todas las opciones, pasarte por la página de Menú es lo mejor: ahí encuentras tamaños, toppings y todo lo que puedes antojarte 💕🍓✨",
  },
  {
    question: "¿Hacen delivery?",
    answer:
      '¡Sí! 😄💕\nLlegamos a tu casa/oficina con tu postre bien fresquecito mediante:\n• Delivery en zonas cercanas\n• Recojo en tienda\nPor ahora la cobertura se confirma directamente por <a href="https://wa.link/4rvzrv" target="_blank" rel="noopener noreferrer" class="text-ocreamy-red hover:underline font-semibold">WhatsApp</a> 📲✨\nAhí te decimos rapidito si tu zona está dentro y cuánto sería el envío 🍓💕',
  },
  {
    question: "¿Cuáles son sus métodos de pago?",
    answer:
      "En nuestra tienda física aceptamos efectivo, Plin/Yape y tarjetas de débito o crédito 💵💳. Para pedidos por delivery, los pagos se realizan de forma anticipada a través de Plin/Yape o con tarjeta (débito o crédito) mediante un link de pago seguro 🔗✨. De esta manera confirmamos tu pedido y lo preparamos con todo el amor y dulzura que nos caracteriza 🍓💞.",
  },
  {
    question: "¿Puedo pedir sin pagar primero?",
    answer:
      "😅💖 No, para que tu antojo se prepare sin demoras y quede perfecto, siempre necesitamos tener el pago confirmado antes de pasar a cocina 🍓✨",
  },
  {
    question: "¿Puedo personalizar mi pedido?",
    answer:
      "¡Por ahora las obleas vienen con nuestras combinaciones favoritas 💕, pero las fresas con crema sí puedes personalizarlas! 🍓 Elige entre toppings clásicos (Oreo, Chinchin, Gomitas, Masmelos) y premium (Queso rallado, Nutella, Hershey's Syrup) y crea tu mezcla perfecta 😋✨",
  },
  {
    question: "¿Hacen envíos a todo Lima?",
    answer:
      "Por ahora no 😔💕\n\nSolo enviamos a las zonas cercanas a nuestra tienda para que tu postre llegue fresquito y perfecto.",
  },
  {
    question: "¿Cuánto tiempo toma preparar un pedido?",
    answer:
      "¡Siempre frescos y recién hechos! 😋 Nuestros postres se preparan al momento para que disfrutes la mejor experiencia. El tiempo de preparación suele ser de 5 a 15 minutos ✨",
  },
  {
    question: "¿Cuánto demora el delivery?",
    answer:
      "Normalmente entre 20 y 40 minutos según el tráfico 🚗💕\n\nIgual siempre te avisamos el tiempo estimado para que sepas cuándo llega tu antojito 😋🍓✨",
  },
  {
    question: "¿Puedo recoger en tienda?",
    answer:
      "¡Sí, claro! 😍🍓✨\n\nPuedes pasar por nuestra tienda, pedir para llevar o disfrutarlo mientras paseas por el mall 💕",
  },
  {
    question: "¿Las obleas se ablandan?",
    answer:
      "La oblea es crocante, pero con el tiempo absorbe humedad.\n\nLo ideal es disfrutarla apenas te llega para que la vivas como debe ser: crocante por fuera y deli por dentro 😋✨",
  },
  {
    question: "¿Tienen opciones para personas con alergias?",
    answer:
      "En O'Creamy usamos ingredientes deliciosos, pero algunos pueden causar alergias. 💕 Te recomendamos revisar nuestra cartilla de alérgenos o escribirnos antes de hacer tu pedido si tienes alguna alergia específica.",
  },
  {
    question: "¿Puedo hacer pedidos para eventos?",
    answer:
      '¡Claro que sí! 🎉 Aceptamos pedidos especiales para eventos. Escríbenos con anticipación por <a href="https://wa.link/4rvzrv" target="_blank" rel="noopener noreferrer" class="text-ocreamy-red hover:underline font-semibold">WhatsApp</a> y coordinemos juntos los detalles para endulzar tu celebración 🍓✨',
  },
  {
    question: "¿Cómo puedo hacer un pedido?",
    answer:
      '¡Es súper fácil! 😋 Puedes visitarnos en nuestra tienda en Mall Aventura Santa Anita o hacer tu pedido por <a href="https://wa.link/4rvzrv" target="_blank" rel="noopener noreferrer" class="text-ocreamy-red hover:underline font-semibold">WhatsApp</a>. Cuéntanos qué antojo tienes y nosotros nos encargamos del resto 🍓💞',
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
                    <p 
                      className="text-ocreamy-brown-light leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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
