import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

//criando o servidor com express e usando o json e o CORS
const app = express();
app.use(express.json());
app.use(cors());

//configurando storage
app.use('/storage/userImages', express.static('storage/userImages'));

//criando o httpServer passando como parâmetro o server express
const serverHttp = http.createServer(app);

//definindo propriedades do cors para funcionamento correto
const io = new Server(serverHttp, {
	cors: {
		origin: ["http://localhost:3000", "http://localhost:3001"],
		methods: ["GET", "POST"],
	},
});

//exportando...
export { serverHttp, io, app };
