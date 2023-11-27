export default function PokeName() {
  const names = [
    {
      id: 1,
      name: "bulbasaur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      name: "ivysaur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      name: "venusaur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 4,
      name: "charmander",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 5,
      name: "charmeleon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      id: 6,
      name: "charizard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      id: 7,
      name: "squirtle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 8,
      name: "wartortle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      id: 9,
      name: "blastoise",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
    {
      id: 10,
      name: "caterpie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
    {
      id: 11,
      name: "metapod",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
    {
      id: 12,
      name: "butterfree",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 13,
      name: "weedle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    },
    {
      id: 14,
      name: "kakuna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    },
    {
      id: 15,
      name: "beedrill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    },
    {
      id: 16,
      name: "pidgey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    },
    {
      id: 17,
      name: "pidgeotto",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    },
    {
      id: 18,
      name: "pidgeot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    },
    {
      id: 19,
      name: "rattata",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 20,
      name: "raticate",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    },
    {
      id: 21,
      name: "spearow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    },
    {
      id: 22,
      name: "fearow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    },
    {
      id: 23,
      name: "ekans",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    },
    {
      id: 24,
      name: "arbok",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    },
    {
      id: 25,
      name: "pikachu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      id: 26,
      name: "raichu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    },
    {
      id: 27,
      name: "sandshrew",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    },
    {
      id: 28,
      name: "sandslash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    },
    {
      id: 29,
      name: "nidoran-f",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    },
    {
      id: 30,
      name: "nidorina",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    },
    {
      id: 31,
      name: "nidoqueen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    },
    {
      id: 32,
      name: "nidoran-m",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    },
    {
      id: 33,
      name: "nidorino",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    },
    {
      id: 34,
      name: "nidoking",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    },
    {
      id: 35,
      name: "clefairy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    },
    {
      id: 36,
      name: "clefable",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    },
    {
      id: 37,
      name: "vulpix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    },
    {
      id: 38,
      name: "ninetales",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    },
    {
      id: 39,
      name: "jigglypuff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
    {
      id: 40,
      name: "wigglytuff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    },
    {
      id: 41,
      name: "zubat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    },
    {
      id: 42,
      name: "golbat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    },
    {
      id: 43,
      name: "oddish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    },
    {
      id: 44,
      name: "gloom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    },
    {
      id: 45,
      name: "vileplume",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    },
    {
      id: 46,
      name: "paras",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    },
    {
      id: 47,
      name: "parasect",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    },
    {
      id: 48,
      name: "venonat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    },
    {
      id: 49,
      name: "venomoth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    },
    {
      id: 50,
      name: "diglett",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    },
    {
      id: 51,
      name: "dugtrio",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    },
    {
      id: 52,
      name: "meowth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    },
    {
      id: 53,
      name: "persian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    },
    {
      id: 54,
      name: "psyduck",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    },
    {
      id: 55,
      name: "golduck",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    },
    {
      id: 56,
      name: "mankey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    },
    {
      id: 57,
      name: "primeape",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    },
    {
      id: 58,
      name: "growlithe",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    },
    {
      id: 59,
      name: "arcanine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    },
    {
      id: 60,
      name: "poliwag",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    },
    {
      id: 61,
      name: "poliwhirl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    },
    {
      id: 62,
      name: "poliwrath",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    },
    {
      id: 63,
      name: "abra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    },
    {
      id: 64,
      name: "kadabra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    },
    {
      id: 65,
      name: "alakazam",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    },
    {
      id: 66,
      name: "machop",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    },
    {
      id: 67,
      name: "machoke",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    },
    {
      id: 68,
      name: "machamp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    },
    {
      id: 69,
      name: "bellsprout",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    },
    {
      id: 70,
      name: "weepinbell",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    },
    {
      id: 71,
      name: "victreebel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    },
    {
      id: 72,
      name: "tentacool",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    },
    {
      id: 73,
      name: "tentacruel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    },
    {
      id: 74,
      name: "geodude",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    },
    {
      id: 75,
      name: "graveler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    },
    {
      id: 76,
      name: "golem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    },
    {
      id: 77,
      name: "ponyta",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    },
    {
      id: 78,
      name: "rapidash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    },
    {
      id: 79,
      name: "slowpoke",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    },
    {
      id: 80,
      name: "slowbro",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    },
    {
      id: 81,
      name: "magnemite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    },
    {
      id: 82,
      name: "magneton",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    },
    {
      id: 83,
      name: "farfetchd",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    },
    {
      id: 84,
      name: "doduo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    },
    {
      id: 85,
      name: "dodrio",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    },
    {
      id: 86,
      name: "seel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    },
    {
      id: 87,
      name: "dewgong",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    },
    {
      id: 88,
      name: "grimer",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    },
    {
      id: 89,
      name: "muk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    },
    {
      id: 90,
      name: "shellder",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    },
    {
      id: 91,
      name: "cloyster",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    },
    {
      id: 92,
      name: "gastly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    },
    {
      id: 93,
      name: "haunter",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    },
    {
      id: 94,
      name: "gengar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    },
    {
      id: 95,
      name: "onix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    },
    {
      id: 96,
      name: "drowzee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    },
    {
      id: 97,
      name: "hypno",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    },
    {
      id: 98,
      name: "krabby",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    },
    {
      id: 99,
      name: "kingler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    },
    {
      id: 100,
      name: "voltorb",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    },
    {
      id: 101,
      name: "electrode",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    },
    {
      id: 102,
      name: "exeggcute",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    },
    {
      id: 103,
      name: "exeggutor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    },
    {
      id: 104,
      name: "cubone",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    },
    {
      id: 105,
      name: "marowak",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    },
    {
      id: 106,
      name: "hitmonlee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    },
    {
      id: 107,
      name: "hitmonchan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    },
    {
      id: 108,
      name: "lickitung",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    },
    {
      id: 109,
      name: "koffing",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    },
    {
      id: 110,
      name: "weezing",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    },
    {
      id: 111,
      name: "rhyhorn",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    },
    {
      id: 112,
      name: "rhydon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    },
    {
      id: 113,
      name: "chansey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    },
    {
      id: 114,
      name: "tangela",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    },
    {
      id: 115,
      name: "kangaskhan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    },
    {
      id: 116,
      name: "horsea",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    },
    {
      id: 117,
      name: "seadra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    },
    {
      id: 118,
      name: "goldeen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    },
    {
      id: 119,
      name: "seaking",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    },
    {
      id: 120,
      name: "staryu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    },
    {
      id: 121,
      name: "starmie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    },
    {
      id: 122,
      name: "mr-mime",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    },
    {
      id: 123,
      name: "scyther",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    },
    {
      id: 124,
      name: "jynx",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    },
    {
      id: 125,
      name: "electabuzz",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    },
    {
      id: 126,
      name: "magmar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    },
    {
      id: 127,
      name: "pinsir",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    },
    {
      id: 128,
      name: "tauros",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    },
    {
      id: 129,
      name: "magikarp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    },
    {
      id: 130,
      name: "gyarados",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    },
    {
      id: 131,
      name: "lapras",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    },
    {
      id: 132,
      name: "ditto",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    {
      id: 133,
      name: "eevee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    },
    {
      id: 134,
      name: "vaporeon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    },
    {
      id: 135,
      name: "jolteon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    },
    {
      id: 136,
      name: "flareon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    },
    {
      id: 137,
      name: "porygon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    },
    {
      id: 138,
      name: "omanyte",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    },
    {
      id: 139,
      name: "omastar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    },
    {
      id: 140,
      name: "kabuto",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    },
    {
      id: 141,
      name: "kabutops",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    },
    {
      id: 142,
      name: "aerodactyl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    },
    {
      id: 143,
      name: "snorlax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    },
    {
      id: 144,
      name: "articuno",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    },
    {
      id: 145,
      name: "zapdos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    },
    {
      id: 146,
      name: "moltres",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    },
    {
      id: 147,
      name: "dratini",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    },
    {
      id: 148,
      name: "dragonair",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    },
    {
      id: 149,
      name: "dragonite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    },
    {
      id: 150,
      name: "mewtwo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    },
    {
      id: 151,
      name: "mew",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    },
    {
      id: 152,
      name: "chikorita",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    },
    {
      id: 153,
      name: "bayleef",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    },
    {
      id: 154,
      name: "meganium",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    },
    {
      id: 155,
      name: "cyndaquil",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    },
    {
      id: 156,
      name: "quilava",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    },
    {
      id: 157,
      name: "typhlosion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    },
    {
      id: 158,
      name: "totodile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    },
    {
      id: 159,
      name: "croconaw",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    },
    {
      id: 160,
      name: "feraligatr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    },
    {
      id: 161,
      name: "sentret",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    },
    {
      id: 162,
      name: "furret",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    },
    {
      id: 163,
      name: "hoothoot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    },
    {
      id: 164,
      name: "noctowl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    },
    {
      id: 165,
      name: "ledyba",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    },
    {
      id: 166,
      name: "ledian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    },
    {
      id: 167,
      name: "spinarak",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    },
    {
      id: 168,
      name: "ariados",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    },
    {
      id: 169,
      name: "crobat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    },
    {
      id: 170,
      name: "chinchou",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    },
    {
      id: 171,
      name: "lanturn",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    },
    {
      id: 172,
      name: "pichu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    },
    {
      id: 173,
      name: "cleffa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    },
    {
      id: 174,
      name: "igglybuff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    },
    {
      id: 175,
      name: "togepi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    },
    {
      id: 176,
      name: "togetic",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    },
    {
      id: 177,
      name: "natu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    },
    {
      id: 178,
      name: "xatu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    },
    {
      id: 179,
      name: "mareep",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    },
    {
      id: 180,
      name: "flaaffy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    },
    {
      id: 181,
      name: "ampharos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    },
    {
      id: 182,
      name: "bellossom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    },
    {
      id: 183,
      name: "marill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    },
    {
      id: 184,
      name: "azumarill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    },
    {
      id: 185,
      name: "sudowoodo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    },
    {
      id: 186,
      name: "politoed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    },
    {
      id: 187,
      name: "hoppip",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    },
    {
      id: 188,
      name: "skiploom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    },
    {
      id: 189,
      name: "jumpluff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    },
    {
      id: 190,
      name: "aipom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    },
    {
      id: 191,
      name: "sunkern",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    },
    {
      id: 192,
      name: "sunflora",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    },
    {
      id: 193,
      name: "yanma",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    },
    {
      id: 194,
      name: "wooper",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    },
    {
      id: 195,
      name: "quagsire",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    },
    {
      id: 196,
      name: "espeon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    },
    {
      id: 197,
      name: "umbreon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    },
    {
      id: 198,
      name: "murkrow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    },
    {
      id: 199,
      name: "slowking",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    },
    {
      id: 200,
      name: "misdreavus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    },
    {
      id: 201,
      name: "unown",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    },
    {
      id: 202,
      name: "wobbuffet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    },
    {
      id: 203,
      name: "girafarig",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    },
    {
      id: 204,
      name: "pineco",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    },
    {
      id: 205,
      name: "forretress",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    },
    {
      id: 206,
      name: "dunsparce",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    },
    {
      id: 207,
      name: "gligar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    },
    {
      id: 208,
      name: "steelix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    },
    {
      id: 209,
      name: "snubbull",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    },
    {
      id: 210,
      name: "granbull",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    },
    {
      id: 211,
      name: "qwilfish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    },
    {
      id: 212,
      name: "scizor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    },
    {
      id: 213,
      name: "shuckle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    },
    {
      id: 214,
      name: "heracross",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    },
    {
      id: 215,
      name: "sneasel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    },
    {
      id: 216,
      name: "teddiursa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    },
    {
      id: 217,
      name: "ursaring",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    },
    {
      id: 218,
      name: "slugma",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    },
    {
      id: 219,
      name: "magcargo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    },
    {
      id: 220,
      name: "swinub",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    },
    {
      id: 221,
      name: "piloswine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    },
    {
      id: 222,
      name: "corsola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    },
    {
      id: 223,
      name: "remoraid",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    },
    {
      id: 224,
      name: "octillery",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    },
    {
      id: 225,
      name: "delibird",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    },
    {
      id: 226,
      name: "mantine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    },
    {
      id: 227,
      name: "skarmory",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    },
    {
      id: 228,
      name: "houndour",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    },
    {
      id: 229,
      name: "houndoom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    },
    {
      id: 230,
      name: "kingdra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    },
    {
      id: 231,
      name: "phanpy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    },
    {
      id: 232,
      name: "donphan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    },
    {
      id: 233,
      name: "porygon2",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    },
    {
      id: 234,
      name: "stantler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    },
    {
      id: 235,
      name: "smeargle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    },
    {
      id: 236,
      name: "tyrogue",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    },
    {
      id: 237,
      name: "hitmontop",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    },
    {
      id: 238,
      name: "smoochum",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    },
    {
      id: 239,
      name: "elekid",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    },
    {
      id: 240,
      name: "magby",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    },
    {
      id: 241,
      name: "miltank",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    },
    {
      id: 242,
      name: "blissey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    },
    {
      id: 243,
      name: "raikou",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    },
    {
      id: 244,
      name: "entei",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    },
    {
      id: 245,
      name: "suicune",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    },
    {
      id: 246,
      name: "larvitar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    },
    {
      id: 247,
      name: "pupitar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    },
    {
      id: 248,
      name: "tyranitar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    },
    {
      id: 249,
      name: "lugia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    },
    {
      id: 250,
      name: "ho-oh",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    },
    {
      id: 251,
      name: "celebi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    },
    {
      id: 252,
      name: "treecko",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    },
    {
      id: 253,
      name: "grovyle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    },
    {
      id: 254,
      name: "sceptile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    },
    {
      id: 255,
      name: "torchic",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    },
    {
      id: 256,
      name: "combusken",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    },
    {
      id: 257,
      name: "blaziken",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    },
    {
      id: 258,
      name: "mudkip",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    },
    {
      id: 259,
      name: "marshtomp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    },
    {
      id: 260,
      name: "swampert",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    },
    {
      id: 261,
      name: "poochyena",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    },
    {
      id: 262,
      name: "mightyena",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    },
    {
      id: 263,
      name: "zigzagoon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    },
    {
      id: 264,
      name: "linoone",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    },
    {
      id: 265,
      name: "wurmple",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    },
    {
      id: 266,
      name: "silcoon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    },
    {
      id: 267,
      name: "beautifly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    },
    {
      id: 268,
      name: "cascoon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    },
    {
      id: 269,
      name: "dustox",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    },
    {
      id: 270,
      name: "lotad",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    },
    {
      id: 271,
      name: "lombre",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    },
    {
      id: 272,
      name: "ludicolo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    },
    {
      id: 273,
      name: "seedot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    },
    {
      id: 274,
      name: "nuzleaf",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    },
    {
      id: 275,
      name: "shiftry",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    },
    {
      id: 276,
      name: "taillow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    },
    {
      id: 277,
      name: "swellow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    },
    {
      id: 278,
      name: "wingull",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    },
    {
      id: 279,
      name: "pelipper",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    },
    {
      id: 280,
      name: "ralts",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    },
    {
      id: 281,
      name: "kirlia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    },
    {
      id: 282,
      name: "gardevoir",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    },
    {
      id: 283,
      name: "surskit",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    },
    {
      id: 284,
      name: "masquerain",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    },
    {
      id: 285,
      name: "shroomish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    },
    {
      id: 286,
      name: "breloom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    },
    {
      id: 287,
      name: "slakoth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    },
    {
      id: 288,
      name: "vigoroth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    },
    {
      id: 289,
      name: "slaking",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    },
    {
      id: 290,
      name: "nincada",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    },
    {
      id: 291,
      name: "ninjask",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    },
    {
      id: 292,
      name: "shedinja",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    },
    {
      id: 293,
      name: "whismur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    },
    {
      id: 294,
      name: "loudred",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    },
    {
      id: 295,
      name: "exploud",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    },
    {
      id: 296,
      name: "makuhita",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    },
    {
      id: 297,
      name: "hariyama",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    },
    {
      id: 298,
      name: "azurill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    },
    {
      id: 299,
      name: "nosepass",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    },
    {
      id: 300,
      name: "skitty",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    },
    {
      id: 301,
      name: "delcatty",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    },
    {
      id: 302,
      name: "sableye",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    },
    {
      id: 303,
      name: "mawile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    },
    {
      id: 304,
      name: "aron",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    },
    {
      id: 305,
      name: "lairon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    },
    {
      id: 306,
      name: "aggron",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    },
    {
      id: 307,
      name: "meditite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    },
    {
      id: 308,
      name: "medicham",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    },
    {
      id: 309,
      name: "electrike",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    },
    {
      id: 310,
      name: "manectric",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    },
    {
      id: 311,
      name: "plusle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    },
    {
      id: 312,
      name: "minun",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    },
    {
      id: 313,
      name: "volbeat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    },
    {
      id: 314,
      name: "illumise",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    },
    {
      id: 315,
      name: "roselia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    },
    {
      id: 316,
      name: "gulpin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    },
    {
      id: 317,
      name: "swalot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    },
    {
      id: 318,
      name: "carvanha",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    },
    {
      id: 319,
      name: "sharpedo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    },
    {
      id: 320,
      name: "wailmer",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    },
    {
      id: 321,
      name: "wailord",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    },
    {
      id: 322,
      name: "numel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    },
    {
      id: 323,
      name: "camerupt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    },
    {
      id: 324,
      name: "torkoal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    },
    {
      id: 325,
      name: "spoink",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    },
    {
      id: 326,
      name: "grumpig",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    },
    {
      id: 327,
      name: "spinda",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    },
    {
      id: 328,
      name: "trapinch",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    },
    {
      id: 329,
      name: "vibrava",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    },
    {
      id: 330,
      name: "flygon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    },
    {
      id: 331,
      name: "cacnea",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    },
    {
      id: 332,
      name: "cacturne",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    },
    {
      id: 333,
      name: "swablu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    },
    {
      id: 334,
      name: "altaria",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    },
    {
      id: 335,
      name: "zangoose",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    },
    {
      id: 336,
      name: "seviper",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    },
    {
      id: 337,
      name: "lunatone",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    },
    {
      id: 338,
      name: "solrock",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    },
    {
      id: 339,
      name: "barboach",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    },
    {
      id: 340,
      name: "whiscash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    },
    {
      id: 341,
      name: "corphish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    },
    {
      id: 342,
      name: "crawdaunt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    },
    {
      id: 343,
      name: "baltoy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    },
    {
      id: 344,
      name: "claydol",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    },
    {
      id: 345,
      name: "lileep",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    },
    {
      id: 346,
      name: "cradily",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    },
    {
      id: 347,
      name: "anorith",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    },
    {
      id: 348,
      name: "armaldo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    },
    {
      id: 349,
      name: "feebas",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    },
    {
      id: 350,
      name: "milotic",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    },
    {
      id: 351,
      name: "castform",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    },
    {
      id: 352,
      name: "kecleon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    },
    {
      id: 353,
      name: "shuppet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    },
    {
      id: 354,
      name: "banette",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    },
    {
      id: 355,
      name: "duskull",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    },
    {
      id: 356,
      name: "dusclops",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    },
    {
      id: 357,
      name: "tropius",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    },
    {
      id: 358,
      name: "chimecho",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    },
    {
      id: 359,
      name: "absol",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    },
    {
      id: 360,
      name: "wynaut",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    },
    {
      id: 361,
      name: "snorunt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    },
    {
      id: 362,
      name: "glalie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    },
    {
      id: 363,
      name: "spheal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    },
    {
      id: 364,
      name: "sealeo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    },
    {
      id: 365,
      name: "walrein",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    },
    {
      id: 366,
      name: "clamperl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    },
    {
      id: 367,
      name: "huntail",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    },
    {
      id: 368,
      name: "gorebyss",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    },
    {
      id: 369,
      name: "relicanth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    },
    {
      id: 370,
      name: "luvdisc",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    },
    {
      id: 371,
      name: "bagon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    },
    {
      id: 372,
      name: "shelgon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    },
    {
      id: 373,
      name: "salamence",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    },
    {
      id: 374,
      name: "beldum",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    },
    {
      id: 375,
      name: "metang",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    },
    {
      id: 376,
      name: "metagross",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    },
    {
      id: 377,
      name: "regirock",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    },
    {
      id: 378,
      name: "regice",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    },
    {
      id: 379,
      name: "registeel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    },
    {
      id: 380,
      name: "latias",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    },
    {
      id: 381,
      name: "latios",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    },
    {
      id: 382,
      name: "kyogre",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    },
    {
      id: 383,
      name: "groudon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    },
    {
      id: 384,
      name: "rayquaza",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    },
    {
      id: 385,
      name: "jirachi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    },
    {
      id: 386,
      name: "deoxys-normal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    },
    {
      id: 387,
      name: "turtwig",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    },
    {
      id: 388,
      name: "grotle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    },
    {
      id: 389,
      name: "torterra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    },
    {
      id: 390,
      name: "chimchar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    },
    {
      id: 391,
      name: "monferno",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    },
    {
      id: 392,
      name: "infernape",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    },
    {
      id: 393,
      name: "piplup",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    },
    {
      id: 394,
      name: "prinplup",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    },
    {
      id: 395,
      name: "empoleon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    },
    {
      id: 396,
      name: "starly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    },
    {
      id: 397,
      name: "staravia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    },
    {
      id: 398,
      name: "staraptor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    },
    {
      id: 399,
      name: "bidoof",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    },
    {
      id: 400,
      name: "bibarel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    },
    {
      id: 401,
      name: "kricketot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    },
    {
      id: 402,
      name: "kricketune",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    },
    {
      id: 403,
      name: "shinx",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    },
    {
      id: 404,
      name: "luxio",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    },
    {
      id: 405,
      name: "luxray",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    },
    {
      id: 406,
      name: "budew",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    },
    {
      id: 407,
      name: "roserade",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    },
    {
      id: 408,
      name: "cranidos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    },
    {
      id: 409,
      name: "rampardos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    },
    {
      id: 410,
      name: "shieldon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    },
    {
      id: 411,
      name: "bastiodon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    },
    {
      id: 412,
      name: "burmy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    },
    {
      id: 413,
      name: "wormadam-plant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    },
    {
      id: 414,
      name: "mothim",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    },
    {
      id: 415,
      name: "combee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    },
    {
      id: 416,
      name: "vespiquen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    },
    {
      id: 417,
      name: "pachirisu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    },
    {
      id: 418,
      name: "buizel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    },
    {
      id: 419,
      name: "floatzel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    },
    {
      id: 420,
      name: "cherubi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    },
    {
      id: 421,
      name: "cherrim",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    },
    {
      id: 422,
      name: "shellos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    },
    {
      id: 423,
      name: "gastrodon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    },
    {
      id: 424,
      name: "ambipom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    },
    {
      id: 425,
      name: "drifloon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    },
    {
      id: 426,
      name: "drifblim",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    },
    {
      id: 427,
      name: "buneary",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    },
    {
      id: 428,
      name: "lopunny",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    },
    {
      id: 429,
      name: "mismagius",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    },
    {
      id: 430,
      name: "honchkrow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    },
    {
      id: 431,
      name: "glameow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    },
    {
      id: 432,
      name: "purugly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    },
    {
      id: 433,
      name: "chingling",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    },
    {
      id: 434,
      name: "stunky",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    },
    {
      id: 435,
      name: "skuntank",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    },
    {
      id: 436,
      name: "bronzor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    },
    {
      id: 437,
      name: "bronzong",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    },
    {
      id: 438,
      name: "bonsly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    },
    {
      id: 439,
      name: "mime-jr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    },
    {
      id: 440,
      name: "happiny",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    },
    {
      id: 441,
      name: "chatot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    },
    {
      id: 442,
      name: "spiritomb",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    },
    {
      id: 443,
      name: "gible",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    },
    {
      id: 444,
      name: "gabite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    },
    {
      id: 445,
      name: "garchomp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    },
    {
      id: 446,
      name: "munchlax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    },
    {
      id: 447,
      name: "riolu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    },
    {
      id: 448,
      name: "lucario",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    },
    {
      id: 449,
      name: "hippopotas",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    },
    {
      id: 450,
      name: "hippowdon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    },
    {
      id: 451,
      name: "skorupi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    },
    {
      id: 452,
      name: "drapion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    },
    {
      id: 453,
      name: "croagunk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    },
    {
      id: 454,
      name: "toxicroak",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    },
    {
      id: 455,
      name: "carnivine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    },
    {
      id: 456,
      name: "finneon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    },
    {
      id: 457,
      name: "lumineon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    },
    {
      id: 458,
      name: "mantyke",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    },
    {
      id: 459,
      name: "snover",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    },
    {
      id: 460,
      name: "abomasnow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    },
    {
      id: 461,
      name: "weavile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    },
    {
      id: 462,
      name: "magnezone",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    },
    {
      id: 463,
      name: "lickilicky",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    },
    {
      id: 464,
      name: "rhyperior",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    },
    {
      id: 465,
      name: "tangrowth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    },
    {
      id: 466,
      name: "electivire",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    },
    {
      id: 467,
      name: "magmortar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    },
    {
      id: 468,
      name: "togekiss",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    },
    {
      id: 469,
      name: "yanmega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    },
    {
      id: 470,
      name: "leafeon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    },
    {
      id: 471,
      name: "glaceon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    },
    {
      id: 472,
      name: "gliscor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    },
    {
      id: 473,
      name: "mamoswine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    },
    {
      id: 474,
      name: "porygon-z",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    },
    {
      id: 475,
      name: "gallade",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    },
    {
      id: 476,
      name: "probopass",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    },
    {
      id: 477,
      name: "dusknoir",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    },
    {
      id: 478,
      name: "froslass",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    },
    {
      id: 479,
      name: "rotom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    },
    {
      id: 480,
      name: "uxie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    },
    {
      id: 481,
      name: "mesprit",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    },
    {
      id: 482,
      name: "azelf",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    },
    {
      id: 483,
      name: "dialga",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    },
    {
      id: 484,
      name: "palkia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    },
    {
      id: 485,
      name: "heatran",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    },
    {
      id: 486,
      name: "regigigas",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    },
    {
      id: 487,
      name: "giratina-altered",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    },
    {
      id: 488,
      name: "cresselia",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    },
    {
      id: 489,
      name: "phione",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    },
    {
      id: 490,
      name: "manaphy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    },
    {
      id: 491,
      name: "darkrai",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    },
    {
      id: 492,
      name: "shaymin-land",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    },
    {
      id: 493,
      name: "arceus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    },
    {
      id: 494,
      name: "victini",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    },
    {
      id: 495,
      name: "snivy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    },
    {
      id: 496,
      name: "servine",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    },
    {
      id: 497,
      name: "serperior",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    },
    {
      id: 498,
      name: "tepig",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    },
    {
      id: 499,
      name: "pignite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    },
    {
      id: 500,
      name: "emboar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    },
    {
      id: 501,
      name: "oshawott",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    },
    {
      id: 502,
      name: "dewott",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    },
    {
      id: 503,
      name: "samurott",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    },
    {
      id: 504,
      name: "patrat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    },
    {
      id: 505,
      name: "watchog",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    },
    {
      id: 506,
      name: "lillipup",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    },
    {
      id: 507,
      name: "herdier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    },
    {
      id: 508,
      name: "stoutland",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    },
    {
      id: 509,
      name: "purrloin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    },
    {
      id: 510,
      name: "liepard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    },
    {
      id: 511,
      name: "pansage",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    },
    {
      id: 512,
      name: "simisage",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    },
    {
      id: 513,
      name: "pansear",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    },
    {
      id: 514,
      name: "simisear",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    },
    {
      id: 515,
      name: "panpour",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    },
    {
      id: 516,
      name: "simipour",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    },
    {
      id: 517,
      name: "munna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    },
    {
      id: 518,
      name: "musharna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    },
    {
      id: 519,
      name: "pidove",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    },
    {
      id: 520,
      name: "tranquill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    },
    {
      id: 521,
      name: "unfezant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    },
    {
      id: 522,
      name: "blitzle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    },
    {
      id: 523,
      name: "zebstrika",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    },
    {
      id: 524,
      name: "roggenrola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    },
    {
      id: 525,
      name: "boldore",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    },
    {
      id: 526,
      name: "gigalith",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    },
    {
      id: 527,
      name: "woobat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    },
    {
      id: 528,
      name: "swoobat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    },
    {
      id: 529,
      name: "drilbur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    },
    {
      id: 530,
      name: "excadrill",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    },
    {
      id: 531,
      name: "audino",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    },
    {
      id: 532,
      name: "timburr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    },
    {
      id: 533,
      name: "gurdurr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    },
    {
      id: 534,
      name: "conkeldurr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    },
    {
      id: 535,
      name: "tympole",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    },
    {
      id: 536,
      name: "palpitoad",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    },
    {
      id: 537,
      name: "seismitoad",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    },
    {
      id: 538,
      name: "throh",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    },
    {
      id: 539,
      name: "sawk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    },
    {
      id: 540,
      name: "sewaddle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    },
    {
      id: 541,
      name: "swadloon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    },
    {
      id: 542,
      name: "leavanny",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    },
    {
      id: 543,
      name: "venipede",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    },
    {
      id: 544,
      name: "whirlipede",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    },
    {
      id: 545,
      name: "scolipede",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    },
    {
      id: 546,
      name: "cottonee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    },
    {
      id: 547,
      name: "whimsicott",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    },
    {
      id: 548,
      name: "petilil",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    },
    {
      id: 549,
      name: "lilligant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    },
    {
      id: 550,
      name: "basculin-red-striped",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    },
    {
      id: 551,
      name: "sandile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    },
    {
      id: 552,
      name: "krokorok",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    },
    {
      id: 553,
      name: "krookodile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    },
    {
      id: 554,
      name: "darumaka",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    },
    {
      id: 555,
      name: "darmanitan-standard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    },
    {
      id: 556,
      name: "maractus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    },
    {
      id: 557,
      name: "dwebble",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    },
    {
      id: 558,
      name: "crustle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    },
    {
      id: 559,
      name: "scraggy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    },
    {
      id: 560,
      name: "scrafty",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    },
    {
      id: 561,
      name: "sigilyph",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    },
    {
      id: 562,
      name: "yamask",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    },
    {
      id: 563,
      name: "cofagrigus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    },
    {
      id: 564,
      name: "tirtouga",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    },
    {
      id: 565,
      name: "carracosta",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    },
    {
      id: 566,
      name: "archen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    },
    {
      id: 567,
      name: "archeops",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    },
    {
      id: 568,
      name: "trubbish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    },
    {
      id: 569,
      name: "garbodor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    },
    {
      id: 570,
      name: "zorua",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    },
    {
      id: 571,
      name: "zoroark",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    },
    {
      id: 572,
      name: "minccino",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    },
    {
      id: 573,
      name: "cinccino",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    },
    {
      id: 574,
      name: "gothita",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    },
    {
      id: 575,
      name: "gothorita",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    },
    {
      id: 576,
      name: "gothitelle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    },
    {
      id: 577,
      name: "solosis",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    },
    {
      id: 578,
      name: "duosion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    },
    {
      id: 579,
      name: "reuniclus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    },
    {
      id: 580,
      name: "ducklett",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    },
    {
      id: 581,
      name: "swanna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    },
    {
      id: 582,
      name: "vanillite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    },
    {
      id: 583,
      name: "vanillish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    },
    {
      id: 584,
      name: "vanilluxe",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    },
    {
      id: 585,
      name: "deerling",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    },
    {
      id: 586,
      name: "sawsbuck",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    },
    {
      id: 587,
      name: "emolga",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    },
    {
      id: 588,
      name: "karrablast",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    },
    {
      id: 589,
      name: "escavalier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    },
    {
      id: 590,
      name: "foongus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    },
    {
      id: 591,
      name: "amoonguss",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    },
    {
      id: 592,
      name: "frillish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    },
    {
      id: 593,
      name: "jellicent",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    },
    {
      id: 594,
      name: "alomomola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    },
    {
      id: 595,
      name: "joltik",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    },
    {
      id: 596,
      name: "galvantula",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    },
    {
      id: 597,
      name: "ferroseed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    },
    {
      id: 598,
      name: "ferrothorn",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    },
    {
      id: 599,
      name: "klink",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    },
    {
      id: 600,
      name: "klang",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    },
    {
      id: 601,
      name: "klinklang",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    },
    {
      id: 602,
      name: "tynamo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    },
    {
      id: 603,
      name: "eelektrik",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    },
    {
      id: 604,
      name: "eelektross",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    },
    {
      id: 605,
      name: "elgyem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    },
    {
      id: 606,
      name: "beheeyem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    },
    {
      id: 607,
      name: "litwick",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    },
    {
      id: 608,
      name: "lampent",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    },
    {
      id: 609,
      name: "chandelure",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    },
    {
      id: 610,
      name: "axew",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    },
    {
      id: 611,
      name: "fraxure",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    },
    {
      id: 612,
      name: "haxorus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    },
    {
      id: 613,
      name: "cubchoo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    },
    {
      id: 614,
      name: "beartic",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    },
    {
      id: 615,
      name: "cryogonal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    },
    {
      id: 616,
      name: "shelmet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    },
    {
      id: 617,
      name: "accelgor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    },
    {
      id: 618,
      name: "stunfisk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    },
    {
      id: 619,
      name: "mienfoo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    },
    {
      id: 620,
      name: "mienshao",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    },
    {
      id: 621,
      name: "druddigon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    },
    {
      id: 622,
      name: "golett",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    },
    {
      id: 623,
      name: "golurk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    },
    {
      id: 624,
      name: "pawniard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    },
    {
      id: 625,
      name: "bisharp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    },
    {
      id: 626,
      name: "bouffalant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    },
    {
      id: 627,
      name: "rufflet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    },
    {
      id: 628,
      name: "braviary",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    },
    {
      id: 629,
      name: "vullaby",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    },
    {
      id: 630,
      name: "mandibuzz",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    },
    {
      id: 631,
      name: "heatmor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    },
    {
      id: 632,
      name: "durant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    },
    {
      id: 633,
      name: "deino",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    },
    {
      id: 634,
      name: "zweilous",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    },
    {
      id: 635,
      name: "hydreigon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    },
    {
      id: 636,
      name: "larvesta",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    },
    {
      id: 637,
      name: "volcarona",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    },
    {
      id: 638,
      name: "cobalion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    },
    {
      id: 639,
      name: "terrakion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    },
    {
      id: 640,
      name: "virizion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    },
    {
      id: 641,
      name: "tornadus-incarnate",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    },
    {
      id: 642,
      name: "thundurus-incarnate",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    },
    {
      id: 643,
      name: "reshiram",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    },
    {
      id: 644,
      name: "zekrom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    },
    {
      id: 645,
      name: "landorus-incarnate",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    },
    {
      id: 646,
      name: "kyurem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    },
    {
      id: 647,
      name: "keldeo-ordinary",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    },
    {
      id: 648,
      name: "meloetta-aria",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    },
    {
      id: 649,
      name: "genesect",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    },
    {
      id: 650,
      name: "chespin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    },
    {
      id: 651,
      name: "quilladin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    },
    {
      id: 652,
      name: "chesnaught",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    },
    {
      id: 653,
      name: "fennekin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    },
    {
      id: 654,
      name: "braixen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    },
    {
      id: 655,
      name: "delphox",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    },
    {
      id: 656,
      name: "froakie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    },
    {
      id: 657,
      name: "frogadier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    },
    {
      id: 658,
      name: "greninja",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    },
    {
      id: 659,
      name: "bunnelby",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    },
    {
      id: 660,
      name: "diggersby",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    },
    {
      id: 661,
      name: "fletchling",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    },
    {
      id: 662,
      name: "fletchinder",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    },
    {
      id: 663,
      name: "talonflame",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    },
    {
      id: 664,
      name: "scatterbug",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    },
    {
      id: 665,
      name: "spewpa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    },
    {
      id: 666,
      name: "vivillon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    },
    {
      id: 667,
      name: "litleo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    },
    {
      id: 668,
      name: "pyroar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    },
    {
      id: 669,
      name: "flabebe",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    },
    {
      id: 670,
      name: "floette",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    },
    {
      id: 671,
      name: "florges",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    },
    {
      id: 672,
      name: "skiddo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    },
    {
      id: 673,
      name: "gogoat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    },
    {
      id: 674,
      name: "pancham",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    },
    {
      id: 675,
      name: "pangoro",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    },
    {
      id: 676,
      name: "furfrou",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    },
    {
      id: 677,
      name: "espurr",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    },
    {
      id: 678,
      name: "meowstic-male",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    },
    {
      id: 679,
      name: "honedge",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    },
    {
      id: 680,
      name: "doublade",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    },
    {
      id: 681,
      name: "aegislash-shield",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    },
    {
      id: 682,
      name: "spritzee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    },
    {
      id: 683,
      name: "aromatisse",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    },
    {
      id: 684,
      name: "swirlix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    },
    {
      id: 685,
      name: "slurpuff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    },
    {
      id: 686,
      name: "inkay",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    },
    {
      id: 687,
      name: "malamar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    },
    {
      id: 688,
      name: "binacle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    },
    {
      id: 689,
      name: "barbaracle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    },
    {
      id: 690,
      name: "skrelp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    },
    {
      id: 691,
      name: "dragalge",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    },
    {
      id: 692,
      name: "clauncher",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    },
    {
      id: 693,
      name: "clawitzer",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    },
    {
      id: 694,
      name: "helioptile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    },
    {
      id: 695,
      name: "heliolisk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    },
    {
      id: 696,
      name: "tyrunt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    },
    {
      id: 697,
      name: "tyrantrum",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    },
    {
      id: 698,
      name: "amaura",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    },
    {
      id: 699,
      name: "aurorus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    },
    {
      id: 700,
      name: "sylveon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    },
    {
      id: 701,
      name: "hawlucha",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    },
    {
      id: 702,
      name: "dedenne",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    },
    {
      id: 703,
      name: "carbink",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    },
    {
      id: 704,
      name: "goomy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    },
    {
      id: 705,
      name: "sliggoo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    },
    {
      id: 706,
      name: "goodra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    },
    {
      id: 707,
      name: "klefki",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    },
    {
      id: 708,
      name: "phantump",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    },
    {
      id: 709,
      name: "trevenant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    },
    {
      id: 710,
      name: "pumpkaboo-average",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    },
    {
      id: 711,
      name: "gourgeist-average",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    },
    {
      id: 712,
      name: "bergmite",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    },
    {
      id: 713,
      name: "avalugg",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    },
    {
      id: 714,
      name: "noibat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    },
    {
      id: 715,
      name: "noivern",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    },
    {
      id: 716,
      name: "xerneas",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    },
    {
      id: 717,
      name: "yveltal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    },
    {
      id: 718,
      name: "zygarde-50",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    },
    {
      id: 719,
      name: "diancie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    },
    {
      id: 720,
      name: "hoopa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    },
    {
      id: 721,
      name: "volcanion",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    },
    {
      id: 722,
      name: "rowlet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    },
    {
      id: 723,
      name: "dartrix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    },
    {
      id: 724,
      name: "decidueye",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    },
    {
      id: 725,
      name: "litten",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    },
    {
      id: 726,
      name: "torracat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    },
    {
      id: 727,
      name: "incineroar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    },
    {
      id: 728,
      name: "popplio",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    },
    {
      id: 729,
      name: "brionne",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    },
    {
      id: 730,
      name: "primarina",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    },
    {
      id: 731,
      name: "pikipek",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    },
    {
      id: 732,
      name: "trumbeak",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    },
    {
      id: 733,
      name: "toucannon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    },
    {
      id: 734,
      name: "yungoos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    },
    {
      id: 735,
      name: "gumshoos",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    },
    {
      id: 736,
      name: "grubbin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    },
    {
      id: 737,
      name: "charjabug",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    },
    {
      id: 738,
      name: "vikavolt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    },
    {
      id: 739,
      name: "crabrawler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    },
    {
      id: 740,
      name: "crabominable",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    },
    {
      id: 741,
      name: "oricorio-baile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    },
    {
      id: 742,
      name: "cutiefly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    },
    {
      id: 743,
      name: "ribombee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    },
    {
      id: 744,
      name: "rockruff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    },
    {
      id: 745,
      name: "lycanroc-midday",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    },
    {
      id: 746,
      name: "wishiwashi-solo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    },
    {
      id: 747,
      name: "mareanie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    },
    {
      id: 748,
      name: "toxapex",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    },
    {
      id: 749,
      name: "mudbray",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    },
    {
      id: 750,
      name: "mudsdale",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    },
    {
      id: 751,
      name: "dewpider",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    },
    {
      id: 752,
      name: "araquanid",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    },
    {
      id: 753,
      name: "fomantis",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    },
    {
      id: 754,
      name: "lurantis",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    },
    {
      id: 755,
      name: "morelull",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    },
    {
      id: 756,
      name: "shiinotic",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    },
    {
      id: 757,
      name: "salandit",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    },
    {
      id: 758,
      name: "salazzle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    },
    {
      id: 759,
      name: "stufful",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    },
    {
      id: 760,
      name: "bewear",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    },
    {
      id: 761,
      name: "bounsweet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    },
    {
      id: 762,
      name: "steenee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    },
    {
      id: 763,
      name: "tsareena",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    },
    {
      id: 764,
      name: "comfey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    },
    {
      id: 765,
      name: "oranguru",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    },
    {
      id: 766,
      name: "passimian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    },
    {
      id: 767,
      name: "wimpod",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    },
    {
      id: 768,
      name: "golisopod",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    },
    {
      id: 769,
      name: "sandygast",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    },
    {
      id: 770,
      name: "palossand",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    },
    {
      id: 771,
      name: "pyukumuku",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    },
    {
      id: 772,
      name: "type-null",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    },
    {
      id: 773,
      name: "silvally",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    },
    {
      id: 774,
      name: "minior-red-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    },
    {
      id: 775,
      name: "komala",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    },
    {
      id: 776,
      name: "turtonator",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    },
    {
      id: 777,
      name: "togedemaru",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    },
    {
      id: 778,
      name: "mimikyu-disguised",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    },
    {
      id: 779,
      name: "bruxish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    },
    {
      id: 780,
      name: "drampa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    },
    {
      id: 781,
      name: "dhelmise",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    },
    {
      id: 782,
      name: "jangmo-o",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    },
    {
      id: 783,
      name: "hakamo-o",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    },
    {
      id: 784,
      name: "kommo-o",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    },
    {
      id: 785,
      name: "tapu-koko",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    },
    {
      id: 786,
      name: "tapu-lele",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    },
    {
      id: 787,
      name: "tapu-bulu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    },
    {
      id: 788,
      name: "tapu-fini",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    },
    {
      id: 789,
      name: "cosmog",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    },
    {
      id: 790,
      name: "cosmoem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    },
    {
      id: 791,
      name: "solgaleo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    },
    {
      id: 792,
      name: "lunala",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    },
    {
      id: 793,
      name: "nihilego",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    },
    {
      id: 794,
      name: "buzzwole",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    },
    {
      id: 795,
      name: "pheromosa",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    },
    {
      id: 796,
      name: "xurkitree",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    },
    {
      id: 797,
      name: "celesteela",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    },
    {
      id: 798,
      name: "kartana",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    },
    {
      id: 799,
      name: "guzzlord",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    },
    {
      id: 800,
      name: "necrozma",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    },
    {
      id: 801,
      name: "magearna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    },
    {
      id: 802,
      name: "marshadow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    },
    {
      id: 803,
      name: "poipole",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    },
    {
      id: 804,
      name: "naganadel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    },
    {
      id: 805,
      name: "stakataka",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    },
    {
      id: 806,
      name: "blacephalon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    },
    {
      id: 807,
      name: "zeraora",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    },
    {
      id: 808,
      name: "meltan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    },
    {
      id: 809,
      name: "melmetal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    },
    {
      id: 810,
      name: "grookey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    },
    {
      id: 811,
      name: "thwackey",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    },
    {
      id: 812,
      name: "rillaboom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    },
    {
      id: 813,
      name: "scorbunny",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    },
    {
      id: 814,
      name: "raboot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    },
    {
      id: 815,
      name: "cinderace",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    },
    {
      id: 816,
      name: "sobble",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    },
    {
      id: 817,
      name: "drizzile",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    },
    {
      id: 818,
      name: "inteleon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    },
    {
      id: 819,
      name: "skwovet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    },
    {
      id: 820,
      name: "greedent",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    },
    {
      id: 821,
      name: "rookidee",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    },
    {
      id: 822,
      name: "corvisquire",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    },
    {
      id: 823,
      name: "corviknight",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    },
    {
      id: 824,
      name: "blipbug",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    },
    {
      id: 825,
      name: "dottler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    },
    {
      id: 826,
      name: "orbeetle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    },
    {
      id: 827,
      name: "nickit",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    },
    {
      id: 828,
      name: "thievul",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    },
    {
      id: 829,
      name: "gossifleur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    },
    {
      id: 830,
      name: "eldegoss",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    },
    {
      id: 831,
      name: "wooloo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    },
    {
      id: 832,
      name: "dubwool",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    },
    {
      id: 833,
      name: "chewtle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    },
    {
      id: 834,
      name: "drednaw",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    },
    {
      id: 835,
      name: "yamper",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    },
    {
      id: 836,
      name: "boltund",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    },
    {
      id: 837,
      name: "rolycoly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    },
    {
      id: 838,
      name: "carkol",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    },
    {
      id: 839,
      name: "coalossal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    },
    {
      id: 840,
      name: "applin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    },
    {
      id: 841,
      name: "flapple",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    },
    {
      id: 842,
      name: "appletun",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    },
    {
      id: 843,
      name: "silicobra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    },
    {
      id: 844,
      name: "sandaconda",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    },
    {
      id: 845,
      name: "cramorant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    },
    {
      id: 846,
      name: "arrokuda",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    },
    {
      id: 847,
      name: "barraskewda",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    },
    {
      id: 848,
      name: "toxel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    },
    {
      id: 849,
      name: "toxtricity-amped",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    },
    {
      id: 850,
      name: "sizzlipede",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    },
    {
      id: 851,
      name: "centiskorch",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    },
    {
      id: 852,
      name: "clobbopus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    },
    {
      id: 853,
      name: "grapploct",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    },
    {
      id: 854,
      name: "sinistea",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    },
    {
      id: 855,
      name: "polteageist",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    },
    {
      id: 856,
      name: "hatenna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    },
    {
      id: 857,
      name: "hattrem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    },
    {
      id: 858,
      name: "hatterene",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    },
    {
      id: 859,
      name: "impidimp",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    },
    {
      id: 860,
      name: "morgrem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    },
    {
      id: 861,
      name: "grimmsnarl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    },
    {
      id: 862,
      name: "obstagoon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    },
    {
      id: 863,
      name: "perrserker",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    },
    {
      id: 864,
      name: "cursola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    },
    {
      id: 865,
      name: "sirfetchd",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    },
    {
      id: 866,
      name: "mr-rime",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    },
    {
      id: 867,
      name: "runerigus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    },
    {
      id: 868,
      name: "milcery",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    },
    {
      id: 869,
      name: "alcremie",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    },
    {
      id: 870,
      name: "falinks",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    },
    {
      id: 871,
      name: "pincurchin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    },
    {
      id: 872,
      name: "snom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    },
    {
      id: 873,
      name: "frosmoth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    },
    {
      id: 874,
      name: "stonjourner",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    },
    {
      id: 875,
      name: "eiscue-ice",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    },
    {
      id: 876,
      name: "indeedee-male",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    },
    {
      id: 877,
      name: "morpeko-full-belly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    },
    {
      id: 878,
      name: "cufant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    },
    {
      id: 879,
      name: "copperajah",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    },
    {
      id: 880,
      name: "dracozolt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    },
    {
      id: 881,
      name: "arctozolt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    },
    {
      id: 882,
      name: "dracovish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    },
    {
      id: 883,
      name: "arctovish",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    },
    {
      id: 884,
      name: "duraludon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    },
    {
      id: 885,
      name: "dreepy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    },
    {
      id: 886,
      name: "drakloak",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    },
    {
      id: 887,
      name: "dragapult",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    },
    {
      id: 888,
      name: "zacian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    },
    {
      id: 889,
      name: "zamazenta",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    },
    {
      id: 890,
      name: "eternatus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    },
    {
      id: 891,
      name: "kubfu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    },
    {
      id: 892,
      name: "urshifu-single-strike",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    },
    {
      id: 893,
      name: "zarude",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    },
    {
      id: 894,
      name: "regieleki",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    },
    {
      id: 895,
      name: "regidrago",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    },
    {
      id: 896,
      name: "glastrier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    },
    {
      id: 897,
      name: "spectrier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    },
    {
      id: 898,
      name: "calyrex",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    },
    {
      id: 899,
      name: "wyrdeer",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    },
    {
      id: 900,
      name: "kleavor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    },
    {
      id: 901,
      name: "ursaluna",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    },
    {
      id: 902,
      name: "basculegion-male",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    },
    {
      id: 903,
      name: "sneasler",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    },
    {
      id: 904,
      name: "overqwil",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    },
    {
      id: 905,
      name: "enamorus-incarnate",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    },
    {
      id: 906,
      name: "sprigatito",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    },
    {
      id: 907,
      name: "floragato",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    },
    {
      id: 908,
      name: "meowscarada",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    },
    {
      id: 909,
      name: "fuecoco",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    },
    {
      id: 910,
      name: "crocalor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    },
    {
      id: 911,
      name: "skeledirge",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    },
    {
      id: 912,
      name: "quaxly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    },
    {
      id: 913,
      name: "quaxwell",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    },
    {
      id: 914,
      name: "quaquaval",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    },
    {
      id: 915,
      name: "lechonk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    },
    {
      id: 916,
      name: "oinkologne",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    },
    {
      id: 917,
      name: "tarountula",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    },
    {
      id: 918,
      name: "spidops",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    },
    {
      id: 919,
      name: "nymble",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    },
    {
      id: 920,
      name: "lokix",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    },
    {
      id: 921,
      name: "pawmi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    },
    {
      id: 922,
      name: "pawmo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    },
    {
      id: 923,
      name: "pawmot",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    },
    {
      id: 924,
      name: "tandemaus",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    },
    {
      id: 925,
      name: "maushold",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    },
    {
      id: 926,
      name: "fidough",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    },
    {
      id: 927,
      name: "dachsbun",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    },
    {
      id: 928,
      name: "smoliv",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    },
    {
      id: 929,
      name: "dolliv",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    },
    {
      id: 930,
      name: "arboliva",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    },
    {
      id: 931,
      name: "squawkabilly",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    },
    {
      id: 932,
      name: "nacli",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    },
    {
      id: 933,
      name: "naclstack",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    },
    {
      id: 934,
      name: "garganacl",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    },
    {
      id: 935,
      name: "charcadet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    },
    {
      id: 936,
      name: "armarouge",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    },
    {
      id: 937,
      name: "ceruledge",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    },
    {
      id: 938,
      name: "tadbulb",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    },
    {
      id: 939,
      name: "bellibolt",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    },
    {
      id: 940,
      name: "wattrel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    },
    {
      id: 941,
      name: "kilowattrel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    },
    {
      id: 942,
      name: "maschiff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    },
    {
      id: 943,
      name: "mabosstiff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    },
    {
      id: 944,
      name: "shroodle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    },
    {
      id: 945,
      name: "grafaiai",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    },
    {
      id: 946,
      name: "bramblin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    },
    {
      id: 947,
      name: "brambleghast",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    },
    {
      id: 948,
      name: "toedscool",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    },
    {
      id: 949,
      name: "toedscruel",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    },
    {
      id: 950,
      name: "klawf",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    },
    {
      id: 951,
      name: "capsakid",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    },
    {
      id: 952,
      name: "scovillain",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    },
    {
      id: 953,
      name: "rellor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    },
    {
      id: 954,
      name: "rabsca",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    },
    {
      id: 955,
      name: "flittle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    },
    {
      id: 956,
      name: "espathra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    },
    {
      id: 957,
      name: "tinkatink",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    },
    {
      id: 958,
      name: "tinkatuff",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    },
    {
      id: 959,
      name: "tinkaton",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    },
    {
      id: 960,
      name: "wiglett",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    },
    {
      id: 961,
      name: "wugtrio",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    },
    {
      id: 962,
      name: "bombirdier",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    },
    {
      id: 963,
      name: "finizen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    },
    {
      id: 964,
      name: "palafin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    },
    {
      id: 965,
      name: "varoom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    },
    {
      id: 966,
      name: "revavroom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    },
    {
      id: 967,
      name: "cyclizar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    },
    {
      id: 968,
      name: "orthworm",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    },
    {
      id: 969,
      name: "glimmet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    },
    {
      id: 970,
      name: "glimmora",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    },
    {
      id: 971,
      name: "greavard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    },
    {
      id: 972,
      name: "houndstone",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    },
    {
      id: 973,
      name: "flamigo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    },
    {
      id: 974,
      name: "cetoddle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    },
    {
      id: 975,
      name: "cetitan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    },
    {
      id: 976,
      name: "veluza",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    },
    {
      id: 977,
      name: "dondozo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    },
    {
      id: 978,
      name: "tatsugiri",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    },
    {
      id: 979,
      name: "annihilape",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    },
    {
      id: 980,
      name: "clodsire",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    },
    {
      id: 981,
      name: "farigiraf",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    },
    {
      id: 982,
      name: "dudunsparce",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    },
    {
      id: 983,
      name: "kingambit",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    },
    {
      id: 984,
      name: "great-tusk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    },
    {
      id: 985,
      name: "scream-tail",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    },
    {
      id: 986,
      name: "brute-bonnet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    },
    {
      id: 987,
      name: "flutter-mane",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    },
    {
      id: 988,
      name: "slither-wing",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    },
    {
      id: 989,
      name: "sandy-shocks",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    },
    {
      id: 990,
      name: "iron-treads",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    },
    {
      id: 991,
      name: "iron-bundle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    },
    {
      id: 992,
      name: "iron-hands",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    },
    {
      id: 993,
      name: "iron-jugulis",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    },
    {
      id: 994,
      name: "iron-moth",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    },
    {
      id: 995,
      name: "iron-thorns",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    },
    {
      id: 996,
      name: "frigibax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    },
    {
      id: 997,
      name: "arctibax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    },
    {
      id: 998,
      name: "baxcalibur",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    },
    {
      id: 999,
      name: "gimmighoul",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    },
    {
      id: 1000,
      name: "gholdengo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    },
    {
      id: 1001,
      name: "wo-chien",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    },
    {
      id: 1002,
      name: "chien-pao",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    },
    {
      id: 1003,
      name: "ting-lu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    },
    {
      id: 1004,
      name: "chi-yu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    },
    {
      id: 1005,
      name: "roaring-moon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    },
    {
      id: 1006,
      name: "iron-valiant",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    },
    {
      id: 1007,
      name: "koraidon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    },
    {
      id: 1008,
      name: "miraidon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    },
    {
      id: 1009,
      name: "walking-wake",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    },
    {
      id: 1010,
      name: "iron-leaves",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    },
    {
      id: 1011,
      name: "dipplin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    },
    {
      id: 1012,
      name: "poltchageist",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    },
    {
      id: 1013,
      name: "sinistcha",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    },
    {
      id: 1014,
      name: "okidogi",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    },
    {
      id: 1015,
      name: "munkidori",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    },
    {
      id: 1016,
      name: "fezandipiti",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    },
    {
      id: 1017,
      name: "ogerpon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    },
    {
      id: 10001,
      name: "deoxys-attack",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
    },
    {
      id: 10002,
      name: "deoxys-defense",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
    },
    {
      id: 10003,
      name: "deoxys-speed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
    },
    {
      id: 10004,
      name: "wormadam-sandy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
    },
    {
      id: 10005,
      name: "wormadam-trash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
    },
    {
      id: 10006,
      name: "shaymin-sky",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
    },
    {
      id: 10007,
      name: "giratina-origin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
    },
    {
      id: 10008,
      name: "rotom-heat",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
    },
    {
      id: 10009,
      name: "rotom-wash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
    },
    {
      id: 10010,
      name: "rotom-frost",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
    },
    {
      id: 10011,
      name: "rotom-fan",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
    },
    {
      id: 10012,
      name: "rotom-mow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
    },
    {
      id: 10013,
      name: "castform-sunny",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
    },
    {
      id: 10014,
      name: "castform-rainy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
    },
    {
      id: 10015,
      name: "castform-snowy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
    },
    {
      id: 10016,
      name: "basculin-blue-striped",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
    },
    {
      id: 10017,
      name: "darmanitan-zen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
    },
    {
      id: 10018,
      name: "meloetta-pirouette",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
    },
    {
      id: 10019,
      name: "tornadus-therian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
    },
    {
      id: 10020,
      name: "thundurus-therian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
    },
    {
      id: 10021,
      name: "landorus-therian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
    },
    {
      id: 10022,
      name: "kyurem-black",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
    },
    {
      id: 10023,
      name: "kyurem-white",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
    },
    {
      id: 10024,
      name: "keldeo-resolute",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
    },
    {
      id: 10025,
      name: "meowstic-female",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
    },
    {
      id: 10026,
      name: "aegislash-blade",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
    },
    {
      id: 10027,
      name: "pumpkaboo-small",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
    },
    {
      id: 10028,
      name: "pumpkaboo-large",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
    },
    {
      id: 10029,
      name: "pumpkaboo-super",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
    },
    {
      id: 10030,
      name: "gourgeist-small",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
    },
    {
      id: 10031,
      name: "gourgeist-large",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
    },
    {
      id: 10032,
      name: "gourgeist-super",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
    },
    {
      id: 10033,
      name: "venusaur-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
    },
    {
      id: 10034,
      name: "charizard-mega-x",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
    },
    {
      id: 10035,
      name: "charizard-mega-y",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
    },
    {
      id: 10036,
      name: "blastoise-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
    },
    {
      id: 10037,
      name: "alakazam-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
    },
    {
      id: 10038,
      name: "gengar-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
    },
    {
      id: 10039,
      name: "kangaskhan-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
    },
    {
      id: 10040,
      name: "pinsir-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
    },
    {
      id: 10041,
      name: "gyarados-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
    },
    {
      id: 10042,
      name: "aerodactyl-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
    },
    {
      id: 10043,
      name: "mewtwo-mega-x",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
    },
    {
      id: 10044,
      name: "mewtwo-mega-y",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
    },
    {
      id: 10045,
      name: "ampharos-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
    },
    {
      id: 10046,
      name: "scizor-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
    },
    {
      id: 10047,
      name: "heracross-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
    },
    {
      id: 10048,
      name: "houndoom-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
    },
    {
      id: 10049,
      name: "tyranitar-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
    },
    {
      id: 10050,
      name: "blaziken-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
    },
    {
      id: 10051,
      name: "gardevoir-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
    },
    {
      id: 10052,
      name: "mawile-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
    },
    {
      id: 10053,
      name: "aggron-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
    },
    {
      id: 10054,
      name: "medicham-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
    },
    {
      id: 10055,
      name: "manectric-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
    },
    {
      id: 10056,
      name: "banette-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
    },
    {
      id: 10057,
      name: "absol-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
    },
    {
      id: 10058,
      name: "garchomp-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
    },
    {
      id: 10059,
      name: "lucario-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
    },
    {
      id: 10060,
      name: "abomasnow-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
    },
    {
      id: 10061,
      name: "floette-eternal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
    },
    {
      id: 10062,
      name: "latias-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
    },
    {
      id: 10063,
      name: "latios-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
    },
    {
      id: 10064,
      name: "swampert-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
    },
    {
      id: 10065,
      name: "sceptile-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
    },
    {
      id: 10066,
      name: "sableye-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
    },
    {
      id: 10067,
      name: "altaria-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
    },
    {
      id: 10068,
      name: "gallade-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
    },
    {
      id: 10069,
      name: "audino-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
    },
    {
      id: 10070,
      name: "sharpedo-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
    },
    {
      id: 10071,
      name: "slowbro-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
    },
    {
      id: 10072,
      name: "steelix-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
    },
    {
      id: 10073,
      name: "pidgeot-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
    },
    {
      id: 10074,
      name: "glalie-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
    },
    {
      id: 10075,
      name: "diancie-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
    },
    {
      id: 10076,
      name: "metagross-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
    },
    {
      id: 10077,
      name: "kyogre-primal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
    },
    {
      id: 10078,
      name: "groudon-primal",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
    },
    {
      id: 10079,
      name: "rayquaza-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
    },
    {
      id: 10080,
      name: "pikachu-rock-star",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
    },
    {
      id: 10081,
      name: "pikachu-belle",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
    },
    {
      id: 10082,
      name: "pikachu-pop-star",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
    },
    {
      id: 10083,
      name: "pikachu-phd",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
    },
    {
      id: 10084,
      name: "pikachu-libre",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
    },
    {
      id: 10085,
      name: "pikachu-cosplay",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
    },
    {
      id: 10086,
      name: "hoopa-unbound",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
    },
    {
      id: 10087,
      name: "camerupt-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
    },
    {
      id: 10088,
      name: "lopunny-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
    },
    {
      id: 10089,
      name: "salamence-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
    },
    {
      id: 10090,
      name: "beedrill-mega",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
    },
    {
      id: 10091,
      name: "rattata-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
    },
    {
      id: 10092,
      name: "raticate-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
    },
    {
      id: 10093,
      name: "raticate-totem-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",
    },
    {
      id: 10094,
      name: "pikachu-original-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",
    },
    {
      id: 10095,
      name: "pikachu-hoenn-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",
    },
    {
      id: 10096,
      name: "pikachu-sinnoh-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",
    },
    {
      id: 10097,
      name: "pikachu-unova-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",
    },
    {
      id: 10098,
      name: "pikachu-kalos-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",
    },
    {
      id: 10099,
      name: "pikachu-alola-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",
    },
    {
      id: 10100,
      name: "raichu-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
    },
    {
      id: 10101,
      name: "sandshrew-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
    },
    {
      id: 10102,
      name: "sandslash-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
    },
    {
      id: 10103,
      name: "vulpix-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
    },
    {
      id: 10104,
      name: "ninetales-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
    },
    {
      id: 10105,
      name: "diglett-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
    },
    {
      id: 10106,
      name: "dugtrio-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
    },
    {
      id: 10107,
      name: "meowth-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
    },
    {
      id: 10108,
      name: "persian-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
    },
    {
      id: 10109,
      name: "geodude-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
    },
    {
      id: 10110,
      name: "graveler-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
    },
    {
      id: 10111,
      name: "golem-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
    },
    {
      id: 10112,
      name: "grimer-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
    },
    {
      id: 10113,
      name: "muk-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
    },
    {
      id: 10114,
      name: "exeggutor-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
    },
    {
      id: 10115,
      name: "marowak-alola",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
    },
    {
      id: 10116,
      name: "greninja-battle-bond",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",
    },
    {
      id: 10117,
      name: "greninja-ash",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
    },
    {
      id: 10118,
      name: "zygarde-10-power-construct",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
    },
    {
      id: 10119,
      name: "zygarde-50-power-construct",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",
    },
    {
      id: 10120,
      name: "zygarde-complete",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
    },
    {
      id: 10121,
      name: "gumshoos-totem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",
    },
    {
      id: 10122,
      name: "vikavolt-totem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",
    },
    {
      id: 10123,
      name: "oricorio-pom-pom",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
    },
    {
      id: 10124,
      name: "oricorio-pau",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",
    },
    {
      id: 10125,
      name: "oricorio-sensu",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",
    },
    {
      id: 10126,
      name: "lycanroc-midnight",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
    },
    {
      id: 10127,
      name: "wishiwashi-school",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",
    },
    { id: 10128, name: "lurantis-totem", front: null },
    { id: 10129, name: "salazzle-totem", front: null },
    {
      id: 10130,
      name: "minior-orange-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",
    },
    {
      id: 10131,
      name: "minior-yellow-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",
    },
    {
      id: 10132,
      name: "minior-green-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",
    },
    {
      id: 10133,
      name: "minior-blue-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",
    },
    {
      id: 10134,
      name: "minior-indigo-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",
    },
    {
      id: 10135,
      name: "minior-violet-meteor",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",
    },
    {
      id: 10136,
      name: "minior-red",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",
    },
    {
      id: 10137,
      name: "minior-orange",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",
    },
    {
      id: 10138,
      name: "minior-yellow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",
    },
    {
      id: 10139,
      name: "minior-green",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",
    },
    {
      id: 10140,
      name: "minior-blue",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",
    },
    {
      id: 10141,
      name: "minior-indigo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",
    },
    {
      id: 10142,
      name: "minior-violet",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",
    },
    {
      id: 10143,
      name: "mimikyu-busted",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
    },
    {
      id: 10144,
      name: "mimikyu-totem-disguised",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",
    },
    {
      id: 10145,
      name: "mimikyu-totem-busted",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",
    },
    { id: 10146, name: "kommo-o-totem", front: null },
    {
      id: 10147,
      name: "magearna-original",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",
    },
    {
      id: 10148,
      name: "pikachu-partner-cap",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",
    },
    {
      id: 10149,
      name: "marowak-totem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",
    },
    {
      id: 10150,
      name: "ribombee-totem",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",
    },
    {
      id: 10151,
      name: "rockruff-own-tempo",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",
    },
    {
      id: 10152,
      name: "lycanroc-dusk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
    },
    { id: 10153, name: "araquanid-totem", front: null },
    { id: 10154, name: "togedemaru-totem", front: null },
    {
      id: 10155,
      name: "necrozma-dusk",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
    },
    {
      id: 10156,
      name: "necrozma-dawn",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
    },
    {
      id: 10157,
      name: "necrozma-ultra",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
    },
    { id: 10158, name: "pikachu-starter", front: null },
    { id: 10159, name: "eevee-starter", front: null },
    { id: 10160, name: "pikachu-world-cap", front: null },
    {
      id: 10161,
      name: "meowth-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
    },
    {
      id: 10162,
      name: "ponyta-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
    },
    {
      id: 10163,
      name: "rapidash-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
    },
    {
      id: 10164,
      name: "slowpoke-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
    },
    {
      id: 10165,
      name: "slowbro-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
    },
    {
      id: 10166,
      name: "farfetchd-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
    },
    {
      id: 10167,
      name: "weezing-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
    },
    {
      id: 10168,
      name: "mr-mime-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
    },
    {
      id: 10169,
      name: "articuno-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
    },
    {
      id: 10170,
      name: "zapdos-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
    },
    {
      id: 10171,
      name: "moltres-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
    },
    {
      id: 10172,
      name: "slowking-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
    },
    {
      id: 10173,
      name: "corsola-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
    },
    {
      id: 10174,
      name: "zigzagoon-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
    },
    {
      id: 10175,
      name: "linoone-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
    },
    {
      id: 10176,
      name: "darumaka-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
    },
    {
      id: 10177,
      name: "darmanitan-galar-standard",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
    },
    {
      id: 10178,
      name: "darmanitan-galar-zen",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",
    },
    {
      id: 10179,
      name: "yamask-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
    },
    {
      id: 10180,
      name: "stunfisk-galar",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
    },
    { id: 10181, name: "zygarde-10", front: null },
    { id: 10182, name: "cramorant-gulping", front: null },
    { id: 10183, name: "cramorant-gorging", front: null },
    {
      id: 10184,
      name: "toxtricity-low-key",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
    },
    {
      id: 10185,
      name: "eiscue-noice",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",
    },
    {
      id: 10186,
      name: "indeedee-female",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",
    },
    { id: 10187, name: "morpeko-hangry", front: null },
    {
      id: 10188,
      name: "zacian-crowned",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
    },
    {
      id: 10189,
      name: "zamazenta-crowned",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
    },
    {
      id: 10190,
      name: "eternatus-eternamax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
    },
    {
      id: 10191,
      name: "urshifu-rapid-strike",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",
    },
    { id: 10192, name: "zarude-dada", front: null },
    {
      id: 10193,
      name: "calyrex-ice",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
    },
    {
      id: 10194,
      name: "calyrex-shadow",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
    },
    {
      id: 10195,
      name: "venusaur-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
    },
    {
      id: 10196,
      name: "charizard-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
    },
    {
      id: 10197,
      name: "blastoise-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
    },
    {
      id: 10198,
      name: "butterfree-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",
    },
    {
      id: 10199,
      name: "pikachu-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
    },
    {
      id: 10200,
      name: "meowth-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",
    },
    {
      id: 10201,
      name: "machamp-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
    },
    {
      id: 10202,
      name: "gengar-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
    },
    {
      id: 10203,
      name: "kingler-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",
    },
    {
      id: 10204,
      name: "lapras-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
    },
    {
      id: 10205,
      name: "eevee-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
    },
    {
      id: 10206,
      name: "snorlax-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
    },
    {
      id: 10207,
      name: "garbodor-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",
    },
    {
      id: 10208,
      name: "melmetal-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",
    },
    {
      id: 10209,
      name: "rillaboom-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
    },
    {
      id: 10210,
      name: "cinderace-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
    },
    {
      id: 10211,
      name: "inteleon-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
    },
    {
      id: 10212,
      name: "corviknight-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
    },
    {
      id: 10213,
      name: "orbeetle-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",
    },
    {
      id: 10214,
      name: "drednaw-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",
    },
    {
      id: 10215,
      name: "coalossal-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",
    },
    {
      id: 10216,
      name: "flapple-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",
    },
    {
      id: 10217,
      name: "appletun-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
    },
    {
      id: 10218,
      name: "sandaconda-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",
    },
    {
      id: 10219,
      name: "toxtricity-amped-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
    },
    {
      id: 10220,
      name: "centiskorch-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",
    },
    {
      id: 10221,
      name: "hatterene-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png",
    },
    {
      id: 10222,
      name: "grimmsnarl-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",
    },
    {
      id: 10223,
      name: "alcremie-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png",
    },
    {
      id: 10224,
      name: "copperajah-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png",
    },
    {
      id: 10225,
      name: "duraludon-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png",
    },
    {
      id: 10226,
      name: "urshifu-single-strike-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png",
    },
    {
      id: 10227,
      name: "urshifu-rapid-strike-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png",
    },
    {
      id: 10228,
      name: "toxtricity-low-key-gmax",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",
    },
    {
      id: 10229,
      name: "growlithe-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",
    },
    {
      id: 10230,
      name: "arcanine-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
    },
    {
      id: 10231,
      name: "voltorb-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",
    },
    {
      id: 10232,
      name: "electrode-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",
    },
    {
      id: 10233,
      name: "typhlosion-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
    },
    {
      id: 10234,
      name: "qwilfish-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",
    },
    {
      id: 10235,
      name: "sneasel-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",
    },
    {
      id: 10236,
      name: "samurott-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
    },
    {
      id: 10237,
      name: "lilligant-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",
    },
    {
      id: 10238,
      name: "zorua-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",
    },
    {
      id: 10239,
      name: "zoroark-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
    },
    {
      id: 10240,
      name: "braviary-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
    },
    {
      id: 10241,
      name: "sliggoo-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",
    },
    {
      id: 10242,
      name: "goodra-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
    },
    {
      id: 10243,
      name: "avalugg-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",
    },
    {
      id: 10244,
      name: "decidueye-hisui",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
    },
    {
      id: 10245,
      name: "dialga-origin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png",
    },
    {
      id: 10246,
      name: "palkia-origin",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png",
    },
    {
      id: 10247,
      name: "basculin-white-striped",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png",
    },
    {
      id: 10248,
      name: "basculegion-female",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png",
    },
    {
      id: 10249,
      name: "enamorus-therian",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png",
    },
    {
      id: 10250,
      name: "tauros-paldea-combat-breed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png",
    },
    {
      id: 10251,
      name: "tauros-paldea-blaze-breed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png",
    },
    {
      id: 10252,
      name: "tauros-paldea-aqua-breed",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png",
    },
    {
      id: 10253,
      name: "wooper-paldea",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png",
    },
    {
      id: 10254,
      name: "oinkologne-female",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png",
    },
    {
      id: 10255,
      name: "dudunsparce-three-segment",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png",
    },
    {
      id: 10256,
      name: "palafin-hero",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png",
    },
    {
      id: 10257,
      name: "maushold-family-of-three",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png",
    },
    {
      id: 10258,
      name: "tatsugiri-droopy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png",
    },
    {
      id: 10259,
      name: "tatsugiri-stretchy",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png",
    },
    {
      id: 10260,
      name: "squawkabilly-blue-plumage",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png",
    },
    {
      id: 10261,
      name: "squawkabilly-yellow-plumage",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png",
    },
    {
      id: 10262,
      name: "squawkabilly-white-plumage",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png",
    },
    {
      id: 10263,
      name: "gimmighoul-roaming",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png",
    },
    { id: 10264, name: "koraidon-limited-build", front: null },
    { id: 10265, name: "koraidon-sprinting-build", front: null },
    { id: 10266, name: "koraidon-swimming-build", front: null },
    { id: 10267, name: "koraidon-gliding-build", front: null },
    { id: 10268, name: "miraidon-low-power-mode", front: null },
    { id: 10269, name: "miraidon-drive-mode", front: null },
    { id: 10270, name: "miraidon-aquatic-mode", front: null },
    { id: 10271, name: "miraidon-glide-mode", front: null },
    {
      id: 10272,
      name: "ursaluna-bloodmoon",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png",
    },
    {
      id: 10273,
      name: "ogerpon-wellspring-mask",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",
    },
    {
      id: 10274,
      name: "ogerpon-hearthflame-mask",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",
    },
    {
      id: 10275,
      name: "ogerpon-cornerstone-mask",
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",
    },
  ];

  return names;
}
