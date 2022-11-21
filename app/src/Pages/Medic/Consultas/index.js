import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import NovaConsulta from "./NovaConsulta/index.js";
import { getConsultas } from "../../../api/medicApi.js";
import storage from "local-storage";
import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
	const [erro, setErro] = useState();
	const [consultas, setConsultas] = useState([]);
	const [length, setLength] = useState();
	const navigate = useNavigate();

	function showNova() {
		var element = document.getElementById("pop-up");
		element.classList.add("show-main");
	}

	useEffect(() => {
		async function getConsult() {
			try {
				let limit = 5;
				const user = storage("doctorInfo");
				if (window.innerHeight <= 696) {
					limit = 5;
				}
				let response = await getConsultas(user.id, storage("doctorPage"), limit);
				let length = await getConsultas(user.id, 0, Infinity);
				for (let i = 0; i < response.length; i++) {
					const novaData = new Date(response[i].dataConsulta);
					response[i].dataConsulta = novaData.toLocaleDateString("pt-BR");
					response[i].horaConsulta = response[i].horaConsulta.slice(0, 5);
				}
				setLength(length.length);
				setConsultas(response);
			} catch (err) {
				setErro(err.response.data.erro);
			}
		}
		getConsult();
	}, []);

	return (
		<main className="main-consultas">
			<div className="pop-up" id="pop-up">
				<Toaster />
				<NovaConsulta />
			</div>
			<div className="container-consultas">
				<Cabecalho />
				<div className="content-consultas">
					<div className="button-nova"></div>
					<div className="get-consultas">
						<div className="main-div-table">
							<div className="btn-size-div">
								<button className="sg-lg-btn-complex" onClick={showNova}>
									Nova Consulta
								</button>
							</div>
							<table className="user-table">
								<tr className="user-tr">
									<th>Paciente</th>
									<th>Data</th>
									<th>Hora</th>
									<th>Tipo</th>
									<th>N° Consulta</th>
									<th>Plataforma</th>
									<th>Situação</th>
								</tr>

								{consultas.map((item) => (
									<tr className="data">
										<td>{item.usuario}</td>
										<td>{item.dataConsulta}</td>
										<td>{item.horaConsulta}</td>
										<td>{item.atuacao}</td>
										<td>#{item.idConsulta}</td>
										<td>{item.plataforma}</td>
										<td className={`item${item.idSituacao}`}>{item.situacao}</td>
									</tr>
								))}
							</table>
							{length >= 5 && (
								<div className="div-table-navButtons">
									{storage("doctorPage") > 1 && (
										<div>
											<button
												className="btn-nav"
												onClick={() => {
													let page = storage("doctorPage");
													storage("doctorPage", page - 1);
													setTimeout(() => {
														window.location.reload();
													}, 500);
												}}>
												<div className="nav-btn-div">
													<img src={arrowLeft} className="back" />
													<p>Página Anterior</p>
												</div>
											</button>
										</div>
									)}
									{length > 5 && consultas.length == 5 && (
										<div>
											<button
												className="btn-nav"
												onClick={() => {
													let page = storage("doctorPage");
													storage("doctorPage", page + 1);
													setTimeout(() => {
														window.location.reload();
													}, 500);
												}}>
												<div className="nav-btn-div">
													<p>Próxima Página</p>
													<img src={arrowRight} />
												</div>
											</button>
										</div>
									)}
								</div>
							)}
							{erro !== undefined && (
								<div className="err-div-message">
									<span className="err-message">{erro}</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
