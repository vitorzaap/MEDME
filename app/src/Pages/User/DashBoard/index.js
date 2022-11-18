import "./index.scss";
import "../Consultas/index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import Cards from "./Cards-DashBoard";
import Calendar from "../../../assets/images/calendar-dashboard.svg";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { getConsultasId, LastAvaliation, pendentConsult } from "../../../api/userApi.js";
export default function Index() {
	const user = storage("userInfo");
	const [consultas, setConsultas] = useState([]);
	const [consPendente, setConsPendente] = useState([])
	const [lastAvaliation, setLastAvaliation] = useState([])
	const [erro, setErro] = useState();
	async function pendentConsultResponse(){
		setConsPendente(await pendentConsult(user.id))
	}
	async function LastAvaliationResponse(){
		setLastAvaliation(await LastAvaliation(user.id))
	}
	useEffect(() => {
		async function getConsult() {
			try {
				let limit = 9;
				if (window.innerHeight <= 696) {
					limit = 4;
				}
				let response = await getConsultasId(user.id, storage("page"), limit);
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
		pendentConsultResponse()
		LastAvaliationResponse()
	}, []);
	console.log(lastAvaliation)
	return (
		<main className="dashboard-main">
			<section className="dashboard-section-main">
				<Cabecalho />
				<div className="dashboard-content">
					<div className="dashboard-cards-content">
						<Cards cor='#39B6D2' titulo="Avaliações" desc={lastAvaliation.ds_avaliacao} subtitulo="Sua última avaliação" />
						<Cards cor='#6336FF' titulo="Conversas" numero={consPendente.length} subtitulo="Conversas ainda não respondidas." />
					</div>
					<div className="main-div-table">
						<table className="user-table">
							<tr className="user-tr">
								<th>Médico</th>
								<th>Data</th>
								<th>Hora</th>
								<th>Tipo</th>
								<th>N° Consulta</th>
								<th>Plataforma</th>
								<th style={{ textAlign: "center" }}>Status e Ações</th>
							</tr>

							{consultas.map((item) => (
								<tr className="data">
									<td>{item.medico}</td>
									<td>{item.dataConsulta}</td>
									<td>{item.horaConsulta}</td>
									<td>{item.atuacao}</td>
									<td>#{item.idConsultaUsuario}</td>
									<td>{item.plataforma}</td>
									<td className="td-buttons">
										{(item.idSituacao && item.diff > 0) == 2 && <span className="item2">Consulta aceita</span>}
										{item.idSituacao == 3 && <span className="item3">Consulta recusada</span>}
										{item.idSituacao == 4 && <span className="item4">Consulta avaliada</span>}
										{item.diff < 0 && item.idSituacao == 1 && (
											<span className="item1">
												{" "}
												<b>Aceite esta consulta</b>
											</span>
										)}
										{item.diff > 0 && item.idSituacao != 4 && item.idSituacao != 3 && (
											<span className="item1">
												{" "}
												<b>avalie esta consulta!</b>
											</span>
										)}
									</td>
								</tr>
							))}
						</table>
						{erro !== undefined && (
							<div className="err-div-message" style={{ width: '80.25%' }}>
								<span className="err-message">{erro}</span>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
