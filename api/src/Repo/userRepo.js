import { con } from "./connection.js";

export async function userLogin(email, pass) {
	const c = `
        SELECT * from tb_usuario
         WHERE ds_email = ? AND
               ds_senha = ?
        `;

    const [res] = await con.query(c, [email, pass]);
    console.log(res);
	return res;
}
