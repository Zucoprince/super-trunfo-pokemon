import { useState } from "react";
import Card from "./Card";
import { api } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import "../Styles/GetPokemon.css";
import lupa from "../Images/lupa.png";
import PokeNames from "./PokeNames";
import "../Styles/PokeInput.css";

export default function GetPokemon() {
  const [randomPokemon, setRandomPokemon] = useState(null); // Inicializado como nulo para indicar que nenhum Pokémon foi selecionado ainda
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const names = PokeNames();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchPokemonByName = async (pokemonName) => {
    try {
      const response = await api.get(`pokemon/${pokemonName.toLowerCase()}`); // Fazendo uma solicitação para obter todos os dados do Pokémon
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
    setIsCardVisible(false);
    fetchAllPokemon();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => {
      setIsCardVisible(true);
    }, imageLoaded === true);
  };

  const handleSearchInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredResults = names.pokemon_v2_pokemon.filter((item) =>
      item.name.includes(userInput)
    );
    setFilteredNames(filteredResults);
    setSearchInput(userInput);
    setShowSuggestions(true);
    if (e.target.value === "") {
      setShowSuggestions(false);
    }
  };

  const handleNameClick = (pokemonName) => {
    fetchPokemonByName(pokemonName);
    setIsLoading(true);
    setImageLoaded(false);
    setIsCardVisible(false);
    setSearchInput("");
    setShowSuggestions(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="sweet-loading">
          <ClipLoader loading={isLoading} size={50} className="clip_loader" />
        </div>
      ) : (
        <>
          <form className="container_pesquisa">
            <button type="submit" className="botao_pesquisa">
              <img
                src={lupa}
                alt="Icone de Lupa"
                width="2%"
                className="icone_lupa"
              />
            </button>
            <input
              placeholder="Pesquise aqui seu pokémon!"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            {showSuggestions && (
              <div className="container_lista" tabIndex={0}>
                <ul className="lista_input">
                  {filteredNames.map((item, index) => (
                    <div
                      key={index}
                      className="container_nome"
                      onClick={() => handleNameClick(item.name)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleNameClick(filteredNames[0].name); // Aqui, eu estou assumindo que você deseja selecionar o primeiro item na lista quando o usuário pressionar Enter. Você pode alterar essa lógica conforme necessário.
                        }
                      }}
                    >
                      <li key={index} className="nome_lista">
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </form>
          <div className="botao_card">
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
        </>
      )}
    </div>
  );
}
