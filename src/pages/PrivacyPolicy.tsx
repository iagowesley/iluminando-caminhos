import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import { Shield, Check } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <Hero 
        title="Política de Privacidade"
        subtitle="Como protegemos seus dados e informações pessoais"
        backgroundImage="https://images.unsplash.com/photo-1457694716743-eb419114c894?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        size="medium"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-gray-700 mb-6">
                A sua privacidade é importante para nós. É política da Igreja Adventista do Sétimo Dia – Central de Russas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site IASD Central Russas e em outros serviços que possuímos e operamos.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-church-darkBlue mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-church-accent" />
                Coleta e Uso de Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para fornecer um serviço. Fazemos isso de forma justa e legal, sempre com o seu conhecimento e consentimento. Também informamos o motivo da coleta e como esses dados serão utilizados.
              </p>
              <p className="text-gray-700 mb-4">
                Mantemos as informações coletadas pelo tempo necessário para fornecer os serviços desejados e protegemos seus dados com medidas de segurança para evitar acessos não autorizados, perdas ou alterações indevidas.
              </p>
              <p className="text-gray-700">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-church-darkBlue mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-church-accent" />
                Links para Sites Externos
              </h2>
              <p className="text-gray-700">
                Nosso site pode conter links para páginas externas que não são operadas por nós. Não temos controle sobre o conteúdo e práticas desses sites e não nos responsabilizamos por suas políticas de privacidade.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-church-darkBlue mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-church-accent" />
                Uso de Cookies
              </h2>
              <p className="text-gray-700">
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-church-darkBlue mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-church-accent" />
                Compromisso do Usuário
              </h2>
              <p className="text-gray-700 mb-4">
                Ao utilizar nosso site, você se compromete a:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-church-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Não utilizar nossos conteúdos para atividades ilegais ou que violem a ordem pública e a boa fé;</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-church-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Não disseminar conteúdos ofensivos, discriminatórios ou que violem os direitos humanos;</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-church-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Não comprometer a segurança do site, introduzindo vírus ou softwares maliciosos.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-church-darkBlue mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-church-accent" />
                Mais Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Caso tenha dúvidas sobre nossa Política de Privacidade, entre em contato conosco.
              </p>
              <p className="text-gray-700">
                Esta política entra em vigor a partir de 25 de março de 2025.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 font-medium">
                Atenciosamente,<br />
                Igreja Adventista do Sétimo Dia – Central de Russas
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 