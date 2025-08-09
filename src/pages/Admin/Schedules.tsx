import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase, Schedule } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Music, Mic, BookOpen, Heart, Users, Coffee, Eye, EyeOff, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminLayout from '@/components/AdminLayout';

export default function AdminSchedules() {
  const { isAdmin, loading: authLoading } = useAuth();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/');
    }
  }, [authLoading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchSchedules();
    }
  }, [isAdmin]);

  async function fetchSchedules() {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('schedules')
        .select('*, service_type:service_types(*)')
        .order('date', { ascending: false });

      if (error) throw error;
      setSchedules(data || []);
    } catch (error) {
      console.error('Erro ao buscar escalas:', error);
      setError('Não foi possível carregar as escalas.');
    } finally {
      setLoading(false);
    }
  }

  async function toggleScheduleVisibility(scheduleId: number, isHidden: boolean) {
    try {
      const { error } = await supabase
        .from('schedules')
        .update({ is_hidden: isHidden })
        .eq('id', scheduleId);

      if (error) throw error;
      await fetchSchedules();
    } catch (error) {
      console.error('Erro ao atualizar visibilidade da escala:', error);
      setError('Não foi possível atualizar a visibilidade da escala.');
    }
  }

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
        <span className="ml-2 text-gray-600">Carregando...</span>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <AdminLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Gerenciar Escalas</h1>

        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schedules.map((schedule) => (
                  <tr key={schedule.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(schedule.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {schedule.service_type?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        schedule.is_hidden ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {schedule.is_hidden ? 'Oculto' : 'Visível'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleScheduleVisibility(schedule.id!, !schedule.is_hidden)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {schedule.is_hidden ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
} 