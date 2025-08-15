import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, Schedule, ServiceType } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Pencil, Trash2, Plus, Save, X, Calendar, Music, Mic, BookOpen, Heart, Users, Coffee } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AdminAuth from "@/components/AdminAuth";

export default function AdminSchedules() {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [schedules, setSchedules] = useState<{[key: string]: Schedule[]}>({});
  const [loading, setLoading] = useState(true);
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [formData, setFormData] = useState<Schedule>({
    service_type_id: 0,
    date: "",
    preacher: "",
    worship: "",
    reception: "",
    opening: "",
    sabbath_school: "",
    deacons: "",
    platform: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("sunday");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Autenticação removida - usando AdminAuth component

  // Carregar dados
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      // Buscar tipos de culto
      const { data: typesData, error: typesError } = await supabase
        .from('service_types')
        .select('*')
        .order('order_index');
      
      if (typesError) throw typesError;
      
      if (!typesData || typesData.length === 0) {
        throw new Error('Nenhum tipo de culto encontrado');
      }

      setServiceTypes(typesData);
      
      // Definir aba ativa para o primeiro tipo
      if (typesData.length > 0) {
        const defaultTab = typesData[0].name.toLowerCase().includes('domingo') 
          ? 'sunday' 
          : typesData[0].name.toLowerCase().includes('quarta') 
            ? 'wednesday' 
            : 'sabbath';
        
        setActiveTab(defaultTab);
      }

      // Buscar escalas para cada tipo de culto
      const schedulesData: {[key: string]: Schedule[]} = {};
      
      for (const type of typesData) {
        const { data: scheduleItems, error: scheduleError } = await supabase
          .from('schedules')
          .select('*')
          .eq('service_type_id', type.id)
          .order('date');
        
        if (scheduleError) throw scheduleError;
        
        const key = type.name.toLowerCase().includes('domingo') 
          ? 'sunday' 
          : type.name.toLowerCase().includes('quarta') 
            ? 'wednesday' 
            : 'sabbath';
        
        schedulesData[key] = scheduleItems || [];
      }
      
      setSchedules(schedulesData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function openAddDialog(serviceType: ServiceType) {
    setSelectedSchedule(null);
    setFormData({
      service_type_id: serviceType.id || 0,
      date: "",
      preacher: "",
      worship: "",
      reception: "",
      opening: "",
      sabbath_school: "",
      deacons: "",
      platform: ""
    });
    setIsScheduleDialogOpen(true);
  }

  function openEditDialog(schedule: Schedule) {
    setSelectedSchedule(schedule);
    setFormData(schedule);
    setIsScheduleDialogOpen(true);
  }

  function openDeleteDialog(schedule: Schedule) {
    setSelectedSchedule(schedule);
    setIsDeleteDialogOpen(true);
  }

  async function handleSaveSchedule() {
    try {
      setFormLoading(true);
      
      if (!formData.date) {
        toast({
          title: "Erro",
          description: "A data é obrigatória",
          variant: "destructive"
        });
        return;
      }

      if (selectedSchedule?.id) {
        // Atualizar escala existente
        const { error } = await supabase
          .from('schedules')
          .update({
            date: formData.date,
            service_type_id: formData.service_type_id,
            preacher: formData.preacher,
            worship: formData.worship,
            reception: formData.reception,
            opening: formData.opening,
            sabbath_school: formData.sabbath_school,
            deacons: formData.deacons,
            platform: formData.platform
          })
          .eq('id', selectedSchedule.id);

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Escala atualizada com sucesso"
        });
      } else {
        // Adicionar nova escala
        const { error } = await supabase
          .from('schedules')
          .insert({
            date: formData.date,
            service_type_id: formData.service_type_id,
            preacher: formData.preacher,
            worship: formData.worship,
            reception: formData.reception,
            opening: formData.opening,
            sabbath_school: formData.sabbath_school,
            deacons: formData.deacons,
            platform: formData.platform
          });

        if (error) throw error;
        
        toast({
          title: "Sucesso",
          description: "Escala adicionada com sucesso"
        });
      }

      setIsScheduleDialogOpen(false);
      fetchData();
    } catch (error) {
      console.error("Erro ao salvar escala:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar a escala",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteSchedule() {
    if (!selectedSchedule?.id) return;
    
    try {
      setFormLoading(true);
      
      const { error } = await supabase
        .from('schedules')
        .delete()
        .eq('id', selectedSchedule.id);

      if (error) throw error;
      
      toast({
        title: "Sucesso",
        description: "Escala removida com sucesso"
      });
      
      setIsDeleteDialogOpen(false);
      fetchData();
    } catch (error) {
      console.error("Erro ao excluir escala:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao excluir a escala",
        variant: "destructive"
      });
    } finally {
      setFormLoading(false);
    }
  }

  // Obter os dados do tipo de culto atual
  const getCurrentServiceType = () => {
    return serviceTypes.find(type => {
      const key = type.name.toLowerCase().includes('domingo') 
        ? 'sunday' 
        : type.name.toLowerCase().includes('quarta') 
          ? 'wednesday' 
          : 'sabbath';
      
      return key === activeTab;
    });
  };

  // Verificar se é culto de sábado
  const isSabbathService = () => {
    const serviceType = getCurrentServiceType();
    return serviceType?.name.toLowerCase().includes('sábado') || false;
  };

  return (
    <PageLayout isAdmin>
      <AdminAuth pageName="Escalas" />
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-church-blue">Administração de Escalas</h1>
        </div>

        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="sunday">Culto de Domingo</TabsTrigger>
            <TabsTrigger value="wednesday">Culto de Quarta</TabsTrigger>
            <TabsTrigger value="sabbath">Culto de Sábado</TabsTrigger>
          </TabsList>

          {Object.keys(schedules).map((tabKey) => (
            <TabsContent key={tabKey} value={tabKey}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Escalas de {
                      tabKey === "sunday" ? "Domingo" :
                      tabKey === "wednesday" ? "Quarta-feira" : "Sábado"
                    }</CardTitle>
                    <CardDescription>
                      Gerencie as escalas de participação nos cultos de {
                        tabKey === "sunday" ? "domingo" :
                        tabKey === "wednesday" ? "quarta-feira" : "sábado"
                      }
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => openAddDialog(getCurrentServiceType() as ServiceType)}
                    className="rounded-full"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Escala
                  </Button>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex justify-center items-center py-20">
                      <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
                      <span className="ml-2">Carregando...</span>
                    </div>
                  ) : schedules[tabKey] && schedules[tabKey].length > 0 ? (
                    <div className="overflow-x-auto -mx-6 px-6 pb-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                            <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvores</TableHead>
                            <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                            {tabKey !== "sabbath" && (
                              <TableHead><Coffee className="h-4 w-4 inline mr-2" /> Abertura</TableHead>
                            )}
                            {tabKey === "sabbath" && (
                              <>
                                <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Escola Sabatina</TableHead>
                                <TableHead><Users className="h-4 w-4 inline mr-2" /> Plataforma</TableHead>
                                <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Diáconos</TableHead>
                              </>
                            )}
                            <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregação</TableHead>
                            <TableHead className="w-[100px]">Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {schedules[tabKey].map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.date}</TableCell>
                              <TableCell>{item.worship || "-"}</TableCell>
                              <TableCell>{item.reception || "-"}</TableCell>
                              {tabKey !== "sabbath" && (
                                <TableCell>{item.opening || "-"}</TableCell>
                              )}
                              {tabKey === "sabbath" && (
                                <>
                                  <TableCell>{item.sabbath_school || "-"}</TableCell>
                                  <TableCell>{item.platform || "-"}</TableCell>
                                  <TableCell>{item.deacons || "-"}</TableCell>
                                </>
                              )}
                              <TableCell>{item.preacher || "-"}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => openEditDialog(item)}
                                    className="h-8 w-8 text-blue-500"
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => openDeleteDialog(item)}
                                    className="h-8 w-8 text-red-500"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500 mb-4">Nenhuma escala cadastrada para este tipo de culto.</p>
                      <Button 
                        onClick={() => openAddDialog(getCurrentServiceType() as ServiceType)}
                      >
                        Adicionar Primeira Escala
                      </Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <p className="text-sm text-gray-500">
                    Total: {schedules[tabKey]?.length || 0} escalas
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Diálogo para adicionar/editar escala */}
      <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedSchedule ? "Editar Escala" : "Adicionar Escala"}</DialogTitle>
            <DialogDescription>
              Preencha os dados da escala para o culto de {
                formData.service_type_id && serviceTypes.find(t => t.id === formData.service_type_id)?.name.split(' ').pop()
              }
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="date" className="text-sm font-medium">Data</label>
              <Input
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="Ex: 05/06/2025"
              />
              <p className="text-xs text-gray-500">Formato: DD/MM/AAAA</p>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="worship" className="text-sm font-medium">Louvores</label>
              <Input
                id="worship"
                name="worship"
                value={formData.worship || ""}
                onChange={handleInputChange}
                placeholder="Ex: Suely e Davi"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="reception" className="text-sm font-medium">Recepção</label>
              <Input
                id="reception"
                name="reception"
                value={formData.reception || ""}
                onChange={handleInputChange}
                placeholder="Ex: Vitória e Paloma"
              />
            </div>
            
            {!isSabbathService() && (
              <div className="grid gap-2">
                <label htmlFor="opening" className="text-sm font-medium">Abertura do Culto</label>
                <Input
                  id="opening"
                  name="opening"
                  value={formData.opening || ""}
                  onChange={handleInputChange}
                  placeholder="Ex: Marcelo e Rosana"
                />
              </div>
            )}
            
            {isSabbathService() && (
              <>
                <div className="grid gap-2">
                  <label htmlFor="sabbath_school" className="text-sm font-medium">Escola Sabatina</label>
                  <Input
                    id="sabbath_school"
                    name="sabbath_school"
                    value={formData.sabbath_school || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: Ministério Jovem"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="platform" className="text-sm font-medium">Plataforma</label>
                  <Input
                    id="platform"
                    name="platform"
                    value={formData.platform || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: Pr. José e Dc. João"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="deacons" className="text-sm font-medium">Diáconos/Diaconisas</label>
                  <Input
                    id="deacons"
                    name="deacons"
                    value={formData.deacons || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: Iago e Lara"
                  />
                </div>
              </>
            )}
            
            <div className="grid gap-2">
              <label htmlFor="preacher" className="text-sm font-medium">Pregação</label>
              <Input
                id="preacher"
                name="preacher"
                value={formData.preacher || ""}
                onChange={handleInputChange}
                placeholder="Ex: Pr. José Silva"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={handleSaveSchedule} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Salvar
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmação para excluir escala */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a escala do dia {selectedSchedule?.date}? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteSchedule} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Excluindo...
                </>
              ) : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </PageLayout>
  );
} 