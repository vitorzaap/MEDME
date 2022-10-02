import "./index.scss";
import "../Consultas/index.scss"
import "../../Common/common.scss";
import Menu from "../../Components/Menu/index.js"
import Cabecalho from "../../Components/Header/index.js"
import Cards from "./Cards-DashBoard"
import Calendar from '../../../assets/images/calendar-dashboard.svg'

export default function Index() {
	return (
		<main className="dashboard-main">
            <Menu selecionado="dashboard" />
            <section className="dashboard-section-main">
                <Cabecalho />
                <div className="dashboard-content">
                    <div className="dashboard-cards-content">
                        <Cards titulo='Avaliações' imagem={Calendar} tipo='numero' numero='65' subtitulo='Sua última avaliação'/>
                        <Cards titulo='Consultas' imagem={Calendar} tipo='numero' numero='65' subtitulo='Consultas realizadas este mês.'/>
                        <Cards titulo='Conversas' imagem={Calendar} tipo='numero' numero='4' subtitulo='Conversas ainda não respondidas.'/>
                    </div>
                    <div className="dashboard-consultas-content">
                    
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
            </section>
		</main>
	);
}
