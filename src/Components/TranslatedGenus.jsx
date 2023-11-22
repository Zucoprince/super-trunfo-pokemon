import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function TranslatedGenus(props) {
  const genus = [
    {
      id: 1,
      nome: "bulbasauro",
      genus: "Pokémon Semente",
    },
    {
      id: 2,
      nome: "ivysauro",
      genus: "Pokémon Semente",
    },
    {
      id: 3,
      nome: "venusauro",
      genus: "Pokémon Semente",
    },
    {
      id: 4,
      nome: "charmander",
      genus: "Pokémon Lagarto",
    },
    {
      id: 5,
      nome: "charmeleon",
      genus: "Pokémon Chama",
    },
    {
      id: 6,
      nome: "charizard",
      genus: "Pokémon Chama",
    },
    {
      id: 7,
      nome: "squirtle",
      genus: "Pokémon Tartaruga Minúscula",
    },
    {
      id: 8,
      nome: "wartortle",
      genus: "Pokémon Tartaruga",
    },
    {
      id: 9,
      nome: "blastoise",
      genus: "Pokémon Marisco",
    },
    {
      id: 10,
      nome: "caterpie",
      genus: "Pokémon Verme",
    },
    {
      id: 11,
      nome: "metápode",
      genus: "Pokémon Casulo",
    },
    {
      id: 12,
      nome: "sem manteiga",
      genus: "Pokémon Borboleta",
    },
    {
      id: 13,
      nome: "weedle",
      genus: "Pokémon Inseto Peludo",
    },
    {
      id: 14,
      nome: "kakuna",
      genus: "Pokémon Casulo",
    },
    {
      id: 15,
      nome: "beedrill",
      genus: "Pokémon Abelha Venenosa",
    },
    {
      id: 16,
      nome: "pidgey",
      genus: "Pokémon Pequeno Pássaro",
    },
    {
      id: 17,
      nome: "pidgeotto",
      genus: "Pokémon Pássaro",
    },
    {
      id: 18,
      nome: "pidgeot",
      genus: "Pokémon Pássaro",
    },
    {
      id: 19,
      nome: "rattata",
      genus: "Pokémon Rato",
    },
    {
      id: 20,
      nome: "raticate",
      genus: "Pokémon Rato",
    },
    {
      id: 21,
      nome: "lança",
      genus: "Pokémon Pequeno Pássaro",
    },
    {
      id: 22,
      nome: "medo",
      genus: "Pokémon Bico",
    },
    {
      id: 23,
      nome: "ekans",
      genus: "Pokémon Cobra",
    },
    {
      id: 24,
      nome: "arbok",
      genus: "Pokémon Cobra",
    },
    {
      id: 25,
      Nome: "Pikachu",
      genus: "Pokémon Rato Elétrico",
    },
    {
      id: 26,
      nome: "raichu",
      genus: "Pokémon Rato Elétrico",
    },
    {
      id: 27,
      nome: "sandshrew",
      genus: "Pokémon Tatu",
    },
    {
      id: 28,
      nome: "sandslash",
      genus: "Pokémon Tatu",
    },
    {
      id: 29,
      nome: "nidoran-f",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 30,
      nome: "nidorina",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 31,
      nome: "nidoqueen",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 32,
      nome: "nidoran-m",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 33,
      nome: "nidorino",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 34,
      nome: "nidoking",
      genus: "Pokémon Perfurante Venenoso",
    },
    {
      id: 35,
      nome: "clefairy",
      genus: "Pokémon Fada",
    },
    {
      id: 36,
      nome: "clefável",
      genus: "Pokémon Fada",
    },
    {
      id: 37,
      nome: "vulpix",
      genus: "Pokémon Raposa",
    },
    {
      id: 38,
      nome: "ninetales",
      genus: "Pokémon Raposa",
    },
    {
      id: 39,
      nome: "jigglypuff",
      genus: "Pokémon balão",
    },
    {
      id: 40,
      nome: "wigglytuff",
      genus: "Pokémon balão",
    },
    {
      id: 41,
      nome: "zubat",
      genus: "Pokémon Morcego",
    },
    {
      id: 42,
      nome: "golbat",
      genus: "Pokémon Morcego",
    },
    {
      id: 43,
      nome: "estranho",
      genus: "Pokémon Erva",
    },
    {
      id: 44,
      nome: "sombrio",
      genus: "Pokémon Erva",
    },
    {
      id: 45,
      nome: "vileplume",
      genus: "Pokémon Flor",
    },
    {
      id: 46,
      nome: "paras",
      genus: "Pokémon cogumelo",
    },
    {
      id: 47,
      nome: "paraseta",
      genus: "Pokémon cogumelo",
    },
    {
      id: 48,
      nome: "venonat",
      genus: "Pokémon Inseto",
    },
    {
      id: 49,
      nome: "venomote",
      genus: "Pokémon Mariposa Venenosa",
    },
    {
      id: 50,
      nome: "diglett",
      genus: "Pokémon Toupeira",
    },
    {
      id: 51,
      nome: "dugtrio",
      genus: "Pokémon Toupeira",
    },
    {
      id: 52,
      nome: "meowth",
      genus: "Pokémon Gato Arisco",
    },
    {
      id: 53,
      nome: "persa",
      genus: "Pokémon Gato Elegante",
    },
    {
      id: 54,
      nome: "psicopata",
      genus: "Pokémon Pato",
    },
    {
      id: 55,
      nome: "dourado",
      genus: "Pokémon Pato",
    },
    {
      id: 56,
      nome: "mankey",
      genus: "Pokémon Porco Macaco",
    },
    {
      id: 57,
      nome: "primeape",
      genus: "Pokémon Porco Macaco",
    },
    {
      id: 58,
      nome: "growlithe",
      genus: "Pokémon Filhote de Cachorro",
    },
    {
      id: 59,
      nome: "arcanino",
      genus: "Pokémon Lendário",
    },
    {
      id: 60,
      nome: "poliwag",
      genus: "Pokémon Girino",
    },
    {
      id: 61,
      nome: "poliwhirl",
      genus: "Pokémon Girino",
    },
    {
      id: 62,
      nome: "poliwrath",
      genus: "Pokémon Girino",
    },
    {
      id: 63,
      nome: "abra",
      genus: "Pokémon Psiquico",
    },
    {
      id: 64,
      nome: "kadabra",
      genus: "Pokémon Psiquico",
    },
    {
      id: 65,
      nome: "alakazam",
      genus: "Pokémon Psiquico",
    },
    {
      id: 66,
      nome: "machop",
      genus: "Pokémon Superpoderoso",
    },
    {
      id: 67,
      nome: "machoke",
      genus: "Pokémon Superpoderoso",
    },
    {
      id: 68,
      nome: "machamp",
      genus: "Pokémon Superpoderoso",
    },
    {
      id: 69,
      nome: "bellsprout",
      genus: "Pokémon Flor",
    },
    {
      id: 70,
      nome: "weepinbell",
      genus: "Pokémon Papa-Moscas",
    },
    {
      id: 71,
      nome: "victreebel",
      genus: "Pokémon Papa-Moscas",
    },
    {
      id: 72,
      nome: "tentacool",
      genus: "Pokémon Água-viva",
    },
    {
      id: 73,
      nome: "tentacruel",
      genus: "Pokémon Água-viva",
    },
    {
      id: 74,
      nome: "geodude",
      genus: "Pokémon Rock",
    },
    {
      id: 75,
      nome: "cascalho",
      genus: "Pokémon Rock",
    },
    {
      id: 76,
      nome: "golem",
      genus: "Pokémon Megaton",
    },
    {
      id: 77,
      nome: "ponyta",
      genus: "Pokémon Cavalo de Fogo",
    },
    {
      id: 78,
      nome: "rapidash",
      genus: "Pokémon Cavalo de Fogo",
    },
    {
      id: 79,
      nome: "slowpoke",
      genus: "Pokémon Bobo",
    },
    {
      id: 80,
      nome: "slowbro",
      genus: "Pokémon Caranguejo Eremita",
    },
    {
      id: 81,
      nome: "magnemite",
      genus: "Pokémon Magnético",
    },
    {
      id: 82,
      nome: "magneton",
      genus: "Pokémon Magnético",
    },
    {
      id: 83,
      nome: "farfetchd",
      genus: "Pokémon Pato Selvagem",
    },
    {
      id: 84,
      nome: "doduo",
      genus: "Pokémon Pássaro Gêmeo",
    },
    {
      id: 85,
      nome: "dodrio",
      genus: "Pokémon Pássaro Triplo",
    },
    {
      id: 86,
      nome: "seel",
      genus: "Pokémon Leão Marinho",
    },
    {
      id: 87,
      nome: "dewgong",
      genus: "Pokémon Leão Marinho",
    },
    {
      id: 88,
      nome: "grimer",
      genus: "Pokémon Lodo",
    },
    {
      id: 89,
      nome: "muk",
      genus: "Pokémon Lodo",
    },
    {
      id: 90,
      nome: "shellder",
      genus: "Pokémon Molusco",
    },
    {
      id: 91,
      nome: "cloyster",
      genus: "Pokémon Molusco",
    },
    {
      id: 92,
      nome: "gastly",
      genus: "Pokémon Gasoso",
    },
    {
      id: 93,
      nome: "assombrado",
      genus: "Pokémon Gasoso",
    },
    {
      id: 94,
      nome: "gengar",
      genus: "Pokémon das Sombras",
    },
    {
      id: 95,
      nome: "ônix",
      genus: "Pokémon Cobra das Pedras",
    },
    {
      id: 96,
      nome: "drowzee",
      genus: "Pokémon Hipnose",
    },
    {
      id: 97,
      nome: "hipno",
      genus: "Pokémon Hipnose",
    },
    {
      id: 98,
      nome: "krabby",
      genus: "Pokémon Caranguejo do Rio",
    },
    {
      id: 99,
      nome: "kingler",
      genus: "Pokémon Pinça",
    },
    {
      id: 100,
      nome: "voltorb",
      genus: "Pokémon Bola",
    },
    {
      id: 101,
      nome: "eletrodo",
      genus: "Pokémon Bola",
    },
    {
      id: 102,
      nome: "exeggcute",
      genus: "Pokémon Ovo",
    },
    {
      id: 103,
      nome: "exeggutor",
      genus: "Pokémon Coco",
    },
    {
      id: 104,
      nome: "cubone",
      genus: "Pokémon Solitário",
    },
    {
      id: 105,
      nome: "marowak",
      genus: "Pokémon Lança-Ossos",
    },
    {
      id: 106,
      nome: "hitmonlee",
      genus: "Pokémon Chutador",
    },
    {
      id: 107,
      nome: "hitmonchan",
      genus: "Pokémon Socador",
    },
    {
      id: 108,
      nome: "lickitung",
      genus: "Pokémon Linguarudo",
    },
    {
      id: 109,
      nome: "koffing",
      genus: "Pokémon Gás Venenoso",
    },
    {
      id: 110,
      nome: "chorão",
      genus: "Pokémon Gás Venenoso",
    },
    {
      id: 111,
      nome: "rhyhorn",
      genus: "Pokémon Espinhoso",
    },
    {
      id: 112,
      nome: "Rhydon",
      genus: "Pokémon Perfurador",
    },
    {
      id: 113,
      nome: "chansey",
      genus: "Pokémon Ovo",
    },
    {
      id: 114,
      nome: "tangela",
      genus: "Pokémon Vinha",
    },
    {
      id: 115,
      nome: "Kangaskhan",
      genus: "Pokémon Pai",
    },
    {
      id: 116,
      nome: "cavalo",
      genus: "Pokémon Dragão",
    },
    {
      id: 117,
      nome: "seadra",
      genus: "Pokémon Dragão",
    },
    {
      id: 118,
      nome: "dourado",
      genus: "Pokémon Peixe Dourado",
    },
    {
      id: 119,
      nome: "seaking",
      genus: "Pokémon Peixe Dourado",
    },
    {
      id: 120,
      nome: "staryu",
      genus: "Pokémon Estrela",
    },
    {
      id: 121,
      nome: "estrela",
      genus: "Pokémon Misterioso",
    },
    {
      id: 122,
      nome: "sr-mime",
      genus: "Pokémon Barreira",
    },
    {
      id: 123,
      nome: "scyther",
      genus: "Pokémon Louva-a-Deus",
    },
    {
      id: 124,
      nome: "jynx",
      genus: "Pokémon em Forma Humana",
    },
    {
      id: 125,
      nome: "electabuzz",
      genus: "Pokémon Elétrico",
    },
    {
      id: 126,
      nome: "magmar",
      genus: "Pokémon Explosivo",
    },
    {
      id: 127,
      nome: "pinsir",
      genus: "Pokémon Besouro-Chifrudo",
    },
    {
      id: 128,
      nome: "tauros",
      genus: "Pokémon Touro Selvagem",
    },
    {
      id: 129,
      nome: "magikarp",
      genus: "Pokémon Peixe",
    },
    {
      id: 130,
      nome: "gyarados",
      genus: "Pokémon Atroz",
    },
    {
      id: 131,
      nome: "lapras",
      genus: "Pokémon de Transporte",
    },
    {
      id: 132,
      nome: "idem",
      genus: "Transformar Pokémon",
    },
    {
      id: 133,
      nome: "eevee",
      genus: "Pokémon de Evolução",
    },
    {
      id: 134,
      nome: "vaporeon",
      genus: "Pokémon Bolhudo",
    },
    {
      id: 135,
      nome: "jolteon",
      genus: "Pokémon Relâmpago",
    },
    {
      id: 136,
      nome: "flareon",
      genus: "Pokémon Chama",
    },
    {
      id: 137,
      nome: "porígono",
      genus: "Pokémon Virtual",
    },
    {
      id: 138,
      nome: "omanita",
      genus: "Pokémon Espiral",
    },
    {
      id: 139,
      nome: "omastar",
      genus: "Pokémon Espiral",
    },
    {
      id: 140,
      nome: "kabuto",
      genus: "Pokémon Marisco",
    },
    {
      id: 141,
      nome: "kabutops",
      genus: "Pokémon Marisco",
    },
    {
      id: 142,
      nome: "aerodáctilo",
      genus: "Pokémon Fóssil",
    },
    {
      id: 143,
      nome: "snorlax",
      genus: "Pokémon Adormecido",
    },
    {
      id: 144,
      nome: "articuno",
      genus: "Pokémon Congelado",
    },
    {
      id: 145,
      nome: "zapdos",
      genus: "Pokémon elétrico",
    },
    {
      id: 146,
      nome: "moltres",
      genus: "Pokémon Chama",
    },
    {
      id: 147,
      nome: "dratini",
      genus: "Pokémon Dragão",
    },
    {
      id: 148,
      nome: "dragonair",
      genus: "Pokémon Dragão",
    },
    {
      id: 149,
      nome: "dragonita",
      genus: "Pokémon Dragão",
    },
    {
      id: 150,
      nome: "mewtwo",
      genus: "Pokémon Genético",
    },
    {
      id: 151,
      nome: "meu",
      genus: "Pokémon Nova Espécie",
    },
    {
      id: 152,
      nome: "chikorita",
      genus: "Pokémon Folha",
    },
    {
      id: 153,
      nome: "bayleef",
      genus: "Pokémon Folha",
    },
    {
      id: 154,
      nome: "megânio",
      genus: "Pokémon Erva",
    },
    {
      id: 155,
      nome: "cindaquil",
      genus: "Pokémon Rato de Fogo",
    },
    {
      id: 156,
      nome: "quilava",
      genus: "Pokémon Vulcão",
    },
    {
      id: 157,
      nome: "tiflosão",
      genus: "Pokémon Vulcão",
    },
    {
      id: 158,
      nome: "totodile",
      genus: "Pokémon Mandibuludo",
    },
    {
      id: 159,
      nome: "croconaw",
      genus: "Pokémon Mandibuludo",
    },
    {
      id: 160,
      nome: "feraligatr",
      genus: "Pokémon Mandibuludo",
    },
    {
      id: 161,
      nome: "sentret",
      genus: "Pokémon Escoteiro",
    },
    {
      id: 162,
      nome: "furret",
      genus: "Pokémon de Corpo Longo",
    },
    {
      id: 163,
      nome: "hoohoot",
      genus: "Pokémon Coruja",
    },
    {
      id: 164,
      nome: "noctowl",
      genus: "Pokémon Coruja",
    },
    {
      id: 165,
      nome: "ledyba",
      genus: "Pokémon Cinco Estrelas",
    },
    {
      id: 166,
      nome: "ledian",
      genus: "Pokémon Cinco Estrelas",
    },
    {
      id: 167,
      nome: "espinaraque",
      genus: "Pokémon Divisor de Teia",
    },
    {
      id: 168,
      nome: "ariados",
      genus: "Pokémon de Perna Longa",
    },
    {
      id: 169,
      nome: "crobata",
      genus: "Pokémon Morcego",
    },
    {
      id: 170,
      nome: "chinchou",
      genus: "Pokémon Pescador",
    },
    {
      id: 171,
      nome: "lanturna",
      genus: "Pokémon Leve",
    },
    {
      id: 172,
      nome: "pichu",
      genus: "Pokémon Pequeno Rato",
    },
    {
      id: 173,
      nome: "clefa",
      genus: "Pokémon em Forma de Estrela",
    },
    {
      id: 174,
      nome: "igglybuff",
      genus: "Pokémon Balão",
    },
    {
      id: 175,
      nome: "togepi",
      genus: "Pokémon Bola Espinhosa",
    },
    {
      id: 176,
      nome: "togético",
      genus: "Pokémon da Felicidade",
    },
    {
      id: 177,
      nome: "natu",
      genus: "Pokémon Pequeno Pássaro",
    },
    {
      id: 178,
      nome: "xatu",
      genus: "Pokémon Místico",
    },
    {
      id: 179,
      nome: "mareep",
      genus: "Pokémon de Lã",
    },
    {
      id: 180,
      nome: "flaaffy",
      genus: "Pokémon de Lã",
    },
    {
      id: 181,
      nome: "ampharos",
      genus: "Pokémon Leve",
    },
    {
      id: 182,
      nome: "belossom",
      genus: "Pokémon Flor",
    },
    {
      id: 183,
      nome: "marill",
      genus: "Pokémon Rato D'agua",
    },
    {
      id: 184,
      nome: "azumarill",
      genus: "Pokémon Coelho D'agua",
    },
    {
      id: 185,
      nome: "sudowoodo",
      genus: "Imitação de Pokémon",
    },
    {
      id: 186,
      nome: "politoed",
      genus: "Pokémon Sapo",
    },
    {
      id: 187,
      nome: "hoppip",
      genus: "Pokémon Algodão",
    },
    {
      id: 188,
      nome: "skiploom",
      genus: "Pokémon Algodão",
    },
    {
      id: 189,
      nome: "jumpluff",
      genus: "Pokémon Algodão",
    },
    {
      id: 190,
      nome: "aipom",
      genus: "Pokémon de Cauda Longa",
    },
    {
      id: 191,
      nome: "afundado",
      genus: "Pokémon Semente",
    },
    {
      id: 192,
      nome: "sunflora",
      genus: "Pokémon do Sol",
    },
    {
      id: 193,
      nome: "yanma",
      genus: "Pokémon de Asas Claras",
    },
    {
      id: 194,
      nome: "wooper",
      genus: "Pokémon Peixe Aquático",
    },
    {
      id: 195,
      nome: "quagsire",
      genus: "Pokémon Peixe Aquático",
    },
    {
      id: 196,
      nome: "Espeon",
      genus: "Pokémon do Sol",
    },
    {
      id: 197,
      nome: "umbreon",
      genus: "Pokémon do Luar",
    },
    {
      id: 198,
      nome: "murkrow",
      genus: "Pokémon das Trevas",
    },
    {
      id: 199,
      nome: "lentidão",
      genus: "Pokémon Real",
    },
    {
      id: 200,
      nome: "misdreavus",
      genus: "Pokémon Gritante",
    },
    {
      id: 201,
      nome: "desconhecido",
      genus: "Pokémon Símbolo",
    },
    {
      id: 202,
      nome: "wobbuffet",
      genus: "Pokémon Paciente",
    },
    {
      id: 203,
      nome: "girafarig",
      genus: "Pokémon de Pescoço Longo",
    },
    {
      id: 204,
      nome: "pineco",
      genus: "Pokémon Lagarta",
    },
    {
      id: 205,
      nome: "fortaleza",
      genus: "Pokémon Lagarta",
    },
    {
      id: 206,
      nome: "dunsparce",
      genus: "Pokémon Serpente Terrestre",
    },
    {
      id: 207,
      nome: "gligar",
      genus: "Pokémon Escorpião Voador",
    },
    {
      id: 208,
      nome: "steelix",
      genus: "Pokémon Cobra de Ferro",
    },
    {
      id: 209,
      nome: "snubbull",
      genus: "Pokémon Fada",
    },
    {
      id: 210,
      nome: "granbull",
      genus: "Pokémon Fada",
    },
    {
      id: 211,
      nome: "qwilfish",
      genus: "Pokémon Balão",
    },
    {
      id: 212,
      nome: "scizor",
      genus: "Pokémon Pinça",
    },
    {
      id: 213,
      nome: "shuckle",
      genus: "Mofo Pokémon",
    },
    {
      id: 214,
      nome: "heracross",
      genus: "Pokémon de Chifre Único",
    },
    {
      id: 215,
      nome: "sneasel",
      genus: "Pokémon Garra Afiada",
    },
    {
      id: 216,
      nome: "teddiursa",
      genus: "Pokémon Ursinho",
    },
    {
      id: 217,
      nome: "ursaring",
      genus: "Pokémon Hibernador",
    },
    {
      id: 218,
      nome: "slugma",
      genus: "Pokémon Lava",
    },
    {
      id: 219,
      nome: "magcargo",
      genus: "Pokémon Lava",
    },
    {
      id: 220,
      nome: "swinub",
      genus: "Pokémon Porco",
    },
    {
      id: 221,
      nome: "piloswine",
      genus: "Pokémon Suíno",
    },
    {
      id: 222,
      nome: "corsola",
      genus: "Pokémon Coral",
    },
    {
      id: 223,
      nome: "remoraid",
      genus: "Pokémon Jato",
    },
    {
      id: 224,
      nome: "octilaria",
      genus: "Pokémon Jato",
    },
    {
      id: 225,
      nome: "delibird",
      genus: "Pokémon Entregador",
    },
    {
      id: 226,
      nome: "mantina",
      genus: "Pokémon Pipa",
    },
    {
      id: 227,
      nome: "skarmory",
      genus: "Pokémon Pássaro Armadura",
    },
    {
      id: 228,
      nome: "houndour",
      genus: "Pokémon Negro",
    },
    {
      id: 229,
      nome: "houndoom",
      genus: "Pokémon Negro",
    },
    {
      id: 230,
      nome: "kingdra",
      genus: "Pokémon Dragão",
    },
    {
      id: 231,
      nome: "fanpy",
      genus: "Pokémon Nariz Longo",
    },
    {
      id: 232,
      nome: "donfan",
      genus: "Pokémon Armadura",
    },
    {
      id: 233,
      nome: "porygon2",
      genus: "Pokémon Virtual",
    },
    {
      id: 234,
      nome: "stanler",
      genus: "Pokémon Chifrudo",
    },
    {
      id: 235,
      nome: "smeargle",
      genus: "Pokémon Pintor",
    },
    {
      id: 236,
      nome: "tyrogue",
      genus: "Pokémon Lutador",
    },
    {
      id: 237,
      nome: "hitmontop",
      genus: "Pokémon de Parada de Mão",
    },
    {
      id: 238,
      nome: "smoochum",
      genus: "Beijo Pokémon",
    },
    {
      id: 239,
      nome: "elekid",
      genus: "Pokémon elétrico",
    },
    {
      id: 240,
      nome: "magby",
      genus: "Pokémon Carvão Vivo",
    },
    {
      id: 241,
      nome: "miltank",
      genus: "Pokémon Vaca Leiteira",
    },
    {
      id: 242,
      nome: "blissey",
      genus: "Pokémon da Felicidade",
    },
    {
      id: 243,
      nome: "raikou",
      genus: "Pokémon Trovão",
    },
    {
      id: 244,
      nome: "entei",
      genus: "Pokémon Vulcão",
    },
    {
      id: 245,
      nome: "suicune",
      genus: "Pokémon Aurora",
    },
    {
      id: 246,
      nome: "larvitar",
      genus: "Pokémon Pele de Pedra",
    },
    {
      id: 247,
      nome: "pupitar",
      genus: "Pokémon Casca Grossa",
    },
    {
      id: 248,
      nome: "tiranitar",
      genus: "Pokémon Armadura",
    },
    {
      id: 249,
      nome: "lugia",
      genus: "Pokémon Mergulhador",
    },
    {
      id: 250,
      nome: "ho-oh",
      genus: "Pokémon Arco-Íris",
    },
    {
      id: 251,
      nome: "celebi",
      genus: "Pokémon Viagem no Tempo",
    },
    {
      id: 252,
      nome: "treecko",
      genus: "Pokémon Lagartixa de Madeira",
    },
    {
      id: 253,
      nome: "grovyle",
      genus: "Pokémon Lagartixa de Madeira",
    },
    {
      id: 254,
      nome: "sceptil",
      genus: "Pokémon da Floresta",
    },
    {
      id: 255,
      nome: "tocha",
      genus: "Pokémon Pinto",
    },
    {
      id: 256,
      nome: "combusken",
      genus: "Pokémon Galinha",
    },
    {
      id: 257,
      nome: "blaziken",
      genus: "Pokémon Lava",
    },
    {
      id: 258,
      nome: "mudkip",
      genus: "Pokémon Peixe da Lama",
    },
    {
      id: 259,
      nome: "marshtomp",
      genus: "Pokémon Peixe da Lama",
    },
    {
      id: 260,
      nome: "swampert",
      genus: "Pokémon Peixe da Lama",
    },
    {
      id: 261,
      nome: "poochyena",
      genus: "Mordida Pokémon",
    },
    {
      id: 262,
      nome: "poderosa",
      genus: "Mordida Pokémon",
    },
    {
      id: 263,
      nome: "zigzagoon",
      genus: "Pequeno Pokémon Guaxinim",
    },
    {
      id: 264,
      nome: "linoone",
      genus: "Pokémon Apressado",
    },
    {
      id: 265,
      nome: "wurmple",
      genus: "Pokémon Verme",
    },
    {
      id: 266,
      nome: "silcoon",
      genus: "Pokémon Casulo",
    },
    {
      id: 267,
      nome: "lindamente",
      genus: "Pokémon Borboleta",
    },
    {
      id: 268,
      nome: "cascoon",
      genus: "Pokémon Casulo",
    },
    {
      id: 269,
      nome: "dustox",
      genus: "Pokémon Mariposa Venenosa",
    },
    {
      id: 270,
      nome: "lotad",
      genus: "Pokémon Erva Daninha de Água",
    },
    {
      id: 271,
      nome: "lombre",
      genus: "Pokémon Alegre",
    },
    {
      id: 272,
      nome: "ludicolo",
      genus: "Pokémon Despreocupado",
    },
    {
      id: 273,
      nome: "seedot",
      genus: "Pokémon Bolota",
    },
    {
      id: 274,
      nome: "nuzleaf",
      genus: "Pokémon Astuto",
    },
    {
      id: 275,
      nome: "shiftry",
      genus: "Pokémon Malvado",
    },
    {
      id: 276,
      nome: "taillow",
      genus: "Pequeno Pokémon Andorinha",
    },
    {
      id: 277,
      nome: "inchar",
      genus: "Pokémon Engolidor",
    },
    {
      id: 278,
      nome: "gaivota",
      genus: "Pokémon Gaivota",
    },
    {
      id: 279,
      nome: "pelipper",
      genus: "Pokémon Ave Aquática",
    },
    {
      id: 280,
      nome: "ralts",
      genus: "Pokémon Sensível",
    },
    {
      id: 281,
      nome: "kirlia",
      genus: "Pokémon Emocional",
    },
    {
      id: 282,
      nome: "gardevoir",
      genus: "Abrace Pokémon",
    },
    {
      id: 283,
      nome: "surskit",
      genus: "Pod Skater Pokémon",
    },
    {
      id: 284,
      nome: "mascarado",
      genus: "Pokémon Globo Ocular",
    },
    {
      id: 285,
      nome: "cogumelo",
      genus: "Pokémon Cogumelo",
    },
    {
      id: 286,
      nome: "breloom",
      genus: "Pokémon Cogumelo",
    },
    {
      id: 287,
      nome: "slakoth",
      genus: "Pokémon Preguiçoso",
    },
    {
      id: 288,
      nome: "vigoroth",
      genus: "Pokémon Macaco Selvagem",
    },
    {
      id: 289,
      nome: "slaking",
      genus: "Pokémon Preguiçoso",
    },
    {
      id: 290,
      nome: "nincada",
      genus: "Pokémon Estagiário",
    },
    {
      id: 291,
      nome: "ninjask",
      genus: "Pokémon Ninja",
    },
    {
      id: 292,
      nome: "shedinja",
      genus: "Pokémon Galpão",
    },
    {
      id: 293,
      nome: "whismur",
      genus: "Pokémon Sussurro",
    },
    {
      id: 294,
      nome: "alto",
      genus: "Pokémon Grande Voz",
    },
    {
      id: 295,
      nome: "explodir",
      genus: "Pokémon de Barulho Alto",
    },
    {
      id: 296,
      nome: "makuhita",
      genus: "Pokémon Estômago",
    },
    {
      id: 297,
      nome: "hariyama",
      genus: "Pokémon de Impulso de Braço",
    },
    {
      id: 298,
      nome: "azurill",
      genus: "Pokémon de Bolinhas",
    },
    {
      id: 299,
      nome: "nosepass",
      genus: "Pokémon Bússola",
    },
    {
      id: 300,
      nome: "skitty",
      genus: "Pokémon Gatinho",
    },
    {
      id: 301,
      nome: "delcatty",
      genus: "Pokémon Primitivo",
    },
    {
      id: 302,
      nome: "sableye",
      genus: "Pokémon das Trevas",
    },
    {
      id: 303,
      nome: "mawile",
      genus: "Pokémon Enganador",
    },
    {
      id: 304,
      nome: "aron",
      genus: "Pokémon Armadura de Ferro",
    },
    {
      id: 305,
      nome: "lairon",
      genus: "Pokémon Armadura de Ferro",
    },
    {
      id: 306,
      nome: "agron",
      genus: "Pokémon Armadura de Ferro",
    },
    {
      id: 307,
      nome: "meditite",
      genus: "Pokémon Meditar",
    },
    {
      id: 308,
      nome: "medicham",
      genus: "Pokémon Meditar",
    },
    {
      id: 309,
      nome: "eletrike",
      genus: "Pokémon Relâmpago",
    },
    {
      id: 310,
      nome: "manétrico",
      genus: "Pokémon de Descarga",
    },
    {
      id: 311,
      nome: "plusle",
      genus: "Torcendo Pokémon",
    },
    {
      id: 312,
      nome: "minun",
      genus: "Torcendo Pokémon",
    },
    {
      id: 313,
      nome: "volbeat",
      genus: "Pokémon Vaga-lume",
    },
    {
      id: 314,
      nome: "iluminar",
      genus: "Pokémon Vaga-lume",
    },
    {
      id: 315,
      nome: "Rosélia",
      genus: "Pokémon Espinho",
    },
    {
      id: 316,
      nome: "gulpin",
      genus: "Pokémon Estômago",
    },
    {
      id: 317,
      nome: "vagabunda",
      genus: "Pokémon Saco Venenoso",
    },
    {
      id: 318,
      nome: "carvanha",
      genus: "Pokémon Selvagem",
    },
    {
      id: 319,
      nome: "sharpedo",
      genus: "Pokémon Brutal",
    },
    {
      id: 320,
      nome: "wailmer",
      genus: "Pokémon Baleia Bola",
    },
    {
      id: 321,
      nome: "wailord",
      genus: "Pokémon Baleia Flutuante",
    },
    {
      id: 322,
      nome: "numel",
      genus: "Pokémon Sonolento",
    },
    {
      id: 323,
      nome: "camerupto",
      genus: "Pokémon Erupção",
    },
    {
      id: 324,
      nome: "torkoal",
      genus: "Pokémon Carvão",
    },
    {
      id: 325,
      nome: "spoink",
      genus: "Pokémon Pula-Pula",
    },
    {
      id: 326,
      nome: "rabugento",
      genus: "Manipular Pokémon",
    },
    {
      id: 327,
      nome: "spinda",
      genus: "Pokémon Panda Confuso",
    },
    {
      id: 328,
      nome: "trapinch",
      genus: "Pokémon Formigueiro",
    },
    {
      id: 329,
      nome: "vibrava",
      genus: "Pokémon Vibração",
    },
    {
      id: 330,
      nome: "flygon",
      genus: "Pokémon Místico",
    },
    {
      id: 331,
      nome: "cacnea",
      genus: "Pokémon Cacto",
    },
    {
      id: 332,
      nome: "caturno",
      genus: "Pokémon Espantalho",
    },
    {
      id: 333,
      nome: "swablu",
      genus: "Pokémon Pássaro Algodão",
    },
    {
      id: 334,
      nome: "altaria",
      genus: "Pokémon Cantarolando",
    },
    {
      id: 335,
      nome: "zangoose",
      genus: "Pokémon Furão Gato",
    },
    {
      id: 336,
      nome: "seviper",
      genus: "Pokémon Cobra",
    },
    {
      id: 337,
      nome: "lunatone",
      genus: "Pokémon Meteorito",
    },
    {
      id: 338,
      nome: "solrock",
      genus: "Pokémon Meteorito",
    },
    {
      id: 339,
      nome: "barboach",
      genus: "Pokémon Bigodes",
    },
    {
      id: 340,
      nome: "whiscash",
      genus: "Pokémon Bigodes",
    },
    {
      id: 341,
      nome: "corphish",
      genus: "Pokémon Ruffiano",
    },
    {
      id: 342,
      nome: "crawdaunt",
      genus: "Pokémon Ladino",
    },
    {
      id: 343,
      nome: "baltoy",
      genus: "Pokémon Boneca de Argila",
    },
    {
      id: 344,
      nome: "claydol",
      genus: "Pokémon Boneca de Argila",
    },
    {
      id: 345,
      nome: "lileep",
      genus: "Pokémon Lírio do Mar",
    },
    {
      id: 346,
      nome: "cradily",
      genus: "Pokémon Craca",
    },
    {
      id: 347,
      nome: "anorit",
      genus: "Velho Pokémon Camarão",
    },
    {
      id: 348,
      Nome: "Armaldo",
      genus: "Pokémon de Placa",
    },
    {
      id: 349,
      nome: "feebas",
      genus: "Pokémon Peixe",
    },
    {
      id: 350,
      nome: "milótico",
      genus: "Pokémon Terno",
    },
    {
      id: 351,
      nome: "castform",
      genus: "Pokémon do clima",
    },
    {
      id: 352,
      nome: "kecleon",
      genus: "Pokémon de Troca de Cores",
    },
    {
      id: 353,
      nome: "shuppet",
      genus: "Pokémon Marionete",
    },
    {
      id: 354,
      nome: "banete",
      genus: "Pokémon Marionete",
    },
    {
      id: 355,
      nome: "duskull",
      genus: "Pokémon Réquiem",
    },
    {
      id: 356,
      nome: "dusclops",
      genus: "Pokémon Múmia",
    },
    {
      id: 357,
      nome: "trópio",
      genus: "Pokémon de Fruta",
    },
    {
      id: 358,
      nome: "chimecho",
      genus: "Pokémon Carrilhão de Vento",
    },
    {
      id: 359,
      nome: "absol",
      genus: "Pokémon Desastre",
    },
    {
      id: 360,
      nome: "wynaut",
      genus: "Pokémon Brilhante",
    },
    {
      id: 361,
      nome: "ronco",
      genus: "Pokémon Chapéu de Neve",
    },
    {
      id: 362,
      nome: "glalie",
      genus: "Pokémon Facial",
    },
    {
      id: 363,
      nome: "spheal",
      genus: "Pokémon Palma",
    },
    {
      id: 364,
      nome: "Sealeo",
      genus: "Pokémon Rola Bola",
    },
    {
      id: 365,
      nome: "Walrein",
      genus: "Pokémon Quebra Gelo",
    },
    {
      id: 366,
      nome: "clamperl",
      genus: "Pokémon Bivalves",
    },
    {
      id: 367,
      nome: "huntail",
      genus: "Pokémon do Mar Profundo",
    },
    {
      id: 368,
      nome: "gorebyss",
      genus: "Pokémon do Mar do Sul",
    },
    {
      id: 369,
      nome: "relicanto",
      genus: "Pokémon da Longevidade",
    },
    {
      id: 370,
      nome: "luvdisc",
      genus: "Pokémon Encontro",
    },
    {
      id: 371,
      nome: "bagão",
      genus: "Pokémon Cabeça de Pedra",
    },
    {
      id: 372,
      Nome: "Shelgon",
      genus: "Pokémon de resistência",
    },
    {
      id: 373,
      nome: "salamência",
      genus: "Pokémon Dragão",
    },
    {
      id: 374,
      nome: "beldum",
      genus: "Pokémon Bola de Ferro",
    },
    {
      id: 375,
      nome: "metang",
      genus: "Pokémon Garra de Ferro",
    },
    {
      id: 376,
      nome: "metagross",
      genus: "Pokémon Perna de Ferro",
    },
    {
      id: 377,
      nome: "Regirock",
      genus: "Pokémon Pico de Montranha",
    },
    {
      id: 378,
      nome: "regice",
      genus: "Pokémon Iceberg",
    },
    {
      id: 379,
      nome: "registel",
      genus: "Pokémon de Ferro",
    },
    {
      id: 380,
      nome: "latias",
      genus: "Eon Pokémon",
    },
    {
      id: 381,
      nome: "latios",
      genus: "Eon Pokémon",
    },
    {
      id: 382,
      nome: "kyogre",
      genus: "Pokémon da Bacia Marinha",
    },
    {
      id: 383,
      nome: "Groudon",
      genus: "Pokémon do Continente",
    },
    {
      id: 384,
      nome: "rayquaza",
      genus: "Pokémon Morador dos Céus",
    },
    {
      id: 385,
      nome: "jirachi",
      genus: "Desejo Pokémon",
    },
    {
      id: 386,
      nome: "deoxys",
      genus: "Pokémon de DNA",
    },
    {
      id: 387,
      nome: "turtwig",
      genus: "Pokémon Folha Minúscula",
    },
    {
      id: 388,
      nome: "grotle",
      genus: "Pokémon Arvoredo",
    },
    {
      id: 389,
      nome: "torterra",
      genus: "Pokémon do Continente",
    },
    {
      id: 390,
      nome: "chimchar",
      genus: "Pokémon Chimpanzé",
    },
    {
      id: 391,
      nome: "monferno",
      genus: "Pokémon brincalhão",
    },
    {
      id: 392,
      nome: "infernape",
      genus: "Pokémon Chama",
    },
    {
      id: 393,
      nome: "piplup",
      genus: "Pokémon Pinguim",
    },
    {
      id: 394,
      nome: "prinplup",
      genus: "Pokémon Pinguim",
    },
    {
      id: 395,
      nome: "empoleão",
      genus: "Pokémon Imperador",
    },
    {
      id: 396,
      nome: "estrelado",
      genus: "Pokémon Estorninha",
    },
    {
      id: 397,
      nome: "staravia",
      genus: "Pokémon Estorninha",
    },
    {
      id: 398,
      nome: "staraptor",
      genus: "Pokémon Predador",
    },
    {
      id: 399,
      nome: "bidoof",
      genus: "Pokémon Rato Rechonchudo",
    },
    {
      id: 400,
      nome: "bibarel",
      genus: "Pokémon Castor",
    },
    {
      id: 401,
      nome: "cricketot",
      genus: "Pokémon Grilo",
    },
    {
      id: 402,
      nome: "cricketune",
      genus: "Pokémon Grilo",
    },
    {
      id: 403,
      nome: "shinx",
      genus: "Pokémon Flash",
    },
    {
      id: 404,
      nome: "luxo",
      genus: "Pokémon Fagulha",
    },
    {
      id: 405,
      nome: "luxray",
      genus: "Pokémon Olhos Brilhantes",
    },
    {
      id: 406,
      nome: "budew",
      genus: "Pokémon Botão",
    },
    {
      id: 407,
      nome: "rosarada",
      genus: "Pokémon Buquê",
    },
    {
      id: 408,
      nome: "cranidos",
      genus: "Pokémon Cabeça Dura",
    },
    {
      id: 409,
      nome: "rampardos",
      genus: "Pokémon Cabeça Dura",
    },
    {
      id: 410,
      nome: "shieldon",
      genus: "Pokémon Escudo",
    },
    {
      id: 411,
      nome: "bastiodonte",
      genus: "Pokémon Escudo",
    },
    {
      id: 412,
      nome: "burmy",
      genus: "Pokémon Lagarta",
    },
    {
      id: 413,
      nome: "wormadam",
      genus: "Pokémon Lagarta",
    },
    {
      id: 414,
      nome: "mothim",
      genus: "Pokémon Mariposa",
    },
    {
      id: 415,
      nome: "combee",
      genus: "Pokémon Abelhinha",
    },
    {
      id: 416,
      nome: "vespiquen",
      genus: "Pokémon Colmeia",
    },
    {
      id: 417,
      nome: "pachirisu",
      genus: "Pokémon Esquilo Elétrico",
    },
    {
      id: 418,
      nome: "buizel",
      genus: "Pokémon Doninha do Mar",
    },
    {
      id: 419,
      nome: "floatzel",
      genus: "Pokémon Doninha do Mar",
    },
    {
      id: 420,
      nome: "querubim",
      genus: "Pokémon Cereja",
    },
    {
      id: 421,
      nome: "cherrim",
      genus: "Pokémon Florescido",
    },
    {
      id: 422,
      nome: "shellos",
      genus: "Pokémon Lesma do Mar",
    },
    {
      id: 423,
      nome: "gastrodon",
      genus: "Pokémon Lesma do Mar",
    },
    {
      id: 424,
      nome: "ambipom",
      genus: "Pokémon de Cauda Longa",
    },
    {
      id: 425,
      nome: "drifloon",
      genus: "Pokémon balão",
    },
    {
      id: 426,
      nome: "drifblim",
      genus: "Pokémon Dirigível",
    },
    {
      id: 427,
      nome: "bunário",
      genus: "Pokémon Coelho",
    },
    {
      id: 428,
      nome: "lopunny",
      genus: "Pokémon Coelho",
    },
    {
      id: 429,
      nome: "mismagius",
      genus: "Pokémon Mágico",
    },
    {
      id: 430,
      nome: "honchkrow",
      genus: "Pokémon Chefão",
    },
    {
      id: 431,
      nome: "glameow",
      genus: "Pokémon Gatinho",
    },
    {
      id: 432,
      nome: "purugly",
      genus: "Pokémon Gato Tigre",
    },
    {
      id: 433,
      nome: "chingling",
      genus: "Pokémon Sino",
    },
    {
      id: 434,
      nome: "fedorento",
      genus: "Pokémon Gambá",
    },
    {
      id: 435,
      nome: "skuntank",
      genus: "Pokémon Gambá",
    },
    {
      id: 436,
      nome: "bronzor",
      genus: "Pokémon Bronze",
    },
    {
      id: 437,
      nome: "bronzong",
      genus: "Pokémon Sino de Bronze",
    },
    {
      id: 438,
      nome: "bonsly",
      genus: "Pokémon Bonsai",
    },
    {
      id: 439,
      nome: "mime-jr",
      genus: "Pokémon Mimico",
    },
    {
      id: 440,
      nome: "feliz",
      genus: "Pokémon Brincalão",
    },
    {
      id: 441,
      nome: "chatot",
      genus: "Pokémon Nota Musical",
    },
    {
      id: 442,
      nome: "spiritomb",
      genus: "Pokémon Proibido",
    },
    {
      id: 443,
      nome: "gível",
      genus: "Pokémon Tubarão Terrestre",
    },
    {
      id: 444,
      nome: "gabite",
      genus: "Pokémon da Caverna",
    },
    {
      id: 445,
      nome: "garchomp",
      genus: "Pokémon Mach",
    },
    {
      id: 446,
      nome: "munchlax",
      genus: "Pokémon Big Eater",
    },
    {
      id: 447,
      nome: "riolu",
      genus: "Pokémon de Emanação",
    },
    {
      id: 448,
      nome: "Lucário",
      genus: "Pokémon Aura",
    },
    {
      id: 449,
      nome: "hipopótamos",
      genus: "Pokémon hipopótamo",
    },
    {
      id: 450,
      nome: "hippowdon",
      genus: "Pokémon Peso Pesado",
    },
    {
      id: 451,
      nome: "skorupi",
      genus: "Pokémon Escorpião",
    },
    {
      id: 452,
      nome: "drapião",
      genus: "Pokémon Ogro Escorpião",
    },
    {
      id: 453,
      nome: "croagunk",
      genus: "Pokémon Boca Tóxica",
    },
    {
      id: 454,
      nome: "toxicroak",
      genus: "Pokémon Boca Tóxica",
    },
    {
      id: 455,
      nome: "carnivina",
      genus: "Pokémon Insetívoro",
    },
    {
      id: 456,
      nome: "finneon",
      genus: "Pokémon Peixe Asa",
    },
    {
      id: 457,
      nome: "lumineon",
      genus: "Pokémon Neon",
    },
    {
      id: 458,
      nome: "mantyke",
      genus: "Pokémon Pipa",
    },
    {
      id: 459,
      nome: "snover",
      genus: "Pokémon Árvore Congelada",
    },
    {
      id: 460,
      nome: "abomasnow",
      genus: "Pokémon Árvore Congelada",
    },
    {
      id: 461,
      nome: "weavile",
      genus: "Pokémon Garra Afiada",
    },
    {
      id: 462,
      nome: "magnezona",
      genus: "Pokémon de Área Magnética",
    },
    {
      id: 463,
      nome: "lickilicky",
      genus: "Lamber Pokémon",
    },
    {
      id: 464,
      nome: "riperior",
      genus: "Pokémon de Perfuração",
    },
    {
      id: 465,
      nome: "tangrowth",
      genus: "Pokémon Vimja",
    },
    {
      id: 466,
      nome: "eletivire",
      genus: "Pokémon Raio",
    },
    {
      id: 467,
      nome: "magmortar",
      genus: "Pokémon Explosivo",
    },
    {
      id: 468,
      nome: "togekiss",
      genus: "Pokémon Jubileu",
    },
    {
      id: 469,
      nome: "yanmega",
      genus: "Pokémon Ogro",
    },
    {
      id: 470,
      nome: "folha",
      genus: "Pokémon Verdejante",
    },
    {
      id: 471,
      nome: "glaceon",
      genus: "Pokémon da Neve Fresca",
    },
    {
      id: 472,
      nome: "gliscor",
      genus: "Pokémon Escorpião",
    },
    {
      id: 473,
      nome: "mamoswine",
      genus: "Pokémon Presa Gêmea",
    },
    {
      id: 474,
      nome: "porygon-z",
      genus: "Pokémon Virtual",
    },
    {
      id: 475,
      nome: "gallade",
      genus: "Pokémon Lâmina",
    },
    {
      id: 476,
      nome: "probopass",
      genus: "Pokémon Bússola",
    },
    {
      id: 477,
      nome: "dusknoir",
      genus: "Pokémon Garra",
    },
    {
      id: 478,
      nome: "froslass",
      genus: "Pokémon da Terra da Neve",
    },
    {
      id: 479,
      nome: "rotom",
      genus: "Pokémon de Plasma",
    },
    {
      id: 480,
      nome: "uxie",
      genus: "Pokémon do Conhecimento",
    },
    {
      id: 481,
      nome: "mesprit",
      genus: "Pokémon Emocional",
    },
    {
      id: 482,
      nome: "azelf",
      genus: "Pokémon Força de Vontade",
    },
    {
      id: 483,
      nome: "dialga",
      genus: "Pokémon Temporal",
    },
    {
      id: 484,
      nome: "palkia",
      genus: "Pokémon Espacial",
    },
    {
      id: 485,
      nome: "heatran",
      genus: "Pokémon Cúlpula de Lava",
    },
    {
      id: 486,
      nome: "regigigas",
      genus: "Pokémon Colossal",
    },
    {
      id: 487,
      nome: "giratina",
      genus: "Pokémon Renegado",
    },
    {
      id: 488,
      nome: "cresselia",
      genus: "Pokémon Lunar",
    },
    {
      id: 489,
      nome: "phione",
      genus: "Pokémon Derivante do Mar",
    },
    {
      id: 490,
      nome: "manaphy",
      genus: "Pokémon Marítimo",
    },
    {
      id: 491,
      nome: "darkrai",
      genus: "Pokémon Penumbra",
    },
    {
      id: 492,
      nome: "shaymin",
      genus: "Pokémon da Gratidão",
    },
    {
      id: 493,
      nome: "arceus",
      genus: "Pokémon Alfa",
    },
    {
      id: 494,
      nome: "victini",
      genus: "Pokémon da Vitória",
    },
    {
      id: 495,
      nome: "snivy",
      genus: "Pokémon Cobra de Grama",
    },
    {
      id: 496,
      nome: "servine",
      genus: "Pokémon Cobra de Grama",
    },
    {
      id: 497,
      nome: "serperior",
      genus: "Pokémon Real",
    },
    {
      id: 498,
      nome: "tepig",
      genus: "Pokémon Porco de Fogo",
    },
    {
      id: 499,
      nome: "pignito",
      genus: "Pokémon Porco de Fogo",
    },
    {
      id: 500,
      nome: "emboar",
      genus: "Pokémon Porcão de Fogo",
    },
    {
      id: 501,
      nome: "oshawott",
      genus: "Pokémon Lontra Marinha",
    },
    {
      id: 502,
      nome: "dewott",
      genus: "Pokémon Disciplinar",
    },
    {
      id: 503,
      nome: "samurott",
      genus: "Pokémon Formidável",
    },
    {
      id: 504,
      nome: "patrat",
      genus: "Pokémon Escoteiro",
    },
    {
      id: 505,
      nome: "watchog",
      genus: "Pokémon Vigia",
    },
    {
      id: 506,
      nome: "lilipup",
      genus: "Pokémon Filhote de Cachorro",
    },
    {
      id: 507,
      nome: "herdieiro",
      genus: "Pokémon Cachorro Leal",
    },
    {
      id: 508,
      nome: "Stoutland",
      genus: "Pokémon de Grande Coração",
    },
    {
      id: 509,
      nome: "pernil",
      genus: "Pokémon Tortuoso",
    },
    {
      id: 510,
      nome: "liepard",
      genus: "Pokémon Cruel",
    },
    {
      id: 511,
      nome: "pansagem",
      genus: "Pokémon Macaco de Grama",
    },
    {
      id: 512,
      nome: "simisagem",
      genus: "Pokémon Macaco Espinho",
    },
    {
      id: 513,
      nome: "pansear",
      genus: "Pokémon de Alta Temperatura",
    },
    {
      id: 514,
      nome: "simisear",
      genus: "Pokémon Ember",
    },
    {
      id: 515,
      nome: "panpour",
      genus: "Pokémon Spray",
    },
    {
      id: 516,
      nome: "simipour",
      genus: "Pokémon Gêiser",
    },
    {
      id: 517,
      nome: "munna",
      genus: "Pokémon Comedor de Sonhos",
    },
    {
      id: 518,
      nome: "musharna",
      genus: "Pokémon Adormecido",
    },
    {
      id: 519,
      nome: "pidove",
      genus: "Pokémon Pequeno Pombo",
    },
    {
      id: 520,
      nome: "tranquilo",
      genus: "Pokémon Pombo Selvagem",
    },
    {
      id: 521,
      nome: "unfezant",
      genus: "Pokémon oOgulhoso",
    },
    {
      id: 522,
      nome: "blitzle",
      genus: "Pokémon Eletrificado",
    },
    {
      id: 523,
      nome: "zebstrika",
      genus: "Pokémon Raio",
    },
    {
      id: 524,
      nome: "roggenrola",
      genus: "Pokémon Manto",
    },
    {
      id: 525,
      nome: "boldore",
      genus: "Pokémon Minério",
    },
    {
      id: 526,
      nome: "gigalito",
      genus: "Pokémon compactado",
    },
    {
      id: 527,
      nome: "woobat",
      genus: "Pokémon Morcego",
    },
    {
      id: 528,
      nome: "swoobat",
      genus: "Pokémon cortejando",
    },
    {
      id: 529,
      nome: "drilbur",
      genus: "Pokémon Toupeira",
    },
    {
      id: 530,
      nome: "excadrill",
      genus: "Pokémon Subterrâneo",
    },
    {
      id: 531,
      nome: "audino",
      genus: "Ouvindo Pokémon",
    },
    {
      id: 532,
      nome: "timburr",
      genus: "Pokémon Muscular",
    },
    {
      id: 533,
      nome: "gurdurr",
      genus: "Pokémon Muscular",
    },
    {
      id: 534,
      nome: "conkeldurr",
      genus: "Pokémon Muscular",
    },
    {
      id: 535,
      nome: "timpólo",
      genus: "Pokémon Girino",
    },
    {
      id: 536,
      nome: "palpitoad",
      genus: "Pokémon Vibração",
    },
    {
      id: 537,
      nome: "seismitoad",
      genus: "Pokémon Vibração",
    },
    {
      id: 538,
      nome: "throh",
      genus: "Pokémon Judô",
    },
    {
      id: 539,
      nome: "saw",
      genus: "Pokémon Karatê",
    },
    {
      id: 540,
      nome: "sewaddle",
      genus: "Costurando Pokémon",
    },
    {
      id: 541,
      nome: "swadloon",
      genus: "Pokémon embrulhado em folhas",
    },
    {
      id: 542,
      nome: "leavanny",
      genus: "Nutrir Pokémon",
    },
    {
      id: 543,
      nome: "venípede",
      genus: "Pokémon Centopeia",
    },
    {
      id: 544,
      nome: "redemoinho",
      genus: "Pokémon Curlipede",
    },
    {
      id: 545,
      nome: "escolípede",
      genus: "Pokémon Megapede",
    },
    {
      id: 546,
      nome: "algodão",
      genus: "Pokémon Puff de Algodão",
    },
    {
      id: 547,
      nome: "whimsicott",
      genus: "Pokémon Véu do Vento",
    },
    {
      id: 548,
      nome: "petilil",
      genus: "Pokémon Bulbo",
    },
    {
      id: 549,
      nome: "lilligant",
      genus: "Pokémon em flor",
    },
    {
      id: 550,
      nome: "basculina",
      genus: "Pokémon Hostil",
    },
    {
      id: 551,
      nome: "sandile",
      genus: "Pokémon Crocodilo do Deserto",
    },
    {
      id: 552,
      nome: "krokorok",
      genus: "Pokémon Crocodilo do Deserto",
    },
    {
      id: 553,
      nome: "crookodile",
      genus: "Pokémon de Intimidação",
    },
    {
      id: 554,
      nome: "darumaka",
      genus: "Pokémon Charme Zen",
    },
    {
      id: 555,
      nome: "darmanitano",
      genus: "Pokémon Flamejante",
    },
    {
      id: 556,
      nome: "maractus",
      genus: "Pokémon Cacto",
    },
    {
      id: 557,
      nome: "dwebble",
      genus: "Pokémon Poucada de Pedra",
    },
    {
      id: 558,
      nome: "crustle",
      genus: "Pokémon Casa de Pedra",
    },
    {
      id: 559,
      nome: "escravo",
      genus: "Derramando Pokémon",
    },
    {
      id: 560,
      nome: "espertinho",
      genus: "Pokémon Bandido",
    },
    {
      id: 561,
      nome: "sigilifo",
      genus: "Pokémon Avianoide",
    },
    {
      id: 562,
      nome: "yamask",
      genus: "Pokémon Espiritual",
    },
    {
      id: 563,
      nome: "cofagrigus",
      genus: "Pokémon Caixão",
    },
    {
      id: 564,
      nome: "tirtouga",
      genus: "Pokémon Prototartaruga",
    },
    {
      id: 565,
      nome: "carracosta",
      genus: "Pokémon Prototartaruga",
    },
    {
      id: 566,
      nome: "arque",
      genus: "Pokémon Primeiro Pássaro",
    },
    {
      id: 567,
      nome: "arqueops",
      genus: "Pokémon Primeiro Pássaro",
    },
    {
      id: 568,
      nome: "lixo",
      genus: "Pokémon Saco de Lixo",
    },
    {
      id: 569,
      nome: "garbodor",
      genus: "Pokémon Pilha de Lixo",
    },
    {
      id: 570,
      nome: "zoruá",
      genus: "Pokémon Raposa Complicada",
    },
    {
      id: 571,
      nome: "zoroark",
      genus: "Pokémon Raposa Ilusionista",
    },
    {
      id: 572,
      nome: "minccino",
      genus: "Pokémon Chinchila",
    },
    {
      id: 573,
      nome: "cinccino",
      genus: "Pokémon Lenço",
    },
    {
      id: 574,
      nome: "gothita",
      genus: "Pokémon de fixação",
    },
    {
      id: 575,
      nome: "gotorita",
      genus: "Manipular Pokémon",
    },
    {
      id: 576,
      nome: "gothitelle",
      genus: "Pokémon Corpo Astral",
    },
    {
      id: 577,
      nome: "solose",
      genus: "Pokémon Celular",
    },
    {
      id: 578,
      nome: "duosão",
      genus: "Pokémon Mitose",
    },
    {
      id: 579,
      nome: "reuniclus",
      genus: "Pokémon Multiplicadores",
    },
    {
      id: 580,
      nome: "patinho",
      genus: "Pokémon Ave Aquática",
    },
    {
      id: 581,
      nome: "swanna",
      genus: "Pokémon Pássaro Branco",
    },
    {
      id: 582,
      nome: "vanilita",
      genus: "Pokémon da Neve Fresca",
    },
    {
      id: 583,
      nome: "vanilish",
      genus: "Pokémon da Neve Gelada",
    },
    {
      id: 584,
      nome: "vaniluxe",
      genus: "Pokémon Tempestade de Neve",
    },
    {
      id: 585,
      nome: "veado",
      genus: "Pokémon da temporada",
    },
    {
      id: 586,
      nome: "sawbuck",
      genus: "Pokémon da temporada",
    },
    {
      id: 587,
      nome: "emolga",
      genus: "Pokémon Esquilo do Céu",
    },
    {
      id: 588,
      nome: "karrablast",
      genus: "Pokémon de fixação",
    },
    {
      id: 589,
      nome: "escavalier",
      genus: "Pokémon de Cavalaria",
    },
    {
      id: 590,
      nome: "foongus",
      genus: "Pokémon cogumelo",
    },
    {
      id: 591,
      nome: "amoonguss",
      genus: "Pokémon cogumelo",
    },
    {
      id: 592,
      nome: "babado",
      genus: "Pokémon Flutuante",
    },
    {
      id: 593,
      nome: "gelificante",
      genus: "Pokémon Flutuante",
    },
    {
      id: 594,
      nome: "alomomola",
      genus: "Pokémon Carinhoso",
    },
    {
      id: 595,
      nome: "joltik",
      genus: "Anexando Pokémon",
    },
    {
      id: 596,
      nome: "galvântula",
      genus: "Pokémon Aranha Elétrica",
    },
    {
      id: 597,
      nome: "ferroseed",
      genus: "Pokémon Semente de Espinho",
    },
    {
      id: 598,
      nome: "ferrothorn",
      genus: "Pokémon Vagem Espinhosa",
    },
    {
      id: 599,
      nome: "klink",
      genus: "Pokémon de engrenagem",
    },
    {
      id: 600,
      nome: "klang",
      genus: "Pokémon de engrenagem",
    },
    {
      id: 601,
      nome: "klinklang",
      genus: "Pokémon de engrenagem",
    },
    {
      id: 602,
      nome: "tynamo",
      genus: "Pokémon ElePeixe",
    },
    {
      id: 603,
      nome: "eelektrik",
      genus: "Pokémon ElePeixe",
    },
    {
      id: 604,
      nome: "eelektross",
      genus: "Pokémon ElePeixe",
    },
    {
      id: 605,
      nome: "elgyem",
      genus: "Pokémon Cerebral",
    },
    {
      id: 606,
      nome: "beheeyem",
      genus: "Pokémon Cerebral",
    },
    {
      id: 607,
      nome: "litwick",
      genus: "Pokémon Vela",
    },
    {
      id: 608,
      nome: "lâmpada",
      genus: "Pokémon Lâmpada",
    },
    {
      id: 609,
      nome: "candelabro",
      genus: "Atrair Pokémon",
    },
    {
      id: 610,
      nome: "axew",
      genus: "Pokémon Presa",
    },
    {
      id: 611,
      nome: "fraxura",
      genus: "Pokémon Mandibula de Machado",
    },
    {
      id: 612,
      nome: "haxorus",
      genus: "Pokémon Mandibula de Machado",
    },
    {
      id: 613,
      nome: "cubchoo",
      genus: "Pokémon Calmo",
    },
    {
      id: 614,
      nome: "beartic",
      genus: "Pokémon Congelante",
    },
    {
      id: 615,
      nome: "criogonal",
      genus: "Pokémon Cristalizador",
    },
    {
      id: 616,
      nome: "capacete",
      genus: "Pokémon Caracol",
    },
    {
      id: 617,
      nome: "acelerador",
      genus: "Pokémon Acelerado",
    },
    {
      id: 618,
      nome: "stunfisk",
      genus: "Pokémon Armadilha",
    },
    {
      id: 619,
      nome: "mienfoo",
      genus: "Pokémon de artes marciais",
    },
    {
      id: 620,
      nome: "mienshao",
      genus: "Pokémon de artes marciais",
    },
    {
      id: 621,
      nome: "druddigon",
      genus: "Pokémon da Caverna",
    },
    {
      id: 622,
      nome: "golet",
      genus: "Pokémon Autômato",
    },
    {
      id: 623,
      nome: "golurk",
      genus: "Pokémon Autômato",
    },
    {
      id: 624,
      nome: "penhor",
      genus: "Pokémon Lâmina Afiada",
    },
    {
      id: 625,
      nome: "bisharp",
      genus: "Pokémon Espada Lâmina",
    },
    {
      id: 626,
      nome: "bouffalante",
      genus: "Pokémon Buffalo",
    },
    {
      id: 627,
      nome: "babado",
      genus: "Pokémon Águia",
    },
    {
      id: 628,
      nome: "braviária",
      genus: "Pokémon Valente",
    },
    {
      id: 629,
      nome: "vullaby",
      genus: "Pokémon de Fralda",
    },
    {
      id: 630,
      nome: "mandibuzz",
      genus: "Pokémon Abutre Ósseo",
    },
    {
      id: 631,
      nome: "calormor",
      genus: "Pokémon Tamanduá",
    },
    {
      id: 632,
      nome: "durante",
      genus: "Pokémon Formiga de Ferro",
    },
    {
      id: 633,
      nome: "deino",
      genus: "Pokémon Irado",
    },
    {
      id: 634,
      nome: "zweilous",
      genus: "Pokémon Hostil",
    },
    {
      id: 635,
      nome: "hidreigon",
      genus: "Pokémon Brutal",
    },
    {
      id: 636,
      nome: "larvesta",
      genus: "Pokémon Tocha",
    },
    {
      id: 637,
      nome: "volcarona",
      genus: "Pokémon do Sol",
    },
    {
      id: 638,
      nome: "cobalião",
      genus: "Pokémon Vontade de Ferro",
    },
    {
      id: 639,
      nome: "terrakion",
      genus: "Pokémon Caverna",
    },
    {
      id: 640,
      nome: "virizão",
      genus: "Pokémon da Pastagem",
    },
    {
      id: 641,
      nome: "tornadus",
      genus: "Pokémon Ciclone",
    },
    {
      id: 642,
      nome: "thundurus",
      genus: "Pokémon Golpe Parafuso",
    },
    {
      id: 643,
      nome: "reshiram",
      genus: "Pokémon Vastidão Branca",
    },
    {
      id: 644,
      nome: "zecrom",
      genus: "Pokémon Negro Profundo",
    },
    {
      id: 645,
      nome: "landorus",
      genus: "Pokémon da Abundância",
    },
    {
      id: 646,
      nome: "kyurem",
      genus: "Pokémon de Fronteira",
    },
    {
      id: 647,
      nome: "keldeo",
      genus: "Pokémon Potro",
    },
    {
      id: 648,
      nome: "meloeta",
      genus: "Pokémon Melodia",
    },
    {
      id: 649,
      nome: "genesect",
      genus: "Pokémon Paleozóico",
    },
    {
      id: 650,
      nome: "chespin",
      genus: "Pokémon Noz Espinhosa",
    },
    {
      id: 651,
      nome: "quiladina",
      genus: "Pokémon de Armadura Espinhosa",
    },
    {
      id: 652,
      nome: "chesnaught",
      genus: "Pokémon de Armadura Espinhosa",
    },
    {
      id: 653,
      nome: "Fennekin",
      genus: "Pokémon Raposa",
    },
    {
      id: 654,
      nome: "braixen",
      genus: "Pokémon Raposa",
    },
    {
      id: 655,
      nome: "delphox",
      genus: "Pokémon Raposa",
    },
    {
      id: 656,
      nome: "froakie",
      genus: "Pokémon Sapo Bolha",
    },
    {
      id: 657,
      nome: "frogadeiro",
      genus: "Pokémon Sapo Bolha",
    },
    {
      id: 658,
      nome: "greninja",
      genus: "Pokémon Ninja",
    },
    {
      id: 659,
      nome: "bunnelby",
      genus: "Escavando Pokémon",
    },
    {
      id: 660,
      nome: "diggersby",
      genus: "Escavando Pokémon",
    },
    {
      id: 661,
      nome: "flechling",
      genus: "Pequeno Pokémon Robin",
    },
    {
      id: 662,
      nome: "fletchinder",
      genus: "Pokémon BRasa",
    },
    {
      id: 663,
      nome: "talonflame",
      genus: "Pokémon Escaldante",
    },
    {
      id: 664,
      nome: "espalhador",
      genus: "Pokémon Poeira Disperça",
    },
    {
      id: 665,
      nome: "spewpa",
      genus: "Pokémon Poeira Disperça",
    },
    {
      id: 666,
      nome: "vivillon",
      genus: "Pokémon em escala",
    },
    {
      id: 667,
      nome: "littleo",
      genus: "Pokémon Filhote de Leão",
    },
    {
      id: 668,
      nome: "piroar",
      genus: "Pokémon Real",
    },
    {
      id: 669,
      nome: "flabebe",
      genus: "Pokémon Flor Solitária",
    },
    {
      id: 670,
      nome: "floeta",
      genus: "Pokémon Flor Solitária",
    },
    {
      id: 671,
      nome: "florges",
      genus: "Pokémon de Jardim",
    },
    {
      id: 672,
      nome: "skiddo",
      genus: "Monte Pokémon",
    },
    {
      id: 673,
      nome: "cabra",
      genus: "Monte Pokémon",
    },
    {
      id: 674,
      nome: "pancham",
      genus: "Pokémon brincalhão",
    },
    {
      id: 675,
      nome: "pangoro",
      genus: "Pokémon assustador",
    },
    {
      id: 676,
      nome: "furfrou",
      genus: "Pokémon Poodle",
    },
    {
      id: 677,
      nome: "espurr",
      genus: "Pokémon de restrição",
    },
    {
      id: 678,
      nome: "miaustic",
      genus: "Pokémon de restrição",
    },
    {
      id: 679,
      nome: "honedge",
      genus: "Pokémon Espada",
    },
    {
      id: 680,
      nome: "doublade",
      genus: "Pokémon Espada",
    },
    {
      id: 681,
      nome: "aegislash",
      genus: "Pokémon Espada Real",
    },
    {
      id: 682,
      nome: "spritzee",
      genus: "Pokémon Perfume",
    },
    {
      id: 683,
      nome: "aromatisse",
      genus: "Pokémon Fragrância",
    },
    {
      id: 684,
      nome: "swirlix",
      genus: "Pokémon Algodão Doce",
    },
    {
      id: 685,
      nome: "slurpuff",
      genus: "Pokémon Merengue",
    },
    {
      id: 686,
      nome: "inkay",
      genus: "Pokémon Giratório",
    },
    {
      id: 687,
      nome: "malamar",
      genus: "Trocando Pokémon",
    },
    {
      id: 688,
      nome: "bináculo",
      genus: "Pokémon de Duas Mãos",
    },
    {
      id: 689,
      nome: "barbaráculo",
      genus: "Pokémon Coletivo",
    },
    {
      id: 690,
      nome: "skrelp",
      genus: "Pokémon Alga Marinha",
    },
    {
      id: 691,
      nome: "dragalge",
      genus: "Pokémon Alga Marinha",
    },
    {
      id: 692,
      nome: "lançador",
      genus: "Pokémon Pistola de Água",
    },
    {
      id: 693,
      nome: "clawitzer",
      genus: "Pokémon Obus",
    },
    {
      id: 694,
      nome: "helióptil",
      genus: "Pokémon Gerador",
    },
    {
      id: 695,
      nome: "heliolisco",
      genus: "Pokémon Gerador",
    },
    {
      id: 696,
      nome: "tirano",
      genus: "Pokémon Herdeiro Real",
    },
    {
      id: 697,
      nome: "tirano",
      genus: "Pokémon Déspota",
    },
    {
      id: 698,
      nome: "amaura",
      genus: "Pokémon Tundra",
    },
    {
      id: 699,
      nome: "auroro",
      genus: "Pokémon Tundra",
    },
    {
      id: 700,
      nome: "Sylveon",
      genus: "Pokémon Entrelaçados",
    },
    {
      id: 701,
      nome: "hawlucha",
      genus: "Pokémon Lutador",
    },
    {
      id: 702,
      nome: "dedenne",
      genus: "Pokémon Antena",
    },
    {
      id: 703,
      nome: "carbink",
      genus: "Pokémon Jóia",
    },
    {
      id: 704,
      nome: "goomy",
      genus: "Pokémon de Tecido Mole",
    },
    {
      id: 705,
      nome: "sliggoo",
      genus: "Pokémon de Tecido Mole",
    },
    {
      id: 706,
      nome: "goodra",
      genus: "Pokémon Dragão",
    },
    {
      id: 707,
      nome: "klefki",
      genus: "Pokémon chaveiro",
    },
    {
      id: 708,
      nome: "fantasma",
      genus: "Pokémon Toco",
    },
    {
      id: 709,
      nome: "trevenante",
      genus: "Pokémon Ancião da Árvore",
    },
    {
      id: 710,
      nome: "bombakaboo",
      genus: "Pokémon abóbora",
    },
    {
      id: 711,
      nome: "gourgeist",
      genus: "Pokémon abóbora",
    },
    {
      id: 712,
      nome: "bergmite",
      genus: "Pokémon Ice Chunk",
    },
    {
      id: 713,
      nome: "avaliugg",
      genus: "Pokémon Iceberg",
    },
    {
      id: 714,
      nome: "noibat",
      genus: "Pokémon Onda Sonora",
    },
    {
      id: 715,
      nome: "noivern",
      genus: "Pokémon Onda Sonora",
    },
    {
      id: 716,
      nome: "xerneas",
      genus: "Pokémon da Vida",
    },
    {
      id: 717,
      nome: "yveltal",
      genus: "Pokémon de Destruição",
    },
    {
      id: 718,
      nome: "zygarde",
      genus: "Ordem Pokémon",
    },
    {
      id: 719,
      nome: "diancie",
      genus: "Pokémon Jóia",
    },
    {
      id: 720,
      nome: "hoopa",
      genus: "Pokémon Travesseiro",
    },
    {
      id: 721,
      nome: "vulcão",
      genus: "Pokémon Vapor",
    },
    {
      id: 722,
      nome: "rowlet",
      genus: "Pokémon Pena de Grama",
    },
    {
      id: 723,
      nome: "dartrix",
      genus: "Pokémon Espadachim",
    },
    {
      id: 724,
      nome: "decidueye",
      genus: "Pokémon Arqueiro",
    },
    {
      id: 725,
      nome: "litten",
      genus: "Pokémon Gato de Fogo",
    },
    {
      id: 726,
      nome: "Torracat",
      genus: "Pokémon Gato de Fogo",
    },
    {
      id: 727,
      nome: "incineroar",
      genus: "Pokémon Curandeiro",
    },
    {
      id: 728,
      nome: "popplio",
      genus: "Pokémon Leão Marinho",
    },
    {
      id: 729,
      nome: "brionne",
      genus: "Pokémon Pop Star",
    },
    {
      id: 730,
      nome: "primarina",
      genus: "Pokémon Solista",
    },
    {
      id: 731,
      nome: "pikipek",
      genus: "Pokémon Pica-Pau",
    },
    {
      id: 732,
      nome: "trumbeak",
      genus: "Pokémon Bico de Cornetim",
    },
    {
      id: 733,
      nome: "tucano",
      genus: "Pokémon Canhão",
    },
    {
      id: 734,
      nome: "yungoos",
      genus: "Pokémon vagabundos",
    },
    {
      id: 735,
      nome: "gumshoos",
      genus: "Pokémon de vigilância",
    },
    {
      id: 736,
      nome: "grubbin",
      genus: "Pokémon Larva",
    },
    {
      id: 737,
      nome: "charjabug",
      genus: "Pokémon de bateria",
    },
    {
      id: 738,
      nome: "vikavolt",
      genus: "Pokémon Besouro-Veado",
    },
    {
      id: 739,
      nome: "crabrawler",
      genus: "Pokémon boxeador",
    },
    {
      id: 740,
      nome: "crabominável",
      genus: "Pokémon Caranguejo Lanoso",
    },
    {
      id: 741,
      nome: "oricório",
      genus: "Pokémon Dançante",
    },
    {
      id: 742,
      nome: "cutiefly",
      genus: "Pokémon Abelha",
    },
    {
      id: 743,
      nome: "ribombee",
      genus: "Pokémon Abelha",
    },
    {
      id: 744,
      nome: "rockruff",
      genus: "Pokémon Filhote de Cachorro",
    },
    {
      id: 745,
      nome: "lycanroc",
      genus: "Pokémon Lobo",
    },
    {
      id: 746,
      nome: "wishiwashi",
      genus: "Pokémon Frito Pequeno",
    },
    {
      id: 747,
      nome: "mareanie",
      genus: "Pokémon Estrela Brutal",
    },
    {
      id: 748,
      nome: "toxapex",
      genus: "Pokémon Estrela Brutal",
    },
    {
      id: 749,
      nome: "mudbray",
      genus: "Pokémon Burro",
    },
    {
      id: 750,
      nome: "mudsdale",
      genus: "Pokémon Cavalo de Rascunho",
    },
    {
      id: 751,
      nome: "dewpider",
      genus: "Pokémon Bolha de Água",
    },
    {
      id: 752,
      nome: "araquanida",
      genus: "Pokémon Bolha de Água",
    },
    {
      id: 753,
      nome: "fomantis",
      genus: "Pokémon Foice Grama",
    },
    {
      id: 754,
      nome: "lurantis",
      genus: "Pokémon Foice de Flor",
    },
    {
      id: 755,
      nome: "morelull",
      genus: "Pokémon Iluminador",
    },
    {
      id: 756,
      nome: "shiinótico",
      genus: "Pokémon Iluminador",
    },
    {
      id: 757,
      nome: "salandita",
      genus: "Pokémon Lagarto Tóxico",
    },
    {
      id: 758,
      nome: "salazzle",
      genus: "Pokémon Lagarto Tóxico",
    },
    {
      id: 759,
      nome: "recheado",
      genus: "Pokémon agitado",
    },
    {
      id: 760,
      nome: "cuidado",
      genus: "Pokémon de braço forte",
    },
    {
      id: 761,
      nome: "bounsweet",
      genus: "Pokémon de Fruta",
    },
    {
      id: 762,
      nome: "steenee",
      genus: "Pokémon de Fruta",
    },
    {
      id: 763,
      nome: "tsareena",
      genus: "Pokémon de Fruta",
    },
    {
      id: 764,
      nome: "comfey",
      genus: "Pokémon Florista",
    },
    {
      id: 765,
      nome: "oranguru",
      genus: "Pokémon Sábio",
    },
    {
      id: 766,
      nome: "passimiano",
      genus: "Pokémon Trabalho em Equipe",
    },
    {
      id: 767,
      nome: "wimpod",
      genus: "Pokémon Virador de Cauda",
    },
    {
      id: 768,
      nome: "golisópode",
      genus: "Pokémon de Escala Dura",
    },
    {
      id: 769,
      nome: "sandygast",
      genus: "Pokémon Areia",
    },
    {
      id: 770,
      nome: "palossand",
      genus: "Pokémon Castelo de Areia",
    },
    {
      id: 771,
      nome: "pyukumuku",
      genus: "Pokémon Pepino do Mar",
    },
    {
      id: 772,
      nome: "tipo-nulo",
      genus: "Pokémon Sintético",
    },
    {
      id: 773,
      nome: "silvally",
      genus: "Pokémon Sintético",
    },
    {
      id: 774,
      nome: "menor",
      genus: "Pokémon Meteoro",
    },
    {
      id: 775,
      nome: "komala",
      genus: "Pokémon Adormecido",
    },
    {
      id: 776,
      nome: "turtonador",
      genus: "Pokémon Tartaruga Explosiva",
    },
    {
      id: 777,
      nome: "togedemaru",
      genus: "Pokémon Tatu-Bola",
    },
    {
      id: 778,
      nome: "mimikyu",
      genus: "Disfarce Pokémon",
    },
    {
      id: 779,
      nome: "bruxo",
      genus: "Pokémon Ranger Dentes",
    },
    {
      id: 780,
      nome: "drampa",
      genus: "Pokémon Plácido",
    },
    {
      id: 781,
      nome: "dhelmise",
      genus: "Pokémon Âncora",
    },
    {
      id: 782,
      nome: "jangmo-o",
      genus: "Pokémon escamoso",
    },
    {
      id: 783,
      nome: "hakamo-o",
      genus: "Pokémon escamoso",
    },
    {
      id: 784,
      nome: "kommo-o",
      genus: "Pokémon escamoso",
    },
    {
      id: 785,
      nome: "tapu-koko",
      genus: "Pokémon Espírito da Terra",
    },
    {
      id: 786,
      nome: "tapu-lele",
      genus: "Pokémon Espírito da Terra",
    },
    {
      id: 787,
      nome: "tapu-bulu",
      genus: "Pokémon Espírito da Terra",
    },
    {
      id: 788,
      nome: "tapu-fini",
      genus: "Pokémon Espírito da Terra",
    },
    {
      id: 789,
      nome: "cosmog",
      genus: "Pokémon Nebulosa",
    },
    {
      id: 790,
      nome: "cosmoema",
      genus: "Pokémon Protostar",
    },
    {
      id: 791,
      nome: "solgaleo",
      genus: "Pokémon Sol",
    },
    {
      id: 792,
      nome: "lunala",
      genus: "Pokémon Lua",
    },
    {
      id: 793,
      nome: "nihilego",
      genus: "Pokémon Parasita",
    },
    {
      id: 794,
      nome: "buzzwole",
      genus: "Pokémon inchado",
    },
    {
      id: 795,
      nome: "feromosa",
      genus: "Pokémon Lissome",
    },
    {
      id: 796,
      nome: "xurkitree",
      genus: "Pokémon Brilhante",
    },
    {
      id: 797,
      nome: "celesteela",
      genus: "Lançar Pokémon",
    },
    {
      id: 798,
      nome: "kartana",
      genus: "Pokémon Espada Desenhada",
    },
    {
      id: 799,
      nome: "guzzlord",
      genus: "Pokémon Junkívoro",
    },
    {
      id: 800,
      nome: "necrósma",
      genus: "Pokémon Prisma",
    },
    {
      id: 801,
      nome: "magearna",
      genus: "Pokémon Artificial",
    },
    {
      id: 802,
      nome: "marshadow",
      genus: "Pokémon Residente das Trevas",
    },
    {
      id: 803,
      nome: "poipole",
      genus: "Pokémon Alfinete Venenoso",
    },
    {
      id: 804,
      nome: "naganadel",
      genus: "Pokémon Alfinete Venenoso",
    },
    {
      id: 805,
      nome: "stakataka",
      genus: "Pokémon Muralha",
    },
    {
      id: 806,
      nome: "blacéfalo",
      genus: "Pokémon Fogos de Artifício",
    },
    {
      id: 807,
      nome: "zeraora",
      genus: "Pokémon Palma de Trovão",
    },
    {
      id: 808,
      nome: "meltan",
      genus: "Pokémon Sextavado",
    },
    {
      id: 809,
      nome: "melmetal",
      genus: "Pokémon Sextavado",
    },
    {
      id: 810,
      nome: "grookey",
      genus: "Pokémon Chimpanzé",
    },
    {
      id: 811,
      nome: "thwackey",
      genus: "Pokémon Batuqueiro",
    },
    {
      id: 812,
      nome: "rillaboom",
      genus: "Pokémon Baterista",
    },
    {
      id: 813,
      nome: "Scorbunny",
      genus: "Pokémon Coelho",
    },
    {
      id: 814,
      nome: "raboot",
      genus: "Pokémon Coelho",
    },
    {
      id: 815,
      nome: "Cinderela",
      genus: "Pokémon atacante",
    },
    {
      id: 816,
      nome: "sobble",
      genus: "Pokémon Lagarto de Água",
    },
    {
      id: 817,
      nome: "garoa",
      genus: "Pokémon Lagarto de Água",
    },
    {
      id: 818,
      nome: "inteleon",
      genus: "Agente Secreto Pokémon",
    },
    {
      id: 819,
      nome: "skwovet",
      genus: "Pokémon atrevido",
    },
    {
      id: 820,
      nome: "greedent",
      genus: "Pokémon ganancioso",
    },
    {
      id: 821,
      nome: "rookidee",
      genus: "Pokémon Pequeno Pássaro",
    },
    {
      id: 822,
      nome: "corvisquire",
      genus: "Pokémon Corvo",
    },
    {
      id: 823,
      nome: "corviknight",
      genus: "Pokémon Corvo",
    },
    {
      id: 824,
      nome: "blipbug",
      genus: "Pokémon Larva",
    },
    {
      id: 825,
      nome: "dottler",
      genus: "Pokémon Redomo",
    },
    {
      id: 826,
      nome: "orbesouro",
      genus: "Pokémon de Sete Pontos",
    },
    {
      id: 827,
      nome: "nickit",
      genus: "Pokémon Raposa",
    },
    {
      id: 828,
      nome: "ladrão",
      genus: "Pokémon Raposa",
    },
    {
      id: 829,
      nome: "gossifleur",
      genus: "Pokémon em Flor",
    },
    {
      id: 830,
      nome: "eldegoss",
      genus: "Pokémon Flor de Algodão",
    },
    {
      id: 831,
      nome: "wooloo",
      genus: "Pokémon ovelha",
    },
    {
      id: 832,
      nome: "dubwool",
      genus: "Pokémon ovelha",
    },
    {
      id: 833,
      nome: "chewtke",
      genus: "Pokémon Estalo",
    },
    {
      id: 834,
      nome: "drednaw",
      genus: "Mordida Pokémon",
    },
    {
      id: 835,
      nome: "yamper",
      genus: "Pokémon Filhote de Cachorro",
    },
    {
      id: 836,
      nome: "boltund",
      genus: "Pokémon Cachorro",
    },
    {
      id: 837,
      nome: "rolycoly",
      genus: "Pokémon Carvão",
    },
    {
      id: 838,
      nome: "carkol",
      genus: "Pokémon Carvão",
    },
    {
      id: 839,
      nome: "coalossal",
      genus: "Pokémon Carvão",
    },
    {
      id: 840,
      nome: "applin",
      genus: "Pokémon Miolo da Maça",
    },
    {
      id: 841,
      nome: "flapple",
      genus: "Pokémon Asa de Maçã",
    },
    {
      id: 842,
      nome: "appletun",
      genus: "Pokémon Néctar de Maçã",
    },
    {
      id: 843,
      nome: "silicobra",
      genus: "Pokémon Serpente de Areia",
    },
    {
      id: 844,
      nome: "sandaconda",
      genus: "Pokémon Serpente de Areia",
    },
    {
      id: 845,
      nome: "cramorant",
      genus: "Pokémon Gole",
    },
    {
      id: 846,
      nome: "arrokuda",
      genus: "Pokémon Ligeiro",
    },
    {
      id: 847,
      nome: "barraskewda",
      genus: "Pokémon Espeto",
    },
    {
      id: 848,
      nome: "toxel",
      genus: "Bebê Pokémon",
    },
    {
      id: 849,
      nome: "toxtricidade",
      genus: "Pokémon Punk",
    },
    {
      id: 850,
      nome: "sizzlipede",
      genus: "Pokémon Radiador",
    },
    {
      id: 851,
      nome: "centiskorch",
      genus: "Pokémon Radiador",
    },
    {
      id: 852,
      nome: "clobopus",
      genus: "Pokémon Birra",
    },
    {
      id: 853,
      nome: "grapploct",
      genus: "Pokémon Jujitsu",
    },
    {
      id: 854,
      nome: "sinistea",
      genus: "Pokémon Chá Preto",
    },
    {
      id: 855,
      nome: "polteageist",
      genus: "Pokémon Chá Preto",
    },
    {
      id: 856,
      nome: "hatenna",
      genus: "Pokémon Calmo",
    },
    {
      id: 857,
      nome: "hattem",
      genus: "Pokémon Sereno",
    },
    {
      id: 858,
      nome: "hattereno",
      genus: "Pokémon Silencioso",
    },
    {
      id: 859,
      nome: "impidimp",
      genus: "Pokémon Astuto",
    },
    {
      id: 860,
      nome: "morgrem",
      genus: "Pokémon Tortuoso",
    },
    {
      id: 861,
      nome: "grimmsnarl",
      genus: "Pokémon Crescente",
    },
    {
      id: 862,
      nome: "obstagoon",
      genus: "Bloqueador de Pokémon",
    },
    {
      id: 863,
      nome: "perrserker",
      genus: "Pokémon Viking",
    },
    {
      id: 864,
      nome: "cursola",
      genus: "Pokémon Coral",
    },
    {
      id: 865,
      nome: "sirfetchd",
      genus: "Pokémon Pato Selvagem",
    },
    {
      id: 866,
      nome: "sr-rime",
      genus: "Pokémon Comediante",
    },
    {
      id: 867,
      nome: "runerigus",
      genus: "Pokémon Rancor",
    },
    {
      id: 868,
      nome: "milcery",
      genus: "Pokémon Creme",
    },
    {
      id: 869,
      nome: "alcremie",
      genus: "Pokémon Creme",
    },
    {
      id: 870,
      nome: "falinks",
      genus: "Pokémon de Formação",
    },
    {
      id: 871,
      nome: "pincurchin",
      genus: "Pokémon Ouriço do Mar",
    },
    {
      id: 872,
      nome: "snom",
      genus: "Pokémon Verme",
    },
    {
      id: 873,
      nome: "frosmoth",
      genus: "Pokémon Mariposa Congelada",
    },
    {
      id: 874,
      nome: "stonjourner",
      genus: "Pokémon Rochedo",
    },
    {
      id: 875,
      nome: "eiscue",
      genus: "Pokémon Pinguim",
    },
    {
      id: 876,
      nome: "de fato",
      genus: "Pokémon Emocional",
    },
    {
      id: 877,
      nome: "morpeko",
      genus: "Pokémon de dois lados",
    },
    {
      id: 878,
      nome: "cufant",
      genus: "Pokémon Cobre",
    },
    {
      id: 879,
      nome: "copperajah",
      genus: "Pokémon Cobre",
    },
    {
      id: 880,
      nome: "dracozolt",
      genus: "Pokémon Fóssil",
    },
    {
      id: 881,
      nome: "arctozolt",
      genus: "Pokémon Fóssil",
    },
    {
      id: 882,
      nome: "dracovish",
      genus: "Pokémon Fóssil",
    },
    {
      id: 883,
      nome: "arctovish",
      genus: "Pokémon Fóssil",
    },
    {
      id: 884,
      nome: "duraludon",
      genus: "Pokémon Liga",
    },
    {
      id: 885,
      nome: "dreepy",
      genus: "Pokémon persistente",
    },
    {
      id: 886,
      nome: "drakloak",
      genus: "Pokémon Zelador",
    },
    {
      id: 887,
      nome: "arrapulta",
      genus: "Pokémon Furtivo",
    },
    {
      id: 888,
      nome: "zacian",
      genus: "Pokémon Guerreiro",
    },
    {
      id: 889,
      nome: "zamazenta",
      genus: "Pokémon Guerreiro",
    },
    {
      id: 890,
      nome: "eternatus",
      genus: "Pokémon Gigantesco",
    },
    {
      id: 891,
      nome: "kubfu",
      genus: "Pokémon Wushu",
    },
    {
      id: 892,
      nome: "urshifu",
      genus: "Pokémon Wushu",
    },
    {
      id: 893,
      nome: "zarude",
      genus: "Pokémon Macaco Solitário",
    },
    {
      id: 894,
      nome: "Regieleki",
      genus: "Pokémon Eletrônico",
    },
    {
      id: 895,
      nome: "regidrago",
      genus: "Pokémon Orbe do Dragão",
    },
    {
      id: 896,
      nome: "glastrier",
      genus: "Pokémon Cavalo Selvagem",
    },
    {
      id: 897,
      nome: "espectrador",
      genus: "Pokémon Cavalo Rápido",
    },
    {
      id: 898,
      nome: "calyrex",
      genus: "Rei Pokémon",
    },
    {
      id: 899,
      nome: "wyrdeer",
      genus: "Pokémon Chifrudo",
    },
    {
      id: 900,
      nome: "kleavor",
      genus: "Pokémon Machado",
    },
    {
      id: 901,
      nome: "ursaluna",
      genus: "Pokémon Turfa",
    },
    {
      id: 902,
      nome: "basculegião",
      genus: "Pokémon Peixe Grande",
    },
    {
      id: 903,
      nome: "sneasler",
      genus: "Pokémon de escalada livre",
    },
    {
      id: 904,
      nome: "overqwil",
      genus: "Pokémon Baiacu",
    },
    {
      id: 905,
      nome: "enamorus",
      genus: "Pokémon Amor-Ódio",
    },
    {
      id: 906,
      nome: "sprigatito",
      genus: "Pokémon Gato de Grama",
    },
    {
      id: 907,
      nome: "floragato",
      genus: "Pokémon Gato de Grama",
    },
    {
      id: 908,
      nome: "miauscarada",
      genus: "Pokémon Mágico",
    },
    {
      id: 909,
      nome: "fuecoco",
      genus: "Pokémon Crocodilo de Fogo",
    },
    {
      id: 910,
      nome: "crocalor",
      genus: "Pokémon Crocodilo de Fogo",
    },
    {
      id: 911,
      nome: "skeledirge",
      genus: "Pokémon Cantor",
    },
    {
      id: 912,
      nome: "quaxly",
      genus: "Pokémon Patinho",
    },
    {
      id: 913,
      nome: "quaxwell",
      genus: "Pokémon Praticante",
    },
    {
      id: 914,
      nome: "quaquaval",
      genus: "Pokémon Dançarino",
    },
    {
      id: 915,
      nome: "lechonk",
      genus: "Pokémon Porco",
    },
    {
      id: 916,
      nome: "oinkologne",
      genus: "Pokémon Porco",
    },
    {
      id: 917,
      nome: "taruntula",
      genus: "Pokémon Bola Corda",
    },
    {
      id: 918,
      nome: "spidops",
      genus: "Pokémon Armadilha",
    },
    {
      id: 919,
      nome: "nymble",
      genus: "Pokémon Gafanhoto",
    },
    {
      id: 920,
      nome: "lokix",
      genus: "Pokémon Gafanhoto",
    },
    {
      id: 921,
      nome: "pawmi",
      genus: "Pokémon rato",
    },
    {
      id: 922,
      nome: "pawmo",
      genus: "Pokémon rato",
    },
    {
      id: 923,
      nome: "pawmot",
      genus: "Pokémon prático",
    },
    {
      id: 924,
      nome: "tandemaus",
      genus: "Casal Pokémon",
    },
    {
      id: 925,
      nome: "maushold",
      genus: "Pokémon da família",
    },
    {
      id: 926,
      nome: "fidough",
      genus: "Pokémon Filhote de Cachorro",
    },
    {
      id: 927,
      nome: "dachsbun",
      genus: "Pokémon Cachorro",
    },
    {
      id: 928,
      nome: "smoliv",
      genus: "Pokémon Oliva",
    },
    {
      id: 929,
      nome: "dolliv",
      genus: "Pokémon Oliva",
    },
    {
      id: 930,
      nome: "arboliva",
      genus: "Pokémon Oliva",
    },
    {
      id: 931,
      nome: "squawkabilly",
      genus: "Pokémon Papagaio",
    },
    {
      id: 932,
      nome: "nacli",
      genus: "Pokémon Sal-Gema",
    },
    {
      id: 933,
      nome: "naclstack",
      genus: "Pokémon Sal-Gema",
    },
    {
      id: 934,
      nome: "garganacl",
      genus: "Pokémon Sal-Gema",
    },
    {
      id: 935,
      nome: "charcadete",
      genus: "Pokémon Criança de Fogo",
    },
    {
      id: 936,
      nome: "armarouge",
      genus: "Pokémon Guerreiro de Fogo",
    },
    {
      id: 937,
      nome: "ceruledge",
      genus: "Pokémon Lâminas de Fogo",
    },
    {
      id: 938,
      nome: "tadbulbo",
      genus: "Pokémon Elâmpada",
    },
    {
      id: 939,
      nome: "bellibolt",
      genus: "Pokémon EleSapo",
    },
    {
      id: 940,
      nome: "wattrel",
      genus: "Pokémon Petrel da Tempestade",
    },
    {
      id: 941,
      nome: "quilowattrel",
      genus: "Pokémon Fragata",
    },
    {
      id: 942,
      nome: "maschiff",
      genus: "Pokémon Patife",
    },
    {
      id: 943,
      nome: "mabosstiff",
      genus: "Pokémon Chefe",
    },
    {
      id: 944,
      nome: "shroodle",
      genus: "Pokémon Rato Tóxico",
    },
    {
      id: 945,
      nome: "grafaiai",
      genus: "Pokémon Macaco Tóxico",
    },
    {
      id: 946,
      nome: "bramblin",
      genus: "Pokémon Erva Daninha",
    },
    {
      id: 947,
      nome: "brambleghast",
      genus: "Pokémon Erva Daninha",
    },
    {
      id: 948,
      nome: "toedscool",
      genus: "Pokémon Madeira",
    },
    {
      id: 949,
      nome: "toedscruel",
      genus: "Pokémon Madeira",
    },
    {
      id: 950,
      nome: "klawf",
      genus: "Pokémon Emboscada",
    },
    {
      id: 951,
      nome: "capsakid",
      genus: "Pokémon Pimenta Picante",
    },
    {
      id: 952,
      nome: "scovilão",
      genus: "Pokémon Pimenta Picante",
    },
    {
      id: 953,
      nome: "rellor",
      genus: "Pokémon Rolante",
    },
    {
      id: 954,
      nome: "rabsca",
      genus: "Pokémon Rolante",
    },
    {
      id: 955,
      nome: "flittle",
      genus: "Pokémon Folho",
    },
    {
      id: 956,
      nome: "espatra",
      genus: "Pokémon Avestruz",
    },
    {
      id: 957,
      nome: "tinkatink",
      genus: "Pokémon Metalsmith",
    },
    {
      id: 958,
      nome: "tinkatuff",
      genus: "Pokémon Martelo",
    },
    {
      id: 959,
      nome: "tinkaton",
      genus: "Pokémon Martelo",
    },
    {
      id: 960,
      nome: "wiglett",
      genus: "Pokémon Enguia de Jardim",
    },
    {
      id: 961,
      nome: "wugtrio",
      genus: "Pokémon Enguia de Jardim",
    },
    {
      id: 962,
      nome: "bombirdier",
      genus: "Pokémon de queda de item",
    },
    {
      id: 963,
      nome: "finizen",
      genus: "Pokémon Golfinho",
    },
    {
      id: 964,
      nome: "palafino",
      genus: "Pokémon Golfinho",
    },
    {
      id: 965,
      nome: "varoom",
      genus: "Pokémon de Cilindro Único",
    },
    {
      id: 966,
      nome: "revavroom",
      genus: "Pokémon Multi-Cilindro",
    },
    {
      id: 967,
      nome: "ciclizar",
      genus: "Monte Pokémon",
    },
    {
      id: 968,
      nome: "orthworm",
      genus: "Pokémon Minhoca",
    },
    {
      id: 969,
      nome: "brilho",
      genus: "Pokémon Minério",
    },
    {
      id: 970,
      nome: "glimora",
      genus: "Pokémon Minério",
    },
    {
      id: 971,
      nome: "greavard",
      genus: "Pokémon Cachorro Fantasma",
    },
    {
      id: 972,
      nome: "pedra de caça",
      genus: "Pokémon Cachorro Fantasma",
    },
    {
      id: 973,
      nome: "flamigo",
      genus: "Sincronizar Pokémon",
    },
    {
      id: 974,
      nome: "cetoddle",
      genus: "Pokémon Terra-Baleia",
    },
    {
      id: 975,
      nome: "cetitano",
      genus: "Pokémon Terra-Baleia",
    },
    {
      id: 976,
      nome: "veluza",
      genus: "Pokémon Jettison",
    },
    {
      id: 977,
      nome: "dondozo",
      genus: "Pokémon Peixe-Gato Grande",
    },
    {
      id: 978,
      nome: "tatsugiri",
      genus: "Pokémon Mimetismo",
    },
    {
      id: 979,
      nome: "anihilape",
      genus: "Pokémon Macaco Rage",
    },
    {
      id: 980,
      nome: "clodsire",
      genus: "Pokémon Peixe Espinhoso",
    },
    {
      id: 981,
      nome: "farigiraf",
      genus: "Pokémon de pescoço longo",
    },
    {
      id: 982,
      nome: "dudunsparce",
      genus: "Pokémon Serpente Terrestre",
    },
    {
      id: 983,
      nome: "reiambito",
      genus: "Pokémon Big Blade",
    },
    {
      id: 984,
      nome: "presa-grande",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 985,
      nome: "cauda gritante",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 986,
      nome: "bonnet bruto",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 987,
      nome: "juba esvoaçante",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 988,
      nome: "asa deslizante",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 989,
      nome: "choques de areia",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 990,
      nome: "degraus de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 991,
      nome: "pacote de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 992,
      nome: "mãos de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 993,
      nome: "ferro-jugulis",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 994,
      nome: "mariposa de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 995,
      nome: "espinhos de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 996,
      nome: "frigibax",
      genus: "Pokémon Barbatana de Gelo",
    },
    {
      id: 997,
      nome: "arctibax",
      genus: "Pokémon Barbatana de Gelo",
    },
    {
      id: 998,
      nome: "baxcalibur",
      genus: "Pokémon Dragão de Gelo",
    },
    {
      id: 999,
      nome: "gimmighoul",
      genus: "Pokémon Baú de Moedas",
    },
    {
      id: 1000,
      nome: "gholdengo",
      genus: "Pokémon Entidade Moeda",
    },
    {
      id: 1001,
      nome: "wo-chien",
      genus: "Pokémon Ruinoso",
    },
    {
      id: 1002,
      nome: "chien-pao",
      genus: "Pokémon Ruinoso",
    },
    {
      id: 1003,
      nome: "ting-lu",
      genus: "Pokémon Ruinoso",
    },
    {
      id: 1004,
      nome: "chi-yu",
      genus: "Pokémon Ruinoso",
    },
    {
      id: 1005,
      nome: "lua que ruge",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1006,
      nome: "valente de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1007,
      nome: "koraidon",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1008,
      nome: "miraidon",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1009,
      nome: "caminhando-despertar",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1010,
      nome: "folhas de ferro",
      genus: "Pokémon Paradoxo",
    },
    {
      id: 1011,
      nome: "dipplin",
      genus: "",
    },
    {
      id: 1012,
      nome: "poltchageist",
      genus: "",
    },
    {
      id: 1013,
      nome: "sinistcha",
      genus: "",
    },
    {
      id: 1014,
      nome: "okidogi",
      genus: "",
    },
    {
      id: 1015,
      nome: "munkidori",
      genus: "",
    },
    {
      id: 1016,
      nome: "fezandipiti",
      genus: "",
    },
    {
      id: 1017,
      nome: "ogerpon",
      genus: "",
    },
  ];

  const [titulos, setTitulos] = useState("");
  const names = [
    "mr.mime",
    "ho-ho",
    "mime.jr",
    "porygon-z",
    "shaymin-land",
    "mr-rime",
    "Jangmo-o",
    "Hakamo-o",
    "Kommo-o",
    "Wo-Chien",
    "Chien-Pao",
    "Ting-Lu",
    "Chi-Yu",
  ];

  useEffect(() => {
    const getTitleById = async () => {
      try {
        let titleText = "";
        if (props.id < 1010) {
          for (const title of genus) {
            if (title.id === props.id) {
              titleText = title.genus;
            }
          }
        } else {
          let response;
          if (!names.includes(props.name)) {
            response = await api.get(`pokemon/${props.name.split("-")[0]}`);
          } else {
            response = await api.get(`pokemon/${props.name}`);
          }

          for (const title of genus) {
            if (title.id === response.data.id) {
              titleText = title.genus;
            }
          }
        }
        setTitulos(titleText);
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };

    getTitleById();
  });

  return titulos.toString();
}
