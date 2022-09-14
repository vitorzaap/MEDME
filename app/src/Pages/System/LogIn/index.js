import "./index.scss";
import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { userLogin } from "../../../api/userApi.js";
import { useState } from "react";
export default function Index() {
	const [classErr, setClassErr] = useState("default-input");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	return (
		<main className="login-main">
			<div className="login-main-content">
				<div className="login-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Bem-vindo de volta!</h1>
					<p>
						Não possui uma conta? <button className="sg-lg-btn">Criar agora!</button>
					</p>
				</div>
				<div className="login-main-content-inputs">
					<div className="input-main">
						<p className="input-text">E-mail</p>
						<input type="email" className={classErr} placeholder="medme@medme.com" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
					<div className="input-main">
						<p className="input-text">Senha</p>
						<input type="password" className={classErr} placeholder="********" value={pass} onChange={e => setPass(e.target.value)} />
					</div>
					<button
						className="sg-lg-btn-complex"
						onClick={async () => {
							await userLogin(email, pass);
						}}>
						Entrar
					</button>
				</div>
			</div>
		</main>
	);
}
