import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  impact: string;
  buttonText?: string;
  buttonLink?: string;
}

const Project = ({ title, description, image, impact, buttonText, buttonLink }: ProjectProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-church-blue mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="bg-church-gray p-4 mb-4">
          <h4 className="font-medium text-church-blue mb-2">Impacto</h4>
          <p className="text-gray-700">{impact}</p>
        </div>
        {buttonText && buttonLink && (
          <Button asChild variant="churchOutline" className="w-full mt-2">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

const projects: ProjectProps[] = [
  {
    title: "Cesta Solidária",
    description: "Programa mensal de distribuição de cestas básicas para famílias em situação de vulnerabilidade social na comunidade local. As doações são arrecadadas entre os membros da igreja e parceiros comunitários.",
    image: "/images/projects/food-basket.jpg",
    impact: "Atendemos mais de 50 famílias mensalmente, oferecendo não apenas alimentos, mas também apoio espiritual e emocional.",
    buttonText: "Seja um Doador",
    buttonLink: "/contato#doacao"
  },
  {
    title: "Curso de Alfabetização",
    description: "Projeto educacional que oferece aulas gratuitas de alfabetização e reforço escolar para adultos e crianças. As aulas acontecem duas vezes por semana nas dependências da igreja.",
    image: "/images/projects/literacy.jpg",
    impact: "Já formamos mais de 200 pessoas desde o início do projeto, transformando vidas através da educação.",
    buttonText: "Ser Voluntário",
    buttonLink: "/contato#voluntario"
  },
  {
    title: "Saúde em Ação",
    description: "Iniciativa trimestral que oferece atendimento médico e odontológico gratuito para a comunidade, com profissionais voluntários. Inclui também palestras sobre saúde preventiva e estilo de vida saudável.",
    image: "/images/projects/health.jpg",
    impact: "Cada edição atende aproximadamente 150 pessoas, promovendo saúde física, mental e espiritual.",
    buttonText: "Próximo Evento",
    buttonLink: "/eventos#saude"
  },
  {
    title: "Roupas que Aquecem",
    description: "Campanha sazonal de arrecadação e distribuição de roupas, cobertores e itens de higiene pessoal para pessoas em situação de rua, especialmente nos meses mais frios do ano.",
    image: "/images/projects/clothing.jpg",
    impact: "Anualmente distribuímos mais de 1.000 peças de roupas e 200 kits de higiene, levando calor e dignidade aos mais necessitados.",
    buttonText: "Como Ajudar",
    buttonLink: "/contato#doacao"
  },
  {
    title: "Música que Transforma",
    description: "Projeto cultural que oferece aulas gratuitas de música (violão, teclado, canto) para crianças e adolescentes de baixa renda, promovendo inclusão social através da arte.",
    image: "/images/projects/music.jpg",
    impact: "Atualmente mais de 40 jovens participam do projeto, desenvolvendo talentos e encontrando novos caminhos através da música.",
    buttonText: "Inscrições",
    buttonLink: "/contato#inscricao"
  },
  {
    title: "Mutirão de Limpeza",
    description: "Iniciativa ambiental que promove limpeza de praças, ruas e rios da cidade, conscientizando sobre a importância da preservação do meio ambiente como parte do cuidado com a criação divina.",
    image: "/images/projects/cleaning.jpg",
    impact: "Realizamos 4 mutirões por ano, envolvendo cerca de 100 voluntários por ação, melhorando os espaços públicos da nossa cidade.",
    buttonText: "Próximo Mutirão",
    buttonLink: "/eventos#mutirao"
  }
];

export default function SocialProjects() {
  return (
    <main>
      <Hero 
        title="Projetos Sociais"
        subtitle="Servindo à comunidade com amor e compaixão"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-b53376e58b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />

      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossos Projetos"
            subtitle="Amor em ação através de diversas iniciativas sociais"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif text-church-blue mb-4">Como Participar</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Você pode participar de nossos projetos sociais de diversas formas: como voluntário, 
              através de doações financeiras ou de itens necessários, ou simplesmente divulgando 
              nossas iniciativas. Cada contribuição faz diferença!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="church" size="church">
                <Link to="/contato#voluntario">Seja Voluntário</Link>
              </Button>
              <Button asChild variant="churchGold" size="church">
                <Link to="/contato#doacao">Faça uma Doação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 