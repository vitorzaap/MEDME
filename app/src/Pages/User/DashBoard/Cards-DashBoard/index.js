import { useNavigate } from "react-router-dom"
import "../../../Common/common.scss"
import "../index.scss"
export default function Card(props) {

    const navigate = useNavigate();

    return(
        <main className="dashboard-cards" style={{ backgroundColor: `${props.cor}` }} onClick={() => {
            navigate(`${props.linkTo}`)
        }}>
                    <div className="dashboard-cards-div-1">
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className="dashboard-cards-props">
                        <p>{props.numero}</p>
                        <h6>{props.desc}</h6>
                    </div>
                    <div className="dashboard-cards-subtitulo">
                        <h1>{props.subtitulo}</h1>
                    </div>
                
            </main>
    )
}