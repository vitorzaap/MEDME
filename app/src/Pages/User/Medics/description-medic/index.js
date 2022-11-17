import "../index.scss";
import "../../../Common/common.scss";
import iconuser from "../../../../assets/images/user-icon.svg";
import Cabecalho from "../../../Components/Header/index.js";
import storage from "local-storage";
import { useEffect, useState } from "react";
import { addConversa, searchMedic } from "../../../../api/userApi";
import { useParams, useNavigate } from "react-router-dom";
export default function Medics() {
  const user = storage("userInfo");
  const [medico, setMedico] = useState([]);
  const { doctorId } = useParams();
  const navigate = useNavigate();
	if (!storage("userInfo")) {
		navigate("/login")
	}
  async function carregarMedic() {
    const resposta = await searchMedic(doctorId);
    setMedico(resposta);
  }
  useEffect(() => {
    carregarMedic();
  }, []);

  return (
    <main className="user-medics-main">
      <section className="user-medics-section-main">
        <Cabecalho />
        <div className="user-medics-content">
          <div className="user-medics-description-card">
            <div className="user-medics-description">
              <div className="user-medics-description-content">
                {medico.img_icon ? (
                  <img src={medico.img_icon} />
                ) : (
                  <img src={iconuser} />
                )}
                <h1>{medico.nm_medico}</h1>
                <h6>{medico.ds_medico}</h6>
              </div>
              <button
                onClick={() => {
                  navigate("/mensagens");
                  addConversa(medico.id_medico, user.id);
                }}
              >
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Inicie Uma Conversa!</span>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
