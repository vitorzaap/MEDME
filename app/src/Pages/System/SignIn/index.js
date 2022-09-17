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
	const [erro, setErro] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const ref = useRef();
    const nav = useNavigate();
    
    return (
        <main className="sigin-main">
			<LoadingBar ref={ref} />
			<div className="sigin-main-content">
				<div className="sigin-main-content-text">
					<img src={Logo} alt="Logo" />
					<h1>Criar conta</h1>
					<p>
						Já possui uma conta? <button className="sg-lg-btn" onClick={() => {
							nav("/login")
						}}>Entrar agora!</button>
					</p>
				</div>
                <div className="sigin-main-content-inputs">
                <div className="input-main">
						<p className="input-text">Nome</p>
						<input type="email" className={ClassErrName} placeholder="Vitor Santos" value={name} onChange={e => setName(e.target.value)} />
						{ClassErrName === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
					</div>
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
                            !name ? setClassErrName("err-input") : setClassErrName("default-input");
							if (email && pass && name) {
								ref.current.continuousStart();
								setDisabled(true);
								try {
									const r = await userSigIn(name, email, pass);
									setTimeout(() => {
										ref.current.complete();
									}, 2000)
									setTimeout(() => {
										nav("/login")
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
						Criar conta
					</button>
					{erro != "" && <p className="err-p">{erro}</p>}
				</div>
			</div>
		</main>
    );
}