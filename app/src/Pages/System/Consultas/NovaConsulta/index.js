import "./index.scss"
import "../../../Common/common.scss"
import iconuser from "../../../../assets/images/image 4.svg"

export default function Index(props) {
    
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
                            <select>
                                <option> 
                                    <img src={iconuser} /> 
                                    <p>Sr.Piton</p>
                                </option>
                            </select>
                        </div>
                        <div className="descricao-input">
                            <label>Descrição</label>
                            <textarea placeholder="Escreva algo de importante"></textarea>
                        </div>
                        <div className="data-input">
                            <label>Data e hora</label>
                            <div className="data-hora-inputs">
                                <input type="date" className="date-input" />
                                <input type="time" className="time-input" />
                            </div>
                        </div>
                        <div className="tipo-input">
                            <label>Tipo de consulta</label>
                            <select>
                                <option>
                                <p>Psicologia</p>
                                </option>
                            </select>
                        </div>
                    </div>
                    <section className="right-sec">
                    <div className="r-nova">
                        <div className="plataforma-input">
                            <label>Plataforma da consulta</label>
                            <input  className="plat-in"  placeholder="Escreva a plataforma"></input>
                        </div>
                        <div className="preco-input">
                            <label>Preço</label>
                            <input type="number" className="pre-in" placeholder="Defina um preço">
                            </input>
                           
                        </div>
                        <div className="link-input">
                            <label>Link da consulta</label>
                            <input className="link-in" placeholder="Cole o link"></input>
                        </div>
                    </div></section>
                </div>
                
                <div className="button-confirm">
                    <button className="button-consult">Confirmar consulta</button>
                </div>
            </section>              
        </main>
    )
}