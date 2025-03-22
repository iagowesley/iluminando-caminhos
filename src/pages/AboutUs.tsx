
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Globe, Users, BookOpen } from "lucide-react";

const AboutUs = () => {
  const timeline = [
    {
      year: "1844",
      title: "O Grande Desapontamento",
      description: "Após o evento conhecido como o Grande Desapontamento, um pequeno grupo começou a estudar as Escrituras mais profundamente."
    },
    {
      year: "1860",
      title: "Nome Oficial",
      description: "A igreja adota oficialmente o nome 'Igreja Adventista do Sétimo Dia', refletindo sua observância do sábado e a crença no segundo advento de Cristo."
    },
    {
      year: "1863",
      title: "Organização Formal",
      description: "Estabelecimento formal da Conferência Geral dos Adventistas do Sétimo Dia com cerca de 3.500 membros em Michigan, EUA."
    },
    {
      year: "1874",
      title: "Primeiro Missionário",
      description: "J.N. Andrews torna-se o primeiro missionário oficial enviado pela igreja para fora da América do Norte, iniciando o trabalho na Europa."
    },
    {
      year: "1890-1900",
      title: "Expansão Global",
      description: "A igreja expande sua presença para a América do Sul, África, Ásia e Oceania, estabelecendo instituições de saúde e educação."
    },
    {
      year: "Atualidade",
      title: "Presença Mundial",
      description: "Hoje, a Igreja Adventista do Sétimo Dia está presente em mais de 200 países, com cerca de 22 milhões de membros, operando milhares de instituições educacionais, hospitais e projetos humanitários."
    }
  ];

  const stats = [
    {
      number: "22+",
      label: "Milhões de Membros",
      icon: <Users className="h-12 w-12 text-church-blue" />
    },
    {
      number: "200+",
      label: "Países com Presença",
      icon: <Globe className="h-12 w-12 text-church-blue" />
    },
    {
      number: "8,500+",
      label: "Instituições de Ensino",
      icon: <BookOpen className="h-12 w-12 text-church-blue" />
    },
    {
      number: "175+",
      label: "Anos de História",
      icon: <Clock className="h-12 w-12 text-church-blue" />
    }
  ];

  return (
    <PageLayout>
      <Hero 
        title="Quem Somos"
        subtitle="Conheça nossa identidade, história e visão como uma denominação cristã global"
        backgroundImage="/images/adventist-congregation.jpg"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Nossa Identidade</h2>
              <div className="h-1 w-20 bg-church-accent mb-8"></div>
              
              <p className="text-gray-700 mb-6">
                A Igreja Adventista do Sétimo Dia é uma denominação cristã protestante global organizada em 1863 nos Estados Unidos. Nosso nome reflete duas crenças fundamentais: a expectativa do breve retorno (advento) de Jesus Cristo à Terra e a observância do sábado (sétimo dia) como dia de descanso e adoração conforme estabelecido nas Escrituras.
              </p>
              
              <p className="text-gray-700 mb-6">
                Somos uma comunidade de fé diversa e inclusiva, unida pela mensagem de esperança e restauração encontrada na Bíblia. Acreditamos no desenvolvimento equilibrado e holístico dos aspectos físicos, mentais, sociais e espirituais da vida humana.
              </p>
              
              <p className="text-gray-700">
                Nossa igreja dedica-se a compartilhar o amor de Deus através da proclamação do evangelho, do serviço compassivo às comunidades e da promoção de um estilo de vida saudável que honra a Deus como Criador e Redentor.
              </p>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="glass-card text-center p-6 border-none">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-3">
                        {stat.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-church-darkBlue">{stat.number}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossa História"
            subtitle="De um pequeno movimento a uma igreja global"
            accent={true}
          />
          
          <div className="mt-12">
            {timeline.map((item, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/6">
                    <div className="bg-church-blue text-white py-2 px-4 rounded text-center font-semibold">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                    
                    {index < timeline.length - 1 && (
                      <div className="mt-8 md:hidden">
                        <Separator />
                      </div>
                    )}
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="hidden md:block mt-8">
                    <Separator />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossa Visão"
            subtitle="O que esperamos alcançar como comunidade global de fé"
            accent={true}
          />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-gray-700 text-center mb-8">
              Em harmonia com as profecias bíblicas, visualizamos um tempo em que a missão de nossa igreja estará concluída e Jesus Cristo retornará.
            </p>
            
            <Card className="glass-card border-none shadow-md p-8 text-center">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-church-darkBlue mb-4">
                  "Transformados pela graça de Deus para transformar o mundo."
                </h3>
                <p className="text-gray-700">
                  Em cada interação e ministério, buscamos demonstrar o caráter amoroso de Cristo, levando esperança e cura a um mundo em necessidade. Convidamos você a se juntar a nós nesta jornada de fé, serviço e expectativa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
