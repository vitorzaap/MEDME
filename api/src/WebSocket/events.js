import { io } from "./socket.js";
import { sendMessage, listMessage } from "../Repo/messagesRepo.js"

io.on("connection", async (socket) => {

  //recebendo mensagens e enviando para o banco
  socket.on("send_message", async (data) => {
    const r = await sendMessage(data.type, data.conversationId, data.message, data.senderId)
  })

  //listando todas as mensagens para os usuários da conversa
  socket.on("receive_message", async (data) => {
    const r = await listMessage(data.conversationId)
    socket.emit("receive_message", r)
  })
});
