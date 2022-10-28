import { con } from "./connection.js";

export async function listMessages(conversationId) {
	const c = `
        SELECT      id_mensagem      messageId,
                    id_conversa      conversationId,
                    ds_mensagem      message,
                    dt_mensagem      messageDate,
                    id_medico        doctorId,
                    id_usuario       userId,
        FROM        tb_mensagem
        INNER JOIN  tb_usuario on tb_mensagem.id_usuario = tb_usuario.id_usuario
        INNER JOIN  tb_conversa on tb_mensagem.id_conversa = tb_conversa.id_conversa
        WHERE id_conversa = ?`;
	const [r] = await con.query(c, [conversationId]);
	return r;
}

export async function userSendMessages(conversationId, userId, message) {
	const date = new Date();
	const c = `
            INSERT INTO tb_mensagem(id_conversa, id_usuario, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`;
    const [r] = await con.query(c, [conversationId, userId, message, date])
    return r.affectedRows
}

export async function doctorSendMessages(conversationId, doctorId, message) {
	const date = new Date();
	const c = `
            INSERT INTO tb_mensagem(id_conversa, id_medico, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`;
    const [r] = await con.query(c, [conversationId, doctorId, message, date])
    return r.affectedRows
}
