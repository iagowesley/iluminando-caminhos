import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Structure = () => {
  return (
    <PageLayout>
      <Hero
        title="Estrutura organizacional"
        subtitle="Como a Igreja Adventista está organizada no mundo todo"
        backgroundImage="/images/estrutura-organizacional.jpeg"
        size="medium"
      />

      <section id="content-section" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Nossa estrutura global"
            subtitle="Uma estrutura organizada para cumprir nossa missão mundialmente"
            accent={true}
            ornate={true}
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-center">
              A Igreja Adventista do Sétimo Dia adota um sistema representativo de governança eclesiástica. A autoridade na igreja é concedida aos membros, que delegam responsabilidades a corpos representativos e oficiais para o governo da igreja em cada nível.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-church-gray p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">4</div>
                <p className="text-gray-700">Níveis Administrativos</p>
              </div>

              <div className="bg-church-gray p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">13</div>
                <p className="text-gray-700">Divisões Mundiais</p>
              </div>

              <div className="bg-church-gray p-6 flex flex-col items-center">
                <div className="text-4xl font-bold text-church-blue mb-2">150K+</div>
                <p className="text-gray-700">Congregações</p>
              </div>
            </div>

            {/* Organograma da Liderança */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-church-darkBlue mb-4 text-center">Liderança atual</h3>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Conheça os líderes que conduzem nossa organização desde o nível global até a igreja local
              </p>

              <div className="flex flex-col items-center space-y-6">
                {/* Associação Geral */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue via-church-darkBlue to-church-blue p-8 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        NÍVEL GLOBAL
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-2">
                      <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-2xl mb-2 text-white">Associação geral</h4>
                      <p className="text-white/80 text-sm">Liderança mundial da igreja adventista</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                        <p className="text-white/70 text-sm mb-1">Presidente</p>
                        <p className="text-white font-semibold text-lg">Ted N.C. Wilson</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                        <p className="text-white/70 text-sm mb-1">Vice-presidente</p>
                        <p className="text-white font-semibold text-lg">Pierre E. Omeler</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-church-blue to-church-blue/40"></div>
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-church-blue/40"></div>
                </div>

                {/* Divisão Sul-Americana */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/95 via-church-blue/90 to-church-darkBlue/80 p-8 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        NÍVEL CONTINENTAL
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-2">
                      <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xl mb-2 text-white">Divisão sul-americana</h4>
                      <p className="text-white/80 text-sm">Administração regional para América do Sul</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Presidente</p>
                        <p className="text-white font-semibold">Stanley Arco</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Secretário executivo</p>
                        <p className="text-white font-semibold">Edward Heidinger</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Líder desbravadores</p>
                        <p className="text-white font-semibold">Udolcy Zukowski</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Líder jovens</p>
                        <p className="text-white font-semibold">Carlos H. Campitelli</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-church-blue/40 to-church-blue/30"></div>
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-church-blue/30"></div>
                </div>

                {/* União Nordeste Brasileira */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/85 via-church-blue/75 to-church-darkBlue/70 p-7 rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        NÍVEL REGIONAL
                      </span>
                    </div>

                    <div className="text-center mb-5 pt-2">
                      <div className="inline-block p-3 bg-white/10 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-white">União nordeste brasileira</h4>
                      <p className="text-white/80 text-sm">Coordenação do nordeste brasileiro</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Presidente</p>
                        <p className="text-white font-semibold">Pr. Alijofran Brandão</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Secretária</p>
                        <p className="text-white font-semibold">Talita Ferreira</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 md:col-span-2">
                        <p className="text-white/70 text-xs mb-1">Líder de jovens e desbravadores</p>
                        <p className="text-white font-semibold">Pr. Rafael Santos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-church-blue/30 to-church-blue/20"></div>
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-church-blue/20"></div>
                </div>

                {/* Associação Cearense */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/75 via-church-blue/65 to-church-darkBlue/60 p-7 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        NÍVEL ESTADUAL
                      </span>
                    </div>

                    <div className="text-center mb-5 pt-2">
                      <div className="inline-block p-3 bg-white/10 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-white">Associação cearense</h4>
                      <p className="text-white/80 text-sm">Administração das igrejas do Ceará</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Presidente</p>
                        <p className="text-white font-semibold">Pr. Marcos Militão</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Secretário</p>
                        <p className="text-white font-semibold">Pr. Thendyson Bezerra</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Líder de jovens</p>
                        <p className="text-white font-semibold">Pr. Leandro Santos</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <p className="text-white/70 text-xs mb-1">Líder de desbravadores</p>
                        <p className="text-white font-semibold">Pr. Wellington Costa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-church-blue/20 to-church-blue/10"></div>
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[20px] border-church-blue/10"></div>
                </div>

                {/* Igreja Local */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/60 via-church-blue/50 to-church-darkBlue/50 p-7 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        NÍVEL LOCAL
                      </span>
                    </div>

                    <div className="text-center pt-2">
                      <div className="inline-block p-3 bg-white/10 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-white">Igreja local</h4>
                      <p className="text-white/90 text-sm px-6">
                        A comunidade de fiéis liderada por pastores e anciãos locais, formando a base da nossa organização
                      </p>
                    </div>
                  </div>
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
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4">Estrutura organizacional</h3>
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

                    <div className="mt-6 p-4 bg-church-gray/40">
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

                    <div className="mt-6 p-4 bg-church-gray/40">
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

                    <div className="mt-4 mb-6 p-4 bg-church-gray/40">
                      <h5 className="font-medium text-church-darkBlue mb-2">Associação Geral</h5>
                      <ul className="text-sm space-y-1">
                        <li><span className="font-medium">Presidente:</span> Ted N.C. Wilson</li>
                        <li><span className="font-medium">Vice-presidente:</span> Pierre E. Omeler</li>
                      </ul>
                    </div>

                    <div className="mb-6 p-4 bg-church-gray/40">
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
            title="Princípios de organização"
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
              <div className="bg-white p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Representatividade</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  A autoridade é delegada pelos membros a representantes eleitos em cada nível, garantindo que as decisões reflitam a vontade da igreja como um todo.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Unidade na Diversidade</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Respeito à diversidade cultural e regional enquanto se mantém a unidade doutrinária e organizacional, permitindo adaptações locais sem perder a identidade global.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Transparência</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Processos de decisão abertos e comunicação clara entre os diferentes níveis administrativos, com prestação de contas regular e auditorias sistemáticas.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center mr-4 text-xl font-bold">4</div>
                  <h3 className="text-xl font-bold text-church-darkBlue">Cooperação</h3>
                </div>
                <p className="text-gray-700 pl-16">
                  Todos os níveis da organização trabalham juntos para cumprir a missão da igreja de forma coordenada, compartilhando recursos, experiências e estratégias.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 shadow-md">
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
