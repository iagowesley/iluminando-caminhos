import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, FileText, Video, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface StudyProps {
  id: number;
  title: string;
  description: string;
  lessons: LessonProps[];
  image: string;
}

interface LessonProps {
  id: number;
  title: string;
  description: string;
  pdfLink: string;
  videoLink?: string;
}

const studies: StudyProps[] = [
  {
    id: 1,
    title: "A Verdade Revelada",
    description: "Série completa com 28 estudos sobre as doutrinas fundamentais da fé adventista, baseada nas 28 crenças fundamentais. Ideal para quem deseja conhecer os fundamentos bíblicos de nossa fé.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    lessons: [
      {
        id: 1,
        title: "A Palavra de Deus",
        description: "Como a Bíblia foi escrita e por que podemos confiar nela como a Palavra inspirada de Deus.",
        pdfLink: "/pdfs/verdade-revelada-01.pdf",
        videoLink: "https://www.youtube.com/watch?v=study1-lesson1"
      },
      {
        id: 2,
        title: "O Grande Conflito",
        description: "A origem do mal e o conflito cósmico entre Cristo e Satanás.",
        pdfLink: "/pdfs/verdade-revelada-02.pdf"
      },
      {
        id: 3,
        title: "O Plano da Salvação",
        description: "Aprenda sobre o amoroso plano de Deus para salvar a humanidade.",
        pdfLink: "/docs/studies/truth-revealed-03.pdf",
        videoLink: "https://www.youtube.com/watch?v=example3"
      }
    ]
  },
  {
    id: 2,
    title: "Apocalipse: Esperança para o Futuro",
    description: "Um estudo profundo sobre o livro do Apocalipse, desvendando suas profecias e símbolos de maneira clara. Descubra como este livro traz esperança em meio às previsões sobre o fim dos tempos.",
    image: "https://images.unsplash.com/photo-1498094596300-45f272292b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    lessons: [
      {
        id: 1,
        title: "Introdução ao Apocalipse",
        description: "Contexto histórico e propósito do livro do Apocalipse.",
        pdfLink: "/pdfs/apocalipse-01.pdf",
        videoLink: "https://www.youtube.com/watch?v=apocalypse-lesson1"
      },
      {
        id: 2,
        title: "As Sete Igrejas",
        description: "O significado histórico e profético das sete igrejas do Apocalipse.",
        pdfLink: "/docs/studies/revelation-02.pdf",
        videoLink: "https://www.youtube.com/watch?v=example5"
      },
      {
        id: 3,
        title: "Os Selos Proféticos",
        description: "Compreendendo os sete selos e seu cumprimento na história e no futuro.",
        pdfLink: "/docs/studies/revelation-03.pdf",
        videoLink: "https://www.youtube.com/watch?v=example6"
      }
    ]
  },
  {
    id: 3,
    title: "Família Segundo o Coração de Deus",
    description: "Série de estudos que aborda os princípios bíblicos para construir famílias saudáveis e felizes. Temas como casamento, educação dos filhos e relacionamentos familiares são tratados à luz da Bíblia.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    lessons: [
      {
        id: 1,
        title: "O Plano Original de Deus para a Família",
        description: "O propósito divino para a instituição familiar desde a criação.",
        pdfLink: "/pdfs/familia-01.pdf",
        videoLink: "https://www.youtube.com/watch?v=family-lesson1"
      },
      {
        id: 2,
        title: "Comunicação Eficaz no Lar",
        description: "Princípios bíblicos para melhorar a comunicação entre cônjuges e com os filhos.",
        pdfLink: "/docs/studies/family-02.pdf",
        videoLink: "https://www.youtube.com/watch?v=example8"
      },
      {
        id: 3,
        title: "Educando Filhos para o Reino",
        description: "Como criar filhos com valores cristãos em um mundo secular.",
        pdfLink: "/docs/studies/family-03.pdf",
        videoLink: "https://www.youtube.com/watch?v=example9"
      }
    ]
  },
  {
    id: 4,
    title: "Daniel: Profecias para Nosso Tempo",
    description: "Um estudo detalhado das profecias do livro de Daniel e sua relevância para os dias atuais. Descubra como essas antigas visões predisseram com precisão eventos históricos e continuam a guiar nossa compreensão do futuro.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    lessons: [
      {
        id: 1,
        title: "Introdução ao Livro de Daniel",
        description: "Contexto histórico e propósito do livro de Daniel.",
        pdfLink: "/pdfs/daniel-01.pdf",
        videoLink: "https://www.youtube.com/watch?v=daniel-lesson1"
      },
      {
        id: 2,
        title: "As Profecias de Daniel",
        description: "Análise das profecias do livro de Daniel e sua relevância para os dias atuais.",
        pdfLink: "/pdfs/daniel-02.pdf",
        videoLink: "https://www.youtube.com/watch?v=daniel-lesson2"
      },
      {
        id: 3,
        title: "Aplicações das Profecias de Daniel",
        description: "Como as profecias de Daniel se aplicam a eventos históricos e continuam a guiar nossa compreensão do futuro.",
        pdfLink: "/pdfs/daniel-03.pdf",
        videoLink: "https://www.youtube.com/watch?v=daniel-lesson3"
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
        subtitle="Aprofunde seu conhecimento das Escrituras"
        backgroundImage="https://images.unsplash.com/photo-1580440282860-8555b0d915cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
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
              <div key={study.id} className="bg-white border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-adventist text-church-blue mb-3">{study.title}</h3>
                    <p className="text-gray-700 mb-4">{study.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <Button
                        variant="churchOutline"
                        size="sm"
                        onClick={() => toggleStudy(study.id)}
                        className="flex items-center"
                      >
                        {expandedStudy === study.id ? 'Esconder Lições' : 'Ver Lições'}
                        <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${
                          expandedStudy === study.id ? 'rotate-180' : ''
                        }`} />
                      </Button>
                      
                      <span className="text-sm text-gray-500">
                        {study.lessons.length} lições
                      </span>
                    </div>
                    
                    {expandedStudy === study.id && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-medium font-adventist text-church-darkBlue mb-4">Lições</h4>
                        <div className="space-y-4">
                          {study.lessons.map((lesson) => (
                            <div key={lesson.id} className="bg-church-gray p-4">
                              <h5 className="font-medium font-adventist text-church-blue mb-2">
                                {lesson.id}. {lesson.title}
                              </h5>
                              <p className="text-gray-700 text-sm mb-3">{lesson.description}</p>
                              <div className="flex flex-wrap gap-2">
                                <Button 
                                  asChild
                                  variant="churchOutline" 
                                  size="sm"
                                  className="flex items-center"
                                >
                                  <a href={lesson.pdfLink} target="_blank" rel="noopener noreferrer">
                                    <FileText className="mr-1 h-4 w-4" />
                                    PDF
                                  </a>
                                </Button>
                                
                                {lesson.videoLink && (
                                  <Button 
                                    asChild
                                    variant="churchOutline" 
                                    size="sm"
                                    className="flex items-center"
                                  >
                                    <a href={lesson.videoLink} target="_blank" rel="noopener noreferrer">
                                      <Video className="mr-1 h-4 w-4" />
                                      Vídeo
                                    </a>
                                  </Button>
                                )}
                              </div>
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