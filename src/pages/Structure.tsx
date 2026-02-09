import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const Structure = () => {
  return (
    <PageLayout>
      <Hero
        title="Estrutura organizacional"
        subtitle="Como a Igreja Adventista está organizada no mundo todo"
        backgroundImage="/images/estrutura-organizacional.jpeg"
        size="medium"
      />

      <section id="content-section" className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Nossa estrutura global"
            subtitle="Uma estrutura organizada para cumprir nossa missão mundialmente"
            accent={true}
            ornate={true}
          />

          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 text-center">
              A Igreja Adventista do Sétimo Dia adota um sistema representativo de governança eclesiástica. A autoridade na igreja é concedida aos membros, que delegam responsabilidades a corpos representativos e oficiais para o governo da igreja em cada nível.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-church-gray p-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-church-blue mb-1">4</div>
                <p className="text-gray-700 text-sm">Níveis Administrativos</p>
              </div>

              <div className="bg-church-gray p-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-church-blue mb-1">13</div>
                <p className="text-gray-700 text-sm">Divisões Mundiais</p>
              </div>

              <div className="bg-church-gray p-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-church-blue mb-1">150K+</div>
                <p className="text-gray-700 text-sm">Congregações</p>
              </div>
            </div>

            {/* Organograma da Liderança - Versão Compacta */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-church-darkBlue mb-2 text-center">Liderança atual</h3>
              <p className="text-gray-600 text-center mb-8 text-sm max-w-2xl mx-auto">
                Conheça os líderes que conduzem nossa organização desde o nível global até a igreja local
              </p>

              <div className="flex flex-col items-center space-y-4">
                {/* Associação Geral */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue via-church-darkBlue to-church-blue p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        NÍVEL GLOBAL
                      </span>
                    </div>

                    <div className="text-center mb-4 pt-1">
                      <h4 className="font-bold text-lg mb-1 text-white">Associação geral</h4>
                      <p className="text-white/80 text-xs">Liderança mundial da igreja adventista</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Presidente</p>
                        <p className="text-white font-semibold text-sm">Ted N.C. Wilson</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Vice-presidente</p>
                        <p className="text-white font-semibold text-sm">Pierre E. Omeler</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-church-blue to-church-blue/40"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/40"></div>
                </div>

                {/* Divisão Sul-Americana */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/90 via-church-blue/85 to-church-darkBlue/75 p-5 rounded-lg shadow-lg">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        NÍVEL CONTINENTAL
                      </span>
                    </div>

                    <div className="text-center mb-3 pt-1">
                      <h4 className="font-bold text-base mb-1 text-white">Divisão sul-americana</h4>
                      <p className="text-white/80 text-xs">Administração regional para América do Sul</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Presidente</p>
                        <p className="text-white font-semibold text-sm">Stanley Arco</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Secretário executivo</p>
                        <p className="text-white font-semibold text-sm">Edward Heidinger</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Líder desbravadores</p>
                        <p className="text-white font-semibold text-sm">Udolcy Zukowski</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Líder jovens</p>
                        <p className="text-white font-semibold text-sm">Carlos H. Campitelli</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-church-blue/40 to-church-blue/30"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/30"></div>
                </div>

                {/* União Nordeste Brasileira */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/80 via-church-blue/70 to-church-darkBlue/65 p-5 rounded-lg shadow-lg">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        NÍVEL REGIONAL
                      </span>
                    </div>

                    <div className="text-center mb-3 pt-1">
                      <h4 className="font-bold text-base mb-1 text-white">União nordeste brasileira</h4>
                      <p className="text-white/80 text-xs">Coordenação do nordeste brasileiro</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Presidente</p>
                        <p className="text-white font-semibold text-sm">Pr. Alijofran Brandão</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Secretária</p>
                        <p className="text-white font-semibold text-sm">Talita Ferreira</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20 md:col-span-2">
                        <p className="text-white/70 text-xs mb-0.5">Líder de jovens e desbravadores</p>
                        <p className="text-white font-semibold text-sm">Pr. Rafael Santos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-church-blue/30 to-church-blue/20"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/20"></div>
                </div>

                {/* Associação Cearense */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/70 via-church-blue/60 to-church-darkBlue/55 p-5 rounded-lg shadow-lg">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        NÍVEL ESTADUAL
                      </span>
                    </div>

                    <div className="text-center mb-3 pt-1">
                      <h4 className="font-bold text-base mb-1 text-white">Associação cearense</h4>
                      <p className="text-white/80 text-xs">Administração das igrejas do Ceará</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Presidente</p>
                        <p className="text-white font-semibold text-sm">Pr. Marcos Militão</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Secretário</p>
                        <p className="text-white font-semibold text-sm">Pr. Thendyson Bezerra</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Líder de jovens</p>
                        <p className="text-white font-semibold text-sm">Pr. Leandro Santos</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded border border-white/20">
                        <p className="text-white/70 text-xs mb-0.5">Líder de desbravadores</p>
                        <p className="text-white font-semibold text-sm">Pr. Wellington Costa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seta decorativa */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-church-blue/20 to-church-blue/10"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-church-blue/10"></div>
                </div>

                {/* Igreja Local */}
                <div className="w-full max-w-2xl">
                  <div className="relative bg-gradient-to-br from-church-blue/55 via-church-blue/45 to-church-darkBlue/45 p-5 rounded-lg shadow-lg">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-church-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        NÍVEL LOCAL
                      </span>
                    </div>

                    <div className="text-center pt-1">
                      <h4 className="font-bold text-base mb-1 text-white">Igreja local</h4>
                      <p className="text-white/90 text-xs px-4">
                        A comunidade de fiéis liderada por pastores e anciãos locais, formando a base da nossa organização
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações resumidas sobre os níveis */}
            <Card className="glass-card border-none mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-church-darkBlue mb-3">Estrutura organizacional</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  A Igreja Adventista do Sétimo Dia está organizada em quatro níveis, do local ao global:
                </p>

                <ol className="space-y-2 text-left text-sm">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-church-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Princípios de organização"
            subtitle="Fundamentos que guiam nossa estrutura denominacional"
            accent={true}
            ornate={true}
          />

          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-gray-700 text-center mb-8 text-sm">
              A estrutura organizacional da Igreja Adventista é baseada em princípios fundamentais que garantem eficiência,
              representatividade e unidade no cumprimento de nossa missão global.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 shadow-md rounded">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 text-lg font-bold flex-shrink-0">1</div>
                  <h3 className="text-lg font-bold text-church-darkBlue">Representatividade</h3>
                </div>
                <p className="text-gray-700 text-sm pl-13">
                  A autoridade é delegada pelos membros a representantes eleitos em cada nível, garantindo que as decisões reflitam a vontade da igreja como um todo.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 text-lg font-bold flex-shrink-0">2</div>
                  <h3 className="text-lg font-bold text-church-darkBlue">Unidade na Diversidade</h3>
                </div>
                <p className="text-gray-700 text-sm pl-13">
                  Respeito à diversidade cultural e regional enquanto se mantém a unidade doutrinária e organizacional, permitindo adaptações locais sem perder a identidade global.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 text-lg font-bold flex-shrink-0">3</div>
                  <h3 className="text-lg font-bold text-church-darkBlue">Transparência</h3>
                </div>
                <p className="text-gray-700 text-sm pl-13">
                  Processos de decisão abertos e comunicação clara entre os diferentes níveis administrativos, com prestação de contas regular e auditorias sistemáticas.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 text-lg font-bold flex-shrink-0">4</div>
                  <h3 className="text-lg font-bold text-church-darkBlue">Cooperação</h3>
                </div>
                <p className="text-gray-700 text-sm pl-13">
                  Todos os níveis da organização trabalham juntos para cumprir a missão da igreja de forma coordenada, compartilhando recursos, experiências e estratégias.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 shadow-md rounded">
              <h3 className="text-lg font-bold text-church-darkBlue mb-3 text-center">Aplicação Prática</h3>
              <p className="text-gray-700 text-sm">
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
