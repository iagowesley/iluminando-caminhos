import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Music, Mic, BookOpen, Heart, ChevronRight, ChevronLeft, Users, Coffee, Loader2, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase, Schedule, ServiceType } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

interface SundayWednesdayScheduleItemProps {
  date: string;
  preacher: string;
  worship: string;
  reception: string;
  opening: string;
}

interface SabbathScheduleItemProps {
  date: string;
  preacher: string;
  worship: string;
  reception: string;
  sabbathSchool: string;
  deacons: string;
  platform: string;
}

// Formato alternativo para visualização móvel para Domingo e Quarta
const MobileSundayWednesdayView = ({ data }: { data: Schedule[] }) => {
  return (
    <div className="space-y-4 md:hidden">
      {data.map((item, index) => (
        <Card key={index} className="border border-gray-200 shadow-sm hover:border-church-blue/30 transition-colors">
          <CardContent className="p-4">
            <div className="font-bold text-church-blue text-lg mb-3 border-b pb-2 flex items-center">
              <Calendar className="h-4 w-4 mr-2" /> {item.date}
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mic className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Pregação:</span>
                  <p className="text-gray-700">{item.preacher || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Music className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Louvores:</span>
                  <p className="text-gray-700">{item.worship || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Recepção:</span>
                  <p className="text-gray-700">{item.reception || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Coffee className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Abertura do Culto:</span>
                  <p className="text-gray-700">{item.opening || "A definir"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Formato alternativo para visualização móvel para Sábado
const MobileSabbathView = ({ data }: { data: Schedule[] }) => {
  return (
    <div className="space-y-4 md:hidden">
      {data.map((item, index) => (
        <Card key={index} className="border border-gray-200 shadow-sm hover:border-church-blue/30 transition-colors">
          <CardContent className="p-4">
            <div className="font-bold text-church-blue text-lg mb-3 border-b pb-2 flex items-center">
              <Calendar className="h-4 w-4 mr-2" /> {item.date}
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mic className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Pregação:</span>
                  <p className="text-gray-700">{item.preacher || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Music className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Louvores:</span>
                  <p className="text-gray-700">{item.worship || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Recepção:</span>
                  <p className="text-gray-700">{item.reception || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Escola Sabatina:</span>
                  <p className="text-gray-700">{item.sabbath_school || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Plataforma:</span>
                  <p className="text-gray-700">{item.platform || "A definir"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Diáconos/Diaconisas:</span>
                  <p className="text-gray-700">{item.deacons || "A definir"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default function Schedules() {
  const [activeTab, setActiveTab] = useState<string>("sunday");
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [schedules, setSchedules] = useState<{[key: string]: Schedule[]}>({});
  const [hiddenSchedules, setHiddenSchedules] = useState<Set<number>>(new Set()); // Estado para escalas ocultas
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

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
      setError('Não foi possível carregar as escalas. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }

  // Função para ocultar/mostrar uma escala (apenas no frontend)
  function toggleScheduleVisibility(scheduleId: number) {
    setHiddenSchedules(prev => {
      const newHiddenSchedules = new Set(prev);
      if (newHiddenSchedules.has(scheduleId)) {
        newHiddenSchedules.delete(scheduleId); // Mostrar escala
      } else {
        newHiddenSchedules.add(scheduleId); // Ocultar escala
      }
      return newHiddenSchedules;
    });
  }

  // Função para filtrar escalas visíveis
  function getVisibleSchedules(scheduleList: Schedule[]) {
    return scheduleList.filter(schedule => !hiddenSchedules.has(schedule.id!));
  }

  // Obter o tempo padrão com base no tipo de culto ativo
  const getDefaultTime = () => {
    const serviceType = serviceTypes.find(type => {
      const key = type.name.toLowerCase().includes('domingo') 
        ? 'sunday' 
        : type.name.toLowerCase().includes('quarta') 
          ? 'wednesday' 
          : 'sabbath';
      
      return key === activeTab;
    });

    return serviceType?.default_time || '';
  };
  
  return (
    <PageLayout>
      <Hero 
        title="Escalas de Cultos"
        subtitle="Organização e participação nos nossos momentos de adoração"
        backgroundImage="/images/church-2.jpg"
        size="medium"
      />
      
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle 
            title="Nossas Escalas"
            subtitle="Conheça a programação dos nossos cultos"
            accent={true}
            ornate={true}
          />
          
          <div className="max-w-5xl mx-auto mt-8 sm:mt-12">
            <p className="text-gray-700 text-center mb-8 sm:mb-10 px-2">
              Estas são as escalas de participação nos cultos da nossa igreja para os próximos meses. 
              Todos os envolvidos são convidados a chegar com antecedência para os preparativos necessários.
              Em caso de impossibilidade de participação na data designada, favor comunicar com antecedência
              ao responsável pelo ministério correspondente.
            </p>

            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
                <span className="ml-2 text-gray-600">Carregando escalas...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12 px-4">
                <p className="text-red-500 mb-4">{error}</p>
                <Button variant="outline" onClick={fetchData}>
                  Tentar Novamente
                </Button>
              </div>
            ) : (
              <>
                {/* Navegação de abas para telas médias/grandes */}
                <div className="hidden md:block">
                  <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-3 mb-10">
                      <TabsTrigger value="sunday" className="text-sm sm:text-base">Culto de Domingo</TabsTrigger>
                      <TabsTrigger value="wednesday" className="text-sm sm:text-base">Culto de Quarta</TabsTrigger>
                      <TabsTrigger value="sabbath" className="text-sm sm:text-base">Culto de Sábado</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="sunday">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-6">
                            <Clock className="h-5 w-5 text-church-blue mr-2" />
                            <span className="font-medium">Horário: {getDefaultTime()}</span>
                          </div>
                          
                          {schedules.sunday && getVisibleSchedules(schedules.sunday).length > 0 ? (
                            <div className="overflow-x-auto -mx-6 px-6 pb-4">
                              <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                                <span>← Deslize para visualizar toda a tabela →</span>
                              </div>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                                    <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvores</TableHead>
                                    <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                                    <TableHead><Coffee className="h-4 w-4 inline mr-2" /> Abertura do Culto</TableHead>
                                    <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregação</TableHead>
                                    <TableHead className="w-[100px]">Ações</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {schedules.sunday.map((item, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-medium">{item.date}</TableCell>
                                      <TableCell>{item.worship || "A definir"}</TableCell>
                                      <TableCell>{item.reception || "A definir"}</TableCell>
                                      <TableCell>{item.opening || "A definir"}</TableCell>
                                      <TableCell>{item.preacher || "A definir"}</TableCell>
                                      <TableCell>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => toggleScheduleVisibility(item.id!)}
                                          className="h-8 w-8"
                                          title={hiddenSchedules.has(item.id!) ? "Mostrar escala" : "Ocultar escala"}
                                        >
                                          {hiddenSchedules.has(item.id!) ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          ) : (
                            <div className="text-center py-8 text-gray-500">
                              Nenhuma escala cadastrada para este culto.
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="wednesday">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-6">
                            <Clock className="h-5 w-5 text-church-blue mr-2" />
                            <span className="font-medium">Horário: {getDefaultTime()}</span>
                          </div>
                          
                          {schedules.wednesday && getVisibleSchedules(schedules.wednesday).length > 0 ? (
                            <div className="overflow-x-auto -mx-6 px-6 pb-4">
                              <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                                <span>← Deslize para visualizar toda a tabela →</span>
                              </div>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                                    <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvores</TableHead>
                                    <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                                    <TableHead><Coffee className="h-4 w-4 inline mr-2" /> Abertura do Culto</TableHead>
                                    <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregação</TableHead>
                                    <TableHead className="w-[100px]">Ações</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {schedules.wednesday.map((item, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-medium">{item.date}</TableCell>
                                      <TableCell>{item.worship || "A definir"}</TableCell>
                                      <TableCell>{item.reception || "A definir"}</TableCell>
                                      <TableCell>{item.opening || "A definir"}</TableCell>
                                      <TableCell>{item.preacher || "A definir"}</TableCell>
                                      <TableCell>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => toggleScheduleVisibility(item.id!)}
                                          className="h-8 w-8"
                                          title={hiddenSchedules.has(item.id!) ? "Mostrar escala" : "Ocultar escala"}
                                        >
                                          {hiddenSchedules.has(item.id!) ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          ) : (
                            <div className="text-center py-8 text-gray-500">
                              Nenhuma escala cadastrada para este culto.
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="sabbath">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-6">
                            <Clock className="h-5 w-5 text-church-blue mr-2" />
                            <span className="font-medium">Horário: {getDefaultTime()}</span>
                          </div>
                          
                          {schedules.sabbath && getVisibleSchedules(schedules.sabbath).length > 0 ? (
                            <div className="overflow-x-auto -mx-6 px-6 pb-4">
                              <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                                <span>← Deslize para visualizar toda a tabela →</span>
                              </div>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                                    <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvores</TableHead>
                                    <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                                    <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Escola Sabatina</TableHead>
                                    <TableHead><Users className="h-4 w-4 inline mr-2" /> Plataforma</TableHead>
                                    <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Diáconos/Diaconisas</TableHead>
                                    <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregação</TableHead>
                                    <TableHead className="w-[100px]">Ações</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {schedules.sabbath.map((item, index) => (
                                    <TableRow key={index}>
                                      <TableCell className="font-medium">{item.date}</TableCell>
                                      <TableCell>{item.worship || "A definir"}</TableCell>
                                      <TableCell>{item.reception || "A definir"}</TableCell>
                                      <TableCell>{item.sabbath_school || "A definir"}</TableCell>
                                      <TableCell>{item.platform || "A definir"}</TableCell>
                                      <TableCell>{item.deacons || "A definir"}</TableCell>
                                      <TableCell>{item.preacher || "A definir"}</TableCell>
                                      <TableCell>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => toggleScheduleVisibility(item.id!)}
                                          className="h-8 w-8"
                                          title={hiddenSchedules.has(item.id!) ? "Mostrar escala" : "Ocultar escala"}
                                        >
                                          {hiddenSchedules.has(item.id!) ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          ) : (
                            <div className="text-center py-8 text-gray-500">
                              Nenhuma escala cadastrada para este culto.
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* Navegação alternativa para dispositivos móveis */}
                <div className="md:hidden">
                  <div className="flex justify-between items-center mb-4 bg-church-gray p-3 shadow-sm">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setActiveTab(activeTab === "sunday" ? "sabbath" : activeTab === "wednesday" ? "sunday" : "wednesday")}
                      className="h-8 w-8 hover:bg-white/50"
                      aria-label="Culto anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    
                    <div className="font-semibold text-church-darkBlue text-center">
                      {activeTab === "sunday" && "Culto de Domingo"}
                      {activeTab === "wednesday" && "Culto de Quarta"}
                      {activeTab === "sabbath" && "Culto de Sábado"}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setActiveTab(activeTab === "sunday" ? "wednesday" : activeTab === "wednesday" ? "sabbath" : "sunday")}
                      className="h-8 w-8 hover:bg-white/50"
                      aria-label="Próximo culto"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Indicadores de página */}
                  <div className="flex justify-center space-x-2 mb-4">
                    <div 
                      className={`h-2 w-2 rounded-full ${activeTab === "sunday" ? "bg-church-blue" : "bg-gray-300"}`}
                      aria-hidden="true"
                    />
                    <div 
                      className={`h-2 w-2 rounded-full ${activeTab === "wednesday" ? "bg-church-blue" : "bg-gray-300"}`}
                      aria-hidden="true"
                    />
                    <div 
                      className={`h-2 w-2 rounded-full ${activeTab === "sabbath" ? "bg-church-blue" : "bg-gray-300"}`}
                      aria-hidden="true"
                    />
                  </div>
                  
                  <div className="bg-white p-3 mb-4 shadow-sm border border-gray-100">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-church-blue mr-2 flex-shrink-0" />
                      <span className="font-medium text-sm">
                        Horário: {getDefaultTime()}
                      </span>
                    </div>
                  </div>
                  
                  {schedules.sunday && activeTab === "sunday" ? (
                    getVisibleSchedules(schedules.sunday).length > 0 ? (
                      <MobileSundayWednesdayView data={getVisibleSchedules(schedules.sunday)} />
                    ) : (
                      <div className="text-center py-10 bg-white shadow-sm border border-gray-100">
                        <p className="text-gray-500">Nenhuma escala cadastrada para este culto.</p>
                      </div>
                    )
                  ) : null}
                  
                  {schedules.wednesday && activeTab === "wednesday" ? (
                    getVisibleSchedules(schedules.wednesday).length > 0 ? (
                      <MobileSundayWednesdayView data={getVisibleSchedules(schedules.wednesday)} />
                    ) : (
                      <div className="text-center py-10 bg-white shadow-sm border border-gray-100">
                        <p className="text-gray-500">Nenhuma escala cadastrada para este culto.</p>
                      </div>
                    )
                  ) : null}
                  
                  {schedules.sabbath && activeTab === "sabbath" ? (
                    getVisibleSchedules(schedules.sabbath).length > 0 ? (
                      <MobileSabbathView data={getVisibleSchedules(schedules.sabbath)} />
                    ) : (
                      <div className="text-center py-10 bg-white shadow-sm border border-gray-100">
                        <p className="text-gray-500">Nenhuma escala cadastrada para este culto.</p>
                      </div>
                    )
                  ) : null}
                </div>
              </>
            )}
            
            <div className="mt-8 sm:mt-12 bg-church-gray p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-church-darkBlue mb-3 sm:mb-4">Informações Importantes</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-church-blue">•</span>
                  <span>As escalas são atualizadas mensalmente e podem sofrer alterações conforme necessidade.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-church-blue">•</span>
                  <span>Em caso de dúvidas ou impossibilidade de participação, entre em contato com o coordenador de seu ministério ou com a secretaria da igreja.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-church-blue">•</span>
                  <span>Recomendamos que todos os participantes da escala cheguem com pelo menos 30 minutos de antecedência.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-church-blue">•</span>
                  <span>Para sugestões ou voluntariado em um dos ministérios, preencha o formulário na <a href="/contato" className="text-church-blue hover:underline">página de contato</a>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 