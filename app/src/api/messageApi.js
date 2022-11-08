import { api } from "./configs.js";

export async function listMessages(conversationId){
    const r = api.get(`/messages?conversation=${conversationId}`)
    return r.data
}

export default function sendMessage(conversationId, type, senderId, message){
    const r = api.post(`/message?conversation=${conversationId}&type=${type}&senderId=${senderId}`, {
        message: message,
    });
    return r.data
}