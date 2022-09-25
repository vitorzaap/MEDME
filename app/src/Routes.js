import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./Pages/System/LandingPage";
import LogIn from "./Pages/System/LogIn";
import MedicLogin from "./Pages/Medic/login";
import SigIn from "./Pages/System/SignIn";
import Consultas from "./Pages/System/Consultas"
import Messages from "./Pages/System/Messages"
export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Lp />} />
				<Route path="/user/login" element={<LogIn />} />
				<Route path="/medic/login" element={<MedicLogin />} />
				<Route path="/user/account" element={<SigIn />} />
				<Route path="/consultas" element={<Consultas />} />
				<Route path="/mensagens" element={<Messages />} />
			</Routes>
		</BrowserRouter>
	);
}
