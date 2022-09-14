import "./index.scss";
import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { userLogin } from "../../../api/userApi.js";
import { useState } from "react";
export default function Index() {
	const [classErrEmail, setClassErrEmail] = useState("default-input");
	const [btn, setBtn] = useState(false)
	const [ClassErrPass, setClassErrPass] = useState("default-input");
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
						<input type="email" className={classErrEmail} placeholder="medme@medme.com" value={email} onChange={e => setEmail(e.target.value)} />
						{classErrEmail === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Senha</p>
						<input type="password" className={ClassErrPass} placeholder="********" value={pass} onChange={e => setPass(e.target.value)} />
						{ClassErrPass === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
					</div>
					<button
						className="sg-lg-btn-complex"
						onClick={async () => {
							await userLogin(email, pass);
							if (!email) {
								setClassErrEmail("err-input")
							}
							else {
								setClassErrEmail("default-input")
							}

							if (!pass) {
								setClassErrPass("err-input")
							}
							else {
								setClassErrPass("default-input")
							}
						}}>
						Entrar
					</button>
				</div>
			</div>
		</main>
	);
}
