import "./index.scss";
import "../../../Common/common.scss";
import Logo from "../../../../assets/images/login-logo.svg";

import { useNavigate } from "react-router-dom"

export default function Index(){
    const navigate = useNavigate();

    return(
        <main className="sigin-main">
			<div className="sigin-main-content">
				<div className="sigin-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Trabalhe conosco</h1>
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
						<p className="input-text">Currículo</p>
                        <label className="lb-archive">Upload</label>
						<input type="file" className="input-archive"/>
					</div>
					<button className="sg-lg-btn-complex">
						Enviar
					</button>

				</div>
			</div>
		</main>
    )
}