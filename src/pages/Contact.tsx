import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, digite um email válido.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(3, {
    message: "O assunto deve ter pelo menos 3 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
  department: z.string(),
});

export default function Contact() {
  const [activeTab, setActiveTab] = useState("mensagem");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      department: "geral",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  }

  const departments = [
    { value: "geral", label: "Informações Gerais" },
    { value: "pastoral", label: "Pastoral" },
    { value: "secretaria", label: "Secretaria" },
    { value: "estudo", label: "Estudos Bíblicos" },
    { value: "musica", label: "Ministério de Música" },
    { value: "jovens", label: "Ministério Jovem" },
    { value: "social", label: "Serviço Social" },
    { value: "midia", label: "Mídia e Comunicação" },
  ];

  return (
    <PageLayout>
      <Hero 
        title="Entre em Contato"
        subtitle="Estamos aqui para responder suas dúvidas e receber seus comentários"
        backgroundImage="/images/contact-background.jpg"
        size="medium"
      />
      
      <section className="py-20 bg-white" id="contato">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Fale Conosco"
            subtitle="Estamos disponíveis para atendê-lo"
            accent={true}
            ornate={true}
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-adventist text-church-blue mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-church-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Endereço</h4>
                    <p className="text-gray-700 mt-1">
                      R. André Moreira - Planalto da Catumbela
                      <br />
                      Russas - CE, 62900-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-church-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="text-gray-700 mt-1">
                      <a href="tel:+556133456789" className="hover:text-church-blue transition-colors">
                        (61) 3345-6789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-church-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">E-mail</h4>
                    <p className="text-gray-700 mt-1">
                      <a href="mailto:contato@adventistas.org" className="hover:text-church-blue transition-colors">
                        contato@adventistas.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-adventist text-church-blue mb-6">Horário de Atendimento</h3>
                <div className="bg-church-gray p-6 rounded-lg">
                  <p className="mb-2"><span className="font-medium">Segunda a Quinta:</span> 9h às 17h</p>
                  <p className="mb-2"><span className="font-medium">Sexta:</span> 9h às 12h</p>
                  <p><span className="font-medium">Sábado e Domingo:</span> Apenas durante os cultos</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-adventist text-church-blue mb-6">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/iasdcentralrussas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-church-blue text-white p-3 rounded-full hover:bg-church-darkBlue transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-church-blue text-white p-3 rounded-full hover:bg-church-darkBlue transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Tabs defaultValue="mensagem" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full mb-12 flex flex-wrap">
                  <TabsTrigger value="mensagem" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 min-h-[40px] m-1">Mensagem</TabsTrigger>
                  <TabsTrigger value="estudo" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 min-h-[40px] m-1">Estudo Bíblico</TabsTrigger>
                  <TabsTrigger value="oracao" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 min-h-[40px] m-1">Pedido de Oração</TabsTrigger>
                  <TabsTrigger value="visita" className="flex-1 text-xs sm:text-sm py-2 sm:py-3 min-h-[40px] m-1">Solicitar Visita</TabsTrigger>
                </TabsList>
                
                <TabsContent value="mensagem" id="mensagem" className="mt-16 sm:mt-8">
                  <Card>
                    <CardContent className="pt-10 sm:pt-6">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-mail</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Digite seu e-mail" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefone (opcional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(00) 00000-0000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Departamento</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione um departamento" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {departments.map((dept) => (
                                      <SelectItem key={dept.value} value={dept.value}>
                                        {dept.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Assunto</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite o assunto" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Digite sua mensagem" 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {isSuccess && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                              Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
                            </div>
                          )}
                          
                          <Button 
                            type="submit" 
                            variant="church" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Enviando...</>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="estudo" id="estudo" className="mt-16 sm:mt-8">
                  <Card>
                    <CardContent className="pt-10 sm:pt-6">
                      <h3 className="text-lg font-medium mb-4">Solicitar Estudo Bíblico</h3>
                      <p className="text-gray-700 mb-6">
                        Preencha o formulário para solicitar estudos bíblicos gratuitos em sua casa ou em nossa igreja.
                      </p>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-mail</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Digite seu e-mail" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefone</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(00) 00000-0000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Informações Adicionais</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Informe horários disponíveis, temas de interesse, etc." 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {isSuccess && activeTab === "estudo" && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                              Sua solicitação de estudo bíblico foi recebida! Entraremos em contato em breve.
                            </div>
                          )}
                          
                          <Button 
                            type="submit" 
                            variant="church" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Enviando...</>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" /> Solicitar Estudo
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="oracao" id="oracao" className="mt-16 sm:mt-8">
                  <Card>
                    <CardContent className="pt-10 sm:pt-6">
                      <h3 className="text-lg font-medium mb-4">Pedido de Oração</h3>
                      <p className="text-gray-700 mb-6">
                        Compartilhe seu pedido de oração conosco. Nossa equipe de intercessores orará por você.
                      </p>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pedido de Oração</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Descreva seu pedido de oração" 
                                    className="min-h-[200px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {isSuccess && activeTab === "oracao" && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                              Seu pedido de oração foi recebido! Nossa equipe orará por sua intenção.
                            </div>
                          )}
                          
                          <Button 
                            type="submit" 
                            variant="church" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Enviando...</>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" /> Enviar Pedido
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="visita" id="visita" className="mt-16 sm:mt-8">
                  <Card>
                    <CardContent className="pt-10 sm:pt-6">
                      <h3 className="text-lg font-medium mb-4">Solicitar Visita Pastoral</h3>
                      <p className="text-gray-700 mb-6">
                        Se você deseja receber a visita de um pastor ou ancião, preencha este formulário.
                      </p>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-mail</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Digite seu e-mail" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefone</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(00) 00000-0000" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Endereço</FormLabel>
                                <FormControl>
                                  <Input placeholder="Digite seu endereço completo" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Motivo da Visita</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Descreva o motivo da visita e horários disponíveis" 
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {isSuccess && activeTab === "visita" && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                              Sua solicitação de visita pastoral foi recebida! Entraremos em contato em breve para agendar.
                            </div>
                          )}
                          
                          <Button 
                            type="submit" 
                            variant="church" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Enviando...</>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" /> Solicitar Visita
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray" id="perguntas">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Perguntas Frequentes"
              subtitle="Para sua conveniência"
              accent={true}
            />
            
            <div className="mt-8 space-y-6">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-church-blue mb-2">Quais são os horários dos cultos?</h3>
                <p className="text-gray-700">
                  Nossos principais cultos são: Escola Sabatina (sábado às 9h), Culto Divino (sábado às 11h), 
                  e Culto de Oração e Estudo da Bíblia (quarta-feira às 19h30). Para conferir todos os horários, 
                  visite nossa página de <a href="/cultos#horarios" className="text-church-blue hover:underline">Cultos</a>.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-church-blue mb-2">Como solicitar um estudo bíblico?</h3>
                <p className="text-gray-700">
                  Você pode solicitar estudos bíblicos preenchendo o formulário na aba "Estudo Bíblico" acima, 
                  ou entrando em contato pelo telefone ou e-mail. Temos instrutores bíblicos prontos para atender 
                  você no horário e local de sua preferência.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-church-blue mb-2">Como posso me envolver em projetos sociais?</h3>
                <p className="text-gray-700">
                  A igreja oferece diversas oportunidades de voluntariado em projetos sociais. 
                  Visite nossa página de <a href="/projetos-sociais" className="text-church-blue hover:underline">Projetos Sociais</a> para 
                  conhecer as iniciativas e entrar em contato para participar.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-lg font-medium text-church-blue mb-2">Como faço para me tornar membro da igreja?</h3>
                <p className="text-gray-700">
                  Para se tornar membro, recomendamos: 1) Frequentar os cultos e conhecer a comunidade; 
                  2) Participar de estudos bíblicos; 3) Quando convencido das verdades bíblicas, 
                  solicitar o batismo. Também aceitamos por profissão de fé pessoas já batizadas 
                  por imersão que aceitem as doutrinas adventistas.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Não encontrou resposta para sua pergunta? Veja nossa seção completa de 
                Perguntas Frequentes ou entre em contato conosco.
              </p>
              <Button asChild variant="churchOutline" size="church">
                <a href="/faq">Ver Todas as Perguntas Frequentes</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative h-[400px]" id="localizacao">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3141211247837!2d-37.977056825378894!3d-4.148320345891973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8b3722fe72297%3A0xab2f32db37a4d8af!2sIgreja%20Adventista%20do%20S%C3%A9timo%20Dia%20-%20Central!5e0!3m2!1spt-BR!2sbr!4v1711258217100!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </PageLayout>
  );
} 