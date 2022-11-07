import { io } from "./socket";
import {
  createConversation,
  userConversations,
  doctorConversation,
} from "../Repo/conversationRepo.js";
import {
  listMessages,
  userSendMessages,
  doctorSendMessages,
} from "../Repo/messagesRepo.js";

io.on("connection", (socket) => {
  //recebendo mensagens do usuário e enviando para a API salvar no banco 
  socket.on("user_send_message", async (data) => {
    const r = await userSendMessages(data.conversationId, data.userId, data.message);
  });

  //recebendo mensagens do médico e enviando para a API salvar no banco
  socket.on("doctor_send_message", async (data) => {
    const r = await doctorSendMessages(data.conversationId, data.doctorId, data.message);
  });

  //enviando as mensagens para os usuários de uma conversa (id)
  socket.on("receive_message", async (data) => {
    const r = await listMessages(data.conversationId);
    console.log(data);
    socket.emit("receive_message", r)
  });
});
