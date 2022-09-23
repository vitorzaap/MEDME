import "./index.scss"
import "../../../Common/common.scss"
import iconuser from "../../../../assets/images/image 4.svg"
import { listarPacientes, adicionarConsulta, listarAtuacao } from "../../../../api/medicApi.js"
import { useState, useRef, useEffect } from "react";
import storage from "local-storage"

export default function Index(props) {


    const [pacienteId, setPacienteId] = useState();
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [tipo, setTipo] = useState();
    const [plataforma, setPlataforma] = useState("");
    const [preco, setPreco] = useState();
    const [link, setLink] = useState("");
    const [paciente, setPaciente] = useState([])
    const [atuacao, setAtuacao] = useState([]);
    function hideNova(){
        var element = document.getElementById("pop-up")
        element.classList.remove("show-main")
    }

    async function listar() {
        const id = storage("local-storage").id
        const r = await listarPacientes(id);
        const s = await listarAtuacao(id);
        setAtuacao([s])
        setPaciente([r])
    }
    return(
        <main  className="nova-content">
            <section>
                <div  className="title-nova">
                    <h1>Nova Consulta #3</h1>
                </div>
                <div className="main-content-nova">
                    <div className="l-nova">
                        <div className="paciente-input">
                            <label>Paciente</label>
                            
                            <select value={pacienteId} onChange={e => setPacienteId(e.target.value)} onClick={listar}>
                                <option selected disabled hidden>Selecionar paciente</option>
                                <option value="" key="">
                                {paciente.map((item) => (<p>
                                        {item.nameUser}
                                    </p>))}
                                </option>
                            </select>
                        </div>
                        <div className="descricao-input">
                            <label>Descrição</label>
                            <textarea placeholder="Escreva algo de importante" value={descricao} onChange={e => setDescricao(e.target.value)} ></textarea>
                        </div>
                        <div className="data-input">
                            <label>Data e hora</label>
                            <div className="data-hora-inputs">
                                <input type="date" value={data} onChange={e => setData(e.target.value)} className="date-input" />
                                <input type="time" value={hora} onChange={e => setHora(e.target.value)} className="time-input" />
                            </div>
                        </div>
                        <div className="tipo-input">
                            <label>Tipo de consulta</label>
                            <select value={tipo} onClick={listar}>
                                <option>
                                {atuacao.map((item) => (<p>
                                        {item.atuacao1}
                                </p>))}
                                
                                </option>
                                <option value={tipo} key="">
                                {atuacao.map((item) => (<p>
                                        {item.atuacao2}
                                    </p>))}
                                </option>
                            </select>
                        </div>
                    </div>
                   
                    <div className="r-nova">
                        <div className="plataforma-input">
                            <label>Plataforma da consulta</label>
                            <input  className="plat-in" value={plataforma} onChange={e => setPlataforma(e.target.value)}  placeholder="Escreva a plataforma"></input>
                        </div>
                        <div className="preco-input">
                            <label>Preço</label>
                            <input type="number" value={preco} onChange={e => setPreco(e.target.value)} className="pre-in" placeholder="Defina um preço">
                            </input>
                           
                        </div>
                        <div className="link-input">
                            <label>Link da consulta</label>
                            <input value={link} onChange={e=> setLink(e.target.value)} className="link-in" placeholder="Cole o link"></input>
                        </div>
                    </div>
                </div>
                
                <div className="button-confirm">
                    <button className="button-consult" onClick={async () => {
                        const medicId = storage('local-storage').id;
                        await adicionarConsulta(medicId, pacienteId, descricao, data, hora, tipo, plataforma, preco, link);
                        
                    }} >Confirmar consulta</button>
                </div>
            </section>              
        </main>
    )
}