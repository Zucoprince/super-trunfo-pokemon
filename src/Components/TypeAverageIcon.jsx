/* eslint-disable no-unused-vars */
import "../Styles/TypeAverageIcon.css";
import GetTypeIcon from "./GetTypeIcon";

export default function TypeAverageIcons(props) {
  const quadraDamageFrom = props.combinedTypeAverages.quadra_damage_from[0];
  const doubleDamageFrom = props.combinedTypeAverages.double_damage_from;
  const doubleDamageToT1 = props.combinedTypeAverages.double_damage_to_t1[0];
  const doubleDamageToT2 = props.combinedTypeAverages.double_damage_to_t2[0];
  const normalDamageFrom = props.combinedTypeAverages.normal_damage_from[0];
  const halfDamageFrom = props.combinedTypeAverages.half_damage_from;
  const halfDamageToT1 = props.combinedTypeAverages.half_damage_to_t1[0];
  const halfDamageToT2 = props.combinedTypeAverages.half_damage_to_t2[0];
  const noDamageFrom = props.combinedTypeAverages.no_damage_from;
  const noDamageToT1 = props.combinedTypeAverages.no_damage_to_t1[0];
  const noDamageToT2 = props.combinedTypeAverages.no_damage_to_t2[0];
  const typeUm = props.combinedTypeAverages.type_um;
  const typeDois = props.combinedTypeAverages.type_dois;

  console.log(props);

  return (
    <>
      {quadraDamageFrom.length > 0 && (
        <div
          className="container_effectiviness container_quadra_from"
          style={{ backgroundColor: "purple" }}
        >
          <div className="container_effectiviness_title container_quadra_from_title">
            <span>RECEBE 4X</span>
          </div>
          <div className="container_effectiviness_icon container_quadra_from_icon">
            {quadraDamageFrom ? (
              quadraDamageFrom.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {doubleDamageFrom.length > 0 && (
        <div
          className="container_effectiviness container_double_from"
          style={{ backgroundColor: "orangeRed" }}
        >
          <div className="container_effectiviness_title container_double_from_title">
            <span>RECEBE 2X</span>
          </div>
          <div className="container_effectiviness_icon container_double_from_icon">
            {doubleDamageFrom ? (
              doubleDamageFrom.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {normalDamageFrom.length > 0 && (
        <div
          className="container_effectiviness container_normal_from"
          style={{ backgroundColor: "silver" }}
        >
          <div className="container_effectiviness_title container_normal_from_title">
            <span>DANO NORMAL</span>
          </div>
          <div className="container_effectiviness_icon container_normal_from_icon">
            {normalDamageFrom ? (
              normalDamageFrom.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {halfDamageToT1.length > 0 && (
        <div
          className="container_effectiviness container_half_to"
          style={{ backgroundColor: "orangeRed" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeUm} type={typeUm} size="70%" />
          </div>
          <div className="container_effectiviness_title container_half_to_title">
            <span>DA 1/2</span>
          </div>
          <div className="container_effectiviness_icon container_half_to_icon">
            {halfDamageToT1 ? (
              halfDamageToT1.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {halfDamageToT2.length > 0 && (
        <div
          className="container_effectiviness container_half_to"
          style={{ backgroundColor: "orangeRed" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeDois} type={typeDois} size="70%" />
          </div>
          <div className="container_effectiviness_title container_half_to_title">
            <span>DA 1/2</span>
          </div>
          <div className="container_effectiviness_icon container_half_to_icon">
            {halfDamageToT2 ? (
              halfDamageToT2.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {noDamageToT1.length > 0 && (
        <div
          className="container_effectiviness container_nodmg_to"
          style={{ backgroundColor: "orangeRed" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeUm} type={typeUm} size="70%" />
          </div>
          <div className="container_effectiviness_title container_nodmg_to_title">
            <span>NÃO ATINGE</span>
          </div>
          <div className="container_effectiviness_icon container_nodmg_to_icon">
            {noDamageToT1 ? (
              noDamageToT1.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {noDamageToT2.length > 0 && (
        <div
          className="container_effectiviness container_nodmg_to"
          style={{ backgroundColor: "orangeRed" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeDois} type={typeDois} size="70%" />
          </div>
          <div className="container_effectiviness_title container_nodmg_to_title">
            <span>NÃO ATINGE</span>
          </div>
          <div className="container_effectiviness_icon container_nodmg_to_icon">
            {noDamageToT2 ? (
              noDamageToT2.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {doubleDamageToT1.length > 0 && (
        <div
          className="container_effectiviness container_double_to"
          style={{ backgroundColor: "greenyellow" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeUm} type={typeUm} size="70%" />
          </div>
          <div className="container_effectiviness_title container_double_to_title">
            <span>DA 2X</span>
          </div>
          <div className="container_effectiviness_icon container_double_to_icon">
            {doubleDamageToT1 ? (
              doubleDamageToT1.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {doubleDamageToT2.length > 0 && (
        <div
          className="container_effectiviness container_double_to"
          style={{ backgroundColor: "greenyellow" }}
        >
          <div className="cointainer_absolute_icon">
            <GetTypeIcon key={typeDois} type={typeDois} size="70%" />
          </div>
          <div className="container_effectiviness_title container_double_to_title">
            <span>DA 2X</span>
          </div>
          <div className="container_effectiviness_icon container_double_to_icon">
            {doubleDamageToT2 ? (
              doubleDamageToT2.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {halfDamageFrom.length > 0 && (
        <div
          className="container_effectiviness container_half_from"
          style={{ backgroundColor: "greenyellow" }}
        >
          <div className="container_effectiviness_title container_half_from_title">
            <span>RECEBE 1/2</span>
          </div>
          <div className="container_effectiviness_icon container_half_from_icon">
            {halfDamageFrom ? (
              halfDamageFrom.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}

      {noDamageFrom.length > 0 && (
        <div
          className="container_effectiviness container_nodmg_from"
          style={{ backgroundColor: "greenyellow" }}
        >
          <div className="container_effectiviness_title container_nodmg_from_title">
            <span>NÂO RECEBE</span>
          </div>
          <div className="container_effectiviness_icon container_nodmg_from_icon">
            {noDamageFrom ? (
              noDamageFrom.map((type, index) => (
                <GetTypeIcon
                  key={index}
                  className={`${type}_icon`}
                  type={type}
                  size="30%"
                />
              ))
            ) : (
              <span>Padrão</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
