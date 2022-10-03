import "./index.scss";
import "../../../Common/common.scss";
import Icon from "../../../../assets/images/user-icon.svg"
import cancel from "../../../../assets/images/cancel.svg"
import { listarPacientes, listarAtuacao, listarPlataforma, adicionarConsulta } from "../../../../api/medicApi.js";
import storage from "local-storage"
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";

export default function Index(props) {
	const [userId, setUserId] = useState();
	const [users, setUsers] = useState([]);
	const [action, setAction] = useState([]);
	const [disabledClient, setDisabledClient] = useState(false);
	const [clientString, setClientString] = useState("Selecione um Paciente")
	const [actionId, setActionId] = useState();
	const [plataforma, setPlataforma] = useState([]);
	const [plataformaId, setPlataformaId] = useState();
	const [erro, setErro] = useState();
	const [desc, setDesc] = useState();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [classErrDes, setClassErrDesc] = useState("default-textarea");
	const [classErrAction, setClassErrAction] = useState("user-dropdown")
	const [classErrPrice, setClassErrPrice] = useState("coin-div");
	const [classErrLink, setClassErrLink] = useState("default-input");
	const [classErrPlataforma, setClassErrPlataforma] = useState("user-dropdown");
	const [disabled, setDisabled] = useState(false);
	const [classErrUser, setClassErrUser] = useState("user-dropdown");
	const [link, setLink] = useState();
	const ref = useRef();
	const [price, setPrice] = useState();
	function hideNova() {
		var element = document.getElementById("pop-up");
		element.classList.remove("show-main");
	}
	document.addEventListener("keypress" , function (e) {
		if(e.key === "Enter"){
			const btn = document.querySelector("#send");
			btn.click();
		}
	})
    
	return (
		<main className="consult-content-1">
			<LoadingBar ref={ref} color="#6236fff1" />
			<div className="title">
				<h1>Nova Consulta #{storage("userInfo").numConsulta}</h1>
				<img src={cancel} alt="cancelar" onClick={() => {
					hideNova();
				}} />
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
								{clientString}
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
						<textarea cols="10" rows="10" className={classErrDes} value={desc} onChange={e => setDesc(e.target.value)} placeholder="Escreva algo de importante"></textarea>
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
					<div className="input-main">
						<p className="input-text">Tipo da consulta</p>
                        <select
							className={classErrAction}
							value={actionId}
							onChange={e => setActionId(e.target.value)}
                            onClick={async () => {
                                const userInfo = storage("userInfo")
                                const r = await listarAtuacao(userInfo.id)
								setAction([r]);
                                }}>
							<option selected disabled hidden>
								Selecionar tipo
							</option>
							{action.map((item) => (
                                    <option value={item.id} key="" className="opt">
									{item.atuacao}
								</option>
							))}
							;
							</select>
							{classErrUser === "err-dropdown" && <p className="err-p">Selecione um paciente.</p>}
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
				<button id="send" className="sg-lg-btn-complex" disabled={disabled} onClick={async () => {
					!link ? setClassErrLink("err-input") : setClassErrLink("default-input");
					!desc ? setClassErrDesc("err-input") : setClassErrDesc("default-textarea");
					!price ? setClassErrPrice("err-div") : setClassErrPrice("coin-div");
					!plataformaId ? setClassErrPlataforma("err-dropdown") : setClassErrPlataforma("user-dropdown");
					!actionId ? setClassErrPlataforma("err-dropdown") : setClassErrPlataforma("user-dropdown");
					!userId ? setClassErrUser("err-dropdown") : setClassErrUser("user-dropdown");
					try {
						if (link && desc && price && plataformaId && actionId && userId) {
							setDisabled(true);
						ref.current.continuousStart();
						const medic = storage("userInfo")
						const r = await adicionarConsulta(medic.id, userId, desc, date, time, actionId, plataformaId, price, link)
						setTimeout(() => {
							ref.current.complete();
						}, 100)
						setTimeout(() => {
							setDisabled(false);
							hideNova();
							
						}, 1500)
						}
					}
					catch (err) {
						setTimeout(() => {
							ref.current.complete();
						setDisabled(false)
						if (err.response.status === 401) {
							setErro(err.response.data.erro);
						}
						}, 1000)
					}
				}}>Marcar consulta</button>
			</div>
		</main>
	);
}
