import "./index.scss";
import "../../Common/common.scss";
import Menu from "../../Components/Menu/index.js"
import Cabecalho from "../../Components/Header/index.js"

export default function Index() {
    return(
        <main className="main-consultas">
            <Menu />
            <div className="container-consultas">
                <Cabecalho />
                <div className="content-consultas">
                    
                </div>
            </div>
        </main>
    )
}