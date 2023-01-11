import "./style.css";

const Painel = ({ chutes }) => {
    return (
        <div className="Painel">
            <Palavra />
            <Palavra />
            <Palavra />
            <Palavra />
            <Palavra />
        </div>
    );
};

const Palavra = ({ palavra }) => {
    let letter1 = "R";
    let letter2 = "A";
    let letter3 = "I";
    let letter4 = "O";
    let letter5 = "U";

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
