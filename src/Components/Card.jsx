import { useEffect, useState } from "react";
import "../Styles/Card.css";
import "../Styles/CardTypeColors.css";
import "../Styles/CardVirado.css";
import { getStats, soma } from "./GetStats";
import { apiSpecies } from "../services/api";
import SearchTypeUrl from "./SearchTypeUrl";
import GetTypeAverage from "./GetTypeAverage";

export default function Card ({ randomPokemon, handleImageLoaded, isCardVisible }) {
  const [firstType, setFirstType] = useState("");
  const [secondType, setSecondType] = useState("");
  const imagem =
    randomPokemon.sprites.other["official-artwork"].front_default;
  const stats = getStats(randomPokemon);
  const firstStats = stats.slice(0, Math.ceil(stats.length / 2));
  const secondStats = stats.slice(Math.ceil(stats.length / 2), stats.length);
  const somaStats = soma(randomPokemon);
  const idsRaros = [
    35, 36, 37, 50, 51, 52, 58, 63, 64, 74, 75, 76, 77, 80, 82, 83, 85, 86, 90,
    93, 94, 95, 100, 102, 103, 104, 116, 135, 144, 145, 146, 147, 150, 151, 186,
    187, 188, 190, 191, 201, 210, 384, 385, 492, 648, 721, 722, 723, 724, 725,
    726, 727, 728, 809, 809, 890, 890,
  ];
  const [virada, setVirada] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [maxIndex, setMaxIndex] = useState(0);
  const [description, setDescription] = useState("");
  const { contentUm, contentDois } = SearchTypeUrl(randomPokemon);
  const [urlTypeUm, setUrlTypeUm] = useState("");
  const [urlTypeDois, setUrlTypeDois] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const virarCarta = () => {
    setVirada(!virada);
  };

  useEffect(() => {
    setUrlTypeUm(contentUm);
    setUrlTypeDois(contentDois);
  }, [contentUm, contentDois]);

  console.log(pokemonSpecies, randomPokemon);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const response = await apiSpecies.get(`${randomPokemon.id}`);
        setPokemonSpecies(response.data);
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };
    fetchPokemonSpecies();
  }, [randomPokemon.id]);

  useEffect(() => {
    if (pokemonSpecies && pokemonSpecies.flavor_text_entries) {
      const flavorTextEntries = pokemonSpecies.flavor_text_entries;
      if (flavorTextEntries.length > 0) {
        flavorTextEntries.forEach((entry, index) => {
          if (
            entry.flavor_text &&
            index > maxIndex &&
            pokemonSpecies.flavor_text_entries[index].language.name === "en"
          ) {
            setMaxIndex(index);
            setDescription(
              `${pokemonSpecies.flavor_text_entries[index].flavor_text}`
            );
          }
        });
      }
    }
  }, [pokemonSpecies, maxIndex]);

  useEffect(() => {
    if (randomPokemon.types.length === 1) {
      setFirstType(randomPokemon.types[0].type.name);
      setSecondType("");
    }
    if (randomPokemon.types.length === 2) {
      setFirstType(randomPokemon.types[0].type.name);
      setSecondType(randomPokemon.types[1].type.name);
    }
  }, [randomPokemon.types]);

  const tipagem =
    secondType !== "" && secondType !== null ? (
      <span className="tipagem_texto">
        {firstType} / {secondType}
      </span>
    ) : (
      <span className="tipagem_texto">{firstType}</span>
    );

  const classificarRaridade = (somaStats, id) => {
    if (somaStats <= 150) {
      if (idsRaros.includes(id)) {
        return "COMUM-";
      }
      return "COMUM";
    } else if (somaStats <= 400) {
      if (idsRaros.includes(id)) {
        return "INCOMUM-";
      }
      return "INCOMUM";
    } else if (somaStats <= 450) {
      if (idsRaros.includes(id)) {
        return "RARO-";
      }
      return "RARO";
    } else if (somaStats <= 500) {
      if (idsRaros.includes(id)) {
        return "MUITO-RARO-";
      }
      return "MUITO-RARO";
    } else if (somaStats <= 550) {
      if (idsRaros.includes(id)) {
        return "ULTRA-RARO-";
      }
      return "ULTRA-RARO";
    } else if (somaStats <= 600) {
      if (idsRaros.includes(id)) {
        return "LENDÁRIO-";
      }
      return "LENDÁRIO";
    } else if (somaStats <= 650) {
      if (idsRaros.includes(id)) {
        return "MÍTICO-";
      }
      return "MÍTICO";
    } else if (somaStats > 650) {
      if (idsRaros.includes(id)) {
        return "DIVINO-";
      }
      return "DIVINO";
    }
  };

  const handleImageLoad = () => {
    setImagesLoaded(true);
    handleImageLoaded();
  };

  console.log(isCardVisible);
  return (
    <>
      <div className="container_carta">
        {!virada && (
          <div className={`carta ${firstType}_carta `} onClick={virarCarta} style={{ opacity: isCardVisible }}>
            <div className="topo_carta">
              <div className="nome_pokemon">
                <span>{randomPokemon.name.replace(/-/g, " ")}</span>
              </div>
              <div className="bloco_raridade">
                <div
                  className={`container_raridade ${classificarRaridade(
                    somaStats
                  )}`}
                  // className="container_raridade MÍTICO" // teste
                >
                  <div className="raridade">
                    {classificarRaridade(
                      somaStats,
                      randomPokemon.id
                    ).replace(/-/g, " ")}
                  </div>
                </div>
              </div>
            </div>
            <div className="container_imagem_carta">
              <img
                src={imagem}
                className="imagem_carta"
                alt={`imagem do ${randomPokemon.name}`}
                onLoad={handleImageLoad}
              ></img>
            </div>
            <div className="conteudo_carta">
              <div className="container_conteudo_carta_esquerdo">
                {firstStats.map((stat, index) => (
                  <div key={index} className="status">
                    <span className="stats_name">{stat.statsName}</span>:{" "}
                    <span className="stats_values">{stat.statsValues}</span>
                  </div>
                ))}
              </div>
              <div className="container_conteudo_carta_direito">
                {secondStats.map((stat, index) => (
                  <div key={index} className="status">
                    <span className="stats_name">{stat.statsName}</span>:{" "}
                    <span className="stats_values">{stat.statsValues}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rodape_carta">
              <div className="status_total">POWER MAX: {somaStats}</div>
              <div className={`tipagem ${firstType}_${secondType}`}>
                {tipagem}
              </div>
            </div>
          </div>
        )}
        {virada && (
          <div className="container_carta">
            <div className={`carta ${firstType}_carta `} onClick={virarCarta}>
              <div className="container_conteudo_virado">
                <div className="container_imagens_virado">
                  <div className="container_imagem_esquerda_virado">
                    {randomPokemon.sprites.front_default ? (
                      <img
                        className="imagem_esquerda_virado"
                        src={randomPokemon.sprites.front_default}
                        alt={`Imagem In Game de ${randomPokemon.name}`}
                      />
                    ) : (
                      <span className="span_imagem_virado">
                        Não há imagens da frente do pokemon
                      </span>
                    )}
                  </div>
                  <div className="container_imagem_direita_virado">
                    {randomPokemon.sprites.back_default ? (
                      <img
                        className="imagem_direita_virado"
                        src={randomPokemon.sprites.back_default}
                        alt={`Imagem In Game de ${randomPokemon.name}`}
                      />
                    ) : (
                      <span className="span_imagem_virado">
                        Não há imagens das costas do pokemon
                      </span>
                    )}
                  </div>
                </div>
                <div className="container_descrição_virado">
                  <div className="moldura_descrição_virado">
                    <span className="descrição_virado">{description}</span>
                  </div>
                </div>
                <div className="container_fraquezas_virado">
                </div>
                <div className="container_arvore_evolutiva_virado"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
