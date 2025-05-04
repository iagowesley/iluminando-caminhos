import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

interface AdminAuthProps {
  pageName: string;
}

export default function AdminAuth({ pageName }: AdminAuthProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem(`auth_${pageName}`);
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, [pageName]);

  const handleLogin = () => {
    if (password === "iasdrussas") {
      localStorage.setItem(`auth_${pageName}`, "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(`auth_${pageName}`);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-church-gray p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-church-blue/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-church-blue" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Área Administrativa
          </h2>
          
          <p className="text-gray-600 mb-6 text-center">
            Digite a senha para acessar a área de {pageName}
          </p>
          
          <div className="space-y-4">
            <div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className={`w-full ${error ? 'border-red-500' : ''}`}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">Senha incorreta</p>
              )}
            </div>
            
            <Button 
              onClick={handleLogin}
              className="w-full"
              variant="church"
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleLogout}
        variant="outline"
        size="sm"
        className="bg-white"
      >
        Sair da Administração
      </Button>
    </div>
  );
} 