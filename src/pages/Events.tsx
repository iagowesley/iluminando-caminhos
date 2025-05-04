import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ChevronDown, X, Loader2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { supabase, Event } from "@/lib/supabase";

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
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [modalEvent, setModalEvent] = useState<Event | null>(null);
  
  // Carregar eventos do Supabase
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        setEvents(data || []);
      } catch (err) {
        console.error('Erro ao buscar eventos:', err);
        setError('Não foi possível carregar os eventos. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchEvents();
  }, []);
  
  const toggleEvent = (id: number) => {
    if (expandedEvent === id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(id);
    }
  };

  const openEventModal = (event: Event) => {
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
        title="Eventos"
        subtitle="Confira nossos próximos eventos e atividades especiais"
        backgroundImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
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
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
              <span className="ml-2">Carregando eventos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Tentar Novamente
              </Button>
            </div>
          ) : featuredEvents.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Não há eventos em destaque no momento.</p>
            </div>
          ) : (
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
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    
                    {event.audience && (
                      <div className="mb-4 inline-flex items-center bg-church-blue/10 text-church-blue px-3 py-1 rounded-full text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {event.audience}
                      </div>
                    )}
                    
                    <p className="text-gray-600 line-clamp-3">{event.description}</p>
                    
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => openEventModal(event)}
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Todos os Eventos */}
      <section className="py-16 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-church-blue mb-6">Todos os Eventos</h2>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === category.id ? 
                    'bg-church-blue text-white' : 
                    'bg-white hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
              <span className="ml-2">Carregando eventos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-red-500">{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Tentar Novamente
              </Button>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500">Não há eventos {activeCategory !== "todos" ? `na categoria ${categories.find(c => c.id === activeCategory)?.label}` : ''} no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvents.map(event => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-church-blue">{event.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mt-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                            {event.audience && (
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {event.audience}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className={`text-gray-600 ${expandedEvent === event.id ? '' : 'line-clamp-2'}`}>
                          {event.description}
                        </p>
                        {event.description.length > 150 && (
                          <button
                            onClick={() => toggleEvent(event.id || 0)}
                            className="text-church-blue text-sm font-medium mt-2 flex items-center hover:underline"
                          >
                            {expandedEvent === event.id ? 'Mostrar menos' : 'Mostrar mais'}
                            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${expandedEvent === event.id ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button 
                          onClick={() => openEventModal(event)}
                          variant="church"
                          size="sm"
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Evento */}
      {modalEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20" onClick={closeEventModal}>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={closeEventModal}></div>
          <div 
            className="relative bg-white rounded-xl max-w-3xl mx-auto overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeEventModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img 
                src={modalEvent.image} 
                alt={modalEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <h2 className="text-white text-2xl font-bold">{modalEvent.title}</h2>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium capitalize bg-white/20 text-white mt-2">
                  {modalEvent.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-church-blue mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Data</p>
                      <p className="font-medium">{modalEvent.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-church-blue mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Horário</p>
                      <p className="font-medium">{modalEvent.time}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-church-blue mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Local</p>
                      <p className="font-medium">{modalEvent.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-church-blue mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Público-alvo</p>
                      <p className="font-medium">{modalEvent.audience || "Todos"}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Sobre o Evento</h3>
                <p className="text-gray-600">{modalEvent.description}</p>
              </div>
              
              <div className="flex justify-center">
                <Link to="/contato">
                  <Button className="w-full sm:w-auto">
                    Mais Informações
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
} 