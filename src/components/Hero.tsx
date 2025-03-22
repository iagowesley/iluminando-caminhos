
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  size?: "large" | "medium" | "small";
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&q=75&fit=crop&w=2000",
  buttonText,
  buttonLink,
  size = "large",
}: HeroProps) {
  
  // Determine the height of the hero based on the size prop
  const heightClass = {
    large: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  }[size];

  const handleScrollDown = () => {
    const nextSection = document.getElementById("content-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="slide-up animate-delay-200 mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <div className="slide-up animate-delay-400 mt-8">
            <Button 
              asChild
              className="bg-church-accent text-black hover:bg-church-accent/90 font-medium px-6 py-3 text-base rounded-md"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>
        )}
        
        {size === "large" && (
          <button 
            onClick={handleScrollDown}
            className="slide-up animate-delay-600 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Saiba mais</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        )}
      </div>
    </div>
  );
}
