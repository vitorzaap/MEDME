import "./index.scss";
import "../../../Common/common.scss";
import Icon from "../../../../assets/images/user-icon.svg"
import { listarPacientes, listarAtuacao, listarPlataforma } from "../../../../api/medicApi.js";
import storage from "local-storage"
import { useEffect, useState } from "react";

export default function Index(props) {
	const [userId, setUserId] = useState();
	const [consult, setConsult] = useState();
	const [users, setUsers] = useState([]);
	const [action, setAction] = useState([]);
	const [plataforma, setPlataforma] = useState([]);
	const [plataformaId, setPlataformaId] = useState();
	const [desc, setDesc] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [classErrDes, setClassErrDesc] = useState("default-textarea");
	const [classErrPrice, setClassErrPrice] = useState("coin-div");
	const [classErrLink, setClassErrLink] = useState("default-input");
	const [classErrPlataforma, setClassErrPlataforma] = useState("user-dropdown");
	const [classErrUser, setClassErrUser] = useState("user-dropdown");
	const [link, setLink] = useState();
	const [price, setPrice] = useState();
	function hideNova() {
		var element = document.getElementById("pop-up");
		element.classList.remove("show-main");
	}
    
	return (
		<main className="consult-content">
			<div className="title">
				<h1>Nova Consulta #{storage("userInfo").numConsulta}</h1>
			</div>
			<div className="main-input">
				<div className="r-input">
					<div className="select-user">
						<div className="input-main">
						<p className="input-text">Paciente</p>
                        <select
							className={classErrUser}
							value={userId}
							onChange={e => setUserId(e.target.value)}
                            onClick={async () => {
                                const userInfo = storage("userInfo")
                                const r = await listarPacientes(userInfo.id)
								setUsers([r]);
								
                                }}>
							<option selected disabled hidden>
								Selecione um paciente
							</option>
							{users.map((item) => (
                                    <option value={item.id} key="" className="opt">
									{item.nameUser}
								</option>
							))}
							;
							</select>
							{classErrUser === "err-dropdown" && <p className="err-p">Selecione um paciente.</p>}
                        </div>
					</div>
					<div className="input-main">
						<p className="input-text">Descrição</p>
						<textarea cols="10" rows="10" className={classErrDes} placeholder="Escreva algo de importante"></textarea>
						{classErrDes === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Data e Hora</p>
						<div className="date-main">
							<div className="date-content">
								<input type="date" className="default-date" value={date} onChange={e => setDate(e.target.value)} />
								<input type="time" className="default-hour" value={time} onChange={e => setTime(e.target.value)}/>
							</div>
						</div>
					</div>
				</div>

				<div className="l-input">
					<div className="input-main">
						<p className="input-text">Plataforma</p>
						<select
							className={classErrPlataforma}
							value={plataformaId}
							onChange={e => setPlataformaId(e.target.value)}
                            onClick={async () => {
								const r = await listarPlataforma();
								setPlataforma(r);
                                }}>
							<option selected disabled hidden>
								Selecionar Plataforma
							</option>
							{plataforma.map((item) => (
                                    <option value={item.id} key="" className="opt">
									{item.plataforma} 
								</option>
							))}
							;
						</select>
						{classErrPlataforma === "err-dropdown" && <p className="err-p">Selecione uma plataforma.</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Preço</p>
						<div className={classErrPrice}>
							<div className="coin-text-main">
							<p className="coin-text">R$</p>
							</div>
							<input type="number" className="default-input" placeholder="100" value={price} onChange={e => setPrice(e.target.value)} />
						</div>
						
					</div>
					<div className="input-main">
						<p className="input-text">Link</p>
						<input type="text" className={classErrLink} placeholder="https://meet.com	/suaconsultaonline" value={link} onChange={e => setLink(e.target.value)} />
						{classErrLink === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
					</div>
				</div>
			</div>
			<div className="div-btn">
				<button className="sg-lg-btn-complex" onClick={async () => {
					!link ? setClassErrLink("err-input") : setClassErrLink("default-input");
					!desc ? setClassErrDesc("err-input") : setClassErrDesc("default-input");
					!price ? setClassErrPrice("err-div") : setClassErrPrice("coin-div");
					!plataformaId ? setClassErrPlataforma("err-dropdown") : setClassErrPlataforma("user-dropdown");
					!userId ? setClassErrUser("err-dropdown") : setClassErrUser("user-dropdown");
				}}>Marcar consulta</button>
			</div>
		</main>
	);
}
