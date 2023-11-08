export default function TranslatedDescription(props) {
  const descriptions = {
    pokemon_v2_pokemonspecies: [
      {
        id: 1,
        nome: "bulbasauro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto jovem, ele usa os nutrientes que estão armazenados na semente em seu dorso para crescer.",
          },
        ],
      },
      {
        id: 2,
        nome: "ivysauro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A exposição à luz solar aumenta sua força. a luz solar também faz o botão em suas costas gcrescer.",
          },
        ],
      },
      {
        id: 3,
        nome: "venusauro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um aroma encantador emana de sua flor. a fragrância acalma aqueles que estão envolvidos uma batalha.",
          },
        ],
      },
      {
        id: 4,
        nome: "charmander",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Desde que nasce, uma chama arde na ponta ode sua cauda. Sua vida terminaria se a chama o se apagasse.",
          },
        ],
      },
      {
        id: 5,
        nome: "charmeleon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se ficar agitado durante a batalha, ele solta chamas intensas, incinerando seus arredores.",
          },
        ],
      },
      {
        id: 6,
        nome: "charizard",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas asas podem transportar este Pokémon até uma altitude de 4.600 pés. Ele solta fogo em temperaturas muito altas.",
          },
        ],
      },
      {
        id: 7,
        nome: "squirtle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando se sente ameaçado, ele puxa seus membros para dentro da concha e espirra água pela boca.",
          },
        ],
      },
      {
        id: 8,
        nome: "wartortle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele controla habilmente suas orelhas e cauda peludas para manter o equilíbrio enquanto nada.",
          },
        ],
      },
      {
        id: 9,
        nome: "blastoise",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os canhões-foguete em seu projétil disparam jatos de água capazes de perfurar aço grosso.",
          },
        ],
      },
      {
        id: 10,
        nome: "caterpie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus pés curtos possuem ventosas nas pontas que e permitem escalar encostas e paredes incansavelmente.",
          },
        ],
      },
      {
        id: 11,
        nome: "metápode",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mesmo estando envolto em uma casca resistente, o corpo por dentro é macio. Ele não pode resistir a um ataque durante.",
          },
        ],
      },
      {
        id: 12,
        nome: "sem manteiga",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele coleta mel todos os dias. Ele esfrega mel nos pêlos das pernas para levá-lo de volta ao ninho.",
          },
        ],
      },
      {
        id: 13,
        nome: "erva daninha",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cuidado com o ferrão afiado em sua cabeça. Ele se esconde a grama e nos arbustos onde come folhas.",
          },
        ],
      },
      {
        id: 14,
        nome: "kakuna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode esticar seu ferrão e envenenar seu inimigo.",
          },
        ],
      },
      {
        id: 15,
        nome: "beedrill",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem três ferrões venenosos nas pernas dianteiras e na cauda. Eles são usados para atacar o inimigo repetidamente.",
          },
        ],
      },
      {
        id: 16,
        nome: "pidgey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muito dócil. Se for atacado, muitas vezes ele se levantará e para se proteger em vez de contra-atacar.",
          },
        ],
      },
      {
        id: 17,
        nome: "pidgeotto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é cheio de vitalidade. Ele voa constantemente pelo seu grande território em busca de presas.",
          },
        ],
      },
      {
        id: 18,
        nome: "pidgeot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon voa na velocidade Mach 2, buscando presas. Suas grandes garras são temidas como armas malignas.",
          },
        ],
      },
      {
        id: 19,
        nome: "rattata",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mastigará qualquer coisa com suas presas. Se você ver um, pode ter certeza que mais 40 vivem na área.",
          },
        ],
      },
      {
        id: 20,
        nome: "raticar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas patas traseiras são palmadas. Elas agem como nadadeiras, para que ele possa nadar em rios e caçar presas.",
          },
        ],
      },
      {
        id: 21,
        nome: "lança",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Inepto em voar alto. No entanto, ele pode voar muito rápido para proteger seu território.",
          },
        ],
      },
      {
        id: 22,
        nome: "medo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon que remonta a muitos anos. Se sentir perigo, ele voa alto e para longe, instantaneamente.",
          },
        ],
      },
      {
        id: 23,
        nome: "ekans",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto mais velho fica, mais cresce. À noite, envolve seu longo corpo em galhos de árvores para descansar.",
          },
        ],
      },
      {
        id: 24,
        nome: "arbok",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os padrões assustadores em sua barriga foram sestudados. Seis variações foram confirmadas.",
          },
        ],
      },
      {
        id: 25,
        nome: "Pikachu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Possui bolsas nas bochechas nas quais armazena eletricidade. Este inteligente morador da floresta assa frutas duras com um choque elétrico antes de consumi-las.",
          },
        ],
      },
      {
        id: 26,
        nome: "raichu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode descarregar rajadas de eletricidade superiores a 100.000 volts— um único ataque com essa quantidade de energia incapacitaria o um dos Copperajah da minha terra natal.",
          },
        ],
      },
      {
        id: 27,
        nome: "sandshrew",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se enterra no chão para criar seu ninho. Se pedras duras impedirem sua construção de túneis, ele usa suas garras afiadas para quebrá-las e então continua cavando.",
          },
        ],
      },
      {
        id: 28,
        nome: "sandslash",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele sobe em árvores prendendo-se com suas garras afiadas. Sandslash compartilha as frutas que colhe, deixando-as para Sandshrew que espera abaixo da árvore.",
          },
        ],
      },
      {
        id: 29,
        nome: "nidoran-f",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa seus dentes incisivos duros para esmagar e comer frutas. A ponta do chifre de uma fêmea Nidoran é um pouco mais arredondada que a ponta do chifre de um macho.",
          },
        ],
      },
      {
        id: 30,
        nome: "nidorina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se o grupo for ameaçado, esses Pokémon se unirão para atacar os inimigos com um coro de ondas ultrassônicas.",
          },
        ],
      },
      {
        id: 31,
        nome: "nidoqueen",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pacifica os filhotes colocando-os nos espaços entre os espinhos em suas costas. Os espinhos nunca secretarão veneno enquanto os filhotes estiverem presentes.",
          },
        ],
      },
      {
        id: 32,
        nome: "nidoran-m",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pequeno, mas corajoso, este Pokémon manterá seu território e até mesmo arriscará sua vida em batalha para proteger a fêmea com quem é amigo.",
          },
        ],
      },
      {
        id: 33,
        nome: "nidorino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É nervoso e rápido para agir agressivamente. a potência de seu veneno aumenta junto com o nível de adrenalina presente em seu corpo.",
          },
        ],
      },
      {
        id: 34,
        nome: "nidoking",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nidoking se orgulha de sua força. É forte e espirituoso em batalha, fazendo uso de sua cauda grossa e chifre esmagador de diamantes.",
          },
        ],
      },
      {
        id: 35,
        nome: "clefairy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode ser encontrado em áreas montanhosas tranquilas em noites de lua cheia. Sua dança e suas asas minúsculas e levemente brilhantes conferem-lhe uma adorável qualidade de fada.",
          },
        ],
      },
      {
        id: 36,
        nome: "clefável",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Diz a lenda que em noites claras e tranquilas, ele escuta as vozes de seus parentes que vivem na lua. Eu também penso muitas vezes em minha terra natal, tão distante.",
          },
        ],
      },
      {
        id: 37,
        nome: "vulpix",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em sua barriga queima um fogo, que Vulpix cospe na forma de bolas de fogo. Quando jovem, este Pokémon tem apenas uma cauda branca. À medida que o Pokémon amadurece, esta única cauda se divide em seis.",
          },
        ],
      },
      {
        id: 38,
        nome: "ninetales",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A pelagem dourada brilhante é magnífica. Diz-se que esta espécie armazena poder sagrado em suas nove longas caudas e vive por um milênio.",
          },
        ],
      },
      {
        id: 39,
        nome: "jigglypuff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao alterar livremente o comprimento de onda de sua voz, Jigglypuff canta uma melodia misteriosa que certamente deixará qualquer ouvinte sonolento.",
          },
        ],
      },
      {
        id: 40,
        nome: "wigglytuff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem orgulho de seu pelo, que é fino e delicado. em particular, o cacho em sua testa tem uma tetextura perfeitamente celestial.",
          },
        ],
      },
      {
        id: 41,
        nome: "zubat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Faz seu lar em cavernas sombrias. Olhos atrofiados deixaram este Pokémon cego, então ele examina seus arredores através de ondas sonoras que emitem de sua boca enquanto voa.",
          },
        ],
      },
      {
        id: 42,
        nome: "golbat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele afunda suas presas afiadas em outras criaturas e suga seu sangue . Uma olhada mais de perto nas presas revela que elas são ocas e parecidas com palhas.",
          },
        ],
      },
      {
        id: 43,
        nome: "estranho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Durante o dia, ele fica no frio subterrâneo para evitar o sol. Ele cresce tomando banho ao luar.",
          },
        ],
      },
      {
        id: 44,
        nome: "sombrio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O que parece ser baba é na verdade doce mel. É muito pegajoso e gruda teimosamente se tocado.",
          },
        ],
      },
      {
        id: 45,
        nome: "vileplume",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto maiores suas pétalas, mais pólen tóxico contém. Sua grande cabeça é pesada e difícil de segurar.",
          },
        ],
      },
      {
        id: 46,
        nome: "parágrafos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Às vezes visto ao pé de árvores em florestas úmidas. Os cogumelos em suas costas - chamados tochukaso - não estão presentes ão em espécimes infantis e em vez disso emergem à medida que Paras amadurece.",
          },
        ],
      },
      {
        id: 47,
        nome: "paraseto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Espécimes deste Pokémon sem cogumelos ficam imóveis na floresta, dando credibilidade à hipótese de que o grande cogumelo está no controle das ações do Parasect.",
          },
        ],
      },
      {
        id: 48,
        nome: "venonat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus olhos grandes funcionam como radar. Em um local claro, você pode ver que eles são aglomerados de muitos olhos minúsculos.",
          },
        ],
      },
      {
        id: 49,
        nome: "venomote",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As escamas em pó em suas asas são difíceis de remover da pele. Elas também contêm veneno que vaza com o contato.",
          },
        ],
      },
      {
        id: 50,
        nome: "diglett",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele escava o solo em uma profundidade rasa. ele deixa terra elevada em seu rastro, tornando-o fácil de localizar.",
          },
        ],
      },
      {
        id: 51,
        nome: "dugtrio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses trigêmeos Diglett escavam mais de 60 milhas abaixo do nível do mar . Ninguém sabe como é o subsolo.",
          },
        ],
      },
      {
        id: 52,
        nome: "meowth",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele lava o rosto regularmente para manter a moeda em sua testa impecável. Ele não se dá bem com Galarian Meowth.",
          },
        ],
      },
      {
        id: 53,
        nome: "persa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu comportamento elegante e refinado entra em conflito com o o bárbaro Perrserker. A relação entre os dois é de desdém mútuo.",
          },
        ],
      },
      {
        id: 54,
        nome: "psicopata",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sofre de dores de cabeça perpétuas. Se a agonia aumentar muito, o poder latente de Psyduck irrompe, ao contrário da intenção de Psyduck. Portanto, estou explorando maneiras de aliviar a dor.",
          },
        ],
      },
      {
        id: 55,
        nome: "dourado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo é forte e tem membranas nas mãos e nos pés. Golduck pode nadar facilmente em mares agitados, abrindo caminho através das ondas altas.",
          },
        ],
      },
      {
        id: 56,
        nome: "mankey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon ágil que vive em árvores. Ele irrita facilmente e não hesitará em atacar qualquer coisa.",
          },
        ],
      },
      {
        id: 57,
        nome: "primeape",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele só para de ficar com raiva quando não há mais ninguém por perto. Visualizar esse momento é muito difícil.",
          },
        ],
      },
      {
        id: 58,
        nome: "growlithe",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles patrulham seu território em pares. Acredito que os componentes rochosos ígneos na pelagem desta espécie são o resultado de atividade vulcânica em seu habitat.",
          },
        ],
      },
      {
        id: 59,
        nome: "arcanino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ataca seus inimigos com presas envoltas em chamas ardentes. Apesar de seu volume, ele finta habilmente em todos os sentidos, liderando os oponentes em uma perseguição deceptivamente alegre enquanto praticamente dança ao redor deles.",
          },
        ],
      },
      {
        id: 60,
        nome: "poliwag",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em rios com água corrente, este Pokémon se agarrará a uma rocha usando seus lábios grossos, que agem como uma ventosa.",
          },
        ],
      },
      {
        id: 61,
        nome: "poliwhirl",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O suor deste Pokémon é um muco viscoso. Quando capturado, Poliwhirl pode escapar do alcance de seus inimigos e escapar.",
          },
        ],
      },
      {
        id: 62,
        nome: "poliwrath",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Poliwrath é habilidoso tanto em natação quanto em artes marciais. Ele usa seus braços bem treinados para desferir socos poderosos.",
          },
        ],
      },
      {
        id: 63,
        nome: "abra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Passa 18 horas por dia dormindo. Mesmo enquanto dorme, Abra pode controlar seus poderes psíquicos - caso o perigo se aproxime, o Pokémon simplesmente se teletransportará.",
          },
        ],
      },
      {
        id: 64,
        nome: "kadabra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há rumores de que uma criança com poderes místicos se tornou Kadabra; no entanto, isso ainda não foi confirmado. Suspeito que a colher que Kadabra segura aumenta suas ondas cerebrais.",
          },
        ],
      },
      {
        identificação: 65,
        nome: "alakazam",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto mais Alakazam vive, maior e mais pesada sua cabeça se torna. Nossos testes mostraram que a força de seus poderes psíquicos se correlaciona positivamente com o peso de sua cabeça.",
          },
        ],
      },
      {
        id: 66,
        nome: "machop",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja tão pequeno quanto uma criança, ele tem força suficiente para arremessar facilmente um adulto bem constituído. Esforçando-se para se tornar cada vez mais forte, Machop treina carregando um Graveler nos ombros.",
          },
        ],
      },
      {
        id: 67,
        nome: "machoke",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma criatura robusta com um físico robusto e uma stamina ilimitada. Adora treinar acima de tudo e ajuda voluntariamente em tas tarefas como construção e limpeza de terreno.",
          },
        ],
      },
      {
        id: 68,
        nome: "machamp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em combate corpo a corpo, seus quatro braços proporcionam-lhe supremacia ofensiva e defensiva. Em apenas um piscar de olhos, este valente Pokémon pode dominar seus inimigos com mais de 1.000 golpes de seus punhos.",
          },
        ],
      },
      {
        id: 69,
        nome: "bellsprout",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Prefere lugares quentes e úmidos. Ele pega insetos insetos com suas vinhas e os devora.",
          },
        ],
      },
      {
        identificação: 70,
        nome: "weepinbell",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando está com fome, ele engole qualquer coisa que se mova. Sua infeliz presa é dissolvida por ácidos fortes.",
          },
        ],
      },
      {
        id: 71,
        nome: "victreebel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Atrai a presa com o doce aroma do mel. engolida inteira, a presa se dissolve em um dia, com ossos e tudo.",
          },
        ],
      },
      {
        id: 72,
        nome: "tentacool",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles disparam raios dos orbes magenta e vítreos que se assemelham a olhos no topo de suas cabeças, e ficam à deriva em mares rasos. Durante a maré baixa, eles às vezes podem ser encontrados nas praias, desidratados.",
          },
        ],
      },
      {
        id: 73,
        nome: "tentacruel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem 80 tentáculos, cada um com uma ponta venenosa. Esses tentáculos a também são extensíveis, alongando-se quando o Tentacruel tenta ca capturar uma presa. Tenha cuidado.",
          },
        ],
      },
      {
        id: 74,
        nome: "geodude",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Faz seu lar em regiões montanhosas, usando seus braços para escalar a duras estradas montanhosas. Pode ser problemático—chutar alguém descuidadamente fará com que ele fique furioso e persiga você.",
          },
        ],
      },
      {
        id: 75,
        nome: "cascalho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mora em buracos escavados em paredes íngremes de pedra. Ele gosta de rolar do encostas como se fosse uma pedra durante uma queda de rochas, então fique de olho para cima enquanto atravessa estradas de montanha.",
          },
        ],
      },
      {
        id: 76,
        nome: "golem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A casca rochosa é descartada a cada ano. A casca descartada então se esfarela, revertendo para uma massa de solo, que pode ser espalhada pelos campos para promover o crescimento das culturas.",
          },
        ],
      },
      {
        id: 77,
        nome: "ponyta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon vivem em rebanhos nas pastagens. Os potros recém-nascidos não têm crinas de fogo, que se desenvolverão cerca de uma hora após o nascimento.",
          },
        ],
      },
      {
        id: 78,
        nome: "rapidash",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Juba ardente e brilhante, Rapidash dispara como uma flecha pela terra. esta criatura prodigiosamente rápida pode atravessar a vasta região de Hisui em um dia e meio.",
          },
        ],
      },
      {
        id: 79,
        nome: "slowpoke",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando a cauda deste Pokémon fica encharcada em água, doçura vaza dela. Slowpoke usa essa característica para atrair e pescar outros Pokémon.",
          },
        ],
      },
      {
        id: 80,
        nome: "slowbro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ser mordido por um Shellder fez com que este Pokémon ficasse sobre duas pernas. Se o Shellder o soltar, parece que Slowbro voltará a ser um Slowpoke.",
          },
        ],
      },
      {
        id: 81,
        nome: "magnemite",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon bizarro com apenas um olho embutido em uma esfera de ferro. Suspeito que esta criatura levita devido ao magnetismo que emite de seus braços, que se assemelham a ímãs em forma de ferradura.",
          },
        ],
      },
      {
        id: 82,
        nome: "magneton",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Três Magnemites reunidos para evoluir para este Pokémon. a fonte de muita irritação da minha parte, já que seu poderoso magnetismo destrói meu equipamento de pesquisa.",
          },
        ],
      },
      {
        id: 83,
        nome: "farfetchd",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles usam um talo de planta como arma, mas nem todos usam-no da mesma maneira. Vários estilos distintos de luta de talo foram observados.",
          },
        ],
      },
      {
        id: 84,
        nome: "doduo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas asas curtas tornam difícil voar. Em vez disso, este Pokémon corre em alta velocidade com pernas desenvolvidas.",
          },
        ],
      },
      {
        identificação: 85,
        nome: "dodrio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma das duas cabeças de Doduo se divide para formar uma espécie única. Ela corre perto de 40 mph pradarias.",
          },
        ],
      },
      {
        id: 86,
        nome: "seel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Adora condições de frio congelante. adora nadar em um clima gelado ocerca de 14 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 87,
        nome: "dewgong",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo inteiro é branco como a neve. Incólume em mesmo pelo frio intenso, ele nada poderosamente em águas geladas.",
          },
        ],
      },
      {
        id: 88,
        nome: "mais sombrio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Feito de lama congelada. Tem um cheiro muito pútrido para ser tocado. Nem mesmo ervas daninhas crescem em seu caminho.",
          },
        ],
      },
      {
        id: 89,
        nome: "muk",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cheira tão horrível que pode causar desmaios. através da degeneração do nariz, ele perdeu o olfato.",
          },
        ],
      },
      {
        id: 90,
        nome: "shellder",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua casca dura repele qualquer tipo de ataque. Ele é vulnerável apenas quando sua casca está aberta.",
          },
        ],
      },
      {
        id: 91,
        nome: "cloyster",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de fechar sua concha, é impossível oabri-la, mesmo por aqueles com força superior.",
          },
        ],
      },
      {
        id: 92,
        nome: "desgastado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Gasoso e completamente impalpável. Também altamente perigoso— inalar parte de seu corpo venenoso fará com que alguém desmaie instantaneamente.",
          },
        ],
      },
      {
        id: 93,
        nome: "assombrado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esse espírito assustador e malévolo pode deslizar através das paredes, aparecendo onde quiser. Segundo rumores, as vítimas a lambida do Haunter murcharão até a morte dia após dia.",
          },
        ],
      },
      {
        id: 94,
        nome: "gengar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Possui as sombras das vítimas em potencial em um esforço para roubar as vidas das vítimas. Se sua sombra começar a rir, você deve usar um feitiço protetor rapidamente!",
          },
        ],
      },
      {
        id: 95,
        nome: "ônix",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta cadeia de pedras imensas se assemelha a uma serpente gigante. Tremores sacudam a terra acima enquanto ela se enterra profundamente no solo, alimentando-se de pedras à medida que avança.",
          },
        ],
      },
      {
        id: 96,
        nome: "drowzee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se você dormir perto dele o tempo todo, às vezes ele irá mostrar sonhos que comeu no passado.",
          },
        ],
      },
      {
        id: 97,
        nome: "hipno",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Evite contato visual se encontrar um. Ele tentará fazer você dormir usando seu pêndulo.",
          },
        ],
      },
      {
        id: 98,
        nome: "krabby",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se sentir o perigo se aproximando, ele se oculta com bolhas saindo de sua boca para parecer maior.",
          },
        ],
      },
      {
        id: 99,
        nome: "kingler",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua garra enorme é muito poderosa, mas quando não está em batalha, a garra apenas atrapalha.",
          },
        ],
      },
      {
        id: 100,
        nome: "voltorb",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon enigmático que se parece com uma Pokébola. Quando excitado, ele descarrega a corrente elétrica que armazenou em sua barriga e então solta uma risada grande e barulhenta.",
          },
        ],
      },
      {
        id: 101,
        nome: "eletrodo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O tecido na superfície de seu corpo é curiosamente semelhante em composição a um Apricórnio. Quando irritado, este Pokémon libera uma corrente elétrica igual a 20 raios.",
          },
        ],
      },
      {
        id: 102,
        nome: "exeggcute",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon ficam nervosos quando não estão em um grupo de seis. No minuto em que um membro do grupo desaparece, Exeggcute se torna covarde.",
          },
        ],
      },
      {
        id: 103,
        nome: "executor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando trabalham juntos, as três cabeças do Exeggutor podem emitir uma poderosa energia psíquica. Dias nublados tornam este Pokémon lento.",
          },
        ],
      },
      {
        id: 104,
        nome: "cubone",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon usa a caveira de sua falecida mãe. Às vezes, os sonhos de Cubone o fazem chorar, mas cada lágrima que Cubone derrama o torna mais forte.",
          },
        ],
      },
      {
        id: 105,
        nome: "marowak",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando este Pokémon evoluiu, o crânio de sua mãe se fundiu a ele. O temperamento de Marowak também se tornou cruel ao mesmo tempo.",
          },
        ],
      },
      {
        id: 106,
        nome: "hitmonlee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pernas se contraem e se esticam livremente. As pernas elásticas permitem atingir um inimigo distante com um chute ascendente.",
          },
        ],
      },
      {
        id: 107,
        nome: "hitmonchan",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus socos cortam o ar. No entanto, parece que precisa de uma pequena pausa depois de lutar por três minutos.",
          },
        ],
      },
      {
        id: 108,
        nome: "lickitung",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Maneja sua longa língua habilmente, como se fosse um braço. a saliva viscosa do Pokémon, uma vez coletada e fervida, produz um adesivo forte e altamente útil.",
          },
        ],
      },
      {
        id: 109,
        nome: "koffing",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele adora ar poluído. Alguns afirmam que Koffing costumava ser mais abundante na região de Galar do que é agora.",
          },
        ],
      },
      {
        id: 110,
        nome: "chiado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele não consegue sugar o ar tão bem quanto um Galarian Weezing, mas as toxinas que ele cria são mais potentes que as de sua contraparte.",
          },
        ],
      },
      {
        id: 111,
        nome: "rhyhorn",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ridiculamente forte — quando ele bate de frente com uma montanha, é a montanha que se quebra. Mas suas pernas curtas lutam com as curvas, e ele é incapaz de parar a menos que colida com alguma coisa.",
          },
        ],
      },
      {
        id: 112,
        nome: "rhydon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Gira rapidamente seu chifre para perfurar o leito rochoso. Ele se movimenta em torno de regiões vulcânicas, protegido do calor da lava por sua pele resistente e semelhante a uma armadura.",
          },
        ],
      },
      {
        id: 113,
        nome: "chansey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon de coração puro compartilha seus ovos com os feridos.",
          },
        ],
      },
      {
        id: 114,
        nome: "tangela",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele é inteiramente coberto por videiras azuis, impedindo qualquer vislumbre de sua verdadeira identidade. As vinhas transmitem uma sensação refrescante quando mastigadas — elas são úteis como tempero.",
          },
        ],
      },
      {
        id: 115,
        nome: "cangaskhan",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há registros de uma criança humana perdida sendo criada por um Kangaskhan sem filhos.",
          },
        ],
      },
      {
        id: 116,
        nome: "cavalo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles nadam com movimentos de dança e provocam a formação de redemoinhos. Horsea competem para ver qual e deles consegue gerar o maior redemoinho.",
          },
        ],
      },
      {
        id: 117,
        nome: "seadra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A boca de Seadra é delgada, mas seu poder de sucção é forte. Em um instante, Seadra pode sugar comida que é maior que a abertura de sua boca.",
          },
        ],
      },
      {
        id: 118,
        nome: "dourado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas nadadeiras dorsal e peitoral são fortemente desenvolvidas como músculos. Ele pode nadar a uma velocidade de cinco nós.",
          },
        ],
      },
      {
        id: 119,
        nome: "seaking",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usando seu chifre, ele faz buracos nas rochas do leito do rio, fazendo ninhos para evitar que seus ovos saiam.",
          },
        ],
      },
      {
        identificação: 120,
        nome: "staryu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pokémon-peixe o mordiscam, mas Staryu não se incomoda. Seu corpo se regenera rapidamente, mesmo mesmo que parte dele seja completamente arrancado.",
          },
        ],
      },
      {
        id: 121,
        nome: "estrela",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Starmie nada girando seu corpo em alta velocidade. enquanto este Pokémon navega pelo oceano, ele absorve minúsculo plâncton.",
          },
        ],
      },
      {
        id: 122,
        nome: "sr-mime",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O comportamento deste Pokémon parecido com um palhaço lembra uma pantomima. Ele cria paredes invisíveis usando uma força emitida pelas pontas dos dedos.",
          },
        ],
      },
      {
        id: 123,
        nome: "scyther",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As grandes e afiadas foices em seus antebraços são armas verdadeiramente temíveis. As tentativas de fuga de Prey são infalivelmente frustradas pelos movimentos ágeis deste Pokémon.",
          },
        ],
      },
      {
        id: 124,
        nome: "jynx",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os Jynx de Galar costumam ter vozes lindas e delicadas. Alguns desses Pokémon até reuniram uma base de fãs.",
          },
        ],
      },
      {
        id: 125,
        nome: "electabuzz",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Alimenta-se de energia elétrica. Durante chuvas repentinas sob nuvens de trovoada iminentes, pode-se observar Electabuzz escalando árvores altas, onde o Pokémon esperará que um raio caia.",
          },
        ],
      },
      {
        id: 126,
        nome: "magmar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Diz a lenda que este Pokémon nasceu da cratera de um vulcão. Quando ferido, ele se banha em lava para curar seu corpo, da mesma forma que alguém se banharia em uma fonte termal.",
          },
        ],
      },
      {
        id: 127,
        nome: "pinsir",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon aperta suas pinças sobre sua presa e então a divide ao meio ou a arremessa para longe.",
          },
        ],
      },
      {
        id: 128,
        nome: "tauros",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os Tauros da região de Galar são voláteis por a natureza e não permitem que as pessoas andem nas suas costas.",
          },
        ],
      },
      {
        id: 129,
        nome: "magikarp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon imbecil, fraco e lamentável que, no entanto, é muito resistente. Não perturbado pela água turva, ele pode ser encontrado vivendo em todos os lugares.",
          },
        ],
      },
      {
        identificação: 130,
        nome: "gyarados",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eu suspeito que este Pokémon seja a verdadeira identidade de um dragão em escrito em textos antigos, que afirmavam que ele arrasou uma aldeia inteira com raios incandescentes de sua boca.",
          },
        ],
      },
      {
        id: 131,
        nome: "lapras",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Atravessar mares gelados não é problema para este Pokémon resistente ao frio. Sua pele macia é um pouco fria ao toque.",
          },
        ],
      },
      {
        id: 132,
        nome: "idem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele encontrar outro Ditto, ele se moverá mais rápido que o normal para duplicar exatamente aquele oponente.",
          },
        ],
      },
      {
        id: 133,
        nome: "eevee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Abriga o potencial de evoluir para múltiplas formas. Dentro de Eevee está a chave para os mistérios da evolução Pokémon — tenho certeza disso.",
          },
        ],
      },
      {
        id: 134,
        nome: "vaporeon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Testes mostram que suas células se assemelham muito às moléculas de água, o que talvez explique sua capacidade de ocultar sua forma enquanto está submerso. acredito que as origens do folclore das sereias estejam neste Pokémon.",
          },
        ],
      },
      {
        id: 135,
        nome: "jolteon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Arrepia seu pelo em pontas afiadas como agulhas quando está enfurecido. Pode-se ouvir eletricidade estalando em sua respiração quando ele exala.",
          },
        ],
      },
      {
        id: 136,
        nome: "flareon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As chamas queimam dentro de um órgão semelhante a um saco dentro deste Pokémon. Quando Flareon inala, essas chamas aumentam de intensidade, atingindo a poderosos 3.000 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 137,
        nome: "porígono",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele não tem batimentos cardíacos perceptíveis e não parece respirar, e ainda assim parece funcionar sem problemas. Não consigo em começar a explicar esta anomalia totalmente bizarra.",
          },
        ],
      },
      {
        id: 138,
        nome: "omanite",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é membro de uma espécie antiga e extinta. Omanyte nada na água com seus 10 tentáculos, parecendo estar apenas flutuando.",
          },
        ],
      },
      {
        id: 139,
        nome: "omastar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As presas afiadas de Omastar podem esmagar rochas, mas o Pokémon pode atacar apenas as presas que estão ao alcance de seus tentáculos.",
          },
        ],
      },
      {
        id: 140,
        nome: "kabuto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora alguns digam que esta espécie foi extinta, avistamentos de Kabuto são aparentemente bastante comuns em alguns lugares.",
          },
        ],
      },
      {
        id: 141,
        nome: "kabutops",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A causa da extinção desta espécie é desconhecida. Kabutops eram Pokémon agressivos que habitavam mares quentes.",
          },
        ],
      },
      {
        id: 142,
        nome: "aerodáctilo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As presas em forma de serra do Aerodactyl podem rasgar a pele de tatters—até mesmo a pele de Pokémon do tipo Aço.",
          },
        ],
      },
      {
        id: 143,
        nome: "snorlax",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este glutão aparece nas aldeias sem aviso prévio e devora todos os seus celeiros de arroz - tais ocorrências têm sido consideradas entre os mais graves dos desastres.",
          },
        ],
      },
      {
        id: 144,
        nome: "articuno",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon pode controlar o gelo à vontade. Diz-se que Articuno vive em montanhas nevadas crivadas de permafrost.",
          },
        ],
      },
      {
        id: 145,
        nome: "zapdos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Zapdos é um Pokémon pássaro lendário. Dizem que quando Zapdos esfrega suas penas, um raio cairá imediatamente depois.",
          },
        ],
      },
      {
        id: 146,
        nome: "moltres",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há histórias deste Pokémon usando suas asas radiantes e cobertas de chamas para iluminar caminhos para aqueles perdidos nas montanhas.",
          },
        ],
      },
      {
        id: 147,
        nome: "dratini",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon foi considerado por muito tempo como nada mais do que um mito. O pequeno caroço na testa de um Dratini é na verdade um chifre que ainda está aparecendo.",
          },
        ],
      },
      {
        id: 148,
        nome: "dragonair",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon reúne poder nos orbes em sua cauda e controla o clima. Quando envolto por uma aura, Dragonair tem uma aparência mística.",
          },
        ],
      },
      {
        id: 149,
        nome: "dragonita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é conhecido como Sea Incarnate. Caras de proa que lembram Dragonite decoram a proa de muitos navios.",
          },
        ],
      },
      {
        id: 150,
        nome: "mewtwo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu DNA é quase o mesmo do Mew. No entanto, êdeas de tamanho e disposição são muito diferentes.",
          },
        ],
      },
      {
        id: 151,
        nome: "mew",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto.",
          },
        ],
      },
      {
        id: 152,
        nome: "chikorita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Na batalha, Chikorita balança sua folha para manter o inimigo afastado . No entanto, uma doce fragrância também exala da folha, acalmando o Pokémon em batalha e criando uma atmosfera acolhedora e amigável ao redor.",
          },
        ],
      },
      {
        id: 153,
        nome: "bayleef",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pescoço de Bayleef é rodeado por folhas enroladas. Dentro de cada folha tubular há um pequeno broto de uma árvore. A fragrância deste broto deixa as pessoas animadas.",
          },
        ],
      },
      {
        id: 154,
        nome: "megánio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A fragrância da flor de Meganium acalma e acalma emoções. Em batalha, este Pokémon exala mais do seu cheiro calmante para enfraquecer o espírito de luta do inimigo.",
          },
        ],
      },
      {
        id: 155,
        nome: "cindaquil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Vem da região de Johto. Embora geralmente enrolado como uma bola devido à sua disposição tímida, ele abriga um tremendo poder de fogo.",
          },
        ],
      },
      {
        id: 156,
        nome: "quilava",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pelo desta criatura é muito misterioso—é totalmente impermeável ao te toque ardente das chamas. Se Quilava virar as costas para você, tome cuidado! Tal postura indica um ataque próximo.",
          },
        ],
      },
      {
        id: 157,
        nome: "tiflosão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Diz-se que purifica almas perdidas e abandonadas com suas chamas e as guia para a vida após a morte. Acredito que sua forma foi influenciada pela energia da montanha sagrada que se eleva no centro de Hisui.",
          },
        ],
      },
      {
        id: 158,
        nome: "totodile",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Apesar do tamanho pequeno de seu corpo, as mandíbulas do Totodile são muito poderosas. Embora o Pokémon possa pensar que ele está apenas cortando de brincadeira, sua mordida tem poder suficiente para causar ferimentos graves.",
          },
        ],
      },
      {
        id: 159,
        nome: "croconaw",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois que o Croconaw tiver fixado suas mandíbulas em seu inimigo, ele absolutamente não o soltará. Como as pontas de suas presas são bifurcadas para trás como anzóis farpados, elas se tornam impossíveis de remover depois de afundadas.",
          },
        ],
      },
      {
        id: 160,
        nome: "feraligatr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Feraligatr intimida seus inimigos abrindo sua boca enorme. Na batalha, ele chutará o chão com força com suas patas traseiras grossas e poderosas para atacar o inimigo a uma velocidade incrível.",
          },
        ],
      },
      {
        id: 161,
        nome: "sentret",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Sentret dorme, ele o faz enquanto outro fica de guarda. a sentinela acorda os outros ao primeiro sinal de perigo. Quando este Pokémon se separa de sua matilha, ele se torna capaz de dormir devido ao medo. ",
          },
        ],
      },
      {
        id: 162,
        nome: "furret",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Furret tem uma constituição muito esbelta. Quando está sob ataque, ele pode se contorcer habilmente por espaços estreitos e fugir. Apesar de seus membros curtos, este Pokémon é muito ágil e veloz.",
          },
        ],
      },
      {
        id: 163,
        nome: "hoohoot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele começa a apitar no mesmo horário todos os dias. alguns treinadores os usam no lugar de relógios.",
          },
        ],
      },
      {
        id: 164,
        nome: "noctowl",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando precisa pensar, ele gira a cabeça 180 graus para aguçar seu poder intelectual.",
          },
        ],
      },
      {
        id: 165,
        nome: "ledyba",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon muito covardes se unem e usam o Reflect para proteger seu ninho.",
          },
        ],
      },
      {
        id: 166,
        nome: "ledian",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele voa pelo céu noturno, espalhando poeira brilhante. Segundo alguns, se essa poeira grudar em você, coisas boas acontecerão com você.",
          },
        ],
      },
      {
        id: 167,
        nome: "espinaraque",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora o veneno de suas presas não seja tão forte, ele é potente o suficiente para enfraquecer a presa que fica presa em sua teia.",
          },
        ],
      },
      {
        id: 168,
        nome: "ariados",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vomita fios de sua boca para capturar sua presa. Quando a noite cai, ele deixa sua teia para caçar agressivamente.",
          },
        ],
      },
      {
        id: 169,
        nome: "crobata",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus membros traseiros se tornaram outro par de asas. Crobat manobra habilmente suas quatro asas para disparar de maneira requintada até mesmo pelas cavernas mais confinadas sem perder velocidade.",
          },
        ],
      },
      {
        identificação: 170,
        nome: "chinchou",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "No fundo escuro do oceano, seu único meio de comunicação são as luzes piscando constantemente.",
          },
        ],
      },
      {
        id: 171,
        nome: "lanturna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon emite uma luz brilhante que cega its suas presas. Isso cria uma abertura para ele desferir um ataque elétrico.",
          },
        ],
      },
      {
        id: 172,
        nome: "pichu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pichu armazena eletricidade nas bolsas em suas bochechas, mas a descarrega inadvertidamente quando está agitado ou excitado. Sendo ainda imaturo, o Pokémon lida com eletricidade é bastante inepto.",
          },
        ],
      },
      {
        id: 173,
        nome: "clefa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em sua silhueta, eles lembram a luz cintilante das estrelas. Quando estrelas cadentes chovem do céu noturno, Cleffa se reúne em grande número e dança como sendo de fato encarnações das estrelas.",
          },
        ],
      },
      {
        id: 174,
        nome: "igglybuff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Aproveitando a suavidade de seu corpo, Igglybuff se move como se estivesse saltando. Seu corpo fica rosa profundo quando sua temperatura aumenta.",
          },
        ],
      },
      {
        id: 175,
        nome: "togepi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta criatura oval é frequentemente confundida com um ovo em movimento quando encontrada nos campos ou nas montanhas. Seu sorriso inocente acalma a alma.",
          },
        ],
      },
      {
        id: 176,
        nome: "togético",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Não existem registros de que Togetic tenha sido visto na natureza. Há rumores de que ele evolui sob o cuidado amoroso de um companheiro humano de confiança, a quem o Pokémon então concede grande alegria.",
          },
        ],
      },
      {
        id: 177,
        nome: "natu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Como suas asas ainda não estão totalmente crescidas, ele precisa saltar para se movimentar. Ele está sempre olhando alguma coisa.",
          },
        ],
      },
      {
        id: 178,
        nome: "xatu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon estranho pode ver tanto o passado quanto o futuro. Ele observa o movimento do sol o dia todo.",
          },
        ],
      },
      {
        id: 179,
        nome: "mareep",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esfregar sua lã gera eletricidade. Você vai querer acariciá-lo porque é fofo, mas se usar a mão nua, você receberá um choque doloroso.",
          },
        ],
      },
      {
        id: 180,
        nome: "flaaffy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele armazena eletricidade em sua lã fofa. Se armazenar demais, começará a ficar careca nessas partes.",
          },
        ],
      },
      {
        id: 181,
        nome: "ampharos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua cauda brilha forte e brilhante. Ela é valorizada há muito tempo como um farol para os marinheiros.",
          },
        ],
      },
      {
        id: 182,
        nome: "belossom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Bellossom se reúne às vezes e parece dançar. Dizem que a dança é um ritual para invocar o sol.",
          },
        ],
      },
      {
        id: 183,
        nome: "marill",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mesmo depois que Marill nada em um mar frio, seu pelo repelente à água seca quase assim que Marill sai de água. É por isso que este Pokémon nunca sente frio.",
          },
        ],
      },
      {
        id: 184,
        nome: "azumarill",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon criam bolhas cheias de ar. Quando azurill joga em rios, Azumarill irá cobri-los com essas bolhas.",
          },
        ],
      },
      {
        id: 185,
        nome: "sudowoodo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora finja ser uma árvore, ele não consegue enganar nem mesmo as crianças. ao toque, seu corpo parece mais uma rocha do que uma casca de árvore. a extrema aversão de Sudowoodo à água merece uma nota especial.",
          },
        ],
      },
      {
        id: 186,
        nome: "politoed",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O choro de um homem é mais alto que o de uma mulher. Homens educados com vozes profundas e ameaçadoras encontram mais popularidade com o sexo oposto.",
          },
        ],
      },
      {
        id: 187,
        nome: "hoppip",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon flutua e flutua com o vento. Se sentir a a aproximação de ventos fortes, Hoppip liga suas folhas com outros Hoppip para se preparar para não ser levado pelo vento.",
          },
        ],
      },
      {
        id: 188,
        nome: "skiploom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A flor de Skiploom desabrocha quando a temperatura sobe acima de 64 graus Fahrenheit. O quanto a flor se abre depende da temperatura. Por esse motivo, este Pokémon às vezes é usado como termômetro.",
          },
        ],
      },
      {
        id: 189,
        nome: "jumpluff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Jumpluff aproveita os ventos quentes do sul para cruzar o mar e voar para terras estrangeiras. O Pokémon desce ao chão quando encontra o ar frio enquanto está flutuando.",
          },
        ],
      },
      {
        id: 190,
        nome: "aipom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este morador das copas das árvores possui uma cauda tão hábil quanto uma mão. escritos antigos descrevem este Pokémon como uma raridade de um braço só.",
          },
        ],
      },
      {
        id: 191,
        nome: "afundado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sunkern tenta se mover o mínimo que pode. Ele faz isso porque tenta conservar todos os nutrientes que armazenou em seu corpo para sua evolução. Ele não come nada, subsistindo apenas orvalho da manhã.",
          },
        ],
      },
      {
        id: 192,
        nome: "sunflora",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sunflora converte energia solar em nutrição. Ela se move ativamente durante o dia quando está quente. Ela para de se mover assim que o sol se põe à noite.",
          },
        ],
      },
      {
        id: 193,
        nome: "yanma",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas asas frágeis são tão finas que é possível ver claramente através delas. No entanto, durante o vôo essas asas exibem o poder de agitar o ar com força suficiente para lançar uma casa em direção ao céu.",
          },
        ],
      },
      {
        id: 194,
        nome: "wooper",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao caminhar em terra, ele cobre seu corpo com uma película venenosa que impede a desidratação de sua pele.",
          },
        ],
      },
      {
        id: 195,
        nome: "quagsire",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo é sempre viscoso. Ele frequentemente bate a cabeça o fundo do rio enquanto nada, mas parece não se importar.",
          },
        ],
      },
      {
        id: 196,
        nome: "espeon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Exerce um poder arcano com o qual pode prever o clima e até mesmo os pensamentos das pessoas. Quando banhado pelo sol, o orbe escarlate em sua testa brilha e acumula energia.",
          },
        ],
      },
      {
        id: 197,
        nome: "umbreon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele é mais ativo nas primeiras horas da noite, quando o luar banha a terra. Seus grandes olhos podem perfurar a escuridão e perceber a presa com absoluta clareza.",
          },
        ],
      },
      {
        id: 198,
        nome: "murkrow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Amplamente evitado como portador de má sorte. Ao cruzar o caminho com esta criatura, me disseram que é preciso entoar 'Workrum, Workrum—má sorte, não venha' como um encantamento de proteção.",
          },
        ],
      },
      {
        id: 199,
        nome: "lentidão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Slowking pode resolver qualquer problema apresentado a ele, mas ninguém consegue entender nada do que Slowking diz.",
          },
        ],
      },
      {
        id: 200,
        nome: "misdreavus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se esconde na escuridão, causando arrepios na espinha dos viajantes com seu choro infantil. Enquanto observa os viajantes assustados com alegria, os orbes vermelhos em seu peito emitem uma luz misteriosa.",
          },
        ],
      },
      {
        id: 201,
        nome: "desconhecido",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É difícil acreditar que esses Pokémon de formas estranhas sejam realmente criaturas vivas. Eu mencionei que muitas formas da espécie se assemelham à escrita de outras terras; ninguém vai me levar a sério.",
          },
        ],
      },
      {
        id: 202,
        nome: "wobbuffet",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Para manter sua cauda preta escondida, ele vive silenciosamente a escuridão. Ele nunca é o primeiro a atacar.",
          },
        ],
      },
      {
        id: 203,
        nome: "girafarig",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A cabeça traseira do Girafarig contém um cérebro minúsculo que é pequeno demais para pensar. No entanto, a cabeça traseira não precisa dormir, então ela pode vigiar seus arredores 24 horas por dia.",
          },
        ],
      },
      {
        id: 204,
        nome: "pineco",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele gruda a casca da árvore em si mesmo com sua saliva, tornando-se mais grosso e maior. Pineco idoso ao ridiculamente enorme.",
          },
        ],
      },
      {
        id: 205,
        nome: "fortaleza",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "No momento em que ele engole sua presa, o interior de sua carapaça fica exposto, mas até hoje, ninguém jamais viu isso.",
          },
        ],
      },
      {
        id: 206,
        nome: "dunsparce",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os ninhos em que os Dunsparce vivem são labirintos de túneis. eles nunca se perdem em seus próprios ninhos—eles podem de dizer onde estão pelo cheiro da terra.",
          },
        ],
      },
      {
        id: 207,
        nome: "gligar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua cauda tem um ferrão grosso e horrível na ponta. Para abater a presa, ele primeiro obscurece sua visão cobrindo seus rostos com seu corpo, e então usa o ferrão para injetar veneno nelas. ",
          },
        ],
      },
      {
        id: 208,
        nome: "steelix",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon evoluiu através do uso de um item estranho. Seu corpo é revestido com pó de aço e notavelmente duro—nem mesmo o diamante pode deixar nem um arranhão.",
          },
        ],
      },
      {
        id: 209,
        nome: "snubbull",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em contraste com sua aparência, ele é bastante timid. Ao brincar com outro cachorrinho Pokémon, às vezes ele sofre bullying.",
          },
        ],
      },
      {
        id: 210,
        nome: "granbull",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja popular entre os jovens, Granbull é tímido e sensível, por isso é totalmente incompetente como cão de guarda.",
          },
        ],
      },
      {
        id: 211,
        nome: "qwilfish",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os pescadores detestam esse Pokémon problemático porque ele espalha veneno de seus espinhos, espalhando-o por toda parte. Uma forma diferente ode Qwilfish vive em outras regiões.",
          },
        ],
      },
      {
        id: 212,
        nome: "scizor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Evoluiu através de um item curioso. A concha que cobre seu corpo se mostrou mais forte que o aço forjado.",
          },
        ],
      },
      {
        id: 213,
        nome: "shuckle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As frutas armazenadas em sua casca em forma de vaso eventualmente se transformam em um suco espesso e carnudo.",
          },
        ],
      },
      {
        id: 214,
        nome: "heracross",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon tem um chifre incomparável. O próprio Heracross dedemonstra um poder tremendo—é capaz de arremessar várias pessoas treinadas nas artes tradicionais da guerra de uma só vez.",
          },
        ],
      },
      {
        id: 215,
        nome: "sneasel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas garras robustas e curvas são ideais para atravessar penhascos íngremes. Das pontas dessas garras goteja um veneno que se infiltra nos nervos de qualquer presa capturada pelas mãos de Sneasel.",
          },
        ],
      },
      {
        id: 216,
        nome: "teddiursa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele lambe as patas por causa do doce mel que embebe nelas. É astuto, entrando furtivamente nos ninhos dos Combee e pegando para si o mel que os Combee acumularam.",
          },
        ],
      },
      {
        id: 217,
        nome: "ursaring",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando a estação fria chegar em Hisui, este Pokémon irá vagar campos e montanhas em busca de suas frutas favoritas. a fome de Ursaring durante esse período o torna um perigo feroz.",
          },
        ],
      },
      {
        id: 218,
        nome: "slugma",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Slugma não tem sangue em seu corpo. Em vez disso, magma intensamente quente circula por todo o corpo deste Pokémon, transportando nutrientes essenciais e oxigênio para seus órgãos.",
          },
        ],
      },
      {
        id: 219,
        nome: "magcargo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A temperatura corporal de Magcargo é de aproximadamente 18.000 graus Fahrenheit. A água é vaporizada com o contato. Se este Pokémon for pego pela chuva, as gotas de chuva instantaneamente se transformam em vapor, cobrindo a área com uma névoa espessa.",
          },
        ],
      },
      {
        id: 220,
        nome: "swinub",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Swinub é excelente em farejar cogumelos enterrados sob a grama ou sneve. Desde os tempos antigos, o povo de Hisui sempre confiou unesta habilidade.",
          },
        ],
      },
      {
        id: 221,
        nome: "piloswine",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O longo pelo deste Pokémon cobre seus olhos, orelhas e até mesmo membros, permitindo que Piloswine resista a condições extremamente frias. as presas brancas do Pokémon podem ser usadas para derrotar seus inimigos.",
          },
        ],
      },
      {
        id: 222,
        nome: "corsola",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon vivem em mares quentes. em tempos pré-históricos, muitos também viviam oceanos ao redor da região de Galar.",
          },
        ],
      },
      {
        id: 223,
        nome: "remoraid",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cospe água de sua boca com incrível precisão. Ele captura Burmy atirando-os dos galhos onde eles estão pendurados.",
          },
        ],
      },
      {
        id: 224,
        nome: "octilaria",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora Octillery ainda jorre água pela boca, a drástica diferença aatômica entre ele e Remoraid fez com que a muito tempo, ninguém acreditasse que o primeiro evoluísse do último.",
          },
        ],
      },
      {
        id: 225,
        nome: "delibird",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem o hábito generoso de compartilhar sua comida com pessoas e Pokémon, então está sempre procurando por mais comida.",
          },
        ],
      },
      {
        id: 226,
        nome: "mantina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon calmo e gentil nada graciosamente pelo mar. Depois de ganhar velocidade, ele pode saltar para fora da água. Muitas vezes é erroneamente identificado como um Pokémon pássaro devido a esse comportamento.",
          },
        ],
      },
      {
        id: 227,
        nome: "skarmory",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pessoas criam espadas com as penas do galpão de Skarmory, então este Pokémon é um elemento popular nos designs heráldicos.",
          },
        ],
      },
      {
        id: 228,
        nome: "houndour",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles emitem uivos assustadores repetidos antes do amanhecer para chamar a atenção para sua matilha.",
          },
        ],
      },
      {
        id: 229,
        nome: "houndoom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Identificado por seus uivos misteriosos, as pessoas há muito tempo atrás pensavam que era o ceifador e temiam-no.",
          },
        ],
      },
      {
        identificação: 230,
        nome: "kingdra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As escamas perdidas por este Pokémon têm um brilho tão splendoroso que foram dadas à realeza como presentes.",
          },
        ],
      },
      {
        id: 231,
        nome: "fanpy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Phanpy usa seu nariz comprido para tomar banho. Quando os outros se reúnem, eles encharcam uns aos outros com água. esses Pokémon podem ser vistos secando seus corpos encharcados na beira da água.",
          },
        ],
      },
      {
        id: 232,
        nome: "donphan",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se Donphan atacasse com seu corpo duro, até mesmo uma casa poderia ser destruída. Usando sua enorme força, o Pokémon ajuda a limpar rochas e deslizamentos de lama que bloqueiam trilhas nas montanhas.",
          },
        ],
      },
      {
        id: 233,
        nome: "porygon2",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um item bizarro fez com que este Pokémon evoluísse. Embora agora exiba muitos novos gestos e expressões, sua biologia permanece inescrutável.",
          },
        ],
      },
      {
        id: 234,
        nome: "stanler",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus chifres de formato estranho têm o poder de enfeitiçar aqueles que os vêem. Remédios feitos a partir da trituração dos orbes negros dos chifres caídos são um tratamento eficaz para a insônia.",
          },
        ],
      },
      {
        id: 235,
        nome: "esfregar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele desenha símbolos com o fluido que escorre da ponta de sua cauda. Dependendo do símbolo, fanáticos do Smeargle pagarão muito dinheiro por eles.",
          },
        ],
      },
      {
        id: 236,
        nome: "tyrogue",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mesmo sendo pequeno, não pode ser ignorado porque it atingirá qualquer alvo útil sem aviso prévio.",
          },
        ],
      },
      {
        id: 237,
        nome: "hitmontop",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de fazer uma parada de mão para desequilibrar o o oponente, ele apresenta seus movimentos sofisticados de chute.",
          },
        ],
      },
      {
        id: 238,
        nome: "smoochum",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este é um Pokémon muito curioso. Smoochum dedecide o que gosta e o que não gosta tocando coisas com seus lábios.",
          },
        ],
      },
      {
        id: 239,
        nome: "elekid",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles geram eletricidade girando os braços. Durante uma tempestade, se alguém ouvir as vozes animadas de crianças a selva, o que realmente está ouvindo são as vozes de Elekid.",
          },
        ],
      },
      {
        id: 240,
        nome: "magby",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive em áreas vulcânicas. A cada respiração, faíscas jorram de sua boca e nariz. Quando Magby está com boa saúde, its chamas ganham uma tonalidade amarela.",
          },
        ],
      },
      {
        id: 241,
        nome: "miltank",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon precisa ser ordenhado todos os dias, caso contrário ficará doente. O sabor do leite Miltank muda com as estações.",
          },
        ],
      },
      {
        id: 242,
        nome: "blissey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon de bom coração que cuidará de qualquer pessoa ou Pokémon doente até que sua saúde melhore. Os ovos que ele põe são deliciosos e trazem boa sorte para quem os come.",
          },
        ],
      },
      {
        id: 243,
        nome: "raikou",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Raikou personifica a velocidade do relâmpago. Os rugidos deste Pokémon enviam ondas de choque pelo ar e sacodem o chão como se raios tivessem caído.",
          },
        ],
      },
      {
        id: 244,
        nome: "entei",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Entei personifica a paixão do magma. Acredita-se que este Pokémon nasceu da erupção de um vulcão. ele emite enormes rajadas de fogo que consomem completamente tudo que tocam.",
          },
        ],
      },
      {
        id: 245,
        nome: "suicune",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suicune personifica a compaixão de uma fonte de água pura. ele corre pela terra com graça. Este Pokémon tem o poder de purificar a água suja.",
          },
        ],
      },
      {
        id: 246,
        nome: "larvitar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se alimenta de terra. Depois de comer uma grande montanha, ele adormecerá para poder crescer.",
          },
        ],
      },
      {
        id: 247,
        nome: "pupitar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele não ficará parado, mesmo quando for uma pupa. ele já tem braços e pernas sob sua casca sólida.",
          },
        ],
      },
      {
        id: 248,
        nome: "tiranitar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os terremotos causados quando ele caminha fazem até grandes montanhas desmoronarem e mudarem o terreno ao redor.",
          },
        ],
      },
      {
        id: 249,
        nome: "lugia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As asas de Lugia possuem um poder devastador—um leve bater de asas pode destruir casas normais. Como resultado, este Pokémon escolhe viver fora da vista, nas profundezas do mar.",
          },
        ],
      },
      {
        id: 250,
        nome: "ho-oh",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As penas de Ho-Oh brilham em sete cores dependendo do ângulo o qual são atingidas pela luz. Diz-se que essas penas trazem felicidade aos portadores. Diz-se que este Pokémon vive o pé de um arco-íris.",
          },
        ],
      },
      {
        id: 251,
        nome: "celebi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon viajou no tempo para vir do futuro. Ele fortalece a grama e as árvores com sua própria força e também pode curar feridas.",
          },
        ],
      },
      {
        id: 252,
        nome: "treecko",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Treecko é legal, calmo e controlado — ele nunca entra em pânico em enhuma situação. Se um inimigo maior encarasse este Pokémon, ele o encararia de volta sem ceder um centímetro de terreno.",
          },
        ],
      },
      {
        id: 253,
        nome: "grovyle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon voa habilmente de galho em galho nas árvores. em uma floresta, nenhum Pokémon pode esperar pegar um Grovyle em fuga, por mais rápido que seja.",
          },
        ],
      },
      {
        id: 254,
        nome: "sceptil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sceptile tem sementes crescendo em suas costas. Dizem que elas estão repletas de nutrientes que revitalizam as árvores. Este Pokémon cria as árvores em uma floresta com carinho.",
          },
        ],
      },
      {
        id: 255,
        nome: "tocha",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Torchic tem um lugar dentro de seu corpo onde mantém sua chama. Dê-lhe um abraço—ele brilhará com calor. Este Pokémon está quecoberto por uma camada fofa de penugem.",
          },
        ],
      },
      {
        id: 256,
        nome: "combusken",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Combusken luta contra as chamas intensamente quentes que cospe de seu bico its e com chutes extraordinariamente destrutivos. O grito deste Pokémon é muito alto e perturbador.",
          },
        ],
      },
      {
        id: 257,
        nome: "blaziken",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Blaziken tem pernas incrivelmente fortes — ele pode facilmente destruir um prédio de 30 andares com um salto. Os socos ardentes deste Pokémon deixam seus inimigos chamuscados e enegrecidos.",
          },
        ],
      },
      {
        id: 258,
        nome: "mudkip",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Na água, Mudkip respira usando as guelras em suas bochechas. Se enfrentar uma situação difícil na batalha, este Pokémon irá liberar seu incrível poder—ele pode esmagar pedras maiores que ele mesmo.",
          },
        ],
      },
      {
        id: 259,
        nome: "marshtomp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Marshtomp é muito mais rápido viajando na lama do que adando. Os quartos traseiros deste Pokémon exibem um desenvolvimento óbvio, dando-lhe a capacidade de andar apenas nas patas traseiras.",
          },
        ],
      },
      {
        id: 260,
        nome: "swampert",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Swampert prevê tempestades sentindo diferenças sutis nos sons das ondas e dos ventos das marés com suas nadadeiras. Se uma tempestade se aproxima, ele empilha pedras para se proteger.",
          },
        ],
      },
      {
        id: 261,
        nome: "poochyena",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Poochyena é onívoro — ele come qualquer coisa. Uma característica que o distingue é o tamanho de suas presas comparadas ao seu corpo. Este Pokémon tenta intimidar seus inimigos fazendo com que os pelos de sua cauda se arrepiem.",
          },
        ],
      },
      {
        id: 262,
        nome: "poderosa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mightyena viaja e age como uma matilha na selva. A memória de sua vida na selva obriga o Pokémon a obedecer apenas aos Treinadores que ele reconhece possuir habilidades superiores.",
          },
        ],
      },
      {
        id: 263,
        nome: "ziguezague",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Zigzagoon que se adaptou a regiões fora de Galar adquiriu esta aparência. Se você perdeu alguma coisa, este Pokémon provavelmente poderá encontrá-la.",
          },
        ],
      },
      {
        id: 264,
        nome: "linoone",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa sua velocidade explosiva e garras afiadas para derrubar presas. Correr por caminhos sinuosos não é seu forte.",
          },
        ],
      },
      {
        id: 265,
        nome: "wurmple",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Gosta de seiva e é abundante na natureza. Não se sabe por que ele evolui em várias formas diferentes. Não se pode dizer pela aparência de um Wurmple qual forma ele assumirá quando evoluir.",
          },
        ],
      },
      {
        id: 266,
        nome: "silcoon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Envolve-se em finos fios de seda enquanto armazena energia para evolução. Ele não pode estender seus membros e seu movimento é lento, mas seus olhos ficam atentos—Silcoon está sempre em guarda.",
          },
        ],
      },
      {
        id: 267,
        nome: "lindamente",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon colorido e incrivelmente lindo, mas também ganancioso. em um esforço para manter sua comida favorita só para si, ele perseguirá Combee enquanto eles tentam coletar néctar.",
          },
        ],
      },
      {
        id: 268,
        nome: "cascoon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A seda que cobre seu corpo é fina, mas suficientemente forte. A seda de Cascoon tem brilho e textura superiores às de Silcoon, e roupas feitas com seda de Cascoon são consideradas de primeira qualidade.",
          },
        ],
      },
      {
        id: 269,
        nome: "dustox",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tende a ser atraído por fogueiras em noites escuras. Difícil de expulsar dos assentamentos por causa da forma como espalha escamas altamente tóxicas.",
          },
        ],
      },
      {
        id: 270,
        nome: "lotad",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua folha cresceu demais para que ela pudesse viver na terra. Foi assim que ela começou a viver flutuando na água.",
          },
        ],
      },
      {
        id: 271,
        nome: "lombre",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive na beira da água onde faz sol. ele dorme em um leito de grama aquática durante o dia e torna-se ativo à noite.",
          },
        ],
      },
      {
        id: 272,
        nome: "ludicolo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se ouvir música festiva, ele começa a se mover ritmo para amplificar seu poder.",
          },
        ],
      },
      {
        id: 273,
        nome: "seedot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se prende a um galho de árvore usando o topo de sua cabeça. Às vezes, ventos fortes podem fazê-lo cair.",
          },
        ],
      },
      {
        id: 274,
        nome: "nuzleaf",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles vivem em buracos escavados em grandes árvores. O som o da flauta de grama de Nuzleaf enche os ouvintes de pavor.",
          },
        ],
      },
      {
        id: 275,
        nome: "mudança",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive tranquilamente nas profundezas da floresta. Diz-se que cria ventos frios de inverno com os ventiladores que segura.",
          },
        ],
      },
      {
        id: 276,
        nome: "taillow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Taillow é jovem—acabou de deixar seu ninho. Como resultado, it às vezes fica solitário e chora à noite. este Pokémon se alimenta de Wurmple que vive nas florestas.",
          },
        ],
      },
      {
        id: 277,
        nome: "inchar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Swellow é muito cuidadoso com a manutenção de suas asas brilhantes. Uma vez que dois Swellows são reunidos, eles diligentemente cuidam de limpar as asas um do outro.",
          },
        ],
      },
      {
        id: 278,
        nome: "gaivota",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele voa nas correntes ascendentes sem bater as asas. ele faz ninho em penhascos íngremes à beira do mar.",
          },
        ],
      },
      {
        id: 279,
        nome: "pelipper",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Deslizando pela superfície da água, ele mergulha seu grande bico no mar, pega comida e água, e carrega-os.",
          },
        ],
      },
      {
        id: 280,
        nome: "ralts",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tende a preferir pessoas com uma disposição alegre a aquelas que a são sombrias, mas não demonstrou discriminação em relação à idade ou gênero. Precisa de mais pesquisas.",
          },
        ],
      },
      {
        id: 281,
        nome: "kirlia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se assemelha a uma donzela na aparência, mas possui estranhos poderes para projetar visões do paraíso. Suspeito que os ornamentos carmesim em sua cabeça sejam a chave para suas habilidades.",
          },
        ],
      },
      {
        id: 282,
        nome: "gardevoir",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se dedicará a defender um mestre que veio amorar. Seu vestido branco puro, reminiscente daqueles usados pelas damas onobrezas, é o vestido de quem está disposto a arriscar sua vida.",
          },
        ],
      },
      {
        id: 283,
        nome: "surskit",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive em lagoas e pântanos que apresentam muitas plantas . Muitas vezes luta com Dewpider, cujo habitat e dieta são semelhantes.",
          },
        ],
      },
      {
        id: 284,
        nome: "mascarado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas antenas finas em forma de asas são altamente absorventes. ele espera os dias chuvosos em ocos de árvores.",
          },
        ],
      },
      {
        id: 285,
        nome: "cogumelo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se Shroomish sente perigo, ele sacode o corpo e espalha esporos do topo de sua cabeça. Os esporos deste Pokémon são tão tóxicos que fazem árvores e ervas daninhas murcharem.",
          },
        ],
      },
      {
        id: 286,
        nome: "breloom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As sementes que circundam a cauda de Breloom são feitas de esporos tóxicos endurecidos. É horrível comê-las. Apenas dar uma mordida na semente deste Pokémon fará seu estômago roncar.",
          },
        ],
      },
      {
        id: 287,
        nome: "slakoth",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O coração de Slakoth bate apenas uma vez por minuto. Aconteça o que acontecer, ele se contenta em ficar imóvel. É raro ver este Pokémon em movimento.",
          },
        ],
      },
      {
        id: 288,
        nome: "vigoroth",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Vigoroth é simplesmente incapaz de permanecer parado. Mesmo quando tenta dormir, o sangue em suas veias fica agitado, obrigando este Pokémon a correr solto pela selva antes que possa se acalmar.",
          },
        ],
      },
      {
        id: 289,
        nome: "apagar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Onde quer que Slaking viva, anéis de mais de um metro de diâmetro aparecem os campos gramados. Eles são feitos pelo Pokémon enquanto ele come toda a grama ao seu alcance enquanto está deitado no chão.",
          },
        ],
      },
      {
        id: 290,
        nome: "nincada",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Às vezes ele pode viver no subsolo por mais de 10 anos. Ele absorve nutrientes das raízes das árvores.",
          },
        ],
      },
      {
        id: 291,
        nome: "ninjask",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é tão rápido que dizem que é capaz de a evitar qualquer ataque. Ele adora se alimentar de seiva de árvore.",
          },
        ],
      },
      {
        id: 292,
        nome: "shedinja",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon estranho — ele voa sem mover as asas, tem uma concha oca como corpo e não respira.",
          },
        ],
      },
      {
        id: 293,
        nome: "sussurro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Whismur chora, o som de sua própria voz o assusta, fazendo o Pokémon chorar ainda mais alto. ele chora até ficar exausto e depois adormece.",
          },
        ],
      },
      {
        id: 294,
        nome: "alto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A força da voz alta deste Pokémon não é apenas o som, é também a onda de pressão do ar que explode os oponentes e os causa danos.",
          },
        ],
      },
      {
        id: 295,
        nome: "explodir",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon pode fazer mais do que apenas gritar. Para se comunicar com outros de sua espécie, ele emitirá todos os tipos de sons pelos buracos em seu corpo.",
          },
        ],
      },
      {
        id: 296,
        nome: "makuhita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há rumores de uma receita tradicional de ensopado que os Treinadores podem usar para criar Makuhita fortes.",
          },
        ],
      },
      {
        id: 297,
        nome: "hariyama",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Hariyamas grandes e gordos não são necessariamente fortes. Existem alguns pequenos que se movem com agilidade e usam movimentos com habilidade.",
          },
        ],
      },
      {
        id: 298,
        nome: "azurill",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora os Azurill sejam normalmente dóceis, um enhum zangado balançará a grande bola em sua cauda e tentará esmagar seus oponentes.",
          },
        ],
      },
      {
        id: 299,
        nome: "nosepass",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois que o povo de Hisui descobriu que seu nariz vermelho sempre aponta para o norte, eles passaram a confiar muito nele quando viajavam para longe. O nariz parece funcionar de maneira semelhante às bússolas antigas.",
          },
        ],
      },
      {
        id: 300,
        nome: "skitty",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Skitty é conhecido por perseguir seu próprio rabo de brincadeira. Na natureza, este Pokémon vive em buracos nas árvores das florestas. É muito popular como animal de estimação por causa de sua aparência adorável.",
          },
        ],
      },
      {
        id: 301,
        nome: "delcatty",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Delcatty dorme onde quiser, sem manter um ninho permanente. Se outro Pokémon se aproximar dele enquanto ele dorme, este Pokémon nunca lutará — apenas se mudará para outro lugar.",
          },
        ],
      },
      {
        id: 302,
        nome: "sableye",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se alimenta de cristais de pedras preciosas. Na escuridão, seus olhos brilham com o brilho das joias.",
          },
        ],
      },
      {
        id: 303,
        nome: "mawile",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele mastiga com sua boca aberta. Suas enormes mandíbulas são a verdade chifres de aço que foram transformados.",
          },
        ],
      },
      {
        id: 304,
        nome: "aron",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Aron evolui, sua armadura de aço se desprende. Nos tempos antigos, as pessoas colecionavam a armadura de Aron e faziam bom uso dela em suas vidas diárias.",
          },
        ],
      },
      {
        id: 305,
        nome: "lairon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Durante disputas territoriais, os Lairon lutam se chocando uns contra os outros. Uma inspeção minuciosa de suas armaduras de aço revela arranhões e amassados.",
          },
        ],
      },
      {
        id: 306,
        nome: "agron",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há muito tempo, havia um rei que usava um capacete em feito para lembrar a cabeça de um Aggron. Ele estava tentando canalizar a força do Pokémon.",
          },
        ],
      },
      {
        id: 307,
        nome: "meditar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Meditite aumenta sua energia interior através da meditação. ele sobrevive com apenas uma fruta por dia. A alimentação mínima é outro aaspecto do treinamento deste Pokémon.",
          },
        ],
      },
      {
        id: 308,
        nome: "medicham",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Através do poder da meditação, Medicham desenvolveu seu sexto sentido. Ele ganhou a habilidade de usar poderes psicocinéticos. este Pokémon é conhecido por meditar por um mês inteiro sem comer.",
          },
        ],
      },
      {
        id: 309,
        nome: "eletrike",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele armazena eletricidade em seu pelo. Ele emite faíscas por todo o corpo nas estações em que o ar está seco.",
          },
        ],
      },
      {
        id: 310,
        nome: "manétrico",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Raramente aparece diante das pessoas. Diz-se que se aninha onde onde um raio caiu.",
          },
        ],
      },
      {
        id: 311,
        nome: "plusle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Plusle está torcendo por seu parceiro, ele brilha com sfaíscas elétricas por todo o seu corpo. Se seu parceiro perder, este Pokémon cchora alto.",
          },
        ],
      },
      {
        id: 312,
        nome: "mínimo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Minun adora torcer por seu parceiro na batalha. Ele emite faíscas de seu corpo enquanto faz isso. Se seu parceiro estiver em apuros, este Pokémon emite quantidades crescentes de faíscas.",
          },
        ],
      },
      {
        id: 313,
        nome: "volbeat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A cauda do Volbeat brilha como uma lâmpada. Com outros Volbeat, it usa sua cauda para desenhar formas geométricas no céu noturno. este Pokémon adora o doce aroma exalado por Illumise.",
          },
        ],
      },
      {
        id: 314,
        nome: "iluminar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Illumise lidera um vôo de Volbeat iluminado para desenhar sinais o céu noturno. Diz-se que este Pokémon ganha maior respeito de seus pares ao compor designs mais complexos no céu.",
          },
        ],
      },
      {
        id: 315,
        nome: "rosélia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora bonito, tem espinhos altamente venenosos. Há uma antiga tradição em minha terra natal onde alguém enviaria esses espinhos para um oponente para desafiá-lo para um duelo.",
          },
        ],
      },
      {
        id: 316,
        nome: "gulpin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A maior parte do corpo de Gulpin é composta por seu estômago—seu coração e cérebro são muito pequenos em comparação. O estômago deste Pokémon contém enzimas especiais que dissolvem qualquer coisa.",
          },
        ],
      },
      {
        id: 317,
        nome: "vagabunda",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Swalot não tem dentes, então o que ele come, ele engole inteiro, não importa o que aconteça. Sua boca cavernosa boceja amplamente. Um pneu de automóvel caberia facilmente dentro da boca deste Pokémon.",
          },
        ],
      },
      {
        id: 318,
        nome: "carvanha",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon têm presas afiadas e mandíbulas poderosas. Os marinheiros evitam as tocas da Carvanha a todo custo.",
          },
        ],
      },
      {
        id: 319,
        nome: "sharpedo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é conhecido como o Valentão do Mar. Qualquer navio que entre nas águas que Sharpedo chama de casa será atacado - sem exceções.",
          },
        ],
      },
      {
        identificação: 320,
        nome: "wailmer",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando suga um grande volume de água do mar, se torna como uma grande bola saltitante. Ele come uma tonelada o de comida diariamente.",
          },
        ],
      },
      {
        id: 321,
        nome: "wailord",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu imenso tamanho é a razão de sua popularidade. Observar Wailord é uma atividade turística favorita em várias partes do mundo.",
          },
        ],
      },
      {
        id: 322,
        nome: "numel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Numel armazena magma de quase 2.200 graus Fahrenheit dentro de seu corpo. Se ficar molhado, o magma esfria e endurece. Nesse caso, o corpo do Pokémon fica pesado e seus movimentos ficam lentos.",
          },
        ],
      },
      {
        id: 323,
        nome: "camerupto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As protuberâncias nas costas de Camerupt são formadas por uma transformação oseus ossos. Às vezes, elas liberam magma derretido. este Pokémon aparentemente entra em erupção frequentemente quando está enfurecido.",
          },
        ],
      },
      {
        id: 324,
        nome: "torkoal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Você encontra minas de carvão abandonadas cheias deles. eles cavam incansavelmente em busca de carvão.",
          },
        ],
      },
      {
        id: 325,
        nome: "spoink",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Spoink mantém uma pérola no topo de sua cabeça. A pérola funciona para amplificar os poderes psicocinéticos deste Pokémon. Portanto, ele está constantemente em busca de uma pérola maior.",
          },
        ],
      },
      {
        id: 326,
        nome: "rabugento",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Grumpig usa as pérolas negras em seu corpo para exercer seus poderes fantásticos. Quando faz isso, ele dança de forma bizarra. as pérolas negras deste Pokémon são valiosas como obras de arte.",
          },
        ],
      },
      {
        id: 327,
        nome: "spinda",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O padrão de localização de cada Spinda é diferente. Com seus smovimentos cambaleantes, ele evita os ataques dos adversários de forma brilhante!",
          },
        ],
      },
      {
        id: 328,
        nome: "trapinch",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele forma um buraco cônico inescapável e fica esperando no fundo para que a presa caia.",
          },
        ],
      },
      {
        id: 329,
        nome: "vibrava",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Para ajudar a fazer suas asas crescerem, ele dissolve quantidades de presas em seus sucos digestivos e engula-as todos os dias.",
          },
        ],
      },
      {
        id: 330,
        nome: "flygon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele é apelidado de Espírito do Deserto porque o bater de suas asas soa como uma mulher cantando.",
          },
        ],
      },
      {
        id: 331,
        nome: "cacnea",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto mais árido e hostil o ambiente, mais bonita e perfumada é a flor de Cacnea. Este Pokémon luta balançando descontroladamente seus braços espinhosos.",
          },
        ],
      },
      {
        id: 332,
        nome: "caturno",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se um viajante estiver atravessando um deserto no meio da noite, Cacturne o seguirá em um grupo desorganizado. Os Pokémon estão ganhando tempo, esperando que o viajante se canse e se torne capaz de se mover.",
          },
        ],
      },
      {
        id: 333,
        nome: "swablu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Como o Swablu se parece com uma nuvem cúmulo, os inimigos terão dificuldade em encontrá-lo. Aparentemente suas asas ficaram brancas ao longo de muitas gerações.",
          },
        ],
      },
      {
        id: 334,
        nome: "altar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon tem uma disposição gentil, mas se for provocado, ele ameaçará os oponentes com gritos estridentes antes de atacá-los sem piedade.",
          },
        ],
      },
      {
        id: 335,
        nome: "zangoose",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Zangoose geralmente fica de quatro, mas quando fica irritado, ele se levanta nas patas traseiras e estende suas garras. Este Pokémon compartilha uma rivalidade amarga com Seviper que remonta a gerações.",
          },
        ],
      },
      {
        id: 336,
        nome: "seviper",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A cauda semelhante a uma espada de Seviper tem dois propósitos: ela corta os inimigos e os encharca com veneno secretado. Este Pokémon não gdesistirá de sua longa rivalidade sangrenta com Zangoose.",
          },
        ],
      },
      {
        id: 337,
        nome: "lunatone",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele foi descoberto no local de uma queda de meteoro 40 anos atrás. Seu olhar pode fazer seus inimigos dormirem.",
          },
        ],
      },
      {
        id: 338,
        nome: "solrock",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A energia solar é a fonte de seu poder, então ele é forte durante o dia. Quando ele gira, seu corpo brilha.",
          },
        ],
      },
      {
        id: 339,
        nome: "barboach",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Faz seu lar em pântanos com água turva. A pouca visibilidade esconde este Pokémon dos predadores, e a gosma em seu corpo torna difícil agarrá-lo.",
          },
        ],
      },
      {
        id: 340,
        nome: "whiscash",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Bate sua barbatana caudal contra o leito do pântano para sacudir o chão e assustar sua presa. Ele então engolirá a presa em fuga inteira. as pessoas confundiram esse comportamento como a causa de terremotos.",
          },
        ],
      },
      {
        id: 341,
        nome: "corphish",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Era originalmente um Pokémon de longe que escapou para a natureza. Ele pode se adaptar ao rio mais sujo.",
          },
        ],
      },
      {
        id: 342,
        nome: "crawdaunt",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon brutal que adora batalhar. Ele se chocará contra qualquer inimigo que se aproxime de seu ninho.",
          },
        ],
      },
      {
        id: 343,
        nome: "baltoy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Foi descoberto em ruínas antigas. Enquanto se move, ele gira constantemente. Ele fica em um pé mesmo quando dorme.",
          },
        ],
      },
      {
        id: 344,
        nome: "claydol",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Parece ter nascido de bonecos de argila feitos por povos antigos. Ele usa telecinesia para flutuar e se mover.",
          },
        ],
      },
      {
        id: 345,
        nome: "lileep",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Lileep se agarra às rochas no fundo do mar. Quando a presa se aproxima, este Pokémon a enreda com tentáculos semelhantes a pétalas.",
          },
        ],
      },
      {
        id: 346,
        nome: "cradily",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma vez que Cradily captura uma presa com seus tentáculos, a digere inteira e absorve seus nutrientes.",
          },
        ],
      },
      {
        id: 347,
        nome: "anorítico",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Anorith pode nadar rapidamente puxando suas oito asas pela água como os remos de um barco. Este Pokémon é um ancestral dos Pokémon insetos modernos.",
          },
        ],
      },
      {
        id: 348,
        nome: "armado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora viva em terra, também é um bom nadador. ele mergulha no oceano em busca de presas, usando suas sgarras afiadas para derrubar sua presa.",
          },
        ],
      },
      {
        id: 349,
        nome: "feebas",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É um Pokémon maltrapilho e feio. Entretanto, é muito resistente e pode sobreviver com pouca água.",
          },
        ],
      },
      {
        identificação: 350,
        nome: "milótico",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que um vislumbre de um Milotic e sua beleza acalmará qualquer emoção hostil que você esteja sentindo.",
          },
        ],
      },
      {
        id: 351,
        nome: "castform",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua forma muda dependendo do clima. Quanto mais difíceis ficam, mais difícil é a disposição do Castform!",
          },
        ],
      },
      {
        id: 352,
        nome: "kecleon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua cor muda para ocultação e também quando seu humor ou saúde muda. Quanto mais escura a cor, mais saudável ela é.",
          },
        ],
      },
      {
        id: 353,
        nome: "shuppet",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há um provérbio que diz: “Evite a casa onde os Shuppet se reúnem no crepúsculo crescente.”",
          },
        ],
      },
      {
        id: 354,
        nome: "banete",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O ressentimento por ter sido descartado fez com que ele nascesse. Alguns dizem que tratá-lo bem irá satisfazê-lo, e ele se tornará mais uma vez um brinquedo de pelúcia.",
          },
        ],
      },
      {
        id: 355,
        nome: "duskull",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ouvi dizer que todos os filhos de Hisui começam a se comportar quando ouvem a história de como esse Pokémon vagueia antes da hora das bruxas para afastar crianças malcomportadas.",
          },
        ],
      },
      {
        id: 356,
        nome: "dusclops",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há rumores de que espiar dentro de seu corpo envolto em bandagens fará com que alguém seja puxado pelos espaços entre as bandagens, para nunca mais retornar. Fiquei com muito medo de verificar.",
          },
        ],
      },
      {
        id: 357,
        nome: "trópio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cachos de frutas deliciosas crescem em volta de seu pescoço. em áreas quentes, muitas fazendas cultivam Tropius.",
          },
        ],
      },
      {
        id: 358,
        nome: "chimecho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pode emitir ondas de ar poderosas o suficiente para derrubar presas mais altas que ele mesmo. Suponho que ele amplifica o som fraco do vento dentro de seu corpo.",
          },
        ],
      },
      {
        id: 359,
        nome: "absoluto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Por causa da capacidade deste Pokémon de detectar danger, as pessoas confundiram Absol com um portador odestruição.",
          },
        ],
      },
      {
        id: 360,
        nome: "wynaut",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tende a se mover em grupo com outros. eles se agrupam em um grupo compacto para dormir em uma caverna.",
          },
        ],
      },
      {
        id: 361,
        nome: "ronco",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Chega junto com a primeira neve. Acredita-se que as casas que Snorunt visita prosperarão por muitas gerações. Por tradição, pode-se oferecer um pedaço de gelo feito de água pura na porta da frente.",
          },
        ],
      },
      {
        id: 362,
        nome: "glalie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele cobre seu corpo com uma armadura de gelo mais dura que o aço. Usa sua respiração para congelar suas presas, que então as devora como se fossem sobremesas congeladas.",
          },
        ],
      },
      {
        id: 363,
        nome: "spheal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Durante a temporada em que o gelo flutuante se aproxima da costa, Spheal prefere viver no gelo - onde menos predadores se escondem - em vez do que na terra. Seu pelo retém o calor de maneira excelente e resiste ao frio intenso.",
          },
        ],
      },
      {
        id: 364,
        nome: "sealeo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus bigodes brancos são muito sensíveis. Sealeo equilibrará Spheal a ponta de seu nariz, verificando seu cheiro e sua sensação para ter certeza de o Spheal está saudável.",
          },
        ],
      },
      {
        id: 365,
        nome: "walrein",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas presas grossas são fortes o suficiente para quebrar o gelo flutuante. Sabe-se que elas quebram, mas voltarão a crescer no próximo ano. a região de Hisui é bem conhecida por essas presas quebradas.",
          },
        ],
      },
      {
        id: 366,
        nome: "clamperl",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pérolas de Clamperl são extremamente preciosas. elas podem ser mais de 10 vezes mais caras que as pérolas de Shellder.",
          },
        ],
      },
      {
        id: 367,
        nome: "huntail",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mares profundos são seu habitat. De acordo com tradição, quando Huntail chegar à costa, algo infeliz acontecerá.",
          },
        ],
      },
      {
        id: 368,
        nome: "gorebyss",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele suga os fluidos corporais de suas presas. Os restos de carne afundam no fundo do mar, onde se tornam alimento para outros Pokémon.",
          },
        ],
      },
      {
        id: 369,
        nome: "relicanto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon foi descoberto durante uma exploração em águas profundas. Sua aparência não mudou em 100 milhões de anos, por isso é chamado de fóssil vivo.",
          },
        ],
      },
      {
        id: 370,
        nome: "luvdisc",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Luvdisc vive em recifes de corais em mares quentes. Ele gosta especialmente de dormir no espaço entre os galhos de Corsola.",
          },
        ],
      },
      {
        id: 371,
        nome: "bagão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Bagon é um Pokémon solitário que não forma grupos com outros de sua espécie. Ele também tem uma cabeça dura o suficiente para partir uma pedra com um golpe.",
          },
        ],
      },
      {
        id: 372,
        nome: "sheldon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Shelgon ignora completamente sua fome, nunca comendo enhum alimento. Aparentemente, Shelgon evoluirá quando ausar todas as suas reservas de energia.",
          },
        ],
      },
      {
        id: 373,
        nome: "salamência",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto aproveitar a alegria de voar geralmente mantém este Pokémon animado, Salamence se transforma em uma ameaça incontrolável se algo o irrita.",
          },
        ],
      },
      {
        id: 374,
        nome: "beldum",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As células do corpo deste Pokémon são compostas de material magnético. Em vez de sangue, forças magnéticas fluem através do corpo de Beldum.",
          },
        ],
      },
      {
        id: 375,
        nome: "metang",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usando forças magnéticas para se manter no ar, este Pokémon voa em alta velocidade, serpenteando por terrenos montanhosos em busca de presas.",
          },
        ],
      },
      {
        id: 376,
        nome: "metagross",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Metagross é o resultado da fusão de dois Metang. Este Pokémon derrota seus oponentes através do uso de seu cérebro de supercomputador.",
          },
        ],
      },
      {
        id: 377,
        nome: "regirock",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tecnologia de ponta foi usada para estudar o interior do corpo rochoso deste Pokémon, mas nada foi encontrado—nem mesmo um cérebro ou um coração.",
          },
        ],
      },
      {
        id: 378,
        nome: "regice",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O corpo deste Pokémon é feito de gelo sólido. Diz-se que Regice nasceu sob gelo espesso na era do gelo.",
          },
        ],
      },
      {
        id: 379,
        nome: "registro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há rumores de que este Pokémon nasceu no fundo do manto do planeta e que e emergiu na superfície há 10.000 anos.",
          },
        ],
      },
      {
        id: 380,
        nome: "latias",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Latias é altamente inteligente e capaz de entender a fala humana. Ele é coberto por uma penugem semelhante a vidro. O Pokémon envolve seu corpo com a penugem e refrata a luz para alterar sua aparência.",
          },
        ],
      },
      {
        id: 381,
        nome: "latios",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Latios só abrirá seu coração para um Treinador com espírito compassivo. Este Pokémon pode voar mais rápido que um avião a jato dobrando suas patas dianteiras para minimizar a resistência do ar.",
          },
        ],
      },
      {
        id: 382,
        nome: "kyogre",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que Kyogre é a personificação do próprio mar. as lendas contam sobre seus muitos confrontos contra Groudon, como cada um deles procurou obter o poder da natureza.",
          },
        ],
      },
      {
        id: 383,
        nome: "groudon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Através da Reversão Primal e com todo o poder da natureza, ele recuperará sua verdadeira forma. Pode fazer com que o magma erupcione e expanda a massa terrestre do mundo.",
          },
        ],
      },
      {
        id: 384,
        nome: "rayquaza",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele voa para sempre através da camada de ozônio, consumindo meteoróides para seu sustento. Os muitos meteoróides o seu corpo fornecem a energia que ele precisa para Mega Evoluir.",
          },
        ],
      },
      {
        id: 385,
        nome: "jirachi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Acredita-se que quando este Pokémon acordar de seu sono de 1.000 anos, ele realizará todos os desejos escritos nas notas anexadas à sua cabeça.",
          },
        ],
      },
      {
        id: 386,
        nome: "deoxys",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Deoxys surgiu de um vírus que veio do espaço. É altamente inteligente e possui poderes psicocinéticos. Este Pokémon dispara lasers a partir do órgão cristalino em seu peito.",
          },
        ],
      },
      {
        id: 387,
        nome: "turtwig",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon se torna mais energético quanto mais luz solar há. A parte que se assemelha a uma concha é semelhante ao lodo e é levemente dúmida e quente ao toque.",
          },
        ],
      },
      {
        id: 388,
        nome: "grotle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Aparece onde há água limpa de nascente. A fruta que cresce os arbustos em sua casca é doce, nutritiva e verdadeiramente deliciosa.",
          },
        ],
      },
      {
        id: 389,
        nome: "torterra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon notável e de grande porte serviria lindamente como cenário emprestado para um jardim, e sua força é incomparável. Torterra vaga pela natureza em busca de água limpa.",
          },
        ],
      },
      {
        id: 390,
        nome: "chimchar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cheio de vigor e sempre animado. Já foi conhecido pelo nome de ”Cauda-Lanterna” e temido como algum tipo de aparição.",
          },
        ],
      },
      {
        id: 391,
        nome: "monferno",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto mais profundo o azul em sua face, mais poderoso ele se tornará se tornará. Ele salta em todas as direções e desfere golpes poderosos contra seus oponentes com a chama em sua cauda.",
          },
        ],
      },
      {
        id: 392,
        nome: "infernape",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon alto e resistente com uma aparência deslumbrante. Ele se envolve em chamas e luta como se estivesse dançando - realmente um espetáculo para ser visto.",
          },
        ],
      },
      {
        id: 393,
        nome: "piplup",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Prefere climas frios e aparece ao longo da costa. É uma coisinha adorável - tão fofa quanto qualquer criança - mas também é orgulhosa, não aceita esmolas das pessoas.",
          },
        ],
      },
      {
        id: 394,
        nome: "prinplup",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele nada graciosamente através do mar gelado e canta com uma voz como a da maré. Ele tem asas poderosas e robustas e dignidade para combinar.",
          },
        ],
      },
      {
        id: 395,
        nome: "empoleão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Desde os tempos antigos, ele é reverenciado pelo povo de Hisui, que o chama de Mestre das Ondas. Suas asas são páreo até mesmo para lâminas feitas por mestres.",
          },
        ],
      },
      {
        id: 396,
        nome: "estrelado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles vivem nos campos e montanhas, reunindo-se em grandes bandos. Seus gritos são bastante desagradáveis. Embora pequenos, suas asas são fortes - um golpe deles causa uma dor que persiste por uma semana.",
          },
        ],
      },
      {
        id: 397,
        nome: "staravia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles formam bandos notavelmente grandes e estão constantemente brigando entre si. Suspeito que aqueles com plumas magníficas na cabeça sejam os mais fortes.",
          },
        ],
      },
      {
        id: 398,
        nome: "staraptor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele deixou o rebanho, tendo ganhado força suficiente para sobreviver por conta própria. A força surpreendente com a qual o Staraptor voa pelo ar permite que ele carregue alvos grandes e corpulentos.",
          },
        ],
      },
      {
        id: 399,
        nome: "bidoof",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Bidoof tem um rosto pouco sofisticado e raramente fica perturbado com nada. Houve incidentes envolvendo Bidoof passeando em aldeias e roendo as casas sem um único cuidado.",
          },
        ],
      },
      {
        id: 400,
        nome: "bibarel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pelo de Bibarel repele a água e também é um material fantástico para retenção de calor. Esses Pokémon criam represas nos rios para viver.",
          },
        ],
      },
      {
        id: 401,
        nome: "cricketot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando as árvores adquirem novos tons, mais desses Pokémon aparecem. O tom que eles criam ao bater suas antenas se assemelha ao da marimba, um instrumento de terras estrangeiras.",
          },
        ],
      },
      {
        id: 402,
        nome: "cricketune",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa seus braços semelhantes a um cutelo para produzir som, cuja melodia de varia de indivíduo para indivíduo. Vale a pena esforço procurar suas músicas favoritas.",
          },
        ],
      },
      {
        id: 403,
        nome: "shinx",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Balança o corpo para gerar eletricidade. Sua estatura desmente sua agressividade—é preciso ter paciência para domar este Pokémon.",
          },
        ],
      },
      {
        id: 404,
        nome: "luxo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usa com orgulho suas garras eletrificadas como armas. Parece ser um Pokémon gracioso, compartilhando uniformemente os despojos da caça com outros de sua espécie.",
          },
        ],
      },
      {
        id: 405,
        nome: "luxray",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles formam bandos, cada um tendo um homem como líder. As lendas dizem que quando os dois olhos de Luxray brilham com ouro, o Pokémon pode ver através de qualquer coisa.",
          },
        ],
      },
      {
        id: 406,
        nome: "budew",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando a luz do sol se fortalece, o botão no topo da cabeça deste Pokémon se abre. Este é um sinal para as pessoas de que o inverno rigoroso acabou e a estação do brotamento já começou.",
          },
        ],
      },
      {
        id: 407,
        nome: "rosarada",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Escondidos dentro do buquê em cada mão estão chicotes espinhosos carregados com veneno virulento. Roserade se move graciosamente enquanto encurrala suas presas e as açoita impiedosamente com seus chicotes.",
          },
        ],
      },
      {
        id: 408,
        nome: "cranidos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma visão incrivelmente rara. Eles duelam entre si batendo suas cabeças uma contra a outra, e o som resultante ecoa por toda aárea como o repique de um sino.",
          },
        ],
      },
      {
        id: 409,
        nome: "rampardos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muito pouco se sabe sobre sua biologia. Pode derrubar árvores massivas ao esmagar sua bela coroa perolada contra elas.",
          },
        ],
      },
      {
        id: 410,
        nome: "shieldon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muito permanece desconhecido sobre este Pokémon, já que poucos o viram. No entanto, sabemos que ele é calmo e não gosta de conflitos, e gosta de polir seu rosto em árvores e pedras.",
          },
        ],
      },
      {
        id: 411,
        nome: "bastiodonte",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua face é robusta — tão forte quanto um diamante — e essa dureza oferece uma defesa muito estável. Muito sobre esta espécie ainda é desconhecido, como seu habitat natural.",
          },
        ],
      },
      {
        id: 412,
        nome: "burmy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se sua capa estiver levemente danificada, Burmy irá consertá-la imediatamente com o que estiver à mão. O Pokémon dentro da capa é magricela e vulnerável ao frio.",
          },
        ],
      },
      {
        id: 413,
        nome: "wormadam",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Burmy evoluiu, sua capa se tornou parte do corpo deste Pokémon. A capa nunca é retirada.",
          },
        ],
      },
      {
        id: 414,
        nome: "mothim",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Espalha escamas cor de aço enquanto bate as asas. Apesar de ser observado alimentando-se principalmente do néctar das flores, Mothim não é visto com frequência em jardins floridos.",
          },
        ],
      },
      {
        id: 415,
        nome: "combee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles juram fidelidade a um Pokémon rainha e trabalham diligentemente para coletar néctar. Cada enxame produz um sabor diferente de mel.",
          },
        ],
      },
      {
        id: 416,
        nome: "vespiquén",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Comanda seus súditos a construírem sua colméia. Ele despachará qualquer intruso que ousar entrar furtivamente em seu ninho e usá-los como alimento para si mesmo.",
          },
        ],
      },
      {
        id: 417,
        nome: "pachirisu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma espécie relacionada à linhagem Pikachu. Embora Pachirisu seja um Pokémon calmo, ele ainda representa um perigo caso alguém toque sua ecauda ou bochechas eletrificadas.",
          },
        ],
      },
      {
        id: 418,
        nome: "buizel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se move livremente na água girando sua cauda bifurcada para propulsão. A semelhança com a hélice de um barco a vapor é coincidência.",
          },
        ],
      },
      {
        id: 419,
        nome: "floatzel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tem um longo e esplêndido saco de flutuação, que evita que Floatzel se afogue mesmo em mares tempestuosos. Pode-se vislumbrar esta espécie perto de aldeias de pescadores de vez em quando.",
          },
        ],
      },
      {
        id: 420,
        nome: "querubim",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando a fruta que cresce ao lado do corpo principal estiver grande e rechonchuda, Querubi usará os nutrientes contidos nela para evoluir. A fruta se separa, tornando-se alimento para outras criaturas.",
          },
        ],
      },
      {
        id: 421,
        nome: "cherrim",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Imóvel, exceto por uma aljava ocasional. Uma rica variedade de Pokémon pode ser encontrada reunida em torno dele, atraída pelo scheiro exalado das pétalas dobradas de Cherrim.",
          },
        ],
      },
      {
        id: 422,
        nome: "shellos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Encontradas em abundância em praias que margeiam águas quentes. as conchas são inesperadamente amigáveis e rastejarão em direção a qualquer pessoa que encontrarem. Tome cuidado para não ficarem cobertas de muco!",
          },
        ],
      },
      {
        id: 423,
        nome: "gastrodon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Come areia da praia para se alimentar. Se um Gastrodon encontrar outro de cor diferente, uma batalha feroz inevitavelmente acontecerá.",
          },
        ],
      },
      {
        id: 424,
        nome: "ambipom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Para afirmar seu parentesco, os membros desta espécie formarão um anel ligando suas caudas recém-duplas. Em raras ocasiões, humanos foram aceitos em tais anéis.",
          },
        ],
      },
      {
        id: 425,
        nome: "drifloon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Diz-se que atrai crianças pequenas e as leva para a vida após a morte. Alguns sussurram que os Drifloon são formados por almas humanas reencarnadas, mas esses rumores ainda não foram confirmados.",
          },
        ],
      },
      {
        id: 426,
        nome: "drifblim",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele flutua ao anoitecer, perfeitamente silencioso. Seu aspecto transitório e melancólico toca algumas pessoas profundamente - de vez em quando, alguém se depara com uma música ou poema dedicado a Drifblim.",
          },
        ],
      },
      {
        id: 427,
        nome: "bunário",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Minha hipótese sobre o motivo pelo qual Buneary arregaça as orelhas é que sua de audição é muito aguçada. Presumo que o Pokémon proteja sua de audição limitando o som que pode entrar em seus ouvidos.",
          },
        ],
      },
      {
        id: 428,
        nome: "lopunny",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu pelo é quente e ainda assim notavelmente leve. Este Pokémon chuta como um mestre de caratê, repelindo seus oponentes com facilidade.",
          },
        ],
      },
      {
        id: 429,
        nome: "mismagius",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os encantamentos que Mismagius entoa podem proteger contra o infortúnio, então existe o costume de convidá-lo para entrar em sua casa. Incorra no desagrado do Pokémon, entretanto, e o desastre certamente acontecerá.",
          },
        ],
      },
      {
        id: 430,
        nome: "honchkrow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um grito deste Pokémon e o assassinato de Murkrow vem voando. Nessas horas, alguém poderia pensar que a cortina da noite caiu, mergulhando o mundo em uma escuridão negra.",
          },
        ],
      },
      {
        id: 431,
        nome: "glameow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Encanta os humanos com sua cauda helicoidal e olhar penetrante. Suas garras ocultas também são bastante afiadas, tornando este Pokémon um oponente extremamente complicado se for antagonizado.",
          },
        ],
      },
      {
        id: 432,
        nome: "purugly",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora atrevido e difícil de domar, Purugly goza de grande popularidade devido ao seu pelo, cuja beleza supera emesmo o veludo.",
          },
        ],
      },
      {
        id: 433,
        nome: "chingling",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon me deu uma dor de cabeça insuportável quando aparentemente gritou sem emitir nenhum som. Talvez existam alguns sons que o ouvido humano é simplesmente incapaz de ouvir.",
          },
        ],
      },
      {
        id: 434,
        nome: "fedorento",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O veneno que jorra de sua extremidade traseira é acompanhado por um odor malcheiroso e malcheiroso com tal potência que uma baforada pode induzir perda de memória.",
          },
        ],
      },
      {
        id: 435,
        nome: "skuntank",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Espalha um fluido venenoso para derrubar a presa. Às vezes, incapaz de tolerar o fedor de seu próprio fluido, ele deixa a presa superada intacta.",
          },
        ],
      },
      {
        id: 436,
        nome: "bronzeador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Flutua usando uma energia misteriosa. O padrão gravado em seu verso é considerado sagrado e às vezes pode ser encontrado em imagens de cemitérios antigos e outros lugares desgastados pelo tempo.",
          },
        ],
      },
      {
        id: 437,
        nome: "bronze",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Alguns acreditam que seu grito semelhante ao de um sino abre buracos para outro mundo. ele é reverenciado como uma divindade desde os tempos antigos.",
          },
        ],
      },
      {
        id: 438,
        nome: "bom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas lágrimas despertam a simpatia de quem as vê, mas não se deixe enganar! Essa expulsão de água corporal é apenas um mecanismo fisiológico para se manter em boa saúde.",
          },
        ],
      },
      {
        id: 439,
        nome: "mime-jr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Conhecido por aparecer em mercados movimentados de vez em quando. ele imita as pessoas como uma criança faria, depois observa como elas reagem, com os olhos brilhando.",
          },
        ],
      },
      {
        id: 440,
        nome: "feliz",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Imitando Chansey, ele mantém uma pedra redonda enfiada em sua bolsa abdominal e a valoriza muito. Ele se dá bem com crianças e às vezes brinca de casinha com elas para se divertir.",
          },
        ],
      },
      {
        id: 441,
        nome: "chatot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um artista versátil, hábil na imitação da fala humana. Diz-se que Chatot mais velho e mais experiente pode até compreender o significado das palavras que imita.",
          },
        ],
      },
      {
        id: 442,
        nome: "espiritomb",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele lança maldições ao ter pensamentos perversos. Escritos dizem que este Pokémon nasceu da reunião de cinco vintenas e oito espíritos malévolos.",
          },
        ],
      },
      {
        id: 443,
        nome: "gible",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele nidifica em cavernas intocadas pela luz solar. Seus dentes afiados podem cair quando desgastados ou após um impacto, mas eles voltam a crescer alguns dias.",
          },
        ],
      },
      {
        id: 444,
        nome: "gabite",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora Gabite seja geralmente de temperamento violento, quando eu dei a inguém uma conta de vidro que ele estava olhando cobiçosamente, de repente se tornou bastante dócil.",
          },
        ],
      },
      {
        id: 445,
        nome: "garchomp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Voa pelos céus a uma velocidade ofuscante — uma visão magnífica! ele tem uma disposição selvagem. É necessário extremo cuidado se encontrar um Garchomp na selva.",
          },
        ],
      },
      {
        id: 446,
        nome: "munchlax",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu estômago robusto permite que ele devore com indiferença até mesmo matéria podre. Ele visita frequentemente as aldeias, em busca de restos de comida sados para compostagem.",
          },
        ],
      },
      {
        id: 447,
        nome: "riolu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora de aparência infantil, ele tem a habilidade misteriosa de ler as mentes dos humanos. Os puros de coração são recebidos com a aprovação de Riolu, enquanto aqueles de natureza doentia ganham apenas sua aversão.",
          },
        ],
      },
      {
        id: 448,
        nome: "lucário",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma criatura de aparência muito galante. Ela emite ondas de energia e controla-as com precisão, usando-as para sentir até mesmo seres distantes. Eu dei o nome de ”aura” a este poder.",
          },
        ],
      },
      {
        id: 449,
        nome: "hipopótamos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora grande e lânguido, o Hippopotas é difícil de detectar ddevido à sua tendência de se enterrar e se esconder sob o solo. Quando agitado ou excitado, ele expele areia pelas narinas.",
          },
        ],
      },
      {
        identificação: 450,
        nome: "hippowdon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De temperamento curto e facilmente levado à violência. Ele chicoteia redemoinhos de areia para esmagar os espíritos de seus inimigos, então parte para o ataque.",
          },
        ],
      },
      {
        id: 451,
        nome: "skorupi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas garras não são apenas afiadas, mas também venenosas, tornando Skorupi um Pokémon altamente perigoso. No entanto, ele parece estar enfraquecido por tefrias.",
          },
        ],
      },
      {
        id: 452,
        nome: "drapião",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tem um temperamento brutal e feroz. Com imensa força e uma casca robusta na qual as espadas ricocheteiam, ele se agita e causa estragos.",
          },
        ],
      },
      {
        id: 453,
        nome: "croagunk",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um portador de veneno com uma personalidade covarde. Apesar dessas qualidades, esta espécie tem certa popularidade devido ao seu grito peculiar e características cômicas.",
          },
        ],
      },
      {
        id: 454,
        nome: "toxicroak",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas garras vermelhas contêm uma toxina virulenta. Essa toxina pode ser transformada em um tônico diluindo-a, misturando-a com vários tipos de grama selvagem e fervendo-a durante dois dias.",
          },
        ],
      },
      {
        id: 455,
        nome: "carnivina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora este seja um Pokémon planta, ele tem um temperamento glutão e rebelde. Carnivine ataca sua presa com sua boca cavernosa aberta.",
          },
        ],
      },
      {
        id: 456,
        nome: "finneon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Que vista deslumbrante este Pokémon tem enquanto nada com suas longas nadadeiras caudais pintadas de rosa flutuando atrás dele. A bela a aparência de Finneon levou ao seu apelido: ”peixe elegante”.",
          },
        ],
      },
      {
        id: 457,
        nome: "lumineon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usa suas barbatanas brilhantes para caçar suas presas. A vista de Lumineon escolarizando perto da superfície do mar à noite é de tirar o fôlego - é como se houvesse estrelas brilhantes bem ali.",
          },
        ],
      },
      {
        id: 458,
        nome: "mantyke",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora tenha o formato de uma bola, este Pokémon é um nadador proficiente. Descobri que se um Mantyke passar muito tempo com escolas de Remoraid, ele eventualmente alcançará a evolução.",
          },
        ],
      },
      {
        id: 459,
        nome: "snover",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É provável que alguém encontre este Pokémon enquanto estiver na neve. Há histórias de Snover aparecendo em assentamentos humanos, mas ão causando nenhum dano - em vez disso, eles se relacionam com as crianças.",
          },
        ],
      },
      {
        id: 460,
        nome: "abomasnow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon poderoso que pode quebrar pedras enormes com facilidade. Não gosta de se associar com outras pessoas e escolhe viver tranquilamente nas profundezas das montanhas, brincando com a neve.",
          },
        ],
      },
      {
        id: 461,
        nome: "weavile",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta espécie encurrala presas em matilha, sob a orientação de um líder. Weavile demonstra maior astúcia, levando-me a especular que sua evolução causou maior desenvolvimento cerebral.",
          },
        ],
      },
      {
        id: 462,
        nome: "magnezona",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eu teorizo que um campo magnético especial influenciou este Pokémon, alterando sua estrutura molecular e fazendo com que ele evoluísse. Ele emite estranhas ondas de rádio em direção ao espaço a partir de sua antena.",
          },
        ],
      },
      {
        id: 463,
        nome: "lickilicky",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua língua pode se estender e contrair livremente, e é capaz de alcançar comprimentos superiores a 10 vezes a altura de Lickilicky. Cuidado com a saliva, pois ela contém elementos corrosivos.",
          },
        ],
      },
      {
        id: 464,
        nome: "riperior",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon evoluiu através do uso de um item curioso. Seu couro rochoso é composto de uma substância misteriosa e pode resistir ao golpe de uma espada magistral sem nenhum arranhão.",
          },
        ],
      },
      {
        id: 465,
        nome: "tangrowth",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Envolto em longas trepadeiras, ele se assemelha a um arbusto. ele balança feixes de trepadeiras como se fossem braços, envolvendo-os em torno da presa para capturá-la.",
          },
        ],
      },
      {
        id: 466,
        nome: "eletivire",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua evolução foi induzida por um item incomum, e sua produção elétrica aumenta junto com sua frequência cardíaca. De suas caudas, ele pode liberar uma corrente elétrica medindo 20.000 volts.",
          },
        ],
      },
      {
        id: 467,
        nome: "magmortar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O uso de um item estranho fez com que este Pokémon evoluísse. Bolas de fogo lançadas das extremidades de seus braços tubulares são quentes o suficiente para derreter uma panela de ferro em um instante.",
          },
        ],
      },
      {
        id: 468,
        nome: "togekiss",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Poucas pessoas já avistaram este Pokémon. Depois de estudar o que resta da literatura, tenho certeza de que Togekiss se revelará quando a paz reinar na terra.",
          },
        ],
      },
      {
        id: 469,
        nome: "yanmega",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Extremamente violento. Ao caçar, ele não desperdiça energia, ao mirando apenas nos pontos mais vulneráveis da presa. Qualquer um que consiga domar este Pokémon deve ter uma bravura incrível.",
          },
        ],
      },
      {
        id: 470,
        nome: "folha",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Células semelhantes às de plantas foram encontradas em seu pelo. Sua cauda dura pode derrubar uma grande árvore com um único golpe, e a afiação da cauda supera até mesmo a de uma espada feita por um mestre.",
          },
        ],
      },
      {
        id: 471,
        nome: "glaceon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Glaceon é capaz de baixar sua temperatura corporal muito rapidamente. ele congela a atmosfera, criando pó de diamante que brilha como pedras preciosas enquanto vibra e dança.",
          },
        ],
      },
      {
        id: 472,
        nome: "gliscor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele desliza silenciosamente sobre asas negras e afunda presas afiadas na garganta de sua presa. Ele assume uma aparência de satisfação quando drena completamente o sangue de sua presa.",
          },
        ],
      },
      {
        id: 473,
        nome: "mamoswine",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta espécie atingiu seu apogeu durante o período conhecido como boa idade. Suspeito que o clima frio de Hisui esteja em harmonia com a constituição de Mamoswine, despertando assim um potencial oculto.",
          },
        ],
      },
      {
        id: 474,
        nome: "porygon-z",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um item curioso induziu esta evolução. As capacidades ofensivas do Pokémon aumentaram bastante, mas a estranheza de seu comportamento aumentou na mesma medida. Isso me preocupa.",
          },
        ],
      },
      {
        id: 475,
        nome: "gallade",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As lâminas que se estendem de seus cotovelos são mais afiadas que as melhores espadas. Sua esgrima, embora autodidata, é surpreendentemente impressionante.",
          },
        ],
      },
      {
        id: 476,
        nome: "probopass",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele é capaz de emitir um magnetismo poderoso, permitindo-lhe controlar a areia de ferro que forma seu bigode delicioso. Usando esta areia de ferro, Probopass forma pedras duras com as quais ele golpeia suas presas.",
          },
        ],
      },
      {
        id: 477,
        nome: "dusknoir",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Vai para aqueles cujas vidas chegaram ao fim e acompanha suas almas para a vida após a morte. Conhecido por levar erroneamente as almas daqueles que ainda têm vida, embora raramente.",
          },
        ],
      },
      {
        id: 478,
        nome: "froslass",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon habitado pela alma de uma mulher que morreu guardando rancor nas montanhas nevadas. Lendas de Froslass lançando maldições demortais em homens malcomportados provocam arrepios na minha espinha.",
          },
        ],
      },
      {
        id: 479,
        nome: "rotom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon bizarro parece ser um fogo-fátuo alimentado por eletricidade. Tenha cuidado, pois Rotom é inteligente e travesso.",
          },
        ],
      },
      {
        id: 480,
        nome: "uxie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon temido, mas também respeitado, por roubar memórias de malfeitores. Encontrei registros que sugerem que Uxie detém domínio sobre o conhecimento.",
          },
        ],
      },
      {
        id: 481,
        nome: "mesprit",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Conhecido como o Ser da Emoção. Na lenda, este Pokémon era temido, pois qualquer um que demonstrasse desrespeito teria suas emoções desordenadas.",
          },
        ],
      },
      {
        id: 482,
        nome: "azelf",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O temido Ser da Força de Vontade. Lendas contam que esse Pokémon manipula a vontade de seus adversários e os transforma em fantoches próprios.",
          },
        ],
      },
      {
        id: 483,
        nome: "dialga",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é reverenciado como uma divindade na lenda Hisuiana. O nascimento de Dialga foi o que fez com que o vasto rio do tempo começasse a fluir em nosso mundo.",
          },
        ],
      },
      {
        id: 484,
        nome: "palkia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é temido como uma divindade na lenda Hisuiana. O nascimento ode Palkia foi o que fez com que as paredes do nosso mundo desaparecessem, criando um céu que se estende pelo infinito.",
          },
        ],
      },
      {
        id: 485,
        nome: "heatran",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As histórias contam que este Pokémon nasceu do magma fervente dentro do Monte Coronet. Seu corpo de aço fundido guarda muitos mistérios.",
          },
        ],
      },
      {
        id: 486,
        nome: "regigigas",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De acordo com a lenda, Regigigas uniu massas de terra e as amarrou com uma corda para criar o continente de Hisui. Embora eu tenha minhas dúvidas, a história pode muito bem conter um pingo de verdade.",
          },
        ],
      },
      {
        id: 487,
        nome: "giratina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há um verso hisuiano que fala de uma luz poderosa criando uma sombra profunda. Imagino que essa sombra profunda seja Giratina.",
          },
        ],
      },
      {
        id: 488,
        nome: "cresselia",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cresselia lembra a lua crescente. Ela deixa uma linha de luz brilhante em seu rastro enquanto voa pelo céu noturno. Atrevo-me a dizer que se parece com a donzela celestial que criou a Via Láctea.",
          },
        ],
      },
      {
        id: 489,
        nome: "phione",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pode ser visto flutuando no mar durante as estações em que os mares estão quentes. Seu corpo azul se mistura com as águas do oceano - a lógica sugere que este é um mecanismo de defesa contra predadores naturais.",
          },
        ],
      },
      {
        id: 490,
        nome: "manaphy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há rumores de que ele migra através dos oceanos e visita as águas costeiras de Hisui apenas raramente. Embora Manaphy se pareça com Phione, também é bem diferente. A relação entre os dois não é clara.",
          },
        ],
      },
      {
        id: 491,
        nome: "darkrai",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em uma noite sem lua, ocorreu um estranho incidente no qual todos enhum dos habitantes de uma aldeia sofreu pesadelos. Os aldeões atestaram que Darkrai apareceu diante deles nesses pesadelos.",
          },
        ],
      },
      {
        id: 492,
        nome: "shaymin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando a mudança das estações traz o fim do inverno cruel e as pessoas alegres dão graças aos céus, Shaymin aparece e cobre a terra seca com flores.",
          },
        ],
      },
      {
        id: 493,
        nome: "arceus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É a fonte celestial de onde jorra a luz que brilha através de Hisui. Sua luminosidade guia e protege todos os Pokémon. a mitologia hisuiana afirma que Arceus é o criador de todas as coisas.",
          },
        ],
      },
      {
        id: 494,
        nome: "victini",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele compartilha a energia infinita que cria, todo o corpo desse ser estará transbordando de poder.",
          },
        ],
      },
      {
        id: 495,
        nome: "snivy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles fotossintetizam banhando suas caudas na ssolar. Quando não estão se sentindo bem, suas caudas caem.",
          },
        ],
      },
      {
        id: 496,
        nome: "serviço",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando fica sujo, suas folhas não podem ser usadas na fotossíntese, então ele sempre se mantém limpo.",
          },
        ],
      },
      {
        id: 497,
        nome: "serperior",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode parar os movimentos de seus oponentes com apenas um brilho. Ele absorve energia solar e aumenta it internamente.",
          },
        ],
      },
      {
        id: 498,
        nome: "tepig",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele adora comer frutas assadas, mas às vezes fica muito excitado e as queima até ficarem crocantes.",
          },
        ],
      },
      {
        id: 499,
        nome: "pignito",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando seu fogo interno se acende, seus movimentos ficam s mais nítidos e rápidos. Quando está em apuros, ele emite fumaça.",
          },
        ],
      },
      {
        id: 500,
        nome: "emboar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele domina movimentos de luta rápidos e poderosos. ele deixa crescer uma barba de fogo.",
          },
        ],
      },
      {
        id: 501,
        nome: "oshawott",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon da região de Unova usa a concha em sua barriga como arma para derrubar seus inimigos. Por isso, conferi a esta concha o nome de ”concha”.",
          },
        ],
      },
      {
        id: 502,
        nome: "dewott",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua técnica requintada de golpe duplo é provavelmente o resultado de treinamento diário e pode fazer com que até mesmo os mestres da lâmina fujam da derrota.",
          },
        ],
      },
      {
        id: 503,
        nome: "samurott",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De coração duro e lâmina hábil, esta forma rara de Samurott é um produto da evolução do Pokémon na região de Hisui. Seus golpes turbulentos atingem os inimigos como ondas incessantes.",
          },
        ],
      },
      {
        id: 504,
        nome: "patrat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Extremamente cauteloso, um deles estará sempre atento, mas não notará um inimigo vindo por trás.",
          },
        ],
      },
      {
        id: 505,
        nome: "watchog",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando eles vêem um inimigo, suas caudas ficam erguidas, e eles cospem as sementes das frutas armazenadas em suas bolsas.",
          },
        ],
      },
      {
        id: 506,
        nome: "lilipup",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é muito mais inteligente que a criança normal, e Lillipup não esquecerá o amor que recebe ou qualquer abuso que sofre.",
          },
        ],
      },
      {
        id: 507,
        nome: "herdeiro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pêlo preto que cobre o corpo deste Pokémon é denso e elástico. Até mesmo as presas afiadas saltam instantaneamente.",
          },
        ],
      },
      {
        id: 508,
        nome: "stoutland",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Stoutland tem imenso orgulho de seu impressionante debigode. Dizem que o comprimento do bigode é o que dedetermina a posição social entre esta espécie.",
          },
        ],
      },
      {
        id: 509,
        nome: "pernil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Oponentes que são atraídos por seu comportamento adorável saem com arranhões pungentes em suas garras êdeas e orgulho pungente em suas risadas.",
          },
        ],
      },
      {
        id: 510,
        nome: "liepard",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon furtivo se aproxima furtivamente atrás de uma presa sem fazer nenhum som. Ele compete com Thievul por território.",
          },
        ],
      },
      {
        id: 511,
        nome: "pansagem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É bom em encontrar frutas e colhê-las em todos os lugares. É gentil o suficiente para compartilhá-las com amigos.",
          },
        ],
      },
      {
        id: 512,
        nome: "simulação",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mal humorado, ele luta balançando sua cauda farpada em descontroladamente. A folha que cresce em sua cabeça é muito amarga.",
          },
        ],
      },
      {
        id: 513,
        nome: "pansear",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive em cavernas de vulcões. O fogo dentro do tufo em sua cabeça pode atingir 600 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 514,
        nome: "simisear",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele fica excitado, brasas sobem de sua cabeça e cauda e ele fica quente. Por alguma razão, ele adora doces.",
          },
        ],
      },
      {
        id: 515,
        nome: "panpour",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A água armazenada dentro do tufo em sua cabeça está cheia de nutrientes. As plantas que recebem sua água crescem grandes.",
          },
        ],
      },
      {
        id: 516,
        nome: "simipour",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele prefere lugares com água limpa. Quando seu tufo está baixo, ele o reabastece sugando água com sua cauda.",
          },
        ],
      },
      {
        id: 517,
        nome: "munna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele come sonhos e libera névoa. A névoa é rosa quando está comendo um sonho bom, e preta quando está comendo um pesadelo.",
          },
        ],
      },
      {
        id: 518,
        nome: "musharna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele dorme e sonha o tempo todo. É melhor deixar assim se acabou de acordar, pois é um terrível rabugento quando recém-acordado do sono.",
          },
        ],
      },
      {
        id: 519,
        nome: "pidove",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É esquecido e não muito inteligente, mas muitos Treinadores o adoram de qualquer maneira por sua simpatia e sinceridade.",
          },
        ],
      },
      {
        id: 520,
        nome: "tranquilo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon brilhantes têm memórias aguçadas. aparentemente, os entregadores costumam escolhê-los como seus parceiros.",
          },
        ],
      },
      {
        id: 521,
        nome: "desprezível",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é inteligente e extremamente orgulhoso. as pessoas vão notar se você se tornar o Treinador de um deles.",
          },
        ],
      },
      {
        id: 522,
        nome: "blitz",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua crina brilha quando descarrega eletricidade. eles usam a frequência e o ritmo desses flashes para se comunicar.",
          },
        ],
      },
      {
        id: 523,
        nome: "zebstrika",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles têm movimentos parecidos com relâmpagos. Quando Zebstrika corre a toda velocidade, o som do trovão reverbera.",
          },
        ],
      },
      {
        id: 524,
        nome: "roggenrola",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele detecta um ruído, ele começa a se mover. O núcleo de energia dentro dele deixa este Pokémon slevemente quente ao toque.",
          },
        ],
      },
      {
        id: 525,
        nome: "boldore",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele depende do som para monitorar o que está em sua vizinhança. Quando irritado, ele atacará sem unca mudar a direção para onde está olhando.",
          },
        ],
      },
      {
        id: 526,
        nome: "gigalito",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora suas explosões de energia possam explodir um caminhão basculante, elas têm uma limitação: elas só podem ser disparadas quando o sol está alto.",
          },
        ],
      },
      {
        id: 527,
        nome: "woobat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele emite ondas ultrassônicas enquanto se agita, procurando por sua presa - Pokémon inseto.",
          },
        ],
      },
      {
        id: 528,
        nome: "swoobat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O formato auspicioso do nariz deste Pokémon aparentemente levou algumas regiões a considerarem Swoobat um símbolo de boa sorte.",
          },
        ],
      },
      {
        id: 529,
        nome: "drilbur",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É um escavador, que usa suas garras para escavar o chão. Ele causa danos às plantações de vegetais, por isso muitos agricultores têm pouco amor por ele.",
          },
        ],
      },
      {
        id: 530,
        nome: "excadrill",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Conhecido como Drill King, este Pokémon pode tunnel através do terreno a velocidades superiores a 90 mph.",
          },
        ],
      },
      {
        id: 531,
        nome: "audino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon tem um coração bondoso. Ao tocar com seus sensores, Audino pode avaliar os sentimentos e condições físicas de outras criaturas.",
          },
        ],
      },
      {
        id: 532,
        nome: "timburr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os Timburr que começaram a carregar toras que são cerca de três vezes o seu tamanho estão quase prontos para evoluir.",
          },
        ],
      },
      {
        id: 533,
        nome: "gurdurr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Gurdurr é excelente em demolição—construção não é seu forte. Em qualquer caso, há habilidade na forma como este Pokémon maneja seu feixe de metal.",
          },
        ],
      },
      {
        id: 534,
        nome: "conkeldurr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao dar tudo de si, este Pokémon joga para o lado seus pilares de concreto e salta sobre os oponentes para esmurrá-los com os punhos.",
          },
        ],
      },
      {
        id: 535,
        nome: "timpo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa ondas sonoras para se comunicar com outros de sua espécie. Pessoas e outras espécies Pokémon não conseguem ouvir seus gritos de alerta.",
          },
        ],
      },
      {
        id: 536,
        nome: "palpitoad",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ocasionalmente, seus gritos são sublimemente agradáveis ao ouvido. Palpitoads com protuberâncias maiores no corpo podem cantar com uma gama mais ampla de sons.",
          },
        ],
      },
      {
        id: 537,
        nome: "seismitoad",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é popular entre os idosos, que dizem que as vibrações de seus caroços são ótimas para massagens.",
          },
        ],
      },
      {
        id: 538,
        nome: "troh",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles treinam em grupos de cinco. Qualquer membro que não conseguir acompanhar irá descartar seu cinturão e sair do grupo.",
          },
        ],
      },
      {
        id: 539,
        nome: "saw",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os golpes de caratê de um Sawk que treinou até o limite podem cortar o próprio oceano.",
          },
        ],
      },
      {
        id: 540,
        nome: "sewaddle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Como esse Pokémon faz suas próprias roupas com folhas, ele é um mascote popular entre designers de moda.",
          },
        ],
      },
      {
        id: 541,
        nome: "swadloon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se protege do frio enrolando-se em folhas. Ele permanece em movimento, comendo folhas nas florestas.",
          },
        ],
      },
      {
        id: 542,
        nome: "leavanny",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele mantém seus ovos aquecidos com o calor da fermentação folhas. Ele também usa folhas para fazer embalagens quentes para Sewaddle.",
          },
        ],
      },
      {
        id: 543,
        nome: "venípede",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas presas são altamente venenosas. Se este Pokémon encontra uma presa que acha que pode comer, ele salta sobre ela sem pensar em como as coisas podem acabar.",
          },
        ],
      },
      {
        id: 544,
        nome: "redemoinho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Whirlipede se protege com uma carapaça resistente e espinhos venenosos enquanto armazena a energia necessária para a evolução.",
          },
        ],
      },
      {
        id: 545,
        nome: "escolípede",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Scolipede se envolve em ferozes batalhas territoriais com Centiskorch. No final de uma dessas batalhas, o vencedor faz uma refeição com o perdedor.",
          },
        ],
      },
      {
        id: 546,
        nome: "algodão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tecer o algodão da Cottonee e Eldegoss produz tecidos requintados que são altamente valorizados por muitas marcas de luxo.",
          },
        ],
      },
      {
        id: 547,
        nome: "caprichosote",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto este Pokémon se banhar na luz do sol, seu algodão continuará crescendo. Se muita penugem de algodão se acumular, Whimsicott rasga-a e espalha-a.",
          },
        ],
      },
      {
        id: 548,
        nome: "petilil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As folhas em sua cabeça são altamente valorizadas para fins medicinais. Seque as folhas ao sol, ferva-as e depois beba a decocção amarga para um alívio notavelmente eficaz da fadiga.",
          },
        ],
      },
      {
        id: 549,
        nome: "liligante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suspeito que suas pernas bem desenvolvidas sejam o resultado de uma vida passada em montanhas cobertas de neve profunda. O perfume que ela exala de sua coroa de flores anima aqueles que estão por perto.",
          },
        ],
      },
      {
        id: 550,
        nome: "basculina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja diferente de outros basculinos em vários aspectos, incluindo comportamento - este é gentil - eu o categorizei como uma forma regional, dada a vasta gama de qualidades compartilhadas.",
          },
        ],
      },
      {
        id: 551,
        nome: "sandile",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sandile é pequeno, mas suas pernas e parte inferior do corpo são poderosas. Empurrando a areia para o lado enquanto avança, Sandile se move pelo deserto como se estivesse nadando.",
          },
        ],
      },
      {
        id: 552,
        nome: "krokorok",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora este Pokémon tenha olhos especializados que permitem ver no escuro, Krokorok não se move muito à noite—o deserto fica frio após o pôr do sol.",
          },
        ],
      },
      {
        id: 553,
        nome: "crookodile",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora terrivelmente agressivo, Krookodile também tem paciência para ficar escondido sob a areia por dias, esperando por uma presa.",
          },
        ],
      },
      {
        id: 554,
        nome: "darumaka",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este popular símbolo de boa sorte nunca cairá durante o sono, não importa como seja empurrado em puxado.",
          },
        ],
      },
      {
        id: 555,
        nome: "darmanitano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O nível de poder deste Pokémon aumenta junto com a tetemperatura de seu fogo, que pode chegar a 2.500 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 556,
        nome: "maractus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma vez por ano, este Pokémon espalha suas sementes. elas estão repletas de nutrientes, tornando-as uma preciosa fonte de alimento no deserto.",
          },
        ],
      },
      {
        id: 557,
        nome: "dwebble",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Primeiro ele tenta encontrar uma rocha para viver, mas se não houver rochas adequadas para serem encontradas, Dwebble pode mover-se para os portos de um Hippowdon.",
          },
        ],
      },
      {
        id: 558,
        nome: "crustle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas garras grossas são suas maiores armas. elas são poderosas o suficiente para quebrar a carapaça de Rhyperior.",
          },
        ],
      },
      {
        id: 559,
        nome: "escravo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se protege com sua pele durável. Acredita-se que este Pokémon evoluirá quando sua pele estiver completamente esticada.",
          },
        ],
      },
      {
        id: 560,
        nome: "espertinho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja mais conhecido por ter o temperamento de um rufião agressivo, este Pokémon cuida muito bem de sua família, amigos e território.",
          },
        ],
      },
      {
        id: 561,
        nome: "sigilifo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma descoberta foi feita no deserto onde Sigilyph voam. As ruínas do que pode ter sido uma cidade antiga foram encontradas sob as areias.",
          },
        ],
      },
      {
        id: 562,
        nome: "yamask",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O espírito de uma pessoa de uma época passada tornou-se este Pokémon. Ele vagueia pelas ruínas, procurando alguém que conheça seu rosto.",
          },
        ],
      },
      {
        id: 563,
        nome: "cofagrigus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Existem muitas representações de Cofagrigus decorando tumbas antigas. Elas são símbolos da riqueza que os reis de épocas passadas tinham.",
          },
        ],
      },
      {
        id: 564,
        nome: "tirtouga",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tirtouga é considerado o ancestral de muitos Pokémon tartaruga. Ele foi restaurado à vida a partir de um fóssil.",
          },
        ],
      },
      {
        id: 565,
        nome: "carracosta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon emerge da água em busca de uma presa, apesar de se mover mais slentamente em terra.",
          },
        ],
      },
      {
        id: 566,
        nome: "arque",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que Archen é o ancestral dos Pokémon pássaros. Ele vivia nas copas das árvores, comendo frutas e Pokémon insetos.",
          },
        ],
      },
      {
        id: 567,
        nome: "arqueops",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora capaz de voar, Arqueope aparentemente era melhor em caçar no solo.",
          },
        ],
      },
      {
        id: 568,
        nome: "lixo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon nasceu de um saco cheio de lixo. Galarian Weezing aprecia a fumaça expelida por Trubbish.",
          },
        ],
      },
      {
        id: 569,
        nome: "garbodor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O líquido tóxico que ele libera de seu braço direito é tão virulento que pode matar uma criatura enfraquecida instantaneamente.",
          },
        ],
      },
      {
        id: 570,
        nome: "zorua",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma alma que já partiu, voltou à vida em Hisui. Deriva o poder do ressentimento, que sobe como energia sobre sua cabeça e assume ão a forma de inimigos. Desta forma, Zorua desabafa malícia persistente.",
          },
        ],
      },
      {
        id: 571,
        nome: "zoroark",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com seu pelo branco desgrenhado, parece uma personificação da demorte. Indiferente à sua própria segurança, Zoroark ataca seus inimigos com uma energia amarga tão intensa que dilacera o próprio corpo de Zoroark.",
          },
        ],
      },
      {
        id: 572,
        nome: "minccino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles acariciam um ao outro com o rabo como forma de saudação. Dos dois, aquele cujo rabo é mais fofo é um pouco mais arrogante.",
          },
        ],
      },
      {
        id: 573,
        nome: "cinccino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um óleo especial que penetra em seus pelos os ajuda a evitar ataques. O óleo tem um alto preço o mercado.",
          },
        ],
      },
      {
        id: 574,
        nome: "gothita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mesmo quando parece que não há ninguém por perto, Gothita ainda pode ser ouvida soltando um grito abafado. Muitos acreditam que está falando com algo que só ela pode ver.",
          },
        ],
      },
      {
        id: 575,
        nome: "gotorita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nas noites em que as estrelas brilham, o poder psíquico deste Pokémon é mais forte. Não se sabe que ligação Gothorita tem com o universo maior.",
          },
        ],
      },
      {
        id: 576,
        nome: "gothitelle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um criminoso cujo destino foi mostrado por uma Gothitelle desapareceu no mesmo dia e nunca mais foi visto.",
          },
        ],
      },
      {
        id: 577,
        nome: "solose",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muitos dizem que o líquido especial que cobre o corpo deste Pokémon permitiria que ele sobrevivesse no vácuo do espaço.",
          },
        ],
      },
      {
        id: 578,
        nome: "duosão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu cérebro se dividiu em dois, e as duas metades raramente pensam da mesma forma. Suas ações são totalmente imprevisíveis.",
          },
        ],
      },
      {
        id: 579,
        nome: "reuniclus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que beber o líquido que envolve Reuniclus concede sabedoria. O problema é que o líquido é altamente tóxico para qualquer coisa além do próprio Reuniclus.",
          },
        ],
      },
      {
        id: 580,
        nome: "patinho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles são melhores nadando do que voando, e comem alegremente sua comida favorita, turfa, enquanto mergulham debaixo d'água.",
          },
        ],
      },
      {
        id: 581,
        nome: "swanna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Swanna começa a dançar ao anoitecer. Aquele que está dançando no meio é o líder do rebanho.",
          },
        ],
      },
      {
        id: 582,
        nome: "vanilita",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Supostamente, este Pokémon nasceu de uma icícula. Ele expele ar gelado a -58 graus Fahrenheit para ficar mais confortável.",
          },
        ],
      },
      {
        id: 583,
        nome: "vanilish",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele atinge os inimigos com ar frio que atinge -148 graus Fahrenheit, congelando-os. Mas poupa suas vidas depois disso - é um Pokémon gentil.",
          },
        ],
      },
      {
        id: 584,
        nome: "vaniluxe",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pessoas acreditam que este Pokémon se formou quando dois Vanillish ficaram juntos. Sua temperatura corporal é cerca de 21 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 585,
        nome: "veado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A mudança das estações muda a cor e cheiro do pelo deste Pokémon. As pessoas usam isso para marcar as estações.",
          },
        ],
      },
      {
        id: 586,
        nome: "sawbuck",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles migram de acordo com as estações, então algumas pessoas chamam Sawsbuck de arautos da primavera.",
          },
        ],
      },
      {
        id: 587,
        nome: "emolga",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon adora frutas doces. Às vezes ele enche as bochechas com tanta comida que não consegue voar direito.",
          },
        ],
      },
      {
        id: 588,
        nome: "karrablast",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele cospe um líquido da boca para derreter a casca do capacete. Karrablast não come a casca - come apenas o conteúdo.",
          },
        ],
      },
      {
        id: 589,
        nome: "escavalier",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele ataca seus inimigos, lanças em punho. Uma imagem de um de seus duelos é capturada em uma famosa pintura de Escavalier colidindo com Sirfetch'd.",
          },
        ],
      },
      {
        id: 590,
        nome: "foongus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os esporos liberados pelas mãos deste Pokémon são altamente venenosos, mas quando completamente secos, os esporos podem ser usados como remédio para o estômago.",
          },
        ],
      },
      {
        id: 591,
        nome: "amoonguss",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Amoonguss geralmente não se move muito. Ele tede ficar parado perto de Pokébolas que caíram no chão.",
          },
        ],
      },
      {
        id: 592,
        nome: "babado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Diz a lenda que os moradores de uma cidade antiga submersa se transformaram nestes Pokémon.",
          },
        ],
      },
      {
        id: 593,
        nome: "gelatina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sempre que há lua cheia no céu noturno, cardumes de Jellicent se reúnem perto da superfície do o mar, esperando que suas presas apareçam.",
          },
        ],
      },
      {
        id: 594,
        nome: "alomomola",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A razão pela qual ajuda Pokémon enfraquecidos é que qualquer Pokémon vindo atrás deles também pode atacar Alomomola.",
          },
        ],
      },
      {
        id: 595,
        nome: "joltik",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Joltik se agarra a outros Pokémon e suga eletricidade estática. Eles são frequentemente encontrados grudados nos quartos traseiros de Yamper.",
          },
        ],
      },
      {
        id: 596,
        nome: "galvântula",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele coloca armadilhas de fios eletrificados perto dos ninhos de Pokémon pássaros, com o objetivo de capturar filhotes que ainda não são bons em voar.",
          },
        ],
      },
      {
        id: 597,
        nome: "ferroseed",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cavernas cobertas de musgo são suas moradias preferidas. as enzimas contidas nos musgos ajudam os espinhos sferos de Ferroseed a crescerem grandes e fortes.",
          },
        ],
      },
      {
        id: 598,
        nome: "ferrothorn",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus espinhos são mais duros que aço. Este Pokémon rasteja através de paredes rochosas cravando os espinhos em suas antenas na pedra.",
          },
        ],
      },
      {
        id: 599,
        nome: "klink",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suspeita-se que Klink tenha sido a inspiração por trás da invenção das primeiras marchas pelos povos antigos.",
          },
        ],
      },
      {
        id: 600,
        nome: "klang",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muitas empresas na região de Galar escolhem Klang como logotipo. Este Pokémon é considerado o símbolo da tecnologia industrial.",
          },
        ],
      },
      {
        id: 601,
        nome: "klinklang",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As três engrenagens que compõem este Pokémon sgiram em alta velocidade. Seu novo equipamento com espinhos não é uma criatura viva.",
          },
        ],
      },
      {
        id: 602,
        nome: "tynamo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um sozinho pode emitir apenas um fio de eletricidade, então um grupo deles se reúne para desencadear um poderoso choque elétrico.",
          },
        ],
      },
      {
        id: 603,
        nome: "eelektrik",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon têm um grande apetite. Quando s avistam sua presa, eles a atacam e a paralisam com eletricidade.",
          },
        ],
      },
      {
        id: 604,
        nome: "eelektross",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles rastejam para fora do oceano usando seus braços. eles atacam as presas na costa e imediatamente as arrastam para o oceano.",
          },
        ],
      },
      {
        id: 605,
        nome: "elgyem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon foi descoberto há cerca de 50 anos a. Seu cérebro altamente desenvolvido lhe permite exercer seus poderes psíquicos.",
          },
        ],
      },
      {
        id: 606,
        nome: "beheeyem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Às vezes encontrado flutuando acima dos campos de trigo, este Pokémon pode controlar as memórias dos its oponentes.",
          },
        ],
      },
      {
        id: 607,
        nome: "litwick",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quanto mais jovem for a vida que este Pokémon absorve, mais brilhante e misteriosa será a chama em sua cabeça.",
          },
        ],
      },
      {
        id: 608,
        nome: "lâmpada",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se esconde nas cidades, fingindo ser uma lâmpada. Quando encontrar alguém cuja morte está próxima, seguirá silenciosamente atrás dele.",
          },
        ],
      },
      {
        id: 609,
        nome: "lustre",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Em casas iluminadas por Chandelure em vez de luzes, os funerais eram uma ocorrência constante— em é o que se diz.",
          },
        ],
      },
      {
        id: 610,
        nome: "axew",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles brincam uns com os outros batendo suas presas grandes uma contra a outra. Suas presas quebram às vezes, mas voltam a crescer tão rapidamente que isso não é uma preocupação.",
          },
        ],
      },
      {
        id: 611,
        nome: "fratura",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua pele é tão dura quanto uma armadura. A estratégia favorita de Fraxure é atacar seus oponentes, apunhalando-os com suas presas ao mesmo tempo.",
          },
        ],
      },
      {
        id: 612,
        nome: "haxorus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora geralmente seja bondoso, pode ser aterrorizante se agerado. Presas que podem cortar vigas de aço ao são como Haxorus lida com seus adversários.",
          },
        ],
      },
      {
        id: 613,
        nome: "cubchoo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele funga antes de executar um movimento, usando seu meleca gelada para fornecer um elemento gelado para qualquer movimento que precise dele.",
          },
        ],
      },
      {
        id: 614,
        nome: "beartic",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele nada energicamente em mares gelados. Quando fica cansado, ele congela a água do mar com seu hálito para que possa descansar no gelo.",
          },
        ],
      },
      {
        id: 615,
        nome: "criogonal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando o tempo esquenta, esses Pokémon se transformam em vapor d'água. Criogonais quase nunca são vistos durante o verão.",
          },
        ],
      },
      {
        id: 616,
        nome: "capacete",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem uma fisiologia estranha que responde à eeletricidade. Quando junto com Karrablast, Shelmet evolui por algum motivo.",
          },
        ],
      },
      {
        id: 617,
        nome: "acelerador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Descartar sua casca o tornou ágil. Para evitar a desidratação, ele envolve seu corpo em faixas de membrana.",
          },
        ],
      },
      {
        id: 618,
        nome: "stunfisk",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Por alguma razão, este Pokémon sorri levemente quando emite uma forte corrente elétrica das marcas amarelas em seu corpo.",
          },
        ],
      },
      {
        id: 619,
        nome: "mienfoo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora pequeno, o temperamento de Mienfoo é feroz. Qualquer criatura que se aproxime de Mienfoo descuidadamente será saudada com uma série de ataques graciosos.",
          },
        ],
      },
      {
        identificação: 620,
        nome: "mienshao",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Feito em velocidades estonteantes, os chutes deste Pokémon podem quebrar pedras enormes em pequenos pedaços.",
          },
        ],
      },
      {
        id: 621,
        nome: "druddigon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Druddigon são cruéis e astutos. Eles residem em ninhos escavados por outros Pokémon, detratando os ninhos roubados como seus próprios covis.",
          },
        ],
      },
      {
        id: 622,
        nome: "golet",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon foi criado a partir de argila. Ele recebeu ordens de seu mestre há muitos milhares de anos ae ainda segue essas ordens até hoje.",
          },
        ],
      },
      {
        id: 623,
        nome: "golurk",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Existe uma teoria de que dentro de Golurk existe uma máquina de movimento perpétuo que produz energia ilimitada, mas essa crença não foi comprovada.",
          },
        ],
      },
      {
        id: 624,
        nome: "penhor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um pacote desses Pokémon se forma para servir um chefe Bisharp. Cada Pawniard treina diligentemente, dsonhando em um dia assumir a liderança.",
          },
        ],
      },
      {
        id: 625,
        nome: "bisharp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Conflitos violentos irrompem entre Bisharp e Fraxure sobre locais onde pedras de amolar podem ser encontradas.",
          },
        ],
      },
      {
        id: 626,
        nome: "bouffalante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon vivem em rebanhos de cerca de 20 indivíduos. Bouffalant que trair o rebanho perderá o cabelo de suas cabeças por algum motivo.",
          },
        ],
      },
      {
        id: 627,
        nome: "babado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua aparência de garota desmente sua teimosia. Ele desafia seus pais em todas as oportunidades, desesperado para provar sua força.",
          },
        ],
      },
      {
        id: 628,
        nome: "braviária",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Gritando um grito de guerra horripilante, este enorme e feroz Pokémon pássaro sai em caça. Ele explode lagos com ondas de choque e então pega qualquer presa que flutue na superfície da água.",
          },
        ],
      },
      {
        id: 629,
        nome: "vullaby",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Vullaby cresce rapidamente. Ossos que ficaram muito spequenos para Vullaby mais velhos usarem muitas vezes são passados do para os mais jovens no ninho.",
          },
        ],
      },
      {
        identificação: 630,
        nome: "mandibuzz",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles se enfeitam com ossos. Parece haver tendências de moda entre eles, à medida que ossos diferentes entram e saem de popularidade.",
          },
        ],
      },
      {
        id: 631,
        nome: "calormor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma chama serve como sua língua, derretendo-se através da carapaça dura de Durant para que Heatmor possa devorar suas entranhas.",
          },
        ],
      },
      {
        id: 632,
        nome: "durante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com suas mandíbulas grandes, esses Pokémon podem trincar rochas. Eles trabalham juntos para proteger seus ovos de Sandaconda.",
          },
        ],
      },
      {
        id: 633,
        nome: "deino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Como não pode ver, este Pokémon está constantemente mordendo tudo o que toca, tentando seguir o que está ao seu redor.",
          },
        ],
      },
      {
        id: 634,
        nome: "zweilous",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas duas cabeças lutarão entre si por um único pedaço de comida. Zweilous ficam cobertos de cicatrizes mesmo sem lutar contra outros.",
          },
        ],
      },
      {
        id: 635,
        nome: "hidreigon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As três cabeças se revezam cravando seus dentes o oponente. Seus ataques não diminuirão até que seu alvo caia.",
          },
        ],
      },
      {
        id: 636,
        nome: "larvesta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O corpo de Larvesta está todo quente. Ele cospe fogo das pontas de seus chifres para intimidar predadores e assustar presas.",
          },
        ],
      },
      {
        id: 637,
        nome: "volcarona",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon emerge de um casulo formado por chamas furiosas. Murais antigos retratam Volcarona como uma divindade do fogo.",
          },
        ],
      },
      {
        id: 638,
        nome: "cobalião",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Desde o momento em que nasce, este Pokémon irradia o ar de um líder. Sua presença cacalmará até mesmo inimigos cruéis.",
          },
        ],
      },
      {
        id: 639,
        nome: "terrakion",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Na lenda de Unovan, Terrakion lutou contra humanos em um esforço para proteger outros Pokémon.",
          },
        ],
      },
      {
        id: 640,
        nome: "virizão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele dispara em torno dos oponentes com uma série de movimentos rápidos, cortando-os com seus chifres.",
          },
        ],
      },
      {
        id: 641,
        nome: "tornadus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que este Pokémon agitador de tempestades faz com que as estações virem agitando o ar. Suspeito que sua forma humana seja falsa.",
          },
        ],
      },
      {
        id: 642,
        nome: "thundurus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que este portador de eletricidade travou guerra com seu êmesis, Tornadus, desde tempos imemoriais. Os relâmpagos it lançados perfuram a própria terra e enriquecem o solo.",
          },
        ],
      },
      {
        id: 643,
        nome: "reshiram",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De acordo com o mito, se as pessoas ignorarem a verdade e se deixarem consumir pela ganância, Reshiram chegará para queimar seus reinos.",
          },
        ],
      },
      {
        id: 644,
        nome: "zekrom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A mitologia nos diz que se as pessoas perderem a justiça em seus corações, seus reinos serão arrasados pelos raios de Zekrom.",
          },
        ],
      },
      {
        id: 645,
        nome: "landorus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando as encarnações do vento e dos relâmpagos se chocam, Landorus chega para acabar com o conflito. Após as tempestades e os raios abaterem, a terra certamente será abençoada com colheitas abundantes.",
          },
        ],
      },
      {
        id: 646,
        nome: "kyurem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Parece que este Pokémon usa seus poderes ice para congelar seu próprio corpo a fim de estabilizar sua estrutura celular.",
          },
        ],
      },
      {
        id: 647,
        nome: "keldeo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que Keldeo deve sobreviver a duras batalhas e desenvolver completamente o chifre em sua testa antes que o verdadeiro poder deste Pokémon desperte.",
          },
        ],
      },
      {
        id: 648,
        nome: "meloeta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas melodias são cantadas com um método de vocalização especial que pode controlar os sentimentos de quem ouve.",
          },
        ],
      },
      {
        id: 649,
        nome: "genesect",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon existia há 300 milhões de anos. A Equipe Plasma o alterou e colocou um canhão em suas costas.",
          },
        ],
      },
      {
        identificação: 650,
        nome: "chespin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma casca de madeira tão grossa cobre sua cabeça e costas que mesmo um impacto direto de um caminhão não o perturbaria.",
          },
        ],
      },
      {
        id: 651,
        nome: "quiladina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles fortalecem a parte inferior do corpo encontrando-se. Eles são muito bons e não começam brigas.",
          },
        ],
      },
      {
        id: 652,
        nome: "chesnaught",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando assume uma postura defensiva com os punhos queguardando o rosto, ele pode resistir à explosão de uma bomba.",
          },
        ],
      },
      {
        id: 653,
        nome: "fennekin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto caminha, ele mastiga um galho no lugar de um lanche. Ele intimida os oponentes soprando ar quente pelas orelhas.",
          },
        ],
      },
      {
        id: 654,
        nome: "braixen",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando o galho é arrancado de sua cauda, fricção incendeia o galho. A chama é usada para enviar sinais para seus aliados.",
          },
        ],
      },
      {
        id: 655,
        nome: "delphox",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usando poder psíquico, ele gera um vórtice de fogo de 5.400 graus Fahrenheit, incinerando inimigos arrastados para este turbilhão de chamas.",
          },
        ],
      },
      {
        id: 656,
        nome: "froakie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele protege sua pele cobrindo seu corpo com delicadas bolhas. Sob seu ar despreocupado, ele mantém um olhar atento ao seu redor.",
          },
        ],
      },
      {
        id: 657,
        nome: "sapo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua rapidez é incomparável. ele pode escalar uma torre de mais de mais de 2.000 pés em um minuto.",
          },
        ],
      },
      {
        id: 658,
        nome: "greninja",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele aparece e desaparece com a graça de um ninja. ele brinca com seus inimigos usando movimentos rápidos, enquanto s corta-os com estrelas da água mais afiada.",
          },
        ],
      },
      {
        id: 659,
        nome: "bunnelby",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É muito sensível ao perigo. O som das Corviknight batendo as asas fará com que Bunnelby cave um buraco para se esconder no subsolo em instantes.",
          },
        ],
      },
      {
        id: 660,
        nome: "diggersby",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pelo em sua barriga retém o calor excepcionalmente bem. As pessoas costumavam fazer roupas pesadas de inverno com o pelo deste Pokémon.",
          },
        ],
      },
      {
        id: 661,
        nome: "fletchling",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando este Pokémon fica excitado, a temperatura do seu corpo aumenta acentuadamente. Se você tocar um Fletchling com as mãos desprotegidas, você poderá se queimar.",
          },
        ],
      },
      {
        id: 662,
        nome: "fletchinder",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Fletchinder são extremamente territoriais e agressivos. Esses Pokémon lutam entre si por áreas de alimentação.",
          },
        ],
      },
      {
        id: 663,
        nome: "talonflame",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Talonflame mergulha em direção à presa a velocidades de até 310 mph e ataca-a com chutes poderosos, dando à presa nenhuma chance de escapar.",
          },
        ],
      },
      {
        id: 664,
        nome: "espalhamento",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pó que cobre seu corpo regula sua temperatura, então ele pode viver em qualquer região ou clima.",
          },
        ],
      },
      {
        id: 665,
        nome: "spewpa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os bicos dos Pokémon pássaros não conseguem arranhar seu corpo robusto. Para se defender, ele cospe pólvora.",
          },
        ],
      },
      {
        id: 666,
        nome: "vivillon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os padrões nas asas deste Pokémon dependem do clima e da topografia o seu habitat. Ele espalha escamas coloridas.",
          },
        ],
      },
      {
        id: 667,
        nome: "littleo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon de sangue quente é cheio de curiosidade. Quando fica bravo ou começa brigar, sua crina curta fica quente.",
          },
        ],
      },
      {
        id: 668,
        nome: "piroar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A temperatura de seu hálito é superior a 10.000 graus Fahrenheit, mas Pyroar não o usa em its presas. Este Pokémon prefere comer carne crua.",
          },
        ],
      },
      {
        id: 669,
        nome: "flabebe",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Flabébé usa uma coroa feita de pólen coletado de sua flor. A coroa tem propriedades curativas ocultas.",
          },
        ],
      },
      {
        id: 670,
        nome: "floeta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele dá seu próprio poder às flores, colocando seu coração em cuidar delas. Floette nunca perdoa aquem que bagunça um canteiro de flores.",
          },
        ],
      },
      {
        id: 671,
        nome: "flores",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua vida pode durar centenas de anos. Diz-se que dedica toda a sua vida à proteção de jardins.",
          },
        ],
      },
      {
        id: 672,
        nome: "skiddo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se tiver sol e água, ele não precisa comer, pois pode gerar energia a partir das folhas em seu dorso.",
          },
        ],
      },
      {
        id: 673,
        nome: "gogoat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles habitam regiões montanhosas. O líder do rebanho é decidido por uma batalha de chifres.",
          },
        ],
      },
      {
        id: 674,
        nome: "pancham",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Querendo ter certeza de que isso será levado a sério, Pancham está sempre encarando os outros. Mas se não estiver focado, ele acaba sorrindo.",
          },
        ],
      },
      {
        id: 675,
        nome: "pangoro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usando sua folha, Pangoro pode prever os movimentos de seus oponentes. Ele ataca com socos que podem transformar um caminhão basculante em sucata com apenas um golpe.",
          },
        ],
      },
      {
        id: 676,
        nome: "furfrou",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Deixado sozinho, seu pelo crescerá cada vez mais, mas só permitirá que alguém em quem ele confia o corte.",
          },
        ],
      },
      {
        id: 677,
        nome: "espurr",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Há poder psíquico suficiente em Espurr para fazer um lutador voar, mas como esse poder não pode ser controlado, Espurr acha isso problemático.",
          },
        ],
      },
      {
        id: 678,
        nome: "miaustic",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O instinto defensivo dos machos é forte. É quando eles estão protegendo a si mesmos ou a seus parceiros que eles liberam todo o seu poder.",
          },
        ],
      },
      {
        id: 679,
        nome: "honedge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O olho azul no protetor de mão da espada é o doverdadeiro corpo de Honedge. Com seu tecido velho, de drena a vida das pessoas.",
          },
        ],
      },
      {
        identificação: 680,
        nome: "dupla lâmina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As duas espadas empregam uma estratégia de alternar rapidamente entre ataque e defesa para derrubar suas presas.",
          },
        ],
      },
      {
        id: 681,
        nome: "aegislash",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus poderosos poderes espectrais permitem que ele manipule outros. Ele já usou seus poderes para forçar pessoas e Pokémon a construir um reino ao seu gosto.",
          },
        ],
      },
      {
        id: 682,
        nome: "spritzee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O perfume que seu corpo exala encanta aqueles que o cheiram. Senhoras nobres não tinham falta de amor por Spritzee.",
          },
        ],
      },
      {
        id: 683,
        nome: "aromatisse",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os aromas que Aromatisse pode produzir variam desde cheiros doces que fortalecem os aliados até cheiros desagradáveis que enfraquecem a vontade de lutar do oponente.",
          },
        ],
      },
      {
        id: 684,
        nome: "redemoinho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O cheiro doce do algodão doce perfuma o pelo fofo de Swirlix. Este Pokémon cospe um barbante pegajoso para emaranhar seus inimigos.",
          },
        ],
      },
      {
        id: 685,
        nome: "slurpuff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pelo do Slurpuff contém muito ar, tornando-o macio ao toque e mais leve do que parece.",
          },
        ],
      },
      {
        id: 686,
        nome: "inkay",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao expor os inimigos ao piscar de seus pontos luminescentes, o Inkay os desmoraliza, e então aproveita a chance para fugir.",
          },
        ],
      },
      {
        id: 687,
        nome: "malamar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que os poderes hipnóticos de Malamar desempenharam um papel em certos eventos que mudaram a história.",
          },
        ],
      },
      {
        id: 688,
        nome: "bináculo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se os dois não trabalharem bem juntos, tanto o ataque quanto a defesa desmoronarão. Sem um bom tetrabalho em equipe, eles não sobreviverão.",
          },
        ],
      },
      {
        id: 689,
        nome: "barbaracle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ter um olho em cada palma permite que ele fique vigiando em todas as direções. Em caso de emergência, seus membros começam a agir por conta própria para garantir a derrota do inimigo.",
          },
        ],
      },
      {
        identificação: 690,
        nome: "skrelp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O Skrelp parece um pedaço de alga marinha podre, então pode se misturar com as algas marinhas à deriva no oceano e evitar ser detectado pelos inimigos.",
          },
        ],
      },
      {
        id: 691,
        nome: "dragalge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dragalge gera energia de dragão colando a pluma em sua cabeça acima da superfície do oceano e banhando-o na luz solar.",
          },
        ],
      },
      {
        id: 692,
        nome: "iniciador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao detonar o gás que se acumula em sua garra direita, este Pokémon lança água como uma bala. É assim que Clauncher derrota seus inimigos.",
          },
        ],
      },
      {
        id: 693,
        nome: "clawitzer",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O braço direito de Clawitzer é um canhão que lança projéteis feitos de água do mar. Os tiros do braço de canhão de Clawitzer podem afundar um navio-tanque.",
          },
        ],
      },
      {
        id: 694,
        nome: "helióptil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O sol alimenta a geração de eletricidade deste Pokémon . A interrupção desse processo estressa Helioptile ao ponto de fraqueza.",
          },
        ],
      },
      {
        id: 695,
        nome: "heliolisco",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um heliolisco tomando sol com seus babados abertos é tudo o que seria necessário para produzir eeletricidade suficiente para abastecer uma cidade.",
          },
        ],
      },
      {
        id: 696,
        nome: "tirano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon é egoísta e gosta de ser mimado. ele também pode causar ferimentos graves em seu Treinador apenas brincando.",
          },
        ],
      },
      {
        id: 697,
        nome: "tirano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma única mordida nas enormes mandíbulas de Tyrantrum irá demolir um carro. Este Pokémon era o rei do mundo antigo.",
          },
        ],
      },
      {
        id: 698,
        nome: "amaura",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Amaura é um Pokémon antigo que foi extinto. Espécimes desta espécie às vezes podem ser encontrados congelados no gelo.",
          },
        ],
      },
      {
        id: 699,
        nome: "auroro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando dominado pela raiva, Aurorus emanará ar gelado, cobrindo tudo ao seu redor com gelo.",
          },
        ],
      },
      {
        identificação: 700,
        nome: "Sylveon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele emite uma aura calmante de seus órgãos em forma de fita. Ele envolve estes apêndices ao redor dos briguentos para restaurar instantaneamente a calma a situação.",
          },
        ],
      },
      {
        id: 701,
        nome: "hawlucha",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele sempre faz uma pose antes de executar seu movimento final. Às vezes, os oponentes aproveitam esse tempo para contra-atacar.",
          },
        ],
      },
      {
        id: 702,
        nome: "dedenne",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Como Dedenne não consegue gerar muita eletricidade por conta própria, ele rouba eletricidade de tomadas ou de outros Pokémon elétricos.",
          },
        ],
      },
      {
        id: 703,
        nome: "carbink",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que em algum lugar do mundo existe um veio mineral abrigando um grande pacote de Carbink adormecidos. Também é dito que este pacote tem uma rainha.",
          },
        ],
      },
      {
        id: 704,
        nome: "goomy",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Goomy se esconde na sombra das árvores, onde é agradável e úmido. Se a gosma que cobre seu corpo secar, o Pokémon se tornará letárgico instantaneamente.",
          },
        ],
      },
      {
        id: 705,
        nome: "sliggoo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma criatura dada à melancolia. Suspeito que sua concha metálica se desenvolveu como resultado do muco em sua pele reagindo com o ferro na água de Hisui.",
          },
        ],
      },
      {
        id: 706,
        nome: "goodra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Capaz de controlar livremente a dureza de sua concha metálica. ele detesta a solidão e é extremamente pegajoso—ele ficará furioso e criará tumultos se aqueles que lhe são mais queridos saírem de seu lado.",
          },
        ],
      },
      {
        id: 707,
        nome: "klefki",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Klefki suga íons metálicos com o chifre no topo da cabeça. Parece que este Pokémon adora tanto as teclas que sua cabeça também precisava se parecer com uma.",
          },
        ],
      },
      {
        id: 708,
        nome: "fantasma",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com uma voz semelhante à de uma criança humana, ele clama para atrair os adultos para as profundezas da floresta, fazendo-os perder-se entre as árvores.",
          },
        ],
      },
      {
        id: 709,
        nome: "trevenant",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pequenas raízes que se estendem das pontas dos pés deste Pokémon podem se prender às árvores da floresta e dar a Trevenant o controle sobre elas.",
          },
        ],
      },
      {
        id: 710,
        nome: "bombakaboo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A luz que sai dos buracos da abóbora pode hipnotizar e controlar as pessoas e Pokémon que a vêem.",
          },
        ],
      },
      {
        id: 711,
        nome: "gourgeist",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Na escuridão de uma noite de lua nova, Gourgeist virá bater. Quem atender a porta será levado para a vida após a morte.",
          },
        ],
      },
      {
        id: 712,
        nome: "bergmite",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Vive em montanhas cobertas de neve perene. Ele congela o vapor de água no ar para fazer o capacete de gelo que usa para defesa.",
          },
        ],
      },
      {
        id: 713,
        nome: "avaliar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A armadura de gelo que cobre sua mandíbula inferior envergonha o aço e pode quebrar rochas com facilidade. Este Pokémon percorre caminhos íngremes de montanhas, abrindo caminho pela neve profunda.",
          },
        ],
      },
      {
        id: 714,
        nome: "noibat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nenhum comprimento de onda de som está além da capacidade de produção do Noibat. As ondas ultrassônicas que ele gera podem superar Pokémon muito maiores.",
          },
        ],
      },
      {
        id: 715,
        nome: "noivern",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Voando pela escuridão, ele enfraquece os inimigos com ondas ultrassônicas que podem esmagar pedras. Suas presas encerram a luta.",
          },
        ],
      },
      {
        id: 716,
        nome: "xerneas",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando os chifres em sua cabeça brilham em sete cores, diz-se que ele compartilha a vida eterna.",
          },
        ],
      },
      {
        id: 717,
        nome: "yveltal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando sua vida chega ao fim, ele absorve a energia vital de todos os seres vivos e se transforma em um casulo mais uma vez.",
          },
        ],
      },
      {
        id: 718,
        nome: "zygarde",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Alguns dizem que ele pode mudar para uma forma ainda mais poderosa ao lutar contra aqueles que ameaçam o ecossistema.",
          },
        ],
      },
      {
        id: 719,
        nome: "diancie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode criar muitos diamantes instantaneamente comprimindo o carbono no ar entre suas mãos.",
          },
        ],
      },
      {
        identificação: 720,
        nome: "hoopa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que ele é capaz de capturar qualquer coisa que desejar com seus seis anéis e seis braços enormes. Com seu poder selado, ele se transforma em uma forma muito menor.",
          },
        ],
      },
      {
        id: 721,
        nome: "vulcão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele expele seu vapor interno dos braços em suas costas. Ele tem energia suficiente para explodir uma montanha.",
          },
        ],
      },
      {
        id: 722,
        nome: "rowlet",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Voa silenciosamente com asas delicadas. Ele domina a arte de habilmente lançar penas afiadas como adagas a partir dessas mesmas asas.",
          },
        ],
      },
      {
        id: 723,
        nome: "dartrix",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Aquece-se regularmente à luz do sol para acumular energia - presumivelmente devido ao clima gelado. Mesmo assim, as pontas das pontas das lâminas colocadas em suas asas estão afiadas como sempre.",
          },
        ],
      },
      {
        id: 724,
        nome: "decidueye",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O ar armazenado dentro das penas de Decidueye sula o Pokémon contra o frio extremo de Hisui. Esta é uma prova firme de que a evolução pode ser influenciada pelo ambiente.",
          },
        ],
      },
      {
        id: 725,
        nome: "litten",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tentar acariciar Litten antes que ele confie em você resultará em um arranhão feio com suas garras afiadas. Tenha cuidado.",
          },
        ],
      },
      {
        id: 726,
        nome: "torracat",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao enfrentar um inimigo poderoso, o espírito de luta de Torracat fica mais forte e seu sino de fogo arde mais forte.",
          },
        ],
      },
      {
        id: 727,
        nome: "incineroar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O comportamento rude e agressivo do Incineroar é sua característica mais notável, mas a maneira como ele ajuda os pequenos Pokémon mostra que ele também tem um lado gentil.",
          },
        ],
      },
      {
        id: 728,
        nome: "popplio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se Popplio quiser criar balões grandes e poderosos, eles devem ser persistentes. É preciso prática diária para esses Pokémon desenvolverem suas habilidades.",
          },
        ],
      },
      {
        id: 729,
        nome: "brionne",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nas noites em que o mar está calmo, os Brionne dançam com os outros ao som da Primarina que os conduz.",
          },
        ],
      },
      {
        id: 730,
        nome: "primarina",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Para Primarina, cada batalha é um palco. Seu canto e a dança de seus balões irão hipnotizar o público.",
          },
        ],
      },
      {
        id: 731,
        nome: "pikipek",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode parecer esguio, mas os músculos do seu pescoço são pesados. Ele pode bicar uma árvore 16 vezes por segundo!",
          },
        ],
      },
      {
        id: 732,
        nome: "trumbeak",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De sua boca, ele dispara as sementes das bagas que comeu. As sementes espalhadas dão origem a novas plantas.",
          },
        ],
      },
      {
        id: 733,
        nome: "tucano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Conhecido por formar casais harmoniosos, este Pokémon é levado às cerimônias de casamento como amuleto de boa sorte.",
          },
        ],
      },
      {
        id: 734,
        nome: "yungoos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora coma qualquer coisa, ele prefere coisas vivas frescas, então marcha pelas ruas em busca de presas.",
          },
        ],
      },
      {
        id: 735,
        nome: "gumshoos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Paciente por natureza, este Pokémon perde o controle de si mesmo e ataca quando avista sua refeição efavorita—Rattata!",
          },
        ],
      },
      {
        id: 736,
        nome: "grubbin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa suas grandes mandíbulas para cavar ninhos no chão da floresta e adora se alimentar da doce seiva das árvores.",
          },
        ],
      },
      {
        id: 737,
        nome: "charjabug",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus processos digestivos convertem as folhas que ele ingere em eletricidade. Uma bolsa elétrica em sua barriga armazena a eletricidade para uso posterior.",
          },
        ],
      },
      {
        id: 738,
        nome: "vikavolt",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se ele carrega um Charjabug para usar como bateria sobressalente, um Vikavolt voador pode disparar rapidamente raios de eletricidade de alta potência.",
          },
        ],
      },
      {
        id: 739,
        nome: "crabrawler",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sabe-se que o Crabrawler confunde exeggutor com um coqueiro e sobe nele. O enfurioso Exeggutor sacode-o e pisa nele.",
          },
        ],
      },
      {
        id: 740,
        nome: "crabominável",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Antes de parar para pensar, ele simplesmente começa a atacar. Há registros de sua volta avalanches com uma série de socos.",
          },
        ],
      },
      {
        id: 741,
        nome: "oricorio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Oricorio bebeu néctar vermelho. Se seu Treinador dê a ordem errada, este Pokémon apaixonado fica furioso.",
          },
        ],
      },
      {
        id: 742,
        nome: "cutiefly",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A aura de um oponente pode dizer a Cutiefly qual será o próximo movimento o oponente. Então Cutiefly pode gglidar ao redor do ataque e contra-atacar.",
          },
        ],
      },
      {
        id: 743,
        nome: "ribombee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ribombee absolutamente odeia se molhar ou chover. Na nublada região de Galar, eles são muito raramente vistos.",
          },
        ],
      },
      {
        id: 744,
        nome: "rockruff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon intimida os oponentes batendo o chão com as pedras em seu pescoço. No momento em que um oponente recua, Rockruff ataca.",
          },
        ],
      },
      {
        id: 745,
        nome: "lycanroc",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com movimentos rápidos, este Pokémon gradualmente encoloca sua presa em um canto. As presas de Lycanroc estão sempre apontadas para os pontos fracos dos oponentes.",
          },
        ],
      },
      {
        id: 746,
        nome: "wishiwashi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele sente o perigo, seus olhos se enchem de lágrimas. O brilho de suas lágrimas sinaliza para outros Wishiwashi se reunirem.",
          },
        ],
      },
      {
        id: 747,
        nome: "mareanie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ao contrário de seus equivalentes de Alola, os Mareanie da região de Galar ainda não descobriram que os ramos de Corsola são deliciosos.",
          },
        ],
      },
      {
        id: 748,
        nome: "toxapex",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dentro do saco de veneno em seu corpo há um veneno tão tóxico que Pokémon tão grandes quanto Wailord ainda sofrerão três dias após seu primeiro efeito.",
          },
        ],
      },
      {
        id: 749,
        nome: "mudray",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele come terra para criar lama e espalha essa lama nos pés, dando-lhes a aderência necessária para andar em terrenos acidentados sem escorregar.",
          },
        ],
      },
      {
        identificação: 750,
        nome: "mudsdale",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mudsdale tem tanta resistência que poderia transportar o mais de 10 toneladas pela região de Galar sem descanso em sono.",
          },
        ],
      },
      {
        id: 751,
        nome: "dewpider",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dewpider normalmente vive debaixo d'água. Quando chega à terra em busca de comida, leva água com ele na forma de uma bolha em sua cabeça.",
          },
        ],
      },
      {
        id: 752,
        nome: "araquanida",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele atua como um zelador do Dewpider, colocando-o dentro de sua bolha e deixando-o comer qualquer resto de comida.",
          },
        ],
      },
      {
        id: 753,
        nome: "fomantis",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Durante o dia, Fomantis se aquece ao sol e de dorme pacificamente. Ele acorda e se movimenta a noite.",
          },
        ],
      },
      {
        id: 754,
        nome: "lurantis",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pétalas nos braços deste Pokémon são finas e super afiadas, e eles podem disparar raios laser se Lurantis coletar luz primeiro.",
          },
        ],
      },
      {
        id: 755,
        nome: "morelull",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Morelull vive em florestas que permanecem escuras mesmo durante o dia. Eles espalham esporos cintilantes que colocam os inimigos para dormir.",
          },
        ],
      },
      {
        id: 756,
        nome: "shiinótico",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se você vir uma luz nas profundezas de uma floresta à noite, do não se aproxime. Shiinotic fará você adormecer profundamente.",
          },
        ],
      },
      {
        id: 757,
        nome: "salandit",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon sorrateiro irá se esgueirar atrás de sua presa e imobilizá-la com gás venenoso antes que a presa perceba que Salandit está lá.",
          },
        ],
      },
      {
        id: 758,
        nome: "salazzle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O vencedor das competições entre Salazzle é decidido por qual deles tem mais Salandit masculino.",
          },
        ],
      },
      {
        id: 759,
        nome: "recheado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A maneira como ele se protege agitando os braços pode ser uma visão adorável, mas fique bem longe. Este é um movimento que pode quebrar troncos grossos de árvores.",
          },
        ],
      },
      {
        id: 760,
        nome: "cuidado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os movimentos que ele usa para derrubar suas presas deixariam um artista marcial com ciúmes. Ele coloca presas subjugadas debaixo dos braços para carregá-las até seu ninho.",
          },
        ],
      },
      {
        id: 761,
        nome: "doce",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando sob ataque, ele secreta um suor doce e delicioso. O cheiro apenas chama mais inimigos para ele.",
          },
        ],
      },
      {
        id: 762,
        nome: "steenee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Qualquer Corvisquire que der uma bicada neste Pokémon será saudado com um tapa de épalas seguido por um chute forte.",
          },
        ],
      },
      {
        id: 763,
        nome: "tsareena",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um chute das pontas endurecidas das pernas deste Pokémon deixa uma ferida no corpo e alma do oponente que nunca cicatrizará.",
          },
        ],
      },
      {
        id: 764,
        nome: "comfey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon cheiram muito bem. Todos os Comfey usam flores diferentes, então cada um desses Pokémon tem seu próprio perfume.",
          },
        ],
      },
      {
        id: 765,
        nome: "oranguru",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele conhece a floresta por dentro e por fora. Se encontrar um Pokémon ferido, Oranguru irá coletar ervas medicinais para tratá-lo.",
          },
        ],
      },
      {
        id: 766,
        nome: "passimiano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os Passimian vivem em grupos de cerca de 20 pessoas, com cada membro desempenhando uma função designada. através da cooperação, o grupo sobrevive.",
          },
        ],
      },
      {
        id: 767,
        nome: "wimpod",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Wimpods se reúnem em enxames, constantemente à procura de perigo. Eles se dispersam no momento detectam a presença de um inimigo.",
          },
        ],
      },
      {
        id: 768,
        nome: "golisópode",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles vivem em navios afundados ou em buracos no fundo do mar. Quando Golisopod e Grapploct combatem, o perdedor se torna a refeição do vencedor.",
          },
        ],
      },
      {
        id: 769,
        nome: "sandygast",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sandygast habita principalmente praias. Ele assume controle de qualquer um que coloque a mão em sua deboca, forçando-o a aumentar seu corpo.",
          },
        ],
      },
      {
        id: 770,
        nome: "palossand",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive nas praias, mas odeia água. Palossand não consegue manter seu formato de castelo se for encharcado por uma chuva forte.",
          },
        ],
      },
      {
        id: 771,
        nome: "pyukumuku",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Está coberto por uma gosma que mantém sua pele úmida, permitindo que ele fique em terra por dias sem secar.",
          },
        ],
      },
      {
        id: 772,
        nome: "tipo-nulo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele foi modelado a partir de um poderoso Pokémon mítico. a máscara colocada nele limita seu poder para mantê-lo sob controle.",
          },
        ],
      },
      {
        id: 773,
        nome: "silvally",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O último fator necessário para liberar o verdadeiro poder deste Pokémon foi um forte vínculo com um Treinador em quem ele confia.",
          },
        ],
      },
      {
        id: 774,
        nome: "menor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora sua casca externa seja incomumente durável, o choque de cair no chão a quebra em pedacinhos.",
          },
        ],
      },
      {
        id: 775,
        nome: "komala",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele permanece adormecido desde o nascimento até a morte como resultado das propriedades sedativas das folhas que formam sua dieta.",
          },
        ],
      },
      {
        id: 776,
        nome: "turtonador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Comer enxofre em seu habitat vulcânico é o que causa o desenvolvimento de compostos explosivos em sua concha. Seus excrementos também são perigosamente explosivos.",
          },
        ],
      },
      {
        id: 777,
        nome: "togedemaru",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando está em apuros, ele se enrola em uma bola, faz com que seus espinhos de pêlo se arrepiem e então descarrega eletricidade indiscriminadamente.",
          },
        ],
      },
      {
        id: 778,
        nome: "mimikyu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Havia um cientista que espiou por baixo do trapo velho de Mimikyu em nome da pesquisa. O cientista morreu de uma doença misteriosa.",
          },
        ],
      },
      {
        id: 779,
        nome: "bruxo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua pele é grossa o suficiente para se defender dos espinhos de Mareanie. Com seus dentes robustos, Bruxish mastiga os espinhos e os come.",
          },
        ],
      },
      {
        id: 780,
        nome: "drampa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Drampa é um Pokémon gentil e amigável - até fica irritado. Quando isso acontece, ele provoca um gale e achata tudo ao seu redor.",
          },
        ],
      },
      {
        id: 781,
        nome: "dhelmise",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de baixar sua âncora, ele espera por sua presa. ele pega Wailord grande e drena sua força vital.",
          },
        ],
      },
      {
        id: 782,
        nome: "jangmo-o",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Jangmo-o golpeia suas escamas para se comunicar com outros de sua espécie. Suas escamas são na verdade peles que se tornaram tão duras quanto metal.",
          },
        ],
      },
      {
        id: 783,
        nome: "hakamo-o",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Antes de atacar seus inimigos, ele bate suas escamas e ruge. Suas garras afiadas destroem a oposição.",
          },
        ],
      },
      {
        id: 784,
        nome: "kommo-o",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Certas ruínas têm pinturas de antigos guerreiros usando armaduras feitas de escamas de Kommo-o.",
          },
        ],
      },
      {
        id: 785,
        nome: "tapu-koko",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A divindade guardiã de Melemele, detentora de raios, Tapu Koko está cheia de curiosidade e aparece diante das pessoas de vez em quando.",
          },
        ],
      },
      {
        id: 786,
        nome: "tapu-lele",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora chamado de divindade guardiã, Tapu Lele não tem culpa por sua disposição cruel e pode ser descrito como a natureza encarnada.",
          },
        ],
      },
      {
        id: 787,
        nome: "tapu-bulu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele emite sons de toque com sua cauda para que outros ksaibam onde ele está, evitando conflitos desnecessários. esta divindade guardiã de Ula'ula controla as plantas.",
          },
        ],
      },
      {
        id: 788,
        nome: "tapu-fini",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja chamada de divindade guardiã, terríveis calamidades às vezes acontecem àqueles que de forma imprudente se aproximam de Tapu Fini.",
          },
        ],
      },
      {
        id: 789,
        nome: "cosmog",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cosmog é muito curioso, mas não muito cauteloso, colocando-se frequentemente em perigo. Se as coisas começarem a parecer arriscadas, ele se teletransporta.",
          },
        ],
      },
      {
        id: 790,
        nome: "cosmoema",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele suga a poeira do ar em uma velocidade impressionante, construindo freneticamente energia dentro de seu núcleo como preparação para a evolução.",
          },
        ],
      },
      {
        id: 791,
        nome: "solgaleo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Solgaleo já foi conhecido como a Besta que devora o Sol. A energia na forma de luz irradia dele sem limites.",
          },
        ],
      },
      {
        id: 792,
        nome: "lunala",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ela rouba a luz do ambiente e então se torna a lua cheia, espalhando sua própria luz pelo céu noturno.",
          },
        ],
      },
      {
        id: 793,
        nome: "nihilego",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele apareceu neste mundo a partir de um Ultra Wormhole. Nihilego parece ser um parasita que vive alimentando-se de pessoas e Pokémon.",
          },
        ],
      },
      {
        id: 794,
        nome: "buzzwole",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Buzzwole anda por aí exibindo seus músculos anormalmente inchados. É um tipo oUltra Besta.",
          },
        ],
      },
      {
        id: 795,
        nome: "feromosa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja estranho a este mundo e seja um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
          },
        ],
      },
      {
        id: 796,
        nome: "xurkitree",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles foram apelidados de Ultra Bestas. Alguns deles ficam imóveis, como árvores, com seus braços e pernas cravados no chão.",
          },
        ],
      },
      {
        id: 797,
        nome: "celesteela",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja estranho a este mundo e seja um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
          },
        ],
      },
      {
        id: 798,
        nome: "kartana",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seja estranho a este mundo e seja um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
          },
        ],
      },
      {
        id: 799,
        nome: "chefe",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma forma de vida desconhecida chamada UB. Ela pode estar constantemente faminta—certamente está sempre devorando alguma coisa.",
          },
        ],
      },
      {
        id: 800,
        nome: "necrósma",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele precisa de luz para sobreviver e fica frente em busca dela. Seus raios laser cortarão qualquer coisa em pedaços.",
          },
        ],
      },
      {
        id: 801,
        nome: "magearna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Construída há cerca de 500 anos por um cientista, a parte chamada Alma-Coração é a a verdadeira forma de vida.",
          },
        ],
      },
      {
        id: 802,
        nome: "marshadow",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon pode se esconder em qualquer sombra, por isso ficou desconhecido por um longo tempo.",
          },
        ],
      },
      {
        id: 803,
        nome: "poipole",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma Ultra Besta que vive em um mundo diferente, ela cacareja loucamente enquanto pulveriza seus oponentes com veneno das agulhas em sua cabeça.",
          },
        ],
      },
      {
        id: 804,
        nome: "naganadel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um tipo de Ultra Besta, ela dispara um líquido brilhante veneno de suas agulhas. Esse líquido e também é imensamente adesivo.",
          },
        ],
      },
      {
        id: 805,
        nome: "stakataka",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando as paredes de pedra começaram a se mover e atacar, a verdadeira identidade do bruto era esta misteriosa forma de vida, que traz à mente uma Ultra Besta.",
          },
        ],
      },
      {
        id: 806,
        nome: "blacéfalo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um UB que apareceu de um Ultra Wormhole, causa explosões e então aproveita a osurpresa dos oponentes para roubar sua vitalidade.",
          },
        ],
      },
      {
        id: 807,
        nome: "zeraora",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eletricidade brilha nas almofadas em seus membros. Onde quer que Zeraora corra, relâmpagos brilham e trovões ecoam.",
          },
        ],
      },
      {
        id: 808,
        nome: "meltan",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Eles vivem como um grupo, mas quando chegar a hora, enhum Meltan forte irá absorver todos os outros e evoluir.",
          },
        ],
      },
      {
        id: 809,
        nome: "melmetal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A força centrífuga está por trás dos socos dos pesados braços hexagonais de Melmetal. Diz-se que Melmetal dá os socos mais fortes de todos os Pokémon.",
          },
        ],
      },
      {
        id: 810,
        nome: "grookey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele ataca com batidas rápidas de seu bastão. À medida que ataca com uma velocidade incrível, ele fica mais e mais bombeado.",
          },
        ],
      },
      {
        id: 811,
        nome: "thwackey",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele está tocando batidas rápidas em batalha, ele de fica tão preso ao ritmo que nem percebe que já nocauteou seu oponente.",
          },
        ],
      },
      {
        id: 812,
        nome: "rillaboom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Aquele com as melhores técnicas de percussão torna-se o chefe da tropa. Tem uma disposição de gentil e valoriza a harmonia entre seu grupo.",
          },
        ],
      },
      {
        id: 813,
        nome: "scorbunny",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem almofadas especiais na parte de trás dos pés e enhuma no nariz. Quando ele está ansioso para lutar, essas almofadas irradiam um calor tremendo.",
          },
        ],
      },
      {
        id: 814,
        nome: "raboot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele chuta frutas dos galhos das árvores e depois as faz malabarismos com os pés, praticando ádegas.",
          },
        ],
      },
      {
        id: 815,
        nome: "cinderosa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele é habilidoso tanto no ataque quanto na defesa, e fica animado quando é aplaudido. Mas se começar a se exibir, poderá se colocar em uma situação difícil.",
          },
        ],
      },
      {
        id: 816,
        nome: "sobble",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando fica molhado, sua pele muda de cor, e este Pokémon fica invisível como se estivesse em camuflado.",
          },
        ],
      },
      {
        id: 817,
        nome: "garoa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Altamente inteligente, mas também muito preguiçoso, mantém os inimigos fora de seu território colocando armadilhas em todos os lugares.",
          },
        ],
      },
      {
        id: 818,
        nome: "inteleon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas membranas nictitantes permitem que ele detecte os pontos fracos dos inimigos para que possa explodi-los com precisão água que dispara de suas pontas dos dedos em Mach 3.",
          },
        ],
      },
      {
        id: 819,
        nome: "skwovet",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele come frutas vermelhas sem parar - um hábito que o tornou mais resistente do que parece. Ele aparecerá nas fazendas em busca de ainda mais frutas.",
          },
        ],
      },
      {
        identificação: 820,
        nome: "greedent",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Comum em toda a região de Galar, este Pokémon tem dentes fortes e pode mastigar as cascas de frutas mais duras.",
          },
        ],
      },
      {
        id: 821,
        nome: "rookidee",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pulando agilmente, este Pokémon de corpo pequeno aproveita até mesmo a menor ooportunidade para desorientar oponentes maiores.",
          },
        ],
      },
      {
        id: 822,
        nome: "corvisquire",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As lições de muitas batalhas duras ensinaram-no como avaliar com precisão a força de um oponente.",
          },
        ],
      },
      {
        id: 823,
        nome: "corviknight",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com seu grande intelecto e habilidades de vôo, esses Pokémon atuam com muito sucesso como o serviço de táxi aéreo da região de Galar.",
          },
        ],
      },
      {
        id: 824,
        nome: "blipbug",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Frequentemente encontrado em jardins, este Pokémon tem cabelos o corpo que usa para avaliar o que está ao seu redor.",
          },
        ],
      },
      {
        id: 825,
        nome: "dottler",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "À medida que cresce dentro de sua concha, ele usa suas habilidades psíquicas para monitorar o mundo exterior e se preparar para a evolução.",
          },
        ],
      },
      {
        id: 826,
        nome: "orbesouro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele emite energia psíquica para observar e estudar o que está ao seu redor—e o que está ao seu redor pode incluir coisas a mais de seis milhas de distância.",
          },
        ],
      },
      {
        id: 827,
        nome: "nickit",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Astuto e cauteloso, este Pokémon sobrevive roubando comida de outros. Ele apaga seus rastros com golpes de cauda enquanto foge com seu saque.",
          },
        ],
      },
      {
        id: 828,
        nome: "ladrão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com um corpo ágil e garras afiadas, ele ave por aí roubando comida e ovos. Boltund é seu inimigo natural.",
          },
        ],
      },
      {
        id: 829,
        nome: "fofoca",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele gira ao vento enquanto canta uma canção alegre. Esta exibição encantadora encantou muitos para criar este Pokémon.",
          },
        ],
      },
      {
        id: 830,
        nome: "eldegoss",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O algodão na cabeça deste Pokémon pode ser sfiado em um fio lindo e brilhante - uma especialidade regional de Galar.",
          },
        ],
      },
      {
        id: 831,
        nome: "uau",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se a lã crescer muito, Wooloo não conseguirá se mover. O pano feito com a lã deste Pokémon é surpreendentemente forte.",
          },
        ],
      },
      {
        id: 832,
        nome: "dubwool",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus chifres majestosos servem apenas para impressionar o o gênero oposto. Eles nunca são usados em batalha.",
          },
        ],
      },
      {
        id: 833,
        nome: "mastigar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele começa as batalhas atacando com seu chifre duro como rocha, mas assim que o oponente recua, este Pokémon morde e nunca mais o solta.",
          },
        ],
      },
      {
        id: 834,
        nome: "drednaw",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon estende rapidamente seu pescoço retrátil para cravar suas presas afiadas em inimigos distantes e derrubá-los.",
          },
        ],
      },
      {
        id: 835,
        nome: "yamper",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon guloso só ajuda as pessoas em seu trabalho porque quer guloseimas. Enquanto corre, estala eletricidade.",
          },
        ],
      },
      {
        id: 836,
        nome: "boltund",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele envia eletricidade pelas pernas para aumentar sua força. Correndo em velocidade máxima, ele quebra facilmente 80 km/h.",
          },
        ],
      },
      {
        id: 837,
        nome: "rolycoly",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode correr como um monociclo, mesmo em terrenos acidentados rochosos. A queima de carvão o sustenta.",
          },
        ],
      },
      {
        id: 838,
        nome: "carkol",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Rolando rapidamente as pernas, ele pode viajar a mais de 30 km/h. A temperatura das chamas que respira excede 1.800 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 839,
        nome: "coalossal",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto estiver em batalha, sua montanha de carvão queimará em um vermelho brilhante, emitindo faíscas que queimarão a área ao redor.",
          },
        ],
      },
      {
        id: 840,
        nome: "applin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Assim que nasce, ele se enterra em uma maçã. A maçã não apenas serve como fonte de alimento, mas o sabor da fruta determina sua evolução.",
          },
        ],
      },
      {
        id: 841,
        nome: "flapple",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele voa sobre asas de casca de maçã e cospe um ácido poderoso. Ele também pode mudar seu formato para o de uma maçã.",
          },
        ],
      },
      {
        id: 842,
        nome: "appletun",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo é coberto de néctar doce, e a pele sas costas é especialmente gostosa. As crianças costumavam comê-lo como lanche.",
          },
        ],
      },
      {
        id: 843,
        nome: "silicobra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele cospe areia pelas narinas. Enquanto o inimigo está cego, ele se enterra no chão para se esconder.",
          },
        ],
      },
      {
        id: 844,
        nome: "sandaconda",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu estilo único de enrolamento permite que ele expulse areia de seu saco de areia com mais eficiência.",
          },
        ],
      },
      {
        id: 845,
        nome: "cramorant",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon faminto engole Arrokuda inteiro. Ocasionalmente, ele comete um erro e tenta engolir um Pokémon que não seja sua presa preferida.",
          },
        ],
      },
      {
        id: 846,
        nome: "arrokuda",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de ser comido, seus movimentos se tornam extremamente lentos. É quando Cramorant s engole tudo.",
          },
        ],
      },
      {
        id: 847,
        nome: "barraskewda",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele gira suas barbatanas caudais para se impulsionar, avançando para frente a velocidades de mais de 100 nós antes de atacar as presas e atacá-las.",
          },
        ],
      },
      {
        id: 848,
        nome: "toxel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele manipula a composição química de seu veneno para produzir eletricidade. A voltagem é fraca, mas pode causar uma paralisia formigante.",
          },
        ],
      },
      {
        id: 849,
        nome: "toxtricidade",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon agressivo e de temperamento explosivo chuga água estagnada para absorver quaisquer toxinas que ela possa conter.",
          },
        ],
      },
      {
        identificação: 850,
        nome: "chiado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele embrulha as presas com seu corpo aquecido, cozinhando-as em suas espirais. Quando estiverem bem passadas, ele irá mordê-las vorazmente até o último pedaço.",
          },
        ],
      },
      {
        id: 851,
        nome: "centiskorch",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora seu corpo em chamas já seja perigoso por si só, este Pokémon excessivamente hostil também tem presas grandes e muito afiadas.",
          },
        ],
      },
      {
        id: 852,
        nome: "clobopus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus tentáculos se rompem facilmente, mas ele não fica alarmado quando isso acontece—ele sabe que eles crescerão novamente. É tão inteligente quanto uma criança de três anos.",
          },
        ],
      },
      {
        id: 853,
        nome: "grapploct",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Procurando por um oponente para testar suas habilidades, ao ele emerge em terra. Assim que a batalha termina, ele retorna ao mar.",
          },
        ],
      },
      {
        id: 854,
        nome: "sinistea",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A xícara de chá na qual este Pokémon mora é uma famosa peça de mesa antiga. Muitas falsificações estão em circulação.",
          },
        ],
      },
      {
        id: 855,
        nome: "polteageist",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Deixar sobras de chá preto sem vigilância é pedir que esse Pokémon venha e se sirva ele, transformando o chá em um novo Polteageist.",
          },
        ],
      },
      {
        id: 856,
        nome: "hatenna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se este Pokémon sentir uma emoção forte, ele fugirá o mais rápido que puder. Ele prefere áreas sem pessoas.",
          },
        ],
      },
      {
        id: 857,
        nome: "hattem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Usando as tranças em sua cabeça, ele esmurra os inimigos para fazê-los se acalmarem. Um golpe dessas tranças nocautearia um boxeador profissional.",
          },
        ],
      },
      {
        id: 858,
        nome: "hatterene",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se você falar muito alto perto dele, você corre o risco de ser despedaçado a pelas garras de seu tentáculo. Este Pokémon e também é conhecido como Bruxa da Floresta.",
          },
        ],
      },
      {
        id: 859,
        nome: "impidimp",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele entra furtivamente nas casas das pessoas, roubando coisas e se alimentando da energia negativa dos ocupantes frustrados.",
          },
        ],
      },
      {
        id: 860,
        nome: "morgrem",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com astúcia, ele tenta atrair as pessoas para a floresta. Alguns acreditam que ele tem o poder de fazer as plantações crescerem.",
          },
        ],
      },
      {
        id: 861,
        nome: "grimmsnarl",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus pelos funcionam como fibras musculares. Quando seus pelos se desenrolam, eles se prendem aos oponentes, prendendo-os como os tentáculos fariam.",
          },
        ],
      },
      {
        id: 862,
        nome: "obstagoon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele evoluiu depois de passar por inúmeras lutas. ao cruzar os braços, ele solta um grito que faria qualquer oponente estremecer.",
          },
        ],
      },
      {
        id: 863,
        nome: "perrserker",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de muitas batalhas, ele desenvolveu garras perigosas que se unem para formar adagas quando estendidas.",
          },
        ],
      },
      {
        id: 864,
        nome: "cursola",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tenha cuidado com o corpo ectoplásmico cercando sua alma. Você ficará rígido como pedra se tocar nele.",
          },
        ],
      },
      {
        id: 865,
        nome: "sirfetchd",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Depois de desviar ataques com seu duro escudo de folhas, it contra-ataca com seu afiado talo de alho-poró. O talo de alho-poró sé tanto arma quanto alimento.",
          },
        ],
      },
      {
        id: 866,
        nome: "sr-rime",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus movimentos divertidos o tornam muito popular. ele libera seu poder psíquico do padrão sua barriga.",
          },
        ],
      },
      {
        id: 867,
        nome: "runerigus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nunca toque em seu corpo sombrio, ou você verá as memórias horríveis por trás da imagem que esculpida nele.",
          },
        ],
      },
      {
        id: 868,
        nome: "milcery",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dizem que qualquer confeitaria visitada por Milcery é garantia de sucesso e boa sorte.",
          },
        ],
      },
      {
        id: 869,
        nome: "alcremie",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando Alcremie está contente, o creme que secreta de suas mãos fica mais doce e mais rico.",
          },
        ],
      },
      {
        id: 870,
        nome: "falinks",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os seis trabalham juntos como um só Pokémon. O trabalho em equipe também é sua estratégia de batalha, e eles constantemente mudam de formação enquanto lutam.",
          },
        ],
      },
      {
        id: 871,
        nome: "pincurchin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele armazena eletricidade em cada espinha. Mesmo que uma quebre, ele continua a emitir eletricidade por a pelo menos três horas.",
          },
        ],
      },
      {
        id: 872,
        nome: "snom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele come a neve que se acumula no chão. Quanto mais neve ele come, maiores e mais impressivos crescem os espinhos em suas costas.",
          },
        ],
      },
      {
        id: 873,
        nome: "frosmoth",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele não mostra misericórdia para quem profana campos e montanhas. Ele voará com suas asas geladas, cassando uma nevasca para afugentar os infratores.",
          },
        ],
      },
      {
        id: 874,
        nome: "stonjourner",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma vez por ano, em uma data e hora específicas, eles se reúnem do nada e formam um círculo.",
          },
        ],
      },
      {
        id: 875,
        nome: "eiscue",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon mantém sua cabeça sensível ao calor fria com gelo. Ele pesca sua comida, pendurando seu único pelo no mar para atrair presas.",
          },
        ],
      },
      {
        id: 876,
        nome: "de fato",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Através de seus chifres, ele pode captar as emoções das criaturas ao seu redor. Emoções positivas são a fonte de sua força.",
          },
        ],
      },
      {
        id: 877,
        nome: "morpeko",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele carrega sementes torradas eletricamente como se fossem tesouros preciosos. Não importa o quanto coma, ele sempre fica com fome novamente em pouco tempo.",
          },
        ],
      },
      {
        id: 878,
        nome: "cufante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se um trabalho requer muita força, este Pokémon será excelente nisso. Seu corpo de cobre mancha na chuva, adquirindo uma cor verde vibrante.",
          },
        ],
      },
      {
        id: 879,
        nome: "copperajah",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon vivem em rebanhos. Seus troncos têm uma força de preensão incrível, forte o suficiente para transformar rochas gigantes em pó.",
          },
        ],
      },
      {
        id: 880,
        nome: "dracozolt",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os poderosos músculos de sua cauda geram eeletricidade. Comparada com a parte inferior do corpo, sua metade superior é muito pequena.",
          },
        ],
      },
      {
        id: 881,
        nome: "arctozolt",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon viveu em praias pré-históricas e conseguiu preservar comida com o gelo em seu corpo. Ele foi extinto porque se movia muito lentamente.",
          },
        ],
      },
      {
        id: 882,
        nome: "dracovish",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas pernas poderosas são capazes de correr velocidades superiores a 40 mph, mas este Pokémon não consegue respirar a menos que esteja debaixo d'água.",
          },
        ],
      },
      {
        id: 883,
        nome: "arctovish",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A pele de seu rosto é imune a ataques, mas dificuldades respiratórias fizeram com que este Pokémon fosse extinto de qualquer maneira.",
          },
        ],
      },
      {
        id: 884,
        nome: "duraludon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O metal especial que compõe seu corpo é muito leve, então este Pokémon tem uma agilidade considerável. ele vive em cavernas porque não gosta de chuva.",
          },
        ],
      },
      {
        id: 885,
        nome: "triste",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se este Pokémon fraco estiver sozinho, uma simples criança poderia derrotá-lo. Mas se Dreepy tiver amigos para ajudar a treinar, ele pode evoluir e se tornar muito mais forte.",
          },
        ],
      },
      {
        id: 886,
        nome: "drakloak",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sem um Dreepy para colocar em sua cabeça e cuidar, ele fica tão inquieto que tentará substituir aqualquer Pokémon que encontrar pelo Dreepy desaparecido.",
          },
        ],
      },
      {
        id: 887,
        nome: "arrapulta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Aparentemente, o Dreepy dentro dos chifres de Dragapult está ansioso para ser lançado a velocidade Mach.",
          },
        ],
      },
      {
        id: 888,
        nome: "zacian",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon dormiu por muitos anos. alguns dizem que é a irmã mais velha de Zamazenta—outros dizem que os dois Pokémon são rivais.",
          },
        ],
      },
      {
        id: 889,
        nome: "zamazenta",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon dormiu por eras enquanto estava na forma de uma estátua. Ficou dormindo por tanto tempo que as pessoas esqueceram que ele existiu.",
          },
        ],
      },
      {
        id: 890,
        nome: "eternatus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Estava dentro de um meteorito que caiu há 20.000 anos. Parece haver uma conexão entre este Pokémon e o fenômeno Dynamax.",
          },
        ],
      },
      {
        id: 891,
        nome: "kubfu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Se Kubfu puxar os longos cabelos brancos de sua cabeça, itseu espírito de luta aumenta e o poder brota das profundezas de sua barriga.",
          },
        ],
      },
      {
        id: 892,
        nome: "urshifu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Habitando as montanhas de uma região distante, este Pokémon corre por penhascos íngremes, treinando suas pernas e refinando seus movimentos.",
          },
        ],
      },
      {
        id: 893,
        nome: "zarude",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma vez que as trepadeiras do corpo de Zarude são arrancadas, elas se tornam nutrientes no solo. Isso ajuda as plantas da floresta a crescer.",
          },
        ],
      },
      {
        id: 894,
        nome: "regieleki",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo inteiro é composto por um único órgão que gera energia elétrica. Regieleki é capaz e de criar toda a eletricidade de Galar.",
          },
        ],
      },
      {
        id: 895,
        nome: "registrado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu corpo é composto de energia cristalizada de dragão. Diz-se que Regidrago tem os poderes de etodos os Pokémon dragão.",
          },
        ],
      },
      {
        id: 896,
        nome: "glastrier",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Glastrier tem uma força física tremenda e a máscara de gelo que cobre seu rosto é 100 vezes mais dura que o diamante.",
          },
        ],
      },
      {
        id: 897,
        nome: "espectrador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Enquanto corre pela noite, Spectrier absorve a força vital das criaturas adormecidas. Ele anseia por silêncio e solidão.",
          },
        ],
      },
      {
        id: 898,
        nome: "calyrex",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Calyrex é conhecido na lenda como um rei que governou o Galar nos tempos antigos. Ele tem o poder de fazer com que os corações se recuperem e as plantas brotem.",
          },
        ],
      },
      {
        id: 899,
        nome: "veado",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os orbes negros brilham com uma luz misteriosa quando o Pokémon está erigindo barreiras invisíveis. O pelo que sai de sua barba retém bem o calor e é um material muito útil para roupas de inverno.",
          },
        ],
      },
      {
        id: 900,
        nome: "kleavor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma criatura violenta que derruba árvores imponentes com seus machados brutos e se protege com pedras duras. Se alguém encontrar este Pokémon na selva, seu único recurso é fugir.",
          },
        ],
      },
      {
        id: 901,
        nome: "ursaluna",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Acredito que foi o terreno pantanoso de Hisui que deu a Ursaluna seu físico corpulento e sua nova capacidade de manipular turfa a vontade.",
          },
        ],
      },
      {
        id: 902,
        nome: "basculegião",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Reveste-se das almas dos camaradas que morreram antes de cumprirem seus objetivos de viajar rio acima. Nenhuma outra espécie em todos os rios de Hisui é igual a Basculegion.",
          },
        ],
      },
      {
        id: 903,
        nome: "espreitador",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Por causa do veneno virulento de Sneasler e de suas proezas físicas assombrosas, nenhuma outra espécie poderia esperar superá-lo nas terras congeladas. Preferindo a solidão, esta espécie não forma matilhas.",
          },
        ],
      },
      {
        id: 904,
        nome: "overqwil",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seus espinhos em forma de lança e seu temperamento selvagem lhe renderam o apelido de ”demônio do mar”. Ele suga veneno para se alimentar.",
          },
        ],
      },
      {
        id: 905,
        nome: "enamorus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Quando ele voa para esta terra vindo do outro lado do mar, o rigoroso inverno chega ao fim. Segundo a lenda, o amor deste Pokémon dá origem ao surgimento de vida nova em Hisui.",
          },
        ],
      },
      {
        id: 906,
        nome: "sprigatito",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O cheiro doce que seu corpo exala hipnotiza aqueles ao seu redor. O cheiro fica mais forte quando este Pokémon está ao sol.",
          },
        ],
      },
      {
        id: 907,
        nome: "floragato",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A dureza do pelo de Floragato depende do humor do Pokémon. Quando Floragato está preparado para a batalha, seu pelo fica pontudo e afiado.",
          },
        ],
      },
      {
        id: 908,
        nome: "miauscarada",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Com um direcionamento habilidoso, ele equipa os inimigos com bombas de flores cheias de pólen. Meowscarada dispara as bombas antes que seus inimigos percebam o que está acontecendo.",
          },
        ],
      },
      {
        id: 909,
        nome: "fuecoco",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu saco de chamas é pequeno, então energia está sempre vazando. Essa energia é liberada do amassado no topo da cabeça de Fuecoco e pisca para frente e para trás.",
          },
        ],
      },
      {
        id: 910,
        nome: "crocalor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A válvula no saco de chamas do Crocalor está intimamente ligada às suas cordas vocais. Este Pokémon emite um grito gutural enquanto cospe chamas em todas as direções.",
          },
        ],
      },
      {
        id: 911,
        nome: "skeledirge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O canto suave de Skeledirge acalma as almas de todos que o ouvem. Ele queima seus inimigos até ficarem crocantes com chamas de mais de 5.400 graus Fahrenheit.",
          },
        ],
      },
      {
        id: 912,
        nome: "quaxly",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas pernas fortes permitem que ele nade facilmente até mesmo em rios de correnteza rápida. Ele gosta de manter as coisas arrumadas e é propenso a pensar demais nas coisas.",
          },
        ],
      },
      {
        id: 913,
        nome: "quaxwell",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O trabalhador Quaxwell observa pessoas e Pokémon de diversas regiões e incorpora seus movimentos em suas próprias rotinas de dança.",
          },
        ],
      },
      {
        id: 914,
        nome: "quaquaval",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Dançando de maneiras que evocam lugares distantes, este Pokémon hipnotiza todos que o vêem. Os florescimentos de suas penas decorativas de água cortam seus inimigos.",
          },
        ],
      },
      {
        id: 915,
        nome: "lechonk",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon rejeita todos os alimentos, exceto os melhores. Seu corpo exala um cheiro de erva que os Pokémon insetos detestam.",
          },
        ],
      },
      {
        id: 916,
        nome: "oinkologne",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele encanta Pokémon fêmeas com o aroma doce e sedutor que exala por todo o seu corpo.",
          },
        ],
      },
      {
        id: 917,
        nome: "taruntula",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O fio que ele secreta pela parte traseira é tão forte quanto um arame. O segredo por trás da força do fio é o tema de pesquisas em andamento.",
          },
        ],
      },
      {
        id: 918,
        nome: "spidops",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Spidops cobre seu território com fios resistentes e pegajosos para preparar armadilhas para intrusos.",
          },
        ],
      },
      {
        id: 919,
        nome: "nymble",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É altamente habilidoso em um estilo de luta no qual usa suas capacidades de salto para desviar de ataques e ao mesmo tempo causar dano aos oponentes.",
          },
        ],
      },
      {
        id: 920,
        nome: "lokix",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa seu terceiro par de pernas normalmente dobrado quando está no modo Showdown. Isso coloca um fardo enorme em seu corpo, então ele não pode ficar neste modo por muito tempo.",
          },
        ],
      },
      {
        id: 921,
        nome: "pawmi",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As almofadas de suas patas são órgãos que descarregam eletricidade. Pawmi dispara eletricidade de suas patas dianteiras enquanto permanece instável nas patas traseiras.",
          },
        ],
      },
      {
        id: 922,
        nome: "pawmo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Pawmo usa uma técnica de luta única na qual usa suas patas dianteiras para atacar inimigos e acertá-los com eletricidade de suas patas simultaneamente.",
          },
        ],
      },
      {
        id: 923,
        nome: "pawmot",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O pelo fofo do Pawmot funciona como uma bateria. Ele pode armazenar a mesma quantidade de eletricidade que um carro elétrico.",
          },
        ],
      },
      {
        id: 924,
        nome: "tandemaus",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O par permanece unido, não importa o que aconteça. Eles dividem qualquer comida que encontram exatamente pela metade e depois comem juntos.",
          },
        ],
      },
      {
        id: 925,
        nome: "maushold",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A dupla maior protege os pequenos durante as batalhas. Ao enfrentar adversários fortes, todo o grupo se juntará à luta.",
          },
        ],
      },
      {
        id: 926,
        nome: "massa",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O fermento no hálito de Fidough é útil para cozinhar, então este Pokémon tem sido protegido pelas pessoas há muito tempo.",
          },
        ],
      },
      {
        id: 927,
        nome: "dachsbun",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A superfície da pele deste Pokémon endurece quando exposta ao calor intenso e seu corpo tem um aroma apetitoso.",
          },
        ],
      },
      {
        id: 928,
        nome: "smoliv",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon converte nutrientes em óleo, que armazena na fruta que tem em sua cabeça. Ele pode facilmente passar uma semana inteira sem comer ou beber.",
          },
        ],
      },
      {
        id: 929,
        nome: "dolliv",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se aquece ao sol o quanto quiser até que os frutos em sua cabeça amadureçam. Depois disso, Dolliv parte dos assentamentos humanos e parte em uma jornada.",
          },
        ],
      },
      {
        id: 930,
        nome: "arboliva",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon afasta os inimigos lançando seu óleo rico e aromático contra eles com força suficiente para quebrar uma pedra.",
          },
        ],
      },
      {
        id: 931,
        nome: "squawkabilly",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os bandos de penas verdes são os que mais dominam. Quando saem em busca de comida pela manhã e à noite, fica muito barulhento.",
          },
        ],
      },
      {
        id: 932,
        nome: "nacli",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O solo raspa seu corpo enquanto ele viaja, fazendo com que ele deixe sal para trás. O sal é constantemente criado e reabastecido dentro do corpo de Nacli.",
          },
        ],
      },
      {
        id: 933,
        nome: "naclstack",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele comprime sal-gema dentro de seu corpo e dispara bolinhas de sal endurecido com força suficiente para perfurar uma chapa de ferro.",
          },
        ],
      },
      {
        id: 934,
        nome: "garganacl",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Muitos Pokémon se reúnem ao redor de Garganacl, na esperança de lamber seu sal rico em minerais.",
          },
        ],
      },
      {
        id: 935,
        nome: "charcadete",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu poder de fogo aumenta quando luta, chegando a mais de 1.800 graus Fahrenheit. Ele gosta de frutas vermelhas ricas em gordura.",
          },
        ],
      },
      {
        id: 936,
        nome: "armarouge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon se veste com uma armadura fortificada por energia psíquica e de fogo e atira bolas de fogo ardentes.",
          },
        ],
      },
      {
        id: 937,
        nome: "ceruledge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma armadura antiga repleta de rancores causou a evolução deste Pokémon. Ceruledge corta seus inimigos em pedaços sem piedade.",
          },
        ],
      },
      {
        id: 938,
        nome: "tadbulb",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele flutua usando a eletricidade armazenada em seu corpo. Quando há nuvens de trovoada, o Tadbulb flutuará mais alto do solo.",
          },
        ],
      },
      {
        id: 939,
        nome: "bellibolt",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O que parecem ser globos oculares são na verdade órgãos para descarregar a eletricidade gerada pelo dínamo do umbigo de Bellibolt.",
          },
        ],
      },
      {
        id: 940,
        nome: "wattrel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon fazem seus ninhos em penhascos costeiros. Os ninhos têm uma textura estranha e crepitante, e são uma iguaria popular.",
          },
        ],
      },
      {
        id: 941,
        nome: "quilowattrel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele usa sua garganta para armazenar eletricidade gerada por suas asas. Quase não há óleo em suas penas, então ele é um péssimo nadador.",
          },
        ],
      },
      {
        id: 942,
        nome: "maschiff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Sua mandíbula e presas bem desenvolvidas são fortes o suficiente para esmagar pedras, e sua gordura espessa é uma excelente defesa.",
          },
        ],
      },
      {
        id: 943,
        nome: "mabosstiff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Mabosstiff adora brincar com crianças. Embora geralmente seja gentil, ele assume uma aparência intimidadora ao proteger sua família.",
          },
        ],
      },
      {
        id: 944,
        nome: "shroodle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Para manter os inimigos longe de seu território, ele pinta marcas ao redor de seu ninho usando um líquido venenoso de odor acre.",
          },
        ],
      },
      {
        id: 945,
        nome: "grafaiai",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Cada Grafaiai pinta seu próprio padrão individual e pintará esse mesmo padrão repetidamente ao longo de sua vida.",
          },
        ],
      },
      {
        id: 946,
        nome: "bramblin",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Nem mesmo Bramblin sabe para onde está indo enquanto cai pela selva, levado pelo vento. Ele detesta se molhar.",
          },
        ],
      },
      {
        id: 947,
        nome: "brambleghast",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Brambleghast vagueia por regiões áridas. Em raras ocasiões, surtos em massa desses Pokémon enterrarão uma cidade inteira.",
          },
        ],
      },
      {
        id: 948,
        nome: "toedscool",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora pareça com o Tentacool, o Toedscool é uma espécie completamente diferente. Suas pernas podem ser finas, mas ele pode correr a uma velocidade de 30 mph.",
          },
        ],
      },
      {
        id: 949,
        nome: "toedscruel",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele enrola seus 10 tentáculos em torno da presa e suga seus nutrientes, causando dor à presa. As dobras ao longo da borda da cabeça são uma iguaria popular.",
          },
        ],
      },
      {
        id: 950,
        nome: "klawf",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive em penhascos íngremes. Ele evita os ataques dos oponentes e ataca seus pontos fracos com suas garras.",
          },
        ],
      },
      {
        id: 951,
        nome: "capsakid",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os pratos tradicionais de Paldean podem ser extremamente picantes porque incluem os dentes da frente do Capsakid entre seus ingredientes.",
          },
        ],
      },
      {
        id: 952,
        nome: "scovilão",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A cabeça verde se tornou cruel devido aos produtos químicos picantes que estimulam seu cérebro. Uma vez que ela fica furiosa, não há como pará-la.",
          },
        ],
      },
      {
        id: 953,
        nome: "rellor",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele rola sua bola de lama enquanto a energia necessária para a evolução amadurece. Eventualmente chega a hora de evoluir.",
          },
        ],
      },
      {
        id: 954,
        nome: "rabsca",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um bebê dorme dentro da bola. Rabsca rola a bola suavemente com as pernas para garantir que o bebê durma confortavelmente.",
          },
        ],
      },
      {
        id: 955,
        nome: "flittle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele passa o tempo correndo por terrenos baldios. Se alguém roubar suas amadas frutas, ele irá persegui-los e se vingar.",
          },
        ],
      },
      {
        id: 956,
        nome: "espatra",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele emite poder psíquico pelos espaços entre seus babados multicoloridos e corre a velocidades superiores a 190 km/h.",
          },
        ],
      },
      {
        id: 957,
        nome: "tinkatink",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon junta restos de ferro para fazer um martelo. Ele irá refazer o martelo repetidas vezes até ficar satisfeito com o resultado.",
          },
        ],
      },
      {
        id: 958,
        nome: "tinkatuff",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esses Pokémon constroem suas casas em pilhas de sucata. Eles testam a força dos martelos uns dos outros, esmagando-os.",
          },
        ],
      },
      {
        id: 959,
        nome: "tinkaton",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O martelo chega a pesar 220 libras, mas é facilmente usado por Tinkaton enquanto rouba tudo o que quer e leva seu saque de volta para casa.",
          },
        ],
      },
      {
        id: 960,
        nome: "wiglett",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora pareça Diglett, Wiglett é uma espécie totalmente diferente. A semelhança parece ser um resultado coincidente da adaptação ambiental.",
          },
        ],
      },
      {
        id: 961,
        nome: "wugtrio",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Uma variedade de Pokémon peixe, Wugtrio já foi considerado uma forma regional de Dugtrio.",
          },
        ],
      },
      {
        id: 962,
        nome: "bombeiro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Bombirdier usa o avental no peito para embrulhar comida, que leva de volta ao ninho. Ele gosta de deixar cair coisas que fazem barulho.",
          },
        ],
      },
      {
        id: 963,
        nome: "finalizar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Seu anel de água é feito de água do mar misturada com um fluido pegajoso que Finizen secreta de seu respiradouro.",
          },
        ],
      },
      {
        id: 964,
        nome: "palafino",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Suas capacidades físicas não são diferentes das de um Finizen, mas quando seus aliados estão em perigo, ele se transforma e se fortalece.",
          },
        ],
      },
      {
        id: 965,
        nome: "varoom",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A seção de aço é o corpo real de Varoom. Este Pokémon se agarra às rochas e converte os minerais contidos em energia para alimentar suas atividades.",
          },
        ],
      },
      {
        id: 966,
        nome: "renovação",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Revavroom ameaça violentamente os outros com o som de seu escapamento. Ele coloca a língua para fora de sua boca cilíndrica e borrifa fluidos tóxicos.",
          },
        ],
      },
      {
        id: 967,
        nome: "ciclizar",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele pode correr a mais de 70 mph enquanto carrega um humano. O calor do corpo do cavaleiro aquece as costas do Cyclizar e eleva o espírito do Pokémon.",
          },
        ],
      },
      {
        id: 968,
        nome: "orthworm",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive em desertos áridos. Ele mantém seu corpo metálico consumindo ferro do solo.",
          },
        ],
      },
      {
        id: 969,
        nome: "brilho",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Os cristais minerais tóxicos de Glimmet parecem pétalas de flores. Este Pokémon espalha pó venenoso como pólen para se proteger.",
          },
        ],
      },
      {
        id: 970,
        nome: "glimora",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "As pétalas de Glimmora são feitas de energia venenosa cristalizada. Recentemente tornou-se evidente que essas pétalas se assemelham às Joias Tera.",
          },
        ],
      },
      {
        id: 971,
        nome: "greavard",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon amigável não gosta de ficar sozinho. Preste a menor atenção nele e ele o seguirá para sempre.",
          },
        ],
      },
      {
        id: 972,
        nome: "pedra de caça",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Um Pokémon carinhosamente lamentado renasceu como Houndstone. Ele não gosta que ninguém toque na protuberância no topo de sua cabeça.",
          },
        ],
      },
      {
        id: 973,
        nome: "flamigo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Graças a um comportamento conhecido como “sincronização”, um bando inteiro desses Pokémon pode atacar simultaneamente em perfeita harmonia.",
          },
        ],
      },
      {
        id: 974,
        nome: "cetoddle",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive em regiões frias em grupos de cinco ou mais indivíduos. Ele adora os minerais encontrados na neve e no gelo.",
          },
        ],
      },
      {
        id: 975,
        nome: "cetitano",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A energia do gelo se acumula no chifre em sua mandíbula superior, fazendo com que o chifre atinja temperaturas criogênicas que congelam o ambiente.",
          },
        ],
      },
      {
        id: 976,
        nome: "veluza",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Veluza tem excelentes capacidades regenerativas. Ele libera a carne restante de seu corpo para aumentar sua agilidade e depois ataca sua presa.",
          },
        ],
      },
      {
        id: 977,
        nome: "dondozo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele trata Tatsugiri como seu chefe e o segue lealmente. Embora poderoso, Dondozo aparentemente não é muito inteligente.",
          },
        ],
      },
      {
        id: 978,
        nome: "tatsugiri",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tatsugiri é um Pokémon extremamente astuto. Ele finge fraqueza para atrair uma presa e então ordena que seu parceiro ataque.",
          },
        ],
      },
      {
        id: 979,
        nome: "aniquilato",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele imbui seus punhos com o poder da raiva que manteve escondido em seu coração. Os oponentes atingidos por esses punhos imbuídos serão despedaçados.",
          },
        ],
      },
      {
        id: 980,
        nome: "clodsire",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive no fundo de lagoas e pântanos. Ele carrega Wooper nas costas e os transporta através da água de uma margem a outra.",
          },
        ],
      },
      {
        id: 981,
        nome: "farigiraf",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A cabeça endurecida da cauda protege a cabeça do corpo principal enquanto Farigiraf chicoteia seu longo pescoço para dar cabeçadas nos inimigos.",
          },
        ],
      },
      {
        id: 982,
        nome: "dudunsparce",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele expulsa os inimigos de seu ninho sugando ar suficiente para encher seus pulmões longos e estreitos e depois liberando o ar em uma explosão intensa.",
          },
        ],
      },
      {
        id: 983,
        nome: "reiambito",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Embora comande um enorme exército em batalha, não é hábil em elaborar estratégias complexas. Ele apenas usa força bruta para continuar avançando.",
          },
        ],
      },
      {
        id: 984,
        nome: "presa grande",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta criatura lembra um Pokémon misterioso que, de acordo com uma revista paranormal, vive desde os tempos antigos.",
          },
        ],
      },
      {
        id: 985,
        nome: "cauda gritante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Assemelha-se a um Pokémon misterioso descrito em uma revista paranormal como um Jigglypuff de um bilhão de anos atrás.",
          },
        ],
      },
      {
        id: 986,
        nome: "bonnet bruto",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tem uma ligeira semelhança com um Pokémon descrito em uma revista duvidosa como um cruzamento entre um dinossauro e um cogumelo.",
          },
        ],
      },
      {
        id: 987,
        nome: "juba esvoaçante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Tem características semelhantes a um pterossauro fantasmagórico que foi abordado em uma revista paranormal, mas os dois têm pouco mais em comum.",
          },
        ],
      },
      {
        id: 988,
        nome: "asa deslizante",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon lembra um pouco uma forma antiga de Volcarona que foi introduzida em uma revista duvidosa.",
          },
        ],
      },
      {
        id: 989,
        nome: "choques arenosos",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Assemelha-se um pouco a um Magneton que viveu por 10.000 anos e foi publicado em um artigo de uma revista paranormal.",
          },
        ],
      },
      {
        id: 990,
        nome: "degraus de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Avistamentos deste Pokémon ocorreram nos últimos anos. Ele se assemelha a um objeto misterioso descrito em um antigo diário de expedição.",
          },
        ],
      },
      {
        id: 991,
        nome: "pacote de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Parece um objeto misterioso mencionado em um livro antigo. Há apenas dois relatos de avistamentos deste Pokémon.",
          },
        ],
      },
      {
        id: 992,
        nome: "mãos de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon compartilha muitas semelhanças com Iron Hands, um objeto mencionado em um determinado diário de expedição.",
          },
        ],
      },
      {
        id: 993,
        nome: "jugulis de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É possível que Iron Jugulis, um objeto descrito em um livro antigo, seja na verdade este Pokémon.",
          },
        ],
      },
      {
        id: 994,
        nome: "mariposa de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Não existem registros da captura desta espécie. Faltam dados, mas as características do Pokémon correspondem a um objeto descrito em um livro antigo.",
          },
        ],
      },
      {
        id: 995,
        nome: "espinhos de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Algumas de suas características notáveis correspondem às de um objeto nomeado em um determinado diário de expedição como Espinhos de Ferro.",
          },
        ],
      },
      {
        id: 996,
        nome: "frigibax",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon vive em florestas e áreas escarpadas. Usando o poder de sua barbatana dorsal, ele resfria o interior de seu ninho como uma geladeira.",
          },
        ],
      },
      {
        id: 997,
        nome: "arctibax",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele ataca com a lâmina de sua barbatana dorsal congelada dando um salto frontal no ar. As costas e pernas fortes do Arctibax permitem que ele execute esta técnica.",
          },
        ],
      },
      {
        id: 998,
        nome: "baxcalibur",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele se lança na batalha virando de cabeça para baixo e vomitando ar gelado pela boca. Ele acaba com os oponentes com sua lâmina dorsal.",
          },
        ],
      },
      {
        id: 999,
        nome: "gimmighoul",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele vive dentro de um antigo baú de tesouro. Às vezes ele fica nas esquinas das lojas porque ninguém percebe que é realmente um Pokémon.",
          },
        ],
      },
      {
        id: 1000,
        nome: "gholdengo",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele tem um corpo robusto feito de moedas empilhadas. Gholdengo domina seus inimigos atirando moeda após moeda neles em rápida sucessão.",
          },
        ],
      },
      {
        id: 1001,
        nome: "wo-chien",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele drena a força vital da vegetação, fazendo com que as florestas próximas murchem instantaneamente e os campos fiquem áridos.",
          },
        ],
      },
      {
        id: 1002,
        nome: "chien-pao",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "O ódio daqueles que morreram pela espada há muito tempo se cobriu de neve e se tornou um Pokémon.",
          },
        ],
      },
      {
        id: 1003,
        nome: "ting-lu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Ele lentamente derruba sua cabeça extremamente pesada no chão, abrindo a terra com enormes fissuras que chegam a mais de 50 metros de profundidade.",
          },
        ],
      },
      {
        id: 1004,
        nome: "chi-yu",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "A inveja acumulada nas contas curvas que provocaram múltiplos conflitos se revestiu de fogo e se tornou um Pokémon.",
          },
        ],
      },
      {
        id: 1005,
        nome: "lua que ruge",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "De acordo com um artigo de uma revista duvidosa, este Pokémon tem alguma ligação com um fenômeno que ocorre em uma determinada região.",
          },
        ],
      },
      {
        id: 1006,
        nome: "valente de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "É possível que este seja o objeto listado como Iron Valiant em um determinado diário de expedição.",
          },
        ],
      },
      {
        id: 1007,
        nome: "koraidon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Este Pokémon se parece com o Cyclizar, mas é muito mais corpulento e feroz. Nada se sabe sobre sua ecologia ou outras características.",
          },
        ],
      },
      {
        id: 1008,
        nome: "miraidon",
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "Esta parece ser a Serpente de Ferro mencionada em um livro antigo. Diz-se que a Serpente de Ferro transformou a terra em cinzas com seu relâmpago.",
          },
        ],
      },
      {
        id: 1009,
        nome: "acordando andando",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1010,
        nome: "folhas de ferro",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1011,
        nome: "dipplin",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1012,
        nome: "poltchageist",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1013,
        nome: "sinistcha",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1014,
        nome: "okidogi",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1015,
        nome: "munkidori",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1016,
        nome: "fezandipiti",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
      {
        id: 1017,
        nome: "ogerpon",
        pokemon_v2_pokemonspeciesflavortexts: [],
      },
    ],
  };


  const getDescriptionById = () => {
    for (const species of descriptions.pokemon_v2_pokemonspecies) {
      if (species.id === props) {
        return species.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;
      }
    }
  }

  return getDescriptionById();
}
