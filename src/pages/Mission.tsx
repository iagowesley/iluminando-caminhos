import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { 
  HeartHandshake, 
  GraduationCap, 
  Apple, 
  BookOpen, 
  Globe, 
  Users,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <PageLayout>
      <Hero 
        title="Nossa missão e valores"
        subtitle="Proclamando o evangelho eterno ao mundo"
        backgroundImage="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-church-darkBlue mb-6 text-center">Nossa missão</h2>
            <div className="h-1 w-20 bg-church-accent mb-8 mx-auto"></div>
            
            <blockquote className="italic text-xl text-gray-700 mb-8 border-l-4 border-church-accent pl-4 py-2 max-w-3xl mx-auto">
              "Fazer discípulos de Jesus Cristo que vivam como Suas testemunhas amorosas e proclamem a todos os povos o evangelho eterno do Apocalipse 14:6-12."
            </blockquote>
            
            <p className="text-gray-700 mb-10 text-center">
              Como adventistas do sétimo dia, buscamos levar o evangelho a todas as pessoas, não apenas em palavras, mas através de ações que demonstrem o amor e o cuidado de Cristo por todos. Nossa missão é fundamentada em três pilares principais:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-church-gray rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <h3 className="font-semibold text-church-darkBlue text-lg text-center mb-3">Proclamação</h3>
                <p className="text-gray-700 text-center">
                  Compartilhar o evangelho eterno e as mensagens dos três anjos através de pregações, estudos bíblicos e mídias diversas, alcançando pessoas de todas as nações, tribos, línguas e povos.
                </p>
              </div>
              
              <div className="bg-church-gray rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <h3 className="font-semibold text-church-darkBlue text-lg text-center mb-3">Serviço</h3>
                <p className="text-gray-700 text-center">
                  Ministrar às necessidades físicas, emocionais e espirituais das pessoas através de projetos humanitários e assistenciais, seguindo o exemplo de Cristo ao servir com compaixão e amor.
                </p>
              </div>
              
              <div className="bg-church-gray rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-church-blue text-white flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <h3 className="font-semibold text-church-darkBlue text-lg text-center mb-3">Discipulado</h3>
                <p className="text-gray-700 text-center">
                  Ensinar e capacitar pessoas a seguir a Cristo em todos os aspectos da vida, formando líderes e comunidades de fé que vivam e compartilhem os princípios do Reino de Deus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Áreas de Serviço"
            subtitle="Conheça como estamos fazendo a diferença em várias áreas"
            accent={true}
            ornate={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Assistência Humanitária"
              description="Através da ADRA (Agência Adventista de Desenvolvimento e Recursos Assistenciais), fornecemos ajuda emergencial em desastres e desenvolvemos projetos sustentáveis em comunidades vulneráveis."
              icon={<HeartHandshake className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <FeatureCard
              title="Educação"
              description="Operamos mais de 8.500 instituições educacionais, de escolas primárias a universidades, proporcionando educação de qualidade baseada em valores cristãos."
              icon={<GraduationCap className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <FeatureCard
              title="Saúde e Bem-estar"
              description="Promovemos estilo de vida saudável e oferecemos assistência médica através de nossa rede de hospitais, clínicas e centros de vida saudável."
              icon={<Apple className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <FeatureCard
              title="Liberdade Religiosa"
              description="Defendemos o direito à liberdade religiosa e de consciência para todas as pessoas, independentemente de sua crença."
              icon={<BookOpen className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <FeatureCard
              title="Desenvolvimento Comunitário"
              description="Trabalhamos com comunidades locais para desenvolver projetos que atendam às suas necessidades específicas de forma sustentável."
              icon={<Users className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <FeatureCard
              title="Missões Globais"
              description="Enviamos missionários para áreas não alcançadas, adaptando a mensagem de esperança aos diferentes contextos culturais."
              icon={<Globe className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nosso Impacto Global"
            subtitle="Transformando vidas em mais de 200 países"
            accent={false}
            ornate={false}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd59a93c6138?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ADRA em ação"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-church-blue mb-4">ADRA - Agência Adventista de Desenvolvimento e Recursos Assistenciais</h3>
                
                <p className="text-gray-700 mb-4">
                  A ADRA opera em mais de 130 países, implementando projetos que fazem a diferença na vida de milhões de pessoas todos os anos:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Resposta a desastres e gerenciamento de riscos",
                    "Desenvolvimento econômico e meios de subsistência",
                    "Saúde primária e nutrição",
                    "Acesso à educação básica de qualidade",
                    "Água, saneamento e higiene (WASH)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-church-accent mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hospital Adventista"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-church-blue mb-4">Instituições de Saúde e Estilo de Vida</h3>
                
                <p className="text-gray-700 mb-4">
                  A Igreja Adventista administra uma das maiores redes de saúde protestante do mundo:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Mais de 175 hospitais e sanatórios",
                    "Centenas de clínicas e dispensários",
                    "Lares para idosos e orfanatos",
                    "Programas de prevenção de doenças",
                    "Cursos para deixar de fumar e outros vícios"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-church-accent mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-church-blue to-church-darkBlue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como Você Pode Participar</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Há muitas maneiras de participar de nossa missão de serviço e compartilhar o amor de Cristo com os necessitados:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voluntariado</h3>
              <p className="text-white/80">
                Junte-se a projetos locais ou internacionais como voluntário, oferecendo suas habilidades e tempo.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Doações</h3>
              <p className="text-white/80">
                Contribua financeiramente para projetos específicos ou para o fundo geral de missão e assistência.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Serviço Comunitário</h3>
              <p className="text-white/80">
                Participe de iniciativas de serviço em sua comunidade local através da sua igreja.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Oração</h3>
              <p className="text-white/80">
                Sustente os projetos missionários e humanitários através de sua intercessão constante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Mission;
