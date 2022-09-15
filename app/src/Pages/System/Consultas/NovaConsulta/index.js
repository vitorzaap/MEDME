import "./index.scss"
import "../../../Common/common.scss"

export default function Index() {
    
     function hideNova(){
        var element = document.getElementById("pop-up")
        element.classList.remove("show-main")

    }

    return(
        <main className="nova-content">
            <section>
                <div  className="title-nova">
                    <h1>Nova Consulta #3</h1>
                </div>
                <div className="main-content-nova">
                    <div className="l-nova">
                        <div className="paciente-input">
                            <label>Paciente</label>
                            <input />
                        </div>
                        <div className="descricao-input">
                            <label>Descrição</label>
                            <textarea placeholder="Escreva algo de importante"></textarea>
                        </div>
                        <div className="data-input">
                            <label>Data e hora</label>
                            <div className="data-hora-inputs">
                                <input />
                                <input />
                            </div>
                        </div>
                        <div className="tipo-input">
                            <label>Tipo de consulta</label>
                            <input />
                        </div>
                    </div>
                    <div className="r-nova">
                        <div className="plataforma-input">
                            <label>Plataforma da consulta</label>
                            <input />
                        </div>
                        <div className="preco-input">
                            <label>Preço</label>
                            <p>0</p>
                        </div>
                        <div className="link-input">
                            <label>Link da consulta</label>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="button-confirm">
                    <button>Confirmar consulta</button>
                </div>
            </section>              
        </main>
    )
}