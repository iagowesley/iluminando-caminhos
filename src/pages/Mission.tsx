
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
  Users 
} from "lucide-react";

const Mission = () => {
  return (
    <PageLayout>
      <Hero 
        title="Missão e Serviço"
        subtitle="Compartilhando o amor de Cristo através de iniciativas que transformam vidas ao redor do mundo"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&q=75&fit=crop&w=2000"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Nossa Missão</h2>
              <div className="h-1 w-20 bg-church-accent mb-8"></div>
              
              <blockquote className="italic text-xl text-gray-700 mb-8 border-l-4 border-church-accent pl-4 py-2">
                "Fazer discípulos de Jesus Cristo que vivam como Suas testemunhas amorosas e proclamem a todos os povos o evangelho eterno do Apocalipse 14:6-12."
              </blockquote>
              
              <p className="text-gray-700 mb-6">
                Como adventistas do sétimo dia, buscamos levar o evangelho a todas as pessoas, não apenas em palavras, mas através de ações que demonstrem o amor e o cuidado de Cristo por todos. Nossa missão é fundamentada em três pilares principais:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 mt-0.5">1</div>
                  <div>
                    <h3 className="font-semibold text-church-darkBlue">Proclamação</h3>
                    <p className="text-gray-700">
                      Compartilhar o evangelho eterno e as mensagens dos três anjos.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 mt-0.5">2</div>
                  <div>
                    <h3 className="font-semibold text-church-darkBlue">Serviço</h3>
                    <p className="text-gray-700">
                      Ministrar às necessidades físicas, emocionais e espirituais das pessoas.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-church-blue text-white flex items-center justify-center mr-3 mt-0.5">3</div>
                  <div>
                    <h3 className="font-semibold text-church-darkBlue">Discipulado</h3>
                    <p className="text-gray-700">
                      Ensinar e capacitar pessoas a seguir a Cristo em todos os aspectos da vida.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&q=75&fit=crop&w=800" 
                  alt="Missão Adventista" 
                  className="w-full h-auto"
                />
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
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Assistência Humanitária"
              description="Através da ADRA (Agência Adventista de Desenvolvimento e Recursos Assistenciais), fornecemos ajuda emergencial em desastres e desenvolvemos projetos sustentáveis em comunidades vulneráveis."
              icon={<HeartHandshake className="h-6 w-6" />}
            />
            
            <FeatureCard
              title="Educação"
              description="Operamos mais de 8.500 instituições educacionais, de escolas primárias a universidades, proporcionando educação de qualidade baseada em valores cristãos."
              icon={<GraduationCap className="h-6 w-6" />}
            />
            
            <FeatureCard
              title="Saúde e Bem-estar"
              description="Promovemos estilo de vida saudável e oferecemos assistência médica através de nossa rede de hospitais, clínicas e centros de vida saudável."
              icon={<Apple className="h-6 w-6" />}
            />
            
            <FeatureCard
              title="Liberdade Religiosa"
              description="Defendemos o direito à liberdade religiosa e de consciência para todas as pessoas, independentemente de sua crença."
              icon={<BookOpen className="h-6 w-6" />}
            />
            
            <FeatureCard
              title="Desenvolvimento Comunitário"
              description="Trabalhamos com comunidades locais para desenvolver projetos que atendam às suas necessidades específicas de forma sustentável."
              icon={<Users className="h-6 w-6" />}
            />
            
            <FeatureCard
              title="Missões Globais"
              description="Enviamos missionários para áreas não alcançadas, adaptando a mensagem de esperança aos diferentes contextos culturais."
              icon={<Globe className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-church-darkBlue text-center mb-12">Nosso Impacto Global</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-church-blue mb-6">ADRA - Agência Adventista de Desenvolvimento e Recursos Assistenciais</h3>
              
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/600x350/F4F7F9/003366?text=ADRA+em+ação"
                  alt="ADRA em ação"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <p className="text-gray-700 mb-4">
                A ADRA opera em mais de 130 países, implementando projetos que fazem a diferença na vida de milhões de pessoas todos os anos. Suas principais áreas de atuação incluem:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Resposta a desastres e gerenciamento de riscos</li>
                <li>Desenvolvimento econômico e meios de subsistência</li>
                <li>Saúde primária e nutrição</li>
                <li>Acesso à educação básica de qualidade</li>
                <li>Água, saneamento e higiene (WASH)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-church-blue mb-6">Instituições de Saúde e Estilo de Vida</h3>
              
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/600x350/F4F7F9/003366?text=Hospital+Adventista"
                  alt="Hospital Adventista"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <p className="text-gray-700 mb-4">
                A Igreja Adventista administra uma das maiores redes de saúde protestante do mundo, incluindo:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mais de 175 hospitais e sanatórios</li>
                <li>Centenas de clínicas e dispensários</li>
                <li>Lares para idosos e orfanatos</li>
                <li>Programas de prevenção de doenças e promoção da saúde</li>
                <li>Cursos para deixar de fumar e outros vícios</li>
              </ul>
              
              <p className="text-gray-700 mt-4">
                Nosso compromisso com a saúde vai além do tratamento médico, promovendo um estilo de vida equilibrado que abrange os aspectos físicos, mentais, sociais e espirituais.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como Você Pode Participar</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Há muitas maneiras de participar de nossa missão de serviço e compartilhar o amor de Cristo com os necessitados:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Voluntariado</h3>
              <p className="text-white/80">
                Junte-se a projetos locais ou internacionais como voluntário, oferecendo suas habilidades e tempo.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Doações</h3>
              <p className="text-white/80">
                Contribua financeiramente para projetos específicos ou para o fundo geral de missão e assistência.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Serviço Comunitário</h3>
              <p className="text-white/80">
                Participe de iniciativas de serviço em sua comunidade local através da sua igreja.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
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
