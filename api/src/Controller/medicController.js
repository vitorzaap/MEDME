import { Router } from "express";
import { medicLogin } from "../Repo/medicRepo.js";
const router = Router();

router.post("/api/medic/login", async (req, res) => {
	try {
		const [email, pass] = req.body;
		res.send(await medicLogin(email, pass));
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
