import { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/GetPokemon.css"

export default function GetPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null); // Inicializado como nulo para indicar que nenhum Pokémon foi selecionado ainda
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const delay = 3000; // Ajuste o atraso conforme necessário
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const getRandomPokemon = async () => {
    setIsLoading(true);
    if (pokemonList.length > 0) {
      try {
        let filteredPokemonList = pokemonList.filter(
          (pokemon) =>
            !pokemon.name.includes(
              "-drive-",
              "-sprining-",
              "-totem",
              "-drive",
              "-sprining"
            )
        );
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const selectedPokemon = filteredPokemonList[randomIndex];
        const response = await api.get(selectedPokemon.url); // Fazendo uma solicitação para obter todos os dados do Pokémon
        setRandomPokemon(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(
          "Oops! Ocorreu um erro ao obter um Pokémon aleatório: " + error
        );
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="sweet-loading">
          <ClipLoader
            loading={isLoading}
            size={50}
            className="clip_loader"
          />
        </div>
      ) : (
        <div>
          <button onClick={getRandomPokemon} className="button_randomizer">
            <span>Eu escolho você!</span>
          </button>
          {randomPokemon && <Card randomPokemon={randomPokemon} />}
        </div>
      )}
    </div>
  );
}
