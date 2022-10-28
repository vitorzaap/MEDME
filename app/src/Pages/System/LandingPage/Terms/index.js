import './index.scss'
import { Navigate, useNavigate} from 'react-router-dom'
import logoFooter from "../../../../assets/images/logo-footer.svg"
import Logo from "../../../../assets/images/Logo.svg"

export default function Terms(){
    const navigate = useNavigate();
    return(
        <main className='terms-main'>
            <header>
                <img src={Logo} className='lm-header-logo' alt="logo"/>
                <div className="lm-header-div">
                   
                    <button className="lm-button-1" onClick={() => { navigate("/user/login")}}>Fazer Login</button>
                </div>
            </header>
            <section className='terms-section-initial'>
                <div className='terms'>
                    <h1 className='terms-title-privacity'> Termos e Privacidade</h1>
                    <p className='terms-text'>Quando você visita o Site, coletamos certas informações sobre seu dispositivo, sua interação com o Site e informações necessárias para processar suas compras. Também podemos coletar informações adicionais se você entrar em contato conosco para obter suporte ao cliente. Nesta Política de Privacidade, nos referimos a qualquer informação sobre um indivíduo identificável (incluindo as informações abaixo) como “Informações Pessoais”. Consulte a lista abaixo para obter mais informações sobre quais Informações Pessoais coletamos e por quê.</p>
                    </div>
                    </section>
                    <section className='youngs-section'>
                        <div className='youngs-div'>
                            <h1 className='youngs-title'>
                                Menores de idade
                            </h1>
                            <p className='youngs-text'>O Site não se destina a indivíduos com idade inferior a 18 anos. Não coletamos intencionalmente Informações pessoais de crianças. Se você é o pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco no endereço acima para solicitar a exclusão.</p>
                        </div>
                    </section>

                    <section className='privacity-section'>
                        <div className='privacity-div'>
                            <h1 className='privacity-title'>Nossos princípios de privacidade </h1>
                            <ul className='order-text'>                   
                            <li > Não monetizar seus dados</li>
                            <li > Adotar medidas de segurança e proteção dos seus dados</li>
                            <li > Utilizar os seus dados para aprimorar sua experiência</li>
                            <li > Não enviar mensagens promocionais ou de marketing</li>
                            <li > Você pode acessar suas informações, se opor ao seu compartilhamento, ou requerer a sua exclusão.</li>
                            </ul>  
                            
                        </div>
                    </section>
            
        </main>
    )
}

