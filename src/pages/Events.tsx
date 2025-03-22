import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ChevronDown, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface EventProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  audience?: string;
}

const events: EventProps[] = [
  {
    id: 1,
    title: "Semana de Oração",
    date: "10-17 de Abril, 2024",
    time: "19h30",
    location: "Igreja Central",
    description: "Uma semana especial de renovação espiritual com mensagens inspiradoras e momentos de intercessão. Cada noite terá um tema específico abordando aspectos da vida cristã.",
    category: "espiritual",
    image: "/images/events/prayer-week.jpg",
    featured: true,
    audience: "Todos"
  },
  {
    id: 2,
    title: "Tarde de Louvor",
    date: "18 de Maio, 2024",
    time: "16h00",
    location: "Igreja Central",
    description: "Uma tarde especial dedicada ao louvor e adoração, com participação de todos os grupos musicais da igreja e convidados especiais. Venha participar deste momento de celebração!",
    category: "musical",
    image: "/images/events/praise.jpg",
    featured: true,
    audience: "Todos"
  },
  {
    id: 3,
    title: "Retiro Jovem",
    date: "14-16 de Junho, 2024",
    time: "Início: 18h (Sexta)",
    location: "Acampamento Vale das Águas",
    description: "Um fim de semana de comunhão, amizade e crescimento espiritual para jovens e adolescentes. Programação inclui estudos bíblicos, atividades recreativas, música e muito mais.",
    category: "juventude",
    image: "/images/events/youth-retreat.jpg",
    audience: "Jovens e Adolescentes"
  },
  {
    id: 4,
    title: "Feira de Saúde",
    date: "23 de Julho, 2024",
    time: "08h às 17h",
    location: "Praça Central da Cidade",
    description: "Evento comunitário oferecendo exames básicos de saúde, orientações sobre estilo de vida saudável, atividades físicas, culinária vegetariana e atendimento médico gratuito.",
    category: "comunidade",
    image: "/images/events/health-fair.jpg",
    featured: true,
    audience: "Comunidade"
  },
  {
    id: 5,
    title: "Escola Cristã de Férias",
    date: "8-12 de Julho, 2024",
    time: "14h às 17h",
    location: "Igreja Central",
    description: "Programa especial para crianças durante as férias escolares com histórias bíblicas, músicas, brincadeiras, artes e lanche. Tema deste ano: 'Aventuras na Bíblia'.",
    category: "infantil",
    image: "/images/events/vacation-bible-school.jpg",
    audience: "Crianças de 4 a 12 anos"
  },
  {
    id: 6,
    title: "Congresso da Família",
    date: "25-27 de Agosto, 2024",
    time: "Sexta 19h, Sábado 9h, Domingo 10h",
    location: "Auditório Municipal",
    description: "Palestras e workshops sobre relacionamento familiar, educação de filhos, finanças do lar e espiritualidade na família. Com a participação de oradores especialistas na área.",
    category: "família",
    image: "/images/events/family-congress.jpg",
    featured: true,
    audience: "Famílias"
  },
  {
    id: 7,
    title: "Dia dos Aventureiros",
    date: "15 de Setembro, 2024",
    time: "9h às 16h",
    location: "Igreja Central",
    description: "Celebração especial do Clube de Aventureiros com apresentações, investiduras, e atividades especiais para as crianças e seus familiares.",
    category: "infantil",
    image: "/images/events/adventurers-day.jpg",
    audience: "Aventureiros e Familiares"
  },
  {
    id: 8,
    title: "Evangelismo de Primavera",
    date: "1-8 de Outubro, 2024",
    time: "19h30",
    location: "Igreja Central",
    description: "Série de estudos bíblicos profundos sobre profecias e verdades bíblicas para os últimos dias. Ideal para quem deseja aprofundar conhecimentos ou conhecer melhor as crenças adventistas.",
    category: "espiritual",
    image: "/images/events/evangelism.jpg",
    audience: "Todos"
  },
  {
    id: 9,
    title: "Cantata de Natal",
    date: "21 de Dezembro, 2024",
    time: "19h00",
    location: "Igreja Central",
    description: "Apresentação musical especial de Natal com coral e orquestra, narrando a história do nascimento de Jesus através de belas músicas e encenações.",
    category: "musical",
    image: "/images/events/christmas-cantata.jpg",
    featured: true,
    audience: "Todos"
  }
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "espiritual", label: "Espiritual" },
  { id: "musical", label: "Musical" },
  { id: "juventude", label: "Juventude" },
  { id: "infantil", label: "Infantil" },
  { id: "família", label: "Família" },
  { id: "comunidade", label: "Comunidade" }
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [modalEvent, setModalEvent] = useState<EventProps | null>(null);
  
  const toggleEvent = (id: number) => {
    if (expandedEvent === id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(id);
    }
  };

  const openEventModal = (event: EventProps) => {
    setModalEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeEventModal = () => {
    setModalEvent(null);
    document.body.style.overflow = "auto";
  };
  
  // Filtrando eventos pela categoria ativa
  const filteredEvents = activeCategory === "todos" 
    ? events 
    : events.filter(event => event.category === activeCategory);
  
  // Eventos em destaque
  const featuredEvents = events.filter(event => event.featured);
  
  return (
    <PageLayout>
      <Hero 
        title="Nossos Eventos"
        subtitle="Confira a programação e atividades de nossa igreja"
        backgroundImage="/images/events-background.jpg"
        size="medium"
      />

      {/* Eventos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Eventos em Destaque"
            subtitle="Não perca estas programações especiais"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="group bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-serif text-white">{event.title}</h3>
                    <p className="text-white/80 text-sm">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-3">{event.description}</p>
                  <div className="mt-4">
                    <Button 
                      variant="church" 
                      className="w-full"
                      onClick={() => openEventModal(event)}
                    >
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lista Completa de Eventos */}
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Calendário de Eventos"
            subtitle="Confira todos os eventos programados"
            accent={true}
          />
          
          {/* Filtros por categoria */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "church" : "churchOutline"}
                onClick={() => setActiveCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Lista de eventos */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="bg-white shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-serif text-church-blue mb-2">{event.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-church-blue" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-church-blue" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-church-blue" />
                          <span>{event.location}</span>
                        </div>
                        {event.audience && (
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-church-blue" />
                            <span>{event.audience}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-700 line-clamp-2">{event.description}</p>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <Button
                          variant="churchOutline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => openEventModal(event)}
                        >
                          Detalhes do Evento
                        </Button>
                        
                        <span className="text-xs px-3 py-1 bg-church-gray text-church-blue font-medium capitalize">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600 mb-4">
                  Nenhum evento encontrado nesta categoria.
                </p>
                <Button 
                  variant="churchOutline" 
                  onClick={() => setActiveCategory("todos")}
                >
                  Ver Todos os Eventos
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Seção de inscrição para notificações */}
      <section className="py-16 bg-church-blue text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-4">Fique por dentro de nossos eventos</h3>
            <p className="text-white/90 mb-8">
              Receba notificações sobre próximos eventos e atividades da igreja.
              Não perca nenhuma programação especial!
            </p>
            <div className="flex justify-center">
              <Button asChild variant="churchGold" size="church">
                <Link to="/contato#newsletter">Inscreva-se para Notificações</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Evento */}
      {modalEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 md:p-6">
          <div 
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={modalEvent.image} 
                alt={modalEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/20"></div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeEventModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-1">{modalEvent.title}</h2>
                <p className="text-white/90 text-lg">{modalEvent.date}</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-6 mb-6 bg-church-gray/30 p-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-church-blue" />
                  <div>
                    <p className="text-sm text-gray-500">Horário</p>
                    <p className="font-medium">{modalEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-church-blue" />
                  <div>
                    <p className="text-sm text-gray-500">Local</p>
                    <p className="font-medium">{modalEvent.location}</p>
                  </div>
                </div>
                {modalEvent.audience && (
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-church-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Público</p>
                      <p className="font-medium">{modalEvent.audience}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif text-church-blue mb-3">Descrição</h3>
                <p className="text-gray-700 whitespace-pre-line">{modalEvent.description}</p>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <Button asChild variant="church" size="church">
                  <Link to={`/contato#evento-${modalEvent.id}`}>Participar deste Evento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
} 