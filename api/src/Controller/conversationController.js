import { Router } from "express";
import { userConversations, doctorConversation,createConversation } from "../Repo/conversationRepo.js";

const router = Router();

router.get("/conversation", async (req, res) => {
	try {
		const { doctorId, userId } = req.query;
		if (doctorId && !userId) {
            const r = await doctorConversation(doctorId);
            if (!r || r == undefined) {
                throw new Error("Nenhum cliente criou uma conversa ainda.")
            }
            else {
                res.send(r);
            }
			
		} else if (userId && !doctorId) {
            const r = await userConversations(userId);
            if (!r || r == undefined) {
                throw new Error("Você não tem nenhuma conversa.")
            }
            else {
                res.send(r);
            }
			
        }
        else if (userId && doctorId) {
            throw new Error("Você não pode passar os 2 parâmetros ao mesmo tempo.")
        }
    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
});

router.post("/conversation", async (req, res) => {
    try {
        const { doctorId, userId } = req.query;
        console.log(doctorId, userId)
        const r = await createConversation(userId, doctorId)
        res.sendStatus(200)
    }
    catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

export default router;
