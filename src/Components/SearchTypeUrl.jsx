import { useEffect, useState } from "react";
import { api } from "../services/api";
import GetTypeAverage from "./GetTypeAverage";

export default function SearchTypeUrl(props) {
  const [urlTypeUm, setUrlTypeUm] = useState("");
  const [urlTypeDois, setUrlTypeDois] = useState("");
  const [contentUm, setContentUm] = useState([]);
  const [contentDois, setContentDois] = useState([]);
  const typeAverageUm = GetTypeAverage(contentUm);
  const typeAverageDois = GetTypeAverage(contentDois);
  const [quadraFrom, setQuadraFrom] = useState([]);
  const [normalFrom, setNormalFrom] = useState([]);
  const [noDmgFrom, setNoDmgFrom] = useState([]);

  useEffect(() => {
    setUrlTypeUm(props.types[0].type.url);
    if (props.types.length >= 2) {
      setUrlTypeDois(props.types[1].type.url);
    }
  }, [props.types]);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const responseUm = await api.get(`${urlTypeUm}`);
        setContentUm(responseUm.data);
        if (urlTypeDois) {
          const responseDois = await api.get(`${urlTypeDois}`);
          setContentDois(responseDois.data);
        }
      } catch (error) {
        console.error("Oops! Ocorreu um erro: " + error);
      }
    };
    fetchPokemonSpecies();
  }, [urlTypeUm, urlTypeDois]);

  useEffect(() => {
    function compararElementos(arrayUm, arrayDois, acao) {
      for (let elementoUm of arrayUm) {
        for (let elementoDois of arrayDois) {
          if (elementoUm === elementoDois) {
            acao(elementoUm);
          }
        }
      }
    }

    if (typeAverageUm && typeAverageDois) {
      compararElementos(
        typeAverageUm.double_damage_from,
        typeAverageDois.double_damage_from,
        setQuadraFrom
      );
      compararElementos(
        typeAverageUm.double_damage_from,
        typeAverageDois.half_damage_from,
        setNormalFrom
      );
      compararElementos(
        typeAverageUm.double_damage_from,
        typeAverageDois.no_damage_from,
        setNoDmgFrom
      );
      compararElementos(
        typeAverageUm.half_damage_from,
        typeAverageDois.double_damage_from,
        setNormalFrom
      );
      compararElementos(
        typeAverageUm.no_damage_from,
        typeAverageDois.double_damage_from,
        setNoDmgFrom
      );
    }
  }, [typeAverageUm, typeAverageDois]);

  const combinedTypeAverages = {
    quadra_damage_from: [quadraFrom],

    double_damage_from: [
      ...new Set([
        ...typeAverageUm.double_damage_from,
        ...typeAverageDois.double_damage_from,
      ]),
    ].filter(
      (element) =>
        !quadraFrom.includes(element) &&
        !normalFrom.includes(element) &&
        !noDmgFrom.includes(element)
    ),

    normal_damage_from: [normalFrom],

    half_damage_from: [
      ...new Set([
        ...typeAverageUm.half_damage_from,
        ...typeAverageDois.half_damage_from,
      ]),
    ].filter(
      (element) =>
        !quadraFrom.includes(element) &&
        !normalFrom.includes(element) &&
        !noDmgFrom.includes(element)
    ),

    no_damage_from: [
      ...new Set([
        ...noDmgFrom,
        ...typeAverageUm.no_damage_from,
        ...typeAverageDois.no_damage_from,
      ]),
    ],

    double_damage_to_t1: [typeAverageUm.double_damage_to],

    double_damage_to_t2: [typeAverageDois.double_damage_to],

    half_damage_to_t1: [typeAverageUm.half_damage_to],

    half_damage_to_t2: [typeAverageDois.half_damage_to],

    no_damage_to_t1: [typeAverageUm.no_damage_to],

    no_damage_to_t2: [typeAverageDois.no_damage_to],

    type_um: [typeAverageUm.types],

    type_dois: [typeAverageDois.types],
  };

  return combinedTypeAverages;
}
