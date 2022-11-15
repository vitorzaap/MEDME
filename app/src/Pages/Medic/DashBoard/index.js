import "./index.scss";
import "../Consultas/index.scss"
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js"
import Cards from "./Cards-DashBoard"
import Calendar from '../../../assets/images/calendar-dashboard.svg'
import Star from '../../../assets/images/Star1.svg'
import Mail from '../../../assets/images/mail-unread2.svg'
import storage from "local-storage";
import { useEffect, useState } from "react";
import { allConsuts, LastAvaliation, pendentConsult } from "../../../api/medicApi";

export default function Index() {
    const user = storage("doctorInfo");
    const [consPendente, setConsPendente] = useState([])
    const [lastAvaliation, setLastAvaliation] = useState([])
    const [consults, setConsults] = useState([])
    async function pendentConsultResponse(){
		setConsPendente(await pendentConsult(user.id))
        setConsults(await allConsuts(user.id))
        setLastAvaliation(await LastAvaliation(user.id))
	}
    useEffect(() => {
        pendentConsultResponse()
    },[])
	return (
		<main className="dashboard-main">
            <section className="dashboard-section-main">
                <Cabecalho />
                <div className="dashboard-content">
                    <div className="dashboard-cards-content">
                        <Cards titulo='Avaliações' desc={lastAvaliation.ds_avaliacao} subtitulo='Sua última avaliação recebida' cor='4375F4' accentcolor='8FAEFC'/>
                        <Cards titulo='Consultas' numero={consults.length} subtitulo='Consultas já criadas' cor='39B6D2' accentcolor='84D6E8'/>
                        <Cards titulo='Conversas' numero={consPendente.length} subtitulo="Conversas ainda não respondidas." cor='6336FF' accentcolor='7750FF'/>
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
