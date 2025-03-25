import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Music, Mic, BookOpen, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ScheduleItemProps {
  date: string;
  preacher: string;
  worship: string;
  deacons: string;
  reception: string;
  multimedia: string;
}

// Dados das escalas (podem ser substituídos por dados reais)
const sundaySchedule: ScheduleItemProps[] = [
  {
    date: "21/07/2024",
    preacher: "Pr. Carlos Silva",
    worship: "Grupo Adoração",
    deacons: "João, Pedro",
    reception: "Maria, Ana",
    multimedia: "Felipe"
  },
  {
    date: "28/07/2024",
    preacher: "Anc. Roberto Oliveira",
    worship: "Ministério Jovem",
    deacons: "Mateus, Lucas",
    reception: "Juliana, Roberta",
    multimedia: "Gabriel"
  },
  {
    date: "04/08/2024",
    preacher: "Pr. Paulo Mendes",
    worship: "Coral da Igreja",
    deacons: "André, Tiago",
    reception: "Sandra, Mônica",
    multimedia: "Rafael"
  },
  {
    date: "11/08/2024",
    preacher: "Ev. Marcos Almeida",
    worship: "Quarteto Masculino",
    deacons: "Davi, Samuel",
    reception: "Cristina, Patrícia",
    multimedia: "Lucas"
  }
];

const wednesdaySchedule: ScheduleItemProps[] = [
  {
    date: "17/07/2024",
    preacher: "Anc. José Ferreira",
    worship: "Trio Esperança",
    deacons: "Pedro, André",
    reception: "Joana, Rebeca",
    multimedia: "Mateus"
  },
  {
    date: "24/07/2024",
    preacher: "Pr. Carlos Silva",
    worship: "Solista Mariana",
    deacons: "Samuel, João",
    reception: "Clara, Sara",
    multimedia: "Daniel"
  },
  {
    date: "31/07/2024",
    preacher: "Anc. Guilherme Dias",
    worship: "Grupo Família",
    deacons: "Lucas, Tiago",
    reception: "Beatriz, Ana",
    multimedia: "Felipe"
  },
  {
    date: "07/08/2024",
    preacher: "Ev. Paulo Costa",
    worship: "Jovens em Adoração",
    deacons: "Roberto, Marcos",
    reception: "Lúcia, Fernanda",
    multimedia: "Gabriel"
  }
];

const sabbathSchedule: ScheduleItemProps[] = [
  {
    date: "20/07/2024",
    preacher: "Pr. Carlos Silva",
    worship: "Coral da Igreja",
    deacons: "Pedro, João, Samuel, André",
    reception: "Maria, Ana, Joana",
    multimedia: "Rafael"
  },
  {
    date: "27/07/2024",
    preacher: "Pr. Roberto Oliveira",
    worship: "Grupo Adoração",
    deacons: "Lucas, Mateus, Davi, Thiago",
    reception: "Sandra, Mônica, Cristina",
    multimedia: "Lucas"
  },
  {
    date: "03/08/2024",
    preacher: "Anc. Paulo Mendes",
    worship: "Ministério Jovem",
    deacons: "André, Tiago, Marcos, João",
    reception: "Juliana, Roberta, Sara",
    multimedia: "Mateus"
  },
  {
    date: "10/08/2024",
    preacher: "Pr. Carlos Silva",
    worship: "Quarteto Esperança",
    deacons: "Pedro, Samuel, Lucas, Gabriel",
    reception: "Clara, Ana, Beatriz",
    multimedia: "Felipe"
  }
];

