import { con } from "./connection.js"

export async function userLogin(email, pass){
    const c = 
        `
        SELECT * from tb_usuario
         WHERE ds_email = ?,
               ds_senha = ?
        `

        const [res] = con.query(c, [email, pass])
        return res;
}