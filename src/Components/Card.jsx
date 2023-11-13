import { useEffect, useState } from "react";
import "../Styles/Card.css";
import "../Styles/CardTypeColors.css";
import "../Styles/CardVirado.css";
import { getStats, soma } from "./GetStats";
import { apiSpecies } from "../services/api";
import SearchTypeUrl from "./SearchTypeUrl";
import TypeAverageIcons from "./TypeAverageIcon";
import SearchEvoUrl from "./SearchEvoUrl";
import PropTypes from "prop-types";
import GetGen from "./GetGen";
import TranslatedDescription from "./TranslatedDescription";
import GetMainImage from "./GetMainImage";

export default function Card({
  randomPokemon,
  handleImageLoaded,
  isCardVisible,
}) {
  Card.propTypes = {
    randomPokemon: PropTypes.object.isRequired,
    handleImageLoaded: PropTypes.func.isRequired,
    isCardVisible: PropTypes.bool.isRequired,
  };

  const [firstType, setFirstType] = useState("");
  const [secondType, setSecondType] = useState("");
  const [itsShiny, setItsShiny] = useState(false);
  const imagem = GetMainImage(randomPokemon, itsShiny);
  const stats = getStats(randomPokemon);
  const firstStats = stats.slice(0, Math.ceil(stats.length / 2));
  const secondStats = stats.slice(Math.ceil(stats.length / 2), stats.length);
  const somaStats = soma(randomPokemon);
  const [virada, setVirada] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const combinedTypeAverages = SearchTypeUrl(randomPokemon);
  // eslint-disable-next-line no-unused-vars
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [getGen, setGetGen] = useState("");
  const pokemonsDescriptions = TranslatedDescription(randomPokemon);
  const [buttonShinyContent, setButtonShinyContent] = useState("Ver Shiny!");

  const virarCarta = () => {
    setVirada(!virada);
  };

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        if (randomPokemon.id < 1010) {
          const response = await apiSpecies.get(`${randomPokemon.id}`);
          setPokemonSpecies(response.data);
        } else {
          const response = await apiSpecies.get(
            `${randomPokemon.name.split("-")[0]}`
          );
          setPokemonSpecies(response.data);
        }
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };
    fetchPokemonSpecies();
    setGetGen(GetGen(randomPokemon.id));

    if (randomPokemon.types.length === 1) {
      setFirstType(randomPokemon.types[0].type.name);
      setSecondType("");
    }
    if (randomPokemon.types.length === 2) {
      setFirstType(randomPokemon.types[0].type.name);
      setSecondType(randomPokemon.types[1].type.name);
    }
  }, [randomPokemon]);

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
      return "COMUM";
    } else if (somaStats <= 400) {
      return "INCOMUM";
    } else if (somaStats <= 450) {
      return "RARO";
    } else if (somaStats <= 500) {
      return "MUITO-RARO";
    } else if (somaStats <= 550) {
      return "ULTRA-RARO";
    } else if (somaStats <= 600) {
      return "LENDÁRIO";
    } else if (somaStats <= 650) {
      return "MÍTICO";
    } else if (somaStats > 650) {
      return "DIVINO";
    }
  };

  const handleImageLoad = () => {
    setImagesLoaded(true);
    handleImageLoaded();
  };

  const onItsShiny = () => {
    setItsShiny(!itsShiny);

    if (itsShiny === true) {
      setButtonShinyContent("Ver Shiny!");
    }
    if (itsShiny === false) {
      setButtonShinyContent("Ver Padrão");
    }
  };

  return (
    <>
      <div className="container_body_shiny">
        <div className="container_botao_shiny">
          <button
            className={
              buttonShinyContent === "Ver Shiny!"
                ? "botao_shiny"
                : "botao_normal"
            }
            onClick={onItsShiny}
          >
            {buttonShinyContent}
          </button>
        </div>
      </div>
      <div className="container_carta">
        {!virada && (
          <div
            className={`carta ${firstType}_carta ${
              itsShiny === true && "carta_shiny"
            }`}
            onClick={virarCarta}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                virarCarta();
              }
            }}
            tabIndex={0}
            style={{ opacity: isCardVisible }}
          >
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
                    {classificarRaridade(somaStats, randomPokemon.id).replace(
                      /-/g,
                      " "
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="container_imagem_carta">
              {itsShiny === true && (
                // <img src={shiny} alt="Icone Shiny" className="icone_shiny_imagem"/>
                <h1 alt="Icone Shiny" className="icone_shiny_imagem">
                  SHINY!
                </h1>
              )}
              <img
                src={imagem.mainImage}
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
                <div className="container_id_carta">
                  <span className="id_carta">ID: #{randomPokemon.id}</span>
                </div>
              </div>
              <div className="container_conteudo_carta_direito">
                {secondStats.map((stat, index) => (
                  <div key={index} className="status">
                    <span className="stats_name">{stat.statsName}</span>:{" "}
                    <span className="stats_values">{stat.statsValues}</span>
                  </div>
                ))}
                <div className="container_gen_carta">
                  <span className="gen_carta">{getGen}</span>
                </div>
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
          <div
            className={`carta ${firstType}_carta ${
              itsShiny === true && "carta_shiny"
            }`}
            onClick={virarCarta}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                virarCarta();
              }
            }}
            tabIndex={0}
          >
            <div className="container_conteudo_virado">
              <div className="container_imagens_virado">
                <div className="container_imagem_esquerda_virado">
                  {imagem.front ? (
                    <img
                      className="imagem_esquerda_virado"
                      src={imagem.front}
                      alt={`Imagem In Game de ${randomPokemon.name}`}
                    />
                  ) : (
                    <span className="span_imagem_virado">
                      Não há imagens da frente do pokemon
                    </span>
                  )}
                </div>
                <div className="container_imagem_direita_virado">
                  {imagem.back ? (
                    <img
                      className="imagem_direita_virado"
                      src={imagem.back}
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
                  <span className="descrição_virado">
                    {pokemonsDescriptions}
                  </span>
                </div>
              </div>
              <div className="container_fraquezas_virado">
                <TypeAverageIcons combinedTypeAverages={combinedTypeAverages} />
              </div>
              <div className="container_arvore_evolutiva_virado">
                <SearchEvoUrl
                  pokemonSpecies={pokemonSpecies}
                  itsShiny={itsShiny}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
