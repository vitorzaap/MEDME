import { Router } from "express";
import {
	medicLogin,
	novaConsulta,
	selecionarPaciente,
	selecionarAtuacao,
	secPlataforma,
	getConsulta,
	getDoctorById,
	pendentConsult,
	allConsuts,
	ultimaAvaliacao,
	changeDoctor,
	alterimage,
} from "../Repo/medicRepo.js";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "storage/doctorImages" });

router.put("/api/medic/:id/capa", upload.single("capa"), async (req, res) => {
	try {
		const { id } = req.params;
		function isImageNull() {
			if (req.file == undefined) {
				return null;
			} else {
				return req.file.path;
			}
		}
		const image = isImageNull();
		const r = await alterimage(image, id);
		if (r != 1) throw new Error("A imagem não pode ser salva.");

		res.status(204).send();
	} catch (err) {
		res.status(400).send({
			erro: err.message,
		});
	}
});

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
			throw new Error("Ocorreu algum erro.");
		}
		res.send(r);
	} catch (err) {
		res.send({
			erro: err.message,
		});
	}
});

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
		const { id, start, limit } = req.query;
		console.log(start, limit)
		let r = await getConsulta(id);
		for (let i = 0; i < r.length; i++) {
			let l = new Date(r[i].dataConsulta);
			const time = r[i].horaConsulta;
			const hour = time.slice(0, 2);
			const minute = Number(time.slice(3, 5));
			l.setHours(hour - 3, minute);
			const difference = new Date() - l;
			r[i].diff = difference;
		}
		if (r.length < 1) {
			throw new Error("Você não tem nenhuma consulta ainda.");
		} else {
			res.send(r); // retorno a array com limite para a paginação.
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

router.get("/api/medic/consulta/pendent/:doctorId", async (req, res) => {
	try {
		const { doctorId } = req.params;
		let r = await pendentConsult(doctorId);
		if (!r) throw new Error("Você não possui consultas pendentes");
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/consultas/:doctorId", async (req, res) => {
	try {
		const { doctorId } = req.params;
		let r = await allConsuts(doctorId);
		if (!r) throw new Error("Você não possui consultas pendentes");
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.get("/api/medic/LastAvaliation/:doctorId", async (req, res) => {
	try {
		const { doctorId } = req.params;
		let r = await ultimaAvaliacao(doctorId);
		if (!r) throw new Error("Você não fez nenhuma avaliação ainda");
		res.send(r[0]);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.put("/api/medic/account", async (req, res) => {
	try {
		const doctor = req.body;
		const r = await changeDoctor(doctor);
		res.status(201).send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
export default router;
