import "../Styles/InfoCard.css";
import protagonista from "../Images/red-protagonista.png";
import GetMainImage from "./GetMainImage";
import TranslatedDescription from "./TranslatedDescription";
import TranslatedGenus from "./TranslatedGenus";
import GetPokeSpecies from "./GetPokeSpecies";

export default function InfoCard(props) {
  const imagem = GetMainImage(props.randomPokemon, props.itsShiny);
  const pokemonsDescriptions = TranslatedDescription(props.randomPokemon);
  const getGenus = TranslatedGenus(props.randomPokemon);
  const pokeSpecie = GetPokeSpecies(props.randomPokemon);

  const pesoVariado = () => {
    const peso = props.randomPokemon.weight;
    const pesoString = peso < 10 ? "0" + peso.toString() : peso.toString();
    const formattedWeight =
      peso < 100
        ? pesoString.slice(0, 1) + "." + pesoString.slice(1)
        : peso < 1000
        ? pesoString.slice(0, 2) + "." + pesoString.slice(2)
        : peso < 10000
        ? pesoString.slice(0, 3) + "." + pesoString.slice(2)
        : "????";

    return formattedWeight;
  };

  const alturaVariada = () => {
    const altura = props.randomPokemon.height;
    const alturaString =
      altura < 10 ? "0" + altura.toString() : altura.toString();
    const formattedHeight =
      altura < 100
        ? alturaString.slice(0, 1) + "." + alturaString.slice(1)
        : altura < 1000
        ? alturaString.slice(0, 2) + "." + alturaString.slice(1)
        : "????";

    return formattedHeight;
  };

  const calcularTamanho = () => {
    const alturaPokemon = parseFloat(alturaVariada());
    const alturaHumano = 1.8;
    const alturaDiferença = alturaHumano - alturaPokemon;
    const porcentagemDiferença =
      (alturaDiferença / Math.abs(alturaHumano)) * 100;

    return porcentagemDiferença.toFixed(2);
  };

  const ajustarTamanhoImagens = () => {
    const porcentagemDiferenca = parseFloat(calcularTamanho());
    const dividirPorcentagem = Math.abs(porcentagemDiferenca) / 2;
    const tamanhoBaseProtagonista = 50;
    const tamanhoBasePokemon = 40; // tamanho inicial em porcentagem
    const tamanhoPokemon =
      porcentagemDiferenca < 0
        ? tamanhoBasePokemon + dividirPorcentagem.toFixed(1) / 100
        : tamanhoBasePokemon - dividirPorcentagem.toFixed(1) / 100;
    const tamanhoProtagonista =
      porcentagemDiferenca < 0
        ? tamanhoBaseProtagonista - 10 - dividirPorcentagem.toFixed(1) / 100
        : tamanhoBaseProtagonista + 5 + dividirPorcentagem.toFixed(1) / 100;

    // console.log({
    //   tamanhoPokemon: tamanhoPokemon,
    //   tamanhoProtagonista: tamanhoProtagonista,
    //   porcentagemDiferenca: porcentagemDiferenca,
    //   dividirPorcentagem: dividirPorcentagem,
    // });

    return {
      widthProtagonista: `${tamanhoProtagonista.toFixed(1)}%`,
      widthPokemon: `${tamanhoPokemon.toFixed(1)}%`,
    };
  };

  const { widthProtagonista, widthPokemon } = ajustarTamanhoImagens();

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
      <div className="attributes_info">
        <div className="container_genus">
          <span className="pokemon_genus">{getGenus}</span>
        </div>
        <div className="container_attributes">
          <div className="container_peso_altura">
            <span className="peso">Peso: {pesoVariado()}Kg</span>
            <span className="altura">Altura: {alturaVariada()}m</span>
            <span className="catch_rate">
              Taxa de Captura: {pokeSpecie.capture_rate}
            </span>
          </div>
          <div className="container_imagens_altura">
            <img
              src={protagonista}
              alt="Imagem de uma pessoa"
              width={widthProtagonista}
              className="imagem_protagonista_por_cento"
            />
            <img
              src={props.randomPokemon.sprites.front_default}
              alt={`Imagem do(a) ${props.randomPokemon.name}`}
              width={widthPokemon}
              className="imagem_pokemon_por_cento"
            />
          </div>
        </div>
      </div>
      <div className="habilidades"></div>
    </div>
  );
}
