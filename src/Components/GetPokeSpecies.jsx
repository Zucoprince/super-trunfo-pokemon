import { useEffect, useState } from "react";
import { apiSpecies } from "../services/api";

export default function GetPokeSpecies(props) {
  const [getPoke, setGetPoke] = useState({});

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        if (props.id < 1017) {
          const response = await apiSpecies.get(`${props.id}`);
          setGetPoke(response.data);
        } else {
          const response = await apiSpecies.get(`${props.name.split("-")[0]}`);
          setGetPoke(response.data);
        }
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };

    fetchPokemonSpecies();
  });

  return getPoke;
}
