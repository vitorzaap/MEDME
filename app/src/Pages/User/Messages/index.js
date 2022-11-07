import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import DavidLester from "../../../assets/images/david.svg";
import LinhaSeparação from "../../../assets/images/linha-separação.svg";
import FileIcon from "../../../assets/images/file.svg";
import SendVector from "../../../assets/images/send-message-icon.svg";
import storage from "local-storage";
import {
  listConversation,
  getConversationInfoById,
} from "../../../api/conversationApi.js";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

export default function Index() {
  const [message, setMessage] = useState("");
  const user = storage("userInfo");
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [conversationId, setConversationId] = useState(1);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [name, setName] = useState("");
  async function listUserConversation() {
    const r = await listConversation(null, user.id);
    setConversation(r);
  }
  async function searchById(id) {
    const r = await getConversationInfoById(id);
    setDoctorInfo(r);
  }

  async function submitMessage() {
    socket.emit("user_send_message", {
      conversationId: conversationId,
      userId: user.id,
      message: message,
    });
  }

  socket.emit("receive_message", { conversationId: 1 });
  socket.on("receive_message", (data) => {
    setMessages(data);
  });

  useEffect(() => {
    listUserConversation();
  }, []);

  return (
    <main className="messages-main">
      <Cabecalho />
      <div className="messages-content">
        <div className="content">
          <div className="div-conversation">
            {conversation.map((item) => (
              <div
                className="conversation-column"
                onClick={() => {
                  setConversationId(item.conversationId);
                  console.log(conversationId);
                  searchById(item.conversationId);
                  socket.emit("receive_message", {
                    salaId: item.conversationId,
                  });
                }}
              >
                <div className="icon-div">
                  <img src={DavidLester} alt="user icon" />
                </div>
                <div className="conversation-info">
                  <h1 className="name">
                    {item.doctorName[0].toUpperCase() +
                      item.doctorName.slice(1)}
                  </h1>
                  <p className="doctor-description">{item.doctorDesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="div-message">
            <div className="message-header">
              <div className="div-message-header-icon">
                <img src={DavidLester} alt="icon" width="70%" />
              </div>
              <div className="div-message-header-name">
                {doctorInfo.map((item) => (
                  <span>
                    {item.docName[0].toUpperCase() + item.docName.slice(1)}
                  </span>
                ))}
              </div>
            </div>
            <div className="messages-div"></div>
            {conversationId != -1 && (
              <div className="div-input-send-message">
                <div className="send-message">
                  <div className="div-send-message">
                    <input
                      type="text"
                      className="send-message-input"
                      value={message}
                      placeholder="Digite uma mensagem"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {message && (
                      <div
                        className="send-icon-div"
                        onClick={() => submitMessage()}
                      >
                        <img
                          src={SendVector}
                          alt="send-icon"
                          className="send-icon-vector"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
