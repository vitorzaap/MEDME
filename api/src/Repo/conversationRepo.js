import { con } from "./connection.js";

export async function userConversations(userId) {
	const c = `
        SELECT  	id_conversa              conversationId,
                        tb_conversa.id_medico    doctorId,
                        tb_medico.nm_medico      doctorName,
                        tb_medico.ds_medico      doctorDesc,
                        id_usuario               userId
        FROM            tb_conversa
        INNER JOIN      tb_medico ON tb_conversa.id_medico = tb_medico.id_medico	
        WHERE           tb_conversa.id_usuario = ?;
        `;
	const [r] = await con.query(c, [userId]);
	return r;
}

export async function doctorConversation(doctorId) {
	const c = `
    SELECT  	id_conversa              conversationId,
    tb_conversa.id_usuario    doctorId,
    tb_usuario.nm_usuario     userName,
    tb_conversa.id_usuario               userId
        FROM      tb_conversa
INNER JOIN      tb_usuario ON tb_conversa.id_usuario = tb_usuario.id_usuario	
WHERE      tb_conversa.id_medico = ?;
        `;
	const [r] = await con.query(c, [doctorId]);
	return r;
}

export async function searchConversationbyId(conversationId) {
        const c = 
                `
                SELECT tb_medico.id_medico      id,
                       nm_medico                docName,
                       ds_medico                docDesc,
                       img_icon                 icon,
                       id_atuacao               atuation,
                       id_atuacao1              atuation1
                FROM   tb_conversa
                INNER JOIN tb_medico on tb_conversa.id_medico = tb_medico.id_medico
                WHERE id_conversa = ?;
                `
        const [r] = await con.query(c, [conversationId]);
        return r;
}

export async function createConversation(doctorId, userId) {
	const c = `
        INSERT INTO tb_conversa(id_medico, id_usuario) 
        VALUES(?, ?);
        `;
	const [r] = await con.query(c, [doctorId, userId]);
	return r.insertId;
}
