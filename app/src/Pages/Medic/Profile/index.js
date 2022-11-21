import "./index.scss";
import "../../Common/common.scss";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import iconuser from "../../../assets/images/user-icon.svg";
import storage from "local-storage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterImage, getDoctorById, medicChangeProfile, searchImage } from "../../../api/medicApi";
export default function Index() {
	const doctor = storage("doctorInfo");
	const [usuario, setUsuario] = useState([]);
	const [classErrNome, setClassErrNome] = useState("default-input");
	const [nome, setNome] = useState(doctor.name);
	const [descricao, setDescricao] = useState(doctor.descricao);
	const [isDefault, setIsDefault] = useState(false);
	const [email, setEmail] = useState(doctor.email);
	const [senha, setSenha] = useState(!doctor.senha ? doctor.pass : doctor.senha);
	const [err, setErr] = useState("");
	const [image, setImage] = useState();
	const navigate = useNavigate();
	if (!storage("doctorInfo")) {
		navigate("/medic/login");
	}

	async function exibirUser() {
		const [r] = await getDoctorById(doctor.id);
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
			setNome(usuario.nm_medico);
		}
		if (!descricao || descricao === undefined) {
			setDescricao(usuario.ds_medico);
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
			const userConfig = await medicChangeProfile(nome, email, senha, descricao, doctor.id);
			storage("doctorInfo", userConfig);
			console.log(image);
			const r = await alterImage(storage("doctorInfo").id, image);
			console.log(r);
		} catch (err) {
			console.log(err);
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
              {(!image) ? <img src={iconuser} alt="profile picture" width="96px" height="96px" className="profile-picture" onClick={() => {
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
										<input type="text" className={classErrNome} placeholder={doctor.name} value={nome} onChange={(e) => setNome(e.target.value)} />
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
								{!descricao ? (
									<div className="input-main">
										<p className="input-text">Descrição</p>
										<input type="text" className={classErrNome} placeholder={doctor.descricao} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								) : (
									<div className="input-main">
										<p className="input-text">Descrição</p>
										<input
											type="text"
											className={classErrNome}
											value={descricao}
											onChange={(e) => {
												setDescricao(e.target.value);
												alterConfigVerification();
											}}
										/>
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								)}
								{!email ? (
									<div className="input-main">
										<p className="input-text">Email</p>
										<input type="text" className={classErrNome} placeholder={doctor.email} value={email} onChange={(e) => setEmail(e.target.value)} />
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
								{!senha ? (
									<div className="input-main">
										<p className="input-text">Nova Senha</p>
										<input type="text" className={classErrNome} placeholder={senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								) : (
									<div className="input-main">
										<p className="input-text">Nova Senha</p>
										<input
											type="text"
											className={classErrNome}
											value={senha}
											onChange={(e) => {
												alterConfigVerification();
												setSenha(e.target.value);
											}}
										/>
										{classErrNome === "err-input" && <p className="err-p">Este campo não pode estar vazio.</p>}
									</div>
								)}
								<div className="btn-div">
									<button
										id="send"
										className="sg-lg-btn-complex"
										onClick={async () => {
											alterConfigVerification();
											toast(
												(t) => (
													<span>
														Tem certeza que deseja editar seu perfil ?
														<button
															onClick={async () => {
																toast.dismiss(t.id);
																toast.loading("Editando o perfil...");

																setTimeout(async () => {
																	toast.dismiss();
                                  toast.success(`Perfil editado com sucesso!`);
                                  await alterarConfig();
                                  setTimeout(() => {
                                    window.location.reload()
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
