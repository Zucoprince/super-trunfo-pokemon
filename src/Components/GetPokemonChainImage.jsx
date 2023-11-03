import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function GetPokemonChainImage(props) {
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

          if (pokemonsId.secondPoke) {
            const responseSecondPoke = await api.get(
              `pokemon/${pokemonsId.secondPoke}`
            );
            setPokemonsData((prevState) => ({
              ...prevState,
              secondPoke: responseSecondPoke.data,
            }));
          }

          if (pokemonsId.thirdPoke) {
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

  console.log(pokemonsData);
}
