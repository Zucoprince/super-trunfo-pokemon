import { useEffect, useState } from "react";
import { api } from "../services/api";
import "../Styles/GetPokemonChainImage.css";
import PropTypes from "prop-types";
import Seta from "../Images/seta-direita.png";

export default function GetPokemonChainImage(props) {
  GetPokemonChainImage.propTypes = {
    pokemonData: PropTypes.object.isRequired,
  };

  const pokemonsSpecieData = props.pokemonData;
  const [pokemonsId, setPokemonsId] = useState({
    firstPoke: null,
    secondPoke: null,
    thirdPoke: null,
  });
  const [pokemonsData, setPokemonsData] = useState({
    firstPoke: {},
    secondPoke: {},
    thirdPoke: {},
  });
  const [pokemonsImage, setPokemonsImage] = useState({
    firstPoke: "",
    secondPoke: "",
    thirdPoke: "",
  });

  useEffect(() => {
    if (pokemonsSpecieData) {
      setPokemonsId({
        firstPoke: pokemonsSpecieData.firstPoke
          ? pokemonsSpecieData.firstPoke.id
          : null,
        secondPoke: pokemonsSpecieData.secondPoke
          ? pokemonsSpecieData.secondPoke.id
          : null,
        thirdPoke: pokemonsSpecieData.thirdPoke
          ? pokemonsSpecieData.thirdPoke.id
          : null,
      });
    }
  }, [pokemonsSpecieData]);

  useEffect(() => {
    if (pokemonsId.firstPoke !== null) {
      const fetchPokemon = async () => {
        try {
          const responseFirstPoke = await api.get(
            `pokemon/${pokemonsId.firstPoke}`
          );
          setPokemonsData((prevState) => ({
            ...prevState,
            firstPoke: responseFirstPoke.data,
          }));

          if (pokemonsId.secondPoke !== null) {
            const responseSecondPoke = await api.get(
              `pokemon/${pokemonsId.secondPoke}`
            );
            setPokemonsData((prevState) => ({
              ...prevState,
              secondPoke: responseSecondPoke.data,
            }));
          }

          if (pokemonsId.thirdPoke !== null) {
            const responseThirdPoke = await api.get(
              `pokemon/${pokemonsId.thirdPoke}`
            );
            setPokemonsData((prevState) => ({
              ...prevState,
              thirdPoke: responseThirdPoke.data,
            }));
          }
        } catch (error) {
          console.log("Oops! Ocorreu um erro: " + error);
        }
      };

      fetchPokemon();
    }
  }, [pokemonsId]);

  useEffect(() => {
    if (Object.keys(pokemonsData.firstPoke).length !== 0) {
      setPokemonsImage((prevState) => ({
        ...prevState,
        firstPoke:
          pokemonsData.firstPoke.sprites.other["official-artwork"]
            .front_default,
      }));
    }

    if (Object.keys(pokemonsData.secondPoke).length !== 0) {
      setPokemonsImage((prevState) => ({
        ...prevState,
        secondPoke:
          pokemonsData.secondPoke.sprites.other["official-artwork"]
            .front_default,
      }));
    }

    if (Object.keys(pokemonsData.thirdPoke).length !== 0) {
      setPokemonsImage((prevState) => ({
        ...prevState,
        thirdPoke:
          pokemonsData.thirdPoke.sprites.other["official-artwork"]
            .front_default,
      }));
    }
    
  }, [pokemonsData]);

  const renderImage = () => {
    return (
      <div className="container_imagens">
        {pokemonsImage.firstPoke && (
          <div className="container_primeiro_pokemon">
            <h3 className="nome_poke_primeiro">
              {pokemonsData.firstPoke.name}
            </h3>
            <img
              src={pokemonsImage.firstPoke}
              alt={`Imagem de ${pokemonsData.firstPoke.name}`}
              className="imagem_pokemon_evolução"
            />
          </div>
        )}
        {pokemonsImage.secondPoke && (
          <>
            <img src={Seta} alt="Seta" className="imagem_seta" />
            <div className="container_segundo_pokemon">
              <h3 className="nome_poke_segundo">
                {pokemonsData.secondPoke.name}
              </h3>
              <img
                src={pokemonsImage.secondPoke}
                alt={`Imagem de ${pokemonsData.secondPoke.name}`}
                className="imagem_pokemon_evolução"
              />
            </div>
          </>
        )}
        {pokemonsImage.thirdPoke && (
          <>
            <img src={Seta} alt="Seta" className="imagem_seta" />
            <div className="container_terceiro_pokemon">
              <h3 className="nome_poke_terceiro">
                {pokemonsData.thirdPoke.name}
              </h3>
              <img
                src={pokemonsImage.thirdPoke}
                alt={`Imagem de ${pokemonsData.thirdPoke.name}`}
                className="imagem_pokemon_evolução"
              />
            </div>
          </>
        )}
      </div>
    );
  };

  return <>{renderImage()}</>;
}
