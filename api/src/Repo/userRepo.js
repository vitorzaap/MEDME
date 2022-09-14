import { con } from "./connection.js";

export async function userLogin(email, pass) {
	const c = `
        SELECT 
        id_usuario  id,
        ds_email    email,
        ds_senha    senha
        from tb_usuario
         WHERE ds_email = ? AND
               ds_senha = ?
        `;
    const [res] = await con.query(c, [email, pass]);
	return res[0];
}
