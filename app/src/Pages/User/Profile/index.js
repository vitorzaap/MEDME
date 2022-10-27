import "./index.scss";
import "../../Common/common.scss";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu-Usuario";
import iconuser from "../../../assets/images/user-icon.svg";
import storage from "local-storage"
import { useEffect, useState } from "react";
export default function Index() {
    const user = storage("userInfo")
    const [classErrNome, setClassErrNome] = useState("default-input");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repitSenha, setRepitSenha] = useState("");
    const [passLength, setPassLength] = useState("")
    function length() {
        let s = ""
        for (let i = 0; i < user.senha.length; i++){
            s+= "*"
        }
        setPassLength(s)
    }

    useEffect(() => {
        length();
    }, [])
	return (
		<main className="user-profile-main">
			<Menu />
			<div className="user-profile-main-content">
				<Toaster />
				<Header />
				<div className="user-profile-content">
					<div className="user-profile-card">
						<div className="user-card-title">
							<h1 className="card-title">Editar Perfil</h1>
						</div>
						<div className="main-user-card-picture">
							<div className="user-card-picture">
								<img src={iconuser} alt="profile picture" width="96px" className="profile-picture" />
								<button className="remove-picture-button">Remover Foto de Perfil</button>
							</div>
						</div>
						<div className="main-user-profile-form">
							<div className="left-inputs">
								<div className="input-main">
									<p className="input-text">Nome</p>
									<input type="text" className={classErrNome} placeholder={user.name} value={nome} onChange={(e) => setNome(e.target.value)} />
									{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
                                </div>
                                <div className="input-main">
									<p className="input-text">Email</p>
									<input type="text" className={classErrNome} placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)} />
									{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
                                </div>
                                <div className="input-main">
									<p className="input-text">Nova Senha</p>
                                    <input type="text" className={classErrNome} placeholder={passLength} value={senha} onChange={(e) => setSenha(e.target.value)} />
									{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
                                </div>
                                <div className="input-main">
									<p className="input-text">Confirmar Senha</p>
                                    <input type="text" className={classErrNome} placeholder={passLength} value={repitSenha} onChange={(e) => setRepitSenha(e.target.value)} />
									{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
                                </div>
                                <button className="sg-lg-btn-complex">Editar Perfil</button>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
