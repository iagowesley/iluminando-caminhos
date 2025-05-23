import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useForm as useFormspree, ValidationError } from '@formspree/react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

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
  requestType: z.string(),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formspreeState, handleFormspreeSubmit] = useFormspree("mqapbvao");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      department: "geral",
      requestType: "mensagem",
    },
  });

  // Monitora o estado do Formspree para atualizar o estado de sucesso
  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSuccess(true);
      
      // Esconder mensagem de sucesso e resetar o formulário após 5 segundos
      const timer = setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded, form]);

  // Função que combina a validação do react-hook-form com o envio para o Formspree
  function onSubmit(values: z.infer<typeof formSchema>) {
    handleFormspreeSubmit(values);
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

  const requestTypes = [
    { value: "mensagem", label: "Mensagem Geral" },
    { value: "estudo", label: "Solicitar Estudo Bíblico" },
    { value: "oracao", label: "Pedido de Oração" },
    { value: "visita", label: "Solicitar Visita" },
  ];

  return (
    <PageLayout>
      <Hero 
        title="Entre em contato"
        subtitle="Estamos aqui para responder suas dúvidas e receber seus comentários"
        backgroundImage="/images/duvidas.jpg"
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
              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-church-blue mb-8 text-center">Informações de Contato</h3>
                
                <div className="space-y-8 max-w-md mx-auto">
                  <div className="flex items-start bg-church-gray/30 p-4 rounded-lg hover:bg-church-gray/50 transition-colors">
                    <div className="bg-church-blue rounded-full p-3 text-white mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-church-darkBlue">Endereço</h4>
                      <p className="text-gray-700 mt-1">
                        Igreja Adventista do Sétimo Dia
                        <br />
                        Russas - CE, 62900-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-church-gray/30 p-4 rounded-lg hover:bg-church-gray/50 transition-colors">
                    <div className="bg-church-blue rounded-full p-3 text-white mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-church-darkBlue">Telefone</h4>
                      <p className="text-gray-700 mt-1">
                        <a href="tel:+556133456789" className="hover:text-church-blue transition-colors">
                          (61) 3345-6789
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-church-gray/30 p-4 rounded-lg hover:bg-church-gray/50 transition-colors">
                    <div className="bg-church-blue rounded-full p-3 text-white mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-church-darkBlue">E-mail</h4>
                      <p className="text-gray-700 mt-1">
                        <a href="mailto:contato@adventistas.org" className="hover:text-church-blue transition-colors">
                          contato@adventistas.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-church-blue mb-6 text-center">Redes Sociais</h3>
                  <div className="flex justify-center space-x-5">
                    <a 
                      href="https://www.instagram.com/iasdcentralrussas/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-church-gray/20 p-3 rounded-xl hover:bg-church-gray/40 transition-all duration-300 text-church-darkBlue"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="bg-church-gray/20 p-3 rounded-xl hover:bg-church-gray/40 transition-all duration-300 text-church-darkBlue"
                      aria-label="YouTube"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="bg-church-gray/20 p-3 rounded-xl hover:bg-church-gray/40 transition-all duration-300 text-church-darkBlue"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="bg-church-gray/20 p-3 rounded-xl hover:bg-church-gray/40 transition-all duration-300 text-church-darkBlue"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8290011052017!2d-37.9743084!3d-4.950107599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b99aad7f4c6d67%3A0x23336c1bdd7cedc8!2sIgreja%20Adventista%20de%20Russas!5e0!3m2!1spt-BR!2sbr!4v1679933357766!5m2!1spt-BR!2sbr" 
                  className="w-full h-64 rounded-xl shadow-lg" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Igreja Adventista de Russas"
                ></iframe>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg border-0">
                <CardContent className="pt-10 sm:pt-6">
                  <h3 className="text-2xl font-bold text-church-blue mb-6 text-center">Envie sua Mensagem</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="requestType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Solicitação</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o tipo de solicitação" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {requestTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                            <ValidationError 
                              prefix="Tipo de Solicitação" 
                              field="requestType"
                              errors={formspreeState.errors}
                            />
                          </FormItem>
                        )}
                      />

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
                            <ValidationError 
                              prefix="Nome" 
                              field="name"
                              errors={formspreeState.errors}
                            />
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
                              <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={formspreeState.errors}
                              />
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
                              <ValidationError 
                                prefix="Telefone" 
                                field="phone"
                                errors={formspreeState.errors}
                              />
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
                            <ValidationError 
                              prefix="Departamento" 
                              field="department"
                              errors={formspreeState.errors}
                            />
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
                            <ValidationError 
                              prefix="Assunto" 
                              field="subject"
                              errors={formspreeState.errors}
                            />
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
                            <ValidationError 
                              prefix="Mensagem" 
                              field="message"
                              errors={formspreeState.errors}
                            />
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
                        disabled={formspreeState.submitting}
                      >
                        {formspreeState.submitting ? (
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
                  Você pode solicitar estudos bíblicos preenchendo o formulário de contato e selecionando a opção 
                  "Solicitar Estudo Bíblico", ou entrando em contato pelo telefone ou e-mail. Temos instrutores bíblicos 
                  prontos para atender você no horário e local de sua preferência.
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
    </PageLayout>
  );
} 