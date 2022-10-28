import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js"
import DavidLester from "../../../assets/images/david.svg"
import LinhaSeparação from "../../../assets/images/linha-separação.svg"
import FileIcon from "../../../assets/images/file.svg"
import SendVector from "../../../assets/images/send-vector.svg"
import { useEffect, useState } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000");

export default function Index() {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    


    useEffect(() => {

    }, [])
    function submitMessage() {
        
    }
    return (
        <main className="messages-main">
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
                                <img src={LinhaSeparação} className="linha-separacao-img" />
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
                                <img src={LinhaSeparação} className="linha-separacao-img" />
                            </tr>
                        </table>
                    </div>
                    <div className="messages-content-conversation">
                        <header>
                            <img src={DavidLester} />
                            <h1>David Lester</h1>
                        </header>
                        <div className="messages-main-content-conversation">
                            <ul className="chat">
                                <li className="user-message">
                                    <span>
                                        Teste de mensagem Teste de mensagem Teste de mensagem
                                    </span>
                                </li>
                                {messages.map(m => (
                                    <li className="my-message" key={m.id}>
                                        <span>
                                            {m.message}
                                        </span>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        <footer>
                            <form className="messages-inputzao" onSubmit={submitMessage}>
                                <img src={FileIcon} className="messages-FileIcon" />
                                <input type="text" placeholder="Envie uma mensagem." value={message} onChange={(e) => setMessage(e.target.value)} />
                                <img src={SendVector} className="messages-SendVector" onClick={submitMessage} />
                            </form>
                        </footer>
                    </div>
                </div>
            </section>
        </main>
    );
}
