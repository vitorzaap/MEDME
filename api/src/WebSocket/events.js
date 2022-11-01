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
  socket.on("user_send_message", async (data) => {
    const r = await userSendMessages(data.conversationId, data.userId, data.message);
  });
  socket.on("doctor_send_message", async (data) => {
    const r = await doctorSendMessages(data.conversationId, data.doctorId, data.message);
  });
  socket.on("receive_message", async (data) => {
    const r = await listMessages(data.conversationId);
  });
});
