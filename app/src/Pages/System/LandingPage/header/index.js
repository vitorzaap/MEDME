import "./index.scss" ; 
import Logo from '../../../../assets/images/Logo.svg'

import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    return (
        <header>
                <img src={Logo} className='lm-header-logo' alt="logo"/>
                <div className="lm-header-div">
                    <a className="lm-button-text" href="#">Home</a>
                    <a className="lm-button-text" onClick={() => {navigate("/quemsomos")}} >Sobre nós</a>
                    <a className="lm-button-text"href="#" >Valores</a>
                    <button className="lm-button-1" onClick={() => { navigate("/user/login")}}>Fazer Login</button>
                </div>
            </header>
    )}
