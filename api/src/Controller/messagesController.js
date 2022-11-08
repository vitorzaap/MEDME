import { Router } from "express";
import { listMessage, sendMessage } from "../Repo/messagesRepo.js";
const router = Router();

router.get("/messages", async (req, res) => {
	try {
		const { conversation } = req.query;
        const r = await listMessage(Number(conversation));
        res.send(r)
	} catch (err) {
		res.send({
			erro: err.message,
		});
	}
});

router.post("/messages", async (req, res) => {
    try {
        const { conversation, type, senderId } = req.query
        const { message } = req.body;
        const r = await sendMessage(type, conversation, message, senderId)
        res.sendStatus(200);
    } catch (err) {
        res.send({
            erro: err.message
        })
    }
});

export default router;
