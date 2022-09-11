import "./index.scss";
import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import Input from "../../Common/Input/index.js";
export default function Index() {
	return (
		<main className="login-main">
			<div className="login-main-content">
				<div className="login-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Seja bem-vindo de volta!</h1>
					<p>
						Não possui uma conta? <button className="sg-lg-btn">Criar agora!</button>
					</p>
				</div>
				<div className="login-main-content-inputs">
					<Input text="E-mail" placeholder="medme@medme.com" type="email" />
					<Input text="Senha" placeholder="********" type="password" />
					<button className="sg-lg-btn-complex">Entrar</button>
				</div>
			</div>
		</main>
	);
}
