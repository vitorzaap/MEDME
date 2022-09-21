import { Router } from "express";
import { medicLogin , novaConsulta } from "../Repo/medicRepo.js";

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

router.post("/api/medic/consulta" , async (req, resp) =>{
	try{

		const nova = req.body;

		const consulta = await novaConsulta(nova);
		resp.send(consulta)

	} catch(err){

	}
})

export default router;
