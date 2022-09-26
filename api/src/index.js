import express from "express";
import cors from "cors";
import "dotenv/config";
import userController from "./Controller/userController.js"
import medicController from "./Controller/medicController.js"
const router = express();
router.use(cors());
router.use(express.json());
router.use(userController);
router.use(medicController);
router.listen(process.env.PORT, () => console.log(`Server online on PORT: ${process.env.PORT}`));