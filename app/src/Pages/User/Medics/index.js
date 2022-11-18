import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import iconuser from "../../../assets/images/user-icon.svg";
import storage from "local-storage";
import { addConversa, getConsultas } from "../../../api/userApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchImage } from "../../../api/medicApi";
export default function Medics() {
  const user = storage("userInfo");
  const [medicos, setMedicos] = useState([]);
  const [image, setImage] = useState()
  const navigate = useNavigate();
  if (!storage("userInfo")) {
    navigate("/login")
  }
  async function carregarMedic() {
    const resposta = await getConsultas();
    setMedicos(resposta);
  }
  useEffect(() => {
    carregarMedic();
    
  }, []);
  return (
    <main className="user-medics-main">
      <section className="user-medics-section-main">
      <Cabecalho />
        <div className="user-medics-content">
          <div className="user-medics-card-main">
            <div className="align">
            {medicos.map((item) => (
              <div className="user-medics-card-medic" onClick={() => {
                navigate(`/medics/description/${item.id}`);
              }}>
                <div className="user-medics-card-medic-profile">
                  <img src={iconuser} />: <img src={iconuser} />
                  <h1>{item.nome[0].toUpperCase() + item.nome.substring(1)}</h1>
                  <p>{item.atuacao.toUpperCase()}</p>
                </div>
                <div className="user-medics-card-medic-description">
                  <p>{item.descricao}</p>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
