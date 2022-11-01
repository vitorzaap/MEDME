import { Router } from "express";
import { listMessages, userSendMessages, doctorSendMessages } from "../Repo/messagesRepo.js";
const router = Router();

router.get("/messages", async (req, res) => {
	try {
		const { conversation } = req.query;
		const r = await listMessages(conversation);
		if(r.length < 1){
            throw new Error('Esta conversa não tem nenhuma mensagem!')
        }
        else{
            res.send(r);
        }
	} catch (err) {
		res.send({
			erro: err.message,
		});
	}
});

router.post("/messages/:conversation", async (req, res) => {
    try {
        const { conversation } = req.params;
        const { doctorId, userId } = req.query
        const { message } = req.body;
        if (doctorId && !userId) {
            const r = await doctorSendMessages(conversation, doctorId, message)
            res.send(r)
        }
        else if (userId && !doctorId) {
            const r = await userSendMessages(conversation, userId, message)
            res.send(r)
        }
    } catch (err) {
        res.send({
            erro: err.message
        })
    }
});

export default router;
