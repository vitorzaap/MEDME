import { api } from './configs.js';

export async function listConversations(doctorId, userId){
    const r = await api.get(`/conversation?doctorId=${doctorId}&userId=${userId}`)
    return r.data;
}

export async function joinConversation(userId, doctorId){
    const r = await api.post(`/conversation`, {
        userId: userId,
        doctorId: doctorId,
    });
    return r.data
}
