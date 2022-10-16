import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { getConsultas, getConsultasId, statusConsult } from "../../../api/userApi.js";
import { useNavigate } from "react-router-dom";
import Accept from "./buttonElements/accept";
import toast, { Toaster } from "react-hot-toast";
import Avaliation from "./buttonElements/avaliation.js";
import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";
export default function Index() {
	const [consultas, setConsultas] = useState([]);
	const [erro, setErro] = useState();
	useEffect(() => {
		async function getConsult() {
			try {
				let limit = 10;
				const user = storage("userInfo");
				if (window.innerHeight <= 696) {
					limit = 7;
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
										{(item.idSituacao && item.diff > 0) == 2 && <span className="item2">Você aceitou esta consulta!</span>}
										{item.idSituacao == 3 && <span className="item3">Você recusou esta consulta!</span>}
										{item.idSituacao == 4 && <span className="item4">Consulta já avaliada!</span>}
										{item.diff < 0 && item.idSituacao == 1 && <Accept idConsulta={item.idConsultaUsuario} />}
										{item.diff > 0 && item.idSituacao != 4 && item.idSituacao != 3 && <Avaliation id={item.id} idConsulta={item.idConsultaUsuario} />}
									</td>
								</tr>
							))}
							
						</table>
						<div className="div-table-navButtons">
								{storage("page") > 1 && (
									<div>
										{" "}
										<button
											className="btn-nav"
											onClick={() => {
												let page = storage("page");
												storage("page", page - 1);
												setTimeout(() => {
													window.location.reload();
												}, 500);
											}}>
											<div className="nav-btn-div">
												<img src={arrowLeft} className='back' />
												<p>Página Anterior</p>
											</div>
										</button>
									</div>
								)}
								{((consultas.length >= 7 && window.innerHeight <= 696) || (consultas.length >= 10 && window.innerHeight > 696)) && (
									<div>
										{" "}
										<button
											className="btn-nav"
											onClick={() => {
												let page = storage("page");
												storage("page", page + 1);
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
