import "./index.scss"
import "../../../Common/common.scss"

export default function Card(props){
    return(
        <main className="cards">
            <div className="div-img">
                <img className="icon" src={props.img} />
            </div>
            <div className="div-p">
                <p>{props.txt}</p>
            </div>
        </main>
    )
}