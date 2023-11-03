import { useEffect, useState } from "react";

export default function GetTypeAverage(props) {
  const [damageRelations, setDamageRelations] = useState({
    double_damage_from: [],
    half_damage_from: [],
    no_damage_from: [],
    double_damage_to: [],
    half_damage_to: [],
    no_damage_to: [],
  });

  useEffect(() => {
    if (props.damage_relations) {
      props.damage_relations.double_damage_from?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          double_damage_from: [...prevRelations.double_damage_from, item.name],
        }));
      });
      props.damage_relations.half_damage_from?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          half_damage_from: [...prevRelations.half_damage_from, item.name],
        }));
      });
      props.damage_relations.no_damage_from?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          no_damage_from: [...prevRelations.no_damage_from, item.name],
        }));
      });


      props.damage_relations.double_damage_to?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          double_damage_to: [...prevRelations.double_damage_to, item.name],
        }));
      });
      props.damage_relations.half_damage_to?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          half_damage_to: [...prevRelations.half_damage_to, item.name],
        }));
      });
      props.damage_relations.no_damage_to?.forEach((item) => {
        setDamageRelations((prevRelations) => ({
          ...prevRelations,
          no_damage_to: [...prevRelations.no_damage_to, item.name],
        }));
      });
    }

    
  }, [props.damage_relations]);

  return damageRelations ;
}
