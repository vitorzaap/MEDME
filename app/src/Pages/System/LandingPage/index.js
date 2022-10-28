import "./index.scss";
import "../../Common/common.scss";
import Logo from '../../../assets/images/Logo.svg'
import logoFooter from '../../../assets/images/logo-footer.svg' 
import Card from './Card/index.js'
import image1 from '../../../assets/images/icon1-card.svg'
import image2 from '../../../assets/images/icon2-card.svg'
import image3 from '../../../assets/images/icon3-card.svg'
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from "react";

export default function Index() {
    const navigate = useNavigate();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAqU0N1DMMcJGJdEE1fCrvHu_L59YvMHSM"
      })
    
    return (
        <main className="landing-main">
            <header>
                <img src={Logo} className='lm-header-logo' alt="logo"/>
                <div className="lm-header-div">
                   
                    <button className="lm-button-1" onClick={() => { navigate("/user/login")}}>Fazer Login</button>
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
                    <button onClick={() => { navigate("/user/account")}}>
                        Cadastrar-se de graça
                    </button>
                    </div>
            </section>
            <div className="space-div"></div>
            <section className="lm-section-2-cards">
                <Card titulo="Serviços" texto="Consultas com preços que cabem no seu bolso! Entregamos a melhor qualidade e conforto com um ótimo atendimento ao cliente." imagem={image1} flutuagem='1'/>
                <Card titulo="Rapidez e Agilidade" texto="Dura menos de 3 minutos para você começar a conversar com um de nossos médicos, basta criar sua conta e escolher quem você quer conversar." imagem={image2} flutuagem='2' />
                <Card titulo="Conversas" texto="Fale pelo chat, ou agende uma consulta no conforto da sua residência, resolvar seus problemas facilmente sem muitas complicações." imagem={image3} flutuagem='1' />
            </section>
            <div className="space-div"></div>
            {/* vou arrumar 100% ainda fellas, só deixa asssim pq n ta patético e ta aceitável, dps deixa redondinho, "clean" q nem vcs femeas gostam de falar */}
            <section className="tste">
                    <h1 className="h1-map-txt">
                       Onde Estamos
                    </h1>
                    <div className="lm-section-1-div-text-space-div"></div>
            <div className="lm-section-3-maps">
            {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%'}}
        center={{
            lat: -23.680462921941125,
            lng: -46.70816664844635    
        }}
        zoom={15}
       
      >
        
        <></>
      </GoogleMap>
  ) : <></>
            }
           
            </div>
            <div className="div-space"></div>
            <div>
                <p>
                    Av. Coronel Octaviano de Freitas Costa, 463
                </p>
                <p>
                04773-000
                </p>
            </div>
            </section>
            
            <div className="space-div"></div>
           
           
            <footer>
                <div className="footer-content">
                    <img src={logoFooter} alt='logo-roxa' />
                    <div className="links-footer">
                        <a>Envie um feedback</a>
                        <a>Termos e privacidade</a>
                        <a>Trabalhe conosco</a>
                    </div>
                    <p className="footer-signature">©2022, Medme Company.</p>
                </div>
            </footer>
        </main>
        
    );
}
