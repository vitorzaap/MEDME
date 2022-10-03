import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Medico/index.js"
import Cabecalho from "../../Components/Header/index.js"
import DavidLester from "../../../assets/images/david.svg"
import LinhaSeparação from "../../../assets/images/linha-separação.svg"
import FileIcon from "../../../assets/images/file.svg"
import SendVector from "../../../assets/images/send-vector.svg"

export default function Index() {
	return (
		<main className="messages-main">
            <Menu selecionado="mensagens" />
            <section className="messages-section-main">
                <Cabecalho />
                <div className="messages-content">
                    <div>
                        <table className="page-messages-users">
                            <tr>
                                <div className="page-messages-users-div-1">
                                <img src={DavidLester} />
                                <div className="page-messages-users-div-2">
                                    <div className="page-messages-users-div-3">
                                        <h1>
                                            David Lester
                                        </h1>
                                        <p>
                                            16:20
                                        </p>
                                    </div>
                                    <p className="page-messages-users-descricao">
                                        Teste de Mensagem Teste de Mensagem Teste de Mensagem
                                    </p>
                                </div>
                                </div>
                                <img src={LinhaSeparação} className="linha-separacao-img"/>
                            </tr>
                            <tr>
                                <div className="page-messages-users-div-1">
                                <img src={DavidLester} />
                                <div className="page-messages-users-div-2">
                                    <div className="page-messages-users-div-3">
                                        <h1>
                                            David Lester
                                        </h1>
                                        <p>
                                            16:20
                                        </p>
                                    </div>
                                    <p className="page-messages-users-descricao">
                                        Teste de Mensagem Teste de Mensagem Teste de Mensagem
                                    </p>
                                </div>
                                </div>
                                <img src={LinhaSeparação} className="linha-separacao-img"/>
                            </tr>
                        </table>
                    </div>
                    <div className="messages-content-conversation">
                        <header>
                            <img src={DavidLester} />
                            <h1>David Lester</h1>
                        </header>
                        <div className="messages-main-content-conversation">

                        </div>
                        <footer>
                            <div className="messages-inputzao">
                                    <img src={FileIcon} className="messages-FileIcon"/>
                                    <input type="text" placeholder="Envie uma mensagem."/>
                                <img src={SendVector} className="messages-SendVector"/>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
		</main>
	);
}
