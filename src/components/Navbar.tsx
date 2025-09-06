import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, Heart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavigationItem = {
  name: string;
  href: string;
  submenu: boolean;
  external?: boolean;
  items?: { name: string; href: string; external?: boolean }[];
};

const navigation: NavigationItem[] = [
  { 
    name: "Início", 
    href: "/",
    submenu: false
  },
  { 
    name: "Quem somos", 
    href: "/quem-somos",
    submenu: true,
    items: [
      { name: "Nossa história", href: "/quem-somos#historia" },
      { name: "Visão e missão", href: "/quem-somos#visao" },
      { name: "Liderança", href: "/lideranca" },
      { name: "Galeria de fotos", href: "/galeria" },
      { name: "Missão e serviço", href: "/missao" }
    ]
  },
  { 
    name: "Estrutura", 
    href: "/estrutura",
    submenu: false
  },
  { 
    name: "Nossas crenças", 
    href: "/crencas",
    submenu: true,
    items: [
      { name: "As 28 crenças", href: "/crencas#fundamentais" },
      { name: "Estudo bíblico", href: "/estudos-biblicos" },
      { name: "Perguntas frequentes", href: "/faq" }
    ]
  },
  { 
    name: "Nossos cultos", 
    href: "/cultos",
    submenu: true,
    items: [
      { name: "Horários", href: "/cultos#horarios" },
      { name: "Música", href: "/musica" },
      { name: "Eventos", href: "/eventos" },
      { name: "Escalas", href: "/escalas" }
    ]
  },
  { 
    name: "Contato", 
    href: "/contato",
    submenu: false
  },
  { 
    name: "Dízimos e ofertas", 
    href: "/dizimos-ofertas",
    submenu: true,
    items: [
      { name: "Sobre dízimos e ofertas", href: "/dizimos-ofertas" },
      { name: "Contribuir agora", href: "https://giving.7me.app/guest-donation/church/fa6d3669-cc8a-4f33-8eae-a68136df3af9", external: true }
    ]
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/iasdcentralrussas/",
    submenu: false,
    external: true
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica o scroll inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Fechar o menu mobile quando mudar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (navigation[index].submenu) {
      setActiveSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Delay de 300ms antes de fechar o submenu
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 md:right-[calc(100vw/7)] z-30 transition-all duration-300 ease-in-out ${
          scrolled || !isHomePage
            ? "bg-white/95 backdrop-blur-md shadow-md py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8 h-16" aria-label="Global">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img 
                src={scrolled || !isHomePage ? "/images/logo-central-azul.png" : "/images/logo-central-branca.png"} 
                alt="IASD Central Russas" 
                className="h-14 w-auto transition-all duration-300"
              />
            </NavLink>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item, index) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-base font-medium transition-colors duration-200 ease-in-out flex items-center
                      ${item.name === "Dízimos e ofertas"
                        ? "bg-church-blue text-white hover:bg-church-darkBlue px-4 py-2 rounded-full"
                        : item.name === "Instagram"
                          ? `rounded-full transition-colors duration-200 ${
                              scrolled || !isHomePage
                                ? "text-gray-600 hover:text-pink-500" 
                                : "text-white hover:text-pink-300"
                            }`
                          : scrolled || !isHomePage
                            ? "text-gray-600 hover:text-church-blue" 
                            : "text-white hover:text-white"}
                    `}
                  >
                    {item.name === "Dízimos e ofertas" ? (
                      <>
                        <Heart className="mr-1 h-4 w-4" />
                        {item.name}
                      </>
                    ) : item.name === "Instagram" ? (
                      <Instagram className="h-5 w-5 translate-y-0.5" />
                    ) : (
                      <>
                        <MapPin className="mr-1 h-4 w-4" />
                        {item.name}
                      </>
                    )}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => `
                      text-base font-medium transition-colors duration-200 ease-in-out flex items-center
                      ${scrolled || !isHomePage
                        ? (isActive ? "text-church-blue" : "text-gray-600 hover:text-church-blue") 
                        : (isActive ? "text-white font-semibold" : "text-white hover:text-white")}
                    `}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                    )}
                  </NavLink>
                )}
                
                {item.submenu && activeSubmenu === index && (
                  <div 
                    className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleSubmenuMouseLeave}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-base text-gray-700 hover:bg-church-blue hover:text-white"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <NavLink
                            key={subItem.name}
                            to={subItem.href}
                            className={({ isActive }) => `
                              block px-4 py-2 text-base text-gray-700 hover:bg-church-blue hover:text-white
                              ${isActive ? "bg-church-gray text-church-blue font-medium" : ""}
                            `}
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {subItem.name}
                          </NavLink>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botão de Menu Mobile */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className={`relative z-50 ${scrolled || !isHomePage ? "text-church-blue" : "text-white"}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 lg:hidden" style={{ zIndex: 100000 }}>
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl overflow-y-auto"
            style={{ zIndex: 100001 }}
          >
            <div className="flex items-center justify-between mb-6">
              <NavLink to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/images/logo-central-azul.png" 
                  alt="IASD Central Russas" 
                  className="h-12 w-auto"
                />
              </NavLink>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="space-y-2 py-4">
              {navigation.map((item, index) => (
                <div key={item.name} className="border-b border-gray-100 pb-3 last:border-0">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block py-2 text-xl font-medium transition-colors ${
                        item.name === "Dízimos e ofertas"
                          ? "text-white bg-church-blue px-4 py-2 rounded-md"
                          : item.name === "Instagram"
                            ? "text-pink-600 hover:text-pink-700"
                            : "text-gray-600 hover:text-church-blue"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {item.name === "Dízimos e ofertas" ? (
                          <Heart className="mr-2 h-5 w-5" />
                        ) : item.name === "Instagram" ? (
                          <Instagram className="mr-2 h-5 w-5" />
                        ) : (
                          <MapPin className="mr-2 h-5 w-5" />
                        )}
                        {item.name}
                      </div>
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-2 text-xl font-medium transition-colors ${
                          isActive ? "text-church-blue" : "text-gray-600 hover:text-church-blue"
                        }`
                      }
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                          setActiveSubmenu(activeSubmenu === index ? null : index);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        {item.name}
                        {item.submenu && (
                          <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </NavLink>
                  )}
                  
                  {item.submenu && activeSubmenu === index && (
                    <div className="ml-4 mt-2 space-y-1 border-l-2 border-church-gray pl-4">
                      {item.items?.map((subItem) => (
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-base transition-colors text-gray-600 hover:text-church-blue"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <NavLink
                            key={subItem.name}
                            to={subItem.href}
                            className={({ isActive }) => `
                              block py-2 text-base transition-colors
                              ${isActive ? "text-church-blue font-medium" : "text-gray-600 hover:text-church-blue"}
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
