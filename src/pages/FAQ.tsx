import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    question: "O que são os Adventistas do Sétimo Dia?",
    answer: "Os Adventistas do Sétimo Dia são uma denominação cristã protestante global que se distingue pela observância do sábado (sétimo dia) como dia de descanso e adoração, e pela expectativa na segunda vinda (advento) de Jesus Cristo. Fundada oficialmente em 1863, a igreja hoje tem mais de 21 milhões de membros em todo o mundo, operando escolas, hospitais e outras instituições.",
    category: "geral"
  },
  {
    question: "Por que os Adventistas guardam o sábado em vez do domingo?",
    answer: "Os Adventistas guardam o sábado (do pôr do sol de sexta-feira até o pôr do sol de sábado) porque acreditam que este é o dia de descanso bíblico estabelecido por Deus na criação (Gênesis 2:2-3) e reafirmado nos Dez Mandamentos (Êxodo 20:8-11). Consideramos que o sábado nunca foi mudado nas Escrituras e continua sendo um memorial da criação e um sinal do relacionamento de Deus com Seu povo.",
    category: "crencas"
  },
  {
    question: "Como os Adventistas veem a saúde e a alimentação?",
    answer: "Os Adventistas promovem um estilo de vida saudável integral, vendo o corpo como templo do Espírito Santo. Muitos seguem uma dieta vegetariana ou vegana, embora isso não seja um requisito. A igreja desaconselha o consumo de alimentos considerados impuros pela Bíblia (Levítico 11) e abstém-se de álcool, tabaco e outras substâncias prejudiciais. Esta ênfase na saúde é vista como parte da mordomia cristã e da restauração completa do ser humano.",
    category: "estilo-de-vida"
  },
  {
    question: "O que os Adventistas acreditam sobre a vida após a morte?",
    answer: "Os Adventistas acreditam que a morte é um estado de inconsciência (frequentemente comparado ao sono na Bíblia) até a ressurreição. Não cremos na imortalidade natural da alma, mas que a vida eterna é um dom de Deus através de Cristo. Na volta de Jesus, os justos mortos ressuscitarão e, junto com os justos vivos, receberão a imortalidade. Após o milênio, haverá a ressurreição dos ímpios, seguida do juízo final e da recriação da Terra.",
    category: "crencas"
  },
  {
    question: "Como posso me tornar membro da Igreja Adventista?",
    answer: "Para se tornar membro, recomendamos: 1) Frequentar os cultos e conhecer a comunidade; 2) Participar de estudos bíblicos para compreender as crenças fundamentais; 3) Quando convencido das verdades bíblicas e sentir o desejo de se comprometer, solicitar o batismo por imersão. O batismo é precedido por uma profissão de fé nas crenças fundamentais da igreja. Também aceitamos por profissão de fé pessoas já batizadas por imersão em outras denominações cristãs que aceitem as doutrinas adventistas.",
    category: "membresia"
  },
  {
    question: "Quais são as principais doutrinas da Igreja Adventista?",
    answer: "A igreja tem 28 crenças fundamentais, incluindo: a inspiração da Bíblia; a Trindade; a criação; a natureza humana e o pecado; a salvação através de Jesus Cristo; a lei de Deus e o sábado; o dom de profecia; a segunda vinda literal de Jesus; a ressurreição; o milênio e o fim do pecado; e a nova terra. Todas estas doutrinas são baseadas exclusivamente na Bíblia Sagrada como autoridade final de fé e prática.",
    category: "crencas"
  },
  {
    question: "Os Adventistas participam de atividades ecumênicas?",
    answer: "Os Adventistas do Sétimo Dia mantêm relacionamentos cordiais com outras denominações cristãs e participam de diálogos inter-religiosos para promover compreensão mútua. No entanto, a igreja geralmente não participa de movimentos ecumênicos formais que possam comprometer suas crenças distintivas. Valorizamos a liberdade religiosa e o direito de cada pessoa seguir sua consciência em questões de fé.",
    category: "relacionamentos"
  },
  {
    question: "Como a Igreja Adventista é organizada?",
    answer: "A igreja segue uma estrutura representativa em quatro níveis: 1) As igrejas locais; 2) As Associações/Missões (grupo de igrejas numa região); 3) As Uniões (grupo de Associações); 4) A Conferência Geral (sede mundial) com suas Divisões mundiais. Decisões importantes são tomadas por comissões eleitas em cada nível, combinando liderança pastoral e participação leiga.",
    category: "organizacao"
  },
  {
    question: "Os Adventistas acreditam em Ellen G. White como profetisa?",
    answer: "Sim, os Adventistas reconhecem Ellen G. White (1827-1915) como tendo o dom de profecia. Seus escritos são considerados uma fonte de orientação, conselho e instrução, mas sempre subordinados à autoridade suprema da Bíblia. Acreditamos que seu ministério cumpre a predição bíblica de manifestação do dom profético nos últimos dias (Joel 2:28-29; Apocalipse 12:17; 19:10).",
    category: "crencas"
  },
  {
    question: "A Igreja Adventista proíbe joias e maquiagem?",
    answer: "A igreja ensina moderação e simplicidade cristã em vez de proibições específicas. Baseando-se em textos como 1 Pedro 3:3-4, a ênfase está no adorno interior do caráter em vez de ornamentos externos. Cada membro é encorajado a tomar decisões conscientes baseadas em princípios bíblicos de modéstia, simplicidade e boa mordomia, respeitando diferenças culturais e convicções pessoais.",
    category: "estilo-de-vida"
  },
  {
    question: "Como a Igreja Adventista financia seus ministérios?",
    answer: "A obra da igreja é financiada principalmente através de dízimos (10% da renda dos membros) e ofertas voluntárias. Os dízimos são usados principalmente para o sustento do ministério pastoral e evangelismo, enquanto as ofertas apoiam projetos locais, regionais e mundiais. A igreja mantém um sistema financeiro transparente com auditorias regulares em todos os níveis organizacionais.",
    category: "organizacao"
  },
  {
    question: "Por que há tantas igrejas cristãs diferentes?",
    answer: "A diversidade de denominações cristãs desenvolveu-se ao longo dos séculos devido a diferenças de interpretação bíblica, tradições culturais, contextos históricos e ênfases teológicas. Embora essa diversidade possa parecer confusa, ela reflete a complexidade da experiência humana com a fé. Os Adventistas acreditam que Deus tem Seus filhos em todas as igrejas, mas também cremos que fomos chamados a proclamar verdades bíblicas específicas relevantes para o tempo do fim.",
    category: "geral"
  }
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "geral", label: "Perguntas Gerais" },
  { id: "crencas", label: "Crenças e Doutrinas" },
  { id: "estilo-de-vida", label: "Estilo de Vida" },
  { id: "membresia", label: "Membresia" },
  { id: "organizacao", label: "Organização da Igreja" },
  { id: "relacionamentos", label: "Relacionamentos" }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleQuestion = (question: string) => {
    if (expandedQuestion === question) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(question);
    }
  };
  
  const filteredFaqs = faqs
    .filter(faq => 
      (activeCategory === "todos" || faq.category === activeCategory) &&
      (searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  
  return (
    <PageLayout>
      <Hero 
        title="Perguntas Frequentes"
        subtitle="Esclarecendo suas dúvidas sobre nossa fé e prática"
        backgroundImage="/images/faq-background.jpg"
        size="medium"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Encontre Respostas"
            subtitle="Busque por tópicos de seu interesse"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative mb-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por palavra-chave..."
                className="block w-full border border-gray-300 bg-white pl-10 pr-4 py-3 focus:outline-none focus:border-church-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
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
              
              <div className="space-y-6">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 bg-white shadow-sm"
                    >
                      <button
                        className="flex justify-between items-center w-full text-left p-5"
                        onClick={() => toggleQuestion(faq.question)}
                      >
                        <h3 className="font-medium text-church-blue">{faq.question}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-church-blue transform transition-transform ${
                            expandedQuestion === faq.question ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedQuestion === faq.question && (
                        <div className="p-5 pt-0">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Nenhuma pergunta encontrada com esses critérios.</p>
                    <Button 
                      variant="churchOutline" 
                      onClick={() => {
                        setActiveCategory("todos");
                        setSearchQuery("");
                      }}
                    >
                      Ver Todas as Perguntas
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center bg-church-gray p-8">
              <h3 className="text-xl font-serif text-church-blue mb-4">Não encontrou sua pergunta?</h3>
              <p className="text-gray-700 mb-6">
                Se você tem uma pergunta que não está listada aqui, ficaremos felizes em respondê-la diretamente.
              </p>
              <Button asChild variant="church">
                <Link to="/contato#perguntas">Enviar Pergunta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 