import { api } from "./configs.js";

export async function listMessages(conversationId){
    const r = api.get(`/messages?conversation=${conversationId}`)
    return r.data
}

export default function userSendMessage(conversationid, doctorId, userId, message){
    const r = api.post(`/message/${conversationid}?doctorId=${doctorId}&userId=${userId}`, {
        message: message,
    });
    return r.data
}