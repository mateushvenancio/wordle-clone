import { useCallback, useContext, useEffect } from "react";
import { PalavraDoDia } from "../App";
import ChutesContext from "../contexts/chutes_context";

import "./style.css";

const Teclado = () => {
    const linhaCima = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linhaMeio = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linhaBaixo = ["Z", "X", "C", "V", "B", "N", "M", "I", "O", "P"];

    const {
        terminou,
        tentativa,
        setTentativa,
        setChutes,
        indexTentativa,
        setIndexTentativa,
        setTerminou,
    } = useContext(ChutesContext);

    const ouvirTeclado = useCallback(
        (event) => {
            console.log("EVENTO: ", event.code);
            console.log("ENTER? ", event.code === "Enter");
            console.log("APAGAR? ", event.code === "Backspace");

            const teclas = [...linhaCima, ...linhaMeio, ...linhaBaixo];

            if (event.key === "Enter") {
                handleClickEnter();
            }

            if (event.key === "Backspace") {
                handleClickApagar();
            }

            if (teclas.includes(event.key.toUpperCase())) {
                handleClickTecla(event.key);
            }
        },
        [tentativa]
    );

    useEffect(() => {
        document.addEventListener("keydown", ouvirTeclado);
        return () => document.removeEventListener("keydown", ouvirTeclado);
    }, [ouvirTeclado]);

    const handleClickTecla = (value) => {
        if (terminou || tentativa.length >= 5) {
            return;
        }
        setTentativa((e) => e + value);
    };

    const handleClickApagar = () => {
        if (tentativa.length > 0) {
            setTentativa((e) => e.substring(0, e.length - 1));
        }
    };

    const handleClickEnter = () => {
        if (terminou) {
            return;
        }
        if (tentativa.length !== 5) {
            return;
        }

        setChutes((e) => [...e, tentativa]);
        setIndexTentativa((e) => e + 1);
        setTentativa("");

        if (PalavraDoDia.toUpperCase() === tentativa.toUpperCase()) {
            return setTerminou(true);
        }
        if (indexTentativa >= 4) {
            return setTerminou(true);
        }
    };

    return (
        <div className="Teclado">
            <div className="LinhaTeclado">
                {linhaCima.map((tecla) => (
                    <div onClick={() => handleClickTecla(tecla)}>
                        <Tecla letra={tecla} />
                    </div>
                ))}
            </div>
            <div className="LinhaTeclado">
                {linhaMeio.map((tecla) => (
                    <div onClick={() => handleClickTecla(tecla)}>
                        <Tecla letra={tecla} />
                    </div>
                ))}
            </div>
            <div className="LinhaTeclado">
                <div onClick={handleClickEnter}>
                    <TeclaEnter />
                </div>
                {linhaBaixo.map((tecla) => (
                    <div onClick={() => handleClickTecla(tecla)}>
                        <Tecla letra={tecla} />
                    </div>
                ))}
                <div onClick={handleClickApagar}>
                    <TeclaApagar />
                </div>
            </div>
        </div>
    );
};

const TeclaEnter = () => {
    return <div className="TeclaGrande">ENTER</div>;
};

const TeclaApagar = () => {
    return <div className="TeclaGrande">⌫</div>;
};

const Tecla = ({ letra }) => {
    return <div className="Tecla">{letra}</div>;
};

export default Teclado;
