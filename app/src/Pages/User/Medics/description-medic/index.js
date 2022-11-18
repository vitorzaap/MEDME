import "../index.scss";
import "../../../Common/common.scss";
import iconuser from "../../../../assets/images/user-icon.svg";
import Cabecalho from "../../../Components/Header/index.js";
import storage from "local-storage";
import { useEffect, useState } from "react";
import { addConversa } from "../../../../api/conversationApi.js"
import {  searchMedic } from "../../../../api/userApi";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { searchImage } from "../../../../api/medicApi";
export default function Medics() {
	const user = storage("userInfo");
	const [doctorName, setDoctorName] = useState();
	const [medico, setMedico] = useState([]);
	const [imagem, setImagem] = useState()
	const { doctorId } = useParams();
	const navigate = useNavigate();
	if (!storage("userInfo")) {
		navigate("/login");
	}
	async function carregarMedic() {
		const resposta = await searchMedic(doctorId);
		setMedico(resposta);
	}
	useEffect(() => {
		carregarMedic();
	}, []);
	function BuscarImagem() {
		const r = searchImage(medico.img_icon)
		setImagem(r)
	}
	useEffect(() => {
		BuscarImagem()
	}, [medico])

	return (
		<main className="user-medics-main">
			<Toaster />
			<section className="user-medics-section-main">
				<Cabecalho />
				<div className="user-medics-content">
					<div className="user-medics-description-card">
						<div className="user-medics-description">
							<div className="user-medics-description-content">
								{medico.img_icon ? <img style={{borderRadius: "99px"}} src={ imagem } /> : <img src={iconuser} />}
								<h1>{medico.nm_medico}</h1>
								<h6>{medico.ds_medico}</h6>
							</div>
							<button
								onClick={async () => {
									toast(
										(t) => (
											<span>
												Tem certeza que deseja criar uma conversa com <b>{medico.nm_medico}</b>?
												<button
													onClick={async () => {
														try {
															toast.dismiss(t.id);
                              toast.loading("Criando Sua Conversa...");
                              setTimeout(async () => {
                                try {
                                  const r = await addConversa(medico.id_medico, user.id);
                                  setTimeout(() => {
																toast.dismiss();
																toast.success(`Conversa criada com sucesso!`);
															}, 1000);
                                } catch (err) {
                                  if (err.response.data.erro) {
                                    toast.dismiss()
                                    toast.error(err.response.data.erro)
                                  }
                                }
                              }, 1000)
                              
															
                            } catch (err) {
                              if (err.response.data.erro) {
                                toast.dismiss()
                                toast.error(err.response.data.erro)
                              }
                            }
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
													Criar
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
								<div class="svg-wrapper-1">
									<div class="svg-wrapper">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path
												fill="currentColor"
												d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
										</svg>
									</div>
								</div>
								<span>Inicie Uma Conversa!</span>
							</button>
						</div>
						<div></div>
					</div>
				</div>
			</section>
		</main>
	);
}
