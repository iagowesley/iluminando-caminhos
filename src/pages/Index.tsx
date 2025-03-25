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
  ArrowRight,
  Sunset,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Coordenadas geográficas de Russas-CE, Brasil
const RUSSAS_LATITUDE = -4.9386;
const RUSSAS_LONGITUDE = -37.9722;

const Index = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [sunsetTime, setSunsetTime] = useState('Carregando...');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Configurar a data atual formatada em português
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('pt-BR', options));
    
    // Buscar o horário real do pôr do sol com base nas coordenadas de Russas
    const fetchSunsetData = async () => {
      try {
        setIsLoading(true);
        const url = `https://api.sunrisesunset.io/json?lat=${RUSSAS_LATITUDE}&lng=${RUSSAS_LONGITUDE}&timezone=America/Fortaleza`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'OK' && data.results) {
          setSunsetTime(data.results.sunset);
        } else {
          setSunsetTime('Indisponível');
          console.error('Erro ao obter dados do pôr do sol:', data);
        }
      } catch (error) {
        console.error('Erro ao buscar horário do pôr do sol:', error);
        setSunsetTime('Indisponível');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSunsetData();
  }, []);

  return (
    <PageLayout>
      <Hero size="large" useSlideshow={true} />
      
      {/* Features Section */}
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Bem-vindo à Igreja Adventista do Sétimo Dia"
            subtitle="Somos uma igreja que proclama a esperança e a restauração em Cristo."
            accent={true}
            ornate={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Quem somos"
              description="Conheça nossa identidade, história e visão como uma denominação cristã global presente em mais de 200 países."
              icon={<Users className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&h=500&auto=format&fit=crop"
            />
            
            <FeatureCard
              title="Nossas crenças"
              description="Explore as 28 crenças fundamentais baseadas nas Escrituras Sagradas que orientam nossa fé e prática."
              icon={<Book className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=800&h=500&auto=format&fit=crop"
            />
            
            <FeatureCard
              title="Missão global"
              description="Descubra como estamos compartilhando o amor de Cristo através de projetos missionários, educacionais e humanitários."
              icon={<Globe className="h-6 w-6" />}
              image="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&h=500&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Nossa missão</h2>
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
                  src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=800&h=500&auto=format&fit=crop" 
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
            title="Explore nossa organização"
            subtitle="Conheça mais sobre os diferentes aspectos da Igreja Adventista do Sétimo Dia"
            accent={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Church className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Estrutura organizacional</h3>
              <p className="text-gray-600 mb-4">
                Entenda como nossa igreja está estruturada globalmente, desde congregações locais até a Conferência Geral.
              </p>
              <Link to="/estrutura" className="inline-flex items-center text-church-blue hover:text-church-darkBlue font-medium">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Heart className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Serviço humanitário</h3>
              <p className="text-gray-600 mb-4">
                Descubra como estamos fazendo a diferença através de projetos sociais, assistência humanitária e desenvolvimento comunitário.
              </p>
              <Link to="/missao" className="inline-flex items-center text-church-blue hover:text-church-darkBlue font-medium">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-church-gray p-8 rounded-lg transition-all hover:shadow-md">
              <Calendar className="h-10 w-10 text-church-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Nossos cultos</h3>
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
      
      {/* Sunset Section */}
      <section className="py-12 bg-gradient-to-r from-orange-300 to-orange-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Sunset className="h-16 w-16 text-white mr-6" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 font-adventist">Pôr do sol</h2>
                <p className="text-white text-lg font-adventist">{currentDate}</p>
                <p className="text-white text-xl font-bold font-adventist">
                  Horário: {isLoading ? 'Carregando...' : sunsetTime}
                </p>
                <p className="text-white/80 text-xs mt-1 font-adventist">
                  Powered by SunriseSunset.io
                </p>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
              <Button 
                asChild
                variant="churchOutline" 
                size="lg" 
                className="border-white text-white hover:bg-white/20"
              >
                <a href="/downloads/meditacao-por-do-sol-2025.pdf" download className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Meditação do Pôr do Sol
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-church-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se a nós em nossa jornada de fé</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Faça parte de uma comunidade global de fé que busca seguir os ensinamentos de Cristo e compartilhar Seu amor com o mundo.
          </p>
          <div className="space-x-4">
            <Button asChild variant="churchOutline" size="church" className="border-white text-white hover:bg-white/10">
              <Link to="/crencas">Nossas crenças</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
