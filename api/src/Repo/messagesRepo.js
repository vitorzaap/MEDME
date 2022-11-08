import { con } from "./connection.js";

export async function listMessage(conversationId) {
  const c = 
    `
    SELECT id_mensagem			      id,
           id_typeOfSender		    senderType,
           ds_mensagem			      message,
           dt_mensagem			      messageDate,
           id_sender			        senderId
      FROM tb_mensagem
     WHERE id_conversa = ?
     ORDER BY dt_mensagem;
    `
  const [r] = await con.query(c, [conversationId])
  return r;
}

export async function sendMessage(type, conversationId, message, senderId) {
  const date = new Date();
  const c = `
  INSERT INTO tb_mensagem(id_typeOfSender, id_conversa, ds_mensagem, dt_mensagem, id_sender)
              VALUES(?, ?, ?, ?, ?);`;
  const [r] = await con.query(c, [type, conversationId, message, date, senderId]);
  return r.affectedRows;
}
