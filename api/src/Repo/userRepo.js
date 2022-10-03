import { con } from "./connection.js";

export async function userLogin(user) {
	const c = `
        SELECT 
        id_usuario  id,
        nm_usuario  name,
        sbr_usuario sobrenome,
        ds_email    email,
        ds_senha    senha
        from tb_usuario
         WHERE ds_email = ? AND
               ds_senha = ?
        `;
	const [res] = await con.query(c, [user.email, user.pass]);
	return res[0];
}

export async function verifUserEmail(email) {
	const c = `
        SELECT ds_email FROM tb_usuario WHERE ds_email = ?;
        `;
	const [res] = await con.query(c, [email]);
	return res[0];
}
export async function userSigIn(user) {
	const c = `
        INSERT INTO tb_usuario(nm_usuario, sbr_usuario, ds_email, ds_senha)
                VALUES(?, ?, ?, ?);
        `;
	const [res] = await con.query(c, [user.name, user.sobrenome, user.email, user.pass]);
	user.Id = res.insertId;
	return user;
}
export async function userAccept(id){
        const c = `UPDATE tb_consulta
        SET ds_situacao = 'RESPOSTA ACEITA'
        AND id_consulta = ?`
        const res = await con.query(c, [id])
        return res;
}