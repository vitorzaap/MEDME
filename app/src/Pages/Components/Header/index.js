import "./index.scss"
import "../../Common/common.scss"
import Lupa from "../../../assets/images/search-bar.svg"
import iconsino from "../../../assets/images/bell-2.svg"
import iconuser from "../../../assets/images/user-icon.svg"
import iconconfig from "../../../assets/images/more-vertical.svg"
import storage from "local-storage"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Header(props) {
    const [usuario, setUsuario] = useState(".")
    const navigate = useNavigate()
    useEffect(() => {
        const usuarioLogado = storage('userInfo')
        setUsuario(usuarioLogado.name)
        if(!storage('userInfo')){
            navigate('/')
        }
      }, [])

    return(
        <header className="header-component">
            <div className="search-header">
                <img src={Lupa} />
                <input type="text" placeholder="Buscar consultas" />
            </div>
            <div className="icon-header">
                
            </div>
            <div className="user-card" onClick={() => navigate('/profile')}>
                <img className="iconuser" src={iconuser} />
                <p>{usuario[0].toUpperCase() + usuario.slice(1)}</p>
            </div>
        </header>
    )
}