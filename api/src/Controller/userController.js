import { response, Router } from "express";
import { userLogin, userSigIn, verifUserEmail, userAccept, getConsultas } from "../Repo/userRepo.js";
const router = Router();

router.post("/api/user/login", async (req, res) => {
	try {
		const user = req.body;
		const r = await userLogin(user);
		if (!r) {
			throw new Error("Senha ou E-mail incorretos.");
		} else {
			res.status(201).send(r);
		}
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.post("/api/user/account", async (req, res) => {
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

router.put("/api/user/consultas/aceitar/:id", async (req, res) => {
	try {
		const id = req.params;
		const verif = await userAccept(id);
		res.status(204);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/user/consultas", async (req, res) => {
	try {
		const { id } = req.query;
		const r = await getConsultas(id);
		if (r.length < 1) {
			throw new Error("Você não tem nenhuma consulta ainda.");
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
