import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import iconuser from "../../../assets/images/user-icon.svg";
import storage from "local-storage";
import { addConversa, getConsultas } from "../../../api/userApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Medics() {
  const user = storage("userInfo");
  const [medicos, setMedicos] = useState([]);
  async function carregarMedic() {
    const resposta = await getConsultas();
    setMedicos(resposta);
  }
  useEffect(() => {
    carregarMedic();
  }, []);
  const navigate = useNavigate();
  return (
    <main className="user-medics-main">
      <section className="user-medics-section-main">
        <Cabecalho />
        <div className="user-medics-content">
          <div className="user-medics-card-main">
            {medicos.map((item) => (
              <div className="user-medics-card-medic" onClick={() => {
                navigate('/mensagens');
                addConversa(item.id, user.id)
              }}>
                <div className="user-medics-card-medic-profile">
                  {item.icon ? <img src={item.icon} /> : <img src={iconuser} />}
                  <h1>{item.nome[0].toUpperCase() + item.nome.substring(1)}</h1>
                </div>
                {item.atuacao === item.atuacao1 ? (
                  <div className="user-medics-card-medic-description">
                    <p>{item.atuacao.toUpperCase()}</p>
                    <h6>{item.descricao}</h6>
                  </div>
                ) : (
                  <div className="user-medics-card-medic-description">
                    <p>{item.atuacao}</p>
                    <p>{item.atuacao1}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
