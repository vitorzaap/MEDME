import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./Pages/System/LandingPage";
import LogIn from "./Pages/System/LogIn";
import SigIn from "./Pages/System/SignIn";
import Consultas from "./Pages/System/Consultas"
export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Lp />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/sigin" element={<SigIn />} />
				<Route path="/consultas" element={<Consultas />} />
			</Routes>
		</BrowserRouter>
	);
}
