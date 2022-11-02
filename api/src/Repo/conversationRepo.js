import { con } from "./connection.js"

export async function userConversations(userId) {
    const c = 
        `
            SELECT  id_conversa      conversationId,
                    id_medico        doctorId,
                    id_usuario       userId
              FROM  tb_conversa
             WHERE  id_usuario = ?;
        `
    const [r] = await con.query(c, [userId])
    return r[0];
}

export async function doctorConversation(doctorId) {
    const c = 
        `
            SELECT  id_conversa      conversationId,
                    id_medico        doctorId,
                    id_usuario       userId
              FROM  tb_conversa
             WHERE  id_medico = ?;
        `
    const [r] = await con.query(c, [doctorId])
    return r[0];
}

export async function createConversation(doctorId, userId) {
    const c =
        `
        INSERT INTO tb_conversa(id_medico, id_usuario) 
        VALUES(?, ?);
        `
    const [r] = await con.query(c, [doctorId, userId])
    return r.insertId;
}