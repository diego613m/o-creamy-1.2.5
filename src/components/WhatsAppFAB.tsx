import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.link/4rvzrv"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center md:hidden shadow-2xl transition-transform hover:scale-110"
      aria-label="Pedir por WhatsApp"
    >
      <FaWhatsapp
        size={30}
        className="text-white"
      />
    </a>
  );
};

export default WhatsAppFAB;
