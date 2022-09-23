import { Router } from "express";
import { medicLogin, novaConsulta, selecionarPaciente, selecionarAtuacao } from "../Repo/medicRepo.js";

const router = Router();

router.post("/api/medic/login", async (req, res) => {
	try {
		const medic = req.body;
		const r = await medicLogin(medic);
		if (!r) {
			throw new Error("Senha ou E-mail incorretos.")
		}
		else {
			res.status(201).send(r);
		}
		
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});

router.post("/api/medic/consulta", async (req, resp) => {
	try {
		const nova = req.body;
		const consulta = await novaConsulta(nova);
		resp.send(consulta);
	} catch (err) {
		resp.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/chat", async (req, resp) => {
	try{
		const id = req.query.id;
		console.log(id)
		const resposta = await selecionarPaciente(id)
			resp.send(resposta)
	} catch(err){
		resp.status(401).send({
			erro: err.message,
		});
	}
});

router.get("/api/medic/atuacao", async (req,resp) =>{
	try{

		const {id} = req.query
		const [resposta] = await selecionarAtuacao(id)
		resp.send(resposta)

	} catch(err){
		resp.status(401).send({
			erro: err.message,
		});
	}
})

export default router;
