
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Estrutura", href: "/estrutura" },
  { name: "Missão e Serviço", href: "/missao" },
  { name: "Nossas Crenças", href: "/crencas" },
  { name: "Nossos Cultos", href: "/cultos" },
  { name: "Documentos", href: "/documentos" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img 
              src="https://via.placeholder.com/40/00539F/FFFFFF?text=A" 
              alt="Logo" 
              className="h-10 w-auto" 
            />
            <span className={`text-xl font-serif font-semibold ${scrolled ? "text-church-blue" : "text-white"}`}>
              Adventistas
            </span>
          </NavLink>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `
                text-sm font-medium transition-colors duration-200 ease-in-out
                ${scrolled 
                  ? (isActive ? "text-church-blue" : "text-gray-600 hover:text-church-blue") 
                  : (isActive ? "text-white font-semibold" : "text-white/80 hover:text-white")}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className={scrolled ? "text-church-blue" : "text-white"}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="https://via.placeholder.com/40/00539F/FFFFFF?text=A" 
                alt="Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-xl font-serif font-semibold text-church-blue">
                Adventistas
              </span>
            </NavLink>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="space-y-4 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors ${
                    isActive ? "text-church-blue" : "text-gray-600 hover:text-church-blue"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
