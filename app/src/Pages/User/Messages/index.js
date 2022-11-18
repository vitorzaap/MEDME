import "./index.scss";
import "../../Common/common.scss";
import Cabecalho from "../../Components/Header/index.js";
import icon from "../../../assets/images/user-icon.svg";
import SendVector from "../../../assets/images/send-message-icon.svg";
import storage from "local-storage";
import { listConversation, getConversationInfoById } from "../../../api/conversationApi.js";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { searchImage } from "../../../api/medicApi";

const socket = io.connect("http://localhost:5000");

export default function Index() {
	const [message, setMessage] = useState("");
	const user = storage("userInfo");
	const [messages, setMessages] = useState([]);
	const [conversation, setConversation] = useState([]);
	const [conversationId, setConversationId] = useState(-1);
	const [doctorInfo, setDoctorInfo] = useState([]);
	const [selectedDoctor, setSelectedDoctor] = useState("")
	const [trim, setTrim] = useState();
	const navigate = useNavigate();
	const el = document.getElementById("chat-feed");
	if (!storage("userInfo")) {
		navigate("/login");
	}
	async function listUserConversation() {
		const r = await listConversation(null, user.id);
		setConversation(r);
	}

	async function searchById(id) {
		const r = await getConversationInfoById(id);
		console.log(r)
		setDoctorInfo(r);
	}

	async function submitMessage() {
		socket.emit("send_message", {
			conversationId: conversationId,
			type: 1,
			senderId: user.id,
			message: message,
		});
		socket.emit("receive_message", {
			conversationId: conversationId,
		}
		);
		setMessage("");
		
	}

	function messageSide(type) {
		if (type == 1) {
			return "msg-right";
		} else {
			return "msg-left";
		}
	}
	socket.on("receive_message", (data) => {
		console.log(data);
		setMessages(data);
		
	});
	document.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			const btn = document.querySelector("#send");
			btn.click();
		}
	});
	useEffect(() => {
		listUserConversation();
	}, []);
	useEffect(() => {
		if (el) {
			const bottom = el.scrollHeight
			el.scrollTop = bottom;
		}
	}, [messages])
	
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
									searchById(item.conversationId);
									socket.emit("receive_message", {
										conversationId: item.conversationId,
									});
									
								}}>
								<div className="icon-div">
									<img src={searchImage(item.icon)} alt="user icon" style={{borderRadius:'99px'}}/>
								</div>
								<div className="conversation-info">
									<h1 className="name">{item.doctorName[0].toUpperCase() + item.doctorName.slice(1)}</h1>
									<p className="doctor-description">{item.doctorDesc}</p>
								</div>
							</div>
						))}
					</div>
					<div className="div-message">
						<div className="message-header">
							<div className="div-message-header-icon">
								{doctorInfo.map(item => (
									item.icon
									? 	<img src={searchImage(item.icon)} alt="icon" width="70%" style={{borderRadius:'99px'}} />
									:	<img src={icon} alt="icon" width="70%" style={{borderRadius:'99px'}} />
								))}
							</div>
							<div className="div-message-header-name">
								{doctorInfo.map((item) => (
									<span>{item.docName[0].toUpperCase() + item.docName.slice(1)}</span>
								))}
							</div>
						</div>
						<div className="messages-div" id="chat-feed">
							{messages &&
								messages.map((item) => {
									return (
										<div className={messageSide(item.senderType)}>
											<div className="message-box">
												<p className="message-text">{item.message}</p>
											</div>
										</div>
									);
								})}
						</div>
						{conversationId != -1 && (
							<div className="div-input-send-message">
								<div className="send-message">
									<div className="div-send-message">
										<input type="text" className="send-message-input" value={message} placeholder="Digite uma mensagem" onChange={(e) => setMessage(e.target.value)} />
										{message && message.trim() && (
											<div id="send" className="send-icon-div" onClick={() => submitMessage()}>
												<img src={SendVector} alt="send-icon" className="send-icon-vector" />
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
