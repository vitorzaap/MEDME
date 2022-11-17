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
import { allConsuts, LastAvaliation, pendentConsult, getConsultas } from "../../../api/medicApi";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const user = storage("doctorInfo");
    const [consPendente, setConsPendente] = useState([])
    const [consultas, setConsultas] = useState([])
    const [erro, setErro] = useState();
    const [lastAvaliation, setLastAvaliation] = useState()
    const [consults, setConsults] = useState([])
    const navigate = useNavigate();
	if (!storage("doctorInfo")) {
		navigate("/medic/login")
	}

    async function getConsult() {
        try {
            let limit = 9;
            if (window.innerHeight <= 696) {
                limit = 4;
            }
            let response = await getConsultas(user.id, storage("page"), limit);
            for (let i = 0; i < response.length; i++) {
                const novaData = new Date(response[i].dataConsulta);
                response[i].dataConsulta = novaData.toLocaleDateString("pt-BR");
                response[i].horaConsulta = response[i].horaConsulta.slice(0, 5);
            }
            setConsultas(response);
        } catch (err) {
            setErro(err.response.data.erro);
        }
    }
    getConsult();

    async function pendentConsultResponse() {
        const last = await LastAvaliation(user.id)
        if (!last) {
            setLastAvaliation(0)
        }
        else {
            setLastAvaliation(last)
        }
        setConsPendente(await pendentConsult(user.id))
        setConsults(await allConsuts(user.id))
        
        

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
                        <Cards titulo='Avaliações' numero={lastAvaliation} subtitulo='Sua última avaliação recebida' cor='#4375F4' accentcolor='8FAEFC'/>
                        <Cards titulo='Consultas' numero={consults.length} subtitulo='Consultas já criadas' cor='#39B6D2' accentcolor='#84D6E8'/>
                        <Cards titulo='Conversas' numero={consPendente.length} subtitulo="Conversas criadas." cor='#6336FF' accentcolor='7750FF'/>
                    </div>
                    
                        <div className="main-div-table" style={{ border:"1px solid red", justifyContent:"start",width: "100%" }}>
						<table className="user-table" style={{width: "96.5%"}}>
							<tr className="user-tr">
								<th>Paciente</th>
								<th>Data</th>
								<th>Hora</th>
								<th>Tipo</th>
								<th>N° Consulta</th>
								<th>Plataforma</th>
								<th style={{ textAlign: "center" }}>Status e Ações</th>
							</tr>

							{consultas.map((item) => (
								<tr className="data">
									<td>{item.usuario}</td>
									<td>{item.dataConsulta}</td>
									<td>{item.horaConsulta}</td>
									<td>{item.atuacao}</td>
									<td>#{item.consultas}</td>
									<td>{item.plataforma}</td>
									<td className="td-buttons">
										{(item.idSituacao && item.diff > 0) == 2 && <span className="item2">Consulta aceita</span>}
										{item.idSituacao == 3 && <span className="item3">Consulta recusada</span>}
										{item.idSituacao == 4 && <span className="item4">Consulta avaliada</span>}
										{item.diff < 0 && item.idSituacao == 1 && (
											<span className="item1">
												<b>Resposta pendente</b>
											</span>
										)}
										{item.diff > 0 && item.idSituacao != 4 && item.idSituacao != 3 && (
											<span className="item1">
												<b>Esperando avaliação</b>
											</span>
										)}
									</td>
								</tr>
							))}
						</table>
						{erro !== undefined && (
                            <div className="err-div-message" style={{ width: "96.5%" }}>
								<span className="err-message">{erro}</span>
							</div>
						)}
					</div>
                        </div>
                    
            </section>
		</main>
	);
}
