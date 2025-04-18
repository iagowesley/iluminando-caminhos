import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, User, CalendarDays, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface StudyProps {
  id: number;
  title: string;
  description: string;
  lessons: LessonProps[];
  image: string;
  instructor: string;
}

interface LessonProps {
  id: number;
  title: string;
  description: string;
}

const studies: StudyProps[] = [
  {
    id: 1,
    title: "A Verdade Revelada",
    description: "Série completa com 28 estudos sobre as doutrinas fundamentais da fé adventista, baseada nas 28 crenças fundamentais. Ideal para quem deseja conhecer os fundamentos bíblicos de nossa fé.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    instructor: "Pr. Carlos Silva",
    lessons: [
      {
        id: 1,
        title: "A Palavra de Deus",
        description: "Como a Bíblia foi escrita e por que podemos confiar nela como a Palavra inspirada de Deus."
      },
      {
        id: 2,
        title: "O Grande Conflito",
        description: "A origem do mal e o conflito cósmico entre Cristo e Satanás."
      },
      {
        id: 3,
        title: "O Plano da Salvação",
        description: "Aprenda sobre o amoroso plano de Deus para salvar a humanidade."
      }
    ]
  },
  {
    id: 2,
    title: "Apocalipse: Esperança para o Futuro",
    description: "Um estudo profundo sobre o livro do Apocalipse, desvendando suas profecias e símbolos de maneira clara. Descubra como este livro traz esperança em meio às previsões sobre o fim dos tempos.",
    image: "/images/apocalipse.jpg",
    instructor: "Diac. Fernanda Santos",
    lessons: [
      {
        id: 1,
        title: "Introdução ao Apocalipse",
        description: "Contexto histórico e propósito do livro do Apocalipse."
      },
      {
        id: 2,
        title: "As Sete Igrejas",
        description: "O significado histórico e profético das sete igrejas do Apocalipse."
      },
      {
        id: 3,
        title: "Os Selos Proféticos",
        description: "Compreendendo os sete selos e seu cumprimento na história e no futuro."
      }
    ]
  },
  {
    id: 3,
    title: "Família Segundo o Coração de Deus",
    description: "Série de estudos que aborda os princípios bíblicos para construir famílias saudáveis e felizes. Temas como casamento, educação dos filhos e relacionamentos familiares são tratados à luz da Bíblia.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    instructor: "Anc. Roberto e Marta Oliveira",
    lessons: [
      {
        id: 1,
        title: "O Plano Original de Deus para a Família",
        description: "O propósito divino para a instituição familiar desde a criação."
      },
      {
        id: 2,
        title: "Comunicação Eficaz no Lar",
        description: "Princípios bíblicos para melhorar a comunicação entre cônjuges e com os filhos."
      },
      {
        id: 3,
        title: "Educando Filhos para o Reino",
        description: "Como criar filhos com valores cristãos em um mundo secular."
      }
    ]
  },
  {
    id: 4,
    title: "Daniel: Profecias para Nosso Tempo",
    description: "Um estudo detalhado e interativo das profecias do livro de Daniel. Descubra como estas antigas profecias preveem eventos históricos com incrível precisão e oferecem orientação para os tempos finais da história da Terra.",
    image: "/images/daniel.png",
    instructor: "Pr. Anderson Lima",
    lessons: [
      {
        id: 1,
        title: "Introdução ao Livro de Daniel",
        description: "Contexto histórico, autoria e autenticidade do livro. Aprenda sobre o propósito profético e histórico desta notável parte das Escrituras."
      },
      {
        id: 2,
        title: "A Estátua de Nabucodonosor",
        description: "Análise profunda do sonho de Nabucodonosor e sua interpretação. Entenda como este sonho revela o curso da história mundial através dos impérios até o fim dos tempos."
      },
      {
        id: 3,
        title: "As Quatro Bestas e o Juízo",
        description: "Estudo das visões das quatro bestas e do juízo celestial. Compreenda as conexões entre Daniel 7 e o livro do Apocalipse."
      },
      {
        id: 4,
        title: "As 2300 Tardes e Manhãs",
        description: "Exploração da mais longa profecia de tempo na Bíblia e seu significado para o movimento adventista e o tempo do fim."
      }
    ]
  }
];

export default function BibleStudies() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  
  const toggleStudy = (id: number) => {
    if (expandedStudy === id) {
      setExpandedStudy(null);
    } else {
      setExpandedStudy(id);
    }
  };
  
  return (
    <PageLayout>
      <Hero 
        title="Estudos Bíblicos"
        subtitle="Aprofunde seu conhecimento das Escrituras e fortaleça sua jornada espiritual"
        backgroundImage="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossas Séries de Estudos"
            subtitle="Material bíblico para crescimento espiritual"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            {studies.map((study) => (
              <div key={study.id} className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-adventist text-church-blue mb-3">{study.title}</h3>
                    <p className="text-gray-700 mb-4">{study.description}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>Instrutor: {study.instructor}</span>
                      </div>
                      
                      <span className="text-sm text-gray-500 flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {study.lessons.length} lições
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-5">
                      <Button
                        variant="churchOutline"
                        size="sm"
                        onClick={() => toggleStudy(study.id)}
                        className="flex items-center justify-center"
                      >
                        {expandedStudy === study.id ? 'Esconder Detalhes' : 'Ver Detalhes'}
                        <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${
                          expandedStudy === study.id ? 'rotate-180' : ''
                        }`} />
                      </Button>
                      
                      <Button
                        asChild
                        variant="church"
                        size="sm"
                        className="flex items-center justify-center"
                      >
                        <Link to={`/contato#estudo?serie=${study.title}`}>
                          <MessageCircle className="mr-1 h-4 w-4" />
                          Solicitar este Estudo
                        </Link>
                      </Button>
                    </div>
                    
                    {expandedStudy === study.id && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-medium font-adventist text-church-darkBlue mb-4">Conteúdo do Estudo</h4>
                        <div className="space-y-4">
                          {study.lessons.map((lesson) => (
                            <div key={lesson.id} className="bg-church-gray p-4 rounded-md">
                              <h5 className="font-medium font-adventist text-church-blue mb-2">
                                {lesson.id}. {lesson.title}
                              </h5>
                              <p className="text-gray-700 text-sm">{lesson.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-adventist text-church-blue mb-4">Gostaria de um estudo personalizado?</h3>
            <p className="text-gray-700 mb-8">
              Oferecemos estudos bíblicos personalizados em sua casa ou em nosso templo.
              Um instrutor bíblico irá guiar você no estudo dos temas que mais lhe interessam.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild variant="church" size="church">
                <Link to="/contato#estudo">Solicitar Estudo</Link>
              </Button>
              <Button asChild variant="churchOutline" size="church">
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 