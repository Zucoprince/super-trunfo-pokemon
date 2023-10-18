import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function SearchTypeUrl(props) {
  const [urlTypeUm, setUrlTypeUm] = useState("");
  const [urlTypeDois, setUrlTypeDois] = useState("");
  const [contentUm, setContentUm] = useState([]);
  const [contentDois, setContentDois] = useState([]);

  console.log(props);

  useEffect(() => {
    setUrlTypeUm(props.randomPokemon.types[0].type.url);
    if (props.randomPokemon.types.length >= 2) {
      setUrlTypeDois(props.randomPokemon.types[1].type.url);
    }
  }, [setUrlTypeUm, props.randomPokemon.types]);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const responseUm = await api.get(`${urlTypeUm}`);
        setContentUm(responseUm.data);
        const responseDois = await api.get(`${urlTypeDois}`);
        setContentDois(responseDois.data);
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };
    fetchPokemonSpecies();
  }, [urlTypeUm, urlTypeDois]);

  return { contentUm, contentDois }
}
