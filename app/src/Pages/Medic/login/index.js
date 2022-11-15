import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { medicLogin } from "../../../api/medicApi.js";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import storage from "local-storage";
export default function Index() {
	const [classErrEmail, setClassErrEmail] = useState("default-input");
	const [ClassErrPass, setClassErrPass] = useState("default-input");
	const [erro, setErro] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const ref = useRef();
	const nav = useNavigate();
	document.addEventListener("keypress" , function (e) {
		if(e.key === "Enter"){
			const btn = document.querySelector("#send");
			btn.click();
		}
	})
	return (
		<main className="login-main">
			<LoadingBar ref={ref} color="#6236fff1" />
			<div className="login-main-content">
				<div className="login-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Bem-vindo ao trabalho!</h1>
					<p>
						Você é usuário?{" "}
						<button
							className="sg-lg-btn"
							onClick={() => {
								nav("/user/account");
							}}>
							Crie sua Conta!
						</button>
						<span>
							{" "}
							Ou{" "}
							<button
								className="sg-lg-btn"
								onClick={() => {
									nav("/user/login");
								}}>
								Entre agora!
							</button>
						</span>
					</p>
				</div>
				<div className="login-main-content-inputs">
					<div className="input-main">
						<p className="input-text">E-mail</p>
						<input type="email" className={classErrEmail} placeholder="medme@medme.com" value={email} onChange={(e) => setEmail(e.target.value)} />
						{classErrEmail === "err-input" && <p className="err-p">{erro}</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Senha</p>
						<input type="password" className={ClassErrPass} placeholder="********" value={pass} onChange={(e) => setPass(e.target.value)} />
						{ClassErrPass === "err-input" && <p className="err-p">{erro}</p>}
					</div>
					<button
						id="send"
						className="sg-lg-btn-complex"
						disabled={disabled}
						onClick={async () => {
							if (!email) {
								setClassErrEmail("err-input")
								setErro("Este campo não pode estar vazio.")
							}
							else {
								setClassErrEmail("default-input");
								setErro("")
							}
							if (!pass) {
								setClassErrPass("err-input")
								setErro("Este campo não pode estar vazio.")
							}
							else {
								setClassErrPass("default-input");
								setErro("")
							}
							if (email && pass) {
								ref.current.continuousStart();
								setDisabled(true);
								try {
									const r = await medicLogin(email, pass);
									storage("doctorInfo", r);
									setTimeout(() => {
										ref.current.complete();
									}, 2000);
									setTimeout(() => {
										nav("/medic/dashboard");
									}, 2500);
								} catch (err) {
									setTimeout(() => {
										ref.current.complete();
										setDisabled(false);
										if (err.response.status === 401) {
											if (err.response.data.erro == "Senha ou E-mail incorretos.") {
												setClassErrEmail("err-input");
												setClassErrPass("err-input");
											}
											setErro(err.response.data.erro);
										}
									}, 1000);
								}
							}
						}}>
						Entrar
					</button>
				</div>
			</div>
		</main>
	);
}
