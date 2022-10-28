import http from 'http';
import { Server } from 'socket.io';
import express from "express";
import cors from "cors";

//criando o servidor com express e usando o json e o CORS
const router = express();
router.use(express.json());
router.use(cors());

//criando o httpServer passando como parâmetro o server express
const httpServer = http.createServer(router);


//definindo propriedades do cors para funcionamento correto
const io = new Server(httpServer, {
    cors:{
        origin: "http://localhost:3000"
    }
})

//exportando...
export { router, io, httpServer }
