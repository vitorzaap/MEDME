import "./index.scss";
import "../../../Common/common.scss";
import Logo from "../../../../assets/images/login-logo.svg";

import { useNavigate } from "react-router-dom"

export default function Index() {
	
	const nav = useNavigate();

	return (
		<main className="sigin-main">
			<div className="sigin-main-content">
				<div className="sigin-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Fale Conosco</h1>
				</div>
				<div className="sigin-main-content-inputs">
					<div className="input-main">
						<p className="input-text">Nome</p>
						<input type="text" className="default-input"/>
					</div>
					<div className="input-main">
						<p className="input-text">E-mail</p>
						<input type="text"  className="default-input"/>
					</div>
					<div className="input-main">
						<p className="input-text">WhatsApp</p>
						<input type="email" className="default-input"/>
					</div>
					<div className="input-main">
						<p className="input-text">Mensagem</p>
						<textarea className="default-textarea" />
					</div>
					<button className="sg-lg-btn">
						Enviar
					</button>

				</div>
			</div>
		</main>
	);
}