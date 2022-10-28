import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import David from "../../../assets/images/david.svg";

import storage from "local-storage"
import { getConsultas } from "../../../api/userApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Medics() {
    const [medicos, setMedicos] = useState([]);
	async function carregarMedic() {
		const resposta = await getConsultas();
		setMedicos(resposta);
    }
    
	useEffect(() => {
		carregarMedic();
	}, []);
	return (
        <main className="user-medics-main">
            
		</main>
	);
}
