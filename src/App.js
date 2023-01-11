import "./App.css";
import Painel from "./components/Painel";
import Teclado from "./components/Teclado";

// const PalavraDoDia = "RAIOU";

const App = () => {
    return (
        <div className="App">
            <h2>Wordle</h2>
            <hr />
            <div className="Coluna">
                <Painel />
                <Teclado />
            </div>
        </div>
    );
};

export default App;
