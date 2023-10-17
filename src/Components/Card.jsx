import { useEffect, useState } from "react";
import "../Styles/Card.css";
import "../Styles/CardTypeColors.css";
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
  const idsRaros = [
    35, 36, 37, 50, 51, 52, 58, 63, 64, 74, 75, 76, 77, 80, 82, 83, 85, 86, 90,
    93, 94, 95, 100, 102, 103, 104, 116, 135, 144, 145, 146, 147, 150, 151, 186,
    187, 188, 190, 191, 201, 210, 384, 385, 492, 648, 721, 722, 723, 724, 725,
    726, 727, 728, 809, 809, 890, 890,
  ];

  useEffect(() => {
    if (props.randomPokemon.types.length === 1) {
      setFirstType(props.randomPokemon.types[0].type.name);
      setSecondType("");
    }
    if (props.randomPokemon.types.length === 2) {
      setFirstType(props.randomPokemon.types[0].type.name);
      setSecondType(props.randomPokemon.types[1].type.name);
    }
  }, [props.randomPokemon.types]);

  const tipagem =
    secondType !== "" && secondType !== null ? (
      <span className="tipagem_texto">
        {firstType} / {secondType}
      </span>
    ) : (
      <span className="tipagem_texto">{firstType}</span>
    );

  const classificarRaridade = (somaStats, id) => {
    if (somaStats <= 150) {
      if (idsRaros.includes(id)) {
        return "COMUM-";
      }
      return "COMUM";
    } else if (somaStats <= 400) {
      if (idsRaros.includes(id)) {
        return "INCOMUM-";
      }
      return "INCOMUM";
    } else if (somaStats <= 450) {
      if (idsRaros.includes(id)) {
        return "RARO-";
      }
      return "RARO";
    } else if (somaStats <= 500) {
      if (idsRaros.includes(id)) {
        return "MUITO-RARO-";
      }
      return "MUITO-RARO";
    } else if (somaStats <= 550) {
      if (idsRaros.includes(id)) {
        return "ULTRA-RARO-";
      }
      console.log("PEGUEI VOCE!");
      return "ULTRA-RARO";
    } else if (somaStats <= 600) {
      if (idsRaros.includes(id)) {
        return "LENDÁRIO-";
      }
      return "LENDÁRIO";
    } else if (somaStats <= 650) {
      if (idsRaros.includes(id)) {
        return "MÍTICO-";
      }
      return "MÍTICO";
    } else if (somaStats > 650) {
      if (idsRaros.includes(id)) {
        return "DIVINO-";
      }
      return "DIVINO";
    }
  };

  return (
    <>
        <div className="container_carta">
          <div className={`carta ${firstType}_carta`}>
            <div className="topo_carta">
              <div className="nome_pokemon">
                <span>{props.randomPokemon.name.replace(/-/g, " ")}</span>
              </div>
              <div className="bloco_raridade">
                <div
                  className={`container_raridade ${classificarRaridade(
                    somaStats
                  )}`}
                >
                  <div className="raridade">
                    {classificarRaridade(
                      somaStats,
                      props.randomPokemon.id
                    ).replace(/-/g, " ")}
                  </div>
                </div>
              </div>
            </div>
            <div className="container_imagem_carta">
              <img
                src={imagem}
                className="imagem_carta"
                alt={`imagem do ${props.randomPokemon.name}`}
              ></img>
            </div>
            <div className="conteudo_carta">
              <div className="container_conteudo_carta_esquerdo">
                {firstStats.map((stat, index) => (
                  <div key={index} className="status">
                    <span className="stats_name">{stat.statsName}</span>:{" "}
                    <span className="stats_values">{stat.statsValues}</span>
                  </div>
                ))}
              </div>
              <div className="container_conteudo_carta_direito">
                {secondStats.map((stat, index) => (
                  <div key={index} className="status">
                    <span className="stats_name">{stat.statsName}</span>:{" "}
                    <span className="stats_values">{stat.statsValues}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rodape_carta">
              <div className="status_total">POWER MAX: {somaStats}</div>
              <div className={`tipagem ${firstType}_${secondType}`}>
                {tipagem}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
