export default function GetGen(props) {
  const getGenFunction = () => {
    if (props >= 1 && props <= 151) {
      return "1° Geração";
    }
    if (props >= 152 && props <= 251) {
      return "2° Geração";
    }
    if (props >= 153 && props <= 386) {
      return "3° Geração";
    }
    if (props >= 387 && props <= 493) {
      return "4° Geração";
    }
    if (props >= 494 && props <= 649) {
      return "5° Geração";
    }
    if (props >= 650 && props <= 721) {
      return "6° Geração";
    }
    if (props >= 722 && props <= 809) {
      return "7° Geração";
    }
    if (props >= 810 && props <= 905) {
      return "8° Geração";
    }
    if (props >= 906 && props <= 1010) {
      return "9° Geração";
    }
    if (props > 1010) {
      return "Desconhecido";
    }
  };

  return getGenFunction();
}
