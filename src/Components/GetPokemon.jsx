import { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/GetPokemon.css";

export default function GetPokemon() {
  const [randomPokemon, setRandomPokemon] = useState(null); // Inicializado como nulo para indicar que nenhum Pokémon foi selecionado ainda
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(0);

  const fetchAllPokemon = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * 1017);
      const response = await api.get(`pokemon/${randomIndex}`); // Fazendo uma solicitação para obter todos os dados do Pokémon
      setRandomPokemon(response.data);
      setTimeout(() => {
        setIsLoading(false);
        setImageLoaded(true);
      }, imageLoaded === true);
    } catch (error) {
      console.error("Oops! Ocorreu um erro: " + error);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleRandomPokemonClick = () => {
    setIsLoading(true);
    setImageLoaded(false);
    setIsCardVisible(0);
    fetchAllPokemon();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => {
      setIsCardVisible(1);
    }, imageLoaded === true);
  };

  return (
    <div>
      {isLoading ? (
        <div className="sweet-loading">
          <ClipLoader loading={isLoading} size={50} className="clip_loader" />
        </div>
      ) : (
        <div>
          <button
            onClick={handleRandomPokemonClick}
            className="button_randomizer"
          >
            <span className="texto_botao">Eu escolho você!</span>
          </button>
          {randomPokemon && imageLoaded && (
            <Card
              randomPokemon={randomPokemon}
              handleImageLoaded={handleImageLoad}
              isCardVisible={isCardVisible}
            />
          )}
        </div>
      )}
    </div>
  );
}
