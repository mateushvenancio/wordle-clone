import React, { useState } from "react";
import "./App.css";
import Ganhou from "./components/Terminou";
import Painel from "./components/Painel";
import Teclado from "./components/Teclado";
import ChutesContext from "./contexts/chutes_context";

export const PalavraDoDia = "RAIOU";

const App = () => {
    const [chutes, setChutes] = useState([]);
    const [tentativa, setTentativa] = useState("");
    const [indexTentativa, setIndexTentativa] = useState(0);
    const [terminou, setTerminou] = useState(false);

    return (
        <div className="App">
            <h2>WORDLE</h2>
            <hr />
            <ChutesContext.Provider
                value={{
                    chutes,
                    setChutes,
                    tentativa,
                    setTentativa,
                    indexTentativa,
                    setIndexTentativa,
                    terminou,
                    setTerminou,
                }}
            >
                <div className="Coluna">
                    <Ganhou />
                    <Painel />
                    <div className="Espacamento"></div>
                    <Teclado />
                </div>
            </ChutesContext.Provider>
        </div>
    );
};

export default App;
