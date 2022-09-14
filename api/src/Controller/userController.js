import { Router } from "express";
import { userLogin } from "../Repo/userRepo.js";
const router = Router();

router.post("/api/user/login", async (req, res) => {
	try {
		const {email, pass} = req.body;
		const resp = await userLogin(email, pass);
		res.send(resp);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
