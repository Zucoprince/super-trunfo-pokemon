import { useEffect, useState } from "react";
import { api } from "../services/api";
import GetPokemonChainImage from "./GetPokemonChainImage";

export default function SearchEvoUrl(props) {
  const urlEvoChain = props.pokemonSpecies.evolution_chain;
  const [evoChain, setEvoChain] = useState([]);
  const [pickPokemonUrl, setPickPokemonUrl] = useState({
    firstPoke: "",
    secondPoke: "",
    thirdPoke: "",
  });
  const [pickPokemonData, setPickPokemonData] = useState([
    {
      firstPoke: {},
    },
    {
      secondPoke: {},
    },
    {
      thirdPoke: {},
    },
  ]);

  useEffect(() => {
    if (urlEvoChain) {
      const fetchPokemonEvoChain = async () => {
        try {
          const response = await api.get(urlEvoChain.url);
          setEvoChain(response.data.chain);
        } catch (error) {
          console.error("Oops! Ocorreu um erro: " + error);
        }
      };
      fetchPokemonEvoChain();
    }
  }, [urlEvoChain]);

  useEffect(() => {
    if (evoChain.species) {
      const firstPoke = evoChain.species.url;
      let secondPoke = "";
      let thirdPoke = "";

      if (evoChain.evolves_to[0]) {
        secondPoke = evoChain.evolves_to[0].species.url;
      }

      if (evoChain.evolves_to[0].evolves_to[0]) {
        thirdPoke = evoChain.evolves_to[0].evolves_to[0].species.url;
      }

      setPickPokemonUrl({ firstPoke, secondPoke, thirdPoke });
    }
  }, [evoChain]);

  useEffect(() => {
    if (pickPokemonUrl) {
      const fetchPokemonData = async () => {
        try {
          const responseFirstPokemon = await api.get(pickPokemonUrl.firstPoke);
          setPickPokemonData((prevState) => ({
            ...prevState,
            firstPoke: responseFirstPokemon.data,
          }));
          if (pickPokemonUrl.secondPoke !== "") {
            const responseSecondPokemon = await api.get(
              pickPokemonUrl.secondPoke
            );
            setPickPokemonData((prevState) => ({
              ...prevState,
              secondPoke: responseSecondPokemon.data,
            }));
          }

          if (pickPokemonUrl.thirdPoke !== "") {
            const responseThirdPokemon = await api.get(
              pickPokemonUrl.thirdPoke
            );
            setPickPokemonData((prevState) => ({
              ...prevState,
              thirdPoke: responseThirdPokemon.data,
            }));
          }
        } catch (error) {
          console.log("Oops! Ocorreu um erro: " + error);
        }
      };

      fetchPokemonData();
    }
  }, [pickPokemonUrl]);

  return (<>
    <GetPokemonChainImage pokemonData={pickPokemonData}/>
  </>)
}
