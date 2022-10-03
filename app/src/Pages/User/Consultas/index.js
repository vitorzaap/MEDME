import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import iconAdd from "../../../assets/images/Union.svg";
import NovaConsulta from "./NovaConsulta/index.js";

export default function Index() {
	

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
							<tr className="data">
								<td>Alfreds Futterkiste</td>
								<td>04/10/2022</td>
                                <td>12:00</td>
                                <td>23/09/2022</td>
                                <td>Dentista</td>
                                <td>#124</td>
                                <td>Google Meet</td>
                            </tr>
                            <tr className="data">
								<td>Kalel Rodrigues</td>
								<td>04/11/2022</td>
                                <td>14:00</td>
                                <td>83/09/2022</td>
                                <td>Psicólogo</td>
                                <td>#123</td>
                                <td>Zoom</td>
                            </tr>
                            
							
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
