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
import AdminLeadership from "./pages/AdminLeadership";
import Gallery from "./pages/Gallery";
import AdminGallery from "./pages/AdminGallery";
import SocialProjects from "./pages/SocialProjects";
import BibleStudies from "./pages/BibleStudies";
import FAQ from "./pages/FAQ";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Schedules from "./pages/Schedules";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Tithes from "./pages/Tithes";
import AdminBibleStudies from "./pages/AdminBibleStudies";
import AdminSchedules from "./pages/AdminSchedules";

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
          <Route path="/admin/lideranca" element={<AdminLeadership />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/admin/galeria" element={<AdminGallery />} />
          <Route path="/admin/estudos-biblicos" element={<AdminBibleStudies />} />
          <Route path="/admin/escalas" element={<AdminSchedules />} />
          <Route path="/projetos-sociais" element={<SocialProjects />} />
          <Route path="/estudos-biblicos" element={<BibleStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/musica" element={<Music />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/escalas" element={<Schedules />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/dizimos-ofertas" element={<Tithes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
