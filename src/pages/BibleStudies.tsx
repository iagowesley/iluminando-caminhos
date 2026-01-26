import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import PageLayout from "@/components/PageLayout";
import { Loader2, MessageSquare } from "lucide-react";
import { supabase, BibleStudy } from "@/lib/supabase";

export default function BibleStudies() {
  const [studies, setStudies] = useState<BibleStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudies();
  }, []);

  async function fetchStudies() {
    try {
      setLoading(true);
      setError(null);

      // Buscar todos os estudos
      const { data: studiesData, error: studiesError } = await supabase
        .from('bible_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (studiesError) throw studiesError;

      if (studiesData && studiesData.length > 0) {
        setStudies(studiesData);
      } else {
        setStudies([]);
      }
    } catch (error) {
      console.error('Erro ao buscar estudos:', error);
      setError('Não foi possível carregar os estudos. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }

  function getWhatsAppLink(study: BibleStudy) {
    // Usar o WhatsApp cadastrado ou um número padrão caso não exista
    const whatsappNumber = study.whatsapp || "5511999999999";
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o estudo bíblico: "${study.title}"`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  return (
    <PageLayout>
      <Hero
        title="Estudos Bíblicos"
        subtitle="Aprofunde seu conhecimento das escrituras"
        backgroundImage="/img/bible-studies-hero.jpg"
        size="medium"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos estudos"
            subtitle="Conhecimento e edificação para sua vida"
            accent={true}
            ornate={true}
          />

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
              <span className="ml-2">Carregando estudos bíblicos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <Button onClick={fetchStudies} className="mt-4">
                Tentar Novamente
              </Button>
            </div>
          ) : studies.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Não há estudos bíblicos disponíveis no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studies.map((study) => (
                <div
                  key={study.id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-row h-56">
                    <div className="w-1/3 flex items-center justify-center p-2">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="w-2/3 p-4 flex flex-col">
                      <h3 className="text-lg font-semibold text-church-blue mb-2">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Ministrado por:</span> {study.instructor}
                      </p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                        {study.description}
                      </p>
                      <div className="mt-auto">
                        <a
                          href={getWhatsAppLink(study)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                          <MessageSquare className="h-4 w-4" />
                          Solicitar pelo WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-church-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Deseja um estudo personalizado?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para agendar um estudo bíblico personalizado
            para você, sua família ou seu grupo de amigos.
          </p>
          <Link to="/contato">
            <Button variant="secondary" size="lg">
              Entre em Contato
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
} 