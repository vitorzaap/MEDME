import { Router } from "express";

const router = Router();

router.get("/login", async (req, res) => {
	try {
		const 
	}
	catch (err) {
		res.status(406).send({
			erro: err.message
		});
	}
})
export default router;