import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Beliefs = () => {
  const beliefs = [
    {
      category: "Deus",
      items: [
        {
          id: "1",
          title: "As Escrituras Sagradas",
          content: "As Escrituras Sagradas, o Antigo e o Novo Testamentos, são a Palavra de Deus escrita, dada por inspiração divina. Os autores inspirados falaram e escreveram ao serem movidos pelo Espírito Santo. As Escrituras são a revelação infalível da vontade divina, o padrão de caráter, o teste de experiência, o autorizado revelador de doutrinas e o registro fidedigno dos atos de Deus na história."
        },
        {
          id: "2",
          title: "A Trindade",
          content: "Há um só Deus: Pai, Filho e Espírito Santo, uma unidade de três Pessoas coeternas. Deus é imortal, onipotente, onisciente, acima de tudo e sempre presente. Ele é infinito e está além da compreensão humana, mas é conhecido por meio de Sua autorrevelação. Deus, que é amor, é para sempre digno de culto, adoração e serviço por toda a criação."
        },
        {
          id: "3",
          title: "O Pai",
          content: "Deus, o Pai Eterno, é o Criador, a Fonte, o Mantenedor e o Soberano de toda a Criação. Ele é justo e santo, misericordioso e clemente, tardio em irar-se, e abundante em constante amor e fidelidade. As qualidades e os poderes manifestados no Filho e no Espírito Santo são também revelações do Pai."
        },
        {
          id: "4",
          title: "O Filho",
          content: "Deus, o Filho Eterno, encarnou-se em Jesus Cristo. Por meio dEle foram criadas todas as coisas; Ele revela o caráter de Deus, efetua a salvação da humanidade e julga o mundo. Sendo para sempre verdadeiramente Deus, Ele Se tornou também verdadeiramente humano, Jesus, o Cristo."
        },
        {
          id: "5",
          title: "O Espírito Santo",
          content: "Deus, o Espírito Santo, atuou junto com o Pai e o Filho na Criação, encarnação e redenção. Ele inspirou os escritores das Escrituras. Encheu de poder a vida de Cristo. Atrai e convence os seres humanos; e os que se mostram sensíveis são renovados e transformados por Ele à imagem de Deus."
        }
      ]
    },
    {
      category: "A Humanidade",
      items: [
        {
          id: "6",
          title: "A Criação",
          content: "Deus é o Criador de todas as coisas e revelou nas Escrituras o relato autêntico de Sua atividade criadora. Em seis dias o Senhor fez 'os céus e a Terra' e tudo que neles há, e descansou no sétimo dia. Assim Ele estabeleceu o sábado como memorial perpétuo de Sua obra criadora realizada e completada durante seis dias literais que, juntamente com o sábado, constituíram a mesma unidade de tempo que hoje chamamos de semana."
        },
        {
          id: "7",
          title: "A Natureza Humana",
          content: "O homem e a mulher foram formados à imagem de Deus com individualidade, poder e liberdade de pensar e agir. Embora criados como seres livres, cada um é uma unidade indivisível de corpo, mente e alma, e dependente de Deus quanto à vida, respiração e tudo o mais. Quando nossos primeiros pais desobedeceram a Deus, negaram sua dependência dEle e caíram de sua elevada posição. A imagem de Deus neles foi desfigurada, e tornaram-se sujeitos à morte. Seus descendentes participam dessa natureza degradada e de suas consequências. Nascem com fraquezas e tendências para o mal. Mas Deus, em Cristo, reconciliou o mundo consigo mesmo e, por meio de Seu Espírito, restaura nos mortais penitentes a imagem de seu Criador. Criados para a glória de Deus, são chamados para amá-Lo e uns aos outros, e para cuidar do seu ambiente."
        },
        {
          id: "8",
          title: "O Grande Conflito",
          content: "Toda a humanidade está agora envolvida num grande conflito entre Cristo e Satanás, quanto ao caráter de Deus, à Sua lei e à Sua soberania sobre o Universo. Esse conflito originou-se no Céu, quando um ser criado, dotado de liberdade de escolha, por exaltação própria tornou-se Satanás, o adversário de Deus, e conduziu à rebelião uma parte dos anjos. Ele introduziu o espírito de rebelião neste mundo, ao induzir Adão e Eva ao pecado. Esse pecado humano resultou na deformação da imagem de Deus na humanidade, no transtorno do mundo criado e em sua consequente devastação por ocasião do dilúvio global. Observado por toda a Criação, este mundo tornou-se o palco do conflito universal, dentro do qual será finalmente vindicado o Deus de amor."
        }
      ]
    },
    {
      category: "Salvação",
      items: [
        {
          id: "9",
          title: "Vida, Morte e Ressurreição de Cristo",
          content: "Na vida de Cristo, de perfeita obediência à vontade de Deus, em Seu sofrimento, morte e ressurreição, Deus proveu o único meio de expiação do pecado humano, de modo que os que aceitam essa expiação pela fé possam ter vida eterna, e toda a Criação possa compreender melhor o infinito e santo amor do Criador. Essa perfeita expiação vindica a justiça da lei de Deus e a benignidade de Seu caráter; porque condena nosso pecado e provê nossa salvação. A ressurreição de Cristo proclama o triunfo de Deus sobre as forças do mal, e assegura a vitória final sobre o pecado e a morte aos que aceitam a expiação. Proclama a soberania de Jesus Cristo, diante do qual se dobrará todo joelho no Céu e na Terra."
        },
        {
          id: "10",
          title: "A Experiência da Salvação",
          content: "Em infinito amor e misericórdia, Deus fez com que Cristo, que não conheceu pecado, Se tornasse pecado por nós, para que, nEle, fôssemos feitos justiça de Deus. Sob a influência do Espírito Santo, sentimos nossa necessidade, reconhecemos nossa pecaminosidade, arrependemo-nos de nossas transgressões, e exercemos fé em Jesus como Senhor e Cristo, como Substituto e Exemplo. Essa fé que aceita a salvação vem pelo poder divino da Palavra e é o dom da graça de Deus. Por meio de Cristo, somos justificados, adotados como filhos e filhas de Deus, e libertados do domínio do pecado. Por meio do Espírito, nascemos de novo e somos santificados; o Espírito renova nossa mente, escreve a lei de amor de Deus em nosso coração, e recebemos o poder para viver uma vida santa. Permanecendo nEle, tornamo-nos participantes da natureza divina e temos a certeza da salvação, agora e no juízo."
        },
        {
          id: "11",
          title: "Crescer em Cristo",
          content: "Por Sua morte na cruz, Jesus triunfou sobre as forças do mal. Aquele que durante Seu ministério terrestre subjugou os espíritos demoníacos, quebrou seu poder e confirmou sua condenação final. A vitória de Jesus nos dá a vitória sobre as forças do mal que ainda procuram nos dominar, ao andarmos com Ele em paz, alegria e na certeza de Seu amor. Agora, o Espírito Santo habita em nós e nos reveste de poder. Ao permanecer continuamente comprometidos com Jesus como nosso Salvador e Senhor, somos libertados do fardo dos nossos atos passados. Não mais vivemos nas trevas, no medo dos poderes do mal, na ignorância e na falta de sentido de nosso antigo modo de vida. Nessa nova liberdade em Jesus, somos chamados para crescer na semelhança de Seu caráter, mantendo diariamente comunhão com Ele em oração, alimentando-nos de Sua Palavra, meditando nela e na Sua providência, cantando Seus louvores, reunindo-nos para cultuar, e participando na missão da Igreja. Ao nos entregarmos em amoroso serviço aos que nos rodeiam e ao testemunharmos da salvação que há em Cristo, Sua constante presença conosco, por meio do Espírito, transforma cada momento e cada tarefa em uma experiência espiritual."
        }
      ]
    },
    {
      category: "A Igreja",
      items: [
        {
          id: "12",
          title: "A Igreja",
          content: "A Igreja é a comunidade de crentes que confessam a Jesus Cristo como Senhor e Salvador. Como continuadores do povo de Deus do Antigo Testamento, somos chamados para fora do mundo; e nos reunimos para cultuar, para comunhão, para instrução na Palavra, para celebração da Ceia do Senhor, para serviço a toda a humanidade e para a proclamação mundial do evangelho. A Igreja deriva sua autoridade de Cristo, que é o Verbo encarnado, e das Escrituras, que são a Palavra escrita. A Igreja é a família de Deus; adotados por Ele como filhos, seus membros vivem com base no novo concerto. A Igreja é o corpo de Cristo, uma comunidade de fé da qual o próprio Cristo é a Cabeça. A Igreja é a noiva pela qual Cristo morreu para poder santificá-la e purificá-la. Por ocasião de Seu retorno em triunfo, Ele a apresentará a Si mesmo como uma igreja gloriosa, os fiéis de todos os séculos, a aquisição de Seu sangue, sem mácula, nem ruga, porém santa e sem defeito."
        },
        {
          id: "13",
          title: "O Remanescente e Sua Missão",
          content: "A Igreja universal é composta de todos os que verdadeiramente creem em Cristo; mas, nos últimos dias, um tempo de ampla apostasia, um remanescente tem sido chamado para guardar os mandamentos de Deus e a fé de Jesus. Esse remanescente anuncia a chegada da hora do juízo, proclama a salvação por meio de Cristo e prediz a aproximação de Seu segundo advento. Essa proclamação está simbolizada pelos três anjos de Apocalipse 14; coincide com a obra do juízo no Céu e resulta em uma obra de arrependimento e reforma na Terra. Todo crente é chamado para ter uma participação pessoal nesse testemunho mundial."
        },
        {
          id: "14",
          title: "Unidade no Corpo de Cristo",
          content: "A Igreja é um corpo com muitos membros, chamados de toda nação, tribo, língua e povo. Em Cristo, somos uma nova criação; distinções de raça, cultura, educação e nacionalidade, e diferenças entre altos e baixos, ricos e pobres, homens e mulheres, não devem ser motivo de dissensões entre nós. Somos todos iguais em Cristo, o qual, por um só Espírito, nos uniu em uma comunhão com Ele e uns com os outros; devemos servir e ser servidos sem parcialidade ou restrição. Por meio da revelação de Jesus Cristo nas Escrituras, participamos da mesma fé e esperança, e damos a todos um mesmo testemunho. Essa unidade tem suas fontes na unidade do Deus triúno, que nos adotou como Seus filhos."
        },
        {
          id: "15",
          title: "O Batismo",
          content: "Pelo batismo, confessamos nossa fé na morte e ressurreição de Jesus Cristo, e testemunhamos de nossa morte para o pecado e de nosso propósito de andar em novidade de vida. Assim, reconhecemos a Cristo como Senhor e Salvador, tornamo-nos Seu povo e somos aceitos como membros por Sua Igreja. O batismo é um símbolo de nossa união com Cristo, do perdão dos nossos pecados e de nosso recebimento do Espírito Santo. É por imersão na água e depende de uma afirmação de fé em Jesus e da evidência de arrependimento do pecado. Segue-se à instrução nas Escrituras Sagradas e à aceitação de seus ensinos."
        },
        {
          id: "16",
          title: "A Ceia do Senhor",
          content: "A Ceia do Senhor é uma participação nos emblemas do corpo e do sangue de Jesus, como expressão de fé nEle, nosso Senhor e Salvador. Nessa experiência de comunhão, Cristo está presente para Se encontrar com Seu povo e fortalecê-lo. Participando da Ceia, proclamamos alegremente a morte do Senhor até que Ele volte. A preparação envolve exame de consciência, arrependimento e confissão. O Mestre ordenou a cerimônia do lava-pés para denotar renovada purificação, para expressar disposição de servir uns aos outros em humildade cristã e para unir nossos corações em amor. O serviço da comunhão é franqueado a todos os cristãos."
        },
        {
          id: "17",
          title: "Dons e Ministérios Espirituais",
          content: "Deus concede a todos os membros de Sua Igreja, em todas as épocas, dons espirituais para cada um usar em amoroso ministério para o bem comum da Igreja e da humanidade. Concedidos pela atuação do Espírito Santo, o qual os distribui a cada membro como Lhe apraz, os dons proveem todas as aptidões e ministérios necessários à Igreja para cumprir suas funções divinamente ordenadas. De acordo com as Escrituras, esses dons incluem ministérios como fé, cura, profecia, proclamação, ensino, administração, reconciliação, compaixão, serviço abnegado e caridade, para ajudar e encorajar as pessoas. Alguns membros são chamados por Deus e dotados pelo Espírito para funções reconhecidas pela Igreja em ministérios pastorais, de evangelização, apostólicos e de ensino, particularmente necessários para habilitar os membros para o serviço, edificar a Igreja à maturidade espiritual e promover a unidade da fé e do conhecimento de Deus. Quando os membros usam esses dons espirituais como fiéis mordomos da multiforme graça de Deus, a Igreja é protegida de influência destrutiva de falsas doutrinas, cresce com um crescimento que provém de Deus e é edificada na fé e no amor."
        },
        {
          id: "18",
          title: "O Dom de Profecia",
          content: "As Escrituras testemunham que um dos dons do Espírito Santo é a profecia. Esse dom é uma característica identificadora da igreja remanescente, e nós cremos que ele se manifestou no ministério de Ellen G. White. Seus escritos falam com autoridade profética e proporcionam consolo, orientação, instrução e correção à Igreja. Eles também tornam claro que a Bíblia é a norma pela qual deve ser provado todo ensino e experiência."
        }
      ]
    },
    {
      category: "Vida Cristã",
      items: [
        {
          id: "19",
          title: "A Lei de Deus",
          content: "Os grandes princípios da lei de Deus são incorporados nos Dez Mandamentos e exemplificados na vida de Cristo. Expressam o amor, a vontade e o propósito de Deus acerca da conduta e das relações humanas, e são obrigatórios para todas as pessoas, em todas as épocas. Esses preceitos constituem a base do concerto de Deus com Seu povo e a norma no juízo de Deus. Por meio da atuação do Espírito Santo, eles apontam para o pecado e despertam o senso da necessidade de um Salvador. A salvação é inteiramente pela graça, e não pelas obras, mas seu resultado é a obediência aos mandamentos. Essa obediência desenvolve o caráter cristão e resulta em uma sensação de bem-estar. É uma evidência de nosso amor ao Senhor e de nossa solicitude pelos seres humanos. A obediência da fé demonstra o poder de Cristo para transformar vidas, e fortalece, portanto, o testemunho cristão."
        },
        {
          id: "20",
          title: "O Sábado",
          content: "O gracioso Criador, após os seis dias da Criação, descansou no sétimo dia e instituiu o sábado para todos os povos, como memorial da Criação. O quarto mandamento da imutável lei de Deus requer a observância desse sábado do sétimo dia como dia de descanso, culto e ministério, em harmonia com o ensino e a prática de Jesus, o Senhor do sábado. O sábado é um dia de deleitosa comunhão com Deus e uns com os outros. É um símbolo de nossa redenção em Cristo, sinal de nossa santificação, uma prova de nossa lealdade e um antegozo de nosso futuro eterno no reino de Deus. O sábado é o sinal perpétuo do concerto eterno de Deus com Seu povo. A prazerosa observância desse tempo sagrado, duma tarde a outra tarde, do pôr do sol ao pôr do sol, é uma celebração dos atos criadores e redentores de Deus."
        },
        {
          id: "21",
          title: "Mordomia",
          content: "Somos mordomos de Deus, a quem foi confiada, por Ele, tempo e oportunidades, capacidades e posses, e as bênçãos da Terra e seus recursos. Somos responsáveis perante Ele pelo justo emprego dessas outorgas. Reconhecemos o direito de propriedade por parte de Deus mediante nosso serviço fiel a Ele e aos nossos semelhantes, e mediante a devolução dos dízimos e das ofertas para a proclamação de Seu evangelho e para a manutenção e o crescimento de Sua Igreja. A mordomia é um privilégio que Deus nos concedeu para nos fazer crescer em amor e para a vitória sobre o egoísmo e a cobiça. O mordomo se regozija nas bênçãos que advêm aos outros como resultado de sua fidelidade."
        },
        {
          id: "22",
          title: "Conduta Cristã",
          content: "Somos chamados para ser um povo piedoso, que pensa, sente e age em harmonia com os princípios do Céu. Para que o Espírito recrie em nós o caráter de nosso Senhor, só nos envolvemos nas coisas que produzirão em nossa vida pureza, saúde e alegria semelhantes às de Cristo. Isso significa que nossas diversões e entretenimentos devem corresponder às mais elevadas normas do gosto e da beleza cristãos. Embora reconheçamos diferenças culturais, nosso vestuário deve ser simples, modesto e de bom gosto, apropriado àqueles cuja verdadeira beleza não consiste no adorno exterior, mas no ornamento imperecível de um espírito manso e tranquilo. Isso também significa que, sendo o nosso corpo o templo do Espírito Santo, devemos cuidar dele inteligentemente. Junto com adequado exercício e repouso, devemos adotar a alimentação mais saudável possível, e abster-nos dos alimentos imundos, identificados como tais nas Escrituras. Visto que as bebidas alcoólicas, o fumo e o uso irresponsável de drogas e narcóticos são prejudiciais a nosso corpo, devemos também abster-nos dessas coisas. Em vez disso, devemos empenhar-nos em tudo que submeta nossos pensamentos e nosso corpo à disciplina de Cristo, o qual deseja nossa integridade, alegria e bem-estar."
        },
        {
          id: "23",
          title: "Casamento e Família",
          content: "O casamento foi divinamente estabelecido no Éden e confirmado por Jesus como uma união vitalícia entre um homem e uma mulher, em amoroso companheirismo. Para o cristão, o compromisso matrimonial é com Deus bem como com o cônjuge, e deve ser assumido apenas entre pessoas que partilham da mesma fé. Mútuo amor, honra, respeito e responsabilidade são a estrutura dessa relação, a qual deve refletir o amor, a santidade, a intimidade e a constância da relação entre Cristo e Sua Igreja. Quanto ao divórcio, Jesus ensinou que a pessoa que se divorcia do cônjuge, a não ser por causa de relações sexuais ilícitas, e casa com outra pessoa, comete adultério. Embora algumas relações familiares fiquem aquém do ideal, um homem e uma mulher que se dedicam um ao outro em Cristo, por meio do casamento, podem conseguir amorosa unidade mediante a orientação do Espírito e a instrução da Igreja. Deus abençoa a família e tenciona que seus membros ajudem uns aos outros para alcançar completa maturidade. Os pais devem criar os filhos para que amem e obedeçam ao Senhor. Mediante o preceito e o exemplo, devem ensinar-lhes que Cristo é um guia amável, terno e cuidadoso, que deseja que eles se tornem membros de Seu corpo, a família de Deus. Crescente intimidade familiar é uma das características da última mensagem evangélica."
        }
      ]
    },
    {
      category: "Eventos Finais",
      items: [
        {
          id: "24",
          title: "O Ministério de Cristo no Santuário Celestial",
          content: "Há um santuário no Céu, o verdadeiro tabernáculo que o Senhor erigiu e não o homem. Nele Cristo ministra em nosso favor, tornando disponíveis aos crentes os benefícios de Seu sacrifício expiatório, oferecido uma vez por todas na cruz. Ele foi empossado como nosso grande Sumo Sacerdote e iniciou Seu ministério intercessor por ocasião de Sua ascensão. Em 1844, no fim do período profético dos 2.300 dias, Ele iniciou a segunda fase de Seu ministério expiatório. Essa obra é um Juízo Investigativo, que faz parte da eliminação definitiva do pecado, prefigurada pela purificação do antigo santuário hebraico, no Dia da Expiação. Nesse serviço típico, o santuário era purificado com o sangue de sacrifícios de animais, mas as coisas celestiais são purificadas com o perfeito sacrifício do sangue de Jesus. O Juízo Investigativo revela às inteligências celestiais quem dentre os mortos têm dormido em Cristo, sendo, portanto, considerados dignos, nEle, de ter parte na primeira ressurreição. Também torna manifesto quem, dentre os vivos, permanece em Cristo, guardando os mandamentos de Deus e a fé de Jesus, estando, portanto, em Cristo, pronto para a trasladação a Seu reino eterno. Esse juízo vindica a justiça de Deus em salvar os que creem em Jesus. Declara que os que permaneceram leais a Deus receberão o reino. A conclusão desse ministério de Cristo assinalará o encerramento do tempo da graça para os seres humanos, antes do segundo advento."
        },
        {
          id: "25",
          title: "A Segunda Vinda de Cristo",
          content: "A segunda vinda de Cristo é a bem-aventurada esperança da Igreja, o grande ponto culminante do evangelho. A vinda do Salvador será literal, pessoal, visível e universal. Quando Ele voltar, os justos falecidos ressuscitarão e, juntamente com os justos que estiverem vivos, serão glorificados e levados para o Céu, mas os ímpios morrerão. O cumprimento quase completo da maioria dos aspectos da profecia e a condição atual do mundo indicam que a vinda de Cristo é iminente. O tempo exato desse acontecimento não foi revelado, e somos, portanto, exortados a estar preparados em todo o tempo."
        },
        {
          id: "26",
          title: "Morte e Ressurreição",
          content: "O salário do pecado é a morte. Mas Deus, o único que é imortal, concederá vida eterna a Seus remidos. Até aquele dia, a morte é um estado inconsciente para todas as pessoas. Quando Cristo, que é a nossa vida, Se manifestar, os justos ressuscitados e os justos vivos serão glorificados e arrebatados para o encontro de seu Senhor. A segunda ressurreição, a ressurreição dos ímpios, ocorrerá mil anos mais tarde."
        },
        {
          id: "27",
          title: "O Milênio e o Fim do Pecado",
          content: "O milênio é o reinado de mil anos de Cristo com Seus santos no Céu, entre a primeira e a segunda ressurreições. Durante esse tempo, serão julgados os ímpios mortos; a Terra estará completamente desolada, sem habitantes humanos vivos, mas ocupada por Satanás e seus anjos. No fim desse período, Cristo, acompanhado de Seus santos e da Cidade Santa, descerá do Céu à Terra. Os ímpios mortos serão então ressuscitados e, com Satanás e seus anjos, cercarão a cidade; mas fogo de Deus os consumirá e purificará a Terra. O Universo ficará assim eternamente livre do pecado e dos pecadores."
        },
        {
          id: "28",
          title: "A Nova Terra",
          content: "Na Nova Terra, em que habita justiça, Deus proverá um lar eterno para os remidos e um ambiente perfeito para vida, amor, alegria e aprendizado eternos, em Sua presença. Deus mesmo habitará com Seu povo, e o sofrimento e a morte terão passado. O grande conflito estará terminado e não mais existirá pecado. Todas as coisas, animadas e inanimadas, declararão que Deus é amor; e Ele reinará para todo o sempre. Amém."
        }
      ]
    }
  ];

  return (
    <PageLayout>
      <Hero 
        title="Nossas Crenças"
        subtitle="As 28 crenças fundamentais que constituem a compreensão e expressão das Escrituras pela Igreja Adventista do Sétimo Dia"
        backgroundImage="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&q=75&fit=crop&w=2000"
        size="medium"
      />
      
      <section id="content-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Crenças Fundamentais"
            subtitle="Como adventistas do sétimo dia, aceitamos a Bíblia como nosso único credo e mantemos um conjunto de crenças fundamentais baseadas nos ensinos das Escrituras Sagradas."
            accent={true}
          />
          
          <div className="mt-12">
            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="flex flex-wrap w-full gap-1 p-1 h-auto">
                <TabsTrigger 
                  value="overview" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="god" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Deus
                </TabsTrigger>
                <TabsTrigger 
                  value="humanity" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Humanidade
                </TabsTrigger>
                <TabsTrigger 
                  value="salvation" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Salvação
                </TabsTrigger>
                <TabsTrigger 
                  value="church" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Igreja
                </TabsTrigger>
                <TabsTrigger 
                  value="life" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Vida Cristã
                </TabsTrigger>
                <TabsTrigger 
                  value="end" 
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2 min-h-[40px] font-medium m-1"
                >
                  Eventos Finais
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-church-darkBlue mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-church-blue" />
                      Nossas Crenças Fundamentais
                    </h3>
                    
                    <p className="text-gray-700 mb-6">
                      As crenças fundamentais dos Adventistas do Sétimo Dia constituem a compreensão e expressão dos ensinos das Escrituras pela Igreja. Essas crenças, conforme estabelecidas aqui, formam a base da nossa identidade como igreja e refletem nossa compreensão da mensagem bíblica em relação à vida cristã e aos eventos finais da história deste mundo.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {beliefs.map((category) => (
                        <div key={category.category} className="bg-church-gray rounded-lg p-5">
                          <h4 className="text-lg font-semibold text-church-blue mb-3">{category.category}</h4>
                          <ul className="space-y-2 text-gray-700">
                            {category.items.map((belief) => (
                              <li key={belief.id} className="flex items-center">
                                <span className="h-5 w-5 rounded-full bg-church-blue text-white flex items-center justify-center text-xs mr-2">{belief.id}</span>
                                {belief.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mt-6">
                      Essas crenças não são um credo rígido, mas representam nossa compreensão atual das Escrituras. Como leitores da Bíblia que buscam a verdade, permanecemos abertos ao aprofundamento de nossa compreensão à medida que o Espírito Santo nos guia para toda a verdade.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {beliefs.map((category, index) => (
                <TabsContent 
                  key={index} 
                  value={
                    category.category === "Deus" ? "god" : 
                    category.category === "A Humanidade" ? "humanity" :
                    category.category === "Salvação" ? "salvation" :
                    category.category === "A Igreja" ? "church" :
                    category.category === "Vida Cristã" ? "life" :
                    "end"
                  } 
                  className="mt-8"
                >
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                    <h3 className="text-2xl font-bold text-church-darkBlue mb-4">{category.category}</h3>
                    <p className="text-gray-700">
                      Nesta seção, você encontrará as crenças fundamentais relacionadas a {category.category.toLowerCase()}.
                    </p>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((belief) => (
                      <AccordionItem key={belief.id} value={belief.id} className="mb-4 glass-card border-none shadow-sm">
                        <AccordionTrigger className="px-6 py-4 text-lg text-church-darkBlue hover:no-underline">
                          <span className="flex items-center">
                            <span className="h-7 w-7 rounded-full bg-church-blue text-white flex items-center justify-center text-sm mr-3">{belief.id}</span>
                            {belief.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                          {belief.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-church-darkBlue mb-6">Fundamentos da Nossa Fé</h2>
            <p className="text-gray-700 mb-8">
              Somos unidos por estas crenças bíblicas, que nos orientam como comunidade de fé e definem nossa missão no mundo. Estas crenças fundamentais estão baseadas nas Escrituras Sagradas, a Palavra de Deus.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="h-1 w-20 bg-church-accent"></div>
            </div>
            
            <blockquote className="italic text-xl text-gray-700 mb-8">
              "Mas santificai a Cristo, como Senhor, em vossos corações; e estai sempre preparados para responder a todo aquele que vos pedir a razão da esperança que há em vós."
              <div className="text-lg font-normal mt-2">1 Pedro 3:15</div>
            </blockquote>
            
            <p className="text-gray-700">
              Convidamos você a explorar estas crenças e descobrir a esperança, a paz e o propósito que elas oferecem para sua vida.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Beliefs;
