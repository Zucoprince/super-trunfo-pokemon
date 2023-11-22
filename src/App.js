import GetPokemon from "./Components/GetPokemon";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <GetPokemon />
      </div>
      <footer>
        <div className="container_rodape">
          <span className="nome">Desenvolvido por: PEDRO ZUCOLO</span>
          <span className="feito_em">Feito em ReactJS</span>
          <span className="api">API: POKEAPI</span>
        </div>
      </footer>
    </>
  );
}

export default App;
