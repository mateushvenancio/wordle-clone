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
                <Tecla letra={"↩"} />
                {linhaBaixo.map((tecla) => (
                    <Tecla letra={tecla} />
                ))}
                <Tecla letra={"⌫"} />
            </div>
        </div>
    );
};

const Tecla = ({ letra }) => {
    return <div className="Tecla">{letra}</div>;
};

export default Teclado;
