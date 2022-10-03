import "./index.scss";
import "../../Common/common.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { userSigIn } from "../../../api/userApi.js";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
export default function Index() {
	const [classErrEmail, setClassErrEmail] = useState("default-input");
	const [ClassErrPass, setClassErrPass] = useState("default-input");
	const [ClassErrName, setClassErrName] = useState("default-input");
	const [ClassErrSobrenome, setClassErrSobrenome] = useState("default-input");
	const [erroPass, setErroPass] = useState("")
	const [erroName, setErroName] = useState("");
	const [erroSobrenome, setErroSobrenome] = useState("");
	const [erroEmail, setErroEmail] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState("");
	const [sobrenome, setSobrenome] = useState("");
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
		<main className="sigin-main">
			<LoadingBar ref={ref} color="#6236fff1" />
			<div className="sigin-main-content">
				<div className="sigin-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Criar conta</h1>
					<p>
						Já possui uma conta? <button className="sg-lg-btn" onClick={() => {nav("/user/login")}}>Entrar agora!</button>
					</p>
				</div>
				<div className="sigin-main-content-inputs">
					<div className="input-main">
						<p className="input-text">Nome</p>
						<input type="text" className={ClassErrName} placeholder="Vitor" value={name} onChange={e => setName(e.target.value)} />
						{ClassErrName === "err-input" && <p className="err-p">{erroName}</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Sobrenome</p>
						<input type="text" className={ClassErrSobrenome} placeholder="Santos Menezes" value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
						{ClassErrSobrenome === "err-input" && <p className="err-p">{erroSobrenome}</p>}
					</div>
					<div className="input-main">
						<p className="input-text">E-mail</p>
						<input type="email" className={classErrEmail} placeholder="medme@medme.com" value={email} onChange={e => setEmail(e.target.value)} />
						{classErrEmail === "err-input" && <p className="err-p">{erroEmail}</p>}
					</div>
					<div className="input-main">
						<p className="input-text">Senha</p>
						<input type="password" className={ClassErrPass} placeholder="********" value={pass} onChange={e => setPass(e.target.value)} />
						
						{ClassErrPass === "err-input" && <p className="err-p">{erroPass}</p>}
					</div>
					<button

					id="send" className="sg-lg-btn-complex"disabled={disabled} onClick={async () => {
							if (!pass) {
								setClassErrPass("err-input")
								setErroPass("Este campo não pode estar vazio.")
							}
							else if (pass.length < 8) {
								setClassErrPass("err-input")
								setErroPass("A senha deve ter no mínimo 8 caracteres.")
							}
							else {
								setClassErrPass("default-input")
							}
							if (!name) {
								setClassErrName("err-input")
								setErroName("Este campo não pode estar vazio.")
							}
							else {
								setClassErrName("default-input")
							}
							if (!sobrenome) {
								setClassErrSobrenome("err-input")
								setErroSobrenome("Este campo não pode estar vazio.")
							}
							else {
								setClassErrSobrenome("default-input")
							}

							if (!email) {
								setClassErrEmail("err-input")
								setErroEmail("Este campo não pode estar vazio.")
							}
							else {
								setClassErrEmail("default-input")
							}
							if (pass.length >= 8 && email && name && sobrenome) {
								console.log(true)
								ref.current.continuousStart();
								setDisabled(true);
								try {
									const r = await userSigIn(name, sobrenome, email, pass);
									setTimeout(() => {
										ref.current.complete();
									}, 2000)
									setTimeout(() => {
										nav("/user/login")
									}, 2500)
								}
								catch (err) {
									setTimeout(() => {
										ref.current.complete();
										setDisabled(false)
										if (err.response.status === 401) {
											if (err.response.data.erro == "E-mail já está em uso.") {
												setClassErrEmail("err-input");
												setErroEmail(err.response.data.erro)
											}
										}
									}, 1000)
								}
							}
						}}>
						Criar conta
					</button>

				</div>
			</div>
		</main>
	);
}