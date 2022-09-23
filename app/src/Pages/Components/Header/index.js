import "./index.scss"
import "../../Common/common.scss"
import Lupa from "../../../assets/images/search-bar.svg"
import iconsino from "../../../assets/images/bell-2.svg"
import iconuser from "../../../assets/images/user-icon.svg"
import iconconfig from "../../../assets/images/more-vertical.svg"
import storage from "local-storage"
import { useState, useEffect } from "react"

export default function Header(props) {

    const [usuario, setUsuario] = useState('')

    useEffect(() => {
        
          const usuarioLogado = storage('local-storage')
          setUsuario(usuarioLogado.nome)
        
      }, [])

    return(
        <header className="header-component">
            <div className="search-header">
                <img src={Lupa} />
                <input type="text" placeholder="Buscar consultas" />
            </div>
            <div className="icon-header">
                <img src={iconsino} />
            </div>
            <div className="user-card">
                <img className="iconuser" src={iconuser} />
                <p>{usuario}</p>
                <img className="iconconfig" src={iconconfig} />
            </div>
        </header>
    )
}