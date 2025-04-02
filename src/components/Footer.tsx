import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-darkBlue text-white md:pr-[calc(100vw/7)]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo-central-branca.png" 
                alt="IASD Central Russas" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              Proclamando esperança e transformando vidas através da mensagem de fé, esperança e amor.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/iasdcentralrussas/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-church-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              
              <a href="#" className="text-gray-300 hover:text-church-accent transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/quem-somos" className="text-gray-300 hover:text-white transition-colors text-base">
                  Quem somos
                </NavLink>
              </li>
              <li>
                <NavLink to="/estrutura" className="text-gray-300 hover:text-white transition-colors text-base">
                  Estrutura organizacional
                </NavLink>
              </li>
              <li>
                <NavLink to="/missao" className="text-gray-300 hover:text-white transition-colors text-base">
                  Missão e serviço
                </NavLink>
              </li>
              <li>
                <NavLink to="/crencas" className="text-gray-300 hover:text-white transition-colors text-base">
                  Nossas crenças
                </NavLink>
              </li>
              <li>
                <NavLink to="/cultos" className="text-gray-300 hover:text-white transition-colors text-base">
                  Nossos cultos
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/estudos-biblicos" className="text-gray-300 hover:text-white transition-colors text-base">
                  Estudos Bíblicos
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/cultos#horarios" className="text-gray-300 hover:text-white transition-colors text-base">
                  Horários de Culto
                </NavLink>
              </li>
              <li>
                <NavLink to="/eventos" className="text-gray-300 hover:text-white transition-colors text-base">
                  Eventos
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-gray-300 hover:text-white transition-colors text-base">
                  Perguntas Frequentes
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-9 w-9 mr-2 mt-0.5 text-church-accent" />
                <span className="text-gray-300 text-base">R. André Moreira - Planalto da Catumbela, Russas - CE, 62900-000</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-church-accent" />
                <a href="tel:+556133456789" className="text-gray-300 hover:text-white transition-colors text-base">
                  (61) 3345-6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-church-accent" />
                <a href="mailto:contato@adventistas.org" className="text-gray-300 hover:text-white transition-colors text-base">
                  contato@adventistas.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base">
              &copy; {currentYear} Igreja Adventista do Sétimo Dia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <NavLink to="/privacidade" className="text-gray-400 hover:text-white text-base transition-colors">
                Política de Privacidade
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
