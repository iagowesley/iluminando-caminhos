import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Music, Mic, BookOpen, Heart } from "lucide-react";

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

export default function Schedules() {
  return (
    <PageLayout>
      <Hero 
        title="Escalas de Cultos"
        subtitle="Organização e participação nos nossos momentos de adoração"
        backgroundImage="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossas Escalas"
            subtitle="Conheça a programação dos nossos cultos"
            accent={true}
            ornate={true}
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <p className="text-gray-700 text-center mb-10">
              Estas são as escalas de participação nos cultos da nossa igreja para os próximos meses. 
              Todos os envolvidos são convidados a chegar com antecedência para os preparativos necessários.
              Em caso de impossibilidade de participação na data designada, favor comunicar com antecedência
              ao responsável pelo ministério correspondente.
            </p>

            <Tabs defaultValue="sabbath" className="w-full">
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
                    
                    <div className="overflow-x-auto">
                      <Table>
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
                    
                    <div className="overflow-x-auto">
                      <Table>
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
                    
                    <div className="overflow-x-auto">
                      <Table>
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
            
            <div className="mt-12 bg-church-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-church-darkBlue mb-4">Informações Importantes</h3>
              <ul className="space-y-3 text-gray-700">
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