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
					<h1>Crie sua conta</h1>
					<p>
						Já possui uma conta? <button className="sg-lg-btn">Entrar agora!</button>
					</p>
				</div>
				<div className="login-main-content-inputs">
					<Input text="Nome" placeholder="Victor Santos" type="text" />
					<Input text="E-mail" placeholder="medme@medme.com" type="email" />
					<Input text="Senha" placeholder="********" type="password" />
					<button className="sg-lg-btn-complex">Criar conta</button>
				</div>
			</div>
		</main>
	);
}
