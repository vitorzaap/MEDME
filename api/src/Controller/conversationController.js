import { Router } from "express";
import { userConversations, doctorConversation,createConversation, searchConversationbyId } from "../Repo/conversationRepo.js";

const router = Router();
router.get('/conversation/search', async (req, res) => {
    try {
        const { id } = req.query;
        const r = await searchConversationbyId(id);
        res.send(r)
    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})
router.get("/conversation", async (req, res) => {
	try {
        const { doctorId, userId } = req.query;
        if (!doctorId && !userId) {
            throw new Error("você não passou nenhum parâmetro.")
        }
		if (doctorId && !userId) {
            const r = await doctorConversation(Number(doctorId));
            if (!r || r == undefined) {
                throw new Error("Nenhum cliente criou uma conversa ainda.")
            }
            else {
                res.send(r);
            }
			
		} else if (userId && !doctorId) {
            const r = await userConversations(Number(userId));
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
        const r = await createConversation(Number(doctorId), Number(userId))
        res.sendStatus(200)
    }
    catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

export default router;
