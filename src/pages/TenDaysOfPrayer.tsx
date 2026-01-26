import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import {
  Calendar,
  Download,
  Video,
  Heart,
  BookOpen,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TenDaysOfPrayer() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="10 Dias de Oração"
        subtitle="Uma jornada de fé, comunhão e transformação através do Espírito Santo"
        backgroundImage="/images/topo-10dias-pt.jpg"
        size="medium"
      />

      <section className="py-16 px-6" id="content-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionTitle
              title="Sobre o projeto"
              subtitle="Uma experiência transformadora de comunhão com Deus"
            />
          </div>

          <div className="prose prose-lg max-w-none text-church-darkBlue leading-relaxed">
            <p className="text-xl mb-6 text-center">
              O projeto <strong>"10 Dias de Oração"</strong> incentiva os
              membros a dedicarem mais tempo à oração, buscando fortalecimento
              espiritual pessoal e coletivo. No primeiro sábado, realiza-se um
              programa especial com <strong>10 horas de jejum</strong>,
              destacando a comunhão com Deus.
            </p>

            <p className="text-lg mb-8 text-center">
              O objetivo é promover reavivamento espiritual, fortalecer a fé e
              incentivar a intercessão por familiares, amigos e pela comunidade,
              além de promover a união entre os membros da igreja.
            </p>
          </div>
        </div>
      </section>

      {/* Data e Tema */}
      <section className="py-12 px-6 bg-church-lightBlue/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-church-lightBlue">
              <Calendar className="w-12 h-12 text-church-lightBlue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-church-darkBlue mb-3 font-adventist">
                Data
              </h3>
              <p className="text-3xl font-bold text-church-lightBlue mb-2">
                19 a 28 de Fevereiro
              </p>
              <p className="text-church-darkBlue">
                Jejum, oração e estudos diários
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-church-gold">
              <BookOpen className="w-12 h-12 text-church-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-church-darkBlue mb-3 font-adventist">
                Tema 2026
              </h3>
              <p className="text-xl font-bold text-church-darkBlue mb-2">
                "O Espírito Santo e o Tempo do Fim"
              </p>
              <p className="text-church-darkBlue">
                Desenvolvimento de um relacionamento profundo com a terceira
                pessoa da Divindade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <SectionTitle
              title="Assista ao vídeo"
              subtitle="Conheça mais sobre o projeto 10 Dias de Oração"
            />
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VwA2YWkr1Mo"
              title="10 Dias de Oração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Sobre o Material */}
      <section className="py-12 px-6 bg-gradient-to-r from-church-lightBlue/5 to-church-gold/5">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-church-darkBlue mb-4 font-adventist text-center">
              Sobre o material de estudo
            </h3>
            <p className="text-lg text-church-darkBlue leading-relaxed">
              A apostila se propõe a ser um guia para um período de reflexão e
              oração, com foco no desenvolvimento de um relacionamento profundo
              e pessoal com a terceira pessoa da Divindade. O material apresenta
              um convite inspirador à ação, incentivando a busca diária pelo
              Espírito Santo na vida de cada pessoa e, consequentemente, da
              igreja. O conteúdo enfatiza que a vida cristã não se resume a uma
              simples mudança, mas representa uma{" "}
              <strong>transformação da natureza</strong>, algo que só pode ser
              alcançado por meio do poder do Espírio Santo.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Passos */}
      <section className="py-16 px-6 bg-gradient-to-b from-church-darkBlue to-church-lightBlue text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-adventist">
              10 passos para participar
            </h2>
            <p className="text-xl text-white/90">
              Siga estes passos e faça parte desta jornada espiritual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Passo 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Orar
                  </h3>
                  <p className="text-white/90">
                    Ore pelo projeto, pelos familiares que estão afastados de
                    Deus e pelas pessoas interessadas em estudar a Bíblia.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Jejum
                  </h3>
                  <p className="text-white/90">
                    Participe com sua família no programa especial de 10 dias de
                    oração e 10 horas de jejum.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Espaço de Oração
                  </h3>
                  <p className="text-white/90">
                    Crie um espaço especial em sua casa e, diariamente,
                    apresente a Deus as intenções propostas na revista. Mantenha
                    os nomes de amigos e familiares no altar de oração.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Visitar
                  </h3>
                  <p className="text-white/90">
                    Realize visitas aos familiares pelos quais você está orando
                    e convide-os para a programação de sábado, 22 de março.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Hora de Orar
                  </h3>
                  <p className="text-white/90">
                    Descubra o projeto Hora de Orar e participe deste movimento
                    de oração através do aplicativo 7Me, disponível em
                    adv.st/7me ou na sua loja de aplicativos.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Materiais
                  </h3>
                  <p className="text-white/90">
                    Busque adquirir a revista do projeto para adultos e os
                    materiais elaborados pelo Ministério da Criança e do
                    Adolescente junto ao pastor distrital ou ao ancião, ou faça
                    o download da versão digital disponível no site.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 7 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">Ler</h3>
                  <p className="text-white/90">
                    Leia o material diariamente com sua família durante o culto
                    familiar, incentivando os filhos a participarem das
                    atividades propostas nas revistas infantil e adolescente.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 8 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  8
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Missão
                  </h3>
                  <p className="text-white/90">
                    Realize diariamente as atividades missionárias propostas na
                    revista, utilizando o WhatsApp ou outras redes sociais.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 9 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  9
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Convidar
                  </h3>
                  <p className="text-white/90">
                    Convide um familiar ou amigo para almoçar em sua casa e crie
                    um ambiente acolhedor.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 10 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-church-gold rounded-full flex items-center justify-center font-bold text-xl">
                  10
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-adventist">
                    Continue a Jornada
                  </h3>
                  <p className="text-white/90">
                    Nossa missão vai além dos 10 dias de oração. Deus nos chama
                    a uma vida de comunhão e serviço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-church-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <Clock className="w-16 h-16 text-church-lightBlue mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-church-darkBlue mb-4 font-adventist">
            365 Dias de Oração
          </h2>
          <p className="text-xl text-church-darkBlue mb-8 leading-relaxed">
            Após os 10 dias, continuamos nossa jornada com 365 dias de oração. A
            transformação espiritual é um compromisso diário com Deus.
          </p>
          <Button
            asChild
            className="bg-church-lightBlue hover:bg-church-lightBlue/90 text-white font-bold px-8 py-6 text-lg"
          >
            <a href="/contato">Entre em Contato</a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
