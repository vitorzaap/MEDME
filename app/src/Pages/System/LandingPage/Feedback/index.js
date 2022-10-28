import "./index.scss";
import "../../../Common/common.scss"
import Logo from "../../../../assets/images/Logo.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logoFooter from "../../../../assets/images/logo-footer.svg"


export default function Index(){
    const navigate = useNavigate()
    return(
        <main className="feedback">
            <header>
                <img src={Logo} className='lm-header-logo' alt="logo"/>
                <div className="lm-header-div">
                    <button className="lm-button-1" onClick={() => { navigate("/user/login")}}>Fazer Login</button>
                </div>
            </header>
            <section>
                <h1>Fale Conosco</h1>
                <div className="formulario-feedback">
                    <div>
                        <label>Nome Completo</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>WhatsApp</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea />
                    </div>
                </div>
                <button>Enviar</button>
            </section>
            <footer>
                <div className="footer-content">
                    <img src={logoFooter} alt='logo-roxa' />
                    <div className="links-footer">
                        <a onClick={() => { navigate("/feedback")}}>Envie um feedback</a>
                        <a onClick={() => { navigate("/user/login")}}>Termos e privacidade</a>
                        <a onClick={() => { navigate("/user/login")}}>Trabalhe conosco</a>
                    </div>
                    <p className="footer-signature">©2022, Medme Company.</p>
                </div>
            </footer>
        </main>
    )
}