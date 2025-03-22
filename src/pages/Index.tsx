
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Globe, 
  Book, 
  Church, 
  Users, 
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      <Hero 
        title="Proclamando Esperança, Transformando Vidas"
        subtitle="Uma comunidade global de fé comprometida com a proclamação do evangelho eterno e a mensagem dos três anjos."
        buttonText="Conheça Nossas Crenças"
        buttonLink="/crencas"
        backgroundImage="/images/adventist-hero.jpg"
        size="large"
      />
      
      {/* Features Section */}
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Bem-vindo à Igreja Adventista do Sétimo Dia"
            subtitle="Somos uma comunidade cristã mundial que se dedica a compartilhar a mensagem de esperança e restauração."
            accent={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Quem Somos"
              description="Conheça nossa identidade, história e visão como uma denominação cristã global presente em mais de 200 países."
              icon={<Users className="h-6 w-6" />}
              image="/images/adventist-community.jpg"
            />
            
            <FeatureCard
              title="Nossas Crenças"
              description="Explore as 28 crenças fundamentais baseadas nas Escrituras Sagradas que orientam nossa fé e prática."
              icon={<Book className="h-6 w-6" />}
              image="/images/adventist-bible-study.jpg"
            />
            
            <FeatureCard
              title="Missão Global"
              description="Descubra como estamos compartilhando o amor de Cristo através de projetos missionários, educacionais e humanitários."
              icon={<Globe className="h-6 w-6" />}
              image="/images/adventist-global-mission.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Nossa Missão</h2>
              <div className="h-1 w-20 bg-church-accent mb-8"></div>
              
              <p className="text-gray-700 mb-6">
                A Igreja Adventista do Sétimo Dia tem a missão de proclamar a todos os povos o evangelho eterno, no contexto da mensagem dos três anjos de Apocalipse 14:6-12, levando-os a aceitar Jesus como seu Salvador pessoal e a unir-se à Sua igreja, enquanto aguardam Seu breve retorno.
              </p>
              
              <p className="text-gray-700 mb-8">
                Nosso ministério segue o exemplo de Cristo, atendendo às necessidades das pessoas, levando-as a Jesus e ensinando-as a observar tudo o que Ele ordenou.
              </p>
              
              <Button 
                asChild
                className="bg-church-blue hover:bg-church-darkBlue text-white"
              >
                <Link to="/missao" className="flex items-center">
                  Saiba mais sobre nossa missão
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/community-service.jpg" 
                  alt="Missão Adventista" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Explore Nossa Organização"
            subtitle="Conheça mais sobre os diferentes aspectos da Igreja Adventista do Sétimo Dia"
            accent={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Church className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Estrutura Organizacional</h3>
              <p className="text-gray-600 mb-4">
                Entenda como nossa igreja está estruturada globalmente, desde congregações locais até a Conferência Geral.
              </p>
              <Link to="/estrutura" className="inline-flex items-center text-church-blue hover:text-church-darkBlue font-medium">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Heart className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Serviço Humanitário</h3>
              <p className="text-gray-600 mb-4">
                Descubra como estamos fazendo a diferença através de projetos sociais, assistência humanitária e desenvolvimento comunitário.
              </p>
              <Link to="/missao" className="inline-flex items-center text-church-blue hover:text-church-darkBlue font-medium">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Calendar className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Nossos Cultos</h3>
              <p className="text-gray-600 mb-4">
                Conheça nossa programação de cultos, atividades e estudos bíblicos disponíveis para toda a família.
              </p>
              <Link to="/cultos" className="inline-flex items-center text-church-blue hover:text-church-darkBlue font-medium">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-church-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se a Nós em Nossa Jornada de Fé</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Faça parte de uma comunidade global de fé que busca seguir os ensinamentos de Cristo e compartilhar Seu amor com o mundo.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-white text-church-blue hover:bg-white/90">
              <Link to="/cultos">Encontre uma Igreja</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/crencas">Nossas Crenças</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
