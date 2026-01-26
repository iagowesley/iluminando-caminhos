import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { PlayCircle, Music as MusicIcon, Users, Calendar, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface MusicGroupProps {
  title: string;
  description: string;
  image: string;
  schedule: string;
  director: string;
}

interface SongProps {
  title: string;
  artist: string;
  album?: string;
  audioLink?: string;
  videoLink?: string;
  thumbnail: string;
}

const musicGroups: MusicGroupProps[] = [
  {
    title: "Coral Jovem",
    description: "O Coral Jovem da IASD Central Russas é composto por mais de 10 membros dedicados ao louvor. O repertório inclui hinos tradicionais, músicas sacras contemporâneas e arranjos especiais para datas comemorativas.",
    image: "/images/coral.jpg",
    schedule: "Ensaios: Quartas, 19h30 e Sábados, 15h",
    director: "Roberta Santos"
  }
];

const featuredSongs: SongProps[] = [
  {
    title: "Quão Grande é o Meu Deus",
    artist: "Coral IASD Central Russas",
    album: "Momentos de Louvor",
    audioLink: "/audio/quao-grande.mp3",
    videoLink: "https://www.youtube.com/watch?v=example1",
    thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Grande é o Senhor",
    artist: "Grupo Jovem de Louvor",
    audioLink: "/audio/grande-senhor.mp3",
    videoLink: "https://www.youtube.com/watch?v=example2",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Não Há Deus Maior",
    artist: "Quarteto Masculino",
    album: "Vozes para Cristo",
    audioLink: "/audio/nao-ha-deus-maior.mp3",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Teu Santo Nome",
    artist: "Coral IASD Central Russas",
    album: "Momentos de Louvor",
    videoLink: "https://www.youtube.com/watch?v=example3",
    thumbnail: "https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const upcomingEvents = [
  {
    title: "Concerto de Páscoa",
    date: "12 de Abril, 2024",
    description: "Apresentação especial do Coral Principal com o tema 'Da Cruz à Coroa'."
  },
  {
    title: "Tarde de Louvor",
    date: "18 de Maio, 2024",
    description: "Programa musical com todos os grupos da igreja e convidados especiais."
  },
  {
    title: "Cantata de Natal",
    date: "21 de Dezembro, 2024",
    description: "Apresentação anual da Cantata de Natal com participação do coral e orquestra."
  }
];

export default function Music() {
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  return (
    <PageLayout>
      <Hero
        title="Ministério de Música"
        subtitle="Adorando a Deus através da música e louvores"
        backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Nossos grupos musicais"
            subtitle="Conheça os talentos que enriquecem nossa adoração"
            accent={true}
            ornate={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicGroups.map((group, index) => (
              <div key={index} className="bg-white shadow-md overflow-hidden">
                <div className="h-48">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-adventist text-church-blue mb-3">{group.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{group.description}</p>

                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="text-sm text-gray-600 flex items-center mb-2">
                      <Users className="h-4 w-4 mr-2 text-church-blue" />
                      <span>Direção: {group.director}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-church-blue" />
                      <span>Ensaios: {group.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Músicas em Destaque"
            subtitle="Ouça nossas gravações e apresentações"
            accent={true}
          />

          <div className="mt-12 max-w-4xl mx-auto">
            {featuredSongs.map((song, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row bg-white shadow-md mb-8 ${selectedSong === index ? 'border-l-4 border-church-blue' : ''
                  }`}
              >
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-full h-full object-cover"
                  />
                  {song.videoLink && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                      onClick={() => setSelectedSong(selectedSong === index ? null : index)}
                    >
                      <PlayCircle className="h-16 w-16 text-white opacity-90" />
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-adventist text-church-blue mb-1">{song.title}</h3>
                  <p className="text-gray-700 mb-3">{song.artist}</p>
                  {song.album && (
                    <p className="text-sm text-gray-600 mb-4">Álbum: {song.album}</p>
                  )}

                  <div className="flex flex-wrap gap-3 mt-4">
                    {song.audioLink && (
                      <Button asChild variant="churchOutline" size="sm" className="flex items-center">
                        <a href={song.audioLink} target="_blank" rel="noopener noreferrer">
                          <MusicIcon className="mr-2 h-4 w-4" />
                          Ouvir
                        </a>
                      </Button>
                    )}
                    {song.videoLink && (
                      <Button
                        variant={selectedSong === index ? "church" : "churchOutline"}
                        size="sm"
                        className="flex items-center"
                        onClick={() => setSelectedSong(selectedSong === index ? null : index)}
                      >
                        <PlayCircle className="mr-2 h-4 w-4" />
                        {selectedSong === index ? 'Fechar Vídeo' : 'Assistir Vídeo'}
                      </Button>
                    )}
                  </div>

                  {selectedSong === index && song.videoLink && (
                    <div className="mt-6 aspect-video">
                      <iframe
                        src={song.videoLink}
                        title={song.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <SectionTitle
                  title="Eventos Musicais"
                  subtitle="Próximas apresentações"
                  accent={true}
                />

                <div className="mt-8 space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-church-blue pl-4">
                      <h3 className="text-lg font-adventist text-church-blue">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  ))}

                  <div className="mt-8">
                    <Button asChild variant="church">
                      <Link to="/eventos">Ver Todos os Eventos</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle
                  title="Participe"
                  subtitle="Use seus talentos musicais"
                  accent={true}
                />

                <div className="mt-8">
                  <p className="text-gray-700 mb-4">
                    Gostaria de participar do ministério de música? Temos oportunidades para
                    cantores, instrumentistas e técnicos de som.
                  </p>

                  <p className="text-gray-700 mb-8">
                    Entre em contato conosco para obter mais informações sobre como
                    participar dos ensaios e conhecer os requisitos para cada grupo musical.
                  </p>

                  <Button asChild variant="church">
                    <Link to="/contato#musica">Quero Participar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 