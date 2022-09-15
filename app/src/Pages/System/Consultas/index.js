import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu/index.js"
import Cabecalho from "../../Components/Header/index.js"
import iconAdd from "../../../assets/images/Union.svg"
import NovaConsulta from "./NovaConsulta/index.js"


export default function Index() {

    function showNova(){
        var element = document.getElementById("pop-up");
            element.classList.add("show-main");
    }


    return(
        <main className="main-consultas">
            <div className="pop-up" id="pop-up">
                <NovaConsulta/>
            </div>
            <Menu />
            <div className="container-consultas">
                <Cabecalho />
                <div className="content-consultas">
                    <div className="button-nova">
                        <button onClick={showNova} className="nova-consulta">
                            <img src={iconAdd} />
                            <p>Nova Consulta</p>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}