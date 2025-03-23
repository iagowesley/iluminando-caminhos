import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Structure from "./pages/Structure";
import Mission from "./pages/Mission";
import Beliefs from "./pages/Beliefs";
import Worship from "./pages/Worship";
import Events from "./pages/Events";
import Leadership from "./pages/Leadership";
import Gallery from "./pages/Gallery";
import SocialProjects from "./pages/SocialProjects";
import BibleStudies from "./pages/BibleStudies";
import FAQ from "./pages/FAQ";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
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
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/estrutura" element={<Structure />} />
          <Route path="/missao" element={<Mission />} />
          <Route path="/crencas" element={<Beliefs />} />
          <Route path="/cultos" element={<Worship />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/lideranca" element={<Leadership />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/projetos-sociais" element={<SocialProjects />} />
          <Route path="/estudos-biblicos" element={<BibleStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/musica" element={<Music />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
