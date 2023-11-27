/* eslint-disable no-unused-vars */
import "../Styles/TypeAverageIcon.css";
import GetTypeIcon from "./GetTypeIcon";

export default function TypeAverageIcons(props) {
  const quadraDamageFrom = props.combinedTypeAverages.quadra_damage_from;
  const doubleDamageFrom = props.combinedTypeAverages.double_damage_from;
  const doubleDamageToT1 = props.combinedTypeAverages.double_damage_to_t1[0];
  const doubleDamageToT2 = props.combinedTypeAverages.double_damage_to_t2[0];
  const normalDamageFrom = props.combinedTypeAverages.normal_damage_from;
  const halfDamageFrom = props.combinedTypeAverages.half_damage_from;
  const halfDamageToT1 = props.combinedTypeAverages.half_damage_to_t1[0];
  const halfDamageToT2 = props.combinedTypeAverages.half_damage_to_t2[0];
  const noDamageFrom = props.combinedTypeAverages.no_damage_from;
  const noDamageToT1 = props.combinedTypeAverages.no_damage_to_t1[0];
  const noDamageToT2 = props.combinedTypeAverages.no_damage_to_t2[0];
  const typeUm = props.combinedTypeAverages.type_um;
  const typeDois = props.combinedTypeAverages.type_dois;

  const taiRender = (varName, className, title, bg, type) => {
    const diff = ["double_to", "half_to", "nodmg_to"];
    return (
      <div
        className={`container_effectiviness container_${className}`}
        style={{ backgroundColor: bg }}
      >
        {diff.includes(className) && (
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={type} type={type} size="70%" />
          </div>
        )}
        <div
          className={`container_effectiviness_title container_${className}_title`}
        >
          <span>{title}</span>
        </div>
        <div
          className={`container_effectiviness_icon container_${className}_icon`}
        >
          <div className="container_icones">
            {varName &&
              varName.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="23%"
                />
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {quadraDamageFrom[0].length > 0 &&
        taiRender(quadraDamageFrom, "quadra_from", "RECEBE 4X", "red")}

      {noDamageToT1.length > 0 &&
        taiRender(noDamageToT1, "nodmg_to", "NÃO ATINGE", "red", typeUm)}

      {noDamageToT2.length > 0 &&
        taiRender(noDamageToT2, "nodmg_to", "NÃO ATINGE", "red", typeDois)}

      {doubleDamageFrom.length > 0 &&
        taiRender(doubleDamageFrom, "double_from", "RECEBE 2X", "orange")}

      {halfDamageToT1.length > 0 &&
        taiRender(halfDamageToT1, "half_to", "DA 1/2x", "yellow", typeUm)}

      {halfDamageToT2.length > 0 &&
        taiRender(halfDamageToT2, "half_to", "DA 1/2x", "yellow", typeDois)}

      {normalDamageFrom[0].length > 0 &&
        taiRender(normalDamageFrom, "normal_from", "RECEBE NORMAL", "silver")}

      {halfDamageFrom.length > 0 &&
        taiRender(halfDamageFrom, "double_to", "RECEBE 1/2x", "greenyellow")}

      {doubleDamageToT1.length > 0 &&
        taiRender(
          doubleDamageToT1,
          "double_to",
          "DA 2X",
          "springgreen",
          typeUm
        )}

      {doubleDamageToT2.length > 0 &&
        taiRender(
          doubleDamageToT2,
          "double_to",
          "DA 2X",
          "springgreen",
          typeDois
        )}

      {noDamageFrom.length > 0 &&
        taiRender(noDamageFrom, "nodmg_from", "NÃO É ATINGIDO", "lime")}
    </>
  );
}
