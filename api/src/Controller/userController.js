import { response, Router } from "express";
import { userLogin, userSigIn, verifUserEmail, userAccept, getConsultas, addAvaliacao } from "../Repo/userRepo.js";

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

router.put("/api/user/consultas", async (req, res) => {
	try {
		const { id, situation } = req.query;
		const r = await userAccept(situation, id);

		res.status(204).send();
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/user/consultas", async (req, res) => {
	try {
		const { id } = req.query;
		let r = await getConsultas(id);
		for (let i = 0; i < r.length; i++) {
			let l = new Date(r[i].dataConsulta);
			const time = r[i].horaConsulta
			const hour = time.slice(0, 2)
			const minute = Number(time.slice(3, 5))
			l.setHours(hour - 3, minute)
			const diff = new Date() - l
			r[i].diff = diff
		}
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
router.post("/api/user/avalicao", async (req, res) => {
	try {
		const {medicId, userId, descricao, number} = req.body
		const r = await addAvaliacao(medicId, userId, descricao, number)
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
