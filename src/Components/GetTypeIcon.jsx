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

export default function GetTypeIcon(props) {
  const typeIcons = {
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
  const icon = typeIcons[props.type];

  if (icon) {
    return <img src={icon} alt={`icone do tipo ${props}`} style={{ width: "12%"}} />;
  } else {
    return null; // Ou qualquer outra ação padrão desejada
  }
}
