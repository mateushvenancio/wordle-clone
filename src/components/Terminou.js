import { useContext } from "react";
import { PalavraDoDia } from "../App";
import ChutesContext from "../contexts/chutes_context";
import "./style.css";

const Terminou = () => {
    const { indexTentativa, terminou } = useContext(ChutesContext);

    if (!terminou) {
        return <></>;
    }

    return (
        <div className="Ganhou">
            {indexTentativa > 4 ? PalavraDoDia : "Parabéns"}
        </div>
    );
};

export default Terminou;
