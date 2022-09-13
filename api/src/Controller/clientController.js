import { Router } from "express";
import { userLogin } from "../Repo/userRepo.js";
const router = Router();

router.post("/api/user/login", async (req, res) => {
  try {
    const [email, pass] = req.body;
    res.send(await userLogin(email, pass));
  } catch (err) {
    res.status(401).send({
      erro: err.message,
    });
  }
});

export default router;
