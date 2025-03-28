import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Structure = () => {
  return (
    <PageLayout>
      <Hero 
        title="Estrutura Organizacional"
        subtitle="Como a Igreja Adventista está organizada no mundo todo"
        backgroundImage="/images/estrutura-organizacional.jpeg"
        size="medium"
      />
      
      <section id="content-section" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle 
            title="Nossa Estrutura Global"
            subtitle="Uma estrutura organizada para cumprir nossa missão mundialmente"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-center">
              A Igreja Adventista do Sétimo Dia adota um sistema representativo de governança eclesiástica. A autoridade na igreja é concedida aos membros, que delegam responsabilidades a corpos representativos e oficiais para o governo da igreja em cada nível.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-church-gray rounded-lg p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">4</div>
                <p className="text-gray-700">Níveis Administrativos</p>
              </div>
              
              <div className="bg-church-gray rounded-lg p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">13</div>
                <p className="text-gray-700">Divisões Mundiais</p>
              </div>
              
              <div className="bg-church-gray rounded-lg p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">150K+</div>
                <p className="text-gray-700">Congregações</p>
              </div>
            </div>
            
            {/* Organograma da Liderança */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-church-darkBlue mb-8 text-center">Liderança Atual</h3>
              
              <div className="flex flex-col items-center">
                {/* Associação Geral */}
                <div className="bg-church-blue text-white p-5 rounded-lg shadow-lg mb-8 w-full max-w-xl text-center">
                  <h4 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">ASSOCIAÇÃO GERAL</h4>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Presidente:</span> Ted N.C. Wilson</p>
                    <p><span className="font-semibold">Vice-presidente:</span> Pierre E. Omeler</p>
                  </div>
                </div>
                
                {/* Seta de conexão */}
                <div className="w-px h-8 bg-church-blue/60"></div>
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/60 mb-8"></div>
                
                {/* Divisão Sul-Americana */}
                <div className="bg-church-blue/90 text-white p-5 rounded-lg shadow-lg mb-8 w-full max-w-xl text-center">
                  <h4 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">DIVISÃO SUL-AMERICANA</h4>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Presidente:</span> Stanley Arco</p>
                    <p><span className="font-semibold">Secretário Executivo:</span> Edward Heidinger</p>
                    <p><span className="font-semibold">Líder Desbravadores e Aventureiros:</span> Udolcy Zukowski</p>
                    <p><span className="font-semibold">Líder Jovens:</span> Carlos Humberto Campitelli</p>
                  </div>
                </div>
                
                {/* Seta de conexão */}
                <div className="w-px h-8 bg-church-blue/60"></div>
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/60 mb-8"></div>
                
                {/* União Nordeste Brasileira */}
                <div className="bg-church-blue/80 text-white p-5 rounded-lg shadow-lg mb-8 w-full max-w-xl text-center">
                  <h4 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">UNIÃO NORDESTE BRASILEIRA</h4>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Presidente:</span> Pr. Alijofran Brandão</p>
                    <p><span className="font-semibold">Secretária:</span> Talita Ferreira</p>
                    <p><span className="font-semibold">Líder de Jovens, Aventureiros e Desbravadores:</span> Pr. Rafael Santos</p>
                  </div>
                </div>
                
                {/* Seta de conexão */}
                <div className="w-px h-8 bg-church-blue/60"></div>
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/60 mb-8"></div>
                
                {/* Associação Cearense */}
                <div className="bg-church-blue/70 text-white p-5 rounded-lg shadow-lg mb-8 w-full max-w-xl text-center">
                  <h4 className="font-bold text-xl mb-3 border-b border-white/20 pb-2">ASSOCIAÇÃO CEARENSE</h4>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Presidente:</span> Pr. Marcos Militão</p>
                    <p><span className="font-semibold">Secretário:</span> Pr. Thendyson Bezerra</p>
                    <p><span className="font-semibold">Líder de Jovens:</span> Pr. Leandro Santos</p>
                    <p><span className="font-semibold">Líder de Desbravadores e Aventureiros:</span> Pr. Wellington Costa</p>
                  </div>
                </div>
                
                {/* Seta de conexão */}
                <div className="w-px h-8 bg-church-blue/60"></div>
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/60 mb-8"></div>
                
                {/* Igreja Local */}
                <div className="bg-church-blue/60 text-white p-5 rounded-lg shadow-lg w-full max-w-xl text-center">
                  <h4 className="font-bold text-xl mb-2 border-b border-white/20 pb-2">IGREJA LOCAL</h4>
                  <p className="text-sm">A comunidade de fiéis liderada por pastores e anciãos locais</p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="flex flex-wrap w-full gap-1 h-auto">
                <TabsTrigger value="overview" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Visão Geral</TabsTrigger>
                <TabsTrigger value="local" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Igreja Local</TabsTrigger>
                <TabsTrigger value="conferences" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Associações</TabsTrigger>
                <TabsTrigger value="unions" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Uniões</TabsTrigger>
                <TabsTrigger value="gc" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] m-1">Conferência Geral</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Estrutura Organizacional</h3>
                    <p className="text-gray-700 mb-4">
                      A Igreja Adventista do Sétimo Dia está organizada em quatro níveis, do local ao global:
                    </p>
                    
                    <ol className="space-y-3 text-left">
                      <li>
                        <span className="font-semibold">1. Igreja Local</span> - A comunidade de crentes em um local específico.
                      </li>
                      <li>
                        <span className="font-semibold">2. Associação/Missão</span> - Um grupo de igrejas locais em um estado, província ou território.
                      </li>
                      <li>
                        <span className="font-semibold">3. União</span> - Um grupo de associações/missões em um território maior.
                      </li>
                      <li>
                        <span className="font-semibold">4. Conferência Geral</span> - A autoridade administrativa global da igreja, que inclui todas as Divisões mundiais.
                      </li>
                    </ol>
                    
                    <div className="mt-6">
                      <img 
                        src="/images/structure/iasd-organization-chart.png" 
                        alt="Estrutura Organizacional" 
                        className="w-full h-auto rounded-md shadow-md border border-gray-100"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/800x400/F4F7F9/003366?text=Estrutura+Organizacional";
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="local" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Igreja Local</h3>
                    <p className="text-gray-700 mb-4">
                      A igreja local é a base da organização adventista, onde os membros se reúnem para adoração, comunhão, serviço e missão.
                    </p>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Liderança da Igreja Local</h4>
                    <ul className="space-y-2 text-left">
                      <li><span className="font-medium">Pastor:</span> Liderança espiritual e pastoral</li>
                      <li><span className="font-medium">Anciãos:</span> Assistem o pastor na liderança espiritual</li>
                      <li><span className="font-medium">Diáconos e Diaconisas:</span> Assistência prática e cuidado das instalações</li>
                      <li><span className="font-medium">Junta da Igreja:</span> Corpo administrativo da igreja local</li>
                      <li><span className="font-medium">Departamentos:</span> Ministérios específicos (Escola Sabatina, Jovens, etc.)</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-4">
                      Os oficiais da igreja local são eleitos pelos membros em uma assembleia anual. Cada membro tem voz e voto nas decisões da congregação.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="conferences" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Associações e Missões</h3>
                    <p className="text-gray-700 mb-4">
                      As Associações (campos autossustentáveis) e Missões (campos em desenvolvimento) são formadas por um grupo de igrejas em um território definido, geralmente correspondendo a estados ou províncias.
                    </p>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Funções das Associações/Missões</h4>
                    <ul className="space-y-2 text-left">
                      <li>Supervisionar e apoiar as igrejas locais</li>
                      <li>Contratar e designar pastores para as congregações</li>
                      <li>Administrar recursos financeiros e dízimos</li>
                      <li>Coordenar projetos missionários regionais</li>
                      <li>Manter escolas e outros projetos educacionais</li>
                      <li>Organizar treinamentos e eventos para igrejas locais</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-4">
                      As decisões nas Associações são tomadas por delegados eleitos pelas igrejas locais durante assembleias periódicas (geralmente a cada 3-4 anos).
                    </p>
                    
                    <div className="mt-6 p-4 bg-church-gray/40 rounded-lg">
                      <h5 className="font-medium text-church-darkBlue mb-2">Associação Cearense</h5>
                      <ul className="text-sm space-y-1">
                        <li><span className="font-medium">Presidente:</span> Pr. Marcos Militão</li>
                        <li><span className="font-medium">Secretário:</span> Pr. Thendyson Bezerra</li>
                        <li><span className="font-medium">Líder de Jovens:</span> Pr. Leandro Santos</li>
                        <li><span className="font-medium">Líder de Desbravadores e Aventureiros:</span> Pr. Wellington Costa</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="unions" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Uniões</h3>
                    <p className="text-gray-700 mb-4">
                      As Uniões são compostas por várias Associações e Missões, geralmente abrangendo países inteiros ou regiões significativas dentro de países maiores.
                    </p>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Tipos de Uniões</h4>
                    <ul className="space-y-2 text-left">
                      <li><span className="font-medium">Uniões de Associações:</span> Campos autossustentáveis</li>
                      <li><span className="font-medium">Uniões de Missões:</span> Campos em desenvolvimento que recebem apoio financeiro adicional</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Responsabilidades das Uniões</h4>
                    <ul className="space-y-2 text-left">
                      <li>Coordenar o trabalho entre as Associações/Missões</li>
                      <li>Supervisionar instituições educacionais superiores</li>
                      <li>Administrar hospitais e clínicas</li>
                      <li>Publicar material denominacional</li>
                      <li>Implementar iniciativas da Divisão e Conferência Geral</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-4">
                      A liderança das Uniões é eleita durante assembleias quinquenais por delegados das Associações e Missões.
                    </p>
                    
                    <div className="mt-6 p-4 bg-church-gray/40 rounded-lg">
                      <h5 className="font-medium text-church-darkBlue mb-2">União Nordeste Brasileira</h5>
                      <ul className="text-sm space-y-1">
                        <li><span className="font-medium">Presidente:</span> Pr. Alijofran Brandão</li>
                        <li><span className="font-medium">Secretária:</span> Talita Ferreira</li>
                        <li><span className="font-medium">Líder de Jovens, Aventureiros e Desbravadores:</span> Pr. Rafael Santos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="gc" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Conferência Geral e Divisões</h3>
                    <p className="text-gray-700 mb-4">
                      A Conferência Geral é a autoridade máxima administrativa da Igreja Adventista do Sétimo Dia, representando a igreja global.
                    </p>
                    
                    <div className="mt-4 mb-6 p-4 bg-church-gray/40 rounded-lg">
                      <h5 className="font-medium text-church-darkBlue mb-2">Associação Geral</h5>
                      <ul className="text-sm space-y-1">
                        <li><span className="font-medium">Presidente:</span> Ted N.C. Wilson</li>
                        <li><span className="font-medium">Vice-presidente:</span> Pierre E. Omeler</li>
                      </ul>
                    </div>
                    
                    <div className="mb-6 p-4 bg-church-gray/40 rounded-lg">
                      <h5 className="font-medium text-church-darkBlue mb-2">Divisão Sul-Americana</h5>
                      <ul className="text-sm space-y-1">
                        <li><span className="font-medium">Presidente:</span> Stanley Arco</li>
                        <li><span className="font-medium">Secretário Executivo:</span> Edward Heidinger</li>
                        <li><span className="font-medium">Líder Desbravadores e Aventureiros:</span> Udolcy Zukowski</li>
                        <li><span className="font-medium">Líder Jovens:</span> Carlos Humberto Campitelli</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Divisões Mundiais</h4>
                    <p className="text-gray-700 mb-2">
                      Para facilitar a administração, a Conferência Geral opera através de 13 Divisões, que são seções regionais que supervisionam o trabalho em territórios específicos:
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                      <li>Divisão África Centro-Oriental</li>
                      <li>Divisão África Centro-Ocidental</li>
                      <li>Divisão África Austral-Oceano Índico</li>
                      <li>Divisão Ásia-Pacífico Norte</li>
                      <li>Divisão Ásia-Pacífico Sul</li>
                      <li>Divisão Euro-Ásia</li>
                      <li>Divisão Interamericana</li>
                      <li>Divisão Intereuropeia</li>
                      <li>Divisão Norte-Americana</li>
                      <li>Divisão Sul-Americana</li>
                      <li>Divisão Sul do Pacífico</li>
                      <li>Divisão Transeuropeia</li>
                      <li>Oriente Médio e África do Norte</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-church-blue mt-4 mb-2">Assembleia da Conferência Geral</h4>
                    <p className="text-gray-700">
                      A cada cinco anos, delegados de todo o mundo se reúnem para eleger líderes, revisar as crenças fundamentais quando necessário, e tomar decisões importantes que afetam a igreja global. Este é o mais alto corpo de decisão da igreja.
                    </p>
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
            title="Princípios de Organização"
            subtitle="Fundamentos que guiam nossa estrutura denominacional"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 text-center mb-12 text-lg">
              A estrutura organizacional da Igreja Adventista é baseada em princípios fundamentais que garantem eficiência, 
              representatividade e unidade no cumprimento de nossa missão global.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Representatividade</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  A autoridade é delegada pelos membros a representantes eleitos em cada nível, garantindo que as decisões reflitam a vontade da igreja como um todo.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Unidade na Diversidade</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Respeito à diversidade cultural e regional enquanto se mantém a unidade doutrinária e organizacional, permitindo adaptações locais sem perder a identidade global.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Transparência</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Processos de decisão abertos e comunicação clara entre os diferentes níveis administrativos, com prestação de contas regular e auditorias sistemáticas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">4</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Cooperação</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Todos os níveis da organização trabalham juntos para cumprir a missão da igreja de forma coordenada, compartilhando recursos, experiências e estratégias.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-church-darkBlue mb-4 text-center">Aplicação Prática</h3>
              <p className="text-gray-700">
                Estes princípios se manifestam em reuniões regulares de comissões, assembleias representativas, sistemas financeiros 
                transparentes e projetos colaborativos entre diferentes entidades. Com esta estrutura, a Igreja Adventista 
                consegue manter sua identidade global enquanto atende às necessidades específicas de contextos locais diversos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Structure;
