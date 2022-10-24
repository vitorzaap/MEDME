import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import LinhaSeparação from "../../../assets/images/linha-separação2.svg";
import LinhaSeparação2 from "../../../assets/images/linha-separação4.svg";
import { statusConsult } from "../../../api/userApi.js";
import Card from "./card-comments";
import David from "../../../assets/images/david.svg";
import storage from "local-storage";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addAvaliacao } from "../../../api/userApi.js";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getDoctorById } from "../../../api/medicApi";
export default function Index() {
	const userInfo = storage("userInfo");
	const { id, idConsulta } = useParams();
	const nav = useNavigate();
	const stars = Array(5).fill(0);
	const [valorEstrela, setValorEstrela] = useState(0);
	const [descricaoConsulta, setDescricaoConsulta] = useState();
	const [doctorName, setDoctorName] = useState("");
	const [doctorDesc, setDoctorDesc] = useState("")
	const colorStar = {
		orange: "#F6D523",
		gray: "#B4B4B4",
	};

	document.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			const btn = document.querySelector("#send");
			btn.click();
		}
	});

	async function handleClick() {
		setTimeout(() => {
			nav("/consultas");
		}, 2000);
		const r = await addAvaliacao(id, userInfo.id, descricaoConsulta, valorEstrela);
		setDescricaoConsulta("");
		setValorEstrela();
	}

	useEffect(() => {
		const fetchDoctor = async () => {
			const [r] = await getDoctorById(id)
			setDoctorDesc(r.ds_medico);
			setDoctorName(r.nm_medico);
		}
		fetchDoctor();
	}, [])

	return (
		<main className="evaluation-main">
			<Menu selecionado="avaliacoes" />
			<section className="evaluation-section-main">
				<Toaster />
				<Cabecalho />
				<div className="evaluation-content">
					<div className="evaluation-main-content">
						<header className="page-evaluation-header">
							<h1>Avaliar consulta</h1>
							<div className="page-evaluation-estrela">
								{stars.map((_, index) => {
									return <FaStar className="estrela" key={index} onClick={() => setValorEstrela(index + 1)} color={valorEstrela > index ? colorStar.orange : colorStar.gray} />;
								})}
								<h1>{valorEstrela}</h1>
							</div>
							<hr />
						</header>
						<section className="page-evaluation-comment">
							<div>
								<h1 className="page-evaluation-comment-title">O que achou da consulta? </h1>
							</div>
							<div className="page-evaluation-comment-comments">
								<div className="page-evaluation-comment-div-cards">
									<div className="page-evaluation-comment-div-Feedback">
										<div className="input-main">
											<p className="input-text">
												Descrição <span>*</span>
											</p>
											<textarea
												onChange={(e) => setDescricaoConsulta(e.target.value)}
												value={descricaoConsulta}
												cols="10"
												rows="10"
												className="default-textarea"
												placeholder="Escreva algo de importante"></textarea>
										</div>
										<div className="btn-div">
											<button
												id="send"
												className="sg-lg-btn-complex"
												onClick={async () => {
													toast(
														(t) => (
															<span>
																Tem certeza que deseja enviar este feedback?
																<button
																	onClick={async () => {
																		toast.dismiss(t.id);
																		toast.success(`Feedback enviado com sucesso!`);
																		const s = await statusConsult(idConsulta, 4);
																		const r = await addAvaliacao(id, userInfo.id, descricaoConsulta, valorEstrela);
																		setTimeout(() => {
																			nav("/consultas");
																		}, 4000)
																			
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
																	Enviar
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
												Enviar feedback
											</button>
										</div>
									</div>
								</div>
								<div className="page-evaluation-medic">
									<div className="page-evaluation-medic-info">
										<img src={David} />
										<h1>{doctorName}</h1>
									</div>
									<img src={LinhaSeparação2} className="page-evaluation-medic-info-separation" />
									<div className="page-evaluation-medic-desc">
										<p>
											{doctorDesc}
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</main>
	);
}
