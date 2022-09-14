import "./index.scss"
import "../../Common/common.scss"
import Cards from "./Cards/index"
import logo from "../../../assets/images/Logo2 (2).svg"
import icondb from "../../../assets/images/home-4.svg"
import iconmail from "../../../assets/images/mail-unread.svg"
import iconcalendar from "../../../assets/images/calendar.svg"
import logosair from "../../../assets/images/arrow-log-out.svg" 
import logoaval from "../../../assets/images/medal-2.svg"

export default function Menu(props) {
    return(
        <main className="content-menu">
            <div className="Container">
                
                <div className="Subcontainer">
                    <div className="Card">
                        <div className="div-img">
                            <img src={logo} />
                        </div>
                        <div className="div-p">
                            <p>Medme</p>
                        </div>
                    </div>
                    <div>
                        <Cards img={icondb} txt="Dashboard" />
                    </div>
                    <div>
                        <Cards img={iconmail} txt="Mensagens"  />   
                    </div>
                    <div>
                        <Cards  img={iconcalendar} txt="Consultas" />
                    </div>
                    <div>
                        <Cards img={logoaval} txt="Avaliações" />
                    </div>
                    
                </div>
                <div className="Subcontainer2">
                <div className="Card">
                        <div className="div-img">
                            <img src={logosair} />
                        </div>
                        <div className="div-p">
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}