import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js"
import LinhaSeparação from "../../../assets/images/linha-separação2.svg"
import Card from "./card-comments"
import David from "../../../assets/images/david.svg";
import { useNavigate } from "react-router-dom";
import storage from "local-storage"
import { useEffect, useState } from "react";
import { getComents } from "../../../api/medicApi.js";
export default function Index() {
    const [info, setInfo] = useState([]);
    const [image, setImage] = useState()
    const [bad, setBad] = useState(0)
    const [good, setGood] = useState(0)
    async function getAvaliation() {
        const r = await getComents(storage("doctorInfo").id)
        setInfo(r);
        for (let i = 0; i < r.length; i++){
            console.log(r[i].nr_avaliacao)
            if (r[i].nr_avalicao <= 3 || r[i].nr_avaliacao == 2 || r[i].nr_avaliacao == 1 || r[i].nr_avaliacao == 0) {
                setBad(bad+1)
            }
            else if(r[i].nr_avaliacao > 3) {
                setGood(good + 1)
                console.log("aaa")
            }
        }
        
    }

    useEffect(() => {
        getAvaliation();
    }, [])

    function show(x) {
        return URL.createObjectURL(x);
    }

    const navigate = useNavigate();
	if (!storage("doctorInfo")) {
		navigate("/medic/login")
	}
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
                                    {info.map((item) =>  (<Card image={`http://localhost:5000/${item.img_icon}`} desc={item.ds_avaliacao} name={item.nm_usuario} nota={item.nr_avaliacao}/>))}
                                    
                                </div>
                                <div className="page-evaluation-comment-hates">
                                    <div className="page-evaluation-comment-hates-div-total">
                                        <h1>{info.length}</h1>
                                        <h1>Comentários</h1>
                                    </div>
                                    <div className="page-evaluation-comment-hates-div-positivos">
                                        <h1>{good} Comentários positivos </h1>
                                    </div>
                                    <div className="page-evaluation-comment-hates-div-negativos">
                                        <h1>{bad} Comentários negativos </h1>
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
