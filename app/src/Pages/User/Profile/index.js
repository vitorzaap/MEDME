import "./index.scss";
import "../../Common/common.scss";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import iconuser from "../../../assets/images/user-icon.svg";
import storage, { set } from "local-storage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, userChangeProfile, alterImage } from "../../../api/userApi";
import { searchImage } from "../../../api/medicApi";
export default function Index() {
	const user = storage("userInfo");
	const [usuario, setUsuario] = useState([]);
	const [isDefault, setIsDefault] = useState(false);
	const [classErrNome, setClassErrNome] = useState("default-input");
	const [nome, setNome] = useState(user.name);
	const [sobrenome, setSobrenome] = useState(user.sobrenome);
	const [email, setEmail] = useState(user.email);
	const [senha, setSenha] = useState(!user.senha ? user.pass : user.senha);
	const [err, setErr] = useState("");
	const [image, setImage] = useState();
	const navigate = useNavigate();

	if (!storage("userInfo")) {
		navigate("/user/login");
	}
	async function exibirUser() {
		const [r] = await getUser(user.id);
		console.log(r)
		setUsuario(r);
	}
	function setImageUser() {
		const r = searchImage(usuario.img_icon);
		setImage(r);
	}
	useEffect(() => {
		if (image != usuario.img_icon) setImageUser();
	}, [usuario]);

	useEffect(() => {
		exibirUser();

		if (!usuario) {
			navigate("/");
		}
		alterConfigVerification();
	}, []);
	function alterConfigVerification() {
		if (!nome || nome === undefined) {
			setNome(usuario.nm_usuario);
		}
		if (!sobrenome || sobrenome === undefined) {
			setSobrenome(usuario.sbr_usuario);
		}
		if (!email || email === undefined) {
			setEmail(usuario.ds_email);
		}
		if (!senha || senha === undefined) {
			setSenha(usuario.ds_senha);
		}
	}
	async function alterarConfig() {
		try {
			const userConfig = await userChangeProfile(nome, sobrenome, email, senha, user.id);
			storage("userInfo", userConfig);
			const r = await alterImage(user.id, image);
		} catch (error) {
			console.log(error);
		}
	}

	function show(x) {
		if (x == `http://localhost:5000/${usuario.img_icon}` && usuario.img_icon != null) {
			return image
		}
		return URL.createObjectURL(x);
	}
	return (
		<main className="user-profile-main">
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
								{(!image) ? <img src={iconuser} alt="profile picture" width="96px" className="profile-picture" onClick={() => {
									document.getElementById("imagem").click()
								}} /> : (<img src={show(image)} alt="" className="profile-picture" width="96px" onClick={() => { document.getElementById("imagem").click() }} />)}
								<input
									type="file"
									id="imagem"
									onChange={(e) => {
										setImage(e.target.files[0]);
									}}
								/>
								{!image ? (
									<div></div>
								) : (
									<button
										className="remove-picture-button"
										onClick={() => {
											setIsDefault(true);
											setImage(null);
										}}>
										Remover Foto de Perfil
									</button>
								)}
							</div>
						</div>
						<div className="main-user-profile-form">
							<div className="left-inputs">
								{!nome ? (
									<div className="input-main">
										<p className="input-text">Nome</p>
										<input type="text" className={classErrNome} placeholder={usuario.nm_usuario} value={nome} onChange={(e) => setNome(e.target.value)} />
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								) : (
									<div className="input-main">
										<p className="input-text">Nome</p>
										<input
											type="text"
											className={classErrNome}
											value={nome}
											onChange={(e) => {
												setNome(e.target.value);
												alterConfigVerification();
											}}
										/>
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								)}
								{!sobrenome ? (
									<div className="input-main">
										<p className="input-text">Sobrenome</p>
										<input type="text" className={classErrNome} placeholder={usuario.sbr_usuario} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								) : (
									<div className="input-main">
										<p className="input-text">Sobrenome</p>
										<input
											type="text"
											className={classErrNome}
											value={sobrenome}
											onChange={(e) => {
												setSobrenome(e.target.value);
												alterConfigVerification();
											}}
										/>
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								)}
								{!email ? (
									<div className="input-main">
										<p className="input-text">Email</p>
										<input type="text" className={classErrNome} placeholder={usuario.ds_email} value={email} onChange={(e) => setEmail(e.target.value)} />
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								) : (
									<div className="input-main">
										<p className="input-text">Email</p>
										<input
											type="text"
											className={classErrNome}
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												alterConfigVerification();
											}}
										/>
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								)}

								<div className="input-main">
									<p className="input-text">Nova Senha</p>
									<input type="text" className={classErrNome} placeholder={senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
									{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
								</div>

								<div className="btn-div">
									<button
										id="send"
										className="sg-lg-btn-complex"
										onClick={async () => {
											alterConfigVerification();
											toast(
												(t) => (
													<span>
														Tem certeza que deseja editar seu perfil?
														<button
															onClick={async () => {
																toast.dismiss(t.id);
																toast.loading("Editando o perfil...");
																setTimeout(async () => {
																	toast.dismiss();
																	toast.success(`Perfil editado com sucesso!`);
																	await alterarConfig();
																	setTimeout(() => {
																		window.location.reload();
																	}, 500);
																}, 2000);
																
															}}
															style={{
																padding: ".6em 1.2em",
																backgroundColor: "#3DCC87",
																color: "#fff",
																border: "none",
																marginLeft: ".5em",
																borderRadius: ".5em",
																fontSize: ".92em",
															}}>
															Salvar
														</button>
													</span>
												),
												{
													style: {
														width: "max-content",
														maxWidth: "max-content",
													},
												}
											);
										}}>
										Salvar
									</button>
								</div>
							</div>
							<h1>{err}</h1>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
