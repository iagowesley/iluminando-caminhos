import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { supabase, Photo, photoCategories } from "@/lib/supabase";

// Adicionando "todos" às categorias para o filtro
const displayCategories = ["todos", ...photoCategories];

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  // Buscar fotos do Supabase
  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('photos')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPhotos(data || []);
      } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        setError('Não foi possível carregar as fotos. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  const filteredPhotos = activeCategory === "todos"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <PageLayout>
      <Hero
        title="Galeria de Fotos"
        subtitle="Momentos especiais de nossa comunidade"
        backgroundImage="/images/galeria-fotos.jpg"
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Nossa galeria"
            subtitle="Imagens que contam nossa história e missão"
            accent={true}
            ornate={true}
          />

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
            {displayCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "church" : "churchOutline"}
                className="capitalize"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Mensagem de carregamento */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
              <span className="ml-2 text-church-blue">Carregando fotos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Tentar novamente
              </Button>
            </div>
          ) : (
            <>
              {/* Grid de Fotos */}
              {filteredPhotos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => setLightboxPhoto(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-600">Nenhuma foto encontrada para esta categoria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-10 right-0 text-white hover:bg-white/10"
              onClick={() => setLightboxPhoto(null)}
            >
              <X className="h-8 w-8" />
            </Button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg font-serif">{lightboxPhoto.alt}</p>
          </div>
        </div>
      )}
    </PageLayout>
  );
} 