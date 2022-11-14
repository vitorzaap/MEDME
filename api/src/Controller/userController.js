import { response, Router } from "express";
import { getUser, getMedics, userLogin, userSigIn, verifUserEmail, userAccept, getConsultas, addAvaliacao, changeUser, alterimage, addConversa, pendentConsult, ultimaAvaliacao } from "../Repo/userRepo.js";
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'storage/userImages' })

router.put("/api/user/:id/capa", upload.single('capa'), async (req, res) => {
	try{
		const { id } = 	req.params;
		const image  = 	req.file.path;
		const r = await alterimage(image, id)
		if(r != 1) 
			throw new Error('A imagem não pode ser salva.')

		res.status(204).send()
	} catch (err) {
		res.status(400).send({
			erro: err.message,
		});
	}
})

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
		console.log(id, situation)
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
		let add = 1
		let { id, start, limit } = req.query; // parametros start e end para definir o tamanho da array a ser retornada.
		let r = await getConsultas(id);
		for (let i = 0; i < r.length; i++) {
			let l = new Date(r[i].dataConsulta);
			const time = r[i].horaConsulta
			const hour = time.slice(0, 2)
			const minute = Number(time.slice(3, 5))			
			l.setHours(hour - 3, minute)
			const difference = new Date() - l;
			r[i].diff = difference;
			r[i].idConsultaUsuario = add;
			add++
		}
		if (r.length < 1) {
			throw new Error("Você não tem nenhuma consulta ainda.");
		} else {
			res.send(r.slice(Number(start), Number(start) + Number(limit))); // retorno a array com limite para a paginação.
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
router.get("/api/user/medics", async (req, res) => {
	try {
		let r = await getMedics();
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.put("/api/user/account", async (req, res) => {
	try {
		const user = req.body;
		const r = await changeUser(user);
			res.status(201).send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.get("/api/user/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const r = await getUser(id);
			res.status(200).send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.post("/api/user/conversa", async (req, res) => {
	try {
		const { medicID, userId } = req.body;
		let r = await addConversa(medicID, userId);
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.get("/api/user/consulta/pendent/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		let r = await pendentConsult(userId);
		if(!r) 
			throw new Error('Você não possui consultas pendentes')
		res.send(r);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
router.get("/api/user/LastAvaliation/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		let r = await ultimaAvaliacao(userId);
		if(!r) 
			throw new Error('Você não fez nenhuma avaliação ainda')
		res.send(r[0]);
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});
export default router;
