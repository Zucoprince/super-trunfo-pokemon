/* eslint-disable no-unused-vars */
import bugIcon from "../Images/bug_icon.png";
import darkIcon from "../Images/dark_icon.png";
import dragonIcon from "../Images/dragon_icon.png";
import electricIcon from "../Images/electric_icon.png";
import fairyIcon from "../Images/fairy_icon.png";
import fightingIcon from "../Images/fighting_icon.png";
import fireIcon from "../Images/fire_icon.png";
import flyingIcon from "../Images/flying_icon.png";
import ghostIcon from "../Images/ghost_icon.png";
import grassIcon from "../Images/grass_icon.png";
import groundIcon from "../Images/ground_icon.png";
import iceIcon from "../Images/ice_icon.png";
import normalIcon from "../Images/normal_icon.png";
import poisonIcon from "../Images/poison_icon.png";
import psychicIcon from "../Images/psychic_icon.png";
import rockIcon from "../Images/rock_icon.png";
import steelIcon from "../Images/steel_icon.png";
import waterIcon from "../Images/water_icon.png";
import "../Styles/TypeAverageIcon.css";

export default function TypeAverageIcons(props) {
  const doubleDamageFrom = props.combinedTypeAverages.double_damage_from;
  const doubleDamageTo = props.combinedTypeAverages.double_damage_to;
  const halfDamageFrom = props.combinedTypeAverages.half_damage_from;
  const halfDamageTo = props.combinedTypeAverages.half_damage_to;
  const noDamageFrom = props.combinedTypeAverages.no_damage_from;
  const noDamageTo = props.combinedTypeAverages.no_damage_to;
  const whichType = {
    bug: bugIcon,
    dark: darkIcon,
    dragon: dragonIcon,
    electric: electricIcon,
    fairy: fairyIcon,
    fighting: fightingIcon,
    fire: fireIcon,
    flying: flyingIcon,
    ghost: ghostIcon,
    grass: grassIcon,
    ground: groundIcon,
    ice: iceIcon,
    normal: normalIcon,
    poison: poisonIcon,
    psychic: psychicIcon,
    rock: rockIcon,
    steel: steelIcon,
    water: waterIcon,
  };

  return (
    <>
      <div className="container_wrapper" style={{ backgroundColor: "red" }}>
        <div className="container_double_damage_title">
          <span>RECEBE 2X</span>
        </div>
        <div className="container_double_damage_from">
          {doubleDamageFrom ? (
            doubleDamageFrom.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>

      <div className="container_wrapper" style={{ backgroundColor: "red" }}>
        <div className="container_double_damage_title">
          <span>DA 1/2</span>
        </div>
        <div className="container_double_damage_from">
          {halfDamageTo ? (
            halfDamageTo.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>

      <div className="container_wrapper" style={{ backgroundColor: "red" }}>
        <div className="container_double_damage_title">
          <span>NÃO ATINGE</span>
        </div>
        <div className="container_double_damage_from">
          {noDamageTo ? (
            noDamageTo.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>

      <div className="container_wrapper" style={{ backgroundColor: "greenyellow" }}>
        <div className="container_double_damage_title">
          <span>DA 2X</span>
        </div>
        <div className="container_double_damage_from">
          {doubleDamageTo ? (
            doubleDamageTo.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>

      <div className="container_wrapper"
      style={{ backgroundColor: "greenyellow" }}>
        <div className="container_double_damage_title">
          <span>RECEBE 1/2</span>
        </div>
        <div className="container_double_damage_from">
          {halfDamageTo ? (
            halfDamageFrom.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>

      <div className="container_wrapper" style={{ backgroundColor: "greenyellow" }}>
        <div className="container_double_damage_title">
          <span>NÂO RECEBE</span>
        </div>
        <div className="container_double_damage_from">
          {noDamageFrom ? (
            noDamageFrom.map((type, index) => (
              <img
                src={whichType[type]}
                key={index}
                className={`${type}_icon`}
                alt={`icone de ${type}`}
              />
            ))
          ) : (
            <span>Padrão</span>
          )}
        </div>
      </div>
    </>
  );
}
