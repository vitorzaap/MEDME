import { Router } from "express";
import { userLogin } from "../Repo/userRepo.js";
const router = Router();

router.post("/api/user/login", async (req, res) => {
	try {
		const { email, senha } = req.body;
		const r = await userLogin(email, senha);
		if (!r) {
			throw new Error("Senha ou E-mail incorretos.");
		} else {
			res.send(r);
		}
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
