import { Router } from "express";

const router = Router();

router.get("/api/test", async (req, res) => {
	try {
		res.send("Yeah, its working!");
	} catch (err) {
		res.status(401).send({
			erro: err.message,
		});
	}
});



export default router;