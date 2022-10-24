import { Router } from "express";
import { medicLogin, novaConsulta, selecionarPaciente, selecionarAtuacao, secPlataforma, getConsulta, getDoctorById } from "../Repo/medicRepo.js";

const router = Router();
router.post("/api/medic/login", async (req, res) => {
	try {
		const medic = req.body;
		const r = await medicLogin(medic);
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

router.get("/api/medic", async (req, res) => {
	try {
		const { id } = req.query;
		const r = await getDoctorById(id);
		if (!r || r.length < 1) {
			throw new Error("Ocorreu algum erro.")
		}
		res.send(r);
	}
	catch (err) {
		res.send({
			erro: err.message
		})
	}
})

router.post("/api/medic/consulta", async (req, res) => {
	try {
		const nova = req.body;
		const consulta = await novaConsulta(nova);
		res.send(consulta);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/consulta", async (req, res) => {
	try {
		const { id } = req.query;
		const r = await getConsulta(id);
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

router.get("/api/medic/chat", async (req, res) => {
	try {
		const { id } = req.query;
		const r = await selecionarPaciente(id);
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/atuacao", async (req, res) => {
	try {
		const { id } = req.query;
		const [resposta] = await selecionarAtuacao(id);
		res.send(resposta);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/plataforma", async (req, res) => {
	try {
		const [r] = await secPlataforma();
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

export default router;
