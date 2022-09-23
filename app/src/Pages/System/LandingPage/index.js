import "./index.scss";
import "../../Common/common.scss";
import Logo from '../../../assets/images/Logo.svg'
import logoFooter from '../../../assets/images/logo-footer.svg' 
import Card from './Card/index.js'
import image1 from '../../../assets/images/icon1-card.svg'
import image2 from '../../../assets/images/icon2-card.svg'
import image3 from '../../../assets/images/icon3-card.svg'
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    return (
        <main className="landing-main">
            <header>
                <img src={Logo} className='lm-header-logo' alt="logo"/>
                <div className="lm-header-div">
                    <a className="lm-button-text" href="#">Home</a>
                    <a className="lm-button-text"href="#">Sobre nós</a>
                    <a className="lm-button-text"href="#">Valores</a>
                    <button className="lm-button-1" onClick={() => { navigate("/login")}}>Fazer Login</button>
                </div>
            </header>
            <section className="lm-section-1">
                <div className="lm-section-1-div-text">
                    <h1>
                        Seja ajudado de onde estiver por profissionais qualificados.
                    </h1>
                    <p>
                        Obtenha ajuda de qualquer lugar a qualquer momento, com o nosso atendimento rápido você não vai passar por problemas.
                    </p>
                    <div className="lm-section-1-div-text-space-div"></div>
                    <button onClick={() => { navigate("/sigin")}}>
                        Cadastrar-se de graça
                    </button>
                    </div>
            </section>
            <div className="space-div"></div>
            <section className="lm-section-2-cards">
                <Card titulo="Serviços" texto="Consultas com preços que cabem no seu bolso! Entregamos a melhor qualidade e conforto com um ótimo atendimento ao cliente." imagem={image1} />
                <Card titulo="Rapidez e Agilidade" texto="Dura menos de 3 minutos para você começar a conversar com um de nossos médicos, basta criar sua conta e escolher quem você quer conversar." imagem={image2} />
                <Card titulo="Conversas" texto="Fale pelo chat, ou agende uma consulta no conforto da sua residência, resolvar seus problemas facilmente sem muitas complicações." imagem={image3} />
            </section>
            <div className="space-div"></div>
            <footer>
                <div className="footer-content">
                    <img src={logoFooter} alt='logo-roxa' />
                    <div className="links-footer">
                        <a>Fale conosco</a>
                        <a>Termos e privacidade</a>
                        <a>Cookies</a>
                    </div>
                    <p className="footer-signature">©2022, Medme Company.</p>
                </div>
            </footer>
        </main>
        
    );
}
