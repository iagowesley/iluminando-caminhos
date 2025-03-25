import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Globe, Users, BookOpen, ChevronRight, Book, Building, MapPin, Church, Award } from "lucide-react";

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
        size="medium"
        title="Quem somos"
        subtitle="Conheça nossa identidade, história e visão como uma denominação cristã global"
        backgroundImage="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
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
            ornate={true}
          />
          
          <div className="relative mt-20 pb-10">
            {/* Linha do tempo central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-church-blue z-0"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative z-10 mb-20 last:mb-0 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-white p-6 shadow-lg border-t-4 border-church-blue">
                    <div className="flex items-center mb-4 justify-between">
                      <div className={`${index % 2 === 0 ? 'order-last' : 'order-first'}`}>
                        {index === 0 && <Book className="h-8 w-8 text-church-accent" />}
                        {index === 1 && <Award className="h-8 w-8 text-church-accent" />}
                        {index === 2 && <Building className="h-8 w-8 text-church-accent" />}
                        {index === 3 && <MapPin className="h-8 w-8 text-church-accent" />}
                        {index === 4 && <Globe className="h-8 w-8 text-church-accent" />}
                        {index === 5 && <Church className="h-8 w-8 text-church-accent" />}
                      </div>
                      <span className="font-serif text-xl font-bold text-church-blue">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                
                {/* Marcador central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="h-8 w-8 rounded-full bg-church-blue border-4 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{index + 1}</span>
                  </div>
                </div>
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
            ornate={true}
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
