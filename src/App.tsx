import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
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
import TenDaysOfPrayer from "./pages/TenDaysOfPrayer";
import AdminBibleStudies from "./pages/AdminBibleStudies";
import AdminSchedules from "@/pages/AdminSchedules";
import AdminEvents from "./pages/AdminEvents";
import AdminLayout from "./components/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
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
            <Route path="/contato" element={<Contact />} />
            <Route path="/escalas" element={<Schedules />} />
            <Route path="/admin/escalas" element={<AdminSchedules />} />
            <Route path="/admin/estudos-biblicos" element={<AdminBibleStudies />} />
            <Route path="/admin/eventos" element={<AdminEvents />} />
            <Route path="/projetos-sociais" element={<SocialProjects />} />
            <Route path="/estudos-biblicos" element={<BibleStudies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/musica" element={<Music />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/dizimos-ofertas" element={<Tithes />} />
            <Route path="/10-dias-oracao" element={<TenDaysOfPrayer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
