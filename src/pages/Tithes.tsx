import { useEffect } from "react";
import { ArrowRight, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

export default function Tithes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Dízimos e Ofertas" 
            subtitle="Contribua para a obra de Deus"
            description="Uma forma de demonstrar gratidão e sustentar a missão"
            alignment="center"
            decorator={true}
          />

          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-church-blue mb-4">O Que é o Dízimo?</h3>
              <p className="text-gray-700 mb-4">
                O dízimo é o reconhecimento de que Deus é o dono de tudo. É a devolução de 10% de nossa renda como um ato de adoração e gratidão. 
                Na Bíblia, em Malaquias 3:10, lemos: "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa; e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu e não derramar sobre vós bênção sem medida."
              </p>
              <p className="text-gray-700 mb-4">
                O dízimo é utilizado para sustentar o ministério da Igreja, incluindo os pastores, líderes, manutenção do templo e administração da obra.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-church-blue mb-4">O Que São as Ofertas?</h3>
              <p className="text-gray-700 mb-4">
                As ofertas são contribuições voluntárias além do dízimo. Elas demonstram nossa gratidão a Deus e são usadas para projetos específicos, 
                como evangelismo, construções, missões e assistência social. Em 2 Coríntios 9:7 lemos: "Cada um contribua segundo tiver proposto no coração, não com tristeza ou por necessidade; porque Deus ama a quem dá com alegria."
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-church-blue mb-4">Benefícios Espirituais</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reconhecimento da soberania divina sobre tudo</li>
                <li>Participação direta na missão de proclamar o evangelho</li>
                <li>Desenvolvimento de confiança em Deus como nosso provedor</li>
                <li>Formação de caráter e generosidade</li>
                <li>Bênçãos prometidas por Deus aos fiéis dizimistas</li>
              </ul>
            </div>

            <div className="text-center mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contribua agora mesmo para a obra de Deus!</h3>
              <a 
                href="https://giving.7me.app/guest-donation/church/fa6d3669-cc8a-4f33-8eae-a68136df3af9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-church-blue text-white text-lg font-semibold hover:bg-church-darkBlue transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2 h-5 w-5" />
                Quero Contribuir
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <p className="text-gray-500 mt-4 text-sm">
                Você será redirecionado para uma plataforma segura de pagamento.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-church-gray p-6">
              <h3 className="text-xl font-bold text-church-blue mb-4">Perguntas Frequentes</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Como sei que minha contribuição será usada corretamente?</h4>
                  <p className="text-gray-700">
                    A igreja mantém uma gestão transparente dos recursos. Periodicamente, são apresentados relatórios financeiros aos membros, e todas as contas são auditadas regularmente.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Posso contribuir mesmo não sendo membro da igreja?</h4>
                  <p className="text-gray-700">
                    Sim! Qualquer pessoa que deseja apoiar a obra de Deus pode contribuir com ofertas. A plataforma está aberta para todos.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">A plataforma de pagamento é segura?</h4>
                  <p className="text-gray-700">
                    Sim, utilizamos uma plataforma de pagamento certificada e segura, que protege todas as suas informações pessoais e financeiras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 