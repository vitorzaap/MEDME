import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu-Usuario/index.js"
import Cabecalho from "../../Components/Header/index.js"
import Card from './Card-Medics'
import David from '../../../assets/images/david.svg'
import { getConsultas } from "../../../api/userApi";
import { useEffect, useState } from "react";
export default function Medics() {
    const [medicos, setMedicos] = useState([])
    async function carregarMedic() {
		const resposta = await getConsultas();
		setMedicos(resposta);
	}
    useEffect(() => {
        carregarMedic()
    },[])
    return (
        <main className="user-medics-main">
            <Menu selecionado="medics" />
            <section className="user-medics-section-main">
                <Cabecalho />
                <div className="user-medics-content">
                    {medicos.map((medic) => (
                        <Card image={David} name={medic.nome} profissão1={medic.atuacao}profissão2={medic.atuacao1} descricao={medic.descricao}/>
                    ))}
                </div>
            </section>
        </main>
    );
}