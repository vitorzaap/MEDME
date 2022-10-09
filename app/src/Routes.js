import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./Pages/System/LandingPage";

import SigUp from "./Pages/User/SignUp";
import UserLogIn from "./Pages/User/LogIn";
import UserDashBoard from "./Pages/User/DashBoard";
import UserMessages from "./Pages/User/Messages";
import UserConsultas from "./Pages/User/Consultas";
import UserAvaliacoes from "./Pages/User/Evaluation";

import MedicLogin from "./Pages/Medic/login";
import MedicDashBoard from "./Pages/Medic/DashBoard";
import MedicMessages from "./Pages/Medic/Messages";
import MedicConsultas from "./Pages/Medic/Consultas";
import MedicAvaliacoes from "./Pages/Medic/Evaluation";

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Lp />} />

				<Route path="/user/account" element={<SigUp />} />
				<Route path="/user/login" element={<UserLogIn />} />
				<Route path="/dashboard" element={<UserDashBoard />} />
				<Route path="/mensagens" element={<UserMessages />} />
				<Route path="/consultas" element={<UserConsultas />} />
				<Route path="/avaliacoes/:id" element={<UserAvaliacoes />} />
				<Route path="/medic/login" element={<MedicLogin />} />
				<Route path="/medic/dashboard" element={<MedicDashBoard />} />
				<Route path="/medic/mensagens" element={<MedicMessages />} />
				<Route path="/medic/consultas" element={<MedicConsultas />} />
				<Route path="/medic/avaliacoes" element={<MedicAvaliacoes />} />
				
			</Routes>
		</BrowserRouter>
	);
}
