import { con } from "./connection.js";

export async function medicLogin(email, pass) {
	const c = `
        SELECT * from tb_medico
         WHERE ds_email = ?,
               ds_senha = ?
        `;
	const [res] = con.query(c, [email, pass]);
	return res;
}

export async function novaConsulta(consulta){
        const c = `
        INSERT INTO tb_consulta(id_medico, id_usuario, ds_consulta, dt_consulta, ds_plataforma, vl_preco, ds_link, ds_situacao)
			VALUES(?, ?, ?, ?, ?, ?, ?, 'RESPOSTA PENDENTE');
        `

        const [res] = await con.query(c, [consulta.medicoid, consulta.userid, consulta.descricao, consulta.hora, consulta.plataforma, consulta.preco, consulta.link, consulta.situacao]);

        consulta.id = res.insertId;

        return consulta
}
export async function listarConsulta()
