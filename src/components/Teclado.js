import { useContext } from "react";
import ChutesContext from "../contexts/chutes_context";

import "./style.css";

const Teclado = () => {
    const linhaCima = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linhaMeio = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linhaBaixo = ["Z", "X", "C", "V", "B", "N", "M", "I", "O", "P"];

    return (
        <div className="Teclado">
            <div className="LinhaTeclado">
                {linhaCima.map((tecla) => (
                    <Tecla letra={tecla} />
                ))}
            </div>
            <div className="LinhaTeclado">
                {linhaMeio.map((tecla) => (
                    <Tecla letra={tecla} />
                ))}
            </div>
            <div className="LinhaTeclado">
                <TeclaEnter />
                {linhaBaixo.map((tecla) => (
                    <Tecla letra={tecla} />
                ))}
                <TeclaApagar />
            </div>
        </div>
    );
};

const TeclaEnter = () => {
    const { tentativa, setChutes, setIndexTentativa, setTentativa } =
        useContext(ChutesContext);

    const handleClick = () => {
        if (tentativa.length === 5) {
            setChutes((e) => [...e, tentativa]);
            setIndexTentativa((e) => e + 1);
            setTentativa("");
        }
    };
    return (
        <div onClick={handleClick} className="TeclaGrande">
            ENTER
        </div>
    );
};

const TeclaApagar = () => {
    const { tentativa, setTentativa } = useContext(ChutesContext);
    const onClickHandler = () => {
        if (tentativa.length > 0) {
            setTentativa((e) => e.substring(0, e.length - 1));
        }
    };
    return (
        <div onClick={onClickHandler} className="TeclaGrande">
            ⌫
        </div>
    );
};

const Tecla = ({ letra }) => {
    const { setTentativa } = useContext(ChutesContext);

    const onClickHandle = (value) => {
        setTentativa((e) => e + value);
    };

    return (
        <div onClick={() => onClickHandle(letra)} className="Tecla">
            {letra}
        </div>
    );
};

export default Teclado;
