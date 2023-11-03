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

  const combinedTypeAverages = {
    double_damage_from: [
      ...new Set([
        ...typeAverageUm.double_damage_from,
        ...typeAverageDois.double_damage_from,
      ]),
    ],
    half_damage_from: [
      ...new Set([
        ...typeAverageUm.half_damage_from,
        ...typeAverageDois.half_damage_from,
      ]),
    ],
    no_damage_from: [
      ...new Set([
        ...typeAverageUm.no_damage_from,
        ...typeAverageDois.no_damage_from,
      ]),
    ],
    double_damage_to: [
      ...new Set([
        ...typeAverageUm.double_damage_to,
        ...typeAverageDois.double_damage_to,
      ]),
    ],
    half_damage_to: [
      ...new Set([
        ...typeAverageUm.half_damage_to,
        ...typeAverageDois.half_damage_to,
      ]),
    ],
    no_damage_to: [
      ...new Set([
        ...typeAverageUm.no_damage_to,
        ...typeAverageDois.no_damage_to,
      ]),
    ],
  };

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

  return combinedTypeAverages;
}
