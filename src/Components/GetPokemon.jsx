import { useEffect, useState } from "react";
import Card from "./Card";
import api from "../services/api";
import { getStats } from "./GetStats";

export default function GetPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null); // Inicializado como nulo para indicar que nenhum Pokémon foi selecionado ainda

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        let allPokemon = [];
        let nextUrl = "/pokemon";
        while (nextUrl) {
          const response = await api.get(nextUrl);
          allPokemon = allPokemon.concat(response.data.results);
          nextUrl = response.data.next;
        }
        setPokemonList(allPokemon);
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };

    fetchAllPokemon();
  }, []);

  const getRandomPokemon = async () => {
    if (pokemonList.length > 0) {
      try {
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const selectedPokemon = pokemonList[randomIndex];
        const response = await api.get(selectedPokemon.url); // Fazendo uma solicitação para obter todos os dados do Pokémon
        setRandomPokemon(response.data);
      } catch (error) {
        console.error(
          "Oops! Ocorreu um erro ao obter um Pokémon aleatório: " + error
        );
      }
    }
  };

  return (
    <div>
      <button onClick={getRandomPokemon}>Obter Pokémon Aleatório</button>
      {randomPokemon && <Card randomPokemon={randomPokemon} />}
    </div>
  );
}
