import "./index.scss";
import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { userLogin } from "../../../api/userApi.js";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
export default function Index() {
	const [classErrEmail, setClassErrEmail] = useState("default-input");
	const [ClassErrPass, setClassErrPass] = useState("default-input");
	const [erro, setErro] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const ref = useRef();
	const nav = useNavigate();
	return (
		<main className="login-main">
			<LoadingBar ref={ref} />
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
						disabled={disabled}
						onClick={async () => {
							!email ? setClassErrEmail("err-input") : setClassErrEmail("default-input");
							!pass ? setClassErrPass("err-input") : setClassErrPass("default-input");
							if (email && pass) {
								ref.current.continuousStart();
								setDisabled(true);
								try {
									const r = await userLogin(email, pass);
									setTimeout(() => {
										ref.current.complete();
									}, 2000)
									setTimeout(() => {
										nav("/consultas")
									}, 2500)
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
							}
							
							
						}}>
						Entrar
					</button>
					{erro != "" && <p className="err-p">{erro}</p>}
				</div>
			</div>
		</main>
	);
}
