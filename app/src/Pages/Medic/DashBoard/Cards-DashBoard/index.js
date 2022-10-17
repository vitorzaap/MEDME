import "../../../Common/common.scss"
import "../index.scss"
import imagem from '../../../../assets/images/calendar-dashboard.svg'

export default function Card(props){
    return(
            <main className="doctor-dashboard-cards" style={{backgroundColor: `#${props.cor}`}}>
                    <div className="dashboard-cards-div-1">
                        <img src={props.imagem} style={{backgroundColor: `#${props.accentcolor}`}}/>
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className="dashboard-cards-props">
                        {props.tipo == 'numero' && <p>{props.numero}</p>}
                        {props.tipo != "numero" && <img src={imagem}/>}
                    </div>
                    <div className="dashboard-cards-subtitulo">
                        <h1>{props.subtitulo}</h1>
                    </div>               
            </main>
    )
}