import { con } from "./connection.js"

export async function medicLogin(email, pass){
    const c = 
        `
        SELECT * from tb_medico
         WHERE ds_email = ?,
               ds_senha = ?
        `

        const [res] = con.query(c, [email, pass])
        return res;
}