//importando o router para usar os endpoints e o serverHttp para rodar o servidor
import { router, httpServer } from "./WebSocket/socket.js";

//.env para a constante da porta
import "dotenv/config";

//endpoints
import userController from "./Controller/userController.js"
import medicController from "./Controller/medicController.js"
import conversationController from "./Controller/conversationController.js"
import messagesController from "./Controller/messagesController.js"

//usando os endpoints
router.use(userController);
router.use(medicController);
router.use(messagesController);
router.use(conversationController);

//subindo o servidor
httpServer.listen(process.env.PORT, () => console.log(`API running on PORT: ${process.env.PORT}`));