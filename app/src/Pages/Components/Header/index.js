import "./index.scss";
import storage from "local-storage";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo2 (2).svg";
import icon from "../../../assets/images/user-icon.svg";
import search from "../../../assets/images/search-bar.svg";
import LoadingBar from "react-top-loading-bar";
import { useRef, useState } from "react";
export default function Index(props) {
  const user = storage("userInfo");
  const doctor = storage("doctorInfo")
  const ref = useRef();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  function loadNavigate(locate) {
    ref.current.continuousStart();
    setDisabled(true);
    setTimeout(() => {
      ref.current.complete();
      setTimeout(() => {
        navigate(`${locate}`);
        setDisabled(false);
      }, 200);
    }, Math.floor(Math.random() * 1500) + 500);
  }
  return (
    <header className="default-header">
      <LoadingBar ref={ref} color="#fff" />
      {user == null ? (
        <div className="default-header-content">
          <div className="links-div">
            <div className="logo-div" onClick={() => {
              ref.current.continuousStart();
              setDisabled(true);
              
              setTimeout(() => {
                 ref.current.complete();
                setTimeout(() => {
                  storage.remove('doctorInfo')
                  navigate('/medic/login')
                   setDisabled(false);
                 }, 200);
               }, Math.floor(Math.random() * 1500) + 500);
               
            }}>
              <img src={Logo} width="32px" />
            </div>
            <div className="div-pages">
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/medic/dashboard")}
              >
                Dashboard
              </button>
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/medic/consultas")}
              >
                Consultas
              </button>
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/medic/mensagens")}
              >
                Conversas
              </button>
            </div>
          </div>
          
          <div className="profile-div" onClick={() => navigate("/medic/profile")}>
            <img
              src={icon}
              alt="default-icon"
              width="32px"
              className="icon-user"
            />
            <span className="profile-name">
              {doctor.name[0].toUpperCase() + doctor.name.slice(1)}
            </span>
          </div>
        </div>
      ) : (
        <div className="default-header-content">
          <div className="links-div">
              <div className="logo-div" onClick={() => {
                storage.remove('userInfo')
                setTimeout(() => {
                  navigate('/user/login')
                }, 2000)
            }}>
              <img src={Logo} width="32px" />
            </div>
            <div className="div-pages">
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/dashboard")}
              >
                Dashboard
              </button>
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/consultas")}
              >
                Consultas
              </button>
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/mensagens")}
              >
                Conversas
              </button>
              <button
                className="default-button-page"
                disabled={disabled}
                onClick={() => loadNavigate("/medics")}
              >
                Médicos
              </button>
            </div>
          </div>
          <div className="search-div">
            <div className="input-search-main">
              <div className="div-search-icon">
                <img src={search} alt="search-icon" className="search-icon" />
              </div>
              <input
                type="search"
                className="default-header-search"
                placeholder="Busque o que quiser..."
              />
            </div>
          </div>
          <div className="profile-div" onClick={() => navigate("/profile")}>
            <img
              src={icon}
              alt="default-icon"
              width="32px"
              className="icon-user"
            />
            <span className="profile-name">
              {user.name[0].toUpperCase() + user.name.slice(1)}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
