import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js";
import Cabecalho from "../../Components/Header/index.js";
import LinhaSeparação from "../../../assets/images/linha-separação2.svg";
import LinhaSeparação2 from "../../../assets/images/linha-separação4.svg";
import Card from "./card-comments";
import David from "../../../assets/images/david.svg";
import { FaStar } from 'react-icons/fa'
import { useState } from "react";


export default function Index() {
	const stars = Array(5).fill(0)
	const [valorEstrela, setValorEstrela] = useState(0)
	const colorStar = {
		orange : "#F6D523",
		gray : "#B4B4B4"
	}
	
	document.addEventListener("keypress" , function (e) {
		if(e.key === "Enter"){
			const btn = document.querySelector("#send");
			btn.click();
		}
	})
	
	return (
		<main className="evaluation-main">
			<Menu selecionado="avaliacoes" />
			<section className="evaluation-section-main">
				<Cabecalho />
				<div className="evaluation-content">
					<div className="evaluation-main-content">
						<header className="page-evaluation-header">
							<h1>Avaliar consulta</h1>
							<div className="page-evaluation-estrela">
								{stars.map((_, index) => {
									return (
										<FaStar className="estrela" key={index} onClick={() => setValorEstrela(index + 1)}
										color={(valorEstrela) > index  ? colorStar.orange : colorStar.gray} />
									)
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
											<p className="input-text">Descrição <span>*</span></p>
											<textarea
												cols="10"
												rows="10"
												className="default-textarea"
												placeholder="Escreva algo de importante"></textarea>
										</div>
                                        <div className="btn-div">
                                        <button id="send" className="sg-lg-btn-complex">Enviar feedback</button>
                                        </div>
									</div>
								</div>
								<div className="page-evaluation-medic">
									<div className="page-evaluation-medic-info">
										<img src={David} />
										<h1>David Laster</h1>
									</div>
									<img src={LinhaSeparação2} className="page-evaluation-medic-info-separation" />
									<div className="page-evaluation-medic-desc">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
											nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
											sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
