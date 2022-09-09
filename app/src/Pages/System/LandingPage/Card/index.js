import "./index.scss";
import "../../../Common/common.scss";

export default function Index(props) {
    return (
        <main className="card-main">
            <div>
               <img src={props.imagem} className="card-image"/>
            </div>
            <div className="card-parte-texto">
                <div className="card-parte-texto-text">
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
                </div>
            </div>
        </main>
    );
}
