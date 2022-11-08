import "dotenv/config";
import { serverHttp, app } from "./WebSocket/socket.js";
import "./WebSocket/events.js"


//endpoints
import userController from "./Controller/userController.js"
import medicController from "./Controller/medicController.js"
import conversationController from "./Controller/conversationController.js"
import messagesController from "./Controller/messagesController.js"

//usando os endpoints
app.use(userController);
app.use(medicController);
app.use(messagesController);
app.use(conversationController);

//subindo o servidor
serverHttp.listen(5000, () => console.log(`API running on PORT: ${process.env.PORT}`));