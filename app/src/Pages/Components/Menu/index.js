import "./index.scss"
import "../../Common/common.scss"
import Cards from "./Cards/index"
import logo from "../../../assets/images/Logo2 (2).svg"
import icondb from "../../../assets/images/home-4.svg"
import iconmail from "../../../assets/images/mail-unread.svg"
import iconcalendar from "../../../assets/images/calendar.svg"
import logosair from "../../../assets/images/arrow-log-out.svg" 
import logoaval from "../../../assets/images/medal-2.svg"
import { useNavigate } from "react-router-dom"
import storage from "local-storage";
import { useEffect, useState } from "react"

export default function Menu(props) {
    const navigate = useNavigate()
    function SairClick(){
        storage.remove('local-storage')
        navigate('/')
    }
    useEffect(() => {
        if(!storage('local-storage')){
            navigate('/')
        }
    },[])
    
    return(
        <main className="content-menu">
            <div className="Container-lateral">
                
                <div className="Subcontainer-lateral">
                    <div className="Card">
                        <div className="div-img">
                            <img src={logo} />
                        </div>
                        <div className="logo-div-p">
                            <p>Medme</p>
                        </div>
                    </div>
                    <div>
                        <Cards img={icondb} txt="Dashboard" local="dashboard" selecionado={props.selecionado}/>
                    </div>
                    <div>
                        <Cards img={iconmail} txt="Mensagens" local='mensagens' selecionado={props.selecionado}/>   
                    </div>
                    <div>
                        <Cards  img={iconcalendar} txt="Consultas" local="consultas" selecionado={props.selecionado}/>
                    </div>
                    <div>
                        <Cards img={logoaval} txt="Avaliações" local="avaliações" selecionado={props.selecionado}/>
                    </div>
                    
                </div>
                <div className="Subcontainer2-lateral">
                <div className="Card">
                        <div className="div-img">
                            <img src={logosair} />
                        </div>
                        <div className="div-p" onClick={SairClick}>
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}