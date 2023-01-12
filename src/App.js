import React, { useState } from "react";
import "./App.css";
import Painel from "./components/Painel";
import Teclado from "./components/Teclado";
import ChutesContext from "./contexts/chutes_context";

const App = () => {
    const [chutes, setChutes] = useState([]);
    const [tentativa, setTentativa] = useState("");
    const [indexTentativa, setIndexTentativa] = useState(0);

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
                }}
            >
                <div className="Coluna">
                    <Painel />
                    <div className="Espacamento"></div>
                    <Teclado />
                </div>
            </ChutesContext.Provider>
        </div>
    );
};

export default App;
