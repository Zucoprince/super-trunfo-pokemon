import { useEffect, useState } from "react";
import "../Styles/Card.css";
import { getStats, soma } from "./GetStats";

export default function Card(props) {
  const [firstType, setFirstType] = useState("");
  const [secondType, setSecondType] = useState("");
  const imagem =
    props.randomPokemon.sprites.other["official-artwork"].front_default;
  const stats = getStats(props);
  const firstStats = stats.slice(0, Math.ceil(stats.length / 2));
  const secondStats = stats.slice(Math.ceil(stats.length / 2), stats.length);
  const somaStats = soma(props);

  useEffect(() => {
    if (props.randomPokemon.types[0]?.type.name) {
      setFirstType(props.randomPokemon.types[0].type.name);
    }
    if (props.randomPokemon.types[1]?.type.name) {
      setSecondType(props.randomPokemon.types[1].type.name);
    }
  }, [props.randomPokemon.types]);

  console.log(somaStats, firstType, secondType);

  return (
    <>
      <div className="container_carta">
        <div className="carta">
          <div className="topo_carta">
            <div className="nome_pokemon">{props.randomPokemon.name}</div>
            <div className="raridade">Não-comum</div>
          </div>
          <div className="container_imagem_carta">
            <img
              src={imagem}
              className="imagem_carta"
              alt="imagem do Pikachu"
            ></img>
          </div>
          <div className="conteudo_carta">
            <div className="container_conteudo_carta_esquerdo">
              {firstStats.map((stat, index) => (
                <div key={index} className="status">
                  {stat.statsName} : {stat.statsValues}
                </div>
              ))}
            </div>
            <div className="container_conteudo_carta_direito">
              {secondStats.map((stat, index) => (
                <div key={index} className="status">
                  {stat.statsName} : {stat.statsValues}
                </div>
              ))}
            </div>
          </div>
          <div className="rodape_carta"></div>
        </div>
      </div>
    </>
  );
}
