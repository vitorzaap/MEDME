import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./Pages/System/LandingPage";
import LogIn from "./Pages/System/LogIn";
import SigIn from "./Pages/System/SignIn";
export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Lp />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/sigin" element={<SigIn />} />
			</Routes>
		</BrowserRouter>
	);
}
