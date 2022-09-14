import "./index.scss"
import "../../Common/common.scss"
import Lupa from "../../../assets/images/search-bar.svg"
import iconsino from "../../../assets/images/bell-2.svg"
import iconuser from "../../../assets/images/user-icon.svg"
import iconconfig from "../../../assets/images/more-vertical.svg"

export default function Header(props) {
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
                <p>Kalel Rodrigues</p>
                <img className="iconconfig" src={iconconfig} />
            </div>
        </header>
    )
}