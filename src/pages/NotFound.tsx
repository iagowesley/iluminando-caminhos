
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="glass-card border-none max-w-lg w-full p-8 text-center">
          <h1 className="text-6xl font-bold text-church-blue mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Página não encontrada</p>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <Button asChild className="bg-church-blue hover:bg-church-darkBlue">
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" /> Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