// Formato alternativo para visualização móvel
const MobileScheduleView = ({ data }: { data: ScheduleItemProps[] }) => {
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
                  <span className="font-medium text-gray-800">Pregador:</span>
                  <p className="text-gray-700">{item.preacher}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Music className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Louvor:</span>
                  <p className="text-gray-700">{item.worship}</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Diáconos:</span>
                  <p className="text-gray-700">{item.deacons}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800">Recepção:</span>
                  <p className="text-gray-700">{item.reception}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-church-accent mr-2 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">Multimídia:</span>
                  <p className="text-gray-700">{item.multimedia}</p>
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
  const [activeTab, setActiveTab] = useState<string>("sabbath");
  
  return (
    <PageLayout>
      <Hero 
        title="Escalas de Cultos"
        subtitle="Organização e participação nos nossos momentos de adoração"
        backgroundImage="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
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

            {/* Navegação de abas para telas médias/grandes */}
            <div className="hidden md:block">
              <Tabs defaultValue="sabbath" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-10">
                  <TabsTrigger value="sabbath" className="text-sm sm:text-base">Culto de Sábado</TabsTrigger>
                  <TabsTrigger value="wednesday" className="text-sm sm:text-base">Culto de Quarta</TabsTrigger>
                  <TabsTrigger value="sunday" className="text-sm sm:text-base">Culto de Domingo</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sabbath">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-6">
                        <Clock className="h-5 w-5 text-church-blue mr-2" />
                        <span className="font-medium">Horário: 9h (Escola Sabatina) e 11h (Culto Divino)</span>
                      </div>
                      
                      <div className="overflow-x-auto -mx-6 px-6 pb-4">
                        <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                          <span>← Deslize para visualizar toda a tabela →</span>
                        </div>
                        <Table className="min-w-[800px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                              <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregador</TableHead>
                              <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvor</TableHead>
                              <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Diáconos</TableHead>
                              <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                              <TableHead>Multimídia</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {sabbathSchedule.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{item.date}</TableCell>
                                <TableCell>{item.preacher}</TableCell>
                                <TableCell>{item.worship}</TableCell>
                                <TableCell>{item.deacons}</TableCell>
                                <TableCell>{item.reception}</TableCell>
                                <TableCell>{item.multimedia}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="wednesday">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-6">
                        <Clock className="h-5 w-5 text-church-blue mr-2" />
                        <span className="font-medium">Horário: 19h30</span>
                      </div>
                      
                      <div className="overflow-x-auto -mx-6 px-6 pb-4">
                        <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                          <span>← Deslize para visualizar toda a tabela →</span>
                        </div>
                        <Table className="min-w-[800px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                              <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregador</TableHead>
                              <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvor</TableHead>
                              <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Diáconos</TableHead>
                              <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                              <TableHead>Multimídia</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {wednesdaySchedule.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{item.date}</TableCell>
                                <TableCell>{item.preacher}</TableCell>
                                <TableCell>{item.worship}</TableCell>
                                <TableCell>{item.deacons}</TableCell>
                                <TableCell>{item.reception}</TableCell>
                                <TableCell>{item.multimedia}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="sunday">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-6">
                        <Clock className="h-5 w-5 text-church-blue mr-2" />
                        <span className="font-medium">Horário: 19h</span>
                      </div>
                      
                      <div className="overflow-x-auto -mx-6 px-6 pb-4">
                        <div className="text-center text-xs text-gray-500 mb-2 md:hidden">
                          <span>← Deslize para visualizar toda a tabela →</span>
                        </div>
                        <Table className="min-w-[800px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[120px]"><Calendar className="h-4 w-4 inline mr-2" /> Data</TableHead>
                              <TableHead><Mic className="h-4 w-4 inline mr-2" /> Pregador</TableHead>
                              <TableHead><Music className="h-4 w-4 inline mr-2" /> Louvor</TableHead>
                              <TableHead><BookOpen className="h-4 w-4 inline mr-2" /> Diáconos</TableHead>
                              <TableHead><Heart className="h-4 w-4 inline mr-2" /> Recepção</TableHead>
                              <TableHead>Multimídia</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {sundaySchedule.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{item.date}</TableCell>
                                <TableCell>{item.preacher}</TableCell>
                                <TableCell>{item.worship}</TableCell>
                                <TableCell>{item.deacons}</TableCell>
                                <TableCell>{item.reception}</TableCell>
                                <TableCell>{item.multimedia}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Navegação alternativa para dispositivos móveis */}
            <div className="md:hidden">
              <div className="flex justify-between items-center mb-4 bg-church-gray rounded-lg p-3 shadow-sm">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setActiveTab(activeTab === "sabbath" ? "sunday" : activeTab === "wednesday" ? "sabbath" : "wednesday")}
                  className="h-8 w-8 hover:bg-white/50"
                  aria-label="Culto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="font-semibold text-church-darkBlue text-center">
                  {activeTab === "sabbath" && "Culto de Sábado"}
                  {activeTab === "wednesday" && "Culto de Quarta"}
                  {activeTab === "sunday" && "Culto de Domingo"}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setActiveTab(activeTab === "sabbath" ? "wednesday" : activeTab === "wednesday" ? "sunday" : "sabbath")}
                  className="h-8 w-8 hover:bg-white/50"
                  aria-label="Próximo culto"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Indicadores de página */}
              <div className="flex justify-center space-x-2 mb-4">
                <div 
                  className={`h-2 w-2 rounded-full ${activeTab === "sabbath" ? "bg-church-blue" : "bg-gray-300"}`}
                  aria-hidden="true"
                />
                <div 
                  className={`h-2 w-2 rounded-full ${activeTab === "wednesday" ? "bg-church-blue" : "bg-gray-300"}`}
                  aria-hidden="true"
                />
                <div 
                  className={`h-2 w-2 rounded-full ${activeTab === "sunday" ? "bg-church-blue" : "bg-gray-300"}`}
                  aria-hidden="true"
                />
              </div>
              
              <div className="bg-white rounded-lg p-3 mb-4 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-church-blue mr-2 flex-shrink-0" />
                  <span className="font-medium text-sm">
                    {activeTab === "sabbath" && "Horário: 9h (Escola Sabatina) e 11h (Culto Divino)"}
                    {activeTab === "wednesday" && "Horário: 19h30"}
                    {activeTab === "sunday" && "Horário: 19h"}
                  </span>
                </div>
              </div>
              
              {activeTab === "sabbath" && <MobileScheduleView data={sabbathSchedule} />}
              {activeTab === "wednesday" && <MobileScheduleView data={wednesdaySchedule} />}
              {activeTab === "sunday" && <MobileScheduleView data={sundaySchedule} />}
            </div>
            
            <div className="mt-8 sm:mt-12 bg-church-gray p-4 sm:p-6 rounded-lg shadow-sm">
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