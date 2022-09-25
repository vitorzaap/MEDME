import "./index.scss"
import "../../../Common/common.scss"
import { Link } from "react-router-dom"

export default function Card(props){
    return(
        
            <main className="cards">
                    <div className="div-img">
                        <img className="icon" src={props.img} />
                    </div>
                    <div className="div-p">
                    <Link to={props.local} className="card-p">{props.txt}</Link>
                    </div>
            </main>
        
    )
}