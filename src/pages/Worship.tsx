import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen, Calendar, User } from "lucide-react";

const Worship = () => {
  return (
    <PageLayout>
      <Hero 
        title="Cultos e Atividades"
        subtitle="Momentos de adoração, edificação e comunhão"
        backgroundImage="/images/nossos-cultos.jpeg"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Programação de Cultos"
            subtitle="Conheça os momentos de adoração e estudo em nossas congregações"
            accent={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Tabs defaultValue="weekly" className="w-full">
              <TabsList className="flex flex-wrap w-full gap-1 h-auto">
                <TabsTrigger value="weekly" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Programação Semanal</TabsTrigger>
                <TabsTrigger value="sabbath" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Culto de Sábado</TabsTrigger>
                <TabsTrigger value="classes" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Classes de Estudo</TabsTrigger>
              </TabsList>
              
              <TabsContent value="weekly" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6">Programação Semanal Típica</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-church-gray p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="h-6 w-6 text-church-blue mr-3" />
                          <h4 className="text-lg font-semibold text-church-darkBlue">Quarta-feira</h4>
                        </div>
                        
                        <div className="pl-9">
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">19h - Culto de Oração</h5>
                            <p className="text-gray-700 mt-1">
                              Momento de meditação na Palavra de Deus, testemunhos e intercessão.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-church-gray p-6">
                        <div className="flex items-center mb-4">
                          <Calendar className="h-6 w-6 text-church-blue mr-3" />
                          <h4 className="text-lg font-semibold text-church-darkBlue">Sexta-feira</h4>
                        </div>
                        
                        <div className="pl-9">
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">19h - Pequenos Grupos</h5>
                            <p className="text-gray-700 mt-1">
                              Recepção do sábado com louvor, mensagem espiritual e preparação para o dia de adoração.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-church-gray p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="h-6 w-6 text-church-blue mr-3" />
                          <h4 className="text-lg font-semibold text-church-darkBlue">Sábado</h4>
                        </div>
                        
                        <div className="pl-9">
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">8h30 - Escola Sabatina</h5>
                            <p className="text-gray-700 mt-1">
                              Estudo sistemático da Bíblia em classes por faixa etária.
                            </p>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">10h45 - Culto Divino</h5>
                            <p className="text-gray-700 mt-1">
                              Momento principal de adoração com louvor, oração e pregação da Palavra.
                            </p>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">16h00 - Culto Jovem</h5>
                            <p className="text-gray-700 mt-1">
                              Programação especial para jovens e adolescentes com música, testemunhos e atividades.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-church-blue">17h30 - Culto de Pôr-do-Sol</h5>
                            <p className="text-gray-700 mt-1">
                              Encerramento do sábado com louvor e reflexão espiritual.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-church-gray p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="h-6 w-6 text-church-blue mr-3" />
                          <h4 className="text-lg font-semibold text-church-darkBlue">Domingo</h4>
                        </div>
                        
                        <div className="pl-9">
                          <div className="mb-4">
                            <h5 className="font-medium text-church-blue">8h00 - Clube de Desbravadores</h5>
                            <p className="text-gray-700 mt-1">
                              Projetos para crianças e adolescentes entre 10 a 15 anos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-6 italic">
                      Observação: Os horários podem variar conforme a congregação local. Consulte a igreja mais próxima para confirmação.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sabbath" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6">O Culto de Sábado</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-church-blue mb-3">O Que Esperar Em Nossos Cultos</h4>
                      <p className="text-gray-700 mb-4">
                        Os cultos adventistas são caracterizados por um ambiente acolhedor, música inspiradora, oração sincera e mensagens baseadas na Bíblia. Nosso objetivo é proporcionar uma experiência significativa de adoração que aproxime as pessoas de Deus e umas das outras.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="flex items-start">
                          <Users className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Ambiente Acolhedor</h5>
                            <p className="text-gray-600 text-sm">
                              Valorizamos um ambiente onde todos se sintam bem-vindos, independentemente de sua origem ou experiência religiosa.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <BookOpen className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Baseado na Bíblia</h5>
                            <p className="text-gray-600 text-sm">
                              Nossas mensagens são fundamentadas nas Escrituras Sagradas, aplicadas à vida cotidiana.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-church-blue mb-3">Estrutura do Culto Divino (10h45)</h4>
                      
                      <div className="space-y-4 mt-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">1</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Prelúdio e Boas-vindas</h5>
                            <p className="text-gray-700 text-sm">
                              Música suave e acolhimento dos presentes.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">2</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Momento de Louvor</h5>
                            <p className="text-gray-700 text-sm">
                              Cânticos congregacionais de adoração.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">3</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Oração Intercessória</h5>
                            <p className="text-gray-700 text-sm">
                              Momento de súplicas e intercessão.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">4</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Dízimos e Ofertas</h5>
                            <p className="text-gray-700 text-sm">
                              Momento de gratidão e fidelidade a Deus.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">5</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Música Especial</h5>
                            <p className="text-gray-700 text-sm">
                              Apresentação musical para inspiração.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">6</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Sermão</h5>
                            <p className="text-gray-700 text-sm">
                              Mensagem baseada na Bíblia.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-church-blue text-white flex items-center justify-center mr-3">7</div>
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Hino Final e Bênção</h5>
                            <p className="text-gray-700 text-sm">
                              Encerramento com música e oração.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-church-blue mb-3">O Que Vestir</h4>
                      <p className="text-gray-700">
                        Não há um código de vestimenta rigoroso. A maioria dos membros veste-se de maneira modesta e respeitosa para o culto. Recomendamos trajes que reflitam a reverência pelo momento de adoração, mas o mais importante é sua presença e abertura para encontrar Deus.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="classes" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6">Classes de Estudo Bíblico</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-church-blue mb-3">Escola Sabatina</h4>
                      <p className="text-gray-700 mb-4">
                        A Escola Sabatina é o principal programa de estudo bíblico da Igreja Adventista, ocorrendo aos sábados pela manhã. É organizada em classes por faixa etária, proporcionando estudo adequado e relevante para cada grupo.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-church-gray rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Calendar className="h-5 w-5 text-church-blue mr-2" />
                            <h5 className="font-medium text-church-darkBlue">Lição Trimestral</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            Utilizamos guias de estudo trimestrais que abordam diferentes temas bíblicos de forma sistemática e profunda.
                          </p>
                        </div>
                        
                        <div className="bg-church-gray rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-church-blue mr-2" />
                            <h5 className="font-medium text-church-darkBlue">Discussão em Grupo</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            As classes são interativas, permitindo perguntas, comentários e compartilhamento de experiências pessoais.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-church-blue mb-3">Classes por Faixa Etária</h4>
                      
                      <div className="space-y-6 mt-4">
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Rol do Berço (0-3 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Para bebês e crianças pequenas, com atividades apropriadas que introduzem conceitos bíblicos simples de forma lúdica.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Jardim da Infância (4-6 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Histórias bíblicas apresentadas de forma criativa, com músicas, atividades manuais e lições de caráter.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Primários (7-9 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Estudos bíblicos mais detalhados, com aplicações práticas para a vida diária das crianças.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Juvenis (10-12 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Análise mais profunda dos temas bíblicos, com discussões sobre como aplicar os princípios na idade pré-adolescente.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Adolescentes (13-15 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Estudos relevantes para os desafios específicos desta fase, com ênfase em fundamentos da fé e identidade cristã.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Jovens (16-30 anos)</h5>
                            <p className="text-gray-700 text-sm">
                              Discussões mais aprofundadas sobre doutrinas bíblicas e temas contemporâneos relevantes para os jovens.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <User className="h-10 w-10 text-church-blue p-2 bg-church-gray rounded-full mr-4 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-church-darkBlue">Adultos</h5>
                            <p className="text-gray-700 text-sm">
                              Estudo sistemático das doutrinas bíblicas, profecias e aplicações práticas para a vida cristã madura.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-church-blue mb-3">Outros Estudos Bíblicos</h4>
                      
                      <div className="space-y-4 mt-4">
                        <div className="bg-church-gray rounded-lg p-4">
                          <h5 className="font-medium text-church-darkBlue mb-2">Pequenos Grupos</h5>
                          <p className="text-gray-700 text-sm">
                            Reuniões semanais em lares, onde membros e interessados estudam a Bíblia em um ambiente informal e acolhedor.
                          </p>
                        </div>
                        
                        <div className="bg-church-gray rounded-lg p-4">
                          <h5 className="font-medium text-church-darkBlue mb-2">Estudos Bíblicos Personalizados</h5>
                          <p className="text-gray-700 text-sm">
                            Disponíveis para indivíduos ou famílias que desejam um estudo mais personalizado, conduzido por um instrutor bíblico.
                          </p>
                        </div>
                        
                        <div className="bg-church-gray rounded-lg p-4">
                          <h5 className="font-medium text-church-darkBlue mb-2">Seminários Bíblicos</h5>
                          <p className="text-gray-700 text-sm">
                            Cursos especiais oferecidos periodicamente sobre temas específicos como profecia, família, saúde ou princípios financeiros.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-church-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle 
            title="Cerimônias Especiais"
            subtitle="Momentos sagrados que marcam nossa jornada de fé"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src="/images/santa-ceia.jpeg" 
                  alt="Santa Ceia" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Santa Ceia</h3>
                    <p className="text-sm text-white/90">
                      Momento de renovação espiritual e comunhão com Cristo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-full">
                <div className="bg-white rounded-2xl shadow-md p-6 mb-4 flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-church-blue rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-church-darkBlue mb-2">Frequência</h3>
                    <p className="text-gray-700">
                      A Santa Ceia é celebrada trimestralmente, geralmente no último sábado de cada trimestre.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-church-darkBlue mb-3">Significado</h3>
                  <p className="text-gray-700 mb-4">
                    Celebrada trimestralmente, a Santa Ceia é precedida pelo rito de humildade (lava-pés), simbolizando purificação e serviço. A cerimônia inclui o pão sem fermento e o suco de uva, representando o corpo e o sangue de Cristo.
                  </p>
                  <div className="flex items-center text-church-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium">Baseada em 1 Coríntios 11:23-26</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/batismo.jpg" 
                    alt="Batismo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/batismo.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-darkBlue mb-3">Batismo</h3>
                  <p className="text-gray-700">
                    Realizado por imersão, o batismo representa a morte para o pecado e o nascimento para uma nova vida em Cristo. É precedido por estudos bíblicos e preparação espiritual.
                  </p>
                  <div className="mt-4 flex items-center text-church-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Agendado por solicitação</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/dedicacao-criancas.jpeg" 
                    alt="Dedicação de Crianças" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-darkBlue mb-3">Dedicação de Crianças</h3>
                  <p className="text-gray-700">
                    Cerimônia de consagração de bebês e crianças pequenas a Deus, em que os pais dedicam-se a criá-los nos caminhos do Senhor, com o apoio da comunidade de fé.
                  </p>
                  <div className="mt-4 flex items-center text-church-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Agendada em cultos especiais</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/casamento.jpeg" 
                    alt="Casamento" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-darkBlue mb-3">Casamento</h3>
                  <p className="text-gray-700">
                    Cerimônia que celebra a união sagrada entre um homem e uma mulher, fundamentada nos princípios bíblicos de amor, respeito e compromisso vitalício.
                  </p>
                  <div className="mt-4 flex items-center text-church-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Agendado mediante aconselhamento</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-church-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-church-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Como Participar</h3>
                  <p className="text-gray-700 mt-2">
                    Para mais informações sobre qualquer uma das cerimônias ou para agendar sua participação, entre em contato com a secretaria da igreja ou fale com um de nossos pastores após os cultos.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/contato" className="inline-flex items-center justify-center py-3 px-6 bg-church-blue text-white rounded-lg hover:bg-church-darkBlue transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Entre em Contato
                </a>
                <a href="/eventos" className="inline-flex items-center justify-center py-3 px-6 bg-white border border-church-blue text-church-blue rounded-lg hover:bg-church-blue/5 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Ver Calendário de Eventos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle 
            title="Visite-nos"
            subtitle="Será um prazer recebê-lo em nossos cultos"
            accent={true}
          />
          
          <div className="max-w-2xl mx-auto mt-8">
            <p className="text-gray-700 mb-6">
              Nossos cultos são abertos a todos que desejam conhecer mais sobre Deus e Sua Palavra. Não é necessário agendamento prévio - basta comparecer e será recebido com alegria.
            </p>
            
            <p className="text-gray-700 mb-8">
              Para encontrar a igreja mais próxima, visite nosso site ou entre em contato pelos canais abaixo:
            </p>
            
            <div className="bg-church-gray p-6 rounded-lg inline-block">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">E-mail:</span> contato@adventistas.org
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Telefone:</span> (61) 3345-6789
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Worship;
