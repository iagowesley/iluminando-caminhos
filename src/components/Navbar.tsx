import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, Heart, Instagram, Sparkles } from "lucide-react";
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
      { name: "Liderança", href: "/lideranca" },
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
      { name: "Escalas", href: "/escalas" }
    ]
  },
  {
    name: "Contato",
    href: "/contato",
    submenu: false
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
      {/* Announcement Bar for 7ChatAI */}
      <div className="fixed top-0 left-0 right-0 md:right-[calc(100vw/7)] z-40 bg-[#003366]">
        <div className="container mx-auto px-6 lg:px-8 h-12 flex items-center justify-center gap-4 sm:gap-12">
          <a
            href="https://7chat.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="/images/7chat.png"
              alt="7ChatAI"
              className="h-6 w-auto"
            />
            <span className="text-white text-sm font-medium hidden sm:inline">
              Conheça o <span className="font-bold">7ChatAI</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/search?q=7chat.ai+adventista&c=apps&hl=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-black/20 hover:bg-black/30 transition-colors px-3 py-1.5 rounded-full border border-white/10"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current text-white" fill="currentColor">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
              </svg>
              <span className="text-xs text-white font-medium">Google Play</span>
            </a>

            <a
              href="https://apps.apple.com/br/app/7chat/id6752037811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-black/20 hover:bg-black/30 transition-colors px-3 py-1.5 rounded-full border border-white/10"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current text-white" fill="currentColor">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              </svg>
              <span className="text-xs text-white font-medium">App Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-12 left-0 right-0 md:right-[calc(100vw/7)] z-30 transition-all duration-300 ease-in-out ${scrolled || !isHomePage
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
                      ${item.name === "Dízimo"
                        ? "bg-church-blue text-white hover:bg-church-darkBlue px-4 py-2 rounded-full"
                        : item.name === "Instagram"
                          ? `rounded-full transition-colors duration-200 ${scrolled || !isHomePage
                            ? "text-gray-600 hover:text-pink-500"
                            : "text-white hover:text-pink-300"
                          }`
                          : scrolled || !isHomePage
                            ? "text-gray-600 hover:text-church-blue"
                            : "text-white hover:text-white"}
                    `}
                  >
                    {item.name === "Dízimo" ? (
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
                      className={`block py-2 text-xl font-medium transition-colors ${item.name === "Dízimo"
                        ? "text-white bg-church-blue px-4 py-2 rounded-md"
                        : item.name === "Instagram"
                          ? "text-pink-600 hover:text-pink-700"
                          : "text-gray-600 hover:text-church-blue"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {item.name === "Dízimo" ? (
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
                        `block py-2 text-xl font-medium transition-colors ${isActive ? "text-church-blue" : "text-gray-600 hover:text-church-blue"
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
