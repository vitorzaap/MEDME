import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { getConsultasId } from "../../../api/userApi.js";
import { useNavigate } from "react-router-dom";
import Accept from "./buttonElements/accept";
import { Toaster } from "react-hot-toast";
import Avaliation from "./buttonElements/avaliation.js";
import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";
export default function Index() {
	const [consultas, setConsultas] = useState([]);
	const [length, setLength] = useState()
	const [erro, setErro] = useState();
	const navigate = useNavigate();
	if (!storage("userInfo")) {
		navigate("/login")
	}
	useEffect(() => {
		async function getConsult() {
			try {
				let limit = 5;
				const user = storage("userInfo");
				if (window.innerHeight <= 696) {
					limit = 5;
				}
				let response = await getConsultasId(user.id, storage("page"), limit);
				let length = await getConsultasId(user.id, 0, Infinity);
				for (let i = 0; i < response.length; i++) {
					const novaData = new Date(response[i].dataConsulta);
					response[i].dataConsulta = novaData.toLocaleDateString("pt-BR");
					response[i].horaConsulta = response[i].horaConsulta.slice(0, 5);
				}
				setLength(length.length)
				setConsultas(response);
				
			} catch (err) {
				setErro(err.response.data.erro);
			}
		}
		getConsult();
	}, []);
	return (
		<main className="user-main-consultas">
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
									<td>#{item.idSituacao}</td>
									<td>{item.plataforma}</td>
									<td className="td-buttons">
										{(item.idSituacao == 2 && item.diff < 0)  && <span className="item2">Consulta aceita</span>}
										{item.idSituacao == 3 && <span className="item3">Consulta recusada</span>}
										{item.idSituacao == 4 && <span className="item4">Consulta avaliada</span>}
										{(item.diff < 0 && item.idSituacao == 1) && <Accept idConsulta={item.idConsulta} />}
										{(item.diff > 0 && item.idSituacao != 4 && item.idSituacao != 3) && <Avaliation id={item.id} idConsulta={item.idConsulta} />}
									</td>
								</tr>
							))}
							
						</table>
						{length >= 5 && <div className="div-table-navButtons">
							{storage("page") > 1 && (
								<div>
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
							{(length > 5 && consultas.length == 5) && <div>
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
								</div>}
							
						</div>}
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
