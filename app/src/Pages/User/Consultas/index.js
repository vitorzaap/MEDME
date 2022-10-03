import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js"
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
                <NovaConsulta />
            </div>
            <Menu selecionado="consultas"/>
            <div className="container-consultas">
                <Cabecalho />
                <div className="content-consultas">
                    <div className="button-nova">
                        <button onClick={showNova} className="nova-consulta">
                            <img src={iconAdd} alt='icon' />
                            <p>Nova Consulta</p>
                        </button>
                    </div>
                    <div className="get-consultas">
                        <div className="lista-consultas-main">
                            <div className="div-h1-consultas-main">
                                <h1 className="h1-consultas-main">Minhas consultas</h1>
                            </div>
                            <div className="main-container-consultas">
                                <div className="titles-main-container-consultas">
                                    <table>
                                        <tr>
                                            <th>Paciente</th>
                                            <th>Data</th>
                                            <th>Hora</th>
                                            <th>Marcada em</th>
                                            <th>Tipo</th>
                                            <th>N° Consulta</th>
                                            <th>Plataforma</th>
                                            <th>Status Da Consulta</th>
                                        </tr> 
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}