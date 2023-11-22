export default function PokeName() {
  const names = [
    {
      id: 1,
      name: "bulbasaur",
    },
    {
      id: 4,
      name: "charmander",
    },
    {
      id: 7,
      name: "squirtle",
    },
    {
      id: 10,
      name: "caterpie",
    },
    {
      id: 13,
      name: "weedle",
    },
    {
      id: 16,
      name: "pidgey",
    },
    {
      id: 19,
      name: "rattata",
    },
    {
      id: 21,
      name: "spearow",
    },
    {
      id: 23,
      name: "ekans",
    },
    {
      id: 27,
      name: "sandshrew",
    },
    {
      id: 29,
      name: "nidoran-f",
    },
    {
      id: 32,
      name: "nidoran-m",
    },
    {
      id: 37,
      name: "vulpix",
    },
    {
      id: 41,
      name: "zubat",
    },
    {
      id: 43,
      name: "oddish",
    },
    {
      id: 46,
      name: "paras",
    },
    {
      id: 48,
      name: "venonat",
    },
    {
      id: 50,
      name: "diglett",
    },
    {
      id: 52,
      name: "meowth",
    },
    {
      id: 54,
      name: "psyduck",
    },
    {
      id: 56,
      name: "mankey",
    },
    {
      id: 58,
      name: "growlithe",
    },
    {
      id: 60,
      name: "poliwag",
    },
    {
      id: 63,
      name: "abra",
    },
    {
      id: 66,
      name: "machop",
    },
    {
      id: 69,
      name: "bellsprout",
    },
    {
      id: 72,
      name: "tentacool",
    },
    {
      id: 74,
      name: "geodude",
    },
    {
      id: 3,
      name: "venusaur",
    },
    {
      id: 5,
      name: "charmeleon",
    },
    {
      id: 6,
      name: "charizard",
    },
    {
      id: 8,
      name: "wartortle",
    },
    {
      id: 9,
      name: "blastoise",
    },
    {
      id: 11,
      name: "metapod",
    },
    {
      id: 12,
      name: "butterfree",
    },
    {
      id: 14,
      name: "kakuna",
    },
    {
      id: 15,
      name: "beedrill",
    },
    {
      id: 17,
      name: "pidgeotto",
    },
    {
      id: 18,
      name: "pidgeot",
    },
    {
      id: 20,
      name: "raticate",
    },
    {
      id: 22,
      name: "fearow",
    },
    {
      id: 24,
      name: "arbok",
    },
    {
      id: 25,
      name: "pikachu",
    },
    {
      id: 26,
      name: "raichu",
    },
    {
      id: 28,
      name: "sandslash",
    },
    {
      id: 30,
      name: "nidorina",
    },
    {
      id: 31,
      name: "nidoqueen",
    },
    {
      id: 33,
      name: "nidorino",
    },
    {
      id: 34,
      name: "nidoking",
    },
    {
      id: 35,
      name: "clefairy",
    },
    {
      id: 36,
      name: "clefable",
    },
    {
      id: 38,
      name: "ninetales",
    },
    {
      id: 39,
      name: "jigglypuff",
    },
    {
      id: 40,
      name: "wigglytuff",
    },
    {
      id: 42,
      name: "golbat",
    },
    {
      id: 44,
      name: "gloom",
    },
    {
      id: 45,
      name: "vileplume",
    },
    {
      id: 47,
      name: "parasect",
    },
    {
      id: 49,
      name: "venomoth",
    },
    {
      id: 51,
      name: "dugtrio",
    },
    {
      id: 53,
      name: "persian",
    },
    {
      id: 55,
      name: "golduck",
    },
    {
      id: 57,
      name: "primeape",
    },
    {
      id: 59,
      name: "arcanine",
    },
    {
      id: 61,
      name: "poliwhirl",
    },
    {
      id: 62,
      name: "poliwrath",
    },
    {
      id: 64,
      name: "kadabra",
    },
    {
      id: 65,
      name: "alakazam",
    },
    {
      id: 67,
      name: "machoke",
    },
    {
      id: 68,
      name: "machamp",
    },
    {
      id: 70,
      name: "weepinbell",
    },
    {
      id: 71,
      name: "victreebel",
    },
    {
      id: 73,
      name: "tentacruel",
    },
    {
      id: 75,
      name: "graveler",
    },
    {
      id: 77,
      name: "ponyta",
    },
    {
      id: 79,
      name: "slowpoke",
    },
    {
      id: 81,
      name: "magnemite",
    },
    {
      id: 83,
      name: "farfetchd",
    },
    {
      id: 84,
      name: "doduo",
    },
    {
      id: 86,
      name: "seel",
    },
    {
      id: 88,
      name: "grimer",
    },
    {
      id: 90,
      name: "shellder",
    },
    {
      id: 92,
      name: "gastly",
    },
    {
      id: 95,
      name: "onix",
    },
    {
      id: 96,
      name: "drowzee",
    },
    {
      id: 98,
      name: "krabby",
    },
    {
      id: 100,
      name: "voltorb",
    },
    {
      id: 102,
      name: "exeggcute",
    },
    {
      id: 104,
      name: "cubone",
    },
    {
      id: 108,
      name: "lickitung",
    },
    {
      id: 109,
      name: "koffing",
    },
    {
      id: 111,
      name: "rhyhorn",
    },
    {
      id: 114,
      name: "tangela",
    },
    {
      id: 115,
      name: "kangaskhan",
    },
    {
      id: 116,
      name: "horsea",
    },
    {
      id: 118,
      name: "goldeen",
    },
    {
      id: 120,
      name: "staryu",
    },
    {
      id: 123,
      name: "scyther",
    },
    {
      id: 127,
      name: "pinsir",
    },
    {
      id: 128,
      name: "tauros",
    },
    {
      id: 129,
      name: "magikarp",
    },
    {
      id: 131,
      name: "lapras",
    },
    {
      id: 132,
      name: "ditto",
    },
    {
      id: 133,
      name: "eevee",
    },
    {
      id: 137,
      name: "porygon",
    },
    {
      id: 138,
      name: "omanyte",
    },
    {
      id: 140,
      name: "kabuto",
    },
    {
      id: 142,
      name: "aerodactyl",
    },
    {
      id: 144,
      name: "articuno",
    },
    {
      id: 145,
      name: "zapdos",
    },
    {
      id: 146,
      name: "moltres",
    },
    {
      id: 147,
      name: "dratini",
    },
    {
      id: 150,
      name: "mewtwo",
    },
    {
      id: 78,
      name: "rapidash",
    },
    {
      id: 80,
      name: "slowbro",
    },
    {
      id: 82,
      name: "magneton",
    },
    {
      id: 85,
      name: "dodrio",
    },
    {
      id: 87,
      name: "dewgong",
    },
    {
      id: 89,
      name: "muk",
    },
    {
      id: 91,
      name: "cloyster",
    },
    {
      id: 93,
      name: "haunter",
    },
    {
      id: 94,
      name: "gengar",
    },
    {
      id: 97,
      name: "hypno",
    },
    {
      id: 99,
      name: "kingler",
    },
    {
      id: 101,
      name: "electrode",
    },
    {
      id: 103,
      name: "exeggutor",
    },
    {
      id: 105,
      name: "marowak",
    },
    {
      id: 106,
      name: "hitmonlee",
    },
    {
      id: 107,
      name: "hitmonchan",
    },
    {
      id: 110,
      name: "weezing",
    },
    {
      id: 112,
      name: "rhydon",
    },
    {
      id: 113,
      name: "chansey",
    },
    {
      id: 117,
      name: "seadra",
    },
    {
      id: 119,
      name: "seaking",
    },
    {
      id: 121,
      name: "starmie",
    },
    {
      id: 122,
      name: "mr-mime",
    },
    {
      id: 124,
      name: "jynx",
    },
    {
      id: 125,
      name: "electabuzz",
    },
    {
      id: 126,
      name: "magmar",
    },
    {
      id: 130,
      name: "gyarados",
    },
    {
      id: 134,
      name: "vaporeon",
    },
    {
      id: 135,
      name: "jolteon",
    },
    {
      id: 136,
      name: "flareon",
    },
    {
      id: 139,
      name: "omastar",
    },
    {
      id: 141,
      name: "kabutops",
    },
    {
      id: 143,
      name: "snorlax",
    },
    {
      id: 148,
      name: "dragonair",
    },
    {
      id: 149,
      name: "dragonite",
    },
    {
      id: 151,
      name: "mew",
    },
    {
      id: 152,
      name: "chikorita",
    },
    {
      id: 155,
      name: "cyndaquil",
    },
    {
      id: 158,
      name: "totodile",
    },
    {
      id: 161,
      name: "sentret",
    },
    {
      id: 163,
      name: "hoothoot",
    },
    {
      id: 165,
      name: "ledyba",
    },
    {
      id: 167,
      name: "spinarak",
    },
    {
      id: 170,
      name: "chinchou",
    },
    {
      id: 172,
      name: "pichu",
    },
    {
      id: 173,
      name: "cleffa",
    },
    {
      id: 174,
      name: "igglybuff",
    },
    {
      id: 175,
      name: "togepi",
    },
    {
      id: 177,
      name: "natu",
    },
    {
      id: 179,
      name: "mareep",
    },
    {
      id: 187,
      name: "hoppip",
    },
    {
      id: 190,
      name: "aipom",
    },
    {
      id: 191,
      name: "sunkern",
    },
    {
      id: 193,
      name: "yanma",
    },
    {
      id: 194,
      name: "wooper",
    },
    {
      id: 198,
      name: "murkrow",
    },
    {
      id: 200,
      name: "misdreavus",
    },
    {
      id: 201,
      name: "unown",
    },
    {
      id: 203,
      name: "girafarig",
    },
    {
      id: 204,
      name: "pineco",
    },
    {
      id: 206,
      name: "dunsparce",
    },
    {
      id: 207,
      name: "gligar",
    },
    {
      id: 209,
      name: "snubbull",
    },
    {
      id: 211,
      name: "qwilfish",
    },
    {
      id: 213,
      name: "shuckle",
    },
    {
      id: 214,
      name: "heracross",
    },
    {
      id: 215,
      name: "sneasel",
    },
    {
      id: 216,
      name: "teddiursa",
    },
    {
      id: 218,
      name: "slugma",
    },
    {
      id: 220,
      name: "swinub",
    },
    {
      id: 222,
      name: "corsola",
    },
    {
      id: 223,
      name: "remoraid",
    },
    {
      id: 225,
      name: "delibird",
    },
    {
      id: 154,
      name: "meganium",
    },
    {
      id: 156,
      name: "quilava",
    },
    {
      id: 157,
      name: "typhlosion",
    },
    {
      id: 159,
      name: "croconaw",
    },
    {
      id: 160,
      name: "feraligatr",
    },
    {
      id: 162,
      name: "furret",
    },
    {
      id: 164,
      name: "noctowl",
    },
    {
      id: 166,
      name: "ledian",
    },
    {
      id: 168,
      name: "ariados",
    },
    {
      id: 169,
      name: "crobat",
    },
    {
      id: 171,
      name: "lanturn",
    },
    {
      id: 176,
      name: "togetic",
    },
    {
      id: 178,
      name: "xatu",
    },
    {
      id: 180,
      name: "flaaffy",
    },
    {
      id: 181,
      name: "ampharos",
    },
    {
      id: 182,
      name: "bellossom",
    },
    {
      id: 183,
      name: "marill",
    },
    {
      id: 184,
      name: "azumarill",
    },
    {
      id: 185,
      name: "sudowoodo",
    },
    {
      id: 186,
      name: "politoed",
    },
    {
      id: 188,
      name: "skiploom",
    },
    {
      id: 189,
      name: "jumpluff",
    },
    {
      id: 192,
      name: "sunflora",
    },
    {
      id: 195,
      name: "quagsire",
    },
    {
      id: 196,
      name: "espeon",
    },
    {
      id: 197,
      name: "umbreon",
    },
    {
      id: 199,
      name: "slowking",
    },
    {
      id: 202,
      name: "wobbuffet",
    },
    {
      id: 205,
      name: "forretress",
    },
    {
      id: 208,
      name: "steelix",
    },
    {
      id: 210,
      name: "granbull",
    },
    {
      id: 212,
      name: "scizor",
    },
    {
      id: 217,
      name: "ursaring",
    },
    {
      id: 219,
      name: "magcargo",
    },
    {
      id: 221,
      name: "piloswine",
    },
    {
      id: 224,
      name: "octillery",
    },
    {
      id: 227,
      name: "skarmory",
    },
    {
      id: 228,
      name: "houndour",
    },
    {
      id: 231,
      name: "phanpy",
    },
    {
      id: 234,
      name: "stantler",
    },
    {
      id: 235,
      name: "smeargle",
    },
    {
      id: 236,
      name: "tyrogue",
    },
    {
      id: 238,
      name: "smoochum",
    },
    {
      id: 239,
      name: "elekid",
    },
    {
      id: 240,
      name: "magby",
    },
    {
      id: 241,
      name: "miltank",
    },
    {
      id: 243,
      name: "raikou",
    },
    {
      id: 244,
      name: "entei",
    },
    {
      id: 245,
      name: "suicune",
    },
    {
      id: 246,
      name: "larvitar",
    },
    {
      id: 249,
      name: "lugia",
    },
    {
      id: 250,
      name: "ho-oh",
    },
    {
      id: 251,
      name: "celebi",
    },
    {
      id: 252,
      name: "treecko",
    },
    {
      id: 255,
      name: "torchic",
    },
    {
      id: 258,
      name: "mudkip",
    },
    {
      id: 261,
      name: "poochyena",
    },
    {
      id: 263,
      name: "zigzagoon",
    },
    {
      id: 265,
      name: "wurmple",
    },
    {
      id: 270,
      name: "lotad",
    },
    {
      id: 273,
      name: "seedot",
    },
    {
      id: 276,
      name: "taillow",
    },
    {
      id: 278,
      name: "wingull",
    },
    {
      id: 280,
      name: "ralts",
    },
    {
      id: 283,
      name: "surskit",
    },
    {
      id: 285,
      name: "shroomish",
    },
    {
      id: 287,
      name: "slakoth",
    },
    {
      id: 290,
      name: "nincada",
    },
    {
      id: 293,
      name: "whismur",
    },
    {
      id: 296,
      name: "makuhita",
    },
    {
      id: 298,
      name: "azurill",
    },
    {
      id: 299,
      name: "nosepass",
    },
    {
      id: 300,
      name: "skitty",
    },
    {
      id: 229,
      name: "houndoom",
    },
    {
      id: 230,
      name: "kingdra",
    },
    {
      id: 232,
      name: "donphan",
    },
    {
      id: 233,
      name: "porygon2",
    },
    {
      id: 237,
      name: "hitmontop",
    },
    {
      id: 242,
      name: "blissey",
    },
    {
      id: 247,
      name: "pupitar",
    },
    {
      id: 248,
      name: "tyranitar",
    },
    {
      id: 253,
      name: "grovyle",
    },
    {
      id: 254,
      name: "sceptile",
    },
    {
      id: 256,
      name: "combusken",
    },
    {
      id: 257,
      name: "blaziken",
    },
    {
      id: 259,
      name: "marshtomp",
    },
    {
      id: 260,
      name: "swampert",
    },
    {
      id: 262,
      name: "mightyena",
    },
    {
      id: 264,
      name: "linoone",
    },
    {
      id: 266,
      name: "silcoon",
    },
    {
      id: 267,
      name: "beautifly",
    },
    {
      id: 268,
      name: "cascoon",
    },
    {
      id: 269,
      name: "dustox",
    },
    {
      id: 271,
      name: "lombre",
    },
    {
      id: 272,
      name: "ludicolo",
    },
    {
      id: 274,
      name: "nuzleaf",
    },
    {
      id: 275,
      name: "shiftry",
    },
    {
      id: 277,
      name: "swellow",
    },
    {
      id: 279,
      name: "pelipper",
    },
    {
      id: 281,
      name: "kirlia",
    },
    {
      id: 282,
      name: "gardevoir",
    },
    {
      id: 284,
      name: "masquerain",
    },
    {
      id: 286,
      name: "breloom",
    },
    {
      id: 288,
      name: "vigoroth",
    },
    {
      id: 289,
      name: "slaking",
    },
    {
      id: 291,
      name: "ninjask",
    },
    {
      id: 292,
      name: "shedinja",
    },
    {
      id: 294,
      name: "loudred",
    },
    {
      id: 295,
      name: "exploud",
    },
    {
      id: 297,
      name: "hariyama",
    },
    {
      id: 302,
      name: "sableye",
    },
    {
      id: 303,
      name: "mawile",
    },
    {
      id: 304,
      name: "aron",
    },
    {
      id: 307,
      name: "meditite",
    },
    {
      id: 309,
      name: "electrike",
    },
    {
      id: 311,
      name: "plusle",
    },
    {
      id: 312,
      name: "minun",
    },
    {
      id: 313,
      name: "volbeat",
    },
    {
      id: 314,
      name: "illumise",
    },
    {
      id: 316,
      name: "gulpin",
    },
    {
      id: 318,
      name: "carvanha",
    },
    {
      id: 320,
      name: "wailmer",
    },
    {
      id: 322,
      name: "numel",
    },
    {
      id: 324,
      name: "torkoal",
    },
    {
      id: 325,
      name: "spoink",
    },
    {
      id: 327,
      name: "spinda",
    },
    {
      id: 328,
      name: "trapinch",
    },
    {
      id: 331,
      name: "cacnea",
    },
    {
      id: 333,
      name: "swablu",
    },
    {
      id: 335,
      name: "zangoose",
    },
    {
      id: 336,
      name: "seviper",
    },
    {
      id: 337,
      name: "lunatone",
    },
    {
      id: 338,
      name: "solrock",
    },
    {
      id: 339,
      name: "barboach",
    },
    {
      id: 341,
      name: "corphish",
    },
    {
      id: 343,
      name: "baltoy",
    },
    {
      id: 345,
      name: "lileep",
    },
    {
      id: 347,
      name: "anorith",
    },
    {
      id: 349,
      name: "feebas",
    },
    {
      id: 351,
      name: "castform",
    },
    {
      id: 352,
      name: "kecleon",
    },
    {
      id: 353,
      name: "shuppet",
    },
    {
      id: 355,
      name: "duskull",
    },
    {
      id: 357,
      name: "tropius",
    },
    {
      id: 359,
      name: "absol",
    },
    {
      id: 360,
      name: "wynaut",
    },
    {
      id: 361,
      name: "snorunt",
    },
    {
      id: 363,
      name: "spheal",
    },
    {
      id: 366,
      name: "clamperl",
    },
    {
      id: 369,
      name: "relicanth",
    },
    {
      id: 370,
      name: "luvdisc",
    },
    {
      id: 371,
      name: "bagon",
    },
    {
      id: 374,
      name: "beldum",
    },
    {
      id: 305,
      name: "lairon",
    },
    {
      id: 306,
      name: "aggron",
    },
    {
      id: 308,
      name: "medicham",
    },
    {
      id: 310,
      name: "manectric",
    },
    {
      id: 315,
      name: "roselia",
    },
    {
      id: 317,
      name: "swalot",
    },
    {
      id: 319,
      name: "sharpedo",
    },
    {
      id: 321,
      name: "wailord",
    },
    {
      id: 323,
      name: "camerupt",
    },
    {
      id: 326,
      name: "grumpig",
    },
    {
      id: 329,
      name: "vibrava",
    },
    {
      id: 330,
      name: "flygon",
    },
    {
      id: 332,
      name: "cacturne",
    },
    {
      id: 334,
      name: "altaria",
    },
    {
      id: 340,
      name: "whiscash",
    },
    {
      id: 342,
      name: "crawdaunt",
    },
    {
      id: 344,
      name: "claydol",
    },
    {
      id: 346,
      name: "cradily",
    },
    {
      id: 348,
      name: "armaldo",
    },
    {
      id: 350,
      name: "milotic",
    },
    {
      id: 354,
      name: "banette",
    },
    {
      id: 356,
      name: "dusclops",
    },
    {
      id: 358,
      name: "chimecho",
    },
    {
      id: 362,
      name: "glalie",
    },
    {
      id: 364,
      name: "sealeo",
    },
    {
      id: 365,
      name: "walrein",
    },
    {
      id: 367,
      name: "huntail",
    },
    {
      id: 368,
      name: "gorebyss",
    },
    {
      id: 372,
      name: "shelgon",
    },
    {
      id: 373,
      name: "salamence",
    },
    {
      id: 375,
      name: "metang",
    },
    {
      id: 377,
      name: "regirock",
    },
    {
      id: 378,
      name: "regice",
    },
    {
      id: 379,
      name: "registeel",
    },
    {
      id: 380,
      name: "latias",
    },
    {
      id: 381,
      name: "latios",
    },
    {
      id: 382,
      name: "kyogre",
    },
    {
      id: 383,
      name: "groudon",
    },
    {
      id: 384,
      name: "rayquaza",
    },
    {
      id: 385,
      name: "jirachi",
    },
    {
      id: 386,
      name: "deoxys",
    },
    {
      id: 387,
      name: "turtwig",
    },
    {
      id: 390,
      name: "chimchar",
    },
    {
      id: 393,
      name: "piplup",
    },
    {
      id: 396,
      name: "starly",
    },
    {
      id: 399,
      name: "bidoof",
    },
    {
      id: 401,
      name: "kricketot",
    },
    {
      id: 403,
      name: "shinx",
    },
    {
      id: 406,
      name: "budew",
    },
    {
      id: 408,
      name: "cranidos",
    },
    {
      id: 410,
      name: "shieldon",
    },
    {
      id: 412,
      name: "burmy",
    },
    {
      id: 415,
      name: "combee",
    },
    {
      id: 417,
      name: "pachirisu",
    },
    {
      id: 418,
      name: "buizel",
    },
    {
      id: 420,
      name: "cherubi",
    },
    {
      id: 422,
      name: "shellos",
    },
    {
      id: 425,
      name: "drifloon",
    },
    {
      id: 427,
      name: "buneary",
    },
    {
      id: 431,
      name: "glameow",
    },
    {
      id: 433,
      name: "chingling",
    },
    {
      id: 434,
      name: "stunky",
    },
    {
      id: 436,
      name: "bronzor",
    },
    {
      id: 438,
      name: "bonsly",
    },
    {
      id: 439,
      name: "mime-jr",
    },
    {
      id: 440,
      name: "happiny",
    },
    {
      id: 441,
      name: "chatot",
    },
    {
      id: 442,
      name: "spiritomb",
    },
    {
      id: 443,
      name: "gible",
    },
    {
      id: 446,
      name: "munchlax",
    },
    {
      id: 447,
      name: "riolu",
    },
    {
      id: 449,
      name: "hippopotas",
    },
    {
      id: 451,
      name: "skorupi",
    },
    {
      id: 453,
      name: "croagunk",
    },
    {
      id: 388,
      name: "grotle",
    },
    {
      id: 389,
      name: "torterra",
    },
    {
      id: 392,
      name: "infernape",
    },
    {
      id: 394,
      name: "prinplup",
    },
    {
      id: 395,
      name: "empoleon",
    },
    {
      id: 397,
      name: "staravia",
    },
    {
      id: 398,
      name: "staraptor",
    },
    {
      id: 400,
      name: "bibarel",
    },
    {
      id: 402,
      name: "kricketune",
    },
    {
      id: 404,
      name: "luxio",
    },
    {
      id: 405,
      name: "luxray",
    },
    {
      id: 407,
      name: "roserade",
    },
    {
      id: 409,
      name: "rampardos",
    },
    {
      id: 411,
      name: "bastiodon",
    },
    {
      id: 413,
      name: "wormadam",
    },
    {
      id: 414,
      name: "mothim",
    },
    {
      id: 416,
      name: "vespiquen",
    },
    {
      id: 419,
      name: "floatzel",
    },
    {
      id: 421,
      name: "cherrim",
    },
    {
      id: 424,
      name: "ambipom",
    },
    {
      id: 426,
      name: "drifblim",
    },
    {
      id: 428,
      name: "lopunny",
    },
    {
      id: 429,
      name: "mismagius",
    },
    {
      id: 430,
      name: "honchkrow",
    },
    {
      id: 432,
      name: "purugly",
    },
    {
      id: 435,
      name: "skuntank",
    },
    {
      id: 437,
      name: "bronzong",
    },
    {
      id: 444,
      name: "gabite",
    },
    {
      id: 445,
      name: "garchomp",
    },
    {
      id: 448,
      name: "lucario",
    },
    {
      id: 450,
      name: "hippowdon",
    },
    {
      id: 452,
      name: "drapion",
    },
    {
      id: 455,
      name: "carnivine",
    },
    {
      id: 456,
      name: "finneon",
    },
    {
      id: 458,
      name: "mantyke",
    },
    {
      id: 459,
      name: "snover",
    },
    {
      id: 479,
      name: "rotom",
    },
    {
      id: 480,
      name: "uxie",
    },
    {
      id: 481,
      name: "mesprit",
    },
    {
      id: 482,
      name: "azelf",
    },
    {
      id: 483,
      name: "dialga",
    },
    {
      id: 484,
      name: "palkia",
    },
    {
      id: 485,
      name: "heatran",
    },
    {
      id: 486,
      name: "regigigas",
    },
    {
      id: 487,
      name: "giratina",
    },
    {
      id: 488,
      name: "cresselia",
    },
    {
      id: 489,
      name: "phione",
    },
    {
      id: 490,
      name: "manaphy",
    },
    {
      id: 491,
      name: "darkrai",
    },
    {
      id: 492,
      name: "shaymin",
    },
    {
      id: 493,
      name: "arceus",
    },
    {
      id: 494,
      name: "victini",
    },
    {
      id: 495,
      name: "snivy",
    },
    {
      id: 498,
      name: "tepig",
    },
    {
      id: 501,
      name: "oshawott",
    },
    {
      id: 504,
      name: "patrat",
    },
    {
      id: 506,
      name: "lillipup",
    },
    {
      id: 509,
      name: "purrloin",
    },
    {
      id: 511,
      name: "pansage",
    },
    {
      id: 513,
      name: "pansear",
    },
    {
      id: 515,
      name: "panpour",
    },
    {
      id: 517,
      name: "munna",
    },
    {
      id: 519,
      name: "pidove",
    },
    {
      id: 522,
      name: "blitzle",
    },
    {
      id: 524,
      name: "roggenrola",
    },
    {
      id: 527,
      name: "woobat",
    },
    {
      id: 529,
      name: "drilbur",
    },
    {
      id: 531,
      name: "audino",
    },
    {
      id: 457,
      name: "lumineon",
    },
    {
      id: 460,
      name: "abomasnow",
    },
    {
      id: 461,
      name: "weavile",
    },
    {
      id: 462,
      name: "magnezone",
    },
    {
      id: 463,
      name: "lickilicky",
    },
    {
      id: 464,
      name: "rhyperior",
    },
    {
      id: 465,
      name: "tangrowth",
    },
    {
      id: 466,
      name: "electivire",
    },
    {
      id: 467,
      name: "magmortar",
    },
    {
      id: 468,
      name: "togekiss",
    },
    {
      id: 469,
      name: "yanmega",
    },
    {
      id: 470,
      name: "leafeon",
    },
    {
      id: 471,
      name: "glaceon",
    },
    {
      id: 472,
      name: "gliscor",
    },
    {
      id: 474,
      name: "porygon-z",
    },
    {
      id: 475,
      name: "gallade",
    },
    {
      id: 476,
      name: "probopass",
    },
    {
      id: 477,
      name: "dusknoir",
    },
    {
      id: 478,
      name: "froslass",
    },
    {
      id: 496,
      name: "servine",
    },
    {
      id: 497,
      name: "serperior",
    },
    {
      id: 499,
      name: "pignite",
    },
    {
      id: 500,
      name: "emboar",
    },
    {
      id: 502,
      name: "dewott",
    },
    {
      id: 503,
      name: "samurott",
    },
    {
      id: 505,
      name: "watchog",
    },
    {
      id: 508,
      name: "stoutland",
    },
    {
      id: 510,
      name: "liepard",
    },
    {
      id: 512,
      name: "simisage",
    },
    {
      id: 514,
      name: "simisear",
    },
    {
      id: 516,
      name: "simipour",
    },
    {
      id: 518,
      name: "musharna",
    },
    {
      id: 520,
      name: "tranquill",
    },
    {
      id: 521,
      name: "unfezant",
    },
    {
      id: 523,
      name: "zebstrika",
    },
    {
      id: 525,
      name: "boldore",
    },
    {
      id: 526,
      name: "gigalith",
    },
    {
      id: 528,
      name: "swoobat",
    },
    {
      id: 530,
      name: "excadrill",
    },
    {
      id: 532,
      name: "timburr",
    },
    {
      id: 535,
      name: "tympole",
    },
    {
      id: 538,
      name: "throh",
    },
    {
      id: 539,
      name: "sawk",
    },
    {
      id: 540,
      name: "sewaddle",
    },
    {
      id: 543,
      name: "venipede",
    },
    {
      id: 546,
      name: "cottonee",
    },
    {
      id: 548,
      name: "petilil",
    },
    {
      id: 550,
      name: "basculin",
    },
    {
      id: 551,
      name: "sandile",
    },
    {
      id: 554,
      name: "darumaka",
    },
    {
      id: 556,
      name: "maractus",
    },
    {
      id: 557,
      name: "dwebble",
    },
    {
      id: 559,
      name: "scraggy",
    },
    {
      id: 561,
      name: "sigilyph",
    },
    {
      id: 562,
      name: "yamask",
    },
    {
      id: 564,
      name: "tirtouga",
    },
    {
      id: 566,
      name: "archen",
    },
    {
      id: 568,
      name: "trubbish",
    },
    {
      id: 570,
      name: "zorua",
    },
    {
      id: 572,
      name: "minccino",
    },
    {
      id: 574,
      name: "gothita",
    },
    {
      id: 577,
      name: "solosis",
    },
    {
      id: 580,
      name: "ducklett",
    },
    {
      id: 582,
      name: "vanillite",
    },
    {
      id: 585,
      name: "deerling",
    },
    {
      id: 587,
      name: "emolga",
    },
    {
      id: 588,
      name: "karrablast",
    },
    {
      id: 590,
      name: "foongus",
    },
    {
      id: 592,
      name: "frillish",
    },
    {
      id: 594,
      name: "alomomola",
    },
    {
      id: 595,
      name: "joltik",
    },
    {
      id: 597,
      name: "ferroseed",
    },
    {
      id: 599,
      name: "klink",
    },
    {
      id: 602,
      name: "tynamo",
    },
    {
      id: 605,
      name: "elgyem",
    },
    {
      id: 607,
      name: "litwick",
    },
    {
      id: 534,
      name: "conkeldurr",
    },
    {
      id: 536,
      name: "palpitoad",
    },
    {
      id: 537,
      name: "seismitoad",
    },
    {
      id: 541,
      name: "swadloon",
    },
    {
      id: 542,
      name: "leavanny",
    },
    {
      id: 544,
      name: "whirlipede",
    },
    {
      id: 545,
      name: "scolipede",
    },
    {
      id: 547,
      name: "whimsicott",
    },
    {
      id: 549,
      name: "lilligant",
    },
    {
      id: 552,
      name: "krokorok",
    },
    {
      id: 553,
      name: "krookodile",
    },
    {
      id: 555,
      name: "darmanitan",
    },
    {
      id: 558,
      name: "crustle",
    },
    {
      id: 560,
      name: "scrafty",
    },
    {
      id: 565,
      name: "carracosta",
    },
    {
      id: 567,
      name: "archeops",
    },
    {
      id: 569,
      name: "garbodor",
    },
    {
      id: 571,
      name: "zoroark",
    },
    {
      id: 573,
      name: "cinccino",
    },
    {
      id: 575,
      name: "gothorita",
    },
    {
      id: 576,
      name: "gothitelle",
    },
    {
      id: 578,
      name: "duosion",
    },
    {
      id: 579,
      name: "reuniclus",
    },
    {
      id: 581,
      name: "swanna",
    },
    {
      id: 583,
      name: "vanillish",
    },
    {
      id: 584,
      name: "vanilluxe",
    },
    {
      id: 586,
      name: "sawsbuck",
    },
    {
      id: 589,
      name: "escavalier",
    },
    {
      id: 591,
      name: "amoonguss",
    },
    {
      id: 593,
      name: "jellicent",
    },
    {
      id: 596,
      name: "galvantula",
    },
    {
      id: 598,
      name: "ferrothorn",
    },
    {
      id: 600,
      name: "klang",
    },
    {
      id: 603,
      name: "eelektrik",
    },
    {
      id: 604,
      name: "eelektross",
    },
    {
      id: 606,
      name: "beheeyem",
    },
    {
      id: 608,
      name: "lampent",
    },
    {
      id: 610,
      name: "axew",
    },
    {
      id: 613,
      name: "cubchoo",
    },
    {
      id: 615,
      name: "cryogonal",
    },
    {
      id: 616,
      name: "shelmet",
    },
    {
      id: 618,
      name: "stunfisk",
    },
    {
      id: 619,
      name: "mienfoo",
    },
    {
      id: 621,
      name: "druddigon",
    },
    {
      id: 622,
      name: "golett",
    },
    {
      id: 624,
      name: "pawniard",
    },
    {
      id: 626,
      name: "bouffalant",
    },
    {
      id: 627,
      name: "rufflet",
    },
    {
      id: 629,
      name: "vullaby",
    },
    {
      id: 631,
      name: "heatmor",
    },
    {
      id: 632,
      name: "durant",
    },
    {
      id: 633,
      name: "deino",
    },
    {
      id: 636,
      name: "larvesta",
    },
    {
      id: 638,
      name: "cobalion",
    },
    {
      id: 639,
      name: "terrakion",
    },
    {
      id: 640,
      name: "virizion",
    },
    {
      id: 641,
      name: "tornadus",
    },
    {
      id: 642,
      name: "thundurus",
    },
    {
      id: 643,
      name: "reshiram",
    },
    {
      id: 644,
      name: "zekrom",
    },
    {
      id: 645,
      name: "landorus",
    },
    {
      id: 646,
      name: "kyurem",
    },
    {
      id: 647,
      name: "keldeo",
    },
    {
      id: 648,
      name: "meloetta",
    },
    {
      id: 649,
      name: "genesect",
    },
    {
      id: 650,
      name: "chespin",
    },
    {
      id: 653,
      name: "fennekin",
    },
    {
      id: 656,
      name: "froakie",
    },
    {
      id: 659,
      name: "bunnelby",
    },
    {
      id: 661,
      name: "fletchling",
    },
    {
      id: 664,
      name: "scatterbug",
    },
    {
      id: 667,
      name: "litleo",
    },
    {
      id: 669,
      name: "flabebe",
    },
    {
      id: 672,
      name: "skiddo",
    },
    {
      id: 674,
      name: "pancham",
    },
    {
      id: 676,
      name: "furfrou",
    },
    {
      id: 677,
      name: "espurr",
    },
    {
      id: 679,
      name: "honedge",
    },
    {
      id: 682,
      name: "spritzee",
    },
    {
      id: 684,
      name: "swirlix",
    },
    {
      id: 686,
      name: "inkay",
    },
    {
      id: 611,
      name: "fraxure",
    },
    {
      id: 612,
      name: "haxorus",
    },
    {
      id: 614,
      name: "beartic",
    },
    {
      id: 617,
      name: "accelgor",
    },
    {
      id: 623,
      name: "golurk",
    },
    {
      id: 625,
      name: "bisharp",
    },
    {
      id: 628,
      name: "braviary",
    },
    {
      id: 630,
      name: "mandibuzz",
    },
    {
      id: 634,
      name: "zweilous",
    },
    {
      id: 635,
      name: "hydreigon",
    },
    {
      id: 637,
      name: "volcarona",
    },
    {
      id: 651,
      name: "quilladin",
    },
    {
      id: 652,
      name: "chesnaught",
    },
    {
      id: 654,
      name: "braixen",
    },
    {
      id: 655,
      name: "delphox",
    },
    {
      id: 657,
      name: "frogadier",
    },
    {
      id: 658,
      name: "greninja",
    },
    {
      id: 660,
      name: "diggersby",
    },
    {
      id: 662,
      name: "fletchinder",
    },
    {
      id: 663,
      name: "talonflame",
    },
    {
      id: 665,
      name: "spewpa",
    },
    {
      id: 668,
      name: "pyroar",
    },
    {
      id: 670,
      name: "floette",
    },
    {
      id: 671,
      name: "florges",
    },
    {
      id: 673,
      name: "gogoat",
    },
    {
      id: 675,
      name: "pangoro",
    },
    {
      id: 678,
      name: "meowstic",
    },
    {
      id: 680,
      name: "doublade",
    },
    {
      id: 681,
      name: "aegislash",
    },
    {
      id: 683,
      name: "aromatisse",
    },
    {
      id: 685,
      name: "slurpuff",
    },
    {
      id: 688,
      name: "binacle",
    },
    {
      id: 690,
      name: "skrelp",
    },
    {
      id: 692,
      name: "clauncher",
    },
    {
      id: 694,
      name: "helioptile",
    },
    {
      id: 696,
      name: "tyrunt",
    },
    {
      id: 698,
      name: "amaura",
    },
    {
      id: 701,
      name: "hawlucha",
    },
    {
      id: 702,
      name: "dedenne",
    },
    {
      id: 703,
      name: "carbink",
    },
    {
      id: 704,
      name: "goomy",
    },
    {
      id: 707,
      name: "klefki",
    },
    {
      id: 708,
      name: "phantump",
    },
    {
      id: 710,
      name: "pumpkaboo",
    },
    {
      id: 712,
      name: "bergmite",
    },
    {
      id: 714,
      name: "noibat",
    },
    {
      id: 716,
      name: "xerneas",
    },
    {
      id: 717,
      name: "yveltal",
    },
    {
      id: 718,
      name: "zygarde",
    },
    {
      id: 719,
      name: "diancie",
    },
    {
      id: 720,
      name: "hoopa",
    },
    {
      id: 721,
      name: "volcanion",
    },
    {
      id: 722,
      name: "rowlet",
    },
    {
      id: 725,
      name: "litten",
    },
    {
      id: 728,
      name: "popplio",
    },
    {
      id: 731,
      name: "pikipek",
    },
    {
      id: 734,
      name: "yungoos",
    },
    {
      id: 736,
      name: "grubbin",
    },
    {
      id: 739,
      name: "crabrawler",
    },
    {
      id: 741,
      name: "oricorio",
    },
    {
      id: 742,
      name: "cutiefly",
    },
    {
      id: 744,
      name: "rockruff",
    },
    {
      id: 746,
      name: "wishiwashi",
    },
    {
      id: 747,
      name: "mareanie",
    },
    {
      id: 749,
      name: "mudbray",
    },
    {
      id: 751,
      name: "dewpider",
    },
    {
      id: 753,
      name: "fomantis",
    },
    {
      id: 755,
      name: "morelull",
    },
    {
      id: 757,
      name: "salandit",
    },
    {
      id: 759,
      name: "stufful",
    },
    {
      id: 761,
      name: "bounsweet",
    },
    {
      id: 764,
      name: "comfey",
    },
    {
      id: 689,
      name: "barbaracle",
    },
    {
      id: 691,
      name: "dragalge",
    },
    {
      id: 693,
      name: "clawitzer",
    },
    {
      id: 695,
      name: "heliolisk",
    },
    {
      id: 699,
      name: "aurorus",
    },
    {
      id: 700,
      name: "sylveon",
    },
    {
      id: 705,
      name: "sliggoo",
    },
    {
      id: 706,
      name: "goodra",
    },
    {
      id: 709,
      name: "trevenant",
    },
    {
      id: 711,
      name: "gourgeist",
    },
    {
      id: 713,
      name: "avalugg",
    },
    {
      id: 715,
      name: "noivern",
    },
    {
      id: 723,
      name: "dartrix",
    },
    {
      id: 724,
      name: "decidueye",
    },
    {
      id: 726,
      name: "torracat",
    },
    {
      id: 727,
      name: "incineroar",
    },
    {
      id: 730,
      name: "primarina",
    },
    {
      id: 732,
      name: "trumbeak",
    },
    {
      id: 733,
      name: "toucannon",
    },
    {
      id: 735,
      name: "gumshoos",
    },
    {
      id: 737,
      name: "charjabug",
    },
    {
      id: 738,
      name: "vikavolt",
    },
    {
      id: 740,
      name: "crabominable",
    },
    {
      id: 743,
      name: "ribombee",
    },
    {
      id: 745,
      name: "lycanroc",
    },
    {
      id: 748,
      name: "toxapex",
    },
    {
      id: 750,
      name: "mudsdale",
    },
    {
      id: 752,
      name: "araquanid",
    },
    {
      id: 754,
      name: "lurantis",
    },
    {
      id: 756,
      name: "shiinotic",
    },
    {
      id: 758,
      name: "salazzle",
    },
    {
      id: 760,
      name: "bewear",
    },
    {
      id: 762,
      name: "steenee",
    },
    {
      id: 765,
      name: "oranguru",
    },
    {
      id: 766,
      name: "passimian",
    },
    {
      id: 767,
      name: "wimpod",
    },
    {
      id: 769,
      name: "sandygast",
    },
    {
      id: 771,
      name: "pyukumuku",
    },
    {
      id: 772,
      name: "type-null",
    },
    {
      id: 774,
      name: "minior",
    },
    {
      id: 775,
      name: "komala",
    },
    {
      id: 776,
      name: "turtonator",
    },
    {
      id: 777,
      name: "togedemaru",
    },
    {
      id: 778,
      name: "mimikyu",
    },
    {
      id: 779,
      name: "bruxish",
    },
    {
      id: 780,
      name: "drampa",
    },
    {
      id: 781,
      name: "dhelmise",
    },
    {
      id: 782,
      name: "jangmo-o",
    },
    {
      id: 785,
      name: "tapu-koko",
    },
    {
      id: 786,
      name: "tapu-lele",
    },
    {
      id: 787,
      name: "tapu-bulu",
    },
    {
      id: 788,
      name: "tapu-fini",
    },
    {
      id: 789,
      name: "cosmog",
    },
    {
      id: 793,
      name: "nihilego",
    },
    {
      id: 794,
      name: "buzzwole",
    },
    {
      id: 795,
      name: "pheromosa",
    },
    {
      id: 796,
      name: "xurkitree",
    },
    {
      id: 797,
      name: "celesteela",
    },
    {
      id: 798,
      name: "kartana",
    },
    {
      id: 799,
      name: "guzzlord",
    },
    {
      id: 800,
      name: "necrozma",
    },
    {
      id: 801,
      name: "magearna",
    },
    {
      id: 802,
      name: "marshadow",
    },
    {
      id: 803,
      name: "poipole",
    },
    {
      id: 805,
      name: "stakataka",
    },
    {
      id: 806,
      name: "blacephalon",
    },
    {
      id: 807,
      name: "zeraora",
    },
    {
      id: 808,
      name: "meltan",
    },
    {
      id: 810,
      name: "grookey",
    },
    {
      id: 813,
      name: "scorbunny",
    },
    {
      id: 816,
      name: "sobble",
    },
    {
      id: 819,
      name: "skwovet",
    },
    {
      id: 821,
      name: "rookidee",
    },
    {
      id: 824,
      name: "blipbug",
    },
    {
      id: 827,
      name: "nickit",
    },
    {
      id: 829,
      name: "gossifleur",
    },
    {
      id: 831,
      name: "wooloo",
    },
    {
      id: 833,
      name: "chewtle",
    },
    {
      id: 835,
      name: "yamper",
    },
    {
      id: 837,
      name: "rolycoly",
    },
    {
      id: 840,
      name: "applin",
    },
    {
      id: 921,
      name: "pawmi",
    },
    {
      id: 773,
      name: "silvally",
    },
    {
      id: 783,
      name: "hakamo-o",
    },
    {
      id: 784,
      name: "kommo-o",
    },
    {
      id: 790,
      name: "cosmoem",
    },
    {
      id: 791,
      name: "solgaleo",
    },
    {
      id: 792,
      name: "lunala",
    },
    {
      id: 804,
      name: "naganadel",
    },
    {
      id: 809,
      name: "melmetal",
    },
    {
      id: 811,
      name: "thwackey",
    },
    {
      id: 812,
      name: "rillaboom",
    },
    {
      id: 814,
      name: "raboot",
    },
    {
      id: 815,
      name: "cinderace",
    },
    {
      id: 817,
      name: "drizzile",
    },
    {
      id: 818,
      name: "inteleon",
    },
    {
      id: 820,
      name: "greedent",
    },
    {
      id: 822,
      name: "corvisquire",
    },
    {
      id: 823,
      name: "corviknight",
    },
    {
      id: 825,
      name: "dottler",
    },
    {
      id: 828,
      name: "thievul",
    },
    {
      id: 830,
      name: "eldegoss",
    },
    {
      id: 832,
      name: "dubwool",
    },
    {
      id: 834,
      name: "drednaw",
    },
    {
      id: 836,
      name: "boltund",
    },
    {
      id: 838,
      name: "carkol",
    },
    {
      id: 839,
      name: "coalossal",
    },
    {
      id: 841,
      name: "flapple",
    },
    {
      id: 843,
      name: "silicobra",
    },
    {
      id: 845,
      name: "cramorant",
    },
    {
      id: 846,
      name: "arrokuda",
    },
    {
      id: 848,
      name: "toxel",
    },
    {
      id: 850,
      name: "sizzlipede",
    },
    {
      id: 852,
      name: "clobbopus",
    },
    {
      id: 854,
      name: "sinistea",
    },
    {
      id: 856,
      name: "hatenna",
    },
    {
      id: 859,
      name: "impidimp",
    },
    {
      id: 868,
      name: "milcery",
    },
    {
      id: 870,
      name: "falinks",
    },
    {
      id: 871,
      name: "pincurchin",
    },
    {
      id: 872,
      name: "snom",
    },
    {
      id: 874,
      name: "stonjourner",
    },
    {
      id: 875,
      name: "eiscue",
    },
    {
      id: 876,
      name: "indeedee",
    },
    {
      id: 877,
      name: "morpeko",
    },
    {
      id: 878,
      name: "cufant",
    },
    {
      id: 880,
      name: "dracozolt",
    },
    {
      id: 881,
      name: "arctozolt",
    },
    {
      id: 882,
      name: "dracovish",
    },
    {
      id: 883,
      name: "arctovish",
    },
    {
      id: 884,
      name: "duraludon",
    },
    {
      id: 885,
      name: "dreepy",
    },
    {
      id: 888,
      name: "zacian",
    },
    {
      id: 889,
      name: "zamazenta",
    },
    {
      id: 890,
      name: "eternatus",
    },
    {
      id: 891,
      name: "kubfu",
    },
    {
      id: 893,
      name: "zarude",
    },
    {
      id: 894,
      name: "regieleki",
    },
    {
      id: 895,
      name: "regidrago",
    },
    {
      id: 896,
      name: "glastrier",
    },
    {
      id: 897,
      name: "spectrier",
    },
    {
      id: 898,
      name: "calyrex",
    },
    {
      id: 905,
      name: "enamorus",
    },
    {
      id: 906,
      name: "sprigatito",
    },
    {
      id: 909,
      name: "fuecoco",
    },
    {
      id: 912,
      name: "quaxly",
    },
    {
      id: 915,
      name: "lechonk",
    },
    {
      id: 917,
      name: "tarountula",
    },
    {
      id: 919,
      name: "nymble",
    },
    {
      id: 844,
      name: "sandaconda",
    },
    {
      id: 847,
      name: "barraskewda",
    },
    {
      id: 849,
      name: "toxtricity",
    },
    {
      id: 853,
      name: "grapploct",
    },
    {
      id: 855,
      name: "polteageist",
    },
    {
      id: 857,
      name: "hattrem",
    },
    {
      id: 858,
      name: "hatterene",
    },
    {
      id: 860,
      name: "morgrem",
    },
    {
      id: 861,
      name: "grimmsnarl",
    },
    {
      id: 862,
      name: "obstagoon",
    },
    {
      id: 863,
      name: "perrserker",
    },
    {
      id: 864,
      name: "cursola",
    },
    {
      id: 865,
      name: "sirfetchd",
    },
    {
      id: 866,
      name: "mr-rime",
    },
    {
      id: 867,
      name: "runerigus",
    },
    {
      id: 869,
      name: "alcremie",
    },
    {
      id: 873,
      name: "frosmoth",
    },
    {
      id: 879,
      name: "copperajah",
    },
    {
      id: 886,
      name: "drakloak",
    },
    {
      id: 887,
      name: "dragapult",
    },
    {
      id: 892,
      name: "urshifu",
    },
    {
      id: 899,
      name: "wyrdeer",
    },
    {
      id: 900,
      name: "kleavor",
    },
    {
      id: 902,
      name: "basculegion",
    },
    {
      id: 903,
      name: "sneasler",
    },
    {
      id: 904,
      name: "overqwil",
    },
    {
      id: 907,
      name: "floragato",
    },
    {
      id: 908,
      name: "meowscarada",
    },
    {
      id: 910,
      name: "crocalor",
    },
    {
      id: 913,
      name: "quaxwell",
    },
    {
      id: 914,
      name: "quaquaval",
    },
    {
      id: 916,
      name: "oinkologne",
    },
    {
      id: 918,
      name: "spidops",
    },
    {
      id: 920,
      name: "lokix",
    },
    {
      id: 924,
      name: "tandemaus",
    },
    {
      id: 926,
      name: "fidough",
    },
    {
      id: 928,
      name: "smoliv",
    },
    {
      id: 931,
      name: "squawkabilly",
    },
    {
      id: 932,
      name: "nacli",
    },
    {
      id: 935,
      name: "charcadet",
    },
    {
      id: 938,
      name: "tadbulb",
    },
    {
      id: 940,
      name: "wattrel",
    },
    {
      id: 942,
      name: "maschiff",
    },
    {
      id: 944,
      name: "shroodle",
    },
    {
      id: 946,
      name: "bramblin",
    },
    {
      id: 948,
      name: "toedscool",
    },
    {
      id: 950,
      name: "klawf",
    },
    {
      id: 951,
      name: "capsakid",
    },
    {
      id: 953,
      name: "rellor",
    },
    {
      id: 955,
      name: "flittle",
    },
    {
      id: 957,
      name: "tinkatink",
    },
    {
      id: 960,
      name: "wiglett",
    },
    {
      id: 962,
      name: "bombirdier",
    },
    {
      id: 963,
      name: "finizen",
    },
    {
      id: 965,
      name: "varoom",
    },
    {
      id: 967,
      name: "cyclizar",
    },
    {
      id: 968,
      name: "orthworm",
    },
    {
      id: 969,
      name: "glimmet",
    },
    {
      id: 971,
      name: "greavard",
    },
    {
      id: 973,
      name: "flamigo",
    },
    {
      id: 974,
      name: "cetoddle",
    },
    {
      id: 976,
      name: "veluza",
    },
    {
      id: 977,
      name: "dondozo",
    },
    {
      id: 978,
      name: "tatsugiri",
    },
    {
      id: 984,
      name: "great-tusk",
    },
    {
      id: 985,
      name: "scream-tail",
    },
    {
      id: 986,
      name: "brute-bonnet",
    },
    {
      id: 987,
      name: "flutter-mane",
    },
    {
      id: 988,
      name: "slither-wing",
    },
    {
      id: 989,
      name: "sandy-shocks",
    },
    {
      id: 990,
      name: "iron-treads",
    },
    {
      id: 991,
      name: "iron-bundle",
    },
    {
      id: 992,
      name: "iron-hands",
    },
    {
      id: 993,
      name: "iron-jugulis",
    },
    {
      id: 994,
      name: "iron-moth",
    },
    {
      id: 995,
      name: "iron-thorns",
    },
    {
      id: 996,
      name: "frigibax",
    },
    {
      id: 999,
      name: "gimmighoul",
    },
    {
      id: 1001,
      name: "wo-chien",
    },
    {
      id: 1002,
      name: "chien-pao",
    },
    {
      id: 923,
      name: "pawmot",
    },
    {
      id: 927,
      name: "dachsbun",
    },
    {
      id: 929,
      name: "dolliv",
    },
    {
      id: 930,
      name: "arboliva",
    },
    {
      id: 933,
      name: "naclstack",
    },
    {
      id: 934,
      name: "garganacl",
    },
    {
      id: 936,
      name: "armarouge",
    },
    {
      id: 937,
      name: "ceruledge",
    },
    {
      id: 939,
      name: "bellibolt",
    },
    {
      id: 941,
      name: "kilowattrel",
    },
    {
      id: 945,
      name: "grafaiai",
    },
    {
      id: 947,
      name: "brambleghast",
    },
    {
      id: 949,
      name: "toedscruel",
    },
    {
      id: 952,
      name: "scovillain",
    },
    {
      id: 954,
      name: "rabsca",
    },
    {
      id: 956,
      name: "espathra",
    },
    {
      id: 958,
      name: "tinkatuff",
    },
    {
      id: 959,
      name: "tinkaton",
    },
    {
      id: 961,
      name: "wugtrio",
    },
    {
      id: 964,
      name: "palafin",
    },
    {
      id: 966,
      name: "revavroom",
    },
    {
      id: 972,
      name: "houndstone",
    },
    {
      id: 975,
      name: "cetitan",
    },
    {
      id: 979,
      name: "annihilape",
    },
    {
      id: 980,
      name: "clodsire",
    },
    {
      id: 981,
      name: "farigiraf",
    },
    {
      id: 982,
      name: "dudunsparce",
    },
    {
      id: 983,
      name: "kingambit",
    },
    {
      id: 997,
      name: "arctibax",
    },
    {
      id: 1000,
      name: "gholdengo",
    },
    {
      id: 1003,
      name: "ting-lu",
    },
    {
      id: 1004,
      name: "chi-yu",
    },
    {
      id: 1005,
      name: "roaring-moon",
    },
    {
      id: 1006,
      name: "iron-valiant",
    },
    {
      id: 1007,
      name: "koraidon",
    },
    {
      id: 1008,
      name: "miraidon",
    },
    {
      id: 1009,
      name: "walking-wake",
    },
    {
      id: 1010,
      name: "iron-leaves",
    },
    {
      id: 1012,
      name: "poltchageist",
    },
    {
      id: 1014,
      name: "okidogi",
    },
    {
      id: 1015,
      name: "munkidori",
    },
    {
      id: 1016,
      name: "fezandipiti",
    },
    {
      id: 1017,
      name: "ogerpon",
    },
    {
      id: 2,
      name: "ivysaur",
    },
    {
      id: 76,
      name: "golem",
    },
    {
      id: 153,
      name: "bayleef",
    },
    {
      id: 226,
      name: "mantine",
    },
    {
      id: 301,
      name: "delcatty",
    },
    {
      id: 376,
      name: "metagross",
    },
    {
      id: 391,
      name: "monferno",
    },
    {
      id: 423,
      name: "gastrodon",
    },
    {
      id: 454,
      name: "toxicroak",
    },
    {
      id: 473,
      name: "mamoswine",
    },
    {
      id: 507,
      name: "herdier",
    },
    {
      id: 533,
      name: "gurdurr",
    },
    {
      id: 563,
      name: "cofagrigus",
    },
    {
      id: 601,
      name: "klinklang",
    },
    {
      id: 609,
      name: "chandelure",
    },
    {
      id: 620,
      name: "mienshao",
    },
    {
      id: 666,
      name: "vivillon",
    },
    {
      id: 687,
      name: "malamar",
    },
    {
      id: 697,
      name: "tyrantrum",
    },
    {
      id: 729,
      name: "brionne",
    },
    {
      id: 763,
      name: "tsareena",
    },
    {
      id: 768,
      name: "golisopod",
    },
    {
      id: 770,
      name: "palossand",
    },
    {
      id: 826,
      name: "orbeetle",
    },
    {
      id: 842,
      name: "appletun",
    },
    {
      id: 851,
      name: "centiskorch",
    },
    {
      id: 901,
      name: "ursaluna",
    },
    {
      id: 911,
      name: "skeledirge",
    },
    {
      id: 922,
      name: "pawmo",
    },
    {
      id: 925,
      name: "maushold",
    },
    {
      id: 943,
      name: "mabosstiff",
    },
    {
      id: 970,
      name: "glimmora",
    },
    {
      id: 998,
      name: "baxcalibur",
    },
    {
      id: 1011,
      name: "dipplin",
    },
    {
      id: 1013,
      name: "sinistcha",
    },
  ];

  return names;
}
