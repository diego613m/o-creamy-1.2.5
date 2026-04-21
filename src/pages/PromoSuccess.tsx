import { useLocation, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Ticket } from "lucide-react";

const PromoSuccess = () => {
  const location = useLocation();
  const state = location.state as { couponCode: string; fullName: string } | null;

  if (!state) {
    return <Navigate to="/promo-feria" replace />;
  }

  return (
    <div className="min-h-screen bg-ocreamy-cream flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden text-center scale-up-animation">
          <div className="bg-green-500 p-8 text-white flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 mb-4 animate-bounce" />
            <h1 className="text-2xl font-bold">¡Registro Exitoso!</h1>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-ocreamy-brown text-lg">
              ¡Gracias <span className="font-bold">{state.fullName.split(' ')[0]}</span>! <br />
              Por ser parte de la familia O'Creamy 💖
            </p>

            <div className="relative p-6 border-2 border-dashed border-ocreamy-red/30 rounded-2xl bg-ocreamy-cream-pink/10 group">
              <Ticket className="absolute -top-3 -left-3 w-8 h-8 text-ocreamy-red -rotate-12" />
              <p className="text-sm text-ocreamy-brown/60 uppercase tracking-widest mb-2 font-semibold">Tu Código de Descuento</p>
              <p className="text-3xl font-black text-ocreamy-red tracking-widest mb-2 font-mono">
                {state.couponCode}
              </p>
              <p className="text-xs text-ocreamy-brown/60">
                Muestra este código en caja para obtener tu 20% de descuento en Obleas Especiales.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm italic text-ocreamy-brown">
                "Hacemos obleas y fresas con crema que roban corazones"
              </p>
              <Link to="/">
                <Button variant="outline" className="w-full rounded-xl border-ocreamy-brown text-ocreamy-brown hover:bg-ocreamy-cream mt-4">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <style>{`
        .scale-up-animation {
          animation: scale-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default PromoSuccess;
