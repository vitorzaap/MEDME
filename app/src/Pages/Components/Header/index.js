import "./index.scss";
import storage from "local-storage";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo2 (2).svg"
import icon from "../../../assets/images/user-icon.svg"
import search from "../../../assets/images/search-bar.svg"
export default function Index() {
	const user = storage("userInfo");
	const name = user.name
	const navigate = useNavigate();
	return (
		<header className="default-header">
			<div className="default-header-content">
				<div className="links-div">
					<div className="logo-div">
						<img src={Logo} width="32px" />
					</div>
					<div className="div-pages">
						<button className="default-button-page" onClick={() => navigate("/dashboard")}>
							Dashboard
						</button>
						<button className="default-button-page" onClick={() => navigate("/consultas")}>
							Consultas
						</button>
						<button className="default-button-page" onClick={() => navigate("/mensagens")}>
							Conversas
						</button>
						<button className="default-button-page" onClick={() => navigate("/medics")}>
							Médicos
						</button>
					</div>
				</div>
				<div className="search-div">
					<div className="input-search-main">
						<div className="div-search-icon">
							<img src={search} alt="search-icon" className="search-icon" />
						</div>
						<input type="search" className="default-header-search" placeholder="Busque o que quiser..." />
					</div>
				</div>
				<div className="profile-div" onClick={() => navigate("/profile")}>
					<img src={icon} alt="default-icon" width="32px" className="icon-user" />
					<span className="profile-name">{name[0].toUpperCase() + name.slice(1)}</span>
				</div>
			</div>
		</header>
	);
}
