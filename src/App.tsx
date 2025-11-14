import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Ubicacion from "./pages/Ubicacion";
import ZonasDeReparto from "./pages/ZonasDeReparto";
import PoliticasDePrivacidad from "./pages/PoliticasDePrivacidad";
import PoliticasDeCookies from "./pages/PoliticasDeCookies";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/zonas-de-reparto" element={<ZonasDeReparto />} />
          <Route path="/politicas-de-privacidad" element={<PoliticasDePrivacidad />} />
          <Route path="/politicas-de-cookies" element={<PoliticasDeCookies />} />
          <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
