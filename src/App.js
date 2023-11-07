import Card from "./Components/Card";
import GetPokemon from "./Components/GetPokemon";
import "./App.css";
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [randomPokemon, setRandomPokemon] = useState({});

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await api.get(`pokemon/`); // Fazendo uma solicitação para obter todos os dados do Pokémon
        setRandomPokemon(response.data);
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };
    fetchAllPokemon();
  });

  useEffect(() => {
    if (randomPokemon.length > 0) {
      randomPokemon.forEach((pokemon) => {
        console.log(pokemon.name);
      });
    }
  }, [randomPokemon]);

  return (
    <div className="App">
      <GetPokemon />
    </div>
  );
}

export default App;
