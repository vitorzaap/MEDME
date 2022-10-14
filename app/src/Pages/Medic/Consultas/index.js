import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Medico/index.js"
import Cabecalho from "../../Components/Header/index.js"
import iconAdd from "../../../assets/images/Union.svg"
import NovaConsulta from "./NovaConsulta/index.js"
import { getConsultas } from "../../../api/medicApi.js"
import storage from "local-storage"
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";


export default function Index() {
    const [erro, setErro] = useState();
    const [consultas, setConsultas] = useState([]);

    function showNova(){
        var element = document.getElementById("pop-up");
        element.classList.add("show-main");
    }

    useEffect(() => {
		async function getConsult() {
			try {
				const medic = storage("userInfo");
				let response = await getConsultas(medic.id);
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


    return( 
        <main className="main-consultas">
			<div className="pop-up" id="pop-up">
				<Toaster />
                <NovaConsulta />
            </div>
            <Menu selecionado="consultas"/>
            <div className="container-consultas">
                <Cabecalho />
                <div className="content-consultas">
                    <div className="button-nova">
						
                    </div>
                    <div className="get-consultas">
						<div className="main-div-table">
						<div className="btn-size-div">
						<button className="sg-lg-btn-complex" onClick={showNova}>Nova Consulta</button>
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
						{erro !== undefined && <div className="err-div-message">
							<span className="err-message">{erro}</span>
							</div>}
					</div>
                    </div>
                </div>
            </div>
        </main>
    )
}