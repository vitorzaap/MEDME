import "./index.scss";
import "../../../Common/common.scss";
import Logo from "../../../../assets/images/login-logo.svg";
import { useState, useEffect} from "react";

import { useNavigate } from "react-router-dom"

export default function Index() {
	const[nome,setNome] =useState();
	const[email,setEmail] = useState();
	const[msg,setMsg] = useState();
	
	const nav = useNavigate();
	function sendEmail(e){
		e.preventDefault();
		
		alert('pinto')

	}

	return (
		<main className="sigin-main">
			<div className="sigin-main-content">
				<div className="sigin-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Envie seu feedback</h1>
				</div>
				<form onSubmit={sendEmail}>
				<div className="sigin-main-content-inputs">
					<div className="input-main">
						<p className="input-text">Nome</p>
						<input type="text" className="default-input" onChange={(e)=> setNome(e.target.value)}/>
					</div>
					<div className="input-main">
						<p className="input-text">E-mail</p>
						<input type="text"  className="default-input" onChange={(e) => setEmail(e.target.value)}/>
					</div>
					
					<div className="input-main">
						<p className="input-text">Mensagem</p>
						<textarea className="default-input" id="input-message" onChange={(e)=> setMsg(e.target.value)}/>
					</div>
					
					<button className="sg-lg-btn-complex" >
						Enviar
					</button>

				</div>
				</form>
			</div>
			
		</main>
	);
}