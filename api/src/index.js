import express from "express";
import cors from "cors";
import "dotenv/config";
import clientController from "./Controller/clientController.js"

const router = express();
router.use(cors());
router.use(express.json());
router.use(clientController);

router.listen(process.env.PORT, () => console.log(`Server online on PORT: ${process.env.PORT}`));

