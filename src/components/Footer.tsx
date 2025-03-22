
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-darkBlue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://via.placeholder.com/40/FFFFFF/00539F?text=A" 
                alt="Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-xl font-serif font-semibold">
                Adventistas
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              Proclamando esperança e transformando vidas através da mensagem de fé, esperança e amor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-church-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-church-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-church-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-church-accent transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  Quem Somos
                </NavLink>
              </li>
              <li>
                <NavLink to="/estrutura" className="text-gray-300 hover:text-white transition-colors">
                  Estrutura Organizacional
                </NavLink>
              </li>
              <li>
                <NavLink to="/missao" className="text-gray-300 hover:text-white transition-colors">
                  Missão e Serviço
                </NavLink>
              </li>
              <li>
                <NavLink to="/crencas" className="text-gray-300 hover:text-white transition-colors">
                  Nossas Crenças
                </NavLink>
              </li>
              <li>
                <NavLink to="/cultos" className="text-gray-300 hover:text-white transition-colors">
                  Nossos Cultos
                </NavLink>
              </li>
              <li>
                <NavLink to="/documentos" className="text-gray-300 hover:text-white transition-colors">
                  Documentos Oficiais
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Estudos Bíblicos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Publicações
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mídia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-church-accent" />
                <span className="text-gray-300">Av. L3 Sul, SGAS 611, Mód. 75/76 - Asa Sul, Brasília - DF, 70200-711</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-church-accent" />
                <a href="tel:+556133456789" className="text-gray-300 hover:text-white transition-colors">
                  (61) 3345-6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-church-accent" />
                <a href="mailto:contato@adventistas.org" className="text-gray-300 hover:text-white transition-colors">
                  contato@adventistas.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Igreja Adventista do Sétimo Dia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
