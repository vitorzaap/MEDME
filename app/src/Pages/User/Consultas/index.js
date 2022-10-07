import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { getConsultas, statusConsult } from "../../../api/userApi.js";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
export default function Index() {
	const [consultas, setConsultas] = useState([]);
	const [erro, setErro] = useState();
	useEffect(() => {
		async function getConsult() {
			try {
				const user = storage("userInfo");
				let response = await getConsultas(user.id);
				for (let i = 0; i < response.length; i++) {
					const novaData = new Date(response[i].dataConsulta);
					response[i].dataConsulta = novaData.toLocaleDateString("pt-BR");
					response[i].horaConsulta = response[i].horaConsulta.slice(0, 5);
				}
				setConsultas(response);
			} catch (err) {
				if (err.response.status == 401) {
					setErro(err.response.data.erro);
				}
			}
		}
		getConsult();
	}, []);

	const navigate = useNavigate();

	return (
		<main className="user-main-consultas">
			<Menu selecionado="consultas" />
			<div className="user-consultas-main-content">
				<Toaster />
				<Cabecalho />
				<div className="user-consultas-content">
					<div className="main-div-table">
						<table className="user-table">
							<tr className="user-tr">
								<th>Paciente</th>
								<th>Data</th>
								<th>Hora</th>
								<th>Tipo</th>
								<th>N° Consulta</th>
								<th>Plataforma</th>
							</tr>

							{consultas.map((item) => (
								<tr className="data">
									<td>{item.medico}</td>
									<td>{item.dataConsulta}</td>
									<td>{item.horaConsulta}</td>
									<td>{item.atuacao}</td>
									<td>#{item.idConsulta}</td>
									<td>{item.plataforma}</td>
									<td>
										{item.diff < 0 && (
											<div>
												<button
													className="btn-simple-green"
													onClick={async () => {
														try {
															toast(
																(t) => (
																	<span>
																		Deseja <span style={{color: "#5dce97", fontWeight: "bolder"}}>aceitar</span> a consulta <b>#{item.idConsulta}</b>?
																		<button
																			onClick={async () => {
																				toast.dismiss(t.id);
																				toast.success(`Consulta #${item.idConsulta} aceita com sucesso!`);
																				const r = await statusConsult(item.idConsulta, 2);
																			}}
																			style={{
																				padding: ".6em 1.2em",
																				backgroundColor: "#3DCC87",
																				color: "#fff",
																				border: "none",
																				marginLeft: ".5em",
																				borderRadius: ".5em",
																				fontSize: ".92em",
																			}}>
																			Aceitar
																		</button>
																	</span>
																),
																{
																	style: {
																		width: "max-content",
																		maxWidth: "max-content",
																	},
																}
															);
														} catch (err) {
															if (err.response.status == 401) {
															}
														}
													}}>
													Aceitar Consulta
												</button>
												<button
													className="btn-simple-red"
													onClick={async () => {
														try {
															const r = await statusConsult(item.idConsulta, 3);
															toast(
																(t) => (
																	<span>
																		Deseja <span style={{color: "#E23C3C", fontWeight: "bolder"}}>recusar</span> a consulta #{item.idConsulta}?
																		<button
																			onClick={async () => {
																				toast.dismiss(t.id);
																				toast.success(`Consulta #${item.idConsulta} recusada com sucesso!`);
																				const r = await statusConsult(item.idConsulta, 3);
																			}}
																			style={{
																				padding: ".6em 1.2em",
																				backgroundColor: "#E23C3C",
																				color: "#fff",
																				border: "none",
																				marginLeft: ".5em",
																				borderRadius: ".5em",
																				fontSize: ".92em",
																			}}>
																			Recusar
																		</button>
																	</span>
																),
																{
																	style: {
																		width: "max-content",
																		maxWidth: "max-content",
																	},
																}
															);
														} catch (err) {
															if (err.response.status == 401) {
															}
														}
													}}>
													Recusar Consulta
												</button>
											</div>
										)}
										{item.diff > 0 && (
											<div className="div-btn-blue">
												<button
													className="btn-simple-blue"
													onClick={async () => {
														try {
															navigate("/avaliacoes")
														} catch (err) {
															
														}
													}}>
													Avaliar Consulta
												</button>
											</div>
										)}
									</td>
								</tr>
							))}
						</table>
						{erro !== undefined && (
							<div className="err-div-message">
								<span className="err-message">{erro}</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
