import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const Leader = ({ name, role, image, description }: LeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-6 rounded-lg shadow-md">
      <div className="w-full md:w-1/4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto aspect-square object-cover object-center rounded-md"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-2xl font-serif font-semibold text-church-blue mb-1">{name}</h3>
        <p className="text-lg text-church-accent font-medium mb-4">{role}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const leaders = [
  {
    name: "Pr. José Carlos Silva",
    role: "Pastor Titular",
    image: "/images/pastors/pastor1.jpg",
    description: "Pastor José Carlos Silva dedica-se ao ministério há mais de 20 anos. Formado em Teologia pelo Seminário Adventista Latino-Americano, lidera nossa congregação desde 2018. Casado com Maria e pai de dois filhos, o Pastor José Carlos é conhecido por sua paixão pela pregação bíblica e seu compromisso com o discipulado."
  },
  {
    name: "Pr. André Oliveira",
    role: "Pastor Associado",
    image: "/images/pastors/pastor2.jpg",
    description: "Pastor André Oliveira é responsável pelos ministérios jovens e familiares. Formado em Teologia e com especialização em Aconselhamento Familiar, ele traz energia e inovação aos nossos programas. Casado com Raquel, dedica-se especialmente ao fortalecimento das famílias e ao desenvolvimento espiritual dos jovens."
  },
  {
    name: "Diác. Antônio Ferreira",
    role: "Primeiro Ancião",
    image: "/images/pastors/elder1.jpg",
    description: "O irmão Antônio serve como primeiro ancião de nossa igreja há 8 anos. Empresário e líder comunitário, ele dedica grande parte de seu tempo ao serviço da igreja. Sua liderança sábia e equilibrada tem sido fundamental para o crescimento espiritual de nossa congregação. É casado com Lúcia e pai de três filhos."
  },
  {
    name: "Roberta Santos",
    role: "Diretora de Música",
    image: "/images/pastors/music-director.jpg",
    description: "Roberta coordena todo o ministério musical da igreja. Formada em Música Sacra, ela dirige o coral, a orquestra e as equipes de louvor. Seu talento e dedicação têm enriquecido profundamente nossos momentos de adoração. Além de musicista, Roberta também leciona na escola adventista local."
  },
  {
    name: "Daniel Costa",
    role: "Diretor de Jovens",
    image: "/images/pastors/youth-director.jpg",
    description: "Daniel lidera o ministério jovem com entusiasmo e criatividade. Professor de profissão, ele tem um dom especial para conectar-se com adolescentes e jovens adultos. Sob sua liderança, o departamento jovem tem crescido e se tornado uma referência na região pela qualidade de seus programas e pelo engajamento missionário."
  }
];

export default function Leadership() {
  return (
    <PageLayout>
      <Hero 
        title="Nossa Liderança"
        subtitle="Conheça os líderes que servem e guiam nossa comunidade de fé"
        backgroundImage="/images/leadership-background.jpg"
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
          
          <div className="mt-16 space-y-12">
            {leaders.map((leader, index) => (
              <Leader key={index} {...leader} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Nossa estrutura de liderança segue o modelo bíblico e as orientações da Igreja Adventista do Sétimo Dia mundial. Todos os líderes são eleitos pela igreja local e trabalham em conjunto para o crescimento e desenvolvimento espiritual da congregação.
            </p>
            <Button asChild variant="church" size="church">
              <Link to="/contato">Entre em Contato com Nossa Liderança</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 