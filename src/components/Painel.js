import "./style.css";
import { useContext } from "react";
import ChutesContext from "../contexts/chutes_context";

const Painel = () => {
    const { chutes, indexTentativa, tentativa } = useContext(ChutesContext);

    return (
        <div className="Painel">
            <Palavra
                palavra={
                    indexTentativa === 0 ? tentativa : (chutes || [])[0] || ""
                }
            />
            <Palavra
                palavra={
                    indexTentativa === 1 ? tentativa : (chutes || [])[1] || ""
                }
            />
            <Palavra
                palavra={
                    indexTentativa === 2 ? tentativa : (chutes || [])[2] || ""
                }
            />
            <Palavra
                palavra={
                    indexTentativa === 3 ? tentativa : (chutes || [])[3] || ""
                }
            />
            <Palavra
                palavra={
                    indexTentativa === 4 ? tentativa : (chutes || [])[4] || ""
                }
            />
        </div>
    );
};

const Palavra = ({ palavra }) => {
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

    return (
        <div className="Palavra">
            <div className="Letra">{letter1}</div>
            <div className="Letra">{letter2}</div>
            <div className="Letra">{letter3}</div>
            <div className="Letra">{letter4}</div>
            <div className="Letra">{letter5}</div>
        </div>
    );
};

export default Painel;
