import "../Styles/InfoCard.css";
import GetMainImage from "./GetMainImage";
import TranslatedDescription from "./TranslatedDescription";

export default function InfoCard(props) {
  const imagem = GetMainImage(props.randomPokemon, props.itsShiny);
  const pokemonsDescriptions = TranslatedDescription(props.randomPokemon);

  return (
    <div
      className="carta_info"
      style={{ backgroundImage: `url("${imagem.mainImage}")` }}
    >
      <div className="poke_info">
        <div className="moldura_descrição">
          <span className="descrição">{pokemonsDescriptions}</span>
        </div>
      </div>
      <div className="evo_info"></div>
      <div className="habilidades"></div>
    </div>
  );
}
