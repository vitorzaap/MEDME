import { Router } from "express";
import { userLogin, userSigIn, verifUserEmail } from "../Repo/userRepo.js";
const router = Router();

router.post("/api/user/login", async (req, res) => {
	try {
		const user = req.body;
		const r = await userLogin(user);
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

router.post("/api/user/sigIn", async (req, res) => {
	try {
		const user = req.body;
		const verif = await verifUserEmail(user.email);
		if (!verif) {
			const r = await userSigIn(user);
			res.send(r);
		} else {
			throw new Error("E-mail já está em uso.");
		}
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
