import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  shortDescription: string;
}

const Leader = ({ name, role, image, shortDescription }: LeaderProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 rounded-2xl">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm opacity-90">{role}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm">{shortDescription}</p>
      </CardContent>
    </Card>
  );
};

const leaders = [
  {
    name: "Pr. José Carlos Silva",
    role: "Pastor Titular",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    shortDescription: "Lidera nossa congregação desde 2018, dedicado ao ministério há mais de 20 anos."
  },
  {
    name: "Pr. André Oliveira",
    role: "Pastor Associado",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    shortDescription: "Responsável pelos ministérios jovens e familiares, trazendo energia e inovação aos nossos programas."
  },
  {
    name: "Diác. Antônio Ferreira",
    role: "Primeiro Ancião",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    shortDescription: "Liderança sábia e equilibrada, fundamental para o crescimento espiritual de nossa congregação."
  },
  {
    name: "Roberta Santos",
    role: "Diretora de Música",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    shortDescription: "Coordena o ministério musical, enriquecendo nossos momentos de adoração com seu talento."
  },
  {
    name: "Daniel Costa",
    role: "Diretor de Jovens",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    shortDescription: "Lidera o ministério jovem com entusiasmo e criatividade, promovendo engajamento missionário."
  }
];

export default function Leadership() {
  return (
    <PageLayout>
      <Hero 
        title="Nossa Liderança"
        subtitle="Conheça os líderes que servem nossa igreja"
        backgroundImage="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />

      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Líderes da Igreja"
            subtitle="Dedicados a servir a Deus e à comunidade"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Leader key={index} {...leader} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Nossa estrutura de liderança segue o modelo bíblico e as orientações da Igreja Adventista do Sétimo Dia mundial. Todos os líderes são eleitos pela igreja local e trabalham em conjunto para o crescimento e desenvolvimento espiritual da congregação.
              </p>
              <Button asChild variant="church" size="church" className="rounded-full">
                <Link to="/contato">Entre em Contato com Nossa Liderança</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 