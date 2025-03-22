import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documents = () => {
  return (
    <PageLayout>
      <Hero 
        title="Declarações e Documentos"
        subtitle="Posicionamentos oficiais, declarações e documentos institucionais"
        backgroundImage="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&q=75&fit=crop&w=2000"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Documentos Oficiais"
            subtitle="Conheça os documentos que orientam nossa igreja e expressam nossos posicionamentos sobre diversos temas"
            accent={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Tabs defaultValue="statements" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="statements">Declarações Oficiais</TabsTrigger>
                <TabsTrigger value="guidelines">Diretrizes</TabsTrigger>
                <TabsTrigger value="manuals">Manuais</TabsTrigger>
                <TabsTrigger value="reports">Relatórios</TabsTrigger>
              </TabsList>
              
              <TabsContent value="statements" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-church-blue" />
                      Declarações Oficiais
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      As declarações oficiais expressam o posicionamento da Igreja Adventista sobre questões importantes de natureza espiritual, social, ética e moral, baseadas em princípios bíblicos.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Declaração sobre Casamento e Família</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Posicionamento sobre a instituição do casamento como design divino e a importância da família como núcleo da sociedade.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Declaração sobre Liberdade Religiosa</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Posição sobre a importância da liberdade de consciência e expressão religiosa como direito humano fundamental.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Declaração sobre Meio Ambiente</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Posicionamento sobre a responsabilidade cristã de cuidar da Terra como mordomos da criação divina.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Declaração sobre Saúde e Bem-estar</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Visão holística da saúde, abrangendo aspectos físicos, mentais, sociais e espirituais do bem-estar humano.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Declaração sobre Questões Sociais</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Posicionamento sobre temas como pobreza, discriminação, violência e direitos humanos sob a perspectiva bíblica.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="link" className="text-church-blue">
                        Ver todas as declarações <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="guidelines" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-church-blue" />
                      Diretrizes
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      Documentos que proveem orientações para implementação de princípios, políticas e práticas em diversas áreas da administração e ministérios da igreja.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Diretrizes sobre Mídia e Comunicação</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Orientações para o uso responsável de meios de comunicação e produção de conteúdo que reflete os valores cristãos.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Diretrizes para Capelania</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Princípios e práticas para capelães que servem em hospitais, escolas, forças armadas e outras instituições.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Diretrizes para Música na Igreja</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Orientações sobre princípios que devem guiar a escolha e uso da música no contexto de adoração.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Diretrizes para Educação Adventista</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Princípios filosóficos e metodológicos que orientam o sistema educacional adventista.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="link" className="text-church-blue">
                        Ver todas as diretrizes <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="manuals" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-church-blue" />
                      Manuais
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      Documentos que detalham procedimentos, políticas e regulamentos para a organização e funcionamento da igreja em vários níveis.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Manual da Igreja</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Documento oficial que contém informações sobre a estrutura organizacional, crenças fundamentais, políticas e procedimentos administrativos da igreja.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Manual de Anciãos</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Guia prático para líderes leigos da igreja local, detalhando suas responsabilidades e funções.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Manual para Ministérios Jovens</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Diretrizes e recursos para o desenvolvimento e implementação de programas para jovens e adolescentes.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Manual de Trabalho Administrativo</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Procedimentos para administradores em vários níveis da organização eclesiástica.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Manual de Escola Sabatina</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Guia completo para a organização e condução do programa de estudo bíblico semanal da igreja.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="link" className="text-church-blue">
                        Ver todos os manuais <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-church-blue" />
                      Relatórios e Publicações
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      Documentos que apresentam informações estatísticas, atividades, projetos e conquistas da igreja em diferentes áreas e regiões.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Relatório Estatístico Anual</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Dados sobre crescimento da membresia, número de igrejas, finanças e outras estatísticas globais.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Relatório da ADRA</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Resumo anual das atividades e projetos humanitários da Agência Adventista de Desenvolvimento e Recursos Assistenciais.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Relatório de Missão Global</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Detalhamento dos esforços missionários em áreas não alcançadas e o progresso da evangelização mundial.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Relatório do Sistema Educacional</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Informações sobre instituições de ensino, número de alunos e desenvolvimento do sistema educacional adventista.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <Download className="h-4 w-4 mr-1" /> Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 p-4 hover:bg-church-gray transition-colors">
                        <h4 className="font-medium text-church-darkBlue mb-2">Publicações Teológicas</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Livros, revistas e artigos produzidos pelo Comitê de Pesquisa Bíblica e outras entidades teológicas da igreja.
                        </p>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="text-church-blue border-church-blue hover:bg-church-blue/10">
                            <ExternalLink className="h-4 w-4 mr-1" /> Acessar Biblioteca
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="link" className="text-church-blue">
                        Ver todos os relatórios <ExternalLink className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Solicitar Documentos</h2>
            <p className="text-gray-700 mb-8">
              Se você está procurando por um documento específico que não está listado aqui, ou se precisa de uma cópia oficial de qualquer documento institucional, entre em contato conosco.
            </p>
            
            <Card className="glass-card border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-church-darkBlue mb-4">Canais de Contato</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-church-blue mb-2">Secretaria Geral</h4>
                    <p className="text-gray-700 text-sm">
                      Para documentos oficiais da igreja, atas, certificados e registros históricos.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      <span className="font-medium">Email:</span> secretaria@adventistas.org
                    </p>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-church-blue mb-2">Departamento de Comunicação</h4>
                    <p className="text-gray-700 text-sm">
                      Para declarações oficiais, materiais de imprensa e publicações institucionais.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      <span className="font-medium">Email:</span> comunicacao@adventistas.org
                    </p>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-church-blue mb-2">Departamento Jurídico</h4>
                    <p className="text-gray-700 text-sm">
                      Para documentos legais, estatutos e regulamentos.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      <span className="font-medium">Email:</span> juridico@adventistas.org
                    </p>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-church-blue mb-2">Centro de Pesquisas Ellen G. White</h4>
                    <p className="text-gray-700 text-sm">
                      Para documentos históricos e escritos de Ellen G. White.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      <span className="font-medium">Email:</span> centrowhite@adventistas.org
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mt-6">
                  Para contatos telefônicos e endereços físicos, por favor consulte a seção de contatos em nosso site.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Documents;
