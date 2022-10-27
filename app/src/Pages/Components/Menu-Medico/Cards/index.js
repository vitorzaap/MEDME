import "./index.scss"
import "../../../Common/common.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Card(props){
    const [menuSelecionado, setMenuSelecionado] = useState(props.selecionado)
    const navigate = useNavigate();
    function selecionarMenu(menu){
        setMenuSelecionado(menu)
}   
    function verificarMenuSelecionado(menu){
        if(menu === menuSelecionado) return "card-Selecionado"
        else 
            return "cards"
    }   
    return(
        <main className={verificarMenuSelecionado(`${props.local}`)} onClick={() => {
            navigate(`/${props.local}`)
            selecionarMenu(`${props.local}`)
        }}>
                    <div className="div-img">
                        <img className="icon" src={props.img} />
                    </div>
                    <div className="div-p">
                    <p className="card-p">{props.txt}</p>
                    </div>
            </main>
    )
}