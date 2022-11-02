import { Router } from "express";
import { listUserMessages, listDoctorMessages, userSendMessages, doctorSendMessages } from "../Repo/messagesRepo.js";
const router = Router();

router.get("/user/messages", async (req, res) => {
	try {
		const { conversation } = req.query;
        const r = await listUserMessages(Number(conversation));
        res.send(r)
	} catch (err) {
		res.send({
			erro: err.message,
		});
	}
});

router.get("/doctor/messages", async (req, res) => {
	try {
		const { conversation } = req.query;
        const r = await listDoctorMessages(Number(conversation));
        res.send(r)
	} catch (err) {
		res.send({
			erro: err.message,
		});
	}
});

router.post("/messages", async (req, res) => {
    try {
        const { conversation, doctorId, userId } = req.query
        const { message } = req.body;
        if (doctorId && !userId) {
            const r = await doctorSendMessages(Number(conversation), Number(doctorId), message)
            res.sendStatus(200)
        }
        else if (userId && !doctorId) {
            const r = await userSendMessages(Number(conversation), Number(userId), message)
            res.sendStatus(200)
        }
    } catch (err) {
        res.send({
            erro: err.message
        })
    }
});

export default router;
