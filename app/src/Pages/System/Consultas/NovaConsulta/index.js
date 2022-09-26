import "./index.scss";
import "../../../Common/common.scss";
import Icon from "../../../../assets/images/user-icon.svg"
import { listarPacientes, listarAtuacao } from "../../../../api/medicApi.js";
import storage from "local-storage"
import { useEffect, useState } from "react";

export default function Index(props) {
	const [userId, setUserId] = useState();
	const [consult, setConsult] = useState();
	const [users, setUsers] = useState([]);
	const [action, setAction] = useState([]);
	function hideNova() {
		var element = document.getElementById("pop-up");
		element.classList.remove("show-main");
    }
    
	return (
		<main className="consult-content">
			<div className="title">
				<h1>Nova Consulta #{consult}</h1>
			</div>
			<div className="main-input">
				<div className="r-input">
					<div className="select-user">
                        <div className="input-main">
                        <select
							className="user-dropdown"
							value={userId}
							onChange={e => setUserId(e.target.value)}
                            onClick={async () => {
                                const userInfo = storage("userInfo")
                                const r = await listarPacientes(userInfo.id)
                                setUsers([r]);
                                }}>
							<option selected disabled hidden>
								Selecionar paciente
							</option>
							{users.map((item) => (
                                    <option value={item.id} key="" className="opt">
									{item.nameUser}
								</option>
							))}
							;
						</select>
                        </div>
					</div>
					<div className="input-main">
						<p className="input-text">Plataforma</p>
						<textarea cols="10" rows="10" className="default-textarea" placeholder="Escreva algo de importante"></textarea>
					</div>
				</div>

				<div className="l-input">
					<div className="input-main">
						<p className="input-text">Plataforma</p>
						<input type="email" className="default-input" placeholder="Google Meet" />
					</div>
					<div className="input-main">
						<p className="input-text">Preço</p>
						<input type="number" className="default-input" placeholder="R$100" />
					</div>
					<div className="input-main">
						<p className="input-text">Link</p>
						<input type="email" className="default-input" placeholder="https://meet.com/suaconsultaonline" />
					</div>
				</div>
			</div>
			<div className="div-btn">
				<button className="sg-lg-btn-complex">Confirmar consulta</button>
			</div>
		</main>
	);
}
