import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { supabase, Leader } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

const LeaderCard = ({ name, role, image, shortDescription }: Leader) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 rounded-2xl">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm opacity-90">{role}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm">{shortDescription}</p>
      </CardContent>
    </Card>
  );
};

export default function Leadership() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaders() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('leaders')
          .select('*')
          .order('id', { ascending: true });
        
        if (error) {
          throw error;
        }
        
        setLeaders(data || []);
      } catch (error) {
        console.error('Erro ao buscar líderes:', error);
        setError('Não foi possível carregar os líderes. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchLeaders();
  }, []);

  return (
    <PageLayout>
      <Hero 
        title="Nossa Liderança"
        subtitle="Conheça os líderes que servem nossa igreja"
        backgroundImage="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />

      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Líderes da Igreja"
            subtitle="Dedicados a servir a Deus e à comunidade"
            accent={true}
            ornate={true}
          />
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-church-blue animate-spin" />
              <span className="ml-2 text-church-blue">Carregando líderes...</span>
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
          ) : leaders.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Não há líderes cadastrados no momento.</p>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader) => (
                <LeaderCard key={leader.id} {...leader} />
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Nossa estrutura de liderança segue o modelo bíblico e as orientações da Igreja Adventista do Sétimo Dia mundial. Todos os líderes são eleitos pela igreja local e trabalham em conjunto para o crescimento e desenvolvimento espiritual da congregação.
              </p>
              <Button asChild variant="church" size="church" className="rounded-full w-full sm:w-auto text-sm sm:text-base px-3 py-2">
                <Link to="/contato">Entre em contato com a liderança</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 