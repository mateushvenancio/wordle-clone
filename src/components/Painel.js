import "./style.css";
import { useContext } from "react";
import ChutesContext from "../contexts/chutes_context";
import { PalavraDoDia } from "../App";

const Painel = () => {
    const { chutes, indexTentativa, tentativa } = useContext(ChutesContext);

    return (
        <div className="Painel">
            <Palavra
                palavra={
                    indexTentativa === 0 ? tentativa : (chutes || [])[0] || ""
                }
                isTentativa={indexTentativa === 0}
            />
            <Palavra
                palavra={
                    indexTentativa === 1 ? tentativa : (chutes || [])[1] || ""
                }
                isTentativa={indexTentativa === 1}
            />
            <Palavra
                palavra={
                    indexTentativa === 2 ? tentativa : (chutes || [])[2] || ""
                }
                isTentativa={indexTentativa === 2}
            />
            <Palavra
                palavra={
                    indexTentativa === 3 ? tentativa : (chutes || [])[3] || ""
                }
                isTentativa={indexTentativa === 3}
            />
            <Palavra
                palavra={
                    indexTentativa === 4 ? tentativa : (chutes || [])[4] || ""
                }
                isTentativa={indexTentativa === 4}
            />
        </div>
    );
};

const Palavra = ({ palavra, isTentativa }) => {
    let letter1 = "";
    let letter2 = "";
    let letter3 = "";
    let letter4 = "";
    let letter5 = "";

    if (palavra) {
        const novaPalavra = palavra.toUpperCase();
        letter1 = novaPalavra[0];
        letter2 = novaPalavra[1];
        letter3 = novaPalavra[2];
        letter4 = novaPalavra[3];
        letter5 = novaPalavra[4];
    }

    const getCorLetra = (index, letra) => {
        if (PalavraDoDia[index] === letra) {
            return "Verde";
        }

        // TODO Amarelo condicional ao tanto de letras
        if (PalavraDoDia.includes(letra)) {
            return "Amarelo";
        }

        return "Preto";
    };

    const colorir = () => {
        return !isTentativa && palavra;
    };

    return (
        <div className="Palavra">
            <div
                className={`Letra ${colorir() ? getCorLetra(0, letter1) : ""}`}
            >
                {letter1}
            </div>
            <div
                className={`Letra ${colorir() ? getCorLetra(1, letter2) : ""}`}
            >
                {letter2}
            </div>
            <div
                className={`Letra ${colorir() ? getCorLetra(2, letter3) : ""}`}
            >
                {letter3}
            </div>
            <div
                className={`Letra ${colorir() ? getCorLetra(3, letter4) : ""}`}
            >
                {letter4}
            </div>
            <div
                className={`Letra ${colorir() ? getCorLetra(4, letter5) : ""}`}
            >
                {letter5}
            </div>
        </div>
    );
};

export default Painel;
