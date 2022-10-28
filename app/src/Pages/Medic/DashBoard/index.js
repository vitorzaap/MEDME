import "./index.scss";
import "../Consultas/index.scss"
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js"
import Cards from "./Cards-DashBoard"
import Calendar from '../../../assets/images/calendar-dashboard.svg'
import Star from '../../../assets/images/Star1.svg'
import Mail from '../../../assets/images/mail-unread2.svg'

export default function Index() {
	return (
		<main className="dashboard-main">
            <section className="dashboard-section-main">
                <Cabecalho />
                <div className="dashboard-content">
                    <div className="dashboard-cards-content">
                        <Cards titulo='Avaliações' imagem={Star} tipo='numero' numero='65' subtitulo='Sua última avaliação' cor='4375F4' accentcolor='8FAEFC'/>
                        <Cards titulo='Consultas' imagem={Calendar} tipo='numero' numero='65' subtitulo='Consultas realizadas este mês.' cor='39B6D2' accentcolor='84D6E8'/>
                        <Cards titulo='Conversas' imagem={Mail} tipo='numero' numero='4' subtitulo='Conversas ainda não respondidas.' cor='6336FF' accentcolor='7750FF'/>
                    </div>
                    <div className="dashboard-consultas-content">
                            <div className="div-h1-consultas-main">
                                <h1 className="h1-consultas-main">Minhas consultas</h1>
                            </div>
                            <div className="main-container-consultas">
                                <div className="titles-main-container-consultas">
                                    <table >
                                        <tr>
                                            <th>Paciente</th>
                                            <th>Data</th>
                                            <th>Hora</th>
                                            <th>Marcada em</th>
                                            <th>Tipo</th>
                                            <th>Plataforma</th>
                                            <th>Status Da Consulta</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
		</main>
	);
}
