import { con } from "./connection.js";

export async function listUserMessages(conversationId) {
  const c = `
             SELECT     	id_mensagem     			               messageId,
                          tb_mensagem_usuario.id_conversa      conversationId,
                          ds_mensagem     			               message,
                          dt_mensagem      			               messageDate,
                          tb_mensagem_usuario.id_usuario       userId
              FROM        tb_mensagem_usuario
        INNER JOIN        tb_usuario ON tb_mensagem_usuario.id_usuario = tb_usuario.id_usuario
        INNER JOIN        tb_conversa ON tb_mensagem_usuario.id_conversa = tb_conversa.id_conversa
             WHERE        tb_mensagem_usuario.id_conversa = ?;`;
  const [r] = await con.query(c, [conversationId]);
  return r;
}

export async function listDoctorMessages(conversationId) {
  const c = `
             SELECT     	id_mensagem     			               messageId,
                          tb_mensagem_medico.id_conversa       conversationId,
                          ds_mensagem     			               message,
                          dt_mensagem      			               messageDate,
                          tb_mensagem_medico.id_medico        doctorId
              FROM        tb_mensagem_medico
        INNER JOIN        tb_medico ON tb_mensagem_medico.id_medico = tb_medico.id_medico
        INNER JOIN        tb_conversa ON tb_mensagem_medico.id_conversa = tb_conversa.id_conversa
             WHERE        tb_mensagem_medico.id_conversa = ?;`;
  const [r] = await con.query(c, [conversationId]);
  return r;
}

export async function userSendMessages(conversationId, userId, message) {
  const date = new Date();
  const c = `
            INSERT INTO tb_mensagem_usuario(id_conversa, id_usuario, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`;
  const [r] = await con.query(c, [conversationId, userId, message, date]);
  return r.affectedRows;
}

export async function doctorSendMessages(conversationId, doctorId, message) {
  const date = new Date();
  const c = `
            INSERT INTO tb_mensagem_medico(id_conversa, id_medico, ds_mensagem, dt_mensagem)
                        VALUES(?, ?, ?, ?)`;
  const [r] = await con.query(c, [conversationId, doctorId, message, date]);
  return r.affectedRows;
}
