import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import { useEffect, useState } from "react";
import storage from "local-storage"
import { getConsultas } from "../../../api/userApi.js";
export default function Index() {
	const [consultas, setConsultas] = useState([])
	const [newDate, setNewDate] = useState([])
    useEffect(() => {
        async function getConsult() {
            const user = storage("userInfo");
			let response = await getConsultas(user.id)
			for (let i = 0; i < response.length; i++) {
				const novaData = new Date(response[i].dataConsulta)
				response[i].dataConsulta = novaData.toLocaleDateString("pt-BR")
				response[i].horaConsulta = response[i].horaConsulta.slice(0, 5)
			}
			setConsultas(response);
		}


        getConsult();
    }, [])

	return (
		<main className="user-main-consultas">
			<Menu selecionado="consultas" />

			<div className="user-consultas-main-content">
				<Cabecalho />
				<div className="user-consultas-content">
					<div className="main-div-table">
						<table className="user-table">
							<tr className="user-tr">
								<th>Paciente</th>
								<th>Data</th>
								<th>Hora</th>
								<th>Marcada em</th>
								<th>Tipo</th>
								<th>N° Consulta</th>
								<th>Plataforma</th>
								
							</tr>
							{consultas.map((item) => (
								<tr className="data">
                                <td>{item.medico}</td>
								<td>{item.dataConsulta}</td>
                                <td>{item.horaConsulta}</td>
                                <td>...progress</td>
                                <td>{item.atuacao}</td>
                                <td>#{item.idConsulta}</td>
								<td>{item.plataforma}</td>
								<td>
									<button className="btn-simple-green">Aceitar Consulta</button>
									<button className="btn-simple-red">Recusar Consulta</button>
								</td>
								</tr>
							))}
                            
                            
							
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
