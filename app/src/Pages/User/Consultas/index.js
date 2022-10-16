import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { getConsultas, getConsultasId, statusConsult } from "../../../api/userApi.js";
import { useNavigate } from "react-router-dom";
import Accept from "./buttonElements/accept"
import toast, { Toaster } from "react-hot-toast";
import Avaliation from "./buttonElements/avaliation.js"
export default function Index() {
	const [consultas, setConsultas] = useState([]);
	const [erro, setErro] = useState();
	useEffect(() => {
		async function getConsult() {
			try {
				const user = storage("userInfo");
				let response = await getConsultasId(user.id, storage("page"));
				for (let i = 0; i < response.length; i++) {
					const novaData = new Date(response[i].dataConsulta);
					response[i].dataConsulta = novaData.toLocaleDateString("pt-BR");
					response[i].horaConsulta = response[i].horaConsulta.slice(0, 5);
				}
				setConsultas(response);
			} catch (err) {
				setErro(err.response.data.erro)
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
								{consultas.length >= 10 && 
								<th> <button className="btn-simple-green" onClick={() => {
									let page = storage("page")
									storage("page", page+1)
									setTimeout(() => {
										window.location.reload();
									}, 500)
								}}>Próxima Página</button> </th>}
								{storage("page") >= 1 && 
								<th> <button className="btn-simple-green" onClick={() => {
									let page = storage("page")
									storage("page", page-1)
									setTimeout(() => {
										window.location.reload();
									}, 500)
								}}>Voltar Página</button> </th>}
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
										{(item.diff < 0 && item.idSituacao == 1) && (
											<Accept idConsulta={item.idConsultaUsuario} />
										)}
										{(item.diff > 0 && item.idSituacao != 4 && item.idSituacao != 3) && (
											<Avaliation id={item.id} idConsulta={item.idConsultaUsuario} />
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
