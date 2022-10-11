import "../index.scss";
import "../../../Common/common.scss";
export default function Card(props) {
    return (
        <main className="User-Cards-Medic">
            <div className="User-Cards-Medic-Div-1">
                <img src={props.image}/>
                <div>
                    <h1 className="User-Cards-Medic-Name">
                        {props.name}
                    </h1>
                    <div className="User-Cards-Medic-Profissões">
                        <p>{props.profissão1}</p>
                        <p>{props.profissão2}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="User-Cards-Medic-Descricao">
                <p>
                    {props.descricao}
                </p>
            </div>
        </main>
    );
}