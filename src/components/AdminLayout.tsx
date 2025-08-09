import { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, Users, Settings, LogOut } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-church-blue"></div>
      </div>
    );
  }

  if (!isAdmin) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-church-blue">Painel Administrativo</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Button
                  variant="ghost"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  onClick={() => navigate('/admin/escalas')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Escalas
                </Button>
                <Button
                  variant="ghost"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  onClick={() => navigate('/admin/estudos')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Estudos Bíblicos
                </Button>
                <Button
                  variant="ghost"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  onClick={() => navigate('/admin/eventos')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Eventos
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                onClick={() => navigate('/')}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 