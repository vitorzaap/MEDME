import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js"
import LinhaSeparação from "../../../assets/images/linha-separação2.svg"
import Card from "./card-comments"
import David from "../../../assets/images/david.svg";
export default function Index() {
	return (
		<main className="evaluation-main">
            <section className="evaluation-section-main">
                <Cabecalho />
                <div className="evaluation-content">
                    <div className="evaluation-main-content">
                        <header className="page-evaluation-header">
                                <h1>Avaliações</h1>
                                <div className="page-evaluation-div-linha-separacao">
                                    <img src={LinhaSeparação} className='evaluation-linhaseparacao'/>
                                </div>
                        </header>
                        <section className="page-evaluation-comment">
                            <div>
                                <h1 className="page-evaluation-comment-title">O que estão falando de você</h1>
                            </div>
                            <div className="page-evaluation-comment-comments">
                                <div className="page-evaluation-comment-div-cards">
                                    <Card image={David} name="Pedro Horvath Montemurro" nota="5"/>
                                    <Card image={David} name="Kalel Lindão" nota="4.5"/>
                                    <Card image={David} name="Victor Santos Menezes" nota="3"/>
                                </div>
                                <div className="page-evaluation-comment-hates">
                                    <div className="page-evaluation-comment-hates-div-total">
                                        <h1>486</h1>
                                        <h1>Comentários</h1>
                                    </div>
                                    <div className="page-evaluation-comment-hates-div-positivos">
                                        <h1>400 Comentários positivos </h1>
                                    </div>
                                    <div className="page-evaluation-comment-hates-div-negativos">
                                        <h1>86 Comentários negativos </h1>
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
