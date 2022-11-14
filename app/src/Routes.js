import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./Pages/System/LandingPage";

import SigUp from "./Pages/User/SignUp";
import UserLogIn from "./Pages/User/LogIn";
import UserDashBoard from "./Pages/User/DashBoard";
import UserMessages from "./Pages/User/Messages";
import UserConsultas from "./Pages/User/Consultas";
import UserAvaliacoes from "./Pages/User/Evaluation";
import UserMedics from "./Pages/User/Medics";
import UserMedicsDescription from "./Pages/User/Medics/description-medic";
import MedicLogin from "./Pages/Medic/login";
import MedicDashBoard from "./Pages/Medic/DashBoard";
import MedicMessages from "./Pages/Medic/Messages";
import MedicConsultas from "./Pages/Medic/Consultas";
import MedicAvaliacoes from "./Pages/Medic/Evaluation";
import UserProfile from "./Pages/User/Profile"
import MedicProfile from "./Pages/Medic/Profile"
import Feedback from "./Pages/System/LandingPage/Feedback";
import Terms from "./Pages/System/LandingPage/Terms"
import Work from "./Pages/System/LandingPage/Work"

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
				<Route path="/medics" element={<UserMedics />} />
				<Route path="/medics/description/:doctorId" element={<UserMedicsDescription />} />
				<Route path="/avaliacoes/:id/:idConsulta" element={<UserAvaliacoes />} />
				<Route path="/medic/login" element={<MedicLogin />} />
				<Route path="/medic/dashboard" element={<MedicDashBoard />} />
				<Route path="/medic/mensagens" element={<MedicMessages />} />
				<Route path="/medic/consultas" element={<MedicConsultas />} />
				<Route path="/medic/avaliacoes" element={<MedicAvaliacoes />} />
				<Route path="/medic/profile" element={<MedicProfile />} />
				<Route path="/profile" element={<UserProfile />} />
				<Route path="/feedback" element={<Feedback />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/work" element={<Work />} />
			</Routes>
		</BrowserRouter>
	);
}
