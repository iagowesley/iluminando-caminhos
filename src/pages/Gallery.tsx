import { useState } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface PhotoProps {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const photos: PhotoProps[] = [
  { 
    id: 1, 
    src: "/images/gallery/church-building.jpg", 
    alt: "Fachada da Igreja", 
    category: "igreja" 
  },
  { 
    id: 2, 
    src: "/images/gallery/worship.jpg", 
    alt: "Momento de Adoração", 
    category: "cultos" 
  },
  { 
    id: 3, 
    src: "/images/gallery/youth-event.jpg", 
    alt: "Evento Jovem", 
    category: "jovens" 
  },
  { 
    id: 4, 
    src: "/images/gallery/baptism.jpg", 
    alt: "Batismo", 
    category: "batismos" 
  },
  { 
    id: 5, 
    src: "/images/gallery/kids-ministry.jpg", 
    alt: "Ministério Infantil", 
    category: "crianças" 
  },
  { 
    id: 6, 
    src: "/images/gallery/community-service.jpg", 
    alt: "Serviço Comunitário", 
    category: "serviço" 
  },
  { 
    id: 7, 
    src: "/images/gallery/choir.jpg", 
    alt: "Coral da Igreja", 
    category: "cultos" 
  },
  { 
    id: 8, 
    src: "/images/gallery/bible-study.jpg", 
    alt: "Estudo Bíblico", 
    category: "estudo" 
  },
  { 
    id: 9, 
    src: "/images/gallery/church-interior.jpg", 
    alt: "Interior da Igreja", 
    category: "igreja" 
  },
  { 
    id: 10, 
    src: "/images/gallery/social-event.jpg", 
    alt: "Evento Social", 
    category: "eventos" 
  },
  { 
    id: 11, 
    src: "/images/gallery/prayer-meeting.jpg", 
    alt: "Reunião de Oração", 
    category: "cultos" 
  },
  { 
    id: 12, 
    src: "/images/gallery/camp-meeting.jpg", 
    alt: "Acampamento", 
    category: "eventos" 
  },
  { 
    id: 13, 
    src: "/images/gallery/potluck.jpg", 
    alt: "Almoço Comunitário", 
    category: "eventos" 
  },
  { 
    id: 14, 
    src: "/images/gallery/wedding.jpg", 
    alt: "Casamento", 
    category: "eventos" 
  },
  { 
    id: 15, 
    src: "/images/gallery/mission-trip.jpg", 
    alt: "Viagem Missionária", 
    category: "serviço" 
  },
];

const categories = [
  "todos",
  "igreja",
  "cultos",
  "jovens",
  "batismos",
  "crianças",
  "serviço",
  "estudo",
  "eventos"
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoProps | null>(null);
  
  const filteredPhotos = activeCategory === "todos" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);
  
  return (
    <PageLayout>
      <Hero 
        title="Galeria de Fotos"
        subtitle="Momentos especiais da vida de nossa igreja"
        backgroundImage="/images/gallery-background.jpg"
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nossa Galeria"
            subtitle="Imagens que contam nossa história e missão"
            accent={true}
            ornate={true}
          />
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
            {categories.map((category) => (
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
          
          {/* Grid de Fotos */}
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
          
          {/* Mensagem se nenhuma foto for encontrada */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">Nenhuma foto encontrada para esta categoria.</p>
            </div>
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