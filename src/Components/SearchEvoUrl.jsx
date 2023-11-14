import { useEffect, useState } from "react";
import { api } from "../services/api";
import GetPokemonChainImage from "./GetPokemonChainImage";
import PropTypes from "prop-types";

export default function SearchEvoUrl(props) {
  SearchEvoUrl.propTypes = {
    pokemonSpecies: PropTypes.object.isRequired,
    itsShiny: PropTypes.bool.isRequired,
  };

  const urlEvoChain = props.pokemonSpecies.evolution_chain;
  const [evoChain, setEvoChain] = useState([]);
  const [pickPokemonUrl, setPickPokemonUrl] = useState({
    firstPoke: "",
    secondPoke: "",
    thirdPoke: "",
  });
  const [pickPokemonData, setPickPokemonData] = useState(
    {
      firstPoke: {},
    },
    {
      secondPoke: {},
    },
    {
      thirdPoke: {},
    }
  );

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
    const extractEvolutionUrls = (evolution) => {
      let urls = [];
      if (evolution.species.url) {
        urls.push(evolution.species.url);
      }
      if (evolution.evolves_to && evolution.evolves_to.length > 0) {
        evolution.evolves_to.forEach((nextEvolution) => {
          urls = urls.concat(extractEvolutionUrls(nextEvolution));
        });
      }
      return urls;
    };

    if (evoChain && evoChain.evolves_to && evoChain.evolves_to.length > 0) {
      let firstPoke = evoChain.species.url;
      let secondPoke = [];
      let thirdPoke = [];

      evoChain.evolves_to.forEach((evolution) => {
        if (evolution.species.url) {
          secondPoke.push(evolution.species.url);
        }
        if (evolution.evolves_to && evolution.evolves_to.length > 0) {
          evolution.evolves_to.forEach((nextEvolution) => {
            thirdPoke = thirdPoke.concat(extractEvolutionUrls(nextEvolution));
          });
        }
      });

      setPickPokemonUrl({ firstPoke, secondPoke, thirdPoke });
    }

    if (evoChain && evoChain.evolves_to && evoChain.evolves_to.length < 1) {
      let firstPoke = evoChain.species.url;
      let secondPoke = "";
      let thirdPoke = "";

      setPickPokemonUrl({ firstPoke, secondPoke, thirdPoke });
    }
  }, [evoChain]);

  useEffect(() => {
    const fetchPokemonData = async (url) => {
      try {
        const response = await api.get(url);
        return response.data;
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
        return null;
      }
    };

    const fetchDataForMultipleUrls = async (urls) => {
      const dataPromises = urls.map((url) => fetchPokemonData(url));
      return Promise.all(dataPromises);
    };

    if (pickPokemonUrl.firstPoke !== "") {
      fetchPokemonData(pickPokemonUrl.firstPoke)
        .then((data) => {
          setPickPokemonData((prevState) => ({
            ...prevState,
            firstPoke: data,
          }));

          if (
            pickPokemonUrl.secondPoke &&
            pickPokemonUrl.secondPoke.length > 0
          ) {
            return fetchDataForMultipleUrls(pickPokemonUrl.secondPoke);
          }
          return [];
        })
        .then((secondPokeData) => {
          if (secondPokeData.length > 0) {
            setPickPokemonData((prevState) => ({
              ...prevState,
              secondPoke: secondPokeData,
            }));
          }

          if (pickPokemonUrl.thirdPoke && pickPokemonUrl.thirdPoke.length > 0) {
            return fetchDataForMultipleUrls(pickPokemonUrl.thirdPoke);
          }
          return [];
        })
        .then((thirdPokeData) => {
          if (thirdPokeData.length > 0) {
            setPickPokemonData((prevState) => ({
              ...prevState,
              thirdPoke: thirdPokeData,
            }));
          }

          
        });
    }

  }, [pickPokemonUrl, props]);

  return (
    <GetPokemonChainImage
      pokemonData={pickPokemonData}
      itsShiny={props.itsShiny}
    />
  );
}
