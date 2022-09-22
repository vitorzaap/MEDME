import "./index.scss";
import "../../../Common/common.scss";
import iconuser from "../../../../assets/images/image 4.svg";
import { useState } from "react";

export default function Index(props) {
	const [consult, setConsult] = useState(1);
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
				<div className="r-input"></div>

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
