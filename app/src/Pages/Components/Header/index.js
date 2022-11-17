import "./index.scss";
import storage from "local-storage";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo2 (2).svg";
import icon from "../../../assets/images/user-icon.svg";
import search from "../../../assets/images/search-bar.svg";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";
import { getDoctorById, searchImage } from "../../../api/medicApi";
import { getUser } from "../../../api/userApi";
export default function Index(props) {
  const user = storage("userInfo");
  const doctor = storage("doctorInfo")
  const ref = useRef();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [doctor2, setDoctor2] = useState([])
  const [user2, setUser2] = useState([])
  const [image, setImage] = useState()
  const [imageuser, setImageUser] = useState()
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
  async function setImageR(){
    const r = await searchImage(doctor2.img_icon)
    setImage(r)
  }
  async function setImageUserR(){
    const r = await searchImage(user2.img_icon)
    setImageUser(r)
  }
  async function setUserF() {
    const [r] = await getUser(user.id)
    setUser2(r)
    console.log(user2)
  }
  async function setDoctor( ) {
    const [r] = await getDoctorById(doctor.id)
    setDoctor2(r)
  }
  useEffect(() => {
    setDoctor()
    setUserF()
  }, [])
  useEffect(() => {
    setImageR()
  }, [doctor2])
  useEffect(() => {
    setImageUserR()
  }, [user2])
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
            {!doctor2.img_icon
              ? <img
                src={icon}
                alt="default-icon"
                width="32px"
                className="icon-user"
              />
              : <img
              src={image}
                alt="default-icon"
                width="32px"
                className="icon-user"
                style={{ borderRadius: '99px' }}
              />
            }

            <span className="profile-name">
              {doctor2.nm_medico}
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
            <div className="profile-div" onClick={() => navigate("/profile")}>
              {
                !user2.img_icon
                  ? <img
                  src={icon}
                  alt="default-icon"
                  width="32px"
                  className="icon-user"
                />
                  : <img
                  src={imageuser}
                  alt="default-icon"
                  width="32px"
                    className="icon-user"
                    style={{ borderRadius: '99px' }}
                />
              }
            
            <span className="profile-name">
              {user.name[0].toUpperCase() + user.name.slice(1)}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
