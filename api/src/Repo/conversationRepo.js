import { con } from "./connection.js"

export async function userConversations(userId) {
    const c = 
        `
            SELECT  id_conversa      conversationId,
                    id_medico        doctorId,
                    id_usuario       userId,
                    nm_conversa      conversation
              FROM  tb_conversa
             WHERE  id_usuario = ?
        `
    const [r] = await con.query(c, [userId])
    return r[0];
}

export async function doctorConversation(doctorId) {
    const c = 
        `
            SELECT  id_conversa      conversationId,
                    id_medico        doctorId,
                    id_usuario       userId,
                    nm_conversa      conversation
              FROM  tb_conversa
             WHERE  id_medico = ?
        `
    const [r] = await con.query(c, [doctorId])
    return r[0];
}

export async function createConversation(userId, doctorId) {
    const c =
        `
        INSERT INTO tb_conversa(id_usuario, id_medico) 
                    VALUES(?, ?)
        `
    const [r] = await con.query(c, [userId, doctorId])
    return r.insertId;
}