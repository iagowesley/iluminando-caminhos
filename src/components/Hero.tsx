import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// Dados dos slides
const churchSlides = [
  {
    image: "/images/church-1.jpg",
    title: "Bem-vindo à Igreja Adventista do Sétimo Dia Central Russas",
    info: "Unidos em fé, esperança e amor.",
    buttonText: undefined,
    buttonLink: undefined
  },
  {
    image: "/images/desenvolvimento-voluntario.jpg",
    title: "Nossa missão",
    info: "Proclamar o evangelho eterno no contexto da mensagem dos três anjos de Apocalipse 14.",
    buttonText: undefined,
    buttonLink: undefined
  },
  {
    image: "/images/church-4.jpg",
    title: "Nossa missão",
    info: "Proclamar o evangelho eterno no contexto da mensagem dos três anjos de Apocalipse 14.",
    buttonText: undefined,
    buttonLink: undefined
  },
  {
    image: "/images/topo-10dias-pt.jpg",
    title: "10 Dias de Clamor e 365 dias de Oração",
    info: "Junte-se a nós nesta jornada de fé e comunhão com Deus.",
    buttonText: "Acesse",
    buttonLink: "/10-dias-oracao"
  }
];

// Imagem de fallback caso as imagens do slide não existam
const fallbackImage = "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  size?: "large" | "medium" | "small";
  useSlideshow?: boolean; // Nova prop para controlar se usa slideshow ou hero normal
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = "/images/church-background.jpg",
  buttonText,
  buttonLink,
  size = "large",
  useSlideshow = false, // Por padrão, não usa slideshow
}: HeroProps) {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Troca automática de slides a cada 6 segundos
  useEffect(() => {
    if (!useSlideshow) return; // Só configura o intervalo se estiver usando slideshow

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % churchSlides.length);
    }, 13000);
    return () => clearInterval(interval);
  }, [useSlideshow]);

  // Navegação manual de slides
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % churchSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + churchSlides.length) % churchSlides.length);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("content-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determina a altura com base no tamanho
  const heightClass = {
    large: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  }[size];

  // Renderização do Hero Normal
  if (!useSlideshow) {
    return (
      <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
              e.currentTarget.onerror = null;
            }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight font-adventist">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed font-adventist">
              {subtitle}
            </p>
          )}

          {buttonText && buttonLink && (
            <div className="mt-8">
              <Button
                asChild
                className="bg-church-lightBlue hover:bg-church-lightBlue/90 text-white font-bold px-8 py-6 font-adventist transform transition-transform hover:scale-105 hover:shadow-2xl border-2 border-white/20 backdrop-blur-sm"
              >
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            </div>
          )}

          {size === "large" && (
            <button
              onClick={handleScrollDown}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors"
              aria-label="Rolar para baixo"
            >
              <ChevronDown className="h-8 w-8 animate-bounce" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Renderização do Slideshow (só executa se useSlideshow for true)
  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Slides */}
      {churchSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
                e.currentTarget.onerror = null;
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center text-white px-12 md:px-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-adventist drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl whitespace-pre-line drop-shadow-lg font-adventist">
                {slide.info}
              </p>

              {/* Button if defined */}
              {slide.buttonText && slide.buttonLink && (
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-church-lightBlue hover:bg-church-lightBlue/90 text-white font-bold px-8 py-6 font-adventist transform transition-transform hover:scale-105 hover:shadow-2xl border-2 border-white/20 backdrop-blur-sm"
                  >
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Controles de navegação */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicadores de slides */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {churchSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {size === "large" && (
        <button
          onClick={handleScrollDown}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center text-white/80 hover:text-white transition-colors z-20"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      )}
    </div>
  );
}
