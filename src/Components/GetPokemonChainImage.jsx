import { useEffect, useState } from "react";
import { api } from "../services/api";
import "../Styles/GetPokemonChainImage.css";
import PropTypes from "prop-types";
import Seta from "../Images/seta-direita.png";
import GetTypeIcon from "./GetTypeIcon";
import iconeTroca from "../Images/troca.png";
import iconePokebola from "../Images/icone_pokebola.png";

export default function GetPokemonChainImage(props) {
  GetPokemonChainImage.propTypes = {
    pokemonData: PropTypes.object.isRequired,
    itsShiny: PropTypes.bool.isRequired,
  };

  const { firstPoke, secondPoke, thirdPoke } = props.pokemonData;
  const [pokemonsData, setPokemonsData] = useState([]);
  const [pokemonsImage, setPokemonsImage] = useState([]);
  const [pokemonsType, setPokemonsType] = useState([]);
  const [slicerIndex, setSlicerIndex] = useState([0, 1]);
  const [slicerIndexFix, setSlicerIndexFix] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const idsEvos = [
    43, 44, 45, 60, 61, 62, 79, 80, 106, 107, 133, 134, 135, 136, 182, 186, 196,
    197, 199, 236, 237, 265, 266, 267, 268, 269, 280, 281, 282, 290, 291, 292,
    361, 362, 366, 367, 368, 412, 413, 414, 470, 471, 475, 478, 700,
  ];

  const getTypeIcon = (types) => {
    return types.map((type) => (
      <GetTypeIcon key={type.type.name} type={type.type.name} />
    ));
  };

  useEffect(() => {
    const fetchPokemonData = async (pokemon) => {
      if (pokemon) {
        try {
          const response = await api.get(`pokemon/${pokemon.id}`);
          return response.data;
        } catch (error) {
          console.error("Erro ao buscar dados do Pokémon: " + error);
          return null;
        }
      }
      return null;
    };

    const fetchData = async () => {
      const firstPokeData = await fetchPokemonData(firstPoke);

      const secondPokeData = secondPoke
        ? await Promise.all(secondPoke.map((poke) => fetchPokemonData(poke)))
        : [];

      const thirdPokeData = thirdPoke
        ? await Promise.all(thirdPoke.map((poke) => fetchPokemonData(poke)))
        : [];

      setPokemonsData([firstPokeData, ...secondPokeData, ...thirdPokeData]);
    };

    fetchData();
  }, [firstPoke, secondPoke, thirdPoke]);

  useEffect(() => {
    const wichImage = props.itsShiny ? "front_shiny" : "front_default";

    const processPokemonData = (pokemonData) => {
      if (pokemonData && Object.keys(pokemonData).length !== 0) {
        const image =
          pokemonData.sprites?.other["official-artwork"][wichImage] || {};
        const types = pokemonData.types || [];
        return { image, types };
      }
      return null;
    };

    const pokemonImageData = pokemonsData.map((pokemon) =>
      processPokemonData(pokemon)
    );

    setPokemonsImage(pokemonImageData);
  }, [pokemonsData, props.itsShiny]);

  useEffect(() => {
    const typeData = pokemonsData.map((pokemon) =>
      pokemon ? pokemon.types : []
    );

    setPokemonsType(typeData);
  }, [pokemonsData]);

  const handlePokemonChange = (e) => {
    e.stopPropagation(); // Impede a propagação do evento para os elementos pais
    if (slicerIndexFix === 2) {
      setSlicerIndex(([startIndex, endIndex]) => {
        const nextEndIndex = endIndex + 1;

        // Se o próximo índice exceder o comprimento máximo, volte ao estado original
        const newEndIndex =
          nextEndIndex >= pokemonsImage.length ? 1 : nextEndIndex;

        return [startIndex, newEndIndex];
      });
    } else {
      setSlicerIndex(([startIndex, middleIndex, endIndex]) => {
        const nextEndIndex = endIndex + 1;

        // Se o próximo índice exceder o comprimento máximo, volte ao estado original
        const newEndIndex =
          nextEndIndex >= pokemonsImage.length ? 2 : nextEndIndex;

        return [startIndex, middleIndex, newEndIndex];
      });
    }
  };

  const seeIdEvos = (id) => {
    return idsEvos.includes(id);
  };

  useEffect(() => {
    const slicers = () => {
      const requiredIds = [
        43, 44, 45, 60, 61, 62, 182, 186, 280, 281, 282, 475,
      ];

      const hasAllRequiredIds = pokemonsData.every(
        (pokemon) => pokemon && pokemon.id && requiredIds.includes(pokemon.id)
      );

      if (hasAllRequiredIds) {
        setSlicerIndexFix(3);
        setSlicerIndex([0, 1, 2]);
      } else {
        setSlicerIndexFix(2);
        setSlicerIndex([0, 1]);
      }
    };

    slicers();
  }, [pokemonsData]);

  const renderImage = () => {
    const showArrow =
      pokemonsData &&
      pokemonsData.some(
        (pokemon) => pokemon && pokemon.id && seeIdEvos(pokemon.id)
      );

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return (
      <>
        {isLoading && (
          <div className="sweet_loading">
            <img
              src={iconePokebola}
              alt="Icone Pokebola"
              className="icone_pokebola"
            />
          </div>
        )}
        {!showArrow && !isLoading && (
          <div className="container_imagens">
            {pokemonsImage.map((imageData, index, array) => (
              <>
                <div key={index} className="container_pokemon">
                  <h3 className="nome_poke">{pokemonsData[index]?.name}</h3>
                  <div className="container_type">
                    {getTypeIcon(pokemonsType[index])}
                  </div>
                  <img
                    src={imageData?.image}
                    alt={`Imagem de ${pokemonsData[index]?.name}`}
                    className="imagem_pokemon_evolução"
                  />
                </div>
                {index !== array.length - 1 && (
                  <img
                    src={Seta}
                    alt="imagem de seta"
                    className="imagem_seta"
                  />
                )}
              </>
            ))}
          </div>
        )}
        {showArrow && !isLoading && (
          <>
            <div className="container_imagens">
              {pokemonsImage
                .filter((element, index) => slicerIndex.includes(index))
                .map((imageData, index, array) => {
                  const originalIndex = slicerIndex[index];
                  return (
                    <div key={index} className="container_pokemon">
                      <h3 className="nome_poke">
                        {pokemonsData[originalIndex]?.name}
                      </h3>
                      <div className="container_type">
                        {getTypeIcon(pokemonsType[originalIndex])}
                      </div>
                      <img
                        src={imageData?.image}
                        alt={`Imagem de ${pokemonsData[originalIndex]?.name}`}
                        className="imagem_pokemon_evolução"
                      />
                      {index !== array.length - 1 &&
                      slicerIndexFix === 2 ? (
                        <img
                          src={Seta}
                          alt="imagem de seta"
                          className="imagem_seta_2"
                        />
                      ) : (
                        <>
                          {" "}
                          <img
                            src={Seta}
                            alt="imagem de seta"
                            className="imagem_seta_3"
                          />
                          <img
                            src={Seta}
                            alt="imagem de seta"
                            className="imagem_seta_4"
                          />
                        </>
                      )}
                    </div>
                  );
                })}
            </div>
            <img
              src={iconeTroca}
              alt="Trocar Pokémon"
              className="icone_troca"
              onClick={(e) => handlePokemonChange(e)}
            />
          </>
        )}
      </>
    );
  };

  return <>{renderImage()}</>;
}
