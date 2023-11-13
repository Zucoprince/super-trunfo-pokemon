import { useEffect, useState } from "react";

export default function GetMainImage(props, itsShiny) {
  const [mainImage, setMainImage] = useState("");
  const [viradaImageFront, setViradaImageFront] = useState("");
  const [viradaImageBack, setViradaImageBack] = useState("");

  useEffect(() => {
    if (itsShiny === true) {
      setMainImage(props.sprites.other["official-artwork"].front_shiny);
      setViradaImageFront(props.sprites.front_shiny);
      setViradaImageBack(props.sprites.back_shiny);
    } else {
      setMainImage(props.sprites.other["official-artwork"].front_default);
      setViradaImageFront(props.sprites.front_default);
      setViradaImageBack(props.sprites.back_default);
    }
  }, [props, itsShiny]);

  return {
    mainImage: mainImage,
    front: viradaImageFront,
    back: viradaImageBack,
  };
}
