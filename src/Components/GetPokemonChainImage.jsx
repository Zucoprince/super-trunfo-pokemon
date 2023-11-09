import { useEffect, useState } from "react";
import { api } from "../services/api";
import "../Styles/GetPokemonChainImage.css";
import PropTypes from "prop-types";
import Seta from "../Images/seta-direita.png";
import GetTypeIcon from "./GetTypeIcon";
import iconeTroca from "../Images/troca.png";

export default function GetPokemonChainImage(props) {
  GetPokemonChainImage.propTypes = {
    pokemonData: PropTypes.object.isRequired,
    itsShine: PropTypes.bool.isRequired,
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
  const [pokemonsType, setPokemonsType] = useState({
    firstPokeType1: "",
    firstPokeType2: "",
    secondPokeType1: "",
    secondPokeType2: "",
    thirdPokeType1: "",
    thirdPokeType2: "",
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
    if (pokemonsId.firstPoke !== null && pokemonsId.firstPoke !== undefined) {
      const fetchPokemon = async () => {
        try {
          const responseFirstPoke = await api.get(
            `pokemon/${pokemonsId.firstPoke}`
          );
          setPokemonsData((prevState) => ({
            ...prevState,
            firstPoke: responseFirstPoke.data,
          }));

          if (
            pokemonsId.secondPoke !== null &&
            pokemonsId.secondPoke !== undefined
          ) {
            const responseSecondPoke = await api.get(
              `pokemon/${pokemonsId.secondPoke}`
            );
            setPokemonsData((prevState) => ({
              ...prevState,
              secondPoke: responseSecondPoke.data,
            }));
          }

          if (
            pokemonsId.thirdPoke !== null &&
            pokemonsId.thirdPoke !== undefined
          ) {
            const responseThirdPoke = await api.get(
              `pokemon/${pokemonsId.thirdPoke}`
            );
            setPokemonsData((prevState) => ({
              ...prevState,
              thirdPoke: responseThirdPoke.data,
            }));
          }
        } catch (error) {
          console.error("Oops! Ocorreu um erro: " + error);
        }
      };

      fetchPokemon();
    }
  }, [pokemonsId]);

  useEffect(() => {
    if (Object.keys(pokemonsData.firstPoke).length !== 0) {
      if (props.itsShine === false) {
        setPokemonsImage((prevState) => ({
          ...prevState,
          firstPoke:
            pokemonsData.firstPoke.sprites.other["official-artwork"]
              .front_default,
        }));
      } else {
        setPokemonsImage((prevState) => ({
          ...prevState,
          firstPoke:
            pokemonsData.firstPoke.sprites.other["official-artwork"]
              .front_shiny,
        }));
      }
      if (Object.keys(pokemonsData.firstPoke.types).length === 1) {
        setPokemonsType((prevState) => ({
          ...prevState,
          firstPokeType1: pokemonsData.firstPoke.types[0].type.name,
        }));
      }
      if (Object.keys(pokemonsData.firstPoke.types).length === 2) {
        setPokemonsType((prevState) => ({
          ...prevState,
          firstPokeType1: pokemonsData.firstPoke.types[0].type.name,
          firstPokeType2: pokemonsData.firstPoke.types[1].type.name,
        }));
      }
    }

    if (Object.keys(pokemonsData.secondPoke).length !== 0) {
      if (props.itsShine === false) {
        setPokemonsImage((prevState) => ({
          ...prevState,
          secondPoke:
            pokemonsData.secondPoke.sprites.other["official-artwork"]
              .front_default,
        }));
      } else {
        setPokemonsImage((prevState) => ({
          ...prevState,
          secondPoke:
            pokemonsData.secondPoke.sprites.other["official-artwork"]
              .front_shiny,
        }));
      }
      if (Object.keys(pokemonsData.secondPoke.types).length === 1) {
        setPokemonsType((prevState) => ({
          ...prevState,
          secondPokeType1: pokemonsData.secondPoke.types[0].type.name,
        }));
      }
      if (Object.keys(pokemonsData.secondPoke.types).length === 2) {
        setPokemonsType((prevState) => ({
          ...prevState,
          secondPokeType1: pokemonsData.secondPoke.types[0].type.name,
          secondPokeType2: pokemonsData.secondPoke.types[1].type.name,
        }));
      }
    }

    if (Object.keys(pokemonsData.thirdPoke).length !== 0) {
      if (props.itsShine === false) {
        setPokemonsImage((prevState) => ({
          ...prevState,
          thirdPoke:
            pokemonsData.thirdPoke.sprites.other["official-artwork"]
              .front_default,
        }));
      } else {
        setPokemonsImage((prevState) => ({
          ...prevState,
          thirdPoke:
            pokemonsData.thirdPoke.sprites.other["official-artwork"]
              .front_shiny,
        }));
      }
      if (Object.keys(pokemonsData.thirdPoke.types).length === 1) {
        setPokemonsType((prevState) => ({
          ...prevState,
          thirdPokeType1: pokemonsData.thirdPoke.types[0].type.name,
        }));
      }
      if (Object.keys(pokemonsData.thirdPoke.types).length === 2) {
        setPokemonsType((prevState) => ({
          ...prevState,
          thirdPokeType1: pokemonsData.thirdPoke.types[0].type.name,
          thirdPokeType2: pokemonsData.thirdPoke.types[1].type.name,
        }));
      }
    }
  }, [pokemonsData, props.itsShine]);

  const pickTypeIcon = (wich) => {
    if (wich === "firstPoke") {
      if (pokemonsType.firstPokeType2) {
        return (
          <div className="container_icones">
            <GetTypeIcon type={pokemonsType.firstPokeType1} />
            <GetTypeIcon type={pokemonsType.firstPokeType2} />
          </div>
        );
      } else {
        return <GetTypeIcon type={pokemonsType.firstPokeType1} />;
      }
    }

    if (wich === "secondPoke") {
      if (pokemonsType.secondPokeType2) {
        return (
          <div className="container_icones">
            <GetTypeIcon type={pokemonsType.secondPokeType1} />
            <GetTypeIcon type={pokemonsType.secondPokeType2} />
          </div>
        );
      } else {
        return <GetTypeIcon type={pokemonsType.secondPokeType1} />;
      }
    }

    if (wich === "thirdPoke") {
      if (pokemonsType.thirdPokeType2) {
        return (
          <div className="container_icones">
            <GetTypeIcon type={pokemonsType.thirdPokeType1} />
            <GetTypeIcon type={pokemonsType.thirdPokeType2} />
          </div>
        );
      } else {
        return <GetTypeIcon type={pokemonsType.thirdPokeType1} />;
      }
    }
  };

  const renderImage = () => {
    return (
      <div className="container_imagens">
        {pokemonsImage.firstPoke && (
          <div className="container_primeiro_pokemon">
            <h3 className="nome_poke_primeiro">
              {pokemonsData.firstPoke.name}
            </h3>
            {pickTypeIcon("firstPoke")}
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
              {pickTypeIcon("secondPoke")}
              <img
                src={pokemonsImage.secondPoke}
                alt={`Imagem de ${pokemonsData.secondPoke.name}`}
                className="imagem_pokemon_evolução"
              />
            </div>
            {Object.keys(pokemonsData.secondPoke).length >= 2 && (
              <img
                src={iconeTroca}
                alt="Icone para troca de evol."
                className="icone_troca_evolução"
              />
            )}
          </>
        )}
        {pokemonsImage.thirdPoke && (
          <>
            <img src={Seta} alt="Seta" className="imagem_seta" />
            <div className="container_terceiro_pokemon">
              <h3 className="nome_poke_terceiro">
                {pokemonsData.thirdPoke.name}
              </h3>
              {pickTypeIcon("thirdPoke")}
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
